import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./app.module.css";

function setButton(event) {
  event.preventDefault();
  console.log();

  if (email && password) {
    alert("Login efetuado com sucesso");
  }
}

export function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={styles.tudo}>
      <div className={styles.quaseTudo}>
        <div className={styles.app}>Bem-Vinde de volta!</div>
        <div className={styles.div}>
          Digite as suas credenciais para acessar a sua conta
        </div>
        <div className={styles.sla}>
          <label className={styles.label} htmlFor="Nome:">
            Nome:
          </label>
          <input placeholder="Seu nome" className={styles.input} type="text" />
          <div className={styles.email}>
            <label className={styles.label} htmlFor="email">
              Endereço de E-mail:
            </label>
          </div>

          <input
            placeholder={"Seu email"}
            className={styles.input}
            type="email"
          />
          <div className={styles.senha}>
            <label className={styles.label} htmlFor="password">
              Senha:
            </label>
            <div className={styles.senha}>
              {" "}
              <a className={styles.link1} href="">
                Esqueceu a senha?
              </a>
            </div>
          </div>
          <input
            placeholder="Sua senha"
            className={styles.input}
            type="password"
          />
          <div className={styles.lembrar2}>
            <div>
              <input type="checkbox" />
            </div>
            <div className={styles.lembrar}>lembrar senha</div>
          </div>
          <button className={styles.button}>Entrar</button>
          <b className={styles.conta}>
            Não possui conta?{" "}
            <a className={styles.link} href="">
              Criar conta
            </a>{" "}
          </b>
        </div>
      </div>
      <div className={styles.img}>
        <img className={styles.medico} src="/medico.png" alt="" />
      </div>
    </div>
  );
}
