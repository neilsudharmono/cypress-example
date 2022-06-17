export const getTestSelector = (testroots, testid = '') => {
    const rootSelector = testroots.reduce((selectorString, rootVal) => {
        return selectorString += ` [data-testroot="${rootVal}"]`;
    }, '');
    if (testid) {
        return `${rootSelector} *:not([data-testroot]) [data-testid="${testid}"], ${rootSelector} > [data-testid="${testid}"]`;
    }
    return `${rootSelector}`;
};