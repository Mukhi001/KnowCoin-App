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



let pageNo=1;
  let tab=document.querySelector('.products');
  let previous=document.querySelector('.previous');
  let next=document.querySelector('.next');
  let pages=document.querySelectorAll('.pages');
  let forward=document.querySelector('.for');
  let backward=document.querySelector('.back');
  

 populateTable()



  for(page of pages){
    
    page.onclick=function(){
      for(page of pages){
        page.classList.remove('active')
      }
     
      this.classList.add('active');
      pageNo= +this.innerText;
      populateTable();

    }
  }

  
  forward.onclick=function(){
    backward.classList.remove('disabled')
    pageNo=pageNo+1;
    populateTable();
    updateActivePage();
  
}

backward.onclick=function(){
  if(pageNo==1){
    backward.classList.add('disabled')
  }
  else{
    
    pageNo=pageNo-1;
    populateTable();
    updateActivePage();
  }
  

  
}

  next.onclick=function(){
  
   
    if(pages[0].innerText==1){
      previous.classList.remove('disabled')
    }
    
    if(pageNo<=10){
      pageNo=pageNo+10;
      
      populateTable();
      updateActivePage();
    }
if(pageNo>10){
  
    

    for(page in pages){
       var m= +pages[page].innerText;
       m=m+10;
       pages[page].innerHTML=`<a href="#" class="page-link">${m}</a>`;
    }
    
    populateTable();
    updateActivePage();
}

      if(pageNo==200){
        this.classList.add('disabled')
      }
      
    }
   
  

  
  previous.onclick=function(){
   
    if(pages[0].innerText==1){
      previous.classList.add('disabled')
    }
    
    if(pages[0].innerText!=1){

        for(page in pages){
           var m= +pages[page].innerText;
           m=m-10;
           pages[page].innerHTML=`<a href="#" class="page-link">${m}</a>`;
        }
        populateTable();
        updateActivePage();
    }

    
    
       
    
    
   
   
  }


  function populateTable(){
    tab.innerHTML=""
    tab.innerHTML=` <tr>
                <th class="cen">Rank</th>
                <th>Icon</th>
                <th>Name</th>
                <th>Symbol</th>
                <th>Price</th>
               
            </tr>`
    
  var start=(pageNo-1)*25;
  var end=start+25;

  for(let i=start;i<end;i++ ){

  var tr1=document.createElement("tr");

  var td1=document.createElement("td");
  td1.setAttribute("class","cento")
  td1.innerText=data[i]["rank"];

  var td5=document.createElement("td");
  var ph=document.createElement("img");
   ph.src=data[i]["iconUrl"]  
   ph.style.height="50px";
   ph.style.width="50px"
   td5.appendChild(ph);

  var td2=document.createElement("td");
  td2.innerText=data[i]["name"];

  var td3=document.createElement("td");
  td3.innerText=data[i]["symbol"];

  var td4=document.createElement("td");
  var numz=+data[i]["price"];
  var numz1=numz.toFixed(6)
  td4.innerText=numz1;



  tr1.addEventListener("click",function(){
    sessionStorage.setItem("coin",JSON.stringify(data[i]));
    window.location.assign("./ht.html")
})

  tr1.appendChild(td1)
  tr1.appendChild(td5)
  tr1.appendChild(td2)
  tr1.appendChild(td3)
  tr1.appendChild(td4)
 
  

  tab.appendChild(tr1)
 
   
  }

     
}


function updateActivePage(){
  for(page of pages){
    if(page.innerText==pageNo){
      page.classList.add('active')
    }
    else{
      page.classList.remove('active');
    }
  }
}





    
    
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

  
  