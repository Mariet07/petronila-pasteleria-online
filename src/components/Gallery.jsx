import React from 'react'

function Gallery() {
    const images = [
        "https://picsum.photos/150?text=Imagen+1",
        "https://picsum.photos/160?text=Imagen+1", 
        "https://picsum.photos/170?text=Imagen+1", 
        "https://picsum.photos/180?text=Imagen+1", 
        "https://picsum.photos/id/1/200/300?text=Imagen+1"
    ];

  return (
    <section style={{ 
        display: "flex", // Usa Flexbox para layout
        flexWrap: "wrap", // Permite que las imágenes se ajusten a la superficie de la ventana (responsivo)
        gap: "10px", // Espacio de 10px entre imágenes
        justifyContent: "center", // Centra horizontalmente
        marginTop: "20px" // Margen superior de 20px
    }}> 

        {
            /* Mapeo del Array de imágenes
                // Esto itera sobre cada elemento del array 'images'
                // src = URL de la imagen (ej: "https://...")
                // index = posición en el array (0, 1, 2...)
            */
        }
        {images.map((src, index) => ( 
            <img 
                key={index} //Identificador único requerido por React
                src={src} //URL de la imagen (del array)
                alt={`Imagen ${index + 1}`} // Texto alternativo accesible
                style={{ 
                    width: "150px", // Ancho fijo de 150px
                    height: "150px" // Alto fijo de 150px
                }} 
            />
        ))}
    </section>
  );
}

export default Gallery;