module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-iconsauce')('./.storybook/iconsauce.config.js'),
    require('tailwindcss')('./.storybook/tailwind.config.js'),
    require('autoprefixer')({
      flexbox: 'no-2009',
    }),
  ],
}
