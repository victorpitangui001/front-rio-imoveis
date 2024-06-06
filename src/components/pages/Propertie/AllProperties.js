import api from '../../../utils/api';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import styles from './AllProperties.module.css';


// Função para formatar o valor em BRL
const formatCurrency = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
};

function AllProperties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {

    api.get('/properties').then((response) => {
      setProperties(response.data.properties);
    })

  }, [])

  return (
    <section>
      <div className={styles.propertie_header}>
        <h1>Encontre um Lar Perfeito</h1>
        <p>Veja o detalhe de cada propriedade e encontre o lar ideal para você e sua família.</p>
      </div>
      <div className={styles.propartie_container}>
        {properties.length > 0 &&
          properties.map((propertie) => (
            <div className={styles.propertie_card}>
              <div style={{ backgroundImage: `url(${process.env.REACT_APP_API}/images/properties/${propertie.images[0]})` }} className={styles.propertie_card_image}></div>
              <h3>{propertie.type}</h3>
              <p>
                <span className='bold'>Valor:</span> {formatCurrency(propertie.price)}
              </p>
              {propertie.available ? (<Link to={`/propertie/${propertie._id}`}>Mais detalhes</Link>
              ) : (
                <p className={styles.propertie_text}>Vendido</p>
              )}
            </div>
          ))

        }
        {properties.length === 0 && (
          <p>Não há propiedades diponiveis</p>
        )}
      </div>
    </section>
  )
}

export default AllProperties