//document.getElementById("demo").innerHTML='demo'

var x = 0;
var backup = {};
backup.h1 = document.querySelector("h1").innerHTML;
backup.h21 = document.querySelector("h2").innerHTML;
backup.h22 = document.querySelector("h2").style.color;
backup.button2 = document.querySelector("button").style.border;
backup.button3 = document.querySelector("button").style.borderRadius;
backup.img1 = document.querySelector("img").style.height;
backup.img2 = document.querySelector("img").style.width;
backup.p = document.querySelector("p").innerHTML
backup.title = document.querySelector("title").innerHTML

function handleclick(){
    if (x==0){
        document.querySelector("h1").innerHTML="Information";
        document.querySelector("h1").style.color="black";
        document.querySelector("h2").innerHTML="BMW M5 competition";
        document.querySelector("h2").style.color="black";
        document.querySelector("img").setAttribute("src","./img.jpg");
        document.querySelector("img").style.height="200px";
        document.querySelector("img").style.width="300px";
        document.querySelector("p").innerHTML="Even sportier, even more luxurious, even more exclusive : The BMW m5 cs is the new top model from BMW M.";
        document.querySelector("#btn1").innerHTML="Back";
        document.querySelector("#btn1").style.border="5px solid black";
        document.querySelector("#btn1").style.borderRadius="50px";
        document.querySelector("title").innerHTML="BMW";
        x = 1;
    }

    else{
        document.querySelector("h1").innerHTML=backup.h1;
        document.querySelector("h1").style.color=backup.h22;
        document.querySelector("h2").innerHTML=backup.h21;
        document.querySelector("h2").style.color=backup.h22;
        document.querySelector("#btn1").innerHTML="BMW M5";
        document.querySelector("#btn1").style.border=backup.button2;
        document.querySelector("#btn1").style.borderRadius=backup.button3;
        document.querySelector("img").setAttribute("src","./Cars.avif");
        document.querySelector("img").style.height=backup.img1;
        document.querySelector("img").style.width=backup.img2;
        document.querySelector("p").innerHTML=backup.p;
        document.querySelector("title").innerHTML=backup.title;
        x = 0;  
    }
}

document.getElementById("btn1").onclick=handleclick;

var y = 0;
function handleclick1(){
    if (y==0){
        document.querySelector("h1").innerHTML="Information";
        document.querySelector("h1").style.color="blue";
        document.querySelector("h2").innerHTML="Rolls Royce Phantom";
        document.querySelector("h2").style.color="blue";
        document.getElementById("btn2").innerHTML="Back";
        document.getElementById("btn2").style.border="5px solid black";
        document.getElementById("btn2").style.borderRadius="50px";
        document.querySelector("img").setAttribute("src","./RR.jpg");
        document.querySelector("img").style.height="200px";
        document.querySelector("img").style.width="400px";
        document.querySelector("p").innerHTML="THE PINNACLE OF ROLLS-ROYCE. An untameable legend. An icon for icons. Phantom exists alone at the apex of luxury. Its unprecedented design is an evolution in mastery — invigorating the mavericks who command its splendour.";
        document.querySelector("title").innerHTML="Rolls Royce";
        y = 1;
    }

     else{
         document.querySelector("h1").innerHTML=backup.h1;
         document.querySelector("h1").style.color=backup.h22;
         document.querySelector("h2").innerHTML=backup.h21;
         document.querySelector("h2").style.color=backup.h22;
         document.getElementById("btn2").innerHTML="Rolls Royce Phantom";
         document.getElementById("btn2").style.border=backup.button2;
         document.getElementById("btn2").style.borderRadius=backup.button3;
         document.querySelector("img").setAttribute("src","./Cars.avif");
         document.querySelector("img").style.height=backup.img1;
         document.querySelector("img").style.width=backup.img2;
         document.querySelector("p").innerHTML=backup.p;
         document.querySelector("title").innerHTML=backup.title;
         y = 0;  
     }
}

document.getElementById("btn2").onclick=handleclick1;

var z = 0;
function handleclick2(){
    if (z==0){
        document.querySelector("h1").innerHTML="Information";
        document.querySelector("h1").style.color="gray";
        document.querySelector("h2").innerHTML="HELLO THAR";
        document.querySelector("h2").style.color="gray";
        document.getElementById("btn3").innerHTML="Back";
        document.getElementById("btn3").style.border="5px solid black";
        document.getElementById("btn3").style.borderRadius="50px";
        document.querySelector("img").setAttribute("src","./Thar.jpg");
        document.querySelector("img").style.height="250px";
        document.querySelector("img").style.width="400px";
        document.querySelector("p").innerHTML="An off-road legend that has been meticulously engineered to conquer the impossible. From its unmistakable retro-cool design to its uncompromising performance, the Thar is a true embodiment of rugged capability and adrenaline-fueled thrills. Whether you're a seasoned off-road enthusiast or a thrill seeker, this unstoppable force is ready to take you on an adrenaline-fueled journey like no other. Are you ready to explore the impossible?";
        document.querySelector("title").innerHTML="Mahindra Thar";
        z = 1;
    }

     else{
         document.querySelector("h1").innerHTML=backup.h1;
         document.querySelector("h1").style.color=backup.h22;
         document.querySelector("h2").innerHTML=backup.h21;
         document.querySelector("h2").style.color=backup.h22;
         document.getElementById("btn3").innerHTML="Mahindra Thar";
         document.getElementById("btn3").style.border=backup.button2;
         document.getElementById("btn3").style.borderRadius=backup.button3;
         document.querySelector("img").setAttribute("src","./Cars.avif");
         document.querySelector("img").style.height=backup.img1;
         document.querySelector("img").style.width=backup.img2;
         document.querySelector("p").innerHTML=backup.p;
         document.querySelector("title").innerHTML=backup.title;
         z = 0;  
     }
}

document.getElementById("btn3").onclick=handleclick2;

