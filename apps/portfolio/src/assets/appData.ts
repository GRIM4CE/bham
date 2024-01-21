export const navigationLinks = [
    {text: "About", href: "#about"},
    {text: "Projects", href: "#projects"},
  ]
  
export const socialLinks = [
    { name: "github",  href: "https://github.com/GRIM4CE" },
    { name: "linkedin", href: "https://www.linkedin.com/in/jon-l-a29b93105" },
    { name: "resume", href: "jon-leibham-resume.pdf" }
  ]

export const about = [
    "After graduating from the American Academy of Art with a Design degree in 2013, I embarked on my design career at Agent Publishing. It was there where I sharpened my visual design skills while experimenting with print design, building email newsletters, and photo retouching. However, the allure of interactivity drew me towards web development, prompting me to transition into a freelance career. Over the next three years, I juggled diverse projects as a design and frontend development contractor. This dynamic environment cultivated my skills in client communication, UX/UI design, and learning various frontend frameworks like Angular 1 & 2, Ember, Vue.js, and React.",

    "In 2018, I accepted a position at RE/MAX as a frontend developer, marking a pivotal phase in my career. Over the five years with the company, I honed my leadership and architectural skills. In this role, I took charge of several key developments, including feature research, feature development, GitLab CI/CD publishing flows, framework migrations, the architecture of two mono-repos (one with lerna, one with turbo-repo), the creation of a federated gateway with Apollo, implementation of a design system, implementing many different testing frameworks, project optimizations, and helm deployments. Collaborating with diverse teams, I consistently sought optimal solutions for stakeholders, ensuring timely and realistic implementation.",

    "Beyond the professional realm, I find joy in a variety of hobbies, including woodworking, brewing, playing with synthesizers, oil painting and growing vegetables! Outside of these pursuits, you'll often find me enjoying quality time with my wife or playing board or video games."
]
  
export const projects = [
  { 
      img: {
        src: "https://jonleibham.imgix.net/design-system.png?auto==compress,format&ar=1.818&fit=clip",
        alt: "Portfolio Design System Web Screencap"
      },
      href: "https://design.jonleibham.com",
      title: "Portfolio Design-System Storybook",
      description: 'Design System documentation for the current portfolio site. The documentation was built with Storybook 7 and vite using A11y for accessibility testing',
      keynotes: ["Storybook", "Design-System", "Vite",  "A11y", "Vue3", "Typescript"]
    },
    { 
      img: {
        src: "https://jonleibham.imgix.net/bhamdesign.png?auto==compress,format&ar=1.818&fit=clip",
        alt: "Old Portfolio Site Web Screencap"
      },
      href: "https://bhamdesigns.com",
      title: "bhamdesigns",
      description: 'Old portfolio site, built in Nuxt3 and Typescript.',
      keynotes: ["Nuxt3", "SSR", "Vue", "Typescript"]
    }
  ]