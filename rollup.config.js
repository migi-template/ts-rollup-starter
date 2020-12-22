import { terser } from "rollup-plugin-terser";
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

export default {
  input: 'src/main.ts',

  output: [
    {
      file: pkg.module,
      format: 'es'
    },
    {
      name: 'example',
      file: pkg.broswer,
      format: 'umd'
    },
    {
      file: pkg.main,
      format: 'cjs'
    }
  ],
  plugins: [
    typescript({
      tsconfig: 'tsconfig.json'
    }),
    terser()
  ]
}
