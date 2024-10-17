"use client";

import React, { useEffect } from 'react';

const ConvertKitForm: React.FC = () => {
    useEffect(() => {
        const formContainer = document.getElementById('convertkit-form');

        if (formContainer) {
            const script = document.createElement('script');
            script.async = true;
            script.src = process.env.NEXT_PUBLIC_CONVERTKIT_SCRIPT_SRC || '';
            script.setAttribute('data-uid', process.env.NEXT_PUBLIC_CONVERTKIT_DATA_UID || '');

            formContainer.appendChild(script);

            // Cleanup function
            return () => {
                if (formContainer.contains(script)) {
                    formContainer.removeChild(script);
                }
            };
        }
    }, []);

    return <div id="convertkit-form" style={{ margin: '20px 0' }} />;
};

export default ConvertKitForm;
