import { RxStore } from "../store/store";
import { Actions } from "../effects/actions";
import { Reducer } from "redux";

export type ServiceType = Function | object | Object;

export type ReducerMap<T> = {
    [k in keyof T]: Reducer
}

export interface RxStoreStruct<T> {
    actions: Actions,
    store: RxStore<T>
}

export interface EffectOptions {
    dispatch: boolean;
}

export interface EffectMetadata {
    propertyName: string;
    dispatch: boolean
}