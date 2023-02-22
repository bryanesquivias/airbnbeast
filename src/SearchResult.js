import React from 'react'
import './SearchResult.css'

function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
}) {
  return (
    <div className='searchResult'>
        <img src={img}/>
        <div className='searchResult__info'>
            <div className='searchResult__infoTop'>
                <p>{City}</p>
                <h3>{title}</h3>
                <p>_____________</p>
                <p>{roomType}</p>

            </div>
            <div className='searchResult__infoBottom'>
                <div className='searchResult__stars'>
                    <p><strong>{star}</strong></p>
                </div>
                <div className='searchResult__price'>
                    <h2>{price}</h2>
                    <p>{total}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchResult