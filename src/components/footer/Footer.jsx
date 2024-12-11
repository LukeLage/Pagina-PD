import React from 'react';
import styles from './footer.module.css';
import Logo from '../../assets/img/logoExtensa.png';
import Whatsapp from '../../assets/img/wpp.png';
import Instagram from '../../assets/img/insta.png';

export default function Footer() {
  // Pegar a versão da aplicação do package.json
  const version = import.meta.env.VITE_APP_VERSION || '0.0.0';

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Logo do Projeto */}
        <div className={styles.logoContainer}>
          <img src={Logo} alt="Projeto Desenvolve logo" className={styles.logo} />
        </div>

        {/* Informações de Contato */}
        <div className={styles.contact}>
          <div className={styles.contactItem}>
            <img src={Whatsapp} alt="WhatsApp logo" className={styles.icon} />
            <span>+55 (31) 98310-9936</span>
          </div>
          <div className={styles.contactItem}>
            <img src={Instagram} alt="Instagram logo" className={styles.icon} />
            <span>@projetodesenvolve_br</span>
          </div>
        </div>
      </div>

      {/* Informações legais */}
      <div className={styles.footerBottom}>
        <p>
          Rua Tomé de Souza, 810, Cj 401, Savassi, Belo Horizonte/MG - CEP: 30.140-135.
        </p>
        <p>
          PROSPERARE EDUCAÇÃO, CULTURA E CIDADANIA S.A - CNPJ nº 10.976.971/0001-25
        </p>
        <p>Todos os direitos reservados</p>
        {/* Adicionar a versão da aplicação */}
        <p className={styles.version}> versão {version}</p>
      </div>
    </footer>
  );
}
