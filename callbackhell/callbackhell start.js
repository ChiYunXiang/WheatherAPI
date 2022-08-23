// function1
function trytry(name, callback) {
  // async method
    setTimeout(() => {
      // 問題的起點在這原本這邊是要放return的但是因為settimeout()是異步函數會導致資料傳不進去形成undefine所以解決方法就是callback
      // 但因為使用callback 產生了callback hell
    callback({ name:name}); 
    },1000);
};

// function2


// 動作
console.log("1")

// 從這裡開始產生資料接龍 obj接收從trytry()接收到的資料
let data = trytry("eee" ,(obj) => {
  // 這裡可以再放一個function2並不斷串接行成call hell 的雛型
  console.log(obj);
})


console.log("2");