import { Action } from "redux";
import { Observable } from "rxjs";
import { filter } from "rxjs/operators";
import { UnaryFunction } from "../model";

export function ofType(...actionTypes: Array<string>): UnaryFunction<Observable<Action<string>>> {
    return filter.call(this, action => actionTypes.includes(action.type));
}


