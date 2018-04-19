let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');

mix.sass('./app.scss', './public/css')
	.options({
		processCssUrls: false,
		postCss: [ tailwindcss('./tailwind.js') ],
	});

mix.browserSync({
		proxy: 'pwic.local',
		files: [
            './public/**/*.+(html|php)'
        ],
	})

//let buildPath = 'build/'


// mix.setPublicPath('public')
  // .browserSync({
  //   proxy: 'pwic.local/',
  //   files: [
  //     // 'craft/templates/**/*.twig'
  //     './public/*.html'
  //   ]
  // })