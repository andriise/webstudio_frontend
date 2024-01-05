export const MobileBurger = () => {
  return (
    <div class="menu-container js-menu-container" id="mobile-menu">
      <button class="menu-container-close__btn js-close-menu">
        <svg width="40" height="40">
          <use href="./images/icons.svg#close-svg"></use>
        </svg>
      </button>

      <nav class="mobile-nav">
        <ul class="mobile-nav__list">
          <li class="mobile-nav__item">
            <a href="./index.html" class="mobile-nav__link current">
              Студія
            </a>
          </li>
          <li class="mobile-nav__item">
            <a href="./portfolio.html" class="mobile-nav__link">
              Портфоліо
            </a>
          </li>
          <li class="mobile-nav__item">
            <a href="" class="mobile-nav__link">
              Контакти
            </a>
          </li>
        </ul>
      </nav>
      <div class="mobile-thumb">
        <ul class="mobile__list">
          <li class="mobile__item">
            <a href="tel:+380961111111" class="mobile__link mobile__tel">
              +38 096 111 11 11
            </a>
          </li>
          <li class="mobile__item">
            <a href="mailto:info@devstudio.com" class="mobile__link">
              info@devstudio.com
            </a>
          </li>
        </ul>
        <ul class="mobile-socials">
          <li class="mobile-socials__item">
            <a href="" class="mobile-social">
              Instagram
            </a>
          </li>

          <li class="mobile-socials__item">
            <a href="" class="mobile-social">
              Twitter
            </a>
          </li>

          <li class="mobile-socials__item">
            <a href="" class="mobile-social">
              Facebook
            </a>
          </li>

          <li>
            <a href="" class="mobile-social">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
