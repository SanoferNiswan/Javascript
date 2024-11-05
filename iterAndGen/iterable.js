// custom iterable

const myIterable = {
    items: [1, 2, 3],
    [Symbol.iterator]() {
      let index = 0;
      const items = this.items;
  
      return {
        next() {
          if (index < items.length) {
            return { value: items[index++], done: false };
          } else {
            return { value: undefined, done: true };
          }
        }
      };
    }
  };
  
  for (const item of myIterable) {
    console.log(item); // 1, 2, 3
  }
  