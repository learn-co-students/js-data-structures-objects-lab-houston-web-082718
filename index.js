// Write your solution in this file!
const driver = {};


function updateDriverWithKeyAndValue(obj, key, value) {
    return Object.assign({}, obj, {[key]: value})
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
    return Object.assign(obj, {[key]: value})
}

function deleteFromDriverByKey(obj, key) {
    const newObject = Object.assign({}, obj)

    delete newObject[key];
     return newObject
}

function destructivelyDeleteFromDriverByKey(obj, key) {
    Object.assign({}, obj)

    delete obj[key];

    return obj
}