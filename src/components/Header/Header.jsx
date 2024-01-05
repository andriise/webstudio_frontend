export const Header = () => {
  return (
    <header class="header">
      <div class="container header-container">
        <a href="" class="logo">
          <span class="web">Web</span>Studio
        </a>
        <nav class="nav">
          <ul class="nav__list">
            <li class="nav__item">
              <a href="./index.html" class="nav__link current">
                Студія
              </a>
            </li>
            <li class="nav__item">
              <a href="./portfolio.html" class="nav__link">
                Портфоліо
              </a>
            </li>
            <li class="nav__item">
              <a href="" class="nav__link">
                Контакти
              </a>
            </li>
          </ul>
        </nav>
        <ul class="header__list">
          <li class="header__item">
            <a href="mailto:info@devstudio.com" class="header__link">
              <svg width="16px" height="12px" class="header__icon">
                <use href="./images/icons.svg#mail"></use>
              </svg>
              info@devstudio.com
            </a>
          </li>
          <li class="header__item">
            <a href="tel:+380961111111" class="header__link">
              <svg width="10px" height="16px" class="header__icon">
                <use href="./images/icons.svg#phone"></use>
              </svg>
              +38 096 111 11 11
            </a>
          </li>
        </ul>
        <button
          class="menu_btn js-open-menu"
          type="button"
          aria-expanded="false"
          aria-controls="mobile-menu"
        >
          <svg width="40" height="40">
            <use href="./images/icons.svg#mb_menu_open"></use>
          </svg>
        </button>
      </div>
    </header>
  );
};
