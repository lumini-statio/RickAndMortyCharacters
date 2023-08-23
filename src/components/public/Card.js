import React from 'react'

const Card = ({mascota}) => {
  const cardStyle = {
    width: '18rem',
    display: 'inline-block',
    margin: '14px'
  };
  return (
    <div className="card" style={cardStyle}>
      <img src={mascota.image} className="card-img-top" alt="imagen"/>
      <div className="card-body">
        <h5 className="card-title">{mascota.name}</h5>
        <a className="btn">{mascota.status}</a>
        <a className='btn'>{mascota.species}</a>
        <a className='btn'>{mascota.gender}</a>
      </div>
    </div>
  )
}

export default Card
