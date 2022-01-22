module.exports = {

    context: `${__dirname}/nodeSrc/`,

    devtool: "source-map",

    mode: "development",
    // mode: "production",

    entry: {
        PlanetSearchNexus: "./index.js",
    },

    output: {
        // path: `${__dirname}/www/js/`,
        path: `${__dirname}/dist/`,

        filename: "[name].js",
        // filename: "[name].min.js",
        library: "PlanetSearchNexus",
        sourceMapFilename: '[file].map',
    },
};