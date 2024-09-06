/* eslint-disable max-len */
export default {
  // Language
  displayLanguages: [
    {
      code: 'pt',
      name: 'Português',
    },
    {
      code: 'en',
      name: 'English',
    },
  ],

  languages: {
    pt: 'pt',
    en: 'en',
  },

  // Header
  nameProject: { pt: 'Portfólio', en: 'Portfolio' },

  // Entities
  projects: {
    pt: 'Projetos',
    en: 'Projects',
  },
  skills: {
    pt: 'Habilidades',
    en: 'Skills',
  },
  contact: {
    pt: 'Contato',
    en: 'Contact',
  },
  aboutMe: {
    pt: 'Sobre mim',
    en: 'About me',
  },
  portfolio: {
    pt: 'Portfólio',
    en: 'Portfolio',
  },

  // Key Words
  myAPI: {
    pt: 'Minha API',
    en: 'My API',
  },

  // Messages
  titleUnavailableView: {
    pt: 'Opa! No momento meu Portfólio está indisponível.',
    en: "What's Up? At the moment my Portfolio is unavailable.",
  },
  messageUnavailableView: {
    pt: 'Antes ele era estático, ou seja, eu tinha que ir no código fonte atualizar as informações, o que era cansativo. Estou implementando um jeito mais dinâmico, onde o site irá buscar os dados na minha API.',
    en: "Before it was static, which means I had to go in the source code to update the information, which was tiring. I'm implementing a more dynamic way, where the website will fetch the data in my API.",
  },
  toggleLanguage: {
    en: 'Mudar idioma',
    pt: 'Change language',
  },
  why: {
    en: 'Why?',
    pt: 'Por que?',
  },
  hello: {
    en: 'Hello, my name is',
    pt: 'Olá, meu nome é',
  },
  moreDetails: {
    en: 'More details',
    pt: 'Mais detalhes',
  },
  hoverUpTheMouseAboveTheSkill: {
    en: 'Hover up the mouse above the skill to see the description',
    pt: 'Passe o mouse por cima da tecnologia para ver a descrição',
  },

  clickToSeeMoreDetailsAboutTheSkill: {
    en: 'Click to see more details about the skill',
    pt: 'Clique para ver mais detalhes sobre a habilidade',
  },

  // Without translation
  classNames: {
    projects: 'projects',
    skills: 'skills',
    aboutMe: 'about-me',
    contact: 'contact',
  },

  // Routes
  routes: {
    login: '/login',
  },

  // Others
  user: 'user',
  token: 'token',
};

export const oldFontsCDN =
  // eslint-disable-next-line max-len
  'https://fonts.googleapis.com/css2?family=Kanit:wght@200;400&family=KoHo:ital,wght@0,200;0,300;0,400;0,500;0,700;1,200;1,300;1,400;1,500;1,600;1,700&family=Kodchasan:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap';
