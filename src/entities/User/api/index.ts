export const fetchUserInfo = async () => {
  const response = await fetch('https://api.github.com/users/addonion')
    if (!response.ok) {
      throw new Error('Ошибка загрузки API с Github')
    }

    return response.json()
}

export const fetchUserRepositories = async () => {
  const response = await fetch('https://api.github.com/users/addonion/repos')
    if (!response.ok) {
      throw new Error('Ошибка загрузки API с Github')
    }

    return response.json()
}

export const fetchUserFollowings = async () => {
  const response = await fetch('https://api.github.com/users/addonion/following')
    if (!response.ok) {
      throw new Error('Ошибка загрузки API с Github')
    }

    return response.json()
}

export const fetchUsers = async () => {
  const response = await fetch('https://api.github.com/users?since=50000000')
    if (!response.ok) {
      throw new Error('Ошибка загрузки API с Github')
    }

    return response.json()
}

export const fetchTeam = async () => {
  if (!localStorage.getItem('team')) {
    localStorage.setItem('team', JSON.stringify([]));
  }

  return JSON.parse(localStorage.getItem('team')!)
}