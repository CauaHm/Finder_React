import React from "react";
import styles from "./styles.module.css";
import computerBanner from "../../../assets/images/blueComputer.png";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

export function Hero() {
  return (
    <section className={styles.home}>
      <div className={styles.shape}></div>
      <Fade direction="left" triggerOnce>
        <div className={styles.cta}>
          <h1 className={styles.ctaTitle}>
            Aumente suas vendas! Cadastre seus produtos e{" "}
            <span>alcance mais clientes na sua região!</span>
          </h1>
          <p>
            Cadastre seus produtos agora e ganhe mais visibilidade, atraindo
            clientes próximos e impulsionando seu negócio!
          </p>
          <div className={styles.ctaButtons}>
            <Link to="/produtos" className={`btnDefault ${styles.heroButton}`}>
              Ver produtos
            </Link>
            <ul className={styles.social}>
              <li className="social_buttons">
                <a href="#">
                  <FaInstagram />
                </a>
              </li>
              <li className="social_buttons">
                <a href="#">
                  <FaWhatsapp />
                </a>
              </li>
              <li className="social_buttons">
                <a href="#">
                  <FaEnvelope />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Fade>
      <Fade direction="right" triggerOnce>
        <div className={`${styles.banner} img--down`}>
          <img
            src={computerBanner}
            alt="Ilustração de um computador e celular exibindo a plataforma Finder"
          />
        </div>
      </Fade>
    </section>
  );
}
