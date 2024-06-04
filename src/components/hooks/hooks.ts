import { useState, useEffect } from 'react';
import { Requests } from '../../types';

export const useFetch = (url: string | null) => {
    const [data, setData] = useState<Requests | null>(null);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

        if (url === null) {
            return
        }

        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(response.statusText)
                };

                const json = await response.json();

                setLoading(false);
                setData(json);
                setError(null);
            } catch (error) {
                setError(`${error} Не удалось получить данные `);
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);
    return { data, isLoading, error };
};
