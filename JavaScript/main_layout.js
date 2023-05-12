//open-close menu mobile tablet
const openBTN = document.querySelector('.bx-menu');
const menu = document.querySelector('.menu2_tabphone');
const closeBTN =document.querySelector('.bx-x')
const openSearch = document.querySelector('.bx-search-alt');
const formSearch = document.querySelector('.search');
const closeSearch = document.querySelector('.container_input');
const searchInput = document.querySelector('.input-form-ip');


openBTN.addEventListener('click', function() {
	menu.style.display = 'block';
	openBTN.style.display = 'none';
    closeBTN.style.display='block';
});

closeBTN.addEventListener('click', function(){
    menu.style.display = 'none';
    openBTN.style.display= 'block';
    closeBTN.style.display='none';
});

openSearch.addEventListener('click', function(){
    formSearch.style.display='block';
});

closeSearch.addEventListener('click', function(){
    formSearch.style.display='none';
});

//search
searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      const searchTerm = searchInput.value;
      window.location.href = '/HTML/product_iphone.html';
    }
  });
//end


//banner list
var images = ["/photos/banner1.png", "/photos/banner7.png","/photos/banner2.png", "/photos/banner3.png", "/photos/banner4.png", "/photos/banner5.png" ,"/photos/banner6.png","/photos/banner8.png"];
    var currentImageIndex = 0;
    
    function changeImage() {
      var banner = document.getElementsByClassName("background-header-img")[0];
      banner.src = images[currentImageIndex];
    
      var dots = document.getElementsByClassName("dots")[0];
      var dotSpans = dots.getElementsByTagName("span");
      for (var i = 0; i < dotSpans.length; i++) {
        dotSpans[i].classList.remove("active");
      }
      dotSpans[currentImageIndex].classList.add("active");
    
      currentImageIndex++;
      if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
      }
    }
    
    setInterval(changeImage, 2000);
    
    var dots = document.getElementsByClassName("dots")[0];
    for (var i = 0; i < images.length; i++) {
      var dot = document.createElement("span");
      dot.setAttribute("onclick", "currentImageIndex = " + i + "; changeImage();");
      dots.appendChild(dot);
    }
    
    var firstDot = dots.getElementsByTagName("span")[0];
    firstDot.classList.add("active");
//end


//banner quảng cáo
const salesHeader = document.querySelector('.sales-header');
const bannerSalesHeader = document.querySelector('.banner_sales-header');

salesHeader.addEventListener('click', () => {
  bannerSalesHeader.style.display = 'none';
});
