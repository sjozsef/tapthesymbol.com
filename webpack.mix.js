let mix = require('laravel-mix');
let ImageminPlugin = require( 'imagemin-webpack-plugin' ).default;

mix.sass('src/styles/app.scss', 'dist/')
   .copy('src/index.html', 'dist/index.html')
   .copy('src/images', 'dist/images', false )
   .browserSync({
        files: "dist/*",
        injectChanges: true,
        port: 8080,
        server: {
            baseDir: "dist"
        },
        proxy: false
    });
