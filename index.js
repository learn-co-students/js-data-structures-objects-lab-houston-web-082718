// Write your solution in this file!

//defines a `driver` driver
const driver = {};

//updateDriverWithKeyAndValue()- this function should take in a driver Object, 
//a key and a value. The function should not mutate the driver parameter and 
//return a new driver that has an updated value for the key passed in.
function updateDriverWithKeyAndValue(driverObject, key, value) {
    return Object.assign({}, driverObject, {[key]: value});
}

//destructivelyUpdateDriverWithKeyAndValue() - this function should work the same as 
//updateDriverWithKeyAndValue() but it should mutate the driver parameter passed in.
function destructivelyUpdateDriverWithKeyAndValue(driverObject, key, value) {
    return Object.assign(driverObject, {[key]: value});
}

//deleteFromDriverByKey() - this function should take in a driver Object and a key. 
//It should delete the key/value pair for the key that was passed in from the driver Object. 
//This should all not actually mutate the driver passed in.
function deleteFromDriverByKey(driverObject, key) {
    newObject = Object.assign({}, driverObject)
    delete newObject[key];
    return newObject;
}

//destructivelyDeleteFromDriverByKey() - this function should work the same as 
//deleteFromDriverByKey() but it should mutate the driver passed in.
function destructivelyDeleteFromDriverByKey(driverObject, key) {
    delete driverObject[key];
    return driverObject;
}