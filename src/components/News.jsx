import React, { Component } from "react";
import styled from "styled-components";

export class News extends Component {
  render() {
    return (
      <section className="p-5">
        <h2 className="p-1" style={{ textAlign: "center" }}>
          Noticias relevantes
        </h2>
        <div className="news-container row">
          <div className="actual-new col p-3 border bg-light">
            <img
              src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/08/que-2017-sigue-siendo-mejor-ano-videojuegos.jpg"
              alt=""
              style={{ width: "600px", height: "400px" }}
            />
            <h4>Noticia más reciente o relevante a mostrar</h4>
          </div>

          <div className="other-news-container col">
            <div className="other-new p-3 border bg-light">
              <h4>Noticia secundaria relevante</h4>
              <img
                src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/08/que-2017-sigue-siendo-mejor-ano-videojuegos.jpg"
                alt=""
                style={{ width: "400px", height: "200px" }}
              />
            </div>

            <div className="other-new p-3 border bg-light">
              <h4>Noticia secundaria relevante</h4>
              <img
                src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/08/que-2017-sigue-siendo-mejor-ano-videojuegos.jpg"
                alt=""
                style={{ width: "400px", height: "200px" }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default News;
