import { useState } from 'react';
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import styles from './styles.module.css';

export function LoginCard() {
  const [isSignInActive, setIsSignInActive] = useState(false); 

  const handleToggle = () => {
    setIsSignInActive(!isSignInActive);
  };

  return (
    <main className={styles.mainContainer}>
      <div className={styles.containerLogin}>
        <div className={styles.contentLogin}>
          {/* Coluna da esquerda - Login/Cadastro */}
          <div className={`${styles.firstColumn} ${styles.column}`}>
            {isSignInActive ? (
              <>
                <h2 className={`${styles.titleLogin} ${styles.titlePrimary}`}>Bem-vindo!</h2>
                <p className={`${styles.descriptionLogin} ${styles.descriptionPrimary}`}>Para se manter conectado</p>
                <button onClick={handleToggle} className={`${styles.btnLogin} ${styles.btnPrimary}`}>Entrar</button>
              </>
            ) : (
              <>
                <h2 className={`${styles.titleLogin} ${styles.titlePrimary}`}>Olá, amigo!</h2>
                <p className={`${styles.descriptionLogin} ${styles.descriptionPrimary}`}>Digite seus dados pessoais e comece a jornada conosco</p>
                <button onClick={handleToggle} className={`${styles.btnLogin} ${styles.btnPrimary}`}>Criar</button>
              </>
            )}
          </div>
          {/* Coluna da direita - Formulário */}
          <div className={`${styles.secondColumn} ${styles.column}`}>
            {isSignInActive ? (
              <>
                <h2 className={`${styles.titleLogin} ${styles.titleSecond}`}>Faça login no Finder</h2>
                <div className={styles.socialMediaLogin}>
                  <ul className={styles.listSocialMedia}>
                    <a className={styles.linkSocialMedia} href="#"><li className={styles.itemSocialMedia}><FaFacebookF /></li></a>
                    <a className={styles.linkSocialMedia} href="#"><li className={styles.itemSocialMedia}><FaGooglePlusG /></li></a>
                    <a className={styles.linkSocialMedia} href="#"><li className={styles.itemSocialMedia}><FaLinkedinIn /></li></a>
                  </ul>
                </div>
                <p className={`${styles.descriptionLogin} ${styles.descriptionSecond}`}>ou use sua conta de email:</p>
                <form method="POST" action="login.php" className={styles.formLogin}>
                  <label className={styles.labelLoginInput}><FaEnvelope className={styles.iconModify} /><input type="email" placeholder="Email" /></label>
                  <label className={styles.labelLoginInput}><FaLock className={styles.iconModify} /><input type="password" placeholder="Senha" /></label>
                  <a className={styles.passwordLogin} href="#">esqueceu sua senha?</a>
                  <button className={`${styles.btnLogin} ${styles.btnSecond}`}>Entrar</button>
                </form>
              </>
            ) : (
              <>
                <h2 className={`${styles.titleLogin} ${styles.titleSecond}`}>Crie uma conta</h2>
                <div className={styles.socialMediaLogin}>
                  <ul className={styles.listSocialMedia}>
                    <a className={styles.linkSocialMedia} href="#"><li className={styles.itemSocialMedia}><FaFacebookF /></li></a>
                    <a className={styles.linkSocialMedia} href="#"><li className={styles.itemSocialMedia}><FaGooglePlusG /></li></a>
                    <a className={styles.linkSocialMedia} href="#"><li className={styles.itemSocialMedia}><FaLinkedinIn /></li></a>
                  </ul>
                </div>
                <form method="POST" action="register.php" className={styles.formLogin}>
                  <label className={styles.labelLoginInput}><FaUser className={styles.iconModify} /><input type="text" placeholder="Nome" /></label>
                  <label className={styles.labelLoginInput}><FaEnvelope className={styles.iconModify} /><input type="email" placeholder="Email" /></label>
                  <label className={styles.labelLoginInput}><FaLock className={styles.iconModify} /><input type="password" placeholder="Senha" /></label>
                  <button className={`${styles.btnLogin} ${styles.btnSecond}`}>Criar</button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}