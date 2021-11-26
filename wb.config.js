module.exports = {
    // TIP: 从这个选项决定我们要加载哪些插件
    wbPlugins: ['wb-plugin-multi-page'], // 必须写

    // sentry
    dsn: 'https://ce28d5b7863d4983b9e5367426d241ff@sentry.wodidashi.com/6', // 必填

    cdn: [], // 选填

    useBabelModules: [], // 选填

    css: { // 选填
        extract: true
    },

    chainWebpack: () => { },

    configureWebpack: {} // 选填
};
