const Bag = () => {
  const bag = window.localStorage;
  return {
    put: (name, data) => {
      bag.setItem(name, JSON.stringify(data));
    },
    out: (name) => {
      return JSON.parse(bag.getItem(name));
    },
  };
};

export default Bag;