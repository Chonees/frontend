import React, { useState } from 'react';

import "./QueHacemos.css";







const QueHacemos= ()=>{
    // Estado para controlar la visibilidad de las respuestas
    const [mostrarRespuesta, setMostrarRespuesta] = useState([false,false,false,false,false,false,false,false,false,false]);

    const handleClick = () => {
        setMostrarRespuesta(!mostrarRespuesta);
    };


  return (
    <>
      <section class="style-0">
        <div class="style-1">
          <h1 class="style-2">
            <span class="style-3" data-sr-id="6">
              Lifestyle &amp;{" "}
            </span>
            <span class="style-4" data-sr-id="14">
              Functional{" "}
            </span>
            <span class="style-5" data-sr-id="15">
              Medicine.{" "}
            </span>
          </h1>
        </div>
        <div class="style-6">
          <h2 class="style-7" data-sr-id="20">
            Un abordaje de vanguardia para optimizar tu relación con tu salud y
            tu manera de vivir.
          </h2>
        </div>
      </section>
      <img
        src="https://mindlatam.com/wp-content/themes/mind/img/que-hacemos/que-hacemos-1.jpg"
        alt="Quienes somos"
        width="1920"
        height="1287"
        loading="lazy"
        decoding="async"
        class="style-49"
      />
      <section class="style-9">
        <div class="style-10">
          <hr class="style-11" data-sr-id="22" />
          <h2 class="style-12" data-sr-id="0">
            ¿Qué es el Lifestyle <br class="style-13" />
            &amp; Functional Medicine?
          </h2>
          <article class="style-14" data-sr-id="7">
            <figure class="style-15">
              <img
                class="style-16"
                src="https://mindlatam.com/wp-content/uploads/2021/10/paraguas-mind.svg"
                alt="Paraguas"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <p class="style-17">
              Una nueva solución para tu salud que va a la raíz de tus síntomas
              trabajando para prevenir, restaurar y revertir disfunciones
              crónicas relacionadas a tu estilo de vida.
            </p>
            <figure class="style-18">
              <img
                class="style-19"
                src="https://mindlatam.com/wp-content/uploads/2021/10/molecula-mind.svg"
                alt="Molecula"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <p class="style-20">
              Un abordaje científico que aplica los últimos avances en biología
              molecular, genómica nutricional, microbiología, inmunología
              nutricional y neuroendocrinología.
            </p>
            <figure class="style-21">
              <img
                class="style-22"
                src="https://mindlatam.com/wp-content/uploads/2021/10/shield-mind.svg"
                alt="Shield"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <p class="style-23">
              Un campo que cuenta con un amplio respaldo internacional, liderado
              por Cleveland Clinic y la Clínica Mayo en Estados Unidos y
              organizaciones como BANT y IFM.
            </p>
          </article>
        </div>
        <div class="style-24">
          <div class="style-25" data-sr-id="19">
            <div class="style-26" aria-live="polite">
              <div
                class="style-27"
                data-swiper-slide-index="1"
                role="group"
                aria-label="2 / 2"
              >
                <img
                  src="https://mindlatam.com/wp-content/uploads/2021/11/que-hacemos-2b-mind-1.jpg"
                  alt="Que Hacemos 2b"
                  width="960"
                  height="1440"
                  loading="lazy"
                  decoding="async"
                  class="style-28"
                />
                <div class="style-29"></div>
                <div class="style-30"></div>
              </div>
              <div
                class="style-31"
                data-swiper-slide-index="0"
                role="group"
                aria-label="1 / 2"
              >
                <img
                  src="https://mindlatam.com/wp-content/uploads/2021/11/que-hacemos-2a-mind-1.jpg"
                  alt="Que Hacemos 2a"
                  width="960"
                  height="1440"
                  loading="lazy"
                  decoding="async"
                  class="style-32"
                />
                <div class="style-33"></div>
                <div class="style-34"></div>
              </div>
              <div
                class="style-35"
                data-swiper-slide-index="1"
                role="group"
                aria-label="2 / 2"
              >
                <img
                  src="https://mindlatam.com/wp-content/uploads/2021/11/que-hacemos-2b-mind-1.jpg"
                  alt="Que Hacemos 2b"
                  width="960"
                  height="1440"
                  loading="lazy"
                  decoding="async"
                  class="style-36"
                />
                <div class="style-37"></div>
                <div class="style-38"></div>
              </div>
              <div
                class="style-39"
                data-swiper-slide-index="0"
                role="group"
                aria-label="1 / 2"
              >
                <img
                  src="https://mindlatam.com/wp-content/uploads/2021/11/que-hacemos-2a-mind-1.jpg"
                  alt="Que Hacemos 2a"
                  width="960"
                  height="1440"
                  loading="lazy"
                  decoding="async"
                  class="style-40"
                />
                <div class="style-41"></div>
                <div class="style-42"></div>
              </div>
              <div class="style-43"></div>
            </div>
            <div
              class="style-44"
              tabindex="0"
              role="button"
              aria-label="Next slide"
              aria-controls="swiper-wrapper-e0f5675ff73a1203"
            ></div>
            <div
              class="style-45"
              tabindex="0"
              role="button"
              aria-label="Previous slide"
              aria-controls="swiper-wrapper-e0f5675ff73a1203"
            ></div>
          </div>{" "}
          <span
            class="style-46"
            aria-live="assertive"
            aria-atomic="true"
          ></span>
        </div>
        <figure class="style-47">
          <img
            class="style-48"
            src="https://mindlatam.com/wp-content/themes/mind/img/que-hacemos/layer-1.jpg"
            alt="Layer 1"
            width="354"
            height="1053"
            loading="lazy"
            decoding="async"
            data-sr-id="16"
          />
        </figure>
      </section>

      {/* ------------------------------------------------ 0 ---------------------------------------------------------- */}

      <section class="style-50">
        <div class="style-51">
          <h2 class="style-52" data-sr-id="11">
            Nuestro abordaje
          </h2>
        </div>
        <div class="style-53">
          <div class="style-54" data-sr-id="17">
            <figure class="style-55">
              <img
                src="https://mindlatam.com/wp-content/uploads/2021/10/metodologia-2-mind.jpg"
                alt="Metodologia 2"
                width="533"
                height="801"
                loading="lazy"
                decoding="async"
                class="style-56"
              />

            </figure>
           </div>
          </div>
          <div class="style-57">
            <div class="style-58">
              <div class="style-59">
                <h4 class="style-60">
                  ¿Dónde comienza el recorrido?{" "}
                  <a href="javascript:void(0)" class="style-61"></a>
                </h4>
                <div class="style-62">
                  <div class="style-63">
                    <p class="style-64">
                      {" "}
                      El proceso comienza con una etapa de investigación.
                      Buscamos comprender en profundidad cómo es la persona,
                      cuál es su historia, dónde comienzan sus síntomas y
                      molestias, cómo están conectados y cuáles son sus causas.
                      Para esto utilizamos también análisis clínicos funcionales
                      de última generación que se envían a laboratorios en el
                      exterior.
                      <br class="style-65" />{" "}
                    </p>
                  </div>
                </div>
                </div>
              </div>
              <div class="style-66">
                <h4 class="style-67">
                  ¿En qué se basa nuestro abordaje?{" "}
                  <a href="javascript:void(0)" class="style-68"></a>
                </h4>
                <div class="style-69">
                  <div class="style-70">
                    <p class="style-71">
                      {" "}
                      El abordaje del Lifestyle &amp; Functional Medicine
                      investiga cómo y por qué ocurre la enfermedad y trabaja
                      sobre sus causas mediante intervenciones basadas en
                      evidencia científica, para revertir o mejorar las
                      disfunciones específicas que han contribuido al origen de
                      los desequilibrios.
                      <br class="style-72" />{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div class="style-73">
                <h4 class="style-74">
                  Aplicación clínica de la biología de sistemas{" "}
                  <a href="javascript:void(0)" class="style-75"></a>
                </h4>
                <div class="style-76">
                  <div class="style-77">
                    <p class="style-78">
                      {" "}
                      En lugar de enfocarse de forma individual en cada uno de
                      los órganos donde se están manifestando los síntomas, el
                      campo del Lifestyle &amp; Functional Medicine aborda los
                      procesos fisiológicos centrales que atraviesan y conectan
                      todos los sistemas: asimilación de nutrientes, defensa y
                      reparación celular, integridad estructural, mecanismos de
                      comunicación y transporte celular, producción de energía y
                      biotransformación.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </section>
          {/* /* ----------------------------------------------------- o ------------------------------------------ */}
          <section class="style-79">
            <h3 class="style-80" data-sr-id="3">Pilares de intervención</h3>
            <article class="style-81" data-sr-id="12">
                <p class="style-82">Trabajaremos en revitalizar, detoxificar, optimizar y recalibrar tu organismo de forma sistémica yendo a las causas detrás de tus síntomas mediante intervenciones personalizadas en nuestros seis pilares:</p>
                <hr class="style-83" />
                <div class="style-84">
                    <ul class="style-85">
                        <li class="style-86"><img class="style-87" src="https://mindlatam.com/wp-content/themes/mind/img/icons/label-sky.svg" alt="" loading="lazy" decoding="async" />
                            <div class="style-88">Alimentación y <br class="style-89" /> Suplementación</div>
                        </li>
                        <li class="style-90"><img class="style-91" src="https://mindlatam.com/wp-content/themes/mind/img/icons/label-sky.svg" alt="" loading="lazy" decoding="async" />
                            <div class="style-92">Gestión del estrés <br class="style-93" /> y relajación</div>
                        </li>
                        <li class="style-94"><img class="style-95" src="https://mindlatam.com/wp-content/themes/mind/img/icons/label-sky.svg" alt="" loading="lazy" decoding="async" />
                            <div class="style-96">Ritmo circadiano <br class="style-97" /> y sueño</div>
                        </li>
                        <li class="style-98"><img class="style-99" src="https://mindlatam.com/wp-content/themes/mind/img/icons/label-sky.svg" alt="" loading="lazy" decoding="async" />
                            <div class="style-100">Actividad Física <br class="style-101" /> y Movimiento</div>
                        </li>
                        <li class="style-102"><img class="style-103" src="https://mindlatam.com/wp-content/themes/mind/img/icons/label-sky.svg" alt="" loading="lazy" decoding="async" />
                            <div class="style-104">Actitud <br class="style-105" /> y Mindset</div>
                        </li>
                        <li class="style-106"><img class="style-107" src="https://mindlatam.com/wp-content/themes/mind/img/icons/label-sky.svg" alt="" loading="lazy" decoding="async" />
                            <div class="style-108">Relaciones y <br class="style-109" /> Medio Ambiente </div>
                        </li>
                    </ul>
                </div>
            </article>
          </section>
        {/* ------------------------------------------ O --------------------------------------------------------------- */}
        <video preload="" autoplay="" playsinline="" loop="" muted="" class="style-110" loading="lazy" data-sr-id="18">
            <source data-src="https://mindlatam.com/wp-content/themes/mind/video/slideshow.mp4" type="video/mp4" src="https://mindlatam.com/wp-content/themes/mind/video/slideshow.mp4" class="style-111" /> Your browser does not support the video tag.
        </video>

        {/* ----------------------------------------------- O ------------------------------------------------------------------ */}
        <section class="style-112">
            <h4 class="style-113">Te invitamos a conocer más <br class="style-114" />sobre nuestra propuesta</h4>
            <div class="style-115"><a href="https://mindlatam.com/nuestros-servicios" class="style-116">Nuestros servicios</a><a href="https://mindlatam.com/brochure" class="style-117" target="_blank">Descargar brochure</a><a href="https://mindlatam.com/analisis-funcionales" class="style-118">Análisis funcionales</a></div>
        </section>

        {/* -------------------------------------------------- 0 ---------------------------------------------------------------------------- */}

            <div class="style-120">
                <h3 class="style-121">Áreas de intervención</h3>
            </div>
        <section class="style-119">
            <div class="style-122">

                <figure class="style-123">
                    <img src="https://mindlatam.com/wp-content/themes/mind/img/que-hacemos/que-hacemos-4.jpg" alt="Areas de intervención" width="200" height="300" class="style-124"/>
                </figure>
            </div>
            <div class="style-125">
                    <div class="style-126">
                        <h4 class="style-127">Salud Digestiva e Intestinal</h4><button onClick={handleClick} class="style-128">X</button>
                    </div>
                    <div>
                        {mostrarRespuesta[8] && <p>hola</p>}
                    </div>

            </div>

        </section>
                {/* <div>
=======
          </div>
        </div>
      </section>
      {/* ----------------------------------------------------- o ------------------------------------------ */}
      <section class="style-79">
            <h3 class="style-80" data-sr-id="3">Pilares de intervención</h3>
            <article class="style-81" data-sr-id="12">
                <p class="style-82">Trabajaremos en revitalizar, detoxificar, optimizar y recalibrar tu organismo de forma sistémica yendo a las causas detrás de tus síntomas mediante intervenciones personalizadas en nuestros seis pilares:</p>
                <hr class="style-83" />
                <div class="style-84">
                    <ul class="style-85">
                        <li class="style-86"><img class="style-87" src="https://mindlatam.com/wp-content/themes/mind/img/icons/label-sky.svg" alt="" loading="lazy" decoding="async" />
                            <div class="style-88">Alimentación y <br class="style-89" /> Suplementación</div>
                        </li>
                        <li class="style-90"><img class="style-91" src="https://mindlatam.com/wp-content/themes/mind/img/icons/label-sky.svg" alt="" loading="lazy" decoding="async" />
                            <div class="style-92">Gestión del estrés <br class="style-93" /> y relajación</div>
                        </li>
                        <li class="style-94"><img class="style-95" src="https://mindlatam.com/wp-content/themes/mind/img/icons/label-sky.svg" alt="" loading="lazy" decoding="async" />
                            <div class="style-96">Ritmo circadiano <br class="style-97" /> y sueño</div>
                        </li>
                        <li class="style-98"><img class="style-99" src="https://mindlatam.com/wp-content/themes/mind/img/icons/label-sky.svg" alt="" loading="lazy" decoding="async" />
                            <div class="style-100">Actividad Física <br class="style-101" /> y Movimiento</div>
                        </li>
                        <li class="style-102"><img class="style-103" src="https://mindlatam.com/wp-content/themes/mind/img/icons/label-sky.svg" alt="" loading="lazy" decoding="async" />
                            <div class="style-104">Actitud <br class="style-105" /> y Mindset</div>
                        </li>
                        <li class="style-106"><img class="style-107" src="https://mindlatam.com/wp-content/themes/mind/img/icons/label-sky.svg" alt="" loading="lazy" decoding="async" />
                            <div class="style-108">Relaciones y <br class="style-109" /> Medio Ambiente </div>
                        </li>
                    </ul>
                </div>
            </article>
          </section>
              {/* ------------------------------------------ O --------------------------------------------------------------- */}
              <video preload="" autoplay="" playsinline="" loop="" muted="" class="style-110" loading="lazy" data-sr-id="18">
            <source data-src="https://mindlatam.com/wp-content/themes/mind/video/slideshow.mp4" type="video/mp4" src="https://mindlatam.com/wp-content/themes/mind/video/slideshow.mp4" class="style-111" /> Your browser does not support the video tag.
        </video>

        {/* ----------------------------------------------- O ------------------------------------------------------------------ */}
        <section class="style-112">
            <h4 class="style-113">Te invitamos a conocer más <br class="style-114" />sobre nuestra propuesta</h4>
            <div class="style-115"><a href="https://mindlatam.com/nuestros-servicios" class="style-116">Nuestros servicios</a><a href="https://mindlatam.com/brochure" class="style-117" target="_blank">Descargar brochure</a><a href="https://mindlatam.com/analisis-funcionales" class="style-118">Análisis funcionales</a></div>
        </section>

        {/* -------------------------------------------------- 0 ---------------------------------------------------------------------------- */}

            <div class="style-120">
                <h3 class="style-121">Áreas de intervención</h3>
            </div>
        <section class="style-119">
            <div class="style-122">

                <figure class="style-123">
                    <img src="https://mindlatam.com/wp-content/themes/mind/img/que-hacemos/que-hacemos-4.jpg" alt="Areas de intervención" width="200" height="300" class="style-124"/>
                </figure>
            </div>
            <div class="style-125">
                    <div class="style-126">
                        <h4 class="style-127">Salud Digestiva e Intestinal</h4><button onClick={handleClick} class="style-128">X</button>
                    </div>
                    <div>
                        {mostrarRespuesta[8] && <p>hola</p>}
                    </div>

            </div>

        </section>
      {/* <div>
            <h2>Nuestro abordaje</h2>
            <div>
              <h3>Pregunta 1</h3>
              <button onClick={() => toggleRespuesta(0)}>Mostrar respuesta</button>
              {mostrarRespuestas[0] && <p>Respuesta 1</p>}
            </div>

            <div>
              <h3>Pregunta 2</h3>
              <button onClick={() => toggleRespuesta(1)}>Mostrar respuesta</button>
              {mostrarRespuestas[1] && <p>Respuesta 2</p>}
            </div>

            <div>
              <h3>Pregunta 3</h3>
              <button onClick={() => toggleRespuesta(2)}>Mostrar respuesta</button>
              {mostrarRespuestas[2] && <p>Respuesta 3</p>}
            </div> */}


    </>
        
  );
};

export default QueHacemos;

