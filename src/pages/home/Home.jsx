import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faFileArrowDown, faTicket } from "@fortawesome/free-solid-svg-icons";

import styles from "./Home.module.css";
import { useState } from "react";

const Home = () => {
  const [theme, setTheme] = useState("japao");
  const [heroImg, setHeroImg] = useState("japan-hero-img");

  const toggleTheme = () => {
    const themes = ["japao", "arabe", "usa", "brasil"];
    const heroImg = ["japan-hero-img", "arabe-hero-img", "usa-hero-img", "brasil-hero-img"];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
    setHeroImg(heroImg[nextIndex]);
  };

  return (
    <div className={`${styles.home_container} ${styles[theme]}`}>
      <h1 className={styles.home_title}>Pe. Olmes Milani</h1>
      <p className={styles.sub_text}>Uma vida dedicada a Deus e ao próximo</p>
      <div className={styles.hero_img_container}>
        <img className={styles.hero_img} src={`/src/assets/site-imgs/home/${heroImg}.svg`} alt="Hero" />
      </div>

      {/* <a className={styles.change_button} onClick={toggleTheme}> */}
        {/* <img className={styles.change_icon} src="/src/assets/site-imgs/home/change/change.svg" alt="Change Theme" /> */}
      {/* </a> */}
      <nav className={styles.nav_bar}>
        <a href="/book?page=1" target="blank" className={styles.icon_text}>
          <FontAwesomeIcon className={styles.icon} icon={faBookOpen} />Ler livro
        </a>
        <a href="/src/assets/site-imgs/home/book/Minha_Caminhada-Olmes_Milani.pdf" download="Olmes Milani | Minha Caminhada Livro" className={styles.icon_text}>
          <FontAwesomeIcon className={styles.icon} icon={faFileArrowDown} />Baixar livro
        </a>
        {/* <a href="/travel" className={styles.icon_text}> */}
          {/* <FontAwesomeIcon className={styles.icon} icon={faTicket} />Começe a viajar */}
        {/* </a> */}
      </nav>
    </div>
  );
};

export default Home;
