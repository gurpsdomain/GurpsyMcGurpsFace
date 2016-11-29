module: {
    loaders: [
        {
            test: /\.ts$/,
            loaders: ['awesome-typescript-loader', 'angular2-template-loader?keepUrl=true'],
            exclude: [/\.(spec|e2e)\.ts$/]
        },
        /* Embed files. */
        {
            test: /\.(html|css)$/,
            loader: 'raw-loader',
            exclude: /\.async\.(html|css)$/
        },
        /* Async loading. */
        {
            test: /\.async\.(html|css)$/,
            loaders: ['file?name=[name].[hash].[ext]', 'extract']
        }
    ]
}