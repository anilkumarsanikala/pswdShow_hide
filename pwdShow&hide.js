var pswd=document.getElementById("pwd")
var icon=document.querySelector("i")


function showHide(a){
    if(pswd.type === "password" ){
        pswd.type="text"
        icon.className=`fa-solid fa-eye`
    }else{
        pswd.type="password"
        icon.className=`fa-solid fa-eye-slash`
    }
}