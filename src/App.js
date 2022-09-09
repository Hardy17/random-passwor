import "./styles.css";
import { useState, useRef } from "react";

export const GeneratePassword = () => {
  const [passwordGenerate, setpasswordGenerate] = useState("");
  //const [copiePassword, setcopiePassword] = useState("");
  const copieClipboard = useRef(null);
  const onGeneratePassword = () => {
    const chart =
      "?@[^_`#$%&'()*+,-./0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 12;
    let password = "";
    for (let index = 0; index <= passwordLength; index++) {
      let randomNumber = Math.floor(Math.random() * chart.length);
      password += chart.substring(randomNumber, randomNumber + 1);
    }

    setpasswordGenerate(password);
  };

  const copy = ({ target }) => {
    const password = copieClipboard.current.value;
    navigator.clipboard.writeText(password);
    alert("Contraseña copiada");
  };
  return (
    <div className="box">
      <h2>Generate Random Password</h2>
      <input
        ref={copieClipboard}
        type="text"
        placeholder="Create a password"
        value={passwordGenerate}
        readOnly
      />
      <table>
        <thead>
          <tr>
            <th>
              <div id="button" className="btn1" onClick={onGeneratePassword}>
                Generate
              </div>
            </th>
            <th>
              <div id="button" className="btn2" onClick={copy}>
                Copy
              </div>
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
};
export default GeneratePassword;
