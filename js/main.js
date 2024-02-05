import { tabsHandler, likeHover } from '../pages/profile-preview/profile-preview.js';
import { validateForm } from '../pages/create-account/create-account.js';
import {toggleTheme} from './toggle-theme.js';

/* ToDo
1. Fix tabsHandler for profile-preview page
*/

const themeBtn = document.querySelector('.header__theme-btn');
themeBtn.addEventListener('click', toggleTheme);
