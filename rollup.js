var rollup = require('rollup');
var babel = require('rollup-plugin-babel');

rollup.rollup({
  entry: './src/client/index.js',
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
})
.then(function (bundle) {
  bundle.write({
    dest: "lib/client/bundle-rollup.js",
    format: "umd"
  });
});
