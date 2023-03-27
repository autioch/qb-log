const factory = require('./factory');
const cache = {};

/**
 * Refreshes all existing printers to synchronize indent.
 * @return {undefined} Nothing.
 */
function refresh() {
  const cacheArray = Object.keys(cache).map((key) => cache[key]);
  const maxPrefixLength = Math.max(...cacheArray.map((printer) => printer.prefix.length));

  cacheArray.forEach((printer) => printer.refresh(maxPrefixLength));
}

/**
 * Add new printer to the cache.
 * @param {String} id         Name of the function that will be used to call the printer.
 * @param {Object} definition Config of the printer.
 * @return {mixed}            Created instance of the printer or false if the instance if already created.
 */
function add(id, definition = {}) {
  if (cache.hasOwnProperty(id)) {
    console.log(`qb-log already has printer ${id}`);

    return false;
  }

  cache[id] = factory(definition);

  refresh();

  return cache[id];
}

/**
 * Removes the instance of the printer from the cache.
 * @param  {String} id Name of the printer.
 * @return {undefined}    Nothing
 */
function remove(id) {
  if (!cache.hasOwnProperty(id)) {
    console.log(`qb-log does not have printer ${id}`);

    return false;
  }

  delete cache[id];

  refresh();

  return true;
}

module.exports = {
  add,
  remove,
  refresh
};
