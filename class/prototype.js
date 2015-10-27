var A = Object.create({}, {
  name: {
    value: {
      name: {
        value: 'welefen'
      },
    },
    configurable: false,
    writable: false
  }
})

delete A.name;

console.log(A.name)