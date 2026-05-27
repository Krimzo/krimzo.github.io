import type {
  AnalyticsConfig,
  CommentConfig,
  GithubConfig,
  Link,
  PhotosConfig,
  PostConfig,
  ProjectConfig,
  Site,
  SkillsShowcaseConfig,
  SocialLink,
  TagsConfig,
} from '~/types'

//--- Readme Page Config ---
export const SITE: Site = {
  title: 'Krimzo',
  description: 'Personal website.',
  website: 'https://krimzo.github.io/',
  lang: 'en',
  base: '/',
  author: 'Krimzo',
  ogImage: '/og-image.webp',
  transition: false,
  themeAnimation: true,
}

export const HEADER_LINKS: Link[] = [
  {
    name: 'Posts',
    url: '/posts',
  },
  {
    name: 'Projects',
    url: '/projects',
  },
  {
    name: 'Screenshots',
    url: '/photos',
  },
]

export const FOOTER_LINKS: Link[] = [
  {
    name: 'Readme',
    url: '/',
  },
  {
    name: 'Posts',
    url: '/posts',
  },
  {
    name: 'Projects',
    url: '/projects',
  },
  {
    name: 'Tags',
    url: '/tags',
  },
  {
    name: 'Screenshots',
    url: '/photos',
  },
]

// get icon https://icon-sets.iconify.design/
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'github',
    url: 'https://github.com/Krimzo',
    icon: 'icon-[ri--github-fill]',
    count: 20,
  }
]

/**
 * SkillsShowcase 配置接口 / SkillsShowcase configuration type
 * @property {boolean} SKILLS_ENABLED  - 是否启用SkillsShowcase功能 / Whether to enable SkillsShowcase features
 * @property {Object} SKILLS_DATA - 技能展示数据 / Skills showcase data
 * @property {string} SKILLS_DATA.direction - 技能展示方向 / Skills showcase direction
 * @property {Object} SKILLS_DATA.skills - 技能展示数据 / Skills showcase data
 * @property {string} SKILLS_DATA.skills.icon - 技能图标 / Skills icon
 * @property {string} SKILLS_DATA.skills.name - 技能名称 / Skills name
 * get icon https://icon-sets.iconify.design/
 */
export const SKILLSSHOWCASE_CONFIG: SkillsShowcaseConfig = {
  SKILLS_ENABLED: true,
  SKILLS_DATA: [
    {
      direction: 'left',
      skills: [
        {
          name: 'Git',
          icon: 'https://skillicons.dev/icons?i=git',
        },
        {
          name: 'CMake',
          icon: 'https://skillicons.dev/icons?i=cmake',
        },
        {
          name: 'C',
          icon: 'https://skillicons.dev/icons?i=c',
        },
        {
          name: 'C++',
          icon: 'https://skillicons.dev/icons?i=cpp',
        },
        {
          name: '3D Graphics',
          icon: 'https://skillicons.dev/icons?i=laravel',
        },
        {
          name: 'C#',
          icon: 'https://skillicons.dev/icons?i=cs',
        },
        {
          name: 'Java',
          icon: 'https://skillicons.dev/icons?i=java',
        },
        {
          name: 'Kotlin',
          icon: 'https://skillicons.dev/icons?i=kotlin',
        },
        {
          name: 'Swift',
          icon: 'https://skillicons.dev/icons?i=swift',
        },
      ],
    },
    {
      direction: 'right',
      skills: [
        {
          name: 'HTML',
          icon: 'https://skillicons.dev/icons?i=html',
        },
        {
          name: 'CSS',
          icon: 'https://skillicons.dev/icons?i=css',
        },
        {
          name: 'JavaScript',
          icon: 'https://skillicons.dev/icons?i=js',
        },
        {
          name: 'PHP',
          icon: 'https://skillicons.dev/icons?i=php',
        },
        {
          name: 'React',
          icon: 'https://skillicons.dev/icons?i=react',
        },
        {
          name: 'Angular',
          icon: 'https://skillicons.dev/icons?i=angular',
        },
      ],
    },
    {
      direction: 'left',
      skills: [
        {
          name: 'GitHub',
          icon: 'https://skillicons.dev/icons?i=github',
        },
        {
          name: 'Visual Studio Code',
          icon: 'https://skillicons.dev/icons?i=vscode',
        },
        {
          name: 'Visual Studio',
          icon: 'https://skillicons.dev/icons?i=visualstudio',
        },
        {
          name: 'Arduino',
          icon: 'https://skillicons.dev/icons?i=arduino',
        },
        {
          name: 'Android Studio',
          icon: 'https://skillicons.dev/icons?i=androidstudio',
        },
        {
          name: 'Blender',
          icon: 'https://skillicons.dev/icons?i=blender',
        },
        {
          name: 'Unity',
          icon: 'https://skillicons.dev/icons?i=unity',
        },
        {
          name: 'Unreal Engine',
          icon: 'https://skillicons.dev/icons?i=unreal',
        },
      ],
    },
  ],
}

