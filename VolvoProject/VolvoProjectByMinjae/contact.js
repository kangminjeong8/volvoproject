var branch = document.querySelector("#branch");
branch.addEventListener("click", function(e){
   window.open("reservation.html", "예약", "width=1000px, height=780px, left=100px, top=100px location=no")
   
})

var submitButton = document.querySelector("#submitButton");
submitButton.addEventListener("click", function(){
   // alert("예약이 완료되었습니다.");
   location.href="index.html";
})