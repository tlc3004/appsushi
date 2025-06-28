// src/components/Carta.jsx

import { useImage } from "../Hooks/useImage";

function Carta() {
  const galeriaConModal = useImage();

  return (
    <div>
      <h3>Nuestros Rolls Destacados</h3>
      {galeriaConModal}
    </div>
  );
}

export default Carta;
