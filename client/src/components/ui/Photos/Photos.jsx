import React, { Fragment, useEffect, useState } from 'react'
import { createApi } from 'unsplash-js'
import { PhotosStyled } from './Photos.styled'

const api = createApi({
  accessKey: 'AglJz516NojRJzPY_TwJ0CoEg5CwyjsFo9pedQ1zw68'
})

const PhotoComp = ({ photo }) => {
  const { user, urls } = photo
  return (
    <>
      <img className="img" src={urls.regular} alt="img" />
      <a className="credit" target="_blank" rel="noreferrer" href={`https://unsplash.com/@${user.username}`}>
        {user.name}
      </a>
    </>
  )
}

const Photos = () => {
  const [data, setPhotosResponse] = useState(null)

  useEffect(() => {
    api.search
      .getPhotos({ query: 'cake', orientation: 'landscape' })
      .then((result) => {
        setPhotosResponse(result)
      })
      .catch(() => {
        setPhotosResponse(null)
      })
    setPhotosResponse(null)
  }, [])

  if (data === null) {
    return <div>Loading...</div>
  }
  if (data.errors) {
    return (
      <div>
        <div>{data.errors[0]}</div>
        <div>PS: Make sure to set your access token!</div>
      </div>
    )
  }
  return (
    <PhotosStyled>
      <ul className="columnUl">
        {data.response.results.map((photo) => (
          <li key={photo.id} className="li">
            <PhotoComp photo={photo} />
          </li>
        ))}
      </ul>
    </PhotosStyled>
  )
}

export default Photos
