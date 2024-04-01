import { useQuery } from '@tanstack/react-query'

export default function UserRepositoryLangs ({ url }: { url: string })  {
  const { isPending, isError, data } = useQuery({
    queryKey: [url],
    queryFn: () => fetchProfileReposLang(url),
    staleTime: 1000000,
    enabled: !!url,
  })

  if (isPending) return <div>Загрузка</div>
  if (isError) return <div>Ошибка загрузки</div>

  return (
    <>
      <br />
      Языки:
      {Object.keys(data).map(lang => <span key={lang}> {lang}</span>)}
    </>
  )

}

const fetchProfileReposLang = async (url:string) => {
  const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Ошибка загрузки API с Github')
    }

    return response.json()
}