import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useGlobalContext } from '../context/context'

const url = `https://api.unsplash.com/search/photos/?client_id=${
  import.meta.env.VITE_API_KEY
}`

const Gallery = () => {
  const { searchTerm } = useGlobalContext()

  const response = useQuery({
    queryKey: ['images', searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`)
      return result.data
    },
  })

  if (response.isLoading) {
    return (
      <section className="image-container">
        <h3>Loading.....</h3>
      </section>
    )
  }

  if (response.isError) {
    return (
      <section className="image-container">
        <h3>There was an Error...</h3>
      </section>
    )
  }

  const data = response.data.results

  if (data.length < 1) {
    return (
      <section className="image-container">
        <h3>No Image Found</h3>
      </section>
    )
  }

  return (
    <section className="image-container">
      {data.map((item) => {
        const url = item?.urls?.regular
        return (
          <img
            key={item.id}
            className="img"
            src={url}
            alt={item.alt_description}
          />
        )
      })}
    </section>
  )
}

export default Gallery
