const URL ="https://cryptowebapp-10.onrender.com/coins"
let options={
    method:"GET",
    Headers:{
        "Content-type":"application/json",
    }
}


var arr=[];
var arr2=[],arr1=[];
const inputBox=document.getElementsByClassName("e")
const resultsBox=document.querySelector(".result-box");
async function fet(){
    let response=await fetch(URL,options);
    let data=await response.json();
   
    arr.push(data)


    //for search box
    
    for(let i=0;i<5000;i++){
        var s1=data[i];
        arr1.push(s1)
   }
 
   for(let i=0;i<5000;i++){
       var s=data[i]["name"]+"-"+data[i]["symbol"]
       arr2.push(s)
   }
   

   
  

   inputBox[0].onkeyup=function(){
       let result=[];
       let input=inputBox[0].value;

       if(input.length){
           result=arr2.filter((keyword)=>{
               return keyword.toLowerCase().includes(input.toLowerCase());
           })
       }
       display(result);
       if(!result.length){
           resultsBox.innerHTML=''
       }
   }
   function display(result){
       const content=result.map((list)=>{
           return "<li onclick=selectInput(this)>" + list + "</li>"
       });
       resultsBox.innerHTML="<ul>" + content.join('') + "</ul>"
   }


//remaining after header section code

var t=document.getElementById("ta");

for(let i=0;i<50;i++){


var tr=document.createElement("tr");
var td1=document.createElement("td");
td1.innerText=data[i]["rank"];




var td2=document.createElement("td");
td2.setAttribute("id","ima")

var im=document.createElement("img");
im.setAttribute("class","imag")
im.src=data[i]["iconUrl"]
im.style.width="60px"


var td21=document.createElement("p");
td21.innerText=data[i]["name"]
td2.appendChild(im)

var td3=document.createElement("td");
td3.style.textAlign="left"
var n=document.createElement("p");
n.innerText=`${data[i]["name"]} (${data[i]["symbol"]})`
td3.appendChild(n)


var td4=document.createElement("td");
var n1=document.createElement("p");
td2.setAttribute("class","pri")
var numm= +data[i]["price"];
 var numm2=numm.toFixed(6)
var numm1=numm.toFixed(3)
if(numm1==0){
    n1.innerText="$ "+(numm2)
}
else{
    n1.innerText="$ "+(numm1)
}

td4.appendChild(n1)

var td5=document.createElement("td");
var n2=document.createElement("p");
n2.innerText=data[i]["marketCap"]
td5.appendChild(n2)

var td6=document.createElement("td");
var n3=document.createElement("p");
if(data[i]["change"]<0){
    n3.innerHTML=`<span style="color:red">${data[i]["change"]}</span>`
}
else{
     n3.innerHTML=`<span style="color:green">${data[i]["change"]}</span>`
}

td6.appendChild(n3)

tr.addEventListener("click",function(){
    sessionStorage.setItem("coin",JSON.stringify(data[i]));
    window.location.assign("./ht.html")
})

tr.appendChild(td1)
tr.appendChild(td2)
tr.appendChild(td3)
tr.appendChild(td4)
tr.appendChild(td5)
tr.appendChild(td6)
t.appendChild(tr)
}


var dd=document.getElementsByClassName("e");
    dd[0].addEventListener("keypress",(e)=>{
        console.log(data[0]["symbol"])
        if(e.key=="Enter"){
            for(let i=0;i<5000;i++){
                if(data[i]["name"].toUpperCase()==dd[0].value.toUpperCase()  || data[i]["symbol"].toUpperCase()==dd[0].value.toUpperCase()){
                 console.log(data[i]["uuid"])
                }
            }
        }
        
// window.location.assign("./ht.html")
}
)
}


fet();

function selectInput(list){
   inputBox[0].value=list.innerHTML;
   inputBox[0].addEventListener("keypress",(e)=>{
    if(e.key=="Enter"){
   let z=list.innerHTML;
   let z1=z.split("-");
   console.log(z1,arr1[0]["name"])
   for(let i=0;i<5000;i++){
    if(z1[0]==arr1[i]["name"] && z1[1]==arr1[i]["symbol"]){
        sessionStorage.setItem("coin",JSON.stringify(arr1[i]))
        window.location.assign("./ht.html")
    }
   }
    }
   }
)

resultsBox.innerHTML=''
}

