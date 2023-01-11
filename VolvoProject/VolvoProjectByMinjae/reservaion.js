


var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(37.36515, 127.102583), // 지도의 중심좌표
        level: 11 // 지도의 확대 레벨
    };
    
// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption);  


//지도에 마커 표시
//분당
var marker1 = new kakao.maps.Marker({
   map: map, 
   position: new kakao.maps.LatLng(37.36515, 127.102583)
   });
//서초
var marker2 = new kakao.maps.Marker({
   map: map,   
   position: new kakao.maps.LatLng(37.50244, 127.058334)
   });
//송파
var marker3 = new kakao.maps.Marker({
   map: map, 
   position: new kakao.maps.LatLng(37.512367, 127.125453)
   });
   //원주
var marker4 = new kakao.maps.Marker({
   map: map, 
   position: new kakao.maps.LatLng(37.327268, 127.923297)
   });


// 커스텀 오버레이에 표시할 컨텐츠 입니다
// 커스텀 오버레이는 아래와 같이 사용자가 자유롭게 컨텐츠를 구성하고 이벤트를 제어할 수 있기 때문에
// 별도의 이벤트 메소드를 제공하지 않습니다 

var content1 = '<div class="wrap">' + 
            '    <div class="info">' + 
            '        <div class="title">' + 
            '            볼보 분당 판교 서비스센터' + 
            '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
            '        </div>' + 
            '        <div class="body">' + 
            '            <div class="img">' +
            '                <img src="img/volvo_bundang.jpg" width="73" height="70">' +
            '           </div>' + 
            '            <div class="desc">' + 
            '                <div class="ellipsis">경기도 성남시 분당구 대왕판교로 200</div>' + 
            '                <div class="jibun ellipsis">(우) 13552 (지번) 금곡동 97-5</div>' + 
            '                <div><a href="https://www.kakaocorp.com/main" target="_blank" class="link">홈페이지</a></div>' + 
            '            </div>' + 
            '        </div>' + 
            '    </div>' +    
            '</div>';
var content2 = '<div class="wrap">' + 
'    <div class="info">' + 
'        <div class="title">' + 
'            볼보 서초 서비스센터' + 
'            <div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
'        </div>' + 
'        <div class="body">' + 
'            <div class="img">' +
'                <img src="img/volvo_seocho.jpg" width="73" height="70">' +
'           </div>' + 
'            <div class="desc">' + 
'                <div class="ellipsis">서울 서초구 사임당로 114</div>' + 
'                <div class="jibun ellipsis">(우) 06642 (지번) 서초동 1631-7</div>' + 
'                <div><a href="https://www.kakaocorp.com/main" target="_blank" class="link">홈페이지</a></div>' + 
'            </div>' + 
'        </div>' + 
'    </div>' +    
'</div>';
var content3 = '<div class="wrap">' + 
'    <div class="info">' + 
'        <div class="title">' + 
'            볼보 송파 서비스센터' + 
'            <div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
'        </div>' + 
'        <div class="body">' + 
'            <div class="img">' +
'                <img src="img/volvo_songpa.jpeg" width="73" height="70">' +
'           </div>' + 
'            <div class="desc">' + 
'                <div class="ellipsis">서울 서초구 사임당로 114</div>' + 
'                <div class="jibun ellipsis">(우) 06642 (지번) 서초동 1631-7</div>' + 
'                <div><a href="https://www.kakaocorp.com/main" target="_blank" class="link">홈페이지</a></div>' + 
'            </div>' + 
'        </div>' + 
'    </div>' +    
'</div>';
var content4 = '<div class="wrap">' + 
'    <div class="info">' + 
'        <div class="title">' + 
'            볼보 원주 서비스센터' + 
'            <div class="close" onclick="closeOverlay()" title="닫기"></div>' + 
'        </div>' + 
'        <div class="body">' + 
'            <div class="img">' +
'                <img src="img/volvo_wonju.jpg" width="73" height="70">' +
'           </div>' + 
'            <div class="desc">' + 
'                <div class="ellipsis">서울 서초구 사임당로 114</div>' + 
'                <div class="jibun ellipsis">(우) 06642 (지번) 서초동 1631-7</div>' + 
'                <div><a href="https://www.kakaocorp.com/main" target="_blank" class="link">홈페이지</a></div>' + 
'            </div>' + 
'        </div>' + 
'    </div>' +    
'</div>';
// 마커 위에 커스텀오버레이를 표시합니다
// 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다

// 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
var arr = [marker1, marker2, marker3, marker4];
var contentArr= [content1, content2, content3, content4];
var prev;
var overlay;


arr.forEach(function(item) {
   kakao.maps.event.addListener(item, 'click', function() {
      if(prev != undefined) {
         prev.setMap(null)
      }

      overlay = new kakao.maps.CustomOverlay({
         content: contentArr[(item.zd.name).substring(22)-1],
         map: map,
         position: item.getPosition()       
      });
      overlay.setMap(map);
      
      prev = overlay;
   });
});

   
function closeOverlay() {
   overlay.setMap(null);     
}


/* 서비스센터 클릭 시 정보 나타내기 */
ul = document.querySelector(".asList_ul");
info = document.querySelectorAll(".info");


ul.addEventListener("click", function(e){
   if(e.target.tagName != "SPAN") return;
   
   e.target.parentElement.nextElementSibling.classList.toggle("hide");
   
   for(var i = 0; i < info.length; i++){
      if(e.target.parentElement.nextElementSibling != info[i]){
         info[i].classList.add("hide");
      } 
   }
   
   var i= e.target.parentElement.firstElementChild.innerHTML;
   
   if(prev != undefined) {
      prev.setMap(null)
   }

   overlay = new kakao.maps.CustomOverlay({
      content: contentArr[(arr[i-1].zd.name).substring(22)-1],
      map: map,
      position: arr[i-1].getPosition()       
   });
   overlay.setMap(map);
   
   prev = overlay;


});

ul.addEventListener("click", function(e){

   if(e.target.tagName != "BUTTON") return;

   var select = e.target.parentElement.previousElementSibling.lastElementChild.innerHTML;

   console.dir(opener.document)
   opener.document.getElementById("branch").value = select;

   window.close();
});