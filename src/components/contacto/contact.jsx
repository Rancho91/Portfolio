import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./contact.module.css";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_email: email,
      to_email: "ramiroisanchezdev@example.com", // Ingresa aquí tu dirección de correo
      subject: "Mensaje desde el formulario de contacto - Portfolio",
      message: message,
      name: name,
    };

    emailjs
      .send(
        "service_0ztm46j",
        "template_8xcrzxo",
        templateParams,
        "50WlnwzGqTRgEtYdI"
      )
      .then((response) => {
        console.log("Correo enviado:", response);
        setEmail("");
        setName("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error al enviar el correo:", error);
      });
  };

  return (
    <div className={`container-fluid ${styles.container}`} id="contact">
      <h1 className={`col-12 ${styles.title}`}>CONTÁCTAME:</h1>

      <div className="col-12 d-flex flex-row" id="contacto">
        <form onSubmit={handleSubmit} className={styles.containerForm}>
          <div className={`row-fluid d-flex flex-row ${styles.form}`}>
            <div className="col-4 d-flex flex-column justify-content-around ">
              <div className="col-12"> 
                <input
                  placeholder="ejemplo@gmail.com"
                  type="email"
                  name="email"
                  id="email"
                  className="p-3 w-full rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="col-12">
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  placeholder="Nombre y Apellido"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className={`col-12 d-flex flex-row `}>
                <div className="col-6">
                  <a
                    href="https://www.linkedin.com/in/ramiro-sanchez-solano/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className={`${styles.img}`}
                      src={
                        "https://res.cloudinary.com/dxatwbzff/image/upload/v1689038675/38669_nshggh.png"}
                      alt="LinkedIn"
                      title="LinkedIn"
                      loading="lazy"
                    />
                  </a>
                </div>
                <div className="col-6">
                  <a
                    href="https://github.com/Rancho91"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className={`${styles.img}`}
                      src={
                        "https://res.cloudinary.com/dxatwbzff/image/upload/v1681686708/Personal%20Proyects/GitHub_hpyl4c.png"
                      }
                      alt="GitHub"
                      title="GitHub"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
              <div className="col-12">
              <button className={styles.button} type="submit">
                Enviar Mensaje
              </button>
            </div>
            </div>

            <div className={`col-8 ${styles.containerTarea}`}>
              <div>
                <textarea
                  name="msj"
                  id="msj"
                  placeholder="Mensaje"
                  className={styles.textTarea}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
