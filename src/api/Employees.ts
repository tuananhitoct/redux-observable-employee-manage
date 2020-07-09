import { client, getUrl } from './Axios';

export const getEmployees = async () => {
    const url = getUrl(`/users`);
    const response = await client.get<any>(url, { headers: { "Access-Control-Allow-Origin": "*", } });
    console.log(response);
    return response;
}

export const addNewEmployee = async (data: any) => {
    const url = getUrl(`/users`);
    const response = await client.post<any>(url, data, { headers: { "Access-Control-Allow-Origin": "*", } });

    return response;
}