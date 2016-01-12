let CLASS = class {
  query(sql){
    if(sql === 'PRAGMA table_info( user )'){
      return Promise.resolve([{"cid":0,"name":"id","type":"INTEGER","notnull":1,"dflt_value":null,"pk":1},{"cid":1,"name":"name","type":"TEXT","notnull":1,"dflt_value":null,"pk":0},{"cid":2,"name":"pwd","type":"TEXT","notnull":1,"dflt_value":null,"pk":0},{"cid":3,"name":"create_time","type":"INTEGER","notnull":1,"dflt_value":null,"pk":0}]);
    }else if(sql === 'PRAGMA INDEX_LIST( user )'){
      return Promise.resolve([{
        name: 'xxxx',
        unique: true
      }, {
        name: 'test'
      }]);
    }else if(sql === 'PRAGMA index_info( xxxx )'){
      return Promise.resolve([{
        name: 'name'
      }])
    }
    return Promise.resolve([]);
  }
  async getSchema(table){
    let fieldPromise = this.query(`PRAGMA table_info( ${table} )`);
    let indexPromise = this.query(`PRAGMA INDEX_LIST( ${table} )`).then(async list => {
      let indexes = {};
      let promises = list.map(async item => {
        if(item.unique){
          let list = await this.query(`PRAGMA index_info( ${item.name} )`);
          list.forEach(item => {
            indexes[item.name] = {unique: true};
          });
        }
      });
      await Promise.all(promises);
      return indexes;
    });
    let ret = {};
    let [data, indexes] = await Promise.all([fieldPromise, indexPromise]);
    data.forEach(item => {
      ret[item.name] = {
        name: item.name,
        type: item.type,
        required: !!item.notnull,
        default: item.dflt_value,
        primary: !!item.pk,
        auto_increment: false,
        unique: !!(!item.pk && indexes[item.name] && indexes[item.name].unique)
      };
    });
    return ret;
  }
}

let instance = new CLASS();
instance.getSchema('user').then(data => {
  console.log(data);
}).catch(err => {
  console.log(err.stack)
})