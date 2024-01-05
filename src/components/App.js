import "./App.css";
import { Header } from "./Header/Header";
import { MainContent } from "./MainContent/MainContent";
import { MobileBurger } from "./MobileBurger/MobileBurger";
import { DataForm } from "./DataForm/DataForm";

function App() {
  return (
    <div class="main">
      <Header />
      <MainContent />
      <div class="backdrop is-hidden" data-modal>
        <div class="modal">
          <button class="modal-btn" type="button" data-modal-close>
            <svg width="18" height="18">
              <use href="./images/icons.svg#close-svg"></use>
            </svg>
          </button>
          <DataForm />
        </div>
      </div>
      <MobileBurger />
    </div>
  );
}

export default App;
