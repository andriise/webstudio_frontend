export const DataForm = () => {
  return (
    <form>
      <strong class="modal-title">
        Залиште свої дані, ми вам передзвонимо
      </strong>
      <label class="modal-label">
        <span class="modal-name">Ім'я</span>
        <span class="modal-view">
          <input class="modal-field" type="text" name="guest-name" required />
          <svg class="modal-svg" width="18" height="18">
            <use href="./images/icons.svg#person-black"></use>
          </svg>
        </span>
      </label>
      <label class="modal-label">
        <span class="modal-name">Телефон</span>
        <span class="modal-view">
          <input
            class="modal-field"
            type="text"
            name="guest-tel"
            required
            minlength="12"
            maxlength="12"
          />
          <svg class="modal-svg" width="18" height="18">
            <use href="./images/icons.svg#phone-black"></use>
          </svg>
        </span>
      </label>
      <label class="modal-label">
        <span class="modal-name">Пошта</span>
        <span class="modal-view">
          <input class="modal-field" type="email" name="guest-email" required />
          <svg class="modal-svg" width="18" height="18">
            <use href="./images/icons.svg#email-black"></use>
          </svg>
        </span>
      </label>
      <label class="modal-label">
        <span class="modal-name">Коментар</span>
        <textarea
          class="modal-area"
          name="guest-comments"
          rows="5"
          placeholder="Введіть текст"
        ></textarea>
      </label>
      <label class="modal-checkbox__label">
        <input type="checkbox" class="modal-checkbox__field visually-hidden" />
        <svg class="check-svg" width="16" height="15">
          <use
            class="modal-icon-unchecked"
            href="./images/icons.svg#vector"
          ></use>
          <use
            class="modal-icon-checked"
            href="./images/icons.svg#icon-check"
          ></use>
        </svg>
        <span class="modal-checkbox__text">
          Погоджуюся з розсилкою та приймаю
          <a href="" class="modal-checkbox__link">
            Умови договору
          </a>
        </span>
      </label>
      <button class="send-btn btn" type="submit">
        Відправити
      </button>
    </form>
  );
};
