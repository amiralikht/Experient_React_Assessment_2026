import { useState } from "react";
import UserAutoComplete from "./components/UserAutoComplete"
import useUsers from "./hooks/useUsers";
import type { ApiUser } from "./types";
import UserDetails from "./components/UserDetails";


function App() {
  const { users, error } = useUsers();
  const [selected, setSelected] = useState<ApiUser | null>(null);

  return (
    <>
      <section className='center'>
        <UserAutoComplete users={users}
          error={error}
          onSelect={setSelected}/>
        <UserDetails user={selected}/>
      </section>
    </>
  )
}

export default App
