import "./App.css";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Form } from "./components/form/Form";
import { DetailsHotel } from "./components/articles/DetailsHotel";
import { MainSection } from "./components/mainSection/MainSection";

function App() {
  return (
    <>
      <Header />
      <MainSection /> 
      <Footer /> 
    </>
  );
}

export default App;
