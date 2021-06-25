module.exports = {
    webpack(config) {
        config.module.rules.push(
            {
                test: /\.svg$/,
                issuer: {
                    test: /\.(js|ts)x?$/,
                },
                use: ['@svgr/webpack'],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf)$/,
                use: {
                    loader: 'url-loader',
                    options: { limit: 100000 },
                },
            }
        )

        return config
    },
}
