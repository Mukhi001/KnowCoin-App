async function funOne(event)
{   
    const userName = document.getElementsByClassName("username");
    
    const password = document.getElementsByClassName("password");

    const email = document.getElementsByClassName("email");

    if(userName[0].value==""){
        alert("username should not be empty")
    }
    else if(password[0].value==""){
        alert("passwrod should not be empty")
    }
    else if(email[0].value==""){
        alert("email should not be empty")
    }

    else{
        const URL1=`https://cryptowebapp-10.onrender.com/details`
        const options1={
            "method":"GET",
            "headers":{
                "Content-type":"application/json"
            }
        }
    
        let response1=await fetch(URL1,options1);
        let data1=await response1.json();
        console.log(data1[0]["username"])
    
       
    
       for(let i=0;i<data1.length;i++){
        if(userName[0].value.toLowerCase()==data1[i]["username"].toLowerCase()){
            alert("entered username already in use");
            return
        }
        else if(email[0].value==data1[i]["email"]){
            alert("entered email already in use")
            return 
        }
       }
    
        const URL =`https://cryptowebapp-10.onrender.com/details`
        const options={
            method:"POST",
            headers:{
                "Content-type":"application/json",
            },
            "body":JSON.stringify({
                 "username":userName[0].value,
                 "password":password[0].value,
                 "email":email[0].value
             })
        }
            let response=await fetch(URL,options);
            let data=await response.json();
            console.log(data)
            alert("successfully registered!!")
            
    }
   

       



    
}