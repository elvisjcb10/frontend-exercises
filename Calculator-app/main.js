const screen=document.querySelector(".main__screen-text")
const number_buttons=document.querySelectorAll(".number ")
const reset_button=document.querySelector(".reset");
const del_button=document.querySelector(".del");
const plus_button=document.querySelector(".plus")
const minus_button=document.querySelector(".minus")
const times_button=document.querySelector(".times")
const divide_button=document.querySelector(".divide")
const equal_button=document.querySelector(".equal");
screen.textContent="12"
let op="";
let number=0
number_buttons.forEach(boton=>{
    boton.addEventListener('click',()=>{
        if(screen.textContent=="0"){
        screen.textContent="";
        }
        screen.textContent+=boton.textContent;   
    })

})
reset_button.addEventListener('click',()=>{
    screen.textContent="0";
    number=0;
    op="";
    
})
del_button.addEventListener('click',()=>{
    if(screen.textContent.length===1){
        screen.textContent="0";
    }
    else{
        screen.textContent=screen.textContent.slice(0,-1);
    }
})

function setoperacion(ope){
    number=parseFloat(screen.textContent);
    op=ope;
    screen.textContent="0";
}
plus_button.addEventListener('click',()=>setoperacion("+"));
minus_button.addEventListener('click',()=>setoperacion("-"));
times_button.addEventListener('click',()=>setoperacion("*"));
divide_button.addEventListener('click',()=>setoperacion("/"));
equal_button.addEventListener('click',()=>{
    number2=parseFloat(screen.textContent);
    if(op=="+"){
        number+=number2;
    }
    else if(op=="-"){
        number-=number2;
    }
    else if(op=="*"){
        number*=number2;
    }
    else if (op=="/"){
        if(number2==0){
            alert("you can't divide by 0")
        }
        else number/=number2;
    }
    screen.textContent=number;
    op="";
})
console.log(number);
const themeSlider=document.getElementById('slider');
themeSlider.addEventListener("input",()=>{
    const value=parseInt(themeSlider.value);
    if(value===0){
        document.documentElement.style.setProperty("--main-background", "hsl(222, 26%, 31%)");
        document.documentElement.style.setProperty("--toggle-keypad-background", "hsl(223, 31%, 20%)");
        document.documentElement.style.setProperty("--screen-background", "hsl(224, 36%, 15%)");
        document.documentElement.style.setProperty("--key-background-reset0", "hsl(225, 21%, 49%)");
        document.documentElement.style.setProperty("--key-shadow-reset0", "hsl(224, 28%, 35%)");
        document.documentElement.style.setProperty("--key-toggle-background", "hsl(6, 63%, 50%)");
        document.documentElement.style.setProperty("--key-shadow-del", "hsl(6, 70%, 34%)");
        document.documentElement.style.setProperty("--key-background", "#f1ede6");
        document.documentElement.style.setProperty("--key-shadow", "hsla(29, 16%, 65%)");
        document.documentElement.style.setProperty("--text", "hsl(221, 14%, 31%)");
        document.documentElement.style.setProperty("--white", "hsl(0, 100%, 100%)");
        document.querySelectorAll('.main__head *').forEach(el => {el.style.color = "hsl(0, 100%, 100%)";});
        document.querySelector('.main__screen-text').style.color="hsl(0, 100%, 100%)";
    }
    else if(value==1){
        document.documentElement.style.setProperty("--main-background", "hsl(0, 0%, 90%)"); // Gray 200
        document.documentElement.style.setProperty("--toggle-keypad-background", "hsl(0, 5%, 81%)"); // Gray 300
        document.documentElement.style.setProperty("--screen-background", "hsl(0, 0%, 93%)"); // Gray 100

    // Keys
        document.documentElement.style.setProperty("--key-background-reset0", "hsl(185, 42%, 37%)"); // Blue 500
        document.documentElement.style.setProperty("--key-shadow-reset0", "hsl(185, 58%, 25%)"); // Blue 600
        document.documentElement.style.setProperty("--key-toggle-background", "hsl(25, 98%, 40%)"); // Orange 700
        document.documentElement.style.setProperty("--key-shadow-del", "hsl(25, 99%, 27%)"); // Orange 800
        document.documentElement.style.setProperty("--key-background", "hsl(0, 0%, 90%)"); // Grey 200
        document.documentElement.style.setProperty("--key-shadow", "hsl(35, 11%, 61%)"); // Grey orange 450
        

    // Text
        document.documentElement.style.setProperty("--text", "hsl(60, 10%, 19%)"); // Gray 900
        document.documentElement.style.setProperty("--white", "hsl(0, 100%, 100%)"); // White

        document.querySelectorAll('.main__head *').forEach(el => {el.style.color = "hsl(60, 10%, 19%)";});
        document.querySelector('.main__screen-text').style.color="hsl(60, 10%, 19%)";
    }
    else if (value === 2) {
        // Tema 2
        document.documentElement.style.setProperty("--main-background", "hsl(268, 75%, 9%)"); // Purple 950
        document.documentElement.style.setProperty("--toggle-keypad-background", "hsl(268, 71%, 12%)"); // Purple 900
        document.documentElement.style.setProperty("--screen-background", "hsl(268, 71%, 12%)"); // Purple 900

    // Keys
        document.documentElement.style.setProperty("--key-background-reset0", "hsl(281, 89%, 26%)"); // Purple 800
        document.documentElement.style.setProperty("--key-shadow-reset0", "hsl(285, 91%, 52%)"); // Purple 400
        document.documentElement.style.setProperty("--key-toggle-background", "hsl(176, 100%, 44%)"); // Cyan 500
        document.documentElement.style.setProperty("--key-shadow-del", "hsl(177, 92%, 70%)"); // Cyan 400
        document.documentElement.style.setProperty("--key-background", "hsl(268, 47%, 21%)"); // Purple 850
        document.documentElement.style.setProperty("--key-shadow", "hsl(290, 70%, 36%)"); // Purple 750

    // Text
        document.documentElement.style.setProperty("--text", "hsl(52, 100%, 62%)"); // Yellow 300
        document.documentElement.style.setProperty("--white", "hsl(0, 100%, 100%)"); // White

        document.querySelectorAll('.main__head *').forEach(el => {el.style.color = "hsl(52, 100%, 62%)";});
        document.querySelector('.main__screen-text').style.color="hsl(52, 100%, 62%)";
        document.querySelector('.equal').style.color="black";
    }

})