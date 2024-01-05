export const MainContent = () => {
	return (
    <main>
      <section class="hero">
        <div class="container">
          <h1 class="hero-title">Ефективні рішення для вашого бізнесу</h1>
          <button class="hero-btn btn" type="button" data-modal-open>
            Замовити послугу
          </button>
        </div>
      </section>
      <section class="ideology section">
        <div class="container ideology-container">
          <h2 class="visually-hidden">Яка наша ідеологія</h2>
          <ul class="ideology__list">
            <li class="ideology__item">
              <div class="ideology-thumb">
                <svg width="70" height="70">
                  <use href="./images/icons.svg#antenna"></use>
                </svg>
              </div>
              <h3 class="ideology__title">Увага до деталей</h3>
              <p class="ideology__text">
                Ідейні міркування, і навіть початок повсякденної роботи з
                формування позиції.
              </p>
            </li>
            <li class="ideology__item">
              <div class="ideology-thumb">
                <svg width="70" height="70">
                  <use href="./images/icons.svg#clock"></use>
                </svg>
              </div>
              <h3 class="ideology__title">Пунктуальність</h3>
              <p class="ideology__text">
                Завдання організації, особливо рамки і місце навчання кадрів
                тягне у себе.
              </p>
            </li>
            <li class="ideology__item">
              <div class="ideology-thumb">
                <svg width="70" height="70">
                  <use href="./images/icons.svg#diagram"></use>
                </svg>
              </div>

              <h3 class="ideology__title">Планування</h3>
              <p class="ideology__text">
                Так само консультація з широким активом значною мірою зумовлює.
              </p>
            </li>
            <li class="ideology__item">
              <div class="ideology-thumb">
                <svg width="70" height="70">
                  <use href="./images/icons.svg#astronaut"></use>
                </svg>
              </div>

              <h3 class="ideology__title">Сучасні технології</h3>
              <p class="ideology__text">
                Значимість цих проблем настільки очевидна, що реалізація
                планових завдань.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section class="images section">
        <div class="container images-container">
          <h2 class="title">Чим ми займаємося</h2>
          <ul class="images__list">
            <li class="images__item">
              <div class="images-thumb">
                <picture>
                  <source
                    media="(min-width: 1200px)"
                    srcset="
                      ./images/images_section/box1-1x.webp 1x,
                      ./images/images_section/box1-2x.webp 2x
                    "
                    type="image/webp"
                  />
                  <source
                    media="(min-width: 1200px)"
                    srcset="
                      ./images/images_section/box1.jpg    1x,
                      ./images/images_section/box1-2x.jpg 2x
                    "
                    type="image/jpg"
                  />
                  <img
                    src="./images/images_section/box1.jpg"
                    alt="Верстка на комп'ютері"
                    width="370"
                  />
                </picture>
                <div class="images-overlay">
                  <p class="images__text">Десктопні додатки</p>
                </div>
              </div>
            </li>
            <li>
              <div class="images-thumb">
                <picture>
                  <source
                    media="(min-width: 1200px)"
                    srcset="
                      ./images/images_section/box2-1x.webp 1x,
                      ./images/images_section/box2-2x.webp 2x
                    "
                    type="image/webp"
                  />
                  <source
                    media="(min-width: 1200px)"
                    srcset="
                      ./images/images_section/box2.jpg    1x,
                      ./images/images_section/box2-2x.jpg 2x
                    "
                    type="image/jpg"
                  />
                  <img
                    src="./images/images_section/box2.jpg"
                    alt="Верстка на комп'ютері"
                    width="370"
                  />
                </picture>
                <div class="images-overlay">
                  <p class="images__text">Мобільні додатки</p>
                </div>
              </div>
            </li>
            <li>
              <div class="images-thumb">
                <picture>
                  <source
                    media="(min-width: 1200px)"
                    srcset="
                      ./images/images_section/box3-1x.webp 1x,
                      ./images/images_section/box3-2x.webp 2x
                    "
                    type="image/webp"
                  />
                  <source
                    media="(min-width: 1200px)"
                    srcset="
                      ./images/images_section/box3.jpg    1x,
                      ./images/images_section/box3-2x.jpg 2x
                    "
                    type="image/jpg"
                  />
                  <img
                    src="./images/images_section/box3.jpg"
                    alt="Верстка на комп'ютері"
                    width="370"
                  />
                </picture>
                <div class="images-overlay">
                  <p class="images__text">Дизайнерські рішення</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section class="team section">
        <div class="container team-container">
          <h2 class="title">Наша команда</h2>
          <ul class="team__list">
            <li class="team__item">
              <picture>
                <source
                  media="(min-width: 320px)"
                  srcset="
                    ./images/team/man1_sm@1x.jpg 1x,
                    ./images/team/man1_sm@2x.jpg 2x
                  "
                  type="image/jpg"
                />
                <source
                  media="(min-width: 320px)"
                  srcset="
                    ./images/team/man1_sm@1x.webp 1x,
                    ./images/team/man1_sm@2x.webp 2x
                  "
                  type="image/webp"
                />
                <source
                  media="(min-width: 768px)"
                  srcset="
                    ./images/team/man1_md@1x.webp 1x,
                    ./images/team/man1_md@2x.webp 2x
                  "
                  type="image/webp"
                />
                <source
                  media="(min-width: 768px)"
                  srcset="
                    ./images/team/man1_md@1x.jpg 1x,
                    ./images/team/man1_md@2x.jpg 2x
                  "
                  type="image/jpg"
                />
                <source
                  media="(min-width: 1200px)"
                  srcset="
                    ./images/team/man1@1x.webp 1x,
                    ./images/team/man1@2x.webp 2x
                  "
                  type="image/webp"
                />
                <source
                  media="(min-width: 1200px)"
                  srcset="
                    ./images/team/man1@1x.jpg 1x,
                    ./images/team/man1@2x.jpg 2x
                  "
                  type="image/jpg"
                />
                <img
                  class="team__image"
                  src="./images/team/man1@1x.webp"
                  alt=""
                />
              </picture>
              <div class="team-block">
                <h3 class="team-name">Ігор Дем'яненко</h3>
                <p class="team__text">Product Designer</p>
                <ul class="team-icon__list">
                  <li>
                    <a
                      href="https://www.instagram.com/"
                      rel="noreferrer nooppener nofollow"
                      target="_blank"
                      class="team__link social-link"
                    >
                      <svg class="team__icon" width="20" height="20">
                        <use href="./images/icons.svg#instagram"></use>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/?lang=ru"
                      rel="noreferrer nooppener nofollow"
                      target="_blank"
                      class="team__link social-link"
                    >
                      <svg class="team__icon" width="20" height="20">
                        <use href="./images/icons.svg#twitter"></use>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m.facebook.com/login/?locale2=ru_RU"
                      rel="noreferrer nooppener nofollow"
                      target="_blank"
                      class="team__link social-link"
                    >
                      <svg class="team__icon" width="20" height="20">
                        <use href="./images/icons.svg#facebook"></use>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://ua.linkedin.com/"
                      rel="noreferrer nooppener nofollow"
                      target="_blank"
                      class="team__link social-link"
                    >
                      <svg class="team__icon" width="20" height="20">
                        <use href="./images/icons.svg#linkedin"></use>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="team__item">
              <picture>
                <source
                  media="(min-width: 320px)"
                  srcset="
                    ./images/team/man2_sm@1x.jpg 1x,
                    ./images/team/man2_sm@2x.jpg 2x
                  "
                  type="image/jpg"
                />
                <source
                  media="(min-width: 320px)"
                  srcset="
                    ./images/team/man2_sm@1x.webp 1x,
                    ./images/team/man2_sm@2x.webp 2x
                  "
                  type="image/webp"
                />
                <source
                  media="(min-width: 768px)"
                  srcset="
                    ./images/team/man2_md@1x.webp 1x,
                    ./images/team/man2_md@2x.webp 2x
                  "
                  type="image/webp"
                />
                <source
                  media="(min-width: 768px)"
                  srcset="
                    ./images/team/man2_md@1x.jpg 1x,
                    ./images/team/man2_md@2x.jpg 2x
                  "
                  type="image/jpg"
                />
                <source
                  media="(min-width: 1200px)"
                  srcset="
                    ./images/team/man2@1x.webp 1x,
                    ./images/team/man2@2x.webp 2x
                  "
                  type="image/webp"
                />
                <source
                  media="(min-width: 1200px)"
                  srcset="
                    ./images/team/man2@1x.jpg 1x,
                    ./images/team/man2@2x.jpg 2x
                  "
                  type="image/jpg"
                />
                <img
                  class="team__image"
                  src="./images/team/man2@1x.webp"
                  alt=""
                />
              </picture>
              <div class="team-block">
                <h3 class="team-name">Ольга Рєпіна</h3>
                <p class="team__text">Frontend Developer</p>
                <ul class="team-icon__list">
                  <li>
                    <a
                      href="https://www.instagram.com/"
                      rel="noreferrer nooppener nofollow"
                      target="_blank"
                      class="team__link social-link"
                    >
                      <svg class="team__icon" width="20" height="20">
                        <use href="./images/icons.svg#instagram"></use>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/?lang=ru"
                      rel="noreferrer nooppener nofollow"
                      target="_blank"
                      class="team__link social-link"
                    >
                      <svg class="team__icon" width="20" height="20">
                        <use href="./images/icons.svg#twitter"></use>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m.facebook.com/login/?locale2=ru_RU"
                      rel="noreferrer nooppener nofollow"
                      target="_blank"
                      class="team__link social-link"
                    >
                      <svg class="team__icon" width="20" height="20">
                        <use href="./images/icons.svg#facebook"></use>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://ua.linkedin.com/"
                      rel="noreferrer nooppener nofollow"
                      target="_blank"
                      class="team__link social-link"
                    >
                      <svg class="team__icon" width="20" height="20">
                        <use href="./images/icons.svg#linkedin"></use>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="team__item">
              <picture>
                <source
                  media="(min-width: 320px)"
                  srcset="
                    ./images/team/man3_sm@1x.jpg 1x,
                    ./images/team/man3_sm@2x.jpg 2x
                  "
                  type="image/jpg"
                />
                <source
                  media="(min-width: 320px)"
                  srcset="
                    ./images/team/man3_sm@1x.webp 1x,
                    ./images/team/man3_sm@2x.webp 2x
                  "
                  type="image/webp"
                />
                <source
                  media="(min-width: 768px)"
                  srcset="
                    ./images/team/man3_md@1x.webp 1x,
                    ./images/team/man3_md@2x.webp 2x
                  "
                  type="image/webp"
                />
                <source
                  media="(min-width: 768px)"
                  srcset="
                    ./images/team/man3_md@1x.jpg 1x,
                    ./images/team/man3_md@2x.jpg 2x
                  "
                  type="image/jpg"
                />
                <source
                  media="(min-width: 1200px)"
                  srcset="
                    ./images/team/man3@1x.webp 1x,
                    ./images/team/man3@2x.webp 2x
                  "
                  type="image/webp"
                />
                <source
                  media="(min-width: 1200px)"
                  srcset="
                    ./images/team/man3@1x.jpg 1x,
                    ./images/team/man3@2x.jpg 2x
                  "
                  type="image/jpg"
                />
                <img
                  class="team__image"
                  src="./images/team/man3@1x.webp"
                  alt=""
                />
              </picture>
              <div class="team-block">
                <h3 class="team-name">Микола Тарасов</h3>
                <p class="team__text">Marketing</p>
                <ul class="team-icon__list">
                  <li>
                    <a
                      href="https://www.instagram.com/"
                      rel="noreferrer nooppener nofollow"
                      target="_blank"
                      class="team__link social-link"
                    >
                      <svg class="team__icon" width="20" height="20">
                        <use href="./images/icons.svg#instagram"></use>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/?lang=ru"
                      rel="noreferrer nooppener nofollow"
                      target="_blank"
                      class="team__link social-link"
                    >
                      <svg class="team__icon" width="20" height="20">
                        <use href="./images/icons.svg#twitter"></use>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m.facebook.com/login/?locale2=ru_RU"
                      rel="noreferrer nooppener nofollow"
                      target="_blank"
                      class="team__link social-link"
                    >
                      <svg class="team__icon" width="20" height="20">
                        <use href="./images/icons.svg#facebook"></use>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://ua.linkedin.com/"
                      rel="noreferrer nooppener nofollow"
                      target="_blank"
                      class="team__link social-link"
                    >
                      <svg class="team__icon" width="20" height="20">
                        <use href="./images/icons.svg#linkedin"></use>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="team__item">
              <picture>
                <source
                  media="(min-width: 320px)"
                  srcset="
                    ./images/team/man4_sm@1x.jpg 1x,
                    ./images/team/man4_sm@2x.jpg 2x
                  "
                  type="image/jpg"
                />
                <source
                  media="(min-width: 320px)"
                  srcset="
                    ./images/team/man4_sm@1x.webp 1x,
                    ./images/team/man4_sm@2x.webp 2x
                  "
                  type="image/webp"
                />
                <source
                  media="(min-width: 768px)"
                  srcset="
                    ./images/team/man4_md@1x.webp 1x,
                    ./images/team/man4_md@2x.webp 2x
                  "
                  type="image/webp"
                />
                <source
                  media="(min-width: 768px)"
                  srcset="
                    ./images/team/man4_md@1x.jpg 1x,
                    ./images/team/man4_md@2x.jpg 2x
                  "
                  type="image/jpg"
                />
                <source
                  media="(min-width: 1200px)"
                  srcset="
                    ./images/team/man4@1x.webp 1x,
                    ./images/team/man4@2x.webp 2x
                  "
                  type="image/webp"
                />
                <source
                  media="(min-width: 1200px)"
                  srcset="
                    ./images/team/man4@1x.jpg 1x,
                    ./images/team/man4@2x.jpg 2x
                  "
                  type="image/jpg"
                />
                <img
                  class="team__image"
                  src="./images/team/man4@1x.webp"
                  alt=""
                />
              </picture>
              <div class="team-block">
                <h3 class="team-name">Михайло Єрмаков</h3>
                <p class="team__text">UI Designer</p>
                <ul class="team-icon__list">
                  <li>
                    <a
                      href="https://www.instagram.com/"
                      rel="noreferrer nooppener nofollow"
                      target="_blank"
                      class="team__link social-link"
                    >
                      <svg class="team__icon" width="20" height="20">
                        <use href="./images/icons.svg#instagram"></use>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/?lang=ru"
                      rel="noreferrer nooppener nofollow"
                      target="_blank"
                      class="team__link social-link"
                    >
                      <svg class="team__icon" width="20" height="20">
                        <use href="./images/icons.svg#twitter"></use>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://m.facebook.com/login/?locale2=ru_RU"
                      rel="noreferrer nooppener nofollow"
                      target="_blank"
                      class="team__link social-link"
                    >
                      <svg class="team__icon" width="20" height="20">
                        <use href="./images/icons.svg#facebook"></use>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://ua.linkedin.com/"
                      rel="noreferrer nooppener nofollow"
                      target="_blank"
                      class="team__link social-link"
                    >
                      <svg class="team__icon" width="20" height="20">
                        <use href="./images/icons.svg#linkedin"></use>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section class="clients section">
        <div class="container">
          <h2 class="title">Постійні клієнти</h2>
          <ul class="clients__list">
            <li class="clients__item">
              <a href="" class="clients__link">
                <svg width="106" height="60">
                  <use href="./images/icons.svg#logo-1"></use>
                </svg>
              </a>
            </li>
            <li class="clients__item">
              <a href="" class="clients__link">
                <svg width="106" height="60">
                  <use href="./images/icons.svg#logo-2"></use>
                </svg>
              </a>
            </li>
            <li class="clients__item">
              <a href="" class="clients__link">
                <svg width="106" height="60">
                  <use href="./images/icons.svg#logo-3"></use>
                </svg>
              </a>
            </li>
            <li class="clients__item">
              <a href="" class="clients__link">
                <svg width="106" height="60">
                  <use href="./images/icons.svg#logo-4"></use>
                </svg>
              </a>
            </li>
            <li class="clients__item">
              <a href="" class="clients__link">
                <svg width="106" height="60">
                  <use href="./images/icons.svg#logo-5"></use>
                </svg>
              </a>
            </li>
            <li class="clients__item">
              <a href="" class="clients__link">
                <svg width="106" height="60">
                  <use href="./images/icons.svg#logo-6"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}