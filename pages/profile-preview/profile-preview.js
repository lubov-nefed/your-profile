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
  const likeBtnImg = document.querySelector('.like-btn__img');
  const likeBtnText = document.querySelector('.like-btn__text');
  const mouseenterHandler = () => {    
    likeBtnImg.src = '../../images/like-icon--hovered.svg';
    likeBtnText.style.color = 'var(--additional-accent-color)';
  };
  const mouseleaveHandler = () => {
    likeBtnImg.src = '../../images/like-icon.svg';
    likeBtnText.style.color = 'var(--main-accent-color)';
  }
  likeBtn.addEventListener('mouseenter', mouseenterHandler);
  likeBtn.addEventListener('mouseleave', mouseleaveHandler);
}

export { tabsHandler, likeHover}