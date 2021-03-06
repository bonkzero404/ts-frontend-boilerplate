module.exports = {
  presets: [
		'@babel/env',
		'@babel/preset-react',
		'@babel/preset-typescript'
	],
  plugins: [
		'@babel/proposal-class-properties',
		'@babel/proposal-object-rest-spread',
		'react-hot-loader/babel'
	]
}
