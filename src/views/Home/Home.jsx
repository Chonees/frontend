import React, { useState } from "react";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div>
        <h1 class="style-1">
          Fortalecer
          <br /> Restaurar <br /> Vivir mejor
        </h1>
        <div class="divlifestyle">
          <h2 class="style-2">Lifestyle & Functional Medicine </h2>
        </div>
        <img
          src="https://mindlatam.com/wp-content/themes/mind/img/home/mosaico-2.jpg"
          alt="Mind"
          width="1920"
          height="1279"
          loading="lazy"
          decoding="async"
          class="style-3"
        />
        <div>
          <h2 class="style-4" data-sr-id="9">
            Una nueva solución <br class="style-5" />
            para tu salud <br class="style-6" />
            que va a la raíz <br class="style-7" />
            de tus síntomas.
          </h2>
        </div>
      </div>
    </>
  );
};

export default Home;
