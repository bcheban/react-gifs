import React from 'react'
import { FaSearch } from 'react-icons/fa'
import styled from 'styled-components'

 const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 4rem;
  padding: 0.75rem 1.5rem;
  color: #ffffff;
  background-color: #3f51b5;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`

const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #ffffff;
  border-radius: 3px;
  overflow: hidden;
`;

const Button  = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;



const Span = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 1.25rem;   
  line-height: 1.75rem; 
  color: rgb(17 24 39);
  border: none;
  outline: none;
  padding-left: 0.25rem;
  padding-right: 0.25rem;

  &::placeholder {
    font: inherit;
    font-size: 1.125rem;  
    line-height: 1.75rem; 
    color: rgb(156 163 175);
  }
`;



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
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">
            <FaSearch/>
            <Span>Search</Span>
          </Button>
          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search gifs"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </Form>
      </Header>
    )
  }
}

export default GifSearch