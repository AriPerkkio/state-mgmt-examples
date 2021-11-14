module.exports = function(content) {
    const callback = this.async();

    import('@lucy/liblucy')
        .then(({ ready, compileXstate }) => {
            ready
                .then(() => {
                    const { js } = compileXstate(content, this.resourcePath);

                    callback(undefined, applyFixes(js));
                })
                .catch(e => {
                    callback(
                        `Lucy loader failed to compileXstate: ${e.message}`
                    );
                });
        })
        .catch(callback);
};

function applyFixes(input) {
    // lucydsl/liblucy#71
    const output = input.replace(/services\./gi, '');

    return output;
}
