import { OperatorFunction, pipe } from "rxjs";
import { map, pluck, distinctUntilChanged } from "rxjs/operators";
import { Function } from "../model";

export function _selectImpl<T, R>(selectorFn: Function<T, R> | keyof T, ...selectors: Array<any>): OperatorFunction<T, R> {
    let mapResult: OperatorFunction<T, R>;
    if ('function' === typeof(selectorFn)) {
        mapResult = map.call(this, selectorFn);
    } else if ('string' === typeof(selectorFn)) {
        mapResult = pluck.call(this, selectorFn, ...selectors);
    } else {
        throw new TypeError(
            `Unexpected type ${typeof(selectorFn)} in select operator, ` + 
            `expect 'string' or 'function'`
        );
    }
    return pipe(mapResult, distinctUntilChanged());
}