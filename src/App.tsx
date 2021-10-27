import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./containers/Header";
import Footer from "./containers/Footer";
import Theme from "./Utils/theme";
import { Pxtorem } from "./Utils/Constants";
import { Flex } from "./components/Container";
import { TeamBrahmos } from "./containers/Team";
import { DownloadBladers } from "./containers/Download";
import { Acheivements } from "./containers/Acheivements";
import { Gameplay } from "./containers/Gameplay";
import { OurJourney } from "./containers/Journey";
import { ScreenshotSlideshow } from "./containers/Screenshots";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./views/Homepage";
import PrivacyPolicy from "./containers/PrivacyPolicy";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/privacy-policy">
          <PrivacyPolicy />
        </Route>
        <Route path="/press-kit">
          <>press kit</>
        </Route>
        <Route path="*">
          {/* <NoMatch /> */}
          <>No Match 404 not found</>
        </Route>
      </Switch>
      <Footer />
      <Flex
        style={{
          background: Theme.COLORS.shades.color_1,
          // background: Theme.COLORS.gradient.gradient_1,
          padding: Theme.SPACING(16),
        }}>
        ©️Brahmos Interactive 2021
      </Flex>
    </Router>
  );
}

export default App;
