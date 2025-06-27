import axios from 'axios'

export async function getArticles() {
  const res = await axios.get('http://localhost:1337/api/YOUR_COLLECTION_NAME')
  return res.data
}