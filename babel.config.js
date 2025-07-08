module.exports = {
  presets: ['@react-native/babel-preset'],
    overrides: [
    {
      plugins: [
        ['@babel/plugin-transform-private-methods', { loose: true }],
      ],
    },
  ],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
      },
    ],
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@src': './src',
          '@assets': './src/assets',
          '@configs': './src/configs',
          '@contexts': './src/contexts',
          '@types': './src/types',
          '@helpers': './src/helpers',
          '@hooks': './src/hooks',
          '@navigation': './src/navigation',
          '@enums': './src/enums',
          '@modules': './src/modules',
          '@common': './src/common',
          '@appServices': './src/appServices',
          '@databaseServices': './src/databaseServices',
          '@collections': './src/collections',
        },
      },
    ],
    '@babel/plugin-proposal-optional-chaining', // Optional chaining plugin
    'react-native-reanimated/plugin', // Ensure this is at the end
  ],
  generatorOpts: {
    retainLines: true, // Keeps original line numbers for better debugging
    minified: false,
    compact: false,
  },
};