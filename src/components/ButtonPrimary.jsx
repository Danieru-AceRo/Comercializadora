import React from 'react'

const ButtonPrimary = (prop) => {
   const url= prop.url
  return (
    <a href={`pdf/${url}`} download><button type="button" class="btn btn-primary">Descargar</button></a>
  )
}

export default ButtonPrimary