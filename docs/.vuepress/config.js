module.exports = {
    title: 'Consultant Tech Writer  Toolkit',
    description: 'Tools and templates for freelance and consultant tech writers',
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guides', link: '/guides/' },
        { text: 'Resources', link: '/resources/' },
        { text: 'About', link: '/about/' }
      ],
      sidebar: [
        {
            title: 'Guides',
            children: [
                '/guides/',
                '/guides/core-values',
                '/guides/business-identity',
                '/guides/business-plan',
                '/guides/project-planning',
                '/guides/cost-estimate',
                '/guides/one-page-contract',                
                '/guides/workflow',
                '/guides/get-paid'
            ]
        },
        {
            title: 'Resources',
            children: [
                '/resources/',
                '/resources/tools',
                '/resources/find-work',
                '/resources/tax-links'

            ]
        }
    ]
    }
    
  }