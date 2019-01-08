import { Observable, OperatorFunction } from "rxjs";
import { _selectImpl } from "./selectImpl";
import { Function } from "../model";

export interface Selector<T> {
    <k1 extends keyof T>(k: keyof T): Observable<T[k1]>;
    <k1 extends keyof T, k2 extends keyof T[k1]>(k1: k1, k2: k2): Observable<T[k1][k2]>;
    <k1 extends keyof T, k2 extends keyof T[k1], k3 extends keyof T[k1][k2]>(k1: k1, k2: k2, k3: k3): Observable<T[k1][k2][k3]>;
    <k1 extends keyof T, k2 extends keyof T[k1], k3 extends keyof T[k1][k2], k4 extends keyof T[k1][k2][k3]>(k1: k1, k2: k2, k3: k3, k4: k4): Observable<T[k1][k2][k3][k4]>;
    <k1 extends keyof T, k2 extends keyof T[k1], k3 extends keyof T[k1][k2], k4 extends keyof T[k1][k2][k3], k5 extends keyof T[k1][k2][k3][k4]>(k1: k1, k2: k2, k3: k3, k4: k4, k5: k5): Observable<T[k1][k2][k3][k4][k5]>;
    <k1 extends keyof T, k2 extends keyof T[k1], k3 extends keyof T[k1][k2], k4 extends keyof T[k1][k2][k3], k5 extends keyof T[k1][k2][k3][k4], k6 extends keyof T[k1][k2][k3][k4][k5]>(k1: k1, k2: k2, k3: k3, k4: k4, k5: k5, k6: k6): Observable<T[k1][k2][k3][k4][k5][k6]>;
    <k1 extends keyof T, k2 extends keyof T[k1], k3 extends keyof T[k1][k2], k4 extends keyof T[k1][k2][k3], k5 extends keyof T[k1][k2][k3][k4], k6 extends keyof T[k1][k2][k3][k4][k5], k7 extends keyof T[k1][k2][k3][k4][k5][k6]>(k1: k1, k2: k2, k3: k3, k4: k4, k5: k5, k6: k6, k7: k7): Observable<T[k1][k2][k3][k4][k5][k6][k7]>;
    <k1 extends keyof T, k2 extends keyof T[k1], k3 extends keyof T[k1][k2], k4 extends keyof T[k1][k2][k3], k5 extends keyof T[k1][k2][k3][k4], k6 extends keyof T[k1][k2][k3][k4][k5], k7 extends keyof T[k1][k2][k3][k4][k5][k6], k8 extends keyof T[k1][k2][k3][k4][k5][k6][k7]>(k1: k1, k2: k2, k3: k3, k4: k4, k5: k5, k6: k6, k7: k7, k8: k8): Observable<T[k1][k2][k3][k4][k5][k6][k7][k8]>;
    <k1 extends keyof T, k2 extends keyof T[k1], k3 extends keyof T[k1][k2], k4 extends keyof T[k1][k2][k3], k5 extends keyof T[k1][k2][k3][k4], k6 extends keyof T[k1][k2][k3][k4][k5], k7 extends keyof T[k1][k2][k3][k4][k5][k6], k8 extends keyof T[k1][k2][k3][k4][k5][k6][k7], k9 extends keyof T[k1][k2][k3][k4][k5][k6][k7][k8]>(k1: k1, k2: k2, k3: k3, k4: k4, k5: k5, k6: k6, k7: k7, k8: k8, k9: k9): Observable<T[k1][k2][k3][k4][k5][k6][k7][k8][k9]>;
    <k1 extends keyof T, k2 extends keyof T[k1], k3 extends keyof T[k1][k2], k4 extends keyof T[k1][k2][k3], k5 extends keyof T[k1][k2][k3][k4], k6 extends keyof T[k1][k2][k3][k4][k5], k7 extends keyof T[k1][k2][k3][k4][k5][k6], k8 extends keyof T[k1][k2][k3][k4][k5][k6][k7], k9 extends keyof T[k1][k2][k3][k4][k5][k6][k7][k8], k10 extends keyof T[k1][k2][k3][k4][k5][k6][k7][k8][k9]>(k1: k1, k2: k2, k3: k3, k4: k4, k5: k5, k6: k6, k7: k7, k8: k8, k9: k9, k10: k10): Observable<T[k1][k2][k3][k4][k5][k6][k7][k8][k9][k10]>;
    <R>(selectorFn: Function<T, R>): Observable<R>;
}

