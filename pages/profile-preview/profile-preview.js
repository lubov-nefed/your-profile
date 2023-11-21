function tabsHandler() {
  const tabsBtnsCollection = document.querySelectorAll('.tabs-btns__link');const activateTab = (e) => {
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
  tabsBtnsCollection.forEach(btn => btn.addEventListener('click', activateTab));
}



function likeHover() {
  const likeBtn = document.querySelector('.profile__like-btn');
  const svg = document.querySelector('.like-btn__svg-path');
  const likeText = document.querySelector('.like-btn__text');
  const mouseenterHandler = () => {
    svg.style.fill = '#5b46ae';
    likeText.style.color = '#48dfb7'
  };
  const mouseleaveHandler = () => {
    svg.style.fill = '#48dfb7';
    likeText.style.color = '#5b46ae'
  }
  likeBtn.addEventListener('mouseenter', mouseenterHandler);
  likeBtn.addEventListener('mouseleave', mouseleaveHandler);
}

export { tabsHandler, likeHover }