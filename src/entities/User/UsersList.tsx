import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchUsers } from './api'
import { Card } from '@shared'

interface User {
  id: number,
  login: string,
  html_url: string,
  avatar_url: string
}

export function UsersList() {
  const { isPending, isError, data } = useQuery({ queryKey: ['allusers'], queryFn: fetchUsers})
  const input = useRef<HTMLInputElement>(null)
  const [filtered, setFiltered] = useState<User[]>([])

  const queryClient = useQueryClient();
  const addUser = (login:string) => {
    const currentTeam = JSON.parse(localStorage.getItem('team')!);
    localStorage.setItem('team', JSON.stringify([...currentTeam, login]));
    queryClient.invalidateQueries({ queryKey: ['team'] })
  }

  useEffect(() => {
    setFiltered(data)
  }, [data]);

  if (isPending) return <div>Загрузка…</div>
  if (isError) return <div>Ошибка загрузки</div>

  const filerData = (e:ChangeEvent<HTMLInputElement>) => {
    const lowercasedFilter = e.target.value.toLowerCase();
    setFiltered(data.filter((user:User) => {
      return (
        user.login.toLowerCase().includes(lowercasedFilter) ||
        user.html_url.toLowerCase().includes(lowercasedFilter)
      );
    }))
  }

  return (
    <div className='flex flex-col gap-4'>
      <input type='text' ref={input} className='border rounded mt-1 px-3 py-2' onChange={filerData} placeholder='Найти по нику или url' />

      {filtered?.length && filtered.map((user: User) => (
        <div key={user.id}>
          <Card pic={user.avatar_url} url={user.html_url} title={user.login}>
            <a onClick={() => addUser(user.login)} className='absolute top-6 right-0 cursor-pointer'>Добавить</a>
          </Card>
        </div>
      )) || <div>Таких не найдено</div>}
    </div>
  )
}