 var ans=JSON.parse(sessionStorage.getItem('coin'))
 var uu=ans['uuid']

const URL=`https://coinranking1.p.rapidapi.com/coin/${uu}`;
const options={
    "method":"GET",
     headers: {
      'x-rapidapi-key': '831236ae50msh40e1d61b0f2e6eap162a76jsn13489151c8c6',
      'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
  }
    
}
var ain=document.getElementsByClassName("inpu");
var opt=document.querySelector("option");
var cur=document.getElementsByClassName("cur")


var arr=[];

async function fet(){
    let response=await fetch(URL,options);
    let data=await response.json();
    console.log(data)
    var obj=data["data"]["coin"];
     arr.push(obj)
    var named =document.querySelector('.named');
    
  
// document.body.style.backgroundColor=obj["color"]


//inside Named div 

    named.innerHTML=`<div class="heading">
                       <div>
                          <img src=${obj["iconUrl"]} height=70px width=70px class="im1">
                        </div>
                       <div>
                          <h1 class="h"> ${obj["name"]}(${obj["symbol"]})</h1>
                        </div>
                    </div>
                    <div>
                          <h2>Price :</h1>
                          <p> $  ${obj["price"]}</p>
                        </div>
                    <div>
                    <div>
                    <h2>Description: </h2>
                      <p>${obj["description"]}</p>
                    </div>

                     <h2 id="mix">Converter: </h2>
            <div>
            <div class="button1">
           <input class="inpu" type="number" placeholder="Enter the amount and click submit">
           <button onclick="answer()" class="sub">Submit</button>
           
            <input class="inpu" type="text">
            <select class="cur">
            <option value="INR">INR</option>
              <option value="dollar">DOLLAR</option>
            </select>
           </div>
                      
           
           <h2>Related Links:</h2>
           <ul id="lis">
           
           </ul>
             
           
           `
 
                       
                      

           console.log(arr[0]["links"].length)
           var lis=document.getElementById("lis")
          for(let i=0;i<arr[0]["links"].length;i++){  
         
    var b=document.createElement("li");
    b.style.listStyleType="none";

    b.innerHTML=`<a href="${arr[0]["links"][i]["url"]}">${arr[0]["links"][i]["name"]} </a>`
    

    lis.appendChild(b)
           }



//inside details div



           var a=document.getElementsByClassName("tab");
           var tab=document.createElement("table");

           var tr1=document.createElement("tr");
           var td1=document.createElement("td");
           td1.innerText=`Rank`
           var td2=document.createElement("td");
           td2.setAttribute("class","tar")
           td2.innerText=arr[0]["rank"]
           tr1.appendChild(td1)
           tr1.appendChild(td2)

           var tr2=document.createElement("tr");
           var td3=document.createElement("td");
           td3.innerText=`24h Volume`
           var td4=document.createElement("td");
           td4.setAttribute("class","tar")
           td4.innerText=arr[0]["24hVolume"]
           tr2.appendChild(td3)
           tr2.appendChild(td4)

           var tr3=document.createElement("tr");
           var td5=document.createElement("td");
           td5.innerText=`Market Cap`
           var td6=document.createElement("td");
           td6.setAttribute("class","tar")
           td6.innerText=arr[0]["marketCap"]
           tr3.appendChild(td5)
           tr3.appendChild(td6)

           var tr4=document.createElement("tr");
           var td7=document.createElement("td");
           td7.innerText=`Fully Diluted Market Cap`
           var td8=document.createElement("td");
           td8.setAttribute("class","tar")
           td8.innerText=arr[0]["fullyDilutedMarketCap"]
           tr4.appendChild(td7)
           tr4.appendChild(td8)

           var tr5=document.createElement("tr");
           var td9=document.createElement("td");
           td9.innerText=`Change`
           var td10=document.createElement("td");
           td10.setAttribute("class","tar")
          if(arr[0]["change"]<0){
             td10.innerHTML=`<span style="color:red">${arr[0]["change"]}</span>`
          }
          else{
             td10.innerHTML=`<span style="color:green">${arr[0]["change"]}</span>`
          }
           tr5.appendChild(td9)
           tr5.appendChild(td10)

           var tr6=document.createElement("tr");
           var td11=document.createElement("td");
           td11.innerText=`Number of Exchanges`
           var td12=document.createElement("td");
           td12.setAttribute("class","tar")
           td12.innerText=arr[0]["numberOfExchanges"]
           tr6.appendChild(td11)
           tr6.appendChild(td12)

           var tr7=document.createElement("tr");
           var td13=document.createElement("td");
           td13.innerText=`Number of Markets`
           var td14=document.createElement("td");
           td14.setAttribute("class","tar")
           td14.innerText=arr[0]["numberOfMarkets"]
           tr7.appendChild(td13)
           tr7.appendChild(td14)

           var tr8=document.createElement("tr");
           var td15=document.createElement("td");
           td15.innerText=`All Time High(ATH)`
           var num=+arr[0]["allTimeHigh"]["price"]
           var num1=num.toFixed(2)
           var td16=document.createElement("td");
           td16.setAttribute("class","tar")
           td16.innerText=num1
           tr8.appendChild(td15)
           tr8.appendChild(td16)

           var tr9=document.createElement("tr");
           var td17=document.createElement("td");
           td17.innerText=`Tags`
           var td18=document.createElement("td");
           td18.setAttribute("class","tar")
           td18.innerText=arr[0]["tags"]
           tr9.appendChild(td17)
           tr9.appendChild(td18)

           var tr10=document.createElement("tr");
           var td19=document.createElement("td");
           td19.innerText=`Official Link`
           var td20=document.createElement("td");
           td20.setAttribute("class","tar")
           td20.innerText=arr[0]["websiteUrl"]
           tr10.appendChild(td19)
           tr10.appendChild(td20)





          
          
          
          
          
          
          
           tab.appendChild(tr1)
           tab.appendChild(tr2)
           tab.appendChild(tr3)
           tab.appendChild(tr4)
           tab.appendChild(tr5)
           tab.appendChild(tr6)
           tab.appendChild(tr7)
           tab.appendChild(tr8)
           tab.appendChild(tr9)
           tab.appendChild(tr10)
           a[0].appendChild(tab)




//            var di8=document.createElement("div");
// var v8=document.createElement("p");
// v8.innerHTML=`Rank:<span>${arr[0]["rank"]}</span>`;
// di8.appendChild(v8)
// a[0].append(di8)

// var di1=document.createElement("div");
// var v1=document.createElement("p");
// v1.innerText=`24h Volume : ${arr[0]["24hVolume"]}`;
// di1.appendChild(v1)
// a[0].append(di1)


// var di=document.createElement("div");
// var v=document.createElement("p");
// v.innerText=`Market Cap : ${arr[0]["marketCap"]}`;
// di.appendChild(v)
// a[0].append(di)

// var di1=document.createElement("div");
// var v1=document.createElement("p");
// v1.innerText=`Fully Diluted Market Cap : ${arr[0]["fullyDilutedMarketCap"]}`;
// di1.appendChild(v1)
// a[0].append(di1)



// var di2=document.createElement("div");
// var v2=document.createElement("p");
// if(arr[0]["change"]<0){
//   v2.innerHTML=`Change :  <span style="color:red">${arr[0]["change"]}</span>`;
// }
// else{
//   v2.innerHTML=`Change :  <span style="color:green">${arr[0]["change"]}</span>`;
// }

// di2.appendChild(v2)
// a[0].append(di2)


// var di3=document.createElement("div");
// var v3=document.createElement("p");
// v3.innerText=`Number of Exchanges : ${arr[0]["numberOfExchanges"]}`;
// di3.appendChild(v3)
// a[0].append(di3)

// var di4=document.createElement("div");
// var v4=document.createElement("p");
// v4.innerText=`Number of Markets : ${arr[0]["numberOfMarkets"]}`;
// di4.appendChild(v4)
// a[0].append(di4)

// var di5=document.createElement("div");
// var v5=document.createElement("p");
// var num=+arr[0]["allTimeHigh"]["price"]
// var num1=num.toFixed(2)

// v5.innerText=`All Time High(ATH) : ${(num1)}`;
// di5.appendChild(v5)
// a[0].append(di5)




// var di7=document.createElement("div");
// var v7=document.createElement("p");
// v7.innerText=`Tags : ${arr[0]["tags"]}`;
// di7.appendChild(v7)
// a[0].append(di7)

// var di9=document.createElement("div");
// var v9=document.createElement("p");
// v9.innerText=`Official Link : ${arr[0]["websiteUrl"]}`;
// di9.appendChild(v9)
// a[0].append(di9)


}

fet()
function answer(){
  if(cur[0].value=="INR"){
  ain[1].value=(ain[0].value*arr[0]["price"]*82).toFixed(2)
  }
  else if(cur[0].value=="dollar"){
    ain[1].value=(ain[0].value*arr[0]["price"]).toFixed(2)
  }
}





