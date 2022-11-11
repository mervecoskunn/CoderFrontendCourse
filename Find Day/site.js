function findDay(){
    var userDay = document.getElementById('userday').value;
    var resultArea = document.getElementById('result');
    switch(userDay){
     case "1":
     resultArea.innerText= "Monday";break;
     case "2":
     resultArea.innerText= "Tuesday";break;
     
     case "3":
     resultArea.innerText= "Wednesday";break;
     
     case "4":
     resultArea.innerText= "Thursday";break;
     
     case "5":
     resultArea.innerText= "Friday";break;
     
     case "6":
     resultArea.innerText= "Saturday";break;
     
     case "7":
     resultArea.innerText= "Sunday";break;
     default:
        resultArea.innerHTML = "<p style='color:red;'>'Please write a number 1 to 7!!'; break;</p>";

    }
}