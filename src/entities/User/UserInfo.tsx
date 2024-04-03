import { useQuery } from '@tanstack/react-query'
import { Card, dateFormater } from '@shared'
import { fetchUserInfo } from './api'

export function UserInfo() {
  const { isPending, isError, data } = useQuery({ queryKey: ['profile'], queryFn: fetchUserInfo })

  if (isPending) return <div>Загрузка…</div>

  if (isError) return <div>Ошибка загрузки</div>

  return (
    <Card url={data.html_url} pic={data.avatar_url} title={data.login}>
      Дата создания: {dateFormater(data.created_at)}
    </Card>
  )
}