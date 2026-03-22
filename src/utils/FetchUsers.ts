export async function FetchUsers(url:string) {
    const response = await fetch(url);
    if(!response.ok){
        throw new Error(`Request failed ${response.status} ${response.statusText}`);
    }
    const data = (await response.json());
    return data;
}