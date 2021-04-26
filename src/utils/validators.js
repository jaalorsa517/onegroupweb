const isFill = data => (data.length > 0 ? true : false);

const isEmail = data => (data.match(/.+@.+\..+/) ? true : false);

export {isFill, isEmail};
