"use client";

import React, { useEffect } from 'react';

const ConvertKitForm: React.FC = () => {
    useEffect(() => {
        const formContainer = document.getElementById('convertkit-form');

        // Verifique se o formContainer existe antes de adicionar o script
        if (formContainer) {
            const script = document.createElement('script');
            script.async = true;
            script.src = process.env.NEXT_PUBLIC_CONVERTKIT_SCRIPT_SRC || ''; // Verifica se a variável de ambiente está disponível
            script.setAttribute('data-uid', process.env.NEXT_PUBLIC_CONVERTKIT_DATA_UID || '');

            formContainer.appendChild(script);

            return () => {
                formContainer.removeChild(script); // Verifique novamente antes de remover o script
            };
        }
    }, []);

    return <div id="convertkit-form" style={{ margin: '20px 0' }} />; // O ID 'convertkit-form' precisa existir aqui
};

export default ConvertKitForm;
