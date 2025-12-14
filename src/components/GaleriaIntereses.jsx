/* Ejercicio #3 | Clase #3 */

// Consiste en agregar la función que captura el evento clic

/* =========== | GaleriaIntereses.jsx ========== */

function GaleriaIntereses({ intereses }) {
  function capturarClic(e) {
    e.target.style.backgroundColor = '#28a745';
    e.target.style.color = 'white';
  }

  return (
    <div className="galeria-intereses">
      {intereses.map((interes) => (
        <button
          key={interes} 
          className="interes-boton"
          onClick={capturarClic}
        >
          {interes}
        </button>
      ))}
    </div>
  );
}

export default GaleriaIntereses;