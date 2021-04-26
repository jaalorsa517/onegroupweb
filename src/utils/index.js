const _capitalize = data => data.charAt(0).toUpperCase() + data.substring(1);

const toCapitalize = data =>
  data
    .split(' ')
    .map(word => _capitalize(word))
    .join(' ');

export {toCapitalize};
