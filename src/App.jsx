import React from "react";

import Section from "./Elements/Section";

function App() {
  return (
    <main>
      <Section
        img="icon-sedans.svg"
        h="sedans"
        p="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your nex road trip"
        bg="hsl(31, 77%, 52%)"
      />
      <Section
        img="icon-suvs.svg"
        h="suvs"
        p="Take an SUV for its spacious interior, power, and versatillity. Perfect for your next family vacation and off-road adventures."
        bg="hsl(184, 100%, 22%)"
      />
      <Section
        img="icon-luxury.svg"
        h="luxury"
        p="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
        bg="hsl(179, 100%, 13%)"
      />
    </main>
  );
}

export default App;
