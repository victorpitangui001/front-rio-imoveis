import { useState } from "react";

import formStyles from './Form.module.css';

import Input from './Input';
import Select from "./Select";

function PropertieForm({ handleSubmit, propertieData, btnText }) {
  const [propertie, setPropertie] = useState(propertieData || {});
  const [preview, setPreview] = useState([]);
  const tipos = ['Apartamento', 'Casa']

  function onFileChange(e) {
    setPreview(Array.from(e.target.files))
    setPropertie({ ...propertie, images: [...e.target.files] })
  }

  function handleChange(e) {
    setPropertie({ ...propertie, [e.target.name]: e.target.value })
  }

  function handleType(e) {
    setPropertie({ ...propertie, type: e.target.options[e.target.selectedIndex].text })
  }

  function submit(e) {
    e.preventDefault()
    console.log(propertie)
    handleSubmit(propertie)
  }

  return (
    <form onSubmit={submit} className={formStyles.form_container}>
      <div className={formStyles.preview_propertie_images}>
        {preview.length > 0
          ? preview.map((image, index) =>(
            <img src={URL.createObjectURL(image)} alt={propertie.name} key={`${propertie.name}+${index}`} />
          )) :
          propertie.images &&
          propertie.images.map((image, index) =>(
            <img src={`${process.env.REACT_APP_API}/images/properties/${image}`} alt={propertie.name} key={`${propertie.name}+${index}`} />
          ))
        }
      </div>
      <Input
        text='Imagens da Propiedade'
        type='file'
        name='images'
        handleOnChange={onFileChange}
        multiple={true}
      />
      <Select
        name='type'
        text='Selecione o Tipo de Propiedade'
        options={tipos}
        handleOnChange={handleType}
        value={propertie.type || ''}
      />
      <Input
        text='Valor da Propiedade'
        type='number'
        name='price'
        placeholder='Digite o valor da Propiedade'
        handleOnChange={handleChange}
        value={propertie.price || ''}
      />
      <Input
        text='Número de Quartos'
        type='number'
        name='numberofrooms'
        placeholder='Digite a quantidade de Quartos da sua propiedade'
        handleOnChange={handleChange}
        value={propertie.numberofrooms || ''}
      />
      <Input
        text='Número de Banheiros'
        type='number'
        name='numberofbathrooms'
        placeholder='Digite a quantidade de Banheiros da sua propiedade'
        handleOnChange={handleChange}
        value={propertie.numberofbathrooms || ''}
      />
      <Input
        text='Nome da Rua'
        type='text'
        name='rua'
        placeholder='Digite nome da rua'
        handleOnChange={handleChange}
        value={propertie.rua || ''}
      />
      <Input
        text='Número da Propiedade'
        type='text'
        name='numero'
        placeholder='Digite o número'
        handleOnChange={handleChange}
        value={propertie.numero || ''}
      />
      <Input
        text='Bairro'
        type='text'
        name='bairro'
        placeholder='Digite o Bairro'
        handleOnChange={handleChange}
        value={propertie.bairro || ''}
      />
      <Input
        text='Cidade'
        type='text'
        name='cidade'
        placeholder='Digite Cidade'
        handleOnChange={handleChange}
        value={propertie.cidade || ''}
      />
      <Input
        text='Estado'
        type='text'
        name='estado'
        placeholder='Digite o Estado'
        handleOnChange={handleChange}
        value={propertie.estado || ''}
      />
      <Input
        text='Cep'
        type='text'
        name='cep'
        placeholder='Digite o Cep'
        handleOnChange={handleChange}
        value={propertie.cep || ''}
      />
      <input type="submit" value={btnText} />
    </form>
  )
}

export default PropertieForm