import React, { useContext, useReducer } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import classNames from 'classnames';

import { CodeBlockContext } from './CodeBlockProvider';
import { formatCodes } from './utils';
import CodeBlockOptions, { initialOptions } from './CodeBlockOptions';
import { useWindowResize } from 'hooks';

const BASE_CLASS = 'code-block';
const mergeReducer = (state, next) => ({ ...state, ...next });
const resolveFontSize = windowWidth => ({
    fontSize: windowWidth < 700 ? 12 : windowWidth < 1000 ? 14 : 16,
});

const CodeBlock = () => {
    const { codes, toggleCodes, resetCodes } = useContext(CodeBlockContext);
    const [options, setOptions] = useReducer(mergeReducer, initialOptions);

    const onReset = () => {
        const { fontSize, ...keepFontSize } = initialOptions;
        resetCodes();
        setOptions(keepFontSize);
    };

    useWindowResize(width => {
        setOptions(resolveFontSize(width));

        // Reset full screen when screen below 1200
        if (options.fullScreen && width < 1200) {
            setOptions({ fullScreen: false });
        }
    });

    if (!codes.length) {
        return null;
    }

    const formattedCodes = formatCodes(codes, options);

    const wrapperClassNames = classNames(
        `${BASE_CLASS}-wrapper`,
        options.fullScreen && `${BASE_CLASS}-wrapper-full-screen`
    );

    const containerClassNames = classNames(
        `${BASE_CLASS}-container`,
        options.fullScreen && `${BASE_CLASS}-container-full-screen`
    );

    const contentClassNames = classNames(
        `${BASE_CLASS}-content`,
        options.fullScreen && `${BASE_CLASS}-content-full-screen`
    );

    return (
        <section className={wrapperClassNames}>
            <CodeBlockOptions
                values={options}
                onChange={setOptions}
                onReset={onReset}
            />

            <div className={containerClassNames}>
                {formattedCodes.map((formattedCode, key) => (
                    <div key={key} className={contentClassNames}>
                        <SyntaxHighlighter
                            showLineNumbers
                            key={key}
                            language='jsx'
                            style={okaidia}
                            className={BASE_CLASS}
                            customStyle={{
                                fontSize: parseInt(options.fontSize),
                            }}>
                            {formattedCode}
                        </SyntaxHighlighter>

                        <button
                            className={`${BASE_CLASS}-close`}
                            onClick={() => toggleCodes(codes[key])}>
                            X
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CodeBlock;
