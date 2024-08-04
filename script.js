const getcolour = () => {
    const randomNumber = Math.floor(Math.random() * 1677215); //dividing so that we can get hexadecimal number ---colour code
    const randomCode = "#" + randomNumber.toString(16).padStart(6,'0'); // pad with leading zeros
    document.body.style.backgroundColor = randomCode;
    document.getElementById("colour-code").innerText = "Test, Code is\n"+randomCode
}
//event call
document.getElementById("btn").addEventListener("click",getcolour);

//initial call
getcolour();