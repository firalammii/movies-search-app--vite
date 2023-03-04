import React from 'react'

const Card = ({data}) => {
  return (
    <div className='card'>
          <img src={data.poster_path}/>
    </div>
  )
}

export default Card