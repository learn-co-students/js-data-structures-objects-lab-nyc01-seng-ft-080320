// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(object, address, value) {
    return Object.assign({},object,{address:value});
};

function destructivelyUpdateDriverWithKeyAndValue(object, address, value) {
    return Object.assign(object,{address:value});
};

function deleteFromDriverByKey(object, key) {
    const array = {...object};
    delete array[key];
    return array;
};

function destructivelyDeleteFromDriverByKey(object, key) {
    delete object[key];
    return object;
};