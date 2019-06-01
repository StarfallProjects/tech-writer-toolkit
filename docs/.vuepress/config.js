module.exports = {
    title: 'Tech Writer Consultant Toolkit',
    description: 'Tools and templates for freelance and consultant tech writers',
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Kit', link: '/kit/' },
        { text: 'Resources', link: '/resources/' },
        { text: 'About', link: '/about/' }
      ],
      sidebar: [
        {
            title: 'Toolkit',
            children: [
                '/kit/',
                '/kit/core-values',
                '/kit/business-identity',
                '/kit/business-plan',
                '/kit/cost-estimate',
                '/kit/one-page-contract',
                '/kit/new-client-onboarding',
                '/kit/workflow',
                '/kit/project-management',
                '/kit/invoice'
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