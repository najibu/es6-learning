import babel from 'rollup-plugin-babel';

export default {
  entry: './src/main.js',
  dest: './output/main.js',
  plugins: [ babel()
  ]
};
