//! 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click

document.getElementById("btnToClick").addEventListener("click",()=>console.log("estoy dando click"))

//! 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

document.querySelector(".focus").addEventListener("focus",()=>{
    console.log(document.querySelector(".focus").value)  
})

//! 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

document.querySelector(".value").addEventListener("input",()=>{
    console.log(document.querySelector(".value").value)  
})