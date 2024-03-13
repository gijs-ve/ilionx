export const getRequest = async <T>(endpoint: string) => {
    const response = await fetch(endpoint);
    const parsedResponse = await response.json();
    return parsedResponse as T;
};

export const getRequests = async <T>({
    count,
    endpoint,
}: {
    count: number;
    endpoint: string;
}) => {
    const response = await Promise.all(
        Array.from(Array(Math.ceil(count)), (_, i) =>
            getRequest<T>(`${endpoint}${i + 1}`),
        ),
    );
    return response;
};
