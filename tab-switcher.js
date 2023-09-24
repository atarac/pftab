document.addEventListener("DOMContentLoaded", function() {

  const tabMenus = document.querySelectorAll('.tab-menu');

  tabMenus.forEach(tabMenu => {
    const tabContents = tabMenu.nextElementSibling.querySelectorAll('.tab-content');
    const tabMenuItems = tabMenu.querySelectorAll('li');

    function hideAllContents() {
      tabContents.forEach(tabContent => {
        tabContent.style.display = 'none'; 
      });
    }

    function removeActiveFromAllMenus() {
      tabMenuItems.forEach(item => {
        item.classList.remove('active');
      });
    }

    function showContent(tabNumber) {
      const content = tabMenu.nextElementSibling.querySelector(`.content${tabNumber}`);
      if (content) {
        content.style.display = 'block';
      }
    }

    hideAllContents(); 

    const activeMenuItem = tabMenu.querySelector('li.active');
    if (activeMenuItem) {
      const activeTabNumber = activeMenuItem.className.replace('menu', '').replace(' active', '');
      showContent(activeTabNumber);
    }

    tabMenu.addEventListener('click', function(e) {
      if (e.target.tagName === 'LI') {
        const clickedMenu = e.target;
        const tabNumber = clickedMenu.className.replace('menu', '').replace(' active', '');

        removeActiveFromAllMenus();
        clickedMenu.classList.add('active');
        hideAllContents();
        showContent(tabNumber);
      }
    });
  });
});
