import "./App.css";
import Services from "./components/Services/Services.component";
import Forum from "./components/Forum/Forum.component";
import Header from "./components/Header/Header.component";
import Contact from "./components/Contact/Contact.component";
import Footer from "./components/Footer/Footer.component";

function App() {
  return (
    <>
      <Header />
      <Services />
      <Forum />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
