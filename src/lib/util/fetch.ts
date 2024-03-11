export const getRequest = async <T>(endpoint: string) => {
    const response = await fetch(endpoint);
    const parsedResponse = await response.json();
    return parsedResponse as T;
};
