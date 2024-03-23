import React from 'react'
import { useGlobalContext } from '../context/context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()

  const submitHandler = (e) => {
    e.preventDefault()
    const searchTerm = e.target.elements.search.value
    if (!searchTerm) return
    setSearchTerm(searchTerm)
  }

  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="cat"
          name="search"
          className="form-input search-input"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  )
}

export default SearchForm