/**
 * GitHub配置 / GitHub configuration
 *
 * @property {boolean} ENABLED - 是否启用GitHub功能 / Whether to enable GitHub features
 * @property {string} GITHUB_USERNAME - GITHUB用户名 / GitHub username
 * @property {boolean} TOOLTIP_ENABLED - 是否开启Tooltip功能 / Whether to enable Github Tooltip features
 */

export const GITHUB_CONFIG: GithubConfig = {
  ENABLED: true,
  GITHUB_USERNAME: 'Krimzo',
  TOOLTIP_ENABLED: true,
}

//--- Posts Page Config ---
export const POSTS_CONFIG: PostConfig = {
  title: 'Posts',
  description: 'Posts by Krimzo',
  introduce: 'Stuff I post from time to time.',
  author: 'Krimzo',
  homePageConfig: {
    size: 2,
    type: 'compact',
  },
  postPageConfig: {
    size: 10,
    type: 'image',
    coverLayout: 'right',
  },
  tagsPageConfig: {
    size: 10,
    type: 'time-line',
  },
  ogImageUseCover: false,
  postType: 'metaOnly',
  imageDarkenInDark: true,
  readMoreText: 'Read more',
  prevPageText: 'Previous',
  nextPageText: 'Next',
  tocText: 'On this page',
  backToPostsText: 'Back to Posts',
  nextPostText: 'Next Post',
  prevPostText: 'Previous Post',
  recommendText: 'REC',
  wordCountView: true,
}

export const COMMENT_CONFIG: CommentConfig = {
  enabled: true,
  system: 'gitalk',
  gitalk: {
    clientID: import.meta.env.PUBLIC_GITHUB_CLIENT_ID,
    clientSecret: import.meta.env.PUBLIC_GITHUB_CLIENT_SECRET,
    repo: 'gitalk-comment',
    owner: 'Krimzo',
    admin: ['Krimzo'],
    language: 'en-US',
    perPage: 5,
    pagerDirection: 'last',
    createIssueManually: false,
    distractionFreeMode: false,
    enableHotKey: true,
  },
}

export const TAGS_CONFIG: TagsConfig = {
  title: 'Tags',
  description: 'All tags of Posts',
  introduce: 'All the tags for posts are here, you can click to filter them.',
}

export const PROJECTS_CONFIG: ProjectConfig = {
  title: 'Projects',
  description: 'Some of my projects.',
  introduce: 'Some of my projects.',
}

export const PHOTOS_CONFIG: PhotosConfig = {
  title: 'Screenshots',
  description: 'Screenshots of my projects.',
  introduce: 'Screenshots of my projects.',
}

export const ANALYTICS_CONFIG: AnalyticsConfig = {
  vercount: {
    enabled: true,
  },
  umami: {
    enabled: false,
    websiteId: '',
    serverUrl: '',
  },
}
