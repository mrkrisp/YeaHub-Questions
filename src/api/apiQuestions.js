import axios from 'axios'

const BASE_URL = import.meta.env.VITE_BASE_URL

export async function getQuestions({ page = 1, limit = 10, skills = null }) {
  try {
    const res = await axios.get(`${BASE_URL}questions/public-questions`, {
      params: {
        skills: skills ? skills : null,
        page,
        limit,
        order: 'ASC',
      },
    })

    return res.data
  } catch (err) {
    console.warn(err.message)
  }
}
