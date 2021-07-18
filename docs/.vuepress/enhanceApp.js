export default ({
    Vue,
    options,
    router,
    siteData
}) => {

    router.addRoutes([{
            path: '/docs/latest.html',
            redirect: `/${siteData.themeConfig.versions.latest}/testing-tab-one/installation.html`
        },
        {
            path: '/docs/latest/testing-tab-two/schema.html',
            redirect: `/${siteData.themeConfig.versions.latest}/testing-tab-two/schema.html`
        },
        {
            path: '/docs/latest/eloquent/testing-tab-one.html',
            redirect: `/${siteData.themeConfig.versions.latest}/eloquent/testing-tab-one.html`
        },
    ])

    router.afterEach((to, from) => {
        const version = to.path.split('/')[1]

        if (siteData.themeConfig.versions.all.includes(version)) {
            siteData.themeConfig.versions.selected = version
        }
    })
}
