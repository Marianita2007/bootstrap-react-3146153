import "./Home.css";

import fondoTeaser from "../assets/fondo-teaser.png";


function Home({nombre,texto}) {
  return (
    <>

       {/*  SECCION BANNER */}
        <section className="container-fluid seccion-banner-morado d-flex justify-content-center align-items-center">

           <h2 className="titulo-banner">SOMBRAS<br />DEL DESPERTAR</h2>

        </section>

       {/*  FONDO-TEASER */}

        <section className="seccion-teaser container-fluid d-flex align-items-center" style={{ backgroundImage: `url(${fondoTeaser})` }}>

            <div className="texto-teaser ms-auto">

                <h3 className="frase-teaser cursiva">
                Ella solo quería ver qué había dentro…
                </h3>

                <p className="descripcion-teaser">
                Lo abrió. Y lo que desató no piensa detenerse.<br />
                Mira el teaser y atrévete a ver lo que nunca debió abrirse
                </p>

                <button className="btn-teaser">IR A TEASER</button>

            </div>

        </section>

        {/* SECCION-HISTORIA */}
        <section className="historia-section d-flex flex-column flex-md-row">

            {/* IZQUIERDA — IMAGEN */}
            <div className="historia-img"></div>

                {/* DERECHA — TEXTO */}
                <div className="historia-text-container p-5 ">
                    <h2 className="historia-title">Historia</h2>

                <p className="historia-paragraph">
                Sombras del Despertar nace como una experiencia narrativa única ,
                es una experiencia que te sumerge en un mundo donde el pasado y el futuro
                se entrelazan. A través de una historia distópica llena de mitología,
                misterio que son el centro de la trama , exploramos cómo las creencias
                de civilizaciones antiguas siguen marcando nuestra identidad y forma de pensar.
                Con un enfoque visual envolvente y una narrativa que invita a la reflexión,
                este proyecto no solo entretiene, sino que también despierta curiosidad por el
                legado cultural que nos define. <br /><br />
                El presente documento muestra el proceso que se llevó a cabo para la realización
                de este proyecto donde se encuentran, desde los  objetivos hasta el desarrollo
                de la identidad visual del proyecto.
                </p>
            </div>

        </section>

        <section className="cuadro-blanco-1"></section>

        {/* SECCION-PERSONAJES */}
        <section className="personajes-section container-fluid"> 
            
            <div className="row"> 

                <div className="col-12 col-md-6 personajes-text-container p-5">

                    {/* IZQUIERDA — TEXTO */}
                    <h2 className="personajes-title">Personajes</h2>

                    <p className="personajes-paragraph">
                    {texto}
                    </p>
                </div>

                <div className="col-12 col-md-6 personajes-img">

                    {/* DERECHA — IMAGEN */}
                </div>

            </div>
        </section>

        <section className="cuadro-blanco-2"></section>

        {/* ECCION-COMIC-INT */}
        <section className="sd-hero-section d-flex align-items-center">

            <div className="sd-hero-content">
                <h2 className="sd-hero-title">
                SOMBRAS DEL <br /> DESPERTAR
                </h2>

                <button className="btn btn-warning sd-hero-btn py-5 px-5 rounded-circle" >
                {nombre}
                </button>
            </div>

        </section>

    </>
  );
}

export default Home;