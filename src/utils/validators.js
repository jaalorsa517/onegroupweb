/**
 * Función que verifica si un string es vacío
 * @param {string} data
 * @returns boolean
 */
const isFill = data => (data.length > 0 ? true : false);

/**
 * Función que verifica si un string es de estructura correo
 * @param {string} data
 * @returns boolean
 */
const isEmail = data => (data.match(/.+@.+\..+/) ? true : false);

/**
 * Función que verifica si un string es de 8 caractares o más
 * @param {string} data
 * @returns boolean
 */
const isLarge = data => (data.length > 7 ? true : false);

/**
 * Función que verifica si un string es igual a otro string
 * @param {string} data
 * @param {string} data2
 * @returns boolean
 */
const isEquals = (data, data2) => (data === data2 ? true : false);

export {isFill, isEmail, isLarge, isEquals};
