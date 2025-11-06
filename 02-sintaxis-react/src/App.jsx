import "./App.css"
import { NavBar } from './components/NavBar'
import { ExtensionCard } from './components/ExtensionCard'
import LoginForm from "./components/LoginForm"

export const App = () => {
  return (
    <>
      <NavBar/>
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



      </div>
      <h1>React + Bootstrap</h1>
    <LoginForm/>
    </>
  );
};
