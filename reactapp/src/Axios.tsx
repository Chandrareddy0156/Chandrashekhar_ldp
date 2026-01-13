import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
};

function Datafile() {
  const [names, setNames] = useState<User[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data: User[]) => setNames(data));
  }, []);

  return (
    <div>
      <h2>User Names</h2>
      {names.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default Datafile;
