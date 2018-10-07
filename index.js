const driver = {}
function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, { [key]: value })
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, { [key]: value })
}

function deleteFromDriverByKey(driver, key) {
  newObj = Object.assign({}, driver)
  delete newObj.name
  return newObj
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  newObj = Object.assign(driver)
  delete newObj.name
  return newObj
}