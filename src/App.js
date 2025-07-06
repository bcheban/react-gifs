import React from 'react'
import axios from 'axios'
import GifSearch from './components/GifSearch'
import GifList from './components/GifList'
import styled from 'styled-components'

const Div = styled.div`
display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`

axios.defaults.baseURL = 'https://api.giphy.com/v1/gifs'
const API_KEY = ''

export default class App extends React.Component {
  state = {
    images: [],
    value: '',
    data: '',
  }

  handleSubmit = async value => {
    const query = value.trim()
    this.setState({ value: query, images: []})
    const endpoint = query ? '/search' : '/trending';
    try {
      const { data } = await axios.get(endpoint, {
        params: {
          q: query,
          api_key: API_KEY,
          limit: 10,
        },
      })
      this.setState({ images: data.data })
    } catch (e) {
      console.error(e)
    } 
  }


  render() {
    const { images } = this.state
    return (
      <Div>
        <GifSearch onSubmit={this.handleSubmit}/>
        <GifList images={images} />
      </Div>
    )
  }
}
