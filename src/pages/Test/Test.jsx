import React, { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faFileArrowDown, faTicket } from "@fortawesome/free-solid-svg-icons";

import styles from "./Test.module.css";

import "./Test.css"; // Certifique-se de importar seu CSS original aqui
import VoyageSlider from "./voyageSlider.js";



const Test = () => {

    useEffect(() => {
        VoyageSlider(); // Executa depois que os elementos do DOM estiverem montados
      }, []);  
  return (
    <>
      <div className="slider">
        <button className="slider--btn slider--btn__prev">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        <div className="slides__wrapper">
          <div className="slides">
            {/* Slide 1 */}
            <div className="slide" data-current>
              <div className="slide__inner">
                <div className="slide--image__wrapper">
                  <img className="slide--image" src="https://devloop01.github.io/voyage-slider/images/scotland-mountains.jpg" alt="Image 1" />
                </div>
              </div>
            </div>
            <div className="slide__bg" style={{ "--bg": "url(https://devloop01.github.io/voyage-slider/images/scotland-mountains.jpg)", "--dir": 0 }} data-current />

            {/* Slide 2 */}
            <div className="slide" data-next>
              <div className="slide__inner">
                <div className="slide--image__wrapper">
                  <img className="slide--image" src="https://devloop01.github.io/voyage-slider/images/machu-pichu.jpg" alt="Image 2" />
                </div>
              </div>
            </div>
            <div className="slide__bg" style={{ "--bg": "url(https://devloop01.github.io/voyage-slider/images/machu-pichu.jpg)", "--dir": 1 }} data-next />

            {/* Slide 3 */}
            <div className="slide" data-previous>
              <div className="slide__inner">
                <div className="slide--image__wrapper">
                  <img className="slide--image" src="https://devloop01.github.io/voyage-slider/images/chamonix.jpg" alt="Image 3" />
                </div>
              </div>
            </div>
            <div className="slide__bg" style={{ "--bg": "url(https://devloop01.github.io/voyage-slider/images/chamonix.jpg)", "--dir": -1 }} data-previous />
          </div>

          <div className="slides--infos">
            {/* Slide Info 1 */}
            <div className="slide-info" data-current>
              <div className="slide-info__inner">
                <div className="slide-info--text__wrapper">
                  <div data-title className="slide-info--text"><span>Highlands</span></div>
                  <div data-subtitle className="slide-info--text"><span>Scotland</span></div>
                  <div data-description className="slide-info--text"><span>The mountains are calling</span></div>
                </div>
              </div>
            </div>

            {/* Slide Info 2 */}
            <div className="slide-info" data-next>
              <div className="slide-info__inner">
                <div className="slide-info--text__wrapper">
                  <div data-title className="slide-info--text"><span>Machu Pichu</span></div>
                  <div data-subtitle className="slide-info--text"><span>Peru</span></div>
                  <div data-description className="slide-info--text"><span>Adventure is never far away</span></div>
                </div>
              </div>
            </div>

            {/* Slide Info 3 */}
            <div className="slide-info" data-previous>
              <div className="slide-info__inner">
                <div className="slide-info--text__wrapper">
                  <div data-title className="slide-info--text"><span>Chamonix</span></div>
                  <div data-subtitle className="slide-info--text"><span>France</span></div>
                  <div data-description className="slide-info--text"><span>Let your dreams come true</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="slider--btn slider--btn__next">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className="loader">
        <span className="loader__text">0%</span>
      </div>

<nav className={styles.nav_bar}>
        <a href="/book?page=1" target="blank" className={styles.icon_text}>
          <FontAwesomeIcon className={styles.icon} icon={faBookOpen} />Ler livro
        </a>
        <a href="/src/assets/site-imgs/home/book/Minha_Caminhada-Olmes_Milani.pdf" download="Olmes Milani | Minha Caminhada Livro" className={styles.icon_text}>
          <FontAwesomeIcon className={styles.icon} icon={faFileArrowDown} />Baixar livro
        </a>
        <a href="/travel" className={styles.icon_text}>
          <FontAwesomeIcon className={styles.icon} icon={faTicket} />Começe a viajar
        </a>
      </nav>
     
    </>
  );
};

export default Test;
