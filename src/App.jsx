import { Switch, Route } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Home from "./page/Home";
import ProductList from "./page/ProductList";
import Contact from "./page/Contact";
import About from "./page/About";
import Team from "./page/Team";
import Product from "./page/Product";

export default function App() {
  return (
    <div className="overflow-hidden font-['Montserrat']">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/shopping">
          <ProductList />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/team">
          <Team />
        </Route>
        <Route path="/shopping/:productId">
          <Product />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
