import Capa from '../../assets/img/capa.jpg';
import Movel from '../../assets/img/movel.jpg';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className='container-fluid header bg-white p-0'>
      <div className='row g-0 align-items-center flex-column-reverse flex-md-row'>
        <div className="col-md-6 p-5 mt-lg-5">
          <h1 className="display-5 animated fadeIn mb-4">Encontre um <span class="text-primary">Lar Perfeito</span> Para morar com a sua familia</h1>
          <p className="animated fadeIn mb-4 pb-2">Descubra imóveis aconchegantes e seguros para você e sua família. Explore nossa ampla variedade de opções em diferentes bairros e faixas de preço, e encontre o lar que se encaixa perfeitamente no seu estilo de vida.</p>
          <button className="btn btn-primary py-3 px-5 me-3 animated fadeIn"><Link to={'/propertie/allproperties'} className='fw-bold text-decoration-none text-white'>Encontre Agora</Link></button>
        </div>
        <div className="col-md-6 animated fadeIn">
          <div className="owl-carousel header-carousel">
            <div className="owl-carousel-item">
              <img className="img-fluid" src={Capa} alt="" />
            </div>
            <div className="owl-carousel-item">
              <img className="img-fluid" src="" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div className="about-img position-relative overflow-hidden p-5 pe-0">
                            <img className="img-fluid w-100" src={Movel} alt='movel azul'   />
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <h1 className="mb-4">Aqui é o lugar certo para encontrar o imóvel perfeito.</h1>
                        <p className="mb-4">Comece a construir seu futuro em um lar que te inspire. Mais do que um imóvel,
                            oferecemos um lugar para você realizar seus sonhos e construir uma vida feliz ao lado de
                            quem você ama.</p>
                        <p><i className="fa fa-check text-primary me-3"></i>Agende uma visita personalizada.</p>
                        <p><i className="fa fa-check text-primary me-3"></i>Receba atendimento personalizado.</p>
                        <p><i className="fa fa-check text-primary me-3"></i>Encontre o imóvel dos seus sonhos com preços
                            imperdíveis.</p>
                        <a className="btn btn-primary py-3 px-5 mt-3" href="/">Consulte mais informações.</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Home