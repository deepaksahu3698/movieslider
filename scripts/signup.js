
document. querySelector("form").addEventListener("submit",userDataCollection);
    var userData=JSON.parse(localStorage.getItem("movieuserdata")) || [];
    function userDataCollection(){
        event.preventDefault();
        var userDataObj={
            firstName:'',
            lastName:'',
            email:'',
            password:'',
        }
        var userFirstName=document.querySelector("#firstName").value;
        var userLastName=document.querySelector("#lastName").value;
        var userEmail=document.querySelector("#userEmail").value;
        var userPassword=document.querySelector("#userpassword").value;

        if(userFirstName==='' ||userEmail==='' || userPassword===''){
            alert("Please eneter valid details")
        }else{
            userDataObj.firstName=userFirstName;
            userDataObj.lastName=userLastName;
            userDataObj.email=userEmail;
            userDataObj.password=userPassword;
            userData.push(userDataObj);
            console.log(userData)
            localStorage.setItem("movieuserdata",JSON.stringify(userData))
            alert("User registaration sucesfull please login");
            window.location.href="./login.html"
        }

    }