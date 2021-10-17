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

function App() {
  return (
    <>
      <Header />
      <div
        style={{
          background: Theme.COLORS.gradient.gradient_1,
          height: Pxtorem(728),
        }}
      />
      <Acheivements />
      <TeamBrahmos />
      <DownloadBladers />
      <Footer />
      <Flex
        style={{
          background: Theme.COLORS.gradient.gradient_1,
          padding: Theme.SPACING(16),
        }}>
        ©️Brahmos Interactive 2021
      </Flex>
    </>
  );
}

export default App;
