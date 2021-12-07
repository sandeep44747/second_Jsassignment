const newInput = document.querySelector("input");
const newButtom = document.querySelector("button");
const newList = document.querySelector("div.todos");
var key_value = 0;
newButtom.addEventListener("click", function(){
    var item = newInput.value;
    var para_item = document.createElement("p");
    var key = document.createAttribute("key");
    key.value = key_value;
    para_item.setAttributeNode(key);
    para_item.innerHTML = item;
    newList.appendChild(para_item);
    key_value += 1
    para_item.addEventListener("click" , function(){
        newList.removeChild(para_item)
    })
    newInput.value=""
})