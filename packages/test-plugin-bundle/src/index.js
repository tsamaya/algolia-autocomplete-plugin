const { autocomplete } = require('@algolia/autocomplete-js');
const { TestPlugin } = require('test-plugin-core');

module.exports = { TestPlugin, algoliaAutocomplete: autocomplete };
