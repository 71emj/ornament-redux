import resolve from 'rollup-plugin-node-resolve';
import builtins from 'rollup-plugin-node-builtins';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
    input: './dist/index.js',
    output: [
        {
            file: './dist/bundles/redux.umd.js',
            format: 'umd',
            sourcemap: true,
            name: 'redux',
            globals: {
                'reflect-metadata': 'reflect-metadata',
                'redux': 'redux',
                '@ornament/di': '@ornament/di',
                'rxjs': 'Rx',
                'rxjs/operators': 'Rx'
            }
        },
        {
            file: './dist/bundles/redux.es.js',
            format: 'es',
            sourcemap: true,
            name: 'redux',
            globals: {
                'reflect-metadata': 'reflect-metadata',
                'redux': 'redux',
                '@ornament/di': '@ornament/di',
                'rxjs': 'Rx',
                'rxjs/operators': 'Rx'
            }
        }
    ],
    plugins: [
        resolve({
            preferBuiltins: true
        }),
        builtins(),
        peerDepsExternal()
    ],
    external: [
        '@ornament/di',
        'rxjs'
    ]
}