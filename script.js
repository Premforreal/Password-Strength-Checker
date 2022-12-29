let pass = document.getElementById("password");
let show = document.getElementById("show");

show.addEventListener("click",() => {
    pass.type === "password" ? pass.type = "text" : pass.type = "password";
  });

password.addEventListener("input",()=>{
    checkPassword(pass.value);
});


function checkPassword(password){
    
    const special = "!@#$%^&*";
    let isLong = false;
    let hasLower = false;
    let hasUpper = false;
    let hasNumber = false;
    let hasSpecial = false;
     
    if(password.length>7){
        isLong=true;   
    }
    
    for(let i=0; i<password.length; i++){
        
        if(isNaN(parseInt(password[i])) && !special.includes(password[i])){
            if(password[i].toUpperCase()===password[i]){
                hasUpper=true;
            } 
            if(password[i].toLowerCase()===password[i]){
                hasLower=true;
            }         
        }
        else{
            if (!isNaN(parseInt(password[i]))){
                hasNumber=true;
            }
            if(special.includes(password[i])){
                hasSpecial=true;
            }
        }
    }
    document.getElementById("btn").disabled = true;
    addClass(isLong,hasLower,hasUpper,hasNumber,hasSpecial);
    changeWidth([isLong,hasLower,hasUpper,hasNumber,hasSpecial]);
}

function addClass(isLong,hasLower,hasUpper,hasNumber,hasSpecial){

  isLong
      ? document.getElementById("length").classList.add("green")
      : document.getElementById("length").classList.remove("green");
  hasLower && hasUpper 
      ? document.getElementById("case").classList.add("green") 
      : document.getElementById("case").classList.remove("green");
  
  hasNumber 
      ? document.getElementById("number").classList.add("green") 
      : document.getElementById("number").classList.remove("green");
   
  hasSpecial
      ? document.getElementById("special").classList.add("green") 
      : document.getElementById("special").classList.remove("green");
  
}

function changeWidth(array){
    let bar  = document.getElementById("bar");

    let num = array.filter(x => x === true).length;
    bar.style.width = num*20+'%';   
    if(num==1){bar.style.backgroundColor = "#ff0000"};
    if(num==2){bar.style.backgroundColor = "#ffa700"};
    if(num==3){bar.style.backgroundColor = "#fff400"};
    if(num==4){bar.style.backgroundColor = "#a3ff00"};
    if(num==5){
        bar.style.backgroundColor = "#2cba00";
        document.getElementById("btn").disabled = false;
    };
}