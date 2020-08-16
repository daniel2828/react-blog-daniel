import React, { Component } from "react";

class SeccionPruebas extends Component {
  contador = 0;
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
  }
  HolaMundo(nombre, edad) {
    var presentacion = (
      <div>
        <h2>Hola, soy {nombre}</h2>
        <h3>Tengo {edad} años</h3>
      </div>
    );
    return presentacion;
  }
  sumar = (e) => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };
  restar = (e) => {
    this.setState({
      contador: this.state.contador - 1,
    });
  };
  render() {
    return (
      <section id="content">
        <p>Hola bienvenido a la página personal de Daniel Tendero</p>
        {this.HolaMundo("daniel", 26)}
        <h2>Estado</h2>
        <p>Contador: {this.state.contador}</p>
        <p>
          <input type="button" value="Sumar" onClick={this.sumar} />
          <input type="button" value="Restar" onClick={this.restar} />
        </p>
        <section className="componentes"></section>
      </section>
    );
  }
}
export default SeccionPruebas;
