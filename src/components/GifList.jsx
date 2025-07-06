import React from 'react'
import styled from 'styled-components'

const Ul = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
` 

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

&:hover {
  transform: scale(1.03);
  cursor: zoom-in;
}
`

const Li = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`

const GifList = ({ images }) => (
  
    images.map(images => (
      <Ul>
      <Li key={images.id}>
        <Image
          src={images.images.fixed_height.url} 
          alt={images.title}
          height={images.images.fixed_height.height}
          width={images.images.fixed_height.width}
        />
      </Li>
      </Ul>
    ))
)

export default GifList