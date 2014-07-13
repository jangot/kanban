module.exports = function(builder) {
    var TASK_NAME = 'view';
    builder
        .addModule('grunt-contrib-stylus')

        .addConfig('stylus', 'options', {
            use: [
                function() {
                    return require('autoprefixer-stylus')(
                        "ff >= 20",
                        "chrome >= 20",
                        "safari >= 6",
                        "ios >= 6",
                        "android >= 4",
                        "opera >= 12.1",
                        "ie >= 10"
                    );
                }
            ],
            import: [
                '<%= publicPath %>/app/common/styles/import/variables.styl',
                '<%= publicPath %>/app/common/styles/import/functions.styl',
                '<%= publicPath %>/app/common/styles/import/mixins.styl'
            ]
        })
        .addConfig('stylus', 'compile', {
            files: {
                '<%= compilePath %>/all.css': [
                    '<%= publicPath %>/app/common/styles/start.styl',
                    '<%= publicPath %>/app/**/style.styl',
                    '<%= publicPath %>/app/common/styles/end.styl'
                ]
            }
        })
        .addConfig('watch', 'stylus', {
            files: '<%= publicPath %>/**/*.styl',
            tasks: 'stylus:compile'
        })

        .createTask(TASK_NAME, ['stylus:compile'])

    return TASK_NAME;
};
