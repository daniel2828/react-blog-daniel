import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SeccionPruebas from "./components/SeccionPruebas";
import MiComponente from "./components/Peliculas";
import Peliculas from "./components/Peliculas";
import Error from "./components/Error";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* CONFIGURAR RUTAS Y PÁGINAS */}
        <Header />
        <Slider title="Bienvenido al blog personal de Daniel Tendero" />
        <div className="center">
          <Switch>
            <Route exact path="/" component={Peliculas} />
            <Route exact path="/home" component={Peliculas} />
            <Route exact path="/ruta-prueba" component={SeccionPruebas} />
            <Route exact path="/segunda-ruta" component={MiComponente} />
            <Route
              exact
              path="/pagina-1"
              render={() => (
                <React.Fragment>
                  <h1>Hola Mundo desde la ruta pagina 1</h1>
                  <MiComponente />
                </React.Fragment>
              )}
            />
            <Route
              exact
              path="/pruebas/:nombre/:apellidos?"
              render={(props) => {
                let nombre = props.match.params.nombre;
                let apellidos = props.match.params.apellidos;
                return (
                  <div id="content">
                    <h1 class="subheader">Página de pruebas</h1>
                    <h2>{nombre + " " + apellidos}</h2>
                    {nombre && !apellidos && <span>{nombre}</span>}
                    {nombre && apellidos && (
                      <span>
                        {nombre}
                        {apellidos}
                      </span>
                    )}
                  </div>
                );
              }}
            />
            <Route component={Error} />
          </Switch>
          <Sidebar />

          <Footer />
        </div>
        <div className="clearfix"></div>
      </BrowserRouter>
    );
  }
}

export default Router;
