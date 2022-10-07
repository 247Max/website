module.exports = function(config) {
  config.setTemplateFormats("html,njk,md,css,yml");
  config.setDataDeepMerge(false);
  // Filters
  // config.addFilter('dateFilter', dateFilter);
  // config.addFilter('markdownFilter', markdownFilter);
  // config.addFilter('w3DateFilter', w3DateFilter);

  function sortByOrder(values) {
    let vals = [...values];     // this *seems* to prevent collection mutation...
    return vals.sort((a, b) => Math.sign(a.data.order - b.data.order));
  }

  config.addFilter("sortByOrder", sortByOrder);

  // Passthrough copy
  config.addPassthroughCopy({'src/fonts': 'fonts'});
  config.addPassthroughCopy({'src/images': 'images'});
  config.addPassthroughCopy({'src/js': 'js'});

  return {
    dir: {
      input: 'src/_content',
      output: 'docs'
    },
    passthroughFileCopy: true
  };
};
