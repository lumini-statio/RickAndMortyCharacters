import React, { useEffect, useState } from 'react'
import RMService from '../../services/RM.service';
import Card from './Card'

const Cards = () => {

  const [mascotas, setMascotas] = useState([])

  useEffect(()=>{

    RMService.getAllCharacters()
    .then((data)=>setMascotas(data.results))
    .catch((error)=>console.log(error));

  }, [mascotas])

  const cardList = mascotas.map((m)=><Card mascota={m} key={m.id}/>)
  return (
    <div>
      {cardList}
    </div>
  )
}

export default Cards
