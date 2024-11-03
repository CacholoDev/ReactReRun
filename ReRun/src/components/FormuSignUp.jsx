import { useState } from "react";
import { Campo } from "./Campo";

const FormuSignUp = () => {
  const [usuario, setUsuario] = useState("");
  const [pass, setPass] = useState("");
  const [mail, setMail] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [bio, setBio] = useState("");
  const [planPago, setPlanPago] = useState("g");

  const errores = {
    usuario: usuario.length < 3,
    pass: pass.length < 6,
    mail: mail.match(/^[^@]+@[a-z0-9\-.]+\.[a-z]{2,}$/i) === null,
    fechaNacimiento: Date.parse(fechaNacimiento) > Date.now(),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    {console.log("Formulario válido");}
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Crear una cuenta</legend>
          <p>
            Con una cuenta de usuario podrás guardar tus tareas y consultarlas
            en cualquier dispositivo.
          </p>
          <Campo
            id="usuario"
            type="text"
            placeholder="alice"
            value={usuario}
            onValueChange={setUsuario}
            invalido={errores.usuario}
            error="El nombre de usuario debe tener al menos 3 caracteres."
          >
            Nombre de usuario
          </Campo>
          <Campo
            id="pass"
            type="password"
            value={pass}
            onValueChange={setPass}
            invalido={errores.pass}
            error="La pass debe tener al menos 6 caracteres."
          >
            Contraseña
          </Campo>
          <Campo
            id="mail"
            type="email"
            placeholder="introduce un email valido"
            onValueChange={setMail}
            invalido={errores.mail}
            error="El email debe tener un formato válido."
          >
            {" "}
            Mail
          </Campo>
          <Campo
            id="fecha"
            type="date"
            onValueChange={setFechaNacimiento}
            invalido={errores.fechaNacimiento}
            error="La fecha debe tener un formato válido."
          >
            Fecha Nacimiento
          </Campo>
          {/*
          <label htmlFor="usuario">Nombre de usuario</label>
          <input type="text" name="usuario" id="usuario" placeholder="alice" value={usuario} onChange= {(e) => setUsuario(e.target.value)} />
          {errores.usuario && <p className="error">El user debe tener al menos 3 caracteres</p>}
          <label htmlFor="pass">Contraseña</label>
          <input type="password" name="pass" id="pass" value={pass} onChange={(e) => setPass(e.target.value) } />
          {errores.pass && <p className="error">La contraseña debe tener al menos 6 caracteres</p>}
        */}

          {/* labels para textarea e select*/}

          <label htmlFor="bio">Biografía</label>
          <textarea
            name="bio"
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />

          <label htmlFor="planPago">Plan de pago</label>
          <select
            name="planPago"
            id="planPago"
            value={planPago}
            onChange={(e) => setPlanPago(e.target.value)}
          >
            <option value="g">Gratuito 0€</option>
            <option value="p">Pro 12€/año</option>
          </select>
          {planPago == "p" && (
            <>
              <Campo
                id="tarjeta"
                maxLength="16"
                placeholder="1234 1234 1234 1234"
              >
                Tarjeta
              </Campo>
              <Campo id="caducidad" maxLength="6" placeholder="MMYYYY">
                Fecha de caducidad
              </Campo>
              <Campo id="cvv" maxLength="3" placeholder="123">
                CVV
              </Campo>
            </>
          )}

          
          <p>
            <input type="submit" value="Crear cuenta" disabled={Object.values(errores).some(v=>v)} />
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export { FormuSignUp };
