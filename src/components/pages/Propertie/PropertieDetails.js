import styles from './PropertieDetails.module.css';
import api from '../../../utils/api';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import useFlashMessage from '../../../hooks/useFlashMessage';
import ImageCarousel from './ImageCarousel'; // Importe o novo componente

// Função para formatar o valor em BRL
const formatCurrency = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};



function PropertieDetails() {
  const [propertie, setPropertie] = useState({});
  const { id } = useParams();
  const { setFlashMessage } = useFlashMessage();
  const [token] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    api.get(`/properties/${id}`).then((response) => {
      setPropertie(response.data.propertie);
    }).catch((err) => {
      console.error('Erro ao buscar propriedade:', err);
    });
  }, [id]);

  async function schedule() {
    let msgType = 'success';
    const data = await api.patch(`properties/schedule/${propertie._id}`, {}, {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`
      }
    }).then((response) => {
      return response.data;
    }).catch((err) => {
      msgType = 'error';
      return err.response.data;
    });

    setFlashMessage(data.message, msgType);
  }

  return (
    <>
      {propertie.type && (
        <section className={styles.propertie_details_container}>
          <div className={styles.propertie_details_header}>
            <h1>Detalhes Sobre a Propriedade: {propertie.type}</h1>
            <p>Se tiver interesse, marque uma visita para conhecer a propriedade.</p>
          </div>
          <ImageCarousel images={propertie.images} altText={propertie.name} />
          <p>
            <span className='bold'>Valor:</span> {formatCurrency(propertie.price)}
          </p>
          <p>
            <span className='bold'>Bairro:</span> {propertie.bairro}
          </p>
          {token ? (
            <button onClick={schedule}><a href={`https://wa.me/5521970826231?text=%20gostaria%20de%20mais%20informações%20sobre%20a%20propiedade%20${propertie.type}%20situada%20na%20rua%20${propertie.rua}%20`} target="_blank" rel="noreferrer">Clicar</a></button>
          ) : (
            <p>Você precisa <Link to='/register'>Criar uma conta</Link> para solicitar uma visita.</p>
          )}
        </section>
      )}
    </>
  );
}

export default PropertieDetails;