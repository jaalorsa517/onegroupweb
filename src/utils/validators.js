const isFill = data => (data.length > 0 ? true : false);

const isEmail = data => (data.match(/.+@.+\..+/) ? true : false);

const isLarge = data => (data.length > 7 ? true : false);

const isEquals = (data, data2) => (data === data2 ? true : false);

export {isFill, isEmail, isLarge, isEquals};
