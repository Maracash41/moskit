import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { ModalProvider } from "./components/utils/ModalProvider";
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <>
      <ModalProvider>
        <Header />
        <Main />
        <Footer />
        <Modal />
      </ModalProvider>
    </>
  );
}

export default App;
