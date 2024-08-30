import React from "react";
import Header from "../../components/Header/header";
import Game from "../../components/Game/Game";
import CardGames from "../../components/CardGames/CardGames";
import LIveCasino from "../../components/LiveCasino/LIveCasino";
import RoyelGame from "../../components/RoyelGame/RoyelGame";
import Footer from "../../components/Footer/footer";

function page() {
  return (
    <div>
      <Header />
      <Game />
      <CardGames />
      <LIveCasino />
      <RoyelGame />
      <Footer />
    </div>
  );
}

export default page;
