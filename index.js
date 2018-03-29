module.exports = {
    root: true,
    extends: 'airbnb-base',
    parser: 'babel-eslint',
    env: {
        browser: true,
        es6: true,
        node: false
    },
    plugins: [
        'html'
    ],
    globals: {
        require: true,
        process: true
    },
    rules: {
        indent: [2, 4],
        'arrow-body-style': ['error', 'always'],
        'no-useless-escape': [0],
        'no-param-reassign': ["error", { "props": false }],
        'func-names': ["error", "as-needed"],
        'global-require': [0],
        'import/no-dynamic-require': [0],
        'no-new': [0],
        'prefer-rest-params': [0],
        'no-restricted-syntax': [0],
        'linebreak-style': [0],  // 无视linix和windows下的空格方式(/r/n和/n无视)
        'no-plusplus': ["error", { "allowForLoopAfterthoughts": true }], // 只允许for循环最后一个参数使用++
        "import/prefer-default-export": 0,  // 不检测默认的export default
    }
}

