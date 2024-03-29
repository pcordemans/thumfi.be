module.exports = {
    title: 'Training the Human Firewall',
    description: '',
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Try THUMFI', link:'https://public.thumfi.be'},
          { text: 'Onderzoek', link:'/onderzoek.md'},
          { text: 'Blog', link: '/blog.md' },
        { text: 'VIVES', link: 'https://www.vives.be/nl/onderzoek/business-management-smart-technologies/human-firewall-cybersecurity-thumfi' },
        ],
        sidebarDepth: 2,
        
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: false,
        editLinkText: 'Edit this page!',
               
        
    },
    markdown: {
        lineNumbers: true,
    },
    serviceWorker: true,
    plugins: [
      ['vuepress-plugin-zooming', {
        // selector for images that you want to be zoomable
        // default: '.content img'
        selector: 'img',
  
        // make images zoomable with delay after entering a page
        // default: 500
        // delay: 1000,
  
        // options of zooming
        // default: {}
        options: {
          bgColor: 'black',
          zIndex: 10000,
        },
      }],
      ['container', {
        type: 'output',
        defaultTitle: 'Output',
      }]
    ],
}