function CreateObject(arr) {
    let ans = {}
  for(let i = 0; i<arr.length; i+=2){
    ans[arr[i]] = arr[i+1]
  }
  return ans
    // Write your code here
}

module.exports = CreateObject;
