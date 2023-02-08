const getColor = () =>{
    const randomNumber =Math.floor (Math.random() *16777215) ;
    const randomcode = "#"+randomNumber.toString(16);
    document.body.style.background = (randomcode)
    console.log(randomNumber);
    console.log(randomcode);
    document.getElementById("color").innerText = randomcode;
// for copy in clipboard
    navigator.clipboard.writeText(randomcode)
}
getColor();


document.getElementById("btn").addEventListener(
    "click",
    getColor
)

