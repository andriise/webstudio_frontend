export const Footer = () => {
  return (
    <footer class="footer">
      <div class="container footer-container">
        <div class="footer-content">
          <div class="footer-thumb">
            <address class="footer__address">
              <a href="" class="logo footer-logo">
                <span class="web">Web</span>Studio
              </a>
              <ul class="footer__list">
                <li class="footer__item">
                  <a
                    href="https://www.google.com.ua/maps/place/%D0%B1%D1%83%D0%BB.+%D0%9B%D0%B5%D1%81%D0%B8+%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%BA%D0%B8,+26,+%D0%9A%D0%B8%D0%B5%D0%B2,+02000/@50.4265807,30.5361971,17z/data=!3m1!4b1!4m5!3m4!1s0x40d4cf0e033ecbe9:0x57a4dffefec77da0!8m2!3d50.4265807!4d30.5383858?hl=ru"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="footer--map footer-address__link"
                  >
                    м. Київ, пр-т Лесі Українки, 26
                  </a>
                </li>
                <li class="footer__item">
                  <a
                    href="mailto:info@devstudio.com"
                    class="footer-address__link"
                  >
                    info@devstudio.com
                  </a>
                </li>
                <li class="footer__item">
                  <a href="tel:+380961111111" class="footer-address__link">
                    +38 096 111 11 11
                  </a>
                </li>
              </ul>
            </address>
          </div>
          <div class="subscribe">
            <h2 class="subscribe__title">Приєднуйтесь</h2>
            <ul class="subscribe__list">
              <li class="subscribe__item">
                <a
                  class="subscribe__link social-link"
                  href="https://www.instagram.com/"
                  rel="noreferrer nooppener nofollow"
                  target="_blank"
                >
                  <svg width="20" height="20">
                    <use href="./images/icons.svg#instagram"></use>
                  </svg>
                </a>
              </li>
              <li class="subscribe__item">
                <a
                  class="subscribe__link social-link"
                  href="https://twitter.com/?lang=ru"
                  rel="noreferrer nooppener nofollow"
                  target="_blank"
                >
                  <svg width="20" height="20">
                    <use href="./images/icons.svg#twitter"></use>
                  </svg>
                </a>
              </li>
              <li class="subscribe__item">
                <a
                  class="subscribe__link social-link"
                  href="https://m.facebook.com/login/?locale2=ru_RU"
                  rel="noreferrer nooppener nofollow"
                  target="_blank"
                >
                  <svg width="20" height="20">
                    <use href="./images/icons.svg#facebook"></use>
                  </svg>
                </a>
              </li>
              <li class="subscribe__item">
                <a
                  class="subscribe__link social-link"
                  href="https://ua.linkedin.com/"
                  rel="noreferrer nooppener nofollow"
                  target="_blank"
                >
                  <svg width="20" height="20">
                    <use href="./images/icons.svg#linkedin"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="footer-mail">
          <h2 class="subscribe__title">Підпишіться на розсилку</h2>
          <form class="footer-mail__form">
            <input
              class="footer-mail__window"
              name="mailing-list"
              type="email"
              placeholder="E-mail"
            />
            <button type="submit" class="footer-mail__btn btn">
              <p class="footer-mail__text">Підписатися</p>
              <svg width="24" height="24">
                <use href="./images/icons.svg#icon-send"></use>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};
