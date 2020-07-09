import Axios, { AxiosInstance } from 'axios';

export const getUrl = (endpoint: string, ...extraParams: string[]): string => {
    const extra = !!extraParams.length ? extraParams.join('&') : '';
    return extra ? `${ endpoint }?${ extra }` : `${ endpoint }`;
}

export const client: AxiosInstance = Axios.create({
    baseURL: 'https://rocky-beyond-14914.herokuapp.com',
    timeout: 10000
});

