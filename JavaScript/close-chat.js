const closeIcons = document.querySelectorAll('.close-chat i');
  closeIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
      const parent = icon.parentNode.parentNode;
      parent.style.display = 'none';
    });
  });