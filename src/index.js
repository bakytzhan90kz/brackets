module.exports = function check(str, bracketsConfig) {
  // your solution
  let open = {};
  let close = {};
  let res = [];
  let similars = {};
  
  for(let i =0; i<bracketsConfig.length; i++){
    let arr = bracketsConfig[i];
    if(arr[0]==arr[1]){
      similars[arr[0]] = false;
    }
    open[arr[0]] = arr[1];
    close[arr[1]] = arr[0];
  }
  


  for(let i=0; i<str.length;i++){
    let s =str[i];
    
    if(open[s] && close[s]){
      if(similars[s]) {
        let last = res.pop();
        if(last!==close[s]) return false;
      }
      else res.push(s);
      similars[s] = !similars[s];
    }
    else if(open[s]) {
      res.push(s);
      
    }
    else {
      let last = res.pop();
      if(last!==close[s]) return false;
    }
  }

  return res.length===0;
}
