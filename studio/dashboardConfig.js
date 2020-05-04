export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb07e2b6ef438017af6a7b8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-5tpg2a66',
                  apiId: '84914aa9-fd58-482f-b496-59a83c62e41d'
                },
                {
                  buildHookId: '5eb07e2c1ab417841e950a47',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-12pvpp25',
                  apiId: 'a9f5e60f-68a7-4536-9af9-8a47aa195b72'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/GalPin-Ark/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-12pvpp25.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
