const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    'storybook-css-modules-preset',
    {
      // NOTE: PostCSSが8系でも動くようにする対応
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  webpackFinal: async (baseConfig) => {
    // NOTE: tsconfigのbaseUrlの対応
    baseConfig.resolve.modules = [
      path.resolve(__dirname, '..', 'src'),
      'node_modules',
    ]
    return { ...baseConfig }
  },
}
