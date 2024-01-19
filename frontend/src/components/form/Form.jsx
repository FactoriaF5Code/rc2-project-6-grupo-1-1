import "./Form.css";

export const Form = ({ selectedHotel }) => {
  return (
    <section className="chooseDateContainer">
      <h2>{selectedHotel ? `Tu reserva en ${selectedHotel.name}` : "Tu reserva"}</h2>
      <div className="stars">
        {/* Puedes agregar lógica para mostrar estrellas si es necesario */}
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

          <input type="submit" value={"¡Reserva Ahora!"} />
        </form>
      </div>
    </section>
  );
};