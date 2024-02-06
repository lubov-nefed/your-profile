import { createFooter } from '../common-blocks/footer/footer-html.js';
import { createHeader } from '../common-blocks/header/header-html.js'
import { tabsHandler, likeHover } from '../pages/profile-preview/profile-preview.js';
import { validateForm } from '../pages/create-account/create-account.js';
import {toggleTheme} from './toggle-theme.js';

// Insert Header and Footer
const main = document.querySelector('.main');
const currentPath = window.location.pathname;
const headerHtml = createHeader(currentPath);
const footerHtml = createFooter();

const renderComponent = (html, targetEl, position) => {  
  targetEl.insertAdjacentHTML(position, html);
}

renderComponent(headerHtml, main, 'beforebegin');
renderComponent(footerHtml, main, 'afterend');

// Add Event Listener to Theme Btn
const themeBtn = document.querySelector('.header__theme-btn');
themeBtn.addEventListener('click', toggleTheme);
