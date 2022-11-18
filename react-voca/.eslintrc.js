module.exports = {
    env: {
        browser: true,
        jest: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
        'prettier',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'no-console': 'off',
        'no-alert': 'off',
        'no-restricted-globals': 'off',
    },
    parser: '@typescript-eslint/parser',
    overrides: [
        {
            files: ['*.js', '*.jsx'],
            rules: {
                // '@typescript-eslint/explicit-function-return-type': 'off',
            },
        },
    ],
};
