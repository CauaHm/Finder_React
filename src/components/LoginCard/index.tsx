import { useState } from 'react';
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';


export function LoginCard() {
  const [isSignInActive, setIsSignInActive] = useState(false);

  // Estados do formulário de login
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Estados do formulário de registro
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const handleToggle = () => setIsSignInActive(!isSignInActive);

  // Função para login
  const navigate = useNavigate();
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('token', data.token);
        alert('Login realizado com sucesso!');
        navigate('/');
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Função para registro
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: registerName, email: registerEmail, password: registerPassword }),
      });
      const data = await res.json();
      if (res.ok) {
        alert('Conta criada com sucesso! Faça login.');
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

                {/* Ícones sociais */}
                <div className={styles.socialMediaLogin}>
                  <ul className={styles.listSocialMedia}>
                    <a className={styles.linkSocialMedia} href="#"><li className={styles.itemSocialMedia}><FaFacebookF /></li></a>
                    <a className={styles.linkSocialMedia} href="#"><li className={styles.itemSocialMedia}><FaGooglePlusG /></li></a>
                    <a className={styles.linkSocialMedia} href="#"><li className={styles.itemSocialMedia}><FaLinkedinIn /></li></a>
                  </ul>
                </div>

                <p className={`${styles.descriptionLogin} ${styles.descriptionSecond}`}>ou use sua conta de email:</p>

                {/* Formulário de login */}
                <form onSubmit={handleLogin} className={styles.formLogin}>
                  <label className={styles.labelLoginInput}>
                    <FaEnvelope className={styles.iconModify} />
                    <input
                      type="email"
                      placeholder="Email"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      required
                    />
                  </label>
                  <label className={styles.labelLoginInput}>
                    <FaLock className={styles.iconModify} />
                    <input
                      type="password"
                      placeholder="Senha"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      required
                    />
                  </label>
                  <a className={styles.passwordLogin} href="#">esqueceu sua senha?</a>
                  <button className={`${styles.btnLogin} ${styles.btnSecond}`}>Entrar</button>
                </form>
              </>
            ) : (
              <>
                <h2 className={`${styles.titleLogin} ${styles.titleSecond}`}>Crie uma conta</h2>

                {/* Ícones sociais */}
                <div className={styles.socialMediaLogin}>
                  <ul className={styles.listSocialMedia}>
                    <a className={styles.linkSocialMedia} href="#"><li className={styles.itemSocialMedia}><FaFacebookF /></li></a>
                    <a className={styles.linkSocialMedia} href="#"><li className={styles.itemSocialMedia}><FaGooglePlusG /></li></a>
                    <a className={styles.linkSocialMedia} href="#"><li className={styles.itemSocialMedia}><FaLinkedinIn /></li></a>
                  </ul>
                </div>

                {/* Formulário de registro */}
                <form onSubmit={handleRegister} className={styles.formLogin}>
                  <label className={styles.labelLoginInput}>
                    <FaUser className={styles.iconModify} />
                    <input
                      type="text"
                      placeholder="Nome"
                      value={registerName}
                      onChange={(e) => setRegisterName(e.target.value)}
                      required
                    />
                  </label>
                  <label className={styles.labelLoginInput}>
                    <FaEnvelope className={styles.iconModify} />
                    <input
                      type="email"
                      placeholder="Email"
                      value={registerEmail}
                      onChange={(e) => setRegisterEmail(e.target.value)}
                      required
                    />
                  </label>
                  <label className={styles.labelLoginInput}>
                    <FaLock className={styles.iconModify} />
                    <input
                      type="password"
                      placeholder="Senha"
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                      required
                    />
                  </label>
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
