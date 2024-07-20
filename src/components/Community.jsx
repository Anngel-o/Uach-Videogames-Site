import React, { Component } from "react";
import styled from "styled-components";

const paragraphStyle = {
  color: "#000",
  fontSize: "16px",
  margin: "1rem 8.75rem",
  padding: "1rem",
};

export class Community extends Component {
  render() {
    return (
      <section className="p-5">
        <h2 className="p-1" style={{ textAlign: "center" }}>
          Nuestra comunidad
        </h2>
        <p style={paragraphStyle}>
          Somos un grupo de estudiantes emocionados y entusiastas que están
          dando vida a un nuevo estudio de desarrollo de videojuegos; UACH
          Videogames Studio. Desde diseñadores hasta programadores, artistas y
          narradores, todos compartimos un fuerte interés en explorar el mundo
          de la creación de videojuegos. Estamos en las etapas iniciales, pero
          nuestro entusiasmo y deseo de aprender son ilimitados. Somos un
          estudio de videojuegos emergente guiado por una enorme pasion hacia la
          innovacion, los videojuegos y el software. Formamos parte de la
          Universidad Autónoma de Chihuahua donde originalmente iniciamos como
          un club estudiantil de la facultad de Ingeniería. Actualemnte estamos
          trascendiendo y evolucionando para dar vida a un estudio de
          videojuegosSi estás desarrollando juegos o eres un creador de
          contenido, queremos trabajar contigo.
        </p>
        <p style={paragraphStyle}>
          ¡Explora el mundo emocionante de la creación de videojuegos en nuestro
          club dedicado a la innovación, creatividad y aprendizaje! En el Club
          de Desarrollo de Videojuegos, nos enorgullece centrarnos en diversas
          áreas que abarcan desde la creación de juegos educativos hasta la
          revitalización de los juegos tradicionales clásicos. Nuestra pasión
          nos impulsa a construir experiencias interactivas que no solo
          entretienen, sino que también educan y conectan con la rica historia
          de la tecnología de videojuegos.
        </p>
      </section>
    );
  }
}

export default Community;
