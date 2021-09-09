import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL

export const getImages = async (offset = 0, limit = 25) => {
  const response = await axios.get(
    `${API_URL}/images?offset=${offset * limit}&limit=${limit}`
  )

  return response.data
}

export const getPlants = async () => {
  const response = await axios.get(`${API_URL}/plants`)

  return response.data
}

export const getImagesForPlant = async (plant) => {
  const response = await axios.get(`${API_URL}/plants/${plant.id}/images`)

  return response.data
}

export const updatePlant = async (plant) => {
  const response = await axios.put(`${API_URL}/plants/${plant.id}`, plant)

  return response.data
}

export const deletePlant = async ({ plant }) => {
  if (window.confirm(`Are you sure you want to delete ${plant.id}?`)) {
    const response = await axios.delete(`${API_URL}/plants/${plant.id}`)

    return response.data
  }
}

export const createPlant = async (plant) => {
  const response = await axios.post(`${API_URL}/plants`, plant)

  return response.data
}
