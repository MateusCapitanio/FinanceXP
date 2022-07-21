import { useEffect, useState } from "react";

function Transfer() {
  const [user, setUser]: [user: string, setUser: any] = useState("");

  useEffect(() => {
    const valueReturn: string | null = localStorage.getItem("user");
    setUser(valueReturn);
  }, []);

  return (
    <main>
      <div className="divUser">
        <span className="user">{`Usuário: ${user}`}</span>
      </div>
    </main>
  );
}

export default Transfer;
