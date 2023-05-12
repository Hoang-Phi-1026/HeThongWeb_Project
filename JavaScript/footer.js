//gắn links footer vào các layout khác
const footerContainer = document.querySelector('#footer');
      const footerRequest = new XMLHttpRequest();
      footerRequest.open('GET', '/HTML/footer.html');
      footerRequest.onload = () => {
        footerContainer.innerHTML = footerRequest.responseText;
      };
      footerRequest.send();
