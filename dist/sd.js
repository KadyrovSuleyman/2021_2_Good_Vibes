function createHash() {
  const obj = { test: 'test' };
  return (function name(obj) {
    return {
      add(key, value) {
        obj[key] = value;
        return this;
      },
      remove(key) {
        delete obj[key];
        return this;
      },
      getValue() {
        return obj;
      },
    };
  }(obj));
}

const hash = createHash();
console.log(hash
  .add('key1', 4)
  .add('key2', 8)
  .remove('key1')
  .getValue());
