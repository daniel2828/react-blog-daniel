import React, { Component } from "react";
import Slider from "./Slider";

import Sidebar from "./Sidebar";
class Formulario extends Component {
  nombreRef = React.createRef();
  apellidosRef = React.createRef();
  bioRef = React.createRef();
  generoHRef = React.createRef();
  generoMRef = React.createRef();
  generoORef = React.createRef();
  state = {
    user: {},
  };
  recibirFormulario = (e) => {
    e.preventDefault();
    var genero = "";
    if (this.generoHRef.current.checked) {
      genero = this.generoHRef.current.value;
    } else if (this.generoMRef.current.checked) {
      genero = this.generoMRef.current.value;
    } else {
      genero = this.generoORef.current.value;
    }
    var user = {
      nombre: this.nombreRef.current.value,

      apellidos: this.apellidosRef.current.value,

      bio: this.bioRef.current.value,
      genero: genero,
    };
    this.setState({
      user: user,
    });
    console.log(user);
  };
  render() {
    if (this.state.user) {
      var user = this.state.user;
    }
    return (
      <div id="formulario">
        <Slider title="Formulario" size="slider-small" />
        <div className="center">
          <div id="content">
            {/*Listado de artículos que vendran de la api REST de node */}
            <form
              className="mid-form"
              onSubmit={this.recibirFormulario}
              onChange={this.recibirFormulario}
            >
              {/* Mostrar los datos del formulario */}
              {this.state.user.nombre && (
                <div id="user-data">
                  <p>
                    Nombre: <strong>{user.nombre}</strong>
                  </p>
                  <p>
                    Apellidos: <strong>{user.apellidos}</strong>
                  </p>
                  <p>
                    Bio: <strong>{user.bio}</strong>
                  </p>
                  <p>
                    Género: <strong>{user.genero}</strong>
                  </p>
                </div>
              )}
              <h1 className="subheader">Formulario</h1>
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" name="nombre" ref={this.nombreRef} />
              </div>
              <div className="form-group">
                <label htmlFor="apellidos">Apellidos</label>
                <input type="text" name="apellidos" ref={this.apellidosRef} />
              </div>
              <div className="form-group">
                <label htmlFor="biografia">Biografía</label>
                <textarea name="bio" ref={this.bioRef}></textarea>
              </div>

              <div className="form-group radiobuttons">
                <input
                  type="radio"
                  name="genero"
                  value="hombre"
                  ref={this.generoHRef}
                />
                Hombre
                <input
                  type="radio"
                  name="genero"
                  value="mujer"
                  ref={this.generoMRef}
                />
                Mujer
                <input
                  type="radio"
                  name="genero"
                  value="otro"
                  ref={this.generoORef}
                />
                Otro
              </div>
              <div className="clearfix"></div>
              <input type="submit" value="enviar" className="btn btn-success" />
            </form>
          </div>
          <Sidebar blog="true" />
        </div>
      </div>
    );
  }
}
export default Formulario;
