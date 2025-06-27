import { getArticles } from '../../lib/strapiApi'

export default async function ArticlesPage() {
  const data = await getArticles()
  const articles = data.data // Strapi v4 returns { data: [...] }

  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles.map((article: any) => (
          <li key={article.id}>{article.attributes.title}</li>
        ))}
      </ul>
    </div>
  )
}