import {tabsHandler, likeHover } from '../pages/profile-preview/profile-preview.js';


const routes = {
  '/': '/pages/home/index.html',
  '/profile-prevew': '/pages/profile-preview/profile-preview.html',
  '/create-account': '/pages/create-account/create-account.html',
  '/login': '/pages/login/login.html',
}

const addListeners = (path) => {
  if (path === '/profile-prevew') {    
    const profileBtn = document.querySelector('.profile__btn');
    profileBtn.addEventListener('click', route);
    tabsHandler();
    likeHover();
  }
}

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path];
  const html = await fetch(route).then((data) => data.text());
  let app = document.querySelector('.main__container');
  app.innerHTML = html;
  addListeners(path);
}

window.onpopstate = handleLocation;

const route = (event) => {
  event.preventDefault();
  window.history.pushState({}, '', event.currentTarget.href || event.currentTarget.dataset.path);
  handleLocation();
};


handleLocation()
  .then(() => {
    const createBtn = document.querySelector('.create-btn');
    const watchBtn = document.querySelector('.watch-btn'); 
    const loginBtn = document.querySelector('.login-btn');
    createBtn.addEventListener('click', route);
    watchBtn.addEventListener('click', route);
    loginBtn.addEventListener('click', route);
});
