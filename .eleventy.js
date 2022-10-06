module.exports = function(config) {
  config.setTemplateFormats("html,njk,md,css,yml");
  config.setDataDeepMerge(false);
  // Filters
  // config.addFilter('dateFilter', dateFilter);
  // config.addFilter('markdownFilter', markdownFilter);
  // config.addFilter('w3DateFilter', w3DateFilter);

  // Passthrough copy
  config.addPassthroughCopy('src/fonts');
  config.addPassthroughCopy({'src/images': 'images'});
  config.addPassthroughCopy({'src/js': 'js'});

  return {
    dir: {
      input: 'src/_content',
      output: 'dist'
    },
    passthroughFileCopy: true
  };
};
