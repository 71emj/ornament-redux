import { EffectOptions, EffectMetadata } from "../model";
import { EFFECT } from "./token";

export function Effect(options: EffectOptions = { dispatch: true }): PropertyDecorator {
    return (target: object, propertyName: string) => {
        const metadatas: Array<EffectMetadata> = Reflect.getMetadata(EFFECT, target) || [];
        const metadata: EffectMetadata = { propertyName, dispatch: options.dispatch };
        Reflect.defineMetadata(EFFECT, [ ...metadatas, metadata ], target);
    }
}