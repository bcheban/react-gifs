import React from 'react'

const GifList = ({ images }) => (
    images.map(images => (
      <li key={images.id}>
        <img
          src={images.images.fixed_height.url} 
          alt={images.title}
        />
      </li>
    ))
)

export default GifList