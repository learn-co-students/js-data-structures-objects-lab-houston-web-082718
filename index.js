// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(obj, key, value) {
  const new_obj = { ...obj
  };
  new_obj[key] = value;

  return new_obj;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  obj[key] = value;

  return obj;
};

function deleteFromDriverByKey(obj, key) {
  const new_obj = { ...obj
  };

  delete new_obj[key];
  return new_obj;
};

function destructivelyDeleteFromDriverByKey(obj, key) {
  const new_obj = obj;

  delete new_obj[key];
  return new_obj;
};
