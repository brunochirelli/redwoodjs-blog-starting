import { Link, routes } from '@redwoodjs/router'
import { Post } from 'types/graphql'

interface Props {
  article: Post
}

const Article = ({ article }: Props) => {
  return (
    <article key={article.id}>
      <header>
        <Link to={routes.article({ id: article.id })}>
          <h2>{article.title}</h2>
        </Link>
      </header>
      <p>{article.body}</p>
      <div>Posted at: {article.createdAt}</div>
    </article>
  )
}

export default Article
