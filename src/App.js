import "./styles.css";
import Home from "./home";
import ComingSoon from "./comingSoon";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Redirect from="/" to="/home" />
        <Switch>
          <Route path="/home" component={Home} />
          <Route exact path="/proyecto" render={() => <ComingSoon />} />
          <Route exact path="/realizadores" render={() => <ComingSoon />} />
          <Route exact path="/agradecimientos" render={() => <ComingSoon />} />
          <Route component={ComingSoon} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
