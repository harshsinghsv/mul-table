// let output= document.getElementById("output");
// let num = parseInt(prompt("Enter the Number : "));
// if(!isNaN(num)) {
//     for(let i=1; i<=10; i++)
//     {
//         output.innerHTML+=`${num} x ${i} = ${num*i} <br>`;
//     }
// }
// else{
//     output.innerHTML= "Invalid Input";
// }    



let num = parseInt(prompt("Enter the number: "));
let output = document.createElement("div");
    if (!isNaN(num)) {
        for (let i = 1; i <= 10; i++) {
                output.innerHTML += `${num} x ${i} = ${num * i} <br>`; 
        }
    } else {
        output.innerHTML = "Invalid Input";
    }
document.body.appendChild(output);
