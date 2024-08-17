

async function funOne() {
    const URL=`https://cryptowebapp-10.onrender.com/details`;
const options={
    "method":"GET",
    "headers":{
        "Content-type":"application/json"
    }
}

    let response=await fetch(URL,options);
    let data= await response.json();
    var a=document.getElementsByClassName("username");
    var b=document.getElementsByClassName("password");
    // var c=document.getElementsByClassName("but");
    

    

var count=0;
  for(let i=0;i<data.length;i++){
    if(data[i]["username"]==a[0].value && data[i]["password"]==b[0].value){
        count++;
    }
  }
 if(count>0){
    window.location.assign("./home.html")
 }
else{
    alert("enter proper username and password!!")
}
    
}
