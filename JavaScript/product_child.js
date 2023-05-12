//nhấn hiển thị ảnh sp
const childListImgs = document.querySelectorAll(".child-list-img img");
  const productImg = document.querySelector(".product_child-img img");

  childListImgs.forEach(img => {
    img.addEventListener("click", function() {
      const src = this.getAttribute("src");
      productImg.setAttribute("src", src);
    });
  });
