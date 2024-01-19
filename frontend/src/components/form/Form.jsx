import "./Form.css";
import { useState } from "react";

export const Form = ({ selectedHotel }) => {
  const [confirmationMessage, setConfirmationMessage] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    setConfirmationMessage(
      <>
        ¡Reserva confirmada!
        <br />
        Gracias por elegir nuestro hotel.
      </>
    );
  };
  return (
    <section className="chooseDateContainer">
      <h2>{selectedHotel ? `${selectedHotel.name}` : "Tu reserva"}</h2>
      <div className="stars">
        <img src="../../../public/Star.svg" alt="star icon" />
        <img src="../../../public/Star.svg" alt="star icon" />
        <img src="../../../public/Star.svg" alt="star icon" />
        <img src="../../../public/Star.svg" alt="star icon" />
      </div>
      <div className="formContainer">
        <h3>Completa tu reserva</h3>
        <form>
          <div>
            <label htmlFor="">Fecha de entrada</label>
            <input type="date" />
          </div>
          <div>
            <label htmlFor="">Fecha de Salida</label>
            <input type="date" />
          </div>

          <input
            type="submit"
            value={"¡Reserva Ahora!"}
            onClick={handleSubmit}
          />
          {confirmationMessage && (
            <div className="confirmationMessage" style={{ color: "green" }}>
              {confirmationMessage}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};
