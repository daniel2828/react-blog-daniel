import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SeccionPruebas from "./components/SeccionPruebas";
import MiComponente from "./components/Peliculas";
import Peliculas from "./components/Peliculas";
import Error from "./components/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Formulario from "./components/Formulario";
class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* CONFIGURAR RUTAS Y PÁGINAS */}
        <Header />

        <Switch>
          <Route exact path="/" component={Peliculas} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/formulario" component={Formulario} />
          <Route exact path="/peliculas" component={Peliculas} />
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

        <div className="clearfix"></div>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default Router;
