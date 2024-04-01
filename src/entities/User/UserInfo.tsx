import { useQuery } from '@tanstack/react-query'
import { dateFormater } from '../../shared'

export function UserInfo() {
  const { isPending, isError, data } = useQuery({ queryKey: ['profile'], queryFn: fetchProfile, staleTime: 1000000 })

  if (isPending) return (
    <div className='flex gap-4 items-center animate-pulse'>
      <div className="rounded-full bg-slate-200 h-16 w-16" />
      <div className='grid gap-2'>
        <div className='rounded-full bg-slate-200 w-44 h-3' />
        <div className='rounded-full bg-slate-200 w-60 h-2' />
      </div>
    </div>
  )

  if (isError) return <div>Ошибка загрузки</div>

  return (
    <div className='flex gap-4 items-center'>
      <a href={data.html_url} target='_blank'>
        <img src={data.avatar_url} alt={data.login} className='w-16 rounded-full' width='64' height='64' />
      </a>
      <div className='leading-4'>
        <p>
          <a href={data.html_url} target='_blank'>{data.login}</a>
        </p>
        <p className='text-stone-400 text-sm'>
          Дата создания: {dateFormater(data.created_at)}
        </p>
      </div>
    </div>
  )
}

const fetchProfile = async () => {
  const response = await fetch('https://api.github.com/users/addonion')
    if (!response.ok) {
      throw new Error('Ошибка загрузки API с Github')
    }

    return response.json()
}