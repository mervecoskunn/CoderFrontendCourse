function whicDay(){
    var userDay =document.getElementById('userday').value;
    var resultArea = document.getElementById('result');
  
    switch(userDay){
            case "1":
            resultArea.innerText = "monday"; break;
            case "2":
            resultArea.innerText = "tuesday"; break;
            case "3":
            resultArea.innerText = "wednesday"; break;
            case "4":
            resultArea.innerText = "thursday"; break;
            case "5":
            resultArea.innerText = "friday"; break;
            case "6":
            resultArea.innerText = "saturday"; break;
            case "7":
            resultArea.innerText = "sunday"; break;
            default:
                resultArea.innerText = "Please write a number 1 to 7!!"; break;
    }
 }