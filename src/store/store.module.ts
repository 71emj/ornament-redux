import { AbstractModule, DiContainer, Module } from "@ornament/di"
import { Actions } from "../effects/actions";
import { ReducerMap } from "../model/rx-store.model";
import { RxStoreCreator } from "./creator";
import { RxStore } from "./store";

@Module
export class StoreModule<T = any> implements AbstractModule {

    private static instance: StoreModule<any>;
    private readonly _store: RxStore<T>;
    private readonly _actions: Actions;

    public static forRoot<T>(reducers: ReducerMap<T>): StoreModule<T> {
        if (!this.instance) {
            this.instance = new StoreModule(reducers);
        }
        return this.instance;
    }

    private constructor(
        private _reducers: ReducerMap<T>
    ) {
        const { store, actions } = RxStoreCreator.create(_reducers);
        this._store = store;
        this._actions = actions;
    }

    public initiate(container: DiContainer): boolean | void {
        try {
            container.registerProviders(this._store);
            container.registerProviders(this._actions);
            return true;
        } catch (e) {
            throw e;
        }
    }

}
