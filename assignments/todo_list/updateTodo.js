
const api_url = "https://jsonplaceholder.typicode.com/todos";
var true_btn=document.getElementsByTagName("button")[0];
var false_btn=document.getElementsByTagName('button')[1];

var class_name=document.getElementsByClassName("todos")[0];

async function getapi(url) {
    const response = await fetch(url);
    let data=await response.json();
    let true_arr=[];
    let false_arr=[];
    for(var i=0;i<data.length;i++){
        if(data[i]["completed"]==true){
            true_arr.push(data[i]);
        }else{
            false_arr.push(data[i]);
        }
    }
    true_btn.addEventListener("click",()=>{
        let count=0;
        var html="<table border='1|1'>";
        html+="<tr><th>Sr.No.</th><th>UserId</th><th>id</th><th>title</th><th>completed</th></tr>";
        for(var i=0;i<true_arr.length;i++){
            count++;
            html+="<tr>";

            html+="<td>"+count+"</td>";
            html+="<td>"+true_arr[i].userId+"</td>";
            html+="<td>"+true_arr[i].id+"</td>";
            html+="<td>"+true_arr[i].title+"</td>";
            html+="<td style=background-color:#00FF00>"+true_arr[i].completed+"</td>";
            html+="</tr>";
        }
        html+="</table>"
        class_name.innerHTML=html;
    });


    false_btn.addEventListener("click",()=>{
        let count2=0;
        var html="<table border='1|1' >";
        html+="<tr><th>Sr.No.</th><th>UserId</th><th>id</th><th>title</th><th>completed</th></tr>";
        for(var i=0;i<false_arr.length;i++){
            count2++;
            html+="<tr>";
            html+="<td>"+count2+"</td>";
            html+="<td>"+false_arr[i].userId+"</td>";
            html+="<td>"+false_arr[i].id+"</td>";
            html+="<td>"+false_arr[i].title+"</td>";
            html+="<td style=background-color:#FF6347>"+false_arr[i].completed+"</td>";
            html+="</tr>";
        }
        html+="</table>"
        class_name.innerHTML=html;        
    });
}

getapi(api_url);