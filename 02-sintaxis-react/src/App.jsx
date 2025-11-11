import "./App.css"
import { NavBar } from './components/NavBar'
import { ExtensionCard } from './components/ExtensionCard'
import LoginForm from "./components/LoginForm"
import ProductCard from "./components/ProductCard"

export const App = () => {
  return (
    <>
      <NavBar />
      <div className="containerCards">
        <ExtensionCard
          cardTitle="Google Translate"
          cardImage="🆔"
          cardDescription="Aplicación para traducir página"
        />
        <ExtensionCard
          cardTitle="Spotify"
          cardImage="🚀"
          cardDescription="Aplicacion para escuchar musica"
        />

        <ExtensionCard
          cardTitle="Samsung"
          cardImage="📱"
          cardDescription="Aplicion de samsung"
        />
        <ExtensionCard
          cardTitle="YouTube"
          cardImage="🎬"
          cardDescription="Aplicacion para ver videos"
        />
        <ExtensionCard
          cardTitle="Instagram"
          cardImage="📸"
          cardDescription="Aplicacion para compartir fotos"
        />
        <ExtensionCard
          cardTitle="Netflix"
          cardImage="🎥"
          cardDescription="Aplicacion para ver series y peliculas"
        />
        <ExtensionCard
          cardTitle="Didi Food"
          cardImage="🍔"
          cardDescription="Aplicacion para pedir comida"
        />
        <ExtensionCard
          cardTitle="Gallery"
          cardImage="🖼️"
          cardDescription="Aplicacion para ver fotos"
        />
        <ExtensionCard
          cardTitle="Tik tok"
          cardImage="😍"
          cardDescription="Aplicacion para ver y grabar videos cortos"
        />


      </div>

      <h2>React + Bootstrap</h2>
      <LoginForm />

      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <ProductCard />
          </div>
          <div className="col-12 col-md-6 col-lg-4 mt-4 mt-md-0">
            <ProductCard />
          </div>
          <div className="col-12 col-md-12 col-lg-4 mt-4 mt-lg-0">
            <ProductCard />
          </div>
        </div>
      </div>
    </>
  );
};
