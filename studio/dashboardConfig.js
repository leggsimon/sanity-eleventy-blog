export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '60ca417fd2ad1e11c979914d',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-7v1zwwvt',
                  apiId: 'c63402a3-bf29-410c-ad10-b3faa4804084'
                },
                {
                  buildHookId: '60ca41810581c617dccf7350',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-4vo5wgef',
                  apiId: '17540e80-a1b5-42c9-8954-8d5a4cb3c0b4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/leggsimon/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-4vo5wgef.netlify.app', category: 'apps'}
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
