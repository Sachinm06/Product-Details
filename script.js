function loginBtn() {

    usname = usern.value
    passw=passWord.value

    localStorage.setItem("user",usname)

    if(usname in localStorage){
      data=JSON.parse( localStorage.getItem(usname))
      if(passw==data["password"]){
          window.location="home.html"
      }
      else{
          alert("Wrong password")
      }
}
else{
    alert("Wrong username")
}
}
function logOut() {

    localStorage.removeItem("user")
    window.location = "index.html"
}

userna = localStorage.getItem("user")
d1.innerHTML = userna

function viewItem() {
    window.location = "result.html"
    localStorage.getItem()
}
function resultLogout() {
    localStorage.removeItem("user")
    window.location = "index.html"
}

function addBtn() {
    product = {
        pName: pName.value, ID: pId.value,
        price: pPrice.value,
        Quantity: pQnty.value
    }

    if (product.ID in localStorage) {
        alert("Product already exist")
    }
    else {
        localStorage.setItem(product.ID, JSON.stringify(product))
        alert("New Product Added")
    }

}
function searchBtn() {
    res = resultId.value
    if (res in localStorage) {
        prod = JSON.parse(localStorage.getItem(res))
        //  console.log(prod);
        viewResult.innerHTML = `
<h3>Product Name &nbsp &nbsp &nbsp: ${prod.pName}</h3>
<h3>Product ID &nbsp &nbsp &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp &nbsp: ${prod.ID}</h3>
<h3>Product Price &nbsp &nbsp&nbsp &nbsp&nbsp: ${prod.price}</h3>
<h3>Product Quantity : ${prod.Quantity}</h3>
`
    }
    else {
        viewResult.innerHTML =" "
        alert("Product not found")
    }
}

function register(){
    pname=eName.value
    username=uname.value
    password=psw.value

  accdetails={pname,username,password}

  if(username in localStorage){
      alert("Already have an account using this username")
      window.location="index.html"
  }
  else{
      localStorage.setItem(username,JSON.stringify(accdetails))
      window.location="index.html"
  }

}
