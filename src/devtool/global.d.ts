import { Supplier } from "../model";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__: Supplier<any>;
    }
}
 