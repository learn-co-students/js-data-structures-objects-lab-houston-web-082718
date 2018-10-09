// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(obj, key, value) {
  let nObj = { ...obj };
  nObj[key] = value;
  return nObj;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromDriverByKey(obj, key) {
  let nObj = { ...obj };
  delete nObj[key];
  return nObj;
}

function destructivelyDeleteFromDriverByKey(obj, key) {
  delete obj[key];
  return obj;
}