export function select<T, R>(selectorFn: Function<T, R>): OperatorFunction<T, R>;
export function select<T, k1 extends keyof T>(k: keyof T): OperatorFunction<T, T[k1]>;
export function select<T, k1 extends keyof T, k2 extends keyof T[k1] > (k1: k1, k2: k2): OperatorFunction<T, T[k1][k2]>;
export function select<T, k1 extends keyof T, k2 extends keyof T[k1], k3 extends keyof T[k1][k2] > (k1: k1, k2: k2, k3: k3): OperatorFunction<T, T[k1][k2][k3]>;
export function select<T, k1 extends keyof T, k2 extends keyof T[k1], k3 extends keyof T[k1][k2], k4 extends keyof T[k1][k2][k3] > (k1: k1, k2: k2, k3: k3, k4: k4): OperatorFunction<T, T[k1][k2][k3][k4]>;
export function select<T, k1 extends keyof T, k2 extends keyof T[k1], k3 extends keyof T[k1][k2], k4 extends keyof T[k1][k2][k3], k5 extends keyof T[k1][k2][k3][k4] > (k1: k1, k2: k2, k3: k3, k4: k4, k5: k5): OperatorFunction<T, T[k1][k2][k3][k4][k5]>;
export function select<T, k1 extends keyof T, k2 extends keyof T[k1], k3 extends keyof T[k1][k2], k4 extends keyof T[k1][k2][k3], k5 extends keyof T[k1][k2][k3][k4], k6 extends keyof T[k1][k2][k3][k4][k5] > (k1: k1, k2: k2, k3: k3, k4: k4, k5: k5, k6: k6): OperatorFunction<T, T[k1][k2][k3][k4][k5][k6]>;
export function select<T, k1 extends keyof T, k2 extends keyof T[k1], k3 extends keyof T[k1][k2], k4 extends keyof T[k1][k2][k3], k5 extends keyof T[k1][k2][k3][k4], k6 extends keyof T[k1][k2][k3][k4][k5], k7 extends keyof T[k1][k2][k3][k4][k5][k6] > (k1: k1, k2: k2, k3: k3, k4: k4, k5: k5, k6: k6, k7: k7): OperatorFunction<T, T[k1][k2][k3][k4][k5][k6][k7]>;
export function select<T, k1 extends keyof T, k2 extends keyof T[k1], k3 extends keyof T[k1][k2], k4 extends keyof T[k1][k2][k3], k5 extends keyof T[k1][k2][k3][k4], k6 extends keyof T[k1][k2][k3][k4][k5], k7 extends keyof T[k1][k2][k3][k4][k5][k6], k8 extends keyof T[k1][k2][k3][k4][k5][k6][k7] > (k1: k1, k2: k2, k3: k3, k4: k4, k5: k5, k6: k6, k7: k7, k8: k8): OperatorFunction<T, T[k1][k2][k3][k4][k5][k6][k7][k8]>;
export function select<T, k1 extends keyof T, k2 extends keyof T[k1], k3 extends keyof T[k1][k2], k4 extends keyof T[k1][k2][k3], k5 extends keyof T[k1][k2][k3][k4], k6 extends keyof T[k1][k2][k3][k4][k5], k7 extends keyof T[k1][k2][k3][k4][k5][k6], k8 extends keyof T[k1][k2][k3][k4][k5][k6][k7], k9 extends keyof T[k1][k2][k3][k4][k5][k6][k7][k8] > (k1: k1, k2: k2, k3: k3, k4: k4, k5: k5, k6: k6, k7: k7, k8: k8, k9: k9): OperatorFunction<T, T[k1][k2][k3][k4][k5][k6][k7][k8][k9]>;
export function select<T, k1 extends keyof T, k2 extends keyof T[k1], k3 extends keyof T[k1][k2], k4 extends keyof T[k1][k2][k3], k5 extends keyof T[k1][k2][k3][k4], k6 extends keyof T[k1][k2][k3][k4][k5], k7 extends keyof T[k1][k2][k3][k4][k5][k6], k8 extends keyof T[k1][k2][k3][k4][k5][k6][k7], k9 extends keyof T[k1][k2][k3][k4][k5][k6][k7][k8], k10 extends keyof T[k1][k2][k3][k4][k5][k6][k7][k8][k9] > (k1: k1, k2: k2, k3: k3, k4: k4, k5: k5, k6: k6, k7: k7, k8: k8, k9: k9, k10: k10): OperatorFunction<T, T[k1][k2][k3][k4][k5][k6][k7][k8][k9][k10]>;
export function select<T, R>(selectorFn: Function<T, R> | keyof T, ...selectors: Array<any>): OperatorFunction<T, R> {
    return _selectImpl(selectorFn, ...selectors);
}