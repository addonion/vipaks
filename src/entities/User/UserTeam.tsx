import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchTeam, fetchUsers } from "./api";
import { Card } from "@shared";
import { useEffect, useState } from "react";

interface User {
  id: number;
  login: string;
  html_url: string;
  avatar_url: string;
}

export function UserTeam() {
  const { isPending, isError, data } = useQuery({
    queryKey: ["team"],
    queryFn: fetchTeam,
  });
  const allusers = useQuery({ queryKey: ["allusers"], queryFn: fetchUsers });

  const queryClient = useQueryClient();
  const removeUser = (login: string) => {
    const newTeam = data.filter((item: string) => item !== login);
    localStorage.setItem("team", JSON.stringify(newTeam));
    queryClient.invalidateQueries({ queryKey: ["team"] });
  };

  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  useEffect(() => {
    if (allusers.data && data) {
      const newFilteredUsers = allusers.data.filter((user: User) =>
        data.includes(user.login),
      );
      setFilteredUsers(newFilteredUsers);
    }
  }, [allusers.data, data]);

  if (isPending && allusers.isPending) return <div>Загрузка…</div>;
  if (isError) return <div>Ошибка загрузки</div>;

  return (
    <div className="flex flex-col gap-4">
      {filteredUsers.length > 1 && <Sort filteredUsers={filteredUsers} setFilteredUsers={setFilteredUsers} />}

      {(filteredUsers.length &&
        filteredUsers.map((user: User) => (
          <div key={user.login}>
            <Card pic={user.avatar_url} url={user.html_url} title={user.login}>
              <a
                onClick={() => removeUser(user.login)}
                className="absolute right-0 top-6 cursor-pointer"
              >
                Удалить
              </a>
            </Card>
          </div>
        ))) || <>Пока пусто</>}
    </div>
  );
}

const Sort = ({filteredUsers, setFilteredUsers}:{ filteredUsers: User[], setFilteredUsers: React.Dispatch<React.SetStateAction<User[]>>}) => {
  const [isAscending, setIsAscending] = useState(true);

  const sort = () => {
    const sortedTeam = [...filteredUsers].sort((a, b) => {
      return isAscending
        ? a.login.localeCompare(b.login)
        : b.login.localeCompare(a.login);
    });
    setFilteredUsers(sortedTeam)
    setIsAscending(!isAscending);
  }

  return (
    <a onClick={sort} className="cursor-pointer">
      Сортировать по нику
    </a>
  )
}