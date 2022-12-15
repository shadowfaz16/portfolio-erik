import { Client } from "../typings";

export const fetchClients = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getClients`);

    const data = await res.json()
    const clients: Client[] = data.clients;

    console.log("fetching", clients);
    console.log("check token", process.env.NEXT_PUBLIC_BASE_URL);


    return clients;
}