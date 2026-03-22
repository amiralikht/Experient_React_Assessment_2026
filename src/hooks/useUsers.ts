import { useEffect, useState } from "react";
import type { ApiUser } from "../types";
import { FetchUsers } from "../utils/FetchUsers";


const DEFAULT_API = "https://jsonplaceholder.typicode.com/users";

export function useUsers(apiUrl: string = DEFAULT_API) {
    const [users, setUsers] = useState<ApiUser[]>([]);
    const [error, setError] = useState<string | null>(null);
    useEffect(()=>{
        let isMounted = true;
        FetchUsers(apiUrl)
        .then((data)=>{
            if(!isMounted) return;
            setUsers(Array.isArray(data)? data : []);
            setError(null);
        })
        .catch((error: unknown)=>{
            if(!isMounted) return;
            setError(error instanceof Error ? error.message : String(error));
            setUsers([]);
        })
        .finally(()=>{
            if(!isMounted) return;
        })
        return ()=>{
            isMounted= false;
        }
    },[apiUrl]);

    return {users, error}
}

export default useUsers