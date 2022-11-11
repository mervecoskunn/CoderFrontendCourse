function grade_calculate(){
    var userGrade = document.getElementById('grade').value;
    var resultArea = document.getElementById('result');
    var resultGrade;
    if(userGrade>=0 && userGrade < 45)
    resultGrade=1;
    else if(userGrade>=45 && userGrade<55)
    resultGrade=2;
    else if(userGrade>=55 && userGrade<70)
    resultGrade=3;
    else if(userGrade>=70 && userGrade<85)
    resultGrade=4;
    else if(userGrade>=85 && userGrade<=100)
    resultGrade=5;
    else{
    resultArea.innerHTML = "<span style='color: red;'>Please write a number 0 to 100.</span>";
    return;
}

    resultArea.innerHTML="Your Grade : "+ resultGrade;


}