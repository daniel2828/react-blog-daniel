import React, { Component } from "react";

import Pelicula from "./Pelicula";
class Peliculas extends Component {
  state = {};
  cambiarTitulo = () => {
    var { peliculas } = this.state;
    var random = Math.floor(Math.random() * 3);
    peliculas[random].title = "Batman begins";
    this.setState({
      peliculas: peliculas,
    });
  };
  favorita = (pelicula, indice) => {
    this.setState({
      favorita: pelicula,
    });
  };
  // Cuando el componente se acaba de crear
  componentWillMount() {
    //alert("Se va a cargar el componente de peliculas");
    this.setState({
      peliculas: [
        {
          title: "Batman VS Superman",
          image:
            "https://www.cinemascomics.com/wp-content/uploads/2014/08/batman-V-superman-logo.jpg?width=1200&enable=upscale",
        },
        {
          title: "Batman VS Superman 2",
          image:
            "https://www.cinemascomics.com/wp-content/uploads/2014/08/batman-V-superman-logo.jpg?width=1200&enable=upscale",
        },
        {
          title: "Batman VS Superman 3",
          image:
            "https://www.cinemascomics.com/wp-content/uploads/2014/08/batman-V-superman-logo.jpg?width=1200&enable=upscale",
        },
      ],
      nombre: "Daniel Tendero",
      favorita: {},
    });
  }
  componentDidMount() {
    //alert("Aquí se ha montado el componente");
  }

  // Render se encarga de mostrar por pantalla la vista
  render() {
    var pStyle = {
      background: "green",
      color: "white",
      padding: "10px",
    };
    var favorita;
    if (this.state.favorita.title) {
      favorita = (
        <p className="favorita" style={pStyle}>
          <span>La película favorita es: </span>
          <span>{this.state.favorita.title}</span>
        </p>
      );
    } else {
      favorita = <p>No hay película favorita </p>;
    }
    return (
      <div id="content" className="peliculas">
        <h2 className="subheader"> Hola soy peliculas</h2>
        <p> Seleccion de las películas favoritas de {this.state.nombre}</p>
        <button onClick={this.cambiarTitulo}>Cambiar titulo</button>
        {
          // Condiciones en JSX
          favorita
        }

        <div id="articles" className="peliculas">
          {this.state.peliculas.map((pelicula, i) => {
            return (
              <Pelicula
                key={i}
                pelicula={pelicula}
                indice={i}
                marcarFavorita={this.favorita}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default Peliculas;
