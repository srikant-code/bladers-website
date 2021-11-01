import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./containers/Header";
import Footer from "./containers/Footer";
import Theme from "./Utils/theme";
import { ROUTES, Pxtorem } from "./Utils/Constants";
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
import ChangeLog from "./containers/ChangeLog";
import ScrollToTop from "./Utils/scrollToTop";
import NotFound from "./containers/404";
import PressKit from "./containers/PressKit";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Header />
        <Switch>
          <Route exact path={ROUTES.HOME_ROUTE}>
            <LandingPage />
          </Route>
          <Route path={ROUTES.PRIVACY_POLICY_ROUTE}>
            <PrivacyPolicy />
          </Route>
          <Route path={ROUTES.CHANGE_LOG_ROUTE}>
            <ChangeLog />
          </Route>
          <Route path={ROUTES.PRESS_KIT_ROUTE}>
            <PressKit />
          </Route>
          <Route path="*">
            {/* NoMatch */}
            <NotFound />
            {/* <>No Match 404 not found</> */}
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
      </ScrollToTop>
    </Router>
  );
}

export default App;
