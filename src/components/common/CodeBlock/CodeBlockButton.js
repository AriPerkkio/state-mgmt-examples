import React, { useContext, useState, useEffect } from 'react';

import { CodeBlockContext } from './CodeBlockProvider';
import Button from 'components/common/Button';

// Fetch source codes from local environment or repo - production build should never use local environment
const USE_LOCAL_SOURCE_CODES = true && process.env.NODE_ENV === 'development';
const URL = USE_LOCAL_SOURCE_CODES
    ? '/source-code'
    : 'https://raw.githubusercontent.com/AriPerkkio/suspense-examples/master/src';

const CodeBlockButton = ({ fileName, text, className }) => {
    const [code, setCode] = useState();
    const { toggleCodes, resetCodes } = useContext(CodeBlockContext);

    const onClick = () => {
        if (code) {
            toggleCodes(code);
        } else {
            fetch(`${URL}/${fileName}`)
                .then(response => response.text())
                .then(resp => {
                    setCode(resp);
                    toggleCodes(resp);
                });
        }
    };

    // On unmount reset all selections in context
    useEffect(() => resetCodes, [resetCodes]);

    return (
        <Button className={className} onClick={onClick}>
            {text || 'Code'}
        </Button>
    );
};

export default CodeBlockButton;
