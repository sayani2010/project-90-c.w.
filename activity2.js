function back() {
    window.location="activity1.html";
}
function get_score(){
    score=localStorage.getItem("score");
    document.getElementById("update").innerHTML="<h1> Score :  " + score + "</h1>";
}