// function1
// function trytry(name, callback) {
//   // async method
//     setTimeout(() => {
//     //  解決方案"promise"
//     callback({ name:name}); 
//     },1000);
// };
let exm  = new Promise((resolve,reject) => {
  resolve(
    setTimeout(() => {
      return("eee")
    },2000)
  ) 

//   reject(
//     setTimeout( (e) => {
//       console.log("error");
//     })
//   )
});


// let exm2 = new Promise( (resolve,reject) => {
//   resolve(
//     setTimeout( name => {
//       return ({name:name});
//     },2000)

//   );
// });
// // function2
// function connectTryTry(str,callback) {
//   // async method
//     setTimeout(() => {
//       // issue in here
//     callback({ str:"zzz"}); 
//     },1000);
// };

// 動作
console.log("1")

// 從這裡開始產生資料接龍 obj接收從trytry()接收到的資料
exm 
.then((d) => {
  console.log(d);
})
.catch ((e) => {
  console.log(e);
})



console.log("3");