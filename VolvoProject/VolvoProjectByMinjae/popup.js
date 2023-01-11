if(document.cookie.indexOf("Cookie") == -1){
    window.onload = function () {
        window.open("popup.html", 
                    "popup", 
                    "width=300px, height=420px, left=50px, top=100px, location=no"); // open("띄울창", "별칭", "옵션")

        window.open("popup2.html", 
                    "gold", 
                    "width=300px, height=380px, left=400px, top=100px, location=no"); // location=yes|no|1|0 : 주소 표시줄 사용여부를 지정
        
            
    } 

}