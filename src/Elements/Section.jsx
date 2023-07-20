import React from "react";

function Section({ bg, h, p, img }) {
  return (
    <section style={{ background: `${bg}` }}>
      <img src={`./${img}`} alt={img} />
      <h1>{h}</h1>
      <p>{p}</p>
      <button style={{ color: `${bg}` }}>Learn More</button>
    </section>
  );
}

export default Section;
