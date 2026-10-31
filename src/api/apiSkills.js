import axios from 'axios'

const BASE_URL = import.meta.env.VITE_BASE_URL

export async function getSkills() {
  try {
    const res = await axios.get(`${BASE_URL}skills`)

    return res.data
  } catch (err) {
    console.log(err.message)
  }
}
