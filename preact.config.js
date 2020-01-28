const netlifyPlugin = require('preact-cli-plugin-netlify');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');

export default function (config) {
  netlifyPlugin(config);

  config.plugins.push(new ImageminPlugin({
    from: './build/assets/**',
    pngquant: {
      quality: '60'
    },
    plugins: [
			imageminMozjpeg({
				quality: 60,
				progressive: true
			})
		]
  }));

}