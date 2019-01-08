import { Observable, merge } from "rxjs";
import { ignoreElements } from "rxjs/operators";
import { EffectMetadata } from "../model";
import { EFFECT } from "./token";
import { ServiceType } from "@ornament/di"

export function _mergeEffects(service: ServiceType): Observable<any> {
    const observables: Array<Observable<any>> = _getMetadatas(service)
        .map(metadata => {
            const property = service[metadata.propertyName]
            const observable = 'function' === typeof(property)
                ? property() : property;
            if (!metadata.dispatch) {
                return observable.pipe(ignoreElements());
            }
            return observable;
        });
    return merge(...observables);
}

function _getMetadatas(service: ServiceType): Array<EffectMetadata> {
    const target: ServiceType = Object.getPrototypeOf(service);
    return Reflect.getMetadata(EFFECT, target) || [];
}