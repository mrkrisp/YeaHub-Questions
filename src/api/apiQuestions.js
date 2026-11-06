import axios from 'axios'

const BASE_URL = import.meta.env.VITE_BASE_URL

export async function getQuestions({
  page = 1,
  limit = 10,
  title = null,
  skills = null,
  specializationId = null,
  rate = null,
  complexity = null,
}) {
  try {
    const res = await axios.get(`${BASE_URL}questions/public-questions`, {
      params: {
        page,
        limit,
        title: title ? title : null,
        skills: skills ? skills : null,
        complexity: complexity ? complexity : null,
        rate: rate ? rate : null,
        specializationId,
        order: 'ASC',
      },
    })

    return res.data
  } catch (err) {
    console.warn(err.message)
  }
}
