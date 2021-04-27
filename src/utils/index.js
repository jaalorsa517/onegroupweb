/**
 * Convierte una palabra en capitalize
 * @param {string} data
 * @returns String en Capitalize
 */
const _capitalize = data => data.charAt(0).toUpperCase() + data.substring(1);

/**
 * Convierte una oracion en capitalize
 * @param {string} data
 * @returns String en Capitalize
 */
const toCapitalize = data =>
  data
    .split(' ')
    .map(word => _capitalize(word))
    .join(' ');

export {toCapitalize};
