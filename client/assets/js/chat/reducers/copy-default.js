var base, copy;

base = {
  desserts: [{ name: 'cake' }, { name: 'ice cream' }, { name: 'pudding' }]
};

copy = deepcopy(base);
base.desserts = null;

console.log(base);

console.log(copy);
