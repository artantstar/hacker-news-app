import { useParams } from 'react-router-dom'

export function NewsPage() {

  interface newsIdTypes {
    newsId: string
  }
  
  const { newsId } = useParams<newsIdTypes>()

  return (
    <div>
      <h1>news page {newsId}</h1>
    </div>
  )
}
