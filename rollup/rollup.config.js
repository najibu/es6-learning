import buble from 'rollup-plugin-buble';

export default {
  entry: 'src/main.js',
  plugins: [buble()],
  dest: 'src/main.dist.js'
}
