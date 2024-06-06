import api from '../../../utils/api'

import {useState, useEffect} from 'react';

import styles from './Dashboard.module.css';

import RoundedImage from '../../layouts/RoundedImage';



function MyInterest() {
  const [properties, setProperties] = useState({});
  const [token] = useState(localStorage.getItem('token') || '');


  useEffect (() => {

    api.get('/properties/myinterest', {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`
      }
    }).then((response) => {
      setProperties(response.data.properties);
    })

  }, [token])
  
  
  return(
    <section>
      <div className={styles.propertielist_header}>
        <h1>Minhas Visitas</h1>
      </div>
      <div className={styles.propertielist_container}>
        {properties.length > 0 &&
          properties.map((propertie) => (
            <div key={propertie._id} className={styles.propertielist_row}>
              <RoundedImage
                src={`${process.env.REACT_APP_API}/images/properties/${propertie.images[0]}`}
                alt={propertie.name}
                width="px75"
              />
              <span className="bold">{propertie.name}</span>
              <div className={styles.contacts}>
                <p>
                  <span className="bold">Ligue para:</span> <p>2197082xx6231</p>
                </p>
                <p>
                  <span className="bold">Fale com:</span> <p>Mario Pitangui</p>
                </p>
              </div>
              <div className={styles.actions}>
                {propertie.available ? (
                  <p>Visita em processo</p>
                ) : (
                  <p>Parabéns por concluir sua visita</p>
                )}
              </div>
            </div>
          ))
        }
        {properties.length === 0 && <p>Você não tem visitas agendadas.</p>}
      </div>
    </section>
  )
}

export default MyInterest