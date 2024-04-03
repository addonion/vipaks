import { useQuery } from '@tanstack/react-query'
import { Card } from '@shared'
import { fetchUserFollowings } from './api'

interface User {
  id: number,
  login: string,
  html_url: string,
  avatar_url: string
}

export function UserFollowing() {
  const { isPending, isError, data } = useQuery({ queryKey: ['following'], queryFn: fetchUserFollowings })

  if (isPending) return <div>Загрузка…</div>

  if (isError) return <div>Ошибка загрузки</div>

  return (
    <div className='grid gap-4'>
      {data.map((user:User) => (
        <div key={user.id}>
          <Card pic={user.avatar_url} url={user.html_url} title={user.login}  />
        </div>
      ))}
    </div>
  )
}