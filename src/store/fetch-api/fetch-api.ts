export const apiEndpoint = 'http://localhost:4000/api/';
export enum HttpMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

export interface RestaurantFetched {
    Id: number;
    Name: string;
}

export const fetchApi = async (path: string, method: HttpMethod, body?: any) => {
    console.log('path = ', path);
    console.log('body = ', JSON.stringify(body));
    try {
        const response = await fetch(apiEndpoint + path, {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
            credentials: 'same-origin',
        });
        console.log('response = ', response);
        return await response.json();
    } catch (e) {
        console.log('error fetch api ', e);
        return e;
    }
};
