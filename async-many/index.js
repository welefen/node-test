var fn = async () => {
  var result = await [
    Promise.resolve(1),
    Promise.resolve(2)
  ];
  return result;
};

fn().then(function(data){
  console.log(data[0]);
});