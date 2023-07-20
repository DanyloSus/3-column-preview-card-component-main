import React from "react";

function Section({ bg, h, p, img }) {
  return (
    <section style={{ background: `${bg}` }}>
      <img src={`./${img}`} alt={img} className="anim" />
      <h1 className="anim">{h}</h1>
      <p className="anim">{p}</p>
      <button className="anim" style={{ color: `${bg}` }}>
        Learn More
      </button>
    </section>
  );
}

export default Section;
