const versioning = require('./lib/versioning.js')

module.exports = {
    title: 'Application Name',
    description: 'Application description',
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.ico'
        }],
        ['link', {
            rel: 'stylesheet',
            type: 'text/css',
            href: 'https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,800,800i,900,900i'
        },],
        ['link', {
            rel: 'stylesheet',
            type: 'text/css',
            href: 'https://fonts.googleapis.com/css?family=Miriam+Libre:400,700'
        },],
    ],
    theme: 'default-prefers-color-scheme',
    themeConfig: {
        defaultTheme: 'light',
        logo: '/logo.svg',
        editLinks: true, //  "Edit this page" at the bottom of each page
        docsDir: 'docs/', //  Github repo docs folder
        versions: {
            latest: versioning.versions.latest,
            selected: versioning.versions.latest,
            all: versioning.versions.all
        },
        nav: [
            {
                text: 'Docs',
                items: versioning.linksFor('testing-tab-one/installation.md') // TODO create custom component
            },
            {
                text: 'Tutorial',
                link: '/tutorial/'
            },
            {
                text: 'Changelog',
                link: 'https://github.com/nuwave/lighthouse/blob/master/CHANGELOG.md'
            },
        ],
        sidebar: versioning.sidebars
    },
    plugins: [
        ['@vuepress/back-to-top', true],
        ['@vuepress/medium-zoom', true],
        ['@vuepress/search', {
            searchMaxSuggestions: 10,
            // Only search the latest version, e.g. 4.3, otherwise many duplicates will show up
            test: `/${versioning.versions.latest.replace('.', '\\.')}/`
        }]
    ]
}
