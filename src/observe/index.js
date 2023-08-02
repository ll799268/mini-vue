
const data = {
  key1: 1,
  key2: 2,
}

observe2();
function observe2() {
  for (const key in data) {
    let initVal = data[key];
    Object.defineProperty(data, key, {
      get() {
        console.log('获取', initVal);
        return initVal;
      },
      set(val) {
        console.log('设置', val);
        initVal = val;
      }
    })
  }
}

data.key1
data.key2 = 22
console.log(data)

// function observe3() {
//   const newData = new Proxy(data, {
//     get(oTarget, key) {
//       console.log('获取', oTarget[key]);
//       return oTarget[key];
//     },
//     set(oTarget, key, val) {
//       console.log('设置', val);
//       oTarget[key] = val;
//     }
//   });

//   newData.key1
//   newData.key2 = 22
//   console.log(newData);
// }
;
