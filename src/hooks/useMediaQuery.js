import { useEffect, useState } from 'react';

const useMediaQuery = (query) => {
    const mediaQuery = window.matchMedia(query);

    const [match, setMatch] = useState(!!mediaQuery.matches);

    useEffect(() => {
        const handler = (e) => setMatch(e.matches);

        mediaQuery.addEventListener('change', handler);

        return () => mediaQuery.removeEventListener('change', handler);
    }, [mediaQuery]);

    return match;
};

export default useMediaQuery;