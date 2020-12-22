import resolve from '@rollup/plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'src/package/react-waves.js',
  output: [
    {
      file: 'src/app/modules/react-waves.js',
      format: 'cjs',
      exports: 'default',
    },
    {
      file: 'src/app/modules/react-waves.min.js',
      format: 'cjs',
      exports: 'default',
      plugins: [terser()],
    },
  ],
  plugins: [
    resolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules',
      },
    }),
    postcss({ modules: true, plugins: [require('autoprefixer')] }),
    babel({ babelHelpers: 'bundled' }),
    commonjs(),
  ],
  external: [],
}
