import api from '../../../utils/api';

import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';

import styles from './addPropertie.module.css'

import PropertieForm from '../../form/PropertieForm'

/*hooks*/
import useFlashMessage from '../../../hooks/useFlashMessage'; 

function EditPropertie() {
  const [propertie, setPropertie] = useState({});
  const [token] = useState(localStorage.getItem('token') || '');
  const {id} = useParams();
  const {setFlashMessage} = useFlashMessage();

  useEffect(() => {
    api.get(`/properties/${id}`, {
      Autorization: `Bearer ${JSON.parse(token)}`
    }).then((respose) => {
      setPropertie(respose.data.propertie)
    })
  }, [token, id])

  async function updatePropertie(propertie){
    let msgType = 'success';
    const formData = new FormData();

    await Object.keys(propertie).forEach((key) =>{
      if(key === 'images') {
        for(let i = 0; i < propertie[key].length; i++) {
          formData.append('images', propertie[key][i])
        }
      }else {
        formData.append(key, propertie[key])
      }
    });

    const data = await api.patch(`properties/${propertie._id}`, formData, {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`,
        'Content-Type': 'multipart/form-data'
      }
    }).then((respose)=> {
      return respose.data
    }).catch((err) => {
      msgType = 'error'
      return err.response.data
    });

    setFlashMessage(data.message, msgType)
  }

  return (
    <section>
      <div className={styles.addpropertie_header}>
        <h1>Editando a Propiedade: {propertie.type}</h1>
        <p>Depois da edição os dados serão atualizados no sistema</p>
      </div>
      {propertie.type && <PropertieForm handleSubmit={updatePropertie} btnText='Atualizar' propertieData={propertie}/>}
        
    </section>
  )
}

export default EditPropertie