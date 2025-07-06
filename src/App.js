import React from 'react'
import axios from 'axios'
import GiftSearch from './components/GifSearch'
import GifList from './components/GifList'

axios.defaults.baseURL = 'https://api.giphy.com/v2'
const API_KEY = 'g63gyqOSfqnXWPgNePzjL3eTVRgvDa7f'

export default class App extends React.Component {
  state = {
    images: [],
    value: '',
    data: ''
  }

  handleSubmit = async value => {
    const query = value.trim()
    this.setState({ value: query, images: []})
    try {
      const { data } = await axios.get('/emoji', {
        params: {
          q: query,
          api_key: API_KEY,
          limit: 10,
          offset: 0
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
      <div className="App">
        <GiftSearch onSubmit={this.handleSubmit}/>
        <GifList images={images} />
      </div>
    )
  }
}
