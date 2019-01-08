import { combineReducers, createStore } from "redux";
import { RxStore } from "./store";
import { Actions } from "../effects/actions";
import { Dispatcher } from "./dispatcher";
import { ReducerMap, RxStoreStruct } from "../model";

export class RxStoreCreator {

    public static create<T>(reducers: ReducerMap<T>): RxStoreStruct<T> {
        const rootReducer = combineReducers(reducers);
        const store = createStore(rootReducer);
        const dispatcher = new Dispatcher(store);
        return {
            store: new RxStore<T>(store, dispatcher),
            actions: new Actions(dispatcher)
        };
    }

}