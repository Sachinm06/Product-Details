function loginBtn(){

    uname=usern.value
    localStorage.setItem("user",uname)



    window.location="home.html"
}
function logOut(){
    localStorage.removeItem("user")
    window.location="index.html"
}

userna=localStorage.getItem("user")
d1.innerHTML=  userna