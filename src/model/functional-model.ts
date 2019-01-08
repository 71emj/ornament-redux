export type UnaryFunction<T> = (t: T) => T;
export type Function<T, R> = (t: T) => R;
export type Supplier<R> = () => R;