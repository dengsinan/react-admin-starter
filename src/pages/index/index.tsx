import type { FC } from 'react'
import { useQuery } from '@tanstack/react-query'

export const Index: FC = () => {
  const { data } = useQuery({
    queryKey: ['post', 1],
    queryFn: () => fetch('http://jsonplaceholder.typicode.com/posts/1').then(res => res.json()),
  })

  return (
    <div>
      <h1>Index</h1>
      <p>{data?.body}</p>
    </div>
  )
}
