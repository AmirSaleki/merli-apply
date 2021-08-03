import "./App.css";
import Services from "./components/Services/Services.component";
import Forum from "./components/Forum/Forum.component";
import Header from "./components/Header/Header.component";
import Contact from "./components/Contact/Contact.component";
import Footer from "./components/Footer/Footer.component";
import Article from "./components/Article/Article.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/" exact>
          <Header />
          <Services />
          <Forum />
          <Contact />
          <Footer />
        </Route>
        <Route path="/articles" exact>
          <Article />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
