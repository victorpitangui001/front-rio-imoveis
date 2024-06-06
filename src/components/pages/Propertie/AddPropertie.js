import styles from './addPropertie.module.css';
import { useState } from 'react';
import api from '../../../utils/api';

import { useNavigate } from 'react-router-dom';

/*Components*/
import PropertieForm from '../../form/PropertieForm'

/*HOOKS*/
import useFlashMessage from '../../../hooks/useFlashMessage';

function AddPropertie() {
  const [token] = useState(localStorage.getItem('token') || '');
  const {setFlashMessage} = useFlashMessage();
  const navigate = useNavigate();
  
  async function registerPropertie(propertie) {
    let msgType = 'success'

    const formData = new FormData

    await Object.keys(propertie).forEach((key) =>{
      if(key === 'images') {
        for(let i = 0; i < propertie[key].length; i++) {
          formData.append('images', propertie[key][i])
        }
      }else {
        formData.append(key, propertie[key]);
      }
    })

    const data = await api.post('properties/create', formData, {
      Authorization: `Bearer ${JSON.parse(token)}`,
      'Content-Type': 'multpart/form-data'
    })
    .then((response) => {
      return response.data
    })
    .catch((err) => {
      msgType = 'error'
      return err.response.data
    });

    setFlashMessage(data.message, msgType)
    if(msgType !== 'error') {
      navigate('/propertie/myproperties')
    }
  }
  return (
    <section className={styles.addpropertie_header}>
      <div>
        <h1>Cadastre sua Propiedade</h1>
        <p>Depois sua Propiedade ficara disponivel para Venda ou Aluguel</p>
      </div>
      <PropertieForm handleSubmit={registerPropertie} btnText='Cadastrar Propiedade'/>
    </section>
  )
}

export default AddPropertie