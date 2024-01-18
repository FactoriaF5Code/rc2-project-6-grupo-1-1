import "./App.css";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Form } from "./components/form/Form";
import { DetailsHotel } from "./components/articles/DetailsHotel";

function App() {
  return (
    <>
      <Header />
      <DetailsHotel/>
      <Form />
      <Footer />
    </>
  );
}

export default App;
