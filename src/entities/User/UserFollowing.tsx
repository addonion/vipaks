import { useQuery } from '@tanstack/react-query'

interface User {
  id: number,
  login: string,
  html_url: string,
  avatar_url: string
}

export function UserFollowing() {
  const { isPending, isError, data } = useQuery({ queryKey: ['following'], queryFn: fetchFollowings, staleTime: 1000000 })

  if (isPending) return <div>Загрузка…</div>

  if (isError) return <div>Ошибка загрузки</div>

  return (
    <div className='grid gap-4'>
      {data.map((user:User) => (
        <div key={user.id} className='flex gap-4 items-center'>
          <a href={user.html_url} target='_blank'>
            <img src={user.avatar_url} alt={user.login} className='w-16 rounded-full' width='64' height='64' />
          </a>
          <p>
            <a href={user.html_url} target='_blank'>{user.login}</a>
          </p>
        </div>
      ))}
    </div>
  )
}

const fetchFollowings = async () => {
  const response = await fetch('https://api.github.com/users/addonion/following')
    if (!response.ok) {
      throw new Error('Ошибка загрузки API с Github')
    }

    return response.json()
}