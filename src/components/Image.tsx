import { useEffect, useState } from 'react'
import Loader from './Loader'

export default function Image({ ...props }) {
  useEffect(() => {
    init()
  }, [])
  const [isLoading, setIsLoading] = useState(true)
  const [message, setMessage] = useState('')

  async function init() {
    try {
      await loadImage()
    } catch (error) {
      if (error instanceof Error) {
        setMessage(error.message)
      }
    } finally {
      setIsLoading(false)
    }
  }

  function loadImage() {
    return new Promise((resolve, reject) => {
      const img = document.createElement('img')
      img.src = props.src
      img.addEventListener('load', () => {
        resolve(img)
      })
      img.addEventListener('error', () => {
        reject(new Error('Failed to load image'))
      })
    })
  }

  return (
    <div
      className="relative bg-gray-200"
      style={{ width: props.width, height: props.height }}>
      <div>
        {isLoading ? (
          <Loader></Loader>
        ) : message ? (
          <p>{message}</p>
        ) : (
          <img {...props} />
        )}
      </div>
    </div>
  )
}
