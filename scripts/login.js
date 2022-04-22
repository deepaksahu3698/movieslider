var userData=JSON.parse(localStorage.getItem("movieuserdata")) || [];
console.log(userData)
// loginValidation()
document.querySelector("form").addEventListener("submit",loginValidation)
function loginValidation(){
    event.preventDefault();
    var userEmail=document.querySelector("#userEmail").value;
    var userPassword=document.querySelector("#userpassword").value;
    var isLogedIn = false

    if(userData.length==0){
        alert("Please Register first");
        window.location.href="./signUpPage.html";
    }else if(userEmail==='' || userPassword===''){
        alert("Please eneter valid details");
    }else{
        userData.forEach(userDetails => {
            if(userDetails.email===userEmail && userDetails.password===userPassword){
                
                
                alert("login successful");
                isLogedIn = true;                   
                return;
                
            }
           
                      
        });
    }
    if(isLogedIn===true){    
        document.location.href="./index.html";        
    } else{
        alert("Please eneter valid details/register first")
    }
    
}