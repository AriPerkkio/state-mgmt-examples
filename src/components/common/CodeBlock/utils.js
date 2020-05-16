const REGEX_COMMON_IMPORT = /\nimport ([\S ])* from 'components\/common\/(\S)*';/g;
const REGEX_CODEBLOCKBUTTON = /\n\s*<CodeBlockButton(\s|\w|[='/.-])*>/g;
const REGEX_FRAGMENT = /(\s*) <>|<\/>/g;
const REGEX_MOUNT_TOGGLE = /(\s*) <MountToggle(\s|\w|[='/.])*>|<\/MountToggle>/g;
const REGEX_EMPTY_DIV = /\n\s*<div>\s*<\/div>/g;
const REGEX_FRAGMENT_CONTENT = /<>(\s|\S)*<\/>/gs;
const REGEX_MOUNT_TOGGLE_CONTENT = /<MountToggle(\s|\w|[='/.])*>(\s|\S)*<\/MountToggle>/gs;
const REGEX_INDENT = /( ){4}/g;
const REGEX_NEWLINE_INDENT = /\n( ){4}/g;
const REGEX_CLOSING_BRACKET = /\);/g;
const REGEX_PRETTIER_IGNORE = /\n\s*\/\/ prettier-ignore/g;
const REGEX_ESLINT_IGNORE = /\n\s*\/\/ eslint-disable-next-line/g;
const REGEX_DOUBLE_NEWLINES = /\n\n\n/g;
const REGEX_POST_NEWLINE = /\n\n\);/g;
const REGEX_HIDE_LINE = /( |\S)*\/\/ hide-line([\S ]*)\n/g;

const removePrettierAndEslintIgnoreComments = code =>
    code.replace(REGEX_PRETTIER_IGNORE, '\n').replace(REGEX_ESLINT_IGNORE, '');

const decreaseIndent = indent => code =>
    code.replace(REGEX_INDENT, ' '.repeat(indent));

const decreaseNewlineIndent = code =>
    code
        .replace(REGEX_NEWLINE_INDENT, '\n')
        .replace(REGEX_CLOSING_BRACKET, '    );');

const removeMountToggle = code =>
    code
        .replace(REGEX_MOUNT_TOGGLE_CONTENT, decreaseNewlineIndent)
        .replace(REGEX_MOUNT_TOGGLE, '\n');

const removeFragment = code =>
    code
        .replace(REGEX_FRAGMENT_CONTENT, decreaseNewlineIndent)
        .replace(REGEX_FRAGMENT, '');

const removeCodeBlockButton = code => code.replace(REGEX_CODEBLOCKBUTTON, '');

const removeCommonImports = code => code.replace(REGEX_COMMON_IMPORT, '');

const removeEmptyDivs = code => code.replace(REGEX_EMPTY_DIV, '');

const removeDoubleNewlines = code =>
    code
        .replace(REGEX_DOUBLE_NEWLINES, '\n\n')
        .replace(REGEX_POST_NEWLINE, '\n);');

const removeHiddenLines = code => code.replace(REGEX_HIDE_LINE, '');

const formatCodes = (codes, options) => {
    const formatters = [
        options.hideFragment && removeFragment,
        removeCodeBlockButton,
        decreaseIndent(options.indent),
        options.hideCommonImports && removeCommonImports,
        removeMountToggle,
        removePrettierAndEslintIgnoreComments,
        removeEmptyDivs,
        removeDoubleNewlines,
        removeHiddenLines,
    ].filter(Boolean);

    const format = code =>
        formatters.reduce((c, formatter) => formatter(c), code);

    return codes.map(format);
};

export { formatCodes };
