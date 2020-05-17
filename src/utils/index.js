export const filterUnique = (item, index, array) => {
    const indexById = array.findIndex(i => i.id === item.id);

    return index === indexById;
};

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

let counter = 10;
export const uniqueId = () => counter++;

export const noop = () => {};
