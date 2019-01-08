import { Injectable } from "@ornament/di"
import { Action, Store } from "redux";
import { BehaviorSubject, Observable, Observer } from "rxjs";
import { Selector } from "../internal/select";
import { _selectImpl } from "../internal/selectImpl";
import { Dispatcher } from "./dispatcher";
import { Function } from "../model";

@Injectable()
export class RxStore<T> extends Observable<T> implements Observer<Action<string>> {
   
    private readonly _rxstore: BehaviorSubject<T>;

    constructor(
        private _store: Store<T>,
        private _dispatcher: Dispatcher
    ) {
        super();
        this._rxstore = new BehaviorSubject(this._store.getState());
        this._store.subscribe(() => {
            this._rxstore.next(this._store.getState())
        });
        this.source = this._rxstore;
    }

    public select: Selector<T> = <R>(
        selectorFn: Function<T, R> | keyof T, 
        ...selectors: Array<string>
    ) => this.pipe(_selectImpl(selectorFn, ...selectors));

    public next(action: Action<string>): void {
        this._dispatcher.dispatch(action);
    }

    public dispatch(action: Action<string>): void {
        this._dispatcher.dispatch(action);
    }

    public error(err: any): void {
        this._dispatcher.error(err);
    }
    
    public complete(): void {
        // this._rxstore.complete();
        // this._dispatcher.complete();
    }

}
