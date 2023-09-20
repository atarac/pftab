document.addEventListener("DOMContentLoaded", function() {
  const tabMenu =document.querySelector('.tab-menu');
  const tabContents = document.querySelectorAll('.tab-content');

  function hideAllContents() {
    tabContents.forEach(content => {
      content.style.display = 'none';
    });
  }

  function showContent(tabNumber) {
    const content = document.querySelector(`.content${tabNumber}`);
    if (content) {
      content.style.display = 'block';
    }
  }

  if (tabMenu) {
    tabMenu.addEventListener('click', function(e) {
      if (e.target.tagName === 'LI') {
        const clickedMenu = e.target;
        const tabNumber = clickedMenu.className.replace('menu', '');

        hideAllContents();
        showContent(tabNumber);
      }
    });
  }
});