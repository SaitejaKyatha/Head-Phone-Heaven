import { useEffect } from 'react';

const useScrollDisable = (isDisabled) => {
    useEffect(() => {
        if (isDisabled) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isDisabled]);
};

export default useScrollDisable;