const createFooter = () => {
    return `<footer class="footer">
    <div class="footer__container container">
        <small class="footer__copyright">Copyright © 2022</small>
        <small class="footer-contacts__text">Created by <a class="footer-contacts__gh-link"
                href="https://github.com/lubov-nefed">Lubov Nefed</a></small>
        <div class="footer__links">
            <a class="footer-contacts__link" href="https://lubov-nefed.github.io/rsschool-cv/">
                <img class="footer-contacts__img footer-contacts__cv"
                    srcset=""
                    sizes=""
                    src="https://raw.githubusercontent.com/lubov-nefed/your-profile/main/images/linkedin-icon.svg"
                    alt="Go to cv webpage">
            </a>
            <a class="footer-contacts__link" href="https://linkedin.com/in/lubov-nefed">
                <img class="footer-contacts__img footer-contacts__linkedIn" src="https://raw.githubusercontent.com/lubov-nefed/your-profile/main/images/cv-icon-31w.svg"
                    alt="Go to cv webpage">
            </a>
        </div>
    </div>
    </footer>`
} ;

export { createFooter }