import { BehaviorSubject } from "rxjs";
import { Action, Store } from "redux";
import { STORE_INIT } from "./token";

/**
 * @description Cannot support action as Symbol due to limitation of redux
 */
export class Dispatcher extends BehaviorSubject<Action<string>> {

    constructor(
        private _store: Store
    ) {
        super({ type: STORE_INIT });
    }

    public dispatch(action: Action<string>): void {
        this._store.dispatch({ ...action });
        this.next(action);
    }

}
