require('dotenv').config();
const nextComposePlugins = require('next-compose-plugins');

const headers = require('./config/headers');
// const includePolyfills = require('./config/includePolyfills');
const plugins = require('./config/plugins');
const { i18n: i18nConfig } = require('./next-i18next.config.js');

/**
 * https://github.com/cyrilwanner/next-compose-plugins/issues/59
 */
const { withPlugins } = nextComposePlugins.extend(() => ({}));

// Filter out next-i18next specific options not supported by Next.js native i18n
const i18n = {
  defaultLocale: i18nConfig.defaultLocale,
  locales: i18nConfig.locales,
  localeDetection: i18nConfig.localeDetection,
};

/**
 * Next config
 * documentation: https://nextjs.org/docs/api-reference/next.config.js/introduction
 */
module.exports = withPlugins(plugins, {
  i18n,
  /**
   * add the environment variables you would like exposed to the client here
   * documentation: https://nextjs.org/docs/api-reference/next.config.js/environment-variables
   */
  env: {
    ENVIRONMENT_NAME: process.env.ENVIRONMENT_NAME,
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    CONTENTFUL_PREVIEW_ACCESS_TOKEN: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  },

  /**
   * The experimental option allows you to enable future/experimental options
   * like React 18 concurrent features.
   */
  experimental: {
    // urlImports: true,
    // concurrentFeatures: true,
    // serverComponents: true,
  },

  poweredByHeader: false,
  reactStrictMode: false,
  compress: true,

  /**
   * add the headers you would like your next server to use
   * documentation: https://nextjs.org/docs/api-reference/next.config.js/headers
   *                https://nextjs.org/docs/advanced-features/security-headers
   */
  headers,

  /**
   * https://nextjs.org/docs/basic-features/image-optimization
   * Settings are the defaults
   */
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200, 1600],
    domains: ['images.ctfassets.net', 'images.eu.ctfassets.net', 'img.youtube.com'],
    path: '/_next/image',
    loader: 'default',
  },

  sassOptions: {
    additionalData: `
    @import "@src/styles/variables.scss";
    @import "@src/styles/mixins.scss";
  `,
  },

  webpack(config, options) {
    if (!options.isServer || process.env.circularDependencies) {
      import('circular-dependency-plugin').then(({ default: CircularDependencyPlugin }) => {
        config.plugins.push(
          new CircularDependencyPlugin({
            exclude: /a\.js|node_modules/,
            failOnError: false,
            allowAsyncCycles: true,
            cwd: process.cwd(),
          }),
        );
      });
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // includePolyfills(config);

    return config;
  },
});
