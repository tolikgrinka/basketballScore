
let home = document.getElementById("home");
let guest = document.getElementById("guest");
let count = 0;
let count1 = 0;
 function add(){
    count += 1
    home.textContent = count;
 }
 function add1(){
    count += 2
    home.textContent =  count;
 } 
 function add2(){
    count += 3
    home.textContent =  count;
 } 
 function add3(){
    count1 += 1
    guest.textContent =count1;
 } 
 function add4(){
    count1 += 2
    guest.textContent =  count1;
 } 
 function add5(){
    count1 += 3
    guest.textContent = count1;
 }
 function delete1(){
    home.textContent = 0;
    count = 0;
 }
 function delete2(){
    guest.textContent = 0;
    count1 = 0;
 }