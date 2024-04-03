export const fetchRepositoryLangs = async (url:string) => {
  const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Ошибка загрузки API с Github')
    }

    return response.json()
}