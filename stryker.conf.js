module.exports = function(config){
    config.set({
        files: [
            // Add your files here, this is just an example:
            { pattern: 'src/**/*.js', mutated: true, included: true},
            'tests/**/*.js',
        ],
        testRunner: 'jest',
        coverageAnalysis: 'all',
        reporter: ['clear-text', 'progress'],
    });
}