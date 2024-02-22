const myFun = (myArr,tg) => {
  
    let mySet = new Set(myArr)
    let opt = -1
    
    if( mySet.has(tg) ) {
      for(let i =0; i <myArr.length ;i++){
        if (myArr[i] === tg) {
          opt = i
          break
        }
      } 
    } 
    
    return opt
  }
  
export default myFun