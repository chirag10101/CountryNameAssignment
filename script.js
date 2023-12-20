async function fetchText() {

let response = await fetch('https://countriesnow.space/api/v0.1/countries');
let responseText = await response.text();
let arr= await JSON.parse(responseText);
let result= arr.data;
for(let i=0;i<result.length;i++){
    document.getElementById("countryDropDown").innerHTML += `<option> ${result[i].country} </option>`
    console.log(result[i].country);
}
}
fetchText();