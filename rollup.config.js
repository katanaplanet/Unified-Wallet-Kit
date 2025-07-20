import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import { nodeExternals } from 'rollup-plugin-node-externals';
import pkg from './package.json' assert { type: 'json' };

const config = {
  name: 'UnifiedWallet',
  extensions: ['.ts', '.tsx', '.js', '.jsx'],
};

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: 'dist/index.esm.js',
      format: 'es',
      sourcemap: true,
    },
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    }
  ],
  plugins: [
    nodeExternals({
      exclude: /^react-use/,
    }),
    nodeResolve({ extensions: config.extensions }),
    commonjs(),
    babel({
      extensions: config.extensions,
      include: ['src/**/*'],
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
  ],
};
