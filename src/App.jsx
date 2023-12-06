import { Switch, Route } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Home from "./page/Home";
import ProductList from "./page/ProductList";

export default function App() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/productlist">
          <ProductList />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
