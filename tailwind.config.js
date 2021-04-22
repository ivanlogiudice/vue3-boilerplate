module.exports = {
    mode: 'jit',
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: ['./index.html', './src/**/*.{vue,ts}']
    }
}
