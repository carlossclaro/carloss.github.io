// gitprofile.config.js

const config = {
  github: {
    username: 'carlossclaro', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 6, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'carlossclaro',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: 'arifszn',
    dev: 'arifszn',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://blumotech.com',
    phone: '',
    email: 'clarocarlos70@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'C++',
    'C#',
    'Python',
    'Android',
  ],
  experiences: [
    {
      company: 'RX Music',
      position: 'Support Technician',
      from: 'October 2022',
      to: 'Present',
      companyLink: 'https://rxmusic.com',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Centennial College',
      degree: 'Software Engineering',
      from: '2019',
      to: '2022',
    },
  
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'HoldMyReceipts',
      description:
        'Organize your receipts and expenses effortlessly.',
      imageUrl: 'https://play-lh.googleusercontent.com/cTjt_yxnB7T044AgfLt-GfeSZkSSoj20ECnc2-wDWlq60pYQBNVrNFsZWrQ5iwze7w=w480-h960-rw',
      link: 'https://play.google.com/store/apps/details?id=com.blumotech.hmr&hl=en_US&gl=US',
    },
    {
      title: 'WeSplit',
      description:
        'WeSplit splits the bill fast, calculates tip, great for dining and drinks with friends! Save the hassle of guessing how much to tip.',
      imageUrl: 'https://play-lh.googleusercontent.com/QpQpALsCly18QgelwbYruWqG1pIs0ZvcC8WzsR5u9NoGMVZ_BmS-B5f6mf_aS5MxG44=w480-h960-rw',
      link: 'https://play.google.com/store/apps/details?id=com.blumotech.wesplit&hl=en_US&gl=US',
    },
    {
      title: 'MyMedicalCard',
      description:
        'Seamlessly create and manage comprehensive medical profiles, ensuring crucial information is instantly accessible even from your lock screen.',
      imageUrl: 'https://play-lh.googleusercontent.com/OR-8B8-vTrDzIf3h7ren_WnfBx1phDoPG9O0lcA7mr7f6sHOILxATiHpKaLfif67Ro4=w480-h960-rw',
      link: 'https://play.google.com/store/apps/details?id=com.blumotech.mymedicalcard&hl=en_US&gl=US',
    },
    {
      title: 'TimeToCelebrate [In Beta]',
      description:
        'Track your events by creating a custom countdown.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'blumotech.com',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 0, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with ❤️`,
};

export default config;
