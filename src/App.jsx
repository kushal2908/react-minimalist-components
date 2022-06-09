import ButtonPage from "./pages/ButtonPage";
import InputPage from "./pages/InputPage";
import ModalPage from "./pages/ModalPage";
import SelectPage from "./pages/SelectPage";
import PickerPage from "./pages/SelectPage";

function App() {
  return (
    <main className="bg-light" style={{ minHeight: "200vh" }}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <ButtonPage />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <ModalPage />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <InputPage />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <SelectPage />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
