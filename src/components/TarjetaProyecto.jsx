/* Ejercicio #2 | Clase #3 */

/* =========== | TarjetaProyecto.jsx ========== */

function TarjetaProyecto({ titulo, descripcion, botonTexto }) {
    function capturaClic() {
        alert(`Explorando: ${titulo} || Por problemas personales estoy algo demorada, le pido por favor deje para último mi devolución, estaré mejorando el proyecto. `); 
    }
    
  return (
    <div className="tarjeta-proyecto">
      <h2 className="proyecto-titulo">{titulo}</h2>
      <p className="proyecto-descripcion">{descripcion}</p>
      <button className="proyecto-boton" onClick={capturaClic}>
        {botonTexto}
      </button>
    </div>
  );
}
export default TarjetaProyecto;
