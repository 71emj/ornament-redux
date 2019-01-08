import { Observable } from "rxjs";
import { Action } from "redux";
import { Dispatcher } from "../store/dispatcher";
import { ofType } from "../internal/oftype";
import { Injectable } from "@ornament/di"

@Injectable()
export class Actions extends Observable<Action<string>> {

    constructor(
        private _actionsSubject: Dispatcher
    ) {
        super();
        this.source = _actionsSubject;
    }

    public ofType(...actionTypes: Array<string>): Observable<Action<string>> {
        return this.pipe(ofType(...actionTypes));
    }

}