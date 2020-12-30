export default {
  widgets: [
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
                  buildHookId: '5fecccdd5c6f0e00a28361f6',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ovkdkkjd',
                  apiId: '928612f1-f118-4bad-807a-b56d152b9a65'
                },
                {
                  buildHookId: '5fecccdd5feaf20f3384e3be',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-pikfpsmp',
                  apiId: 'b3765584-4d4b-4008-bf4e-84a73a10681d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ERaith/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-pikfpsmp.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
