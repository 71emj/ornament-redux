import { AbstractModule, DiContainer, Init, Inject, Module, ServiceType } from "@ornament/di"
import { merge, Observable, Subscription } from "rxjs";
import { RxStore } from "../store/store";
import { _mergeEffects } from "./effects-util";

@Module
export class EffectsModule<T = any> extends Subscription implements AbstractModule {
    
    private static moduleInstance: EffectsModule<any>;
    
    @Inject()
    private readonly _store: RxStore<T>;
    private _container: DiContainer;

    public static forRoot<T>(services: Array<ServiceType>): EffectsModule<T> {
        if (!this.moduleInstance) {
            this.moduleInstance = new EffectsModule(services);
        }
        return this.moduleInstance;
    }

    private constructor(
        private _services: Array<ServiceType>
    ) { 
        super();
    }
    
    public initiate(container: DiContainer): boolean | void {
        try {
            this._container = container;
            return true;
        } catch (e) {
            throw e;
        }
    }

    @Init
    public registerEffects(): void {
        const instances = this._services.map(service => this._container.registerService(service));
        const serviceObservables: Array<Observable<any>> = instances.map(_mergeEffects);
        const observable = merge(...serviceObservables);
        this.add(observable.subscribe(this._store));
    }

}