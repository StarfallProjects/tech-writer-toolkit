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
                '/guides/cost-estimate',
                '/guides/one-page-contract',
                '/guides/new-client-onboarding',
                '/guides/workflow',
                '/guides/project-management',
                '/guides/invoice'
            ]
        },
        {
            title: 'Resources',
            children: [
                '/resources/',
                '/resources/tax-links',
                '/resources/business-identity',
                '/resources/business-plans',
                '/resources/cost-estimates',
                '/resources/contracts',                
                '/resources/new-client-onboarding',
                '/resources/project-management',
                '/resources/workflows',

            ]
        }
    ]
    }
    
  }