import React from "react";
import CardHome from "../components/Cards/CardHome";

const HomePage = () => {
  return (
    <>
      <CardHome
        data={{
          title: "Películas",
          description:
            "Descubre un universo cinematográfico emocionante en nuestra web. Explora una amplia selección de títulos en la categoría de películas. ¡Encuentra tu próxima película favorita hoy!",
          url: "/peliculas",
        }}
      />
      <CardHome
        data={{
          title: "Series",
          description:
            "Explora un universo de entretenimiento sin límites en nuestra plataforma de transmisión. Descubre una amplia variedad de series emocionantes y cautivadoras que te sumergirán en experiencias únicas. ¡Sumérgete en el fascinante mundo de las series con nosotros!",
          url: "/series",
        }}
      />
    </>
  );
};

export default HomePage;
