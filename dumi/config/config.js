export default {
    chainWebpack(memo) {
        memo.plugins.delete('copy');
    },
    mode: 'site',
    resolve: {
        includes: ['../sources'],
    },
};