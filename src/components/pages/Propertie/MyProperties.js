import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import api from '../../../utils/api';

import styles from './Dashboard.module.css';

import RoundedImage from '../../layouts/RoundedImage';

/* hook*/
import useFlashMessage from '../../../hooks/useFlashMessage';


function MyProperties() {
  const [properties, setProperties] = useState([]);
  const [token] = useState(localStorage.getItem('token') || '');
  const {setFlashMessage} = useFlashMessage();

  useEffect(()=> {
    api.get('/properties/myproperties', {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`
      }
    })
    .then((response) => {
      setProperties(response.data.properties)
    })
  }, [token]);

  async function removePropertie(id) {
    let msgType = 'success'
    const data = await api.delete(`/properties/${id}`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`,
      }
    }).then((response) => {
      const updatedPropertie = properties.filter((propertie) => propertie._id !== id);
      setProperties(updatedPropertie);
      return response.data
    })
    .catch((err)=>{
      msgType= 'error'
      return err.response.data
    })

    setFlashMessage(data.message, msgType)

  }

  async function concludeSale(id) {
    let msgType = 'success';
    const data = await api.patch(`/properties/conclude/${id}`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`
      }
    }).then((response => {
      return response.data
    })).catch((err) => {
      msgType = 'error'
      return err.response.data
    })

    setFlashMessage(data.message, msgType)
  }

  return (
    <section>
      <div className={styles.propertielist_header}>
        <h1>Minhas Propiedades</h1>
        <Link to='/propertie/add'>Cadastrar Propiedades</Link>
      </div>
      <div className={styles.propertielist_container}>
        {properties.length > 0 && 
          properties.map((propertie) => (
            <div className={styles.propertielist_row} key={propertie.id}>
              <RoundedImage
                src={`${process.env.REACT_APP_API}/images/properties/${propertie.images[0]}`} 
                alt={propertie.name} 
                width='px75'
              />
              <span className='fw-bold text-primary'>{propertie.type}</span>
              <div className={styles.actions}>
                {propertie.available ?  
                (<>
                  {propertie.interested && (
                    <button className={styles.conclude_btn} onClick={() => {
                      concludeSale(propertie._id)
                    }}>Concluir Venda</button>
                  )}
                  <Link to={`/propertie/edit/${propertie._id}`}>Editar</Link>
                  <button onClick={() => {
                    removePropertie(propertie._id)
                  }}>Excluir</button>
                </>)
                
                : <p>Propiedade ja alugada</p>}
              </div>
            </div>
          ))
        }
        {properties.length === 0 && <p>Não há Propiedades cadastradas</p>}
      </div>
    </section>
  )
}

export default MyProperties