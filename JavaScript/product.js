//banner iphone
var images = ["/photos/banner-iphone1.png","/photos/banner-iphone2.png","/photos/banner-iphone3.png" ];
var currentImageIndex = 0;

function changeImage() {
  var banner = document.querySelector(".banner_product img");
  banner.src = images[currentImageIndex];
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
}
setInterval(changeImage, 2000);

//end

