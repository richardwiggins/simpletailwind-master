let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');

mix.sass('./app.scss', './public/css')
  .options({
    processCssUrls: false,
    postCss: [ tailwindcss('./tailwind.js') ],
  });