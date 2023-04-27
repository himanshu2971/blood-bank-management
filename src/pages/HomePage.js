import React from "react";
import CompatibleDonor from "../components/CompatibleDonor";
import MakeADifference from "../components/MakeADifference";
import Donate from "../components/Donate";

function HomePage() {
  return (
    <div>
      <Donate />
      <CompatibleDonor />
      <MakeADifference />
    </div>
  );
}

export default HomePage;
