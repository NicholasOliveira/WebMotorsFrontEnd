module.exports = {
    watchPlugins: [
      [
        'jest-watch-typeahead/filename',
        {
          key: 'k',
          prompt: 'do something with my custom prompt',
        },
      ],
    ],
  };