import { useState } from 'react';
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaUser, FaEnvelope, FaLock } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom'; 
import styles from './styles.module.css';

export function LoginCard() {
  const [isSignInActive, setIsSignInActive] = useState(false);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const handleToggle = () => setIsSignInActive(!isSignInActive);

  const API_BASE_URL = "https://finder-server-ak5y.onrender.com/"; 
  const navigate = useNavigate(); 

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        alert("Login realizado com sucesso!");
        navigate("/");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: registerName,
          email: registerEmail,
          password: registerPassword,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Conta criada com sucesso! Faça login.");
        setIsSignInActive(true); 
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <main className={styles.mainContainer}>
      {/* ===== VERSÃO DESKTOP ===== */}
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
              // FORMULÁRIO DE LOGIN (Desktop)
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
                <form onSubmit={handleLogin} className={styles.formLogin}>
                  <label className={styles.labelLoginInput}>
                    <FaEnvelope className={styles.iconModify} />
                    <input type="email" placeholder="Email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} required />
                  </label>
                  <label className={styles.labelLoginInput}>
                    <FaLock className={styles.iconModify} />
                    <input type="password" placeholder="Senha" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} required />
                  </label>
                  <a className={styles.passwordLogin} href="#">esqueceu sua senha?</a>
                  <button type="submit" className={`${styles.btnLogin} ${styles.btnSecond}`}>Entrar</button>
                </form>
              </>
            ) : (
              // FORMULÁRIO DE REGISTRO (Desktop)
              <>
                <h2 className={`${styles.titleLogin} ${styles.titleSecond}`}>Crie uma conta</h2>
                <div className={styles.socialMediaLogin}>
                  <ul className={styles.listSocialMedia}>
                    <a className={styles.linkSocialMedia} href="#"><li className={styles.itemSocialMedia}><FaFacebookF /></li></a>
                    <a className={styles.linkSocialMedia} href="#"><li className={styles.itemSocialMedia}><FaGooglePlusG /></li></a>
                    <a className={styles.linkSocialMedia} href="#"><li className={styles.itemSocialMedia}><FaLinkedinIn /></li></a>
                  </ul>
                </div>
                <form onSubmit={handleRegister} className={styles.formLogin}>
                  <label className={styles.labelLoginInput}>
                    <FaUser className={styles.iconModify} />
                    <input type="text" placeholder="Nome" value={registerName} onChange={(e) => setRegisterName(e.target.value)} required />
                  </label>
                  <label className={styles.labelLoginInput}>
                    <FaEnvelope className={styles.iconModify} />
                    <input type="email" placeholder="Email" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} required />
                  </label>
                  <label className={styles.labelLoginInput}>
                    <FaLock className={styles.iconModify} />
                    <input type="password" placeholder="Senha" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} required />
                  </label>
                  <button type="submit" className={`${styles.btnLogin} ${styles.btnSecond}`}>Criar</button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>


      <div className={styles.containerLoginMobile}>
        {isSignInActive ? (
          // FORMULÁRIO DE LOGIN (Mobile)
          <>
            <h2>Login</h2>
            <form onSubmit={handleLogin} className={styles.formLoginMobile}>
              <label>
                <input type="email" placeholder="Email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} required />
              </label>
              <label>
                <input type="password" placeholder="Senha" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} required />
              </label>
              <button type="submit" className={styles.btnLoginMobile}>Entrar</button>
            </form>
            <p>Ainda não tem conta? <a href="#" onClick={handleToggle}>Cadastre-se</a></p>
          </>
        ) : (
          // FORMULÁRIO DE REGISTRO (Mobile)
          <>
            <h2>Cadastro</h2>
            <form onSubmit={handleRegister} className={styles.formLoginMobile}>
              <label>
                <input type="text" placeholder="Nome" value={registerName} onChange={(e) => setRegisterName(e.target.value)} required />
              </label>
              <label>
                <input type="email" placeholder="Email" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} required />
              </label>
              <label>
                <input type="password" placeholder="Senha" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} required />
              </label>
              <button type="submit" className={styles.btnLoginMobile}>Cadastrar</button>
            </form>
            <p>Já tem uma conta? <a href="#" onClick={handleToggle}>Faça login</a></p>
          </>
        )}
      </div>
    </main>
  );
}