import React from 'react'
import { FaSearch } from 'react-icons/fa'

class GifSearch extends React.Component {
  state = { value: '' }

  handleChange = e => this.setState({ value: e.target.value })

  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state.value)
    this.setState({ value: '' })
  }

  render() {
    return (
      <header className="">
        <form className="" onSubmit={this.handleSubmit}>
          <button type="submit" className="">
            <FaSearch className="" />
            <span className="">Search</span>
          </button>
          <input
            className=""
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
      </header>
    )
  }
}

export default GifSearch