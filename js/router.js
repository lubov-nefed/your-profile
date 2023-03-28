const routes = {
  '/': '/pages/home/index.html',
  '/profile-prevew': '/pages/profile-prevew/profile-prevew.html',
  '/login-form': '/pages/login-form/login-form.html',
}

const handleLocation = async () => {
  console.log('handle');
  const path = window.location.pathname;
  const route = routes[path];
  const html = await fetch(route).then((data) => data.text());
  document.querySelector('.main__container').innerHTML = html;

  
}

const route = (event) => {
  event.preventDefault();
  console.log('route');
  window.history.pushState({}, '', event.target.href || event.target.dataPath);
  handleLocation();
};


window.onpopstate = handleLocation;

window.route = route;

handleLocation()
  .then(() => {
    const createBtn = document.querySelector('.create-btn');
    const watchBtn = document.querySelector('.watch-btn');
    if (createBtn || watchBtn) {
      createBtn.addEventListener('click', route);
      watchBtn.addEventListener('click', route);
    }
});
