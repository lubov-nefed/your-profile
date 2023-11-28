const styleLinkElem = document.querySelector('.stylesheet');

const themeData = {
  light: {
    href: './css/main.css',
    mainLogoSrc: './images/main-heading-img.svg',
    themeBtnSrc: './images/light-dark-icon.svg',
    cvSrc: 'images/cv-icon.svg',
    linkedInSrc: 'images/linkedin-icon.svg'
  },
  dark: {
    href: './css/dark-theme.css',
    mainLogoSrc: './images/main-heading-img--dark-theme.svg',
    themeBtnSrc: './images/light-dark-icon--dark-theme.svg',
    cvSrc: 'images/cv-icon--dark-theme.svg',
    linkedInSrc: 'images/linkedin-icon--dark-theme.svg'
  }
}

const getHeaderElements = () => {
  const headerLogoLight = document.querySelector('.header__logo--light-theme');
  const headerLogoDark = document.querySelector('.header__logo--dark-theme');
  const themeBtn = document.querySelector('.theme-btn__img');
  return [headerLogoLight, headerLogoDark, themeBtn]
}

const getFooterElements = () => {
  const cvLink = document.querySelector('.footer-contacts__cv');
  const linkedIn = document.querySelector('.footer-contacts__linkedIn');
  return [cvLink, linkedIn]
}

const getCurrentTheme = () => {  
  const cssHref = styleLinkElem.getAttribute('href');
  const isLight = cssHref === themeData.light.href;
  return isLight ? 'dark' : 'light'
}

const changeHeaderLogo = (switchTo, headerLogoLight, headerLogoDark) => {
  if (switchTo === 'dark' ) {
    headerLogoLight.classList.add('undisplayed');
    headerLogoDark.classList.remove('undisplayed');
  } else {      
  headerLogoDark.classList.add('undisplayed');
  headerLogoLight.classList.remove('undisplayed');
  }
}

const toggleTheme = () => {
  let [headerLogoLight, headerLogoDark, themeBtn] = getHeaderElements();
  let [cvLink, linkedIn] = getFooterElements();
  const mainLogo = document.querySelector('.main__heading-img');
  let switchTo =  getCurrentTheme();

  const applyStyles = (switchTo) => {
    styleLinkElem.href = themeData[switchTo].href;
    changeHeaderLogo(switchTo, headerLogoLight, headerLogoDark);
    themeBtn.src = themeData[switchTo].themeBtnSrc;
    if (mainLogo) mainLogo.src = themeData[switchTo].mainLogoSrc;  
    cvLink.src = themeData[switchTo].cvSrc;
    linkedIn.src = themeData[switchTo].linkedInSrc;
  }

  applyStyles(switchTo);
}

export { toggleTheme }