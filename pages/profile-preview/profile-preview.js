const activateTab = (e) => {
  const activeBtn = document.querySelector('.tabs-btns__link--active');
  activeBtn.classList.remove('tabs-btns__link--active');

  e.currentTarget.classList.add('tabs-btns__link--active');

  const activeTabContent = document.querySelector('.active-tab');
  activeTabContent.classList.remove('active-tab');
  activeTabContent.classList.add('inactive-tab');

  const label = e.currentTarget.dataset.label;
  const content = document.querySelector(`.${label}`);
  content.classList.remove('inactive-tab');
  content.classList.add('active-tab');
}

function tabsHandler() {
  const tabsBtnsCollection = document.querySelectorAll('.tabs-btns__link');
  tabsBtnsCollection.forEach(btn => btn.addEventListener('click', activateTab));
}

export { tabsHandler }