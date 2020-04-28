"use strict";

{
    const btn =document.getElementById("btn")

    btn.addEventListener("click", ()=> {
        // const results =["","","","",];
        // const results =["","","","",];

        // const n = Math.floor(Math.random()*results.length);
        // btn.textContent=results[n];

        // btn.textContent= results[Math.floor(Math.random()*results.length)];
        const n =Math.random();
        if (n<0.05) {
            btn.textContent ="大吉";//5%
        }else if (n<0.2){
            btn.textContent ="小吉"; //15%
        }else {
            btn.textContent = "凶" //80%

        }

        //btn.textContent= n;

        // switch (n){
        //     case 0:
        //         btn.textContent="🍙"
        //         break
        //     case 1:
        //         btn.textContent="♡"
        //         break 
        //     case 2:        
        //         btn.textContent="🐶"
        //         break 
        // }
    });
}