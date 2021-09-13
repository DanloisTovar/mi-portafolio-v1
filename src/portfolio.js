import emoji from 'react-easy-emoji';

import googlelogo from './assets/img/icons/common/google.svg';
/* import github from './assets/img/icons/common/github.svg';
import airbnb from './assets/img/icons/common/airbnbLogo.png'; */
import Cv from './assets/Cv/Cv Danlois Tovar T.pdf';

export const greetings = {
  name: 'Danlois Tovar',
  title: 'Hola, Soy Danlois',
  description: `Soy estudiante de análisis de sistemas y he realizado diversos cursos de programación y desarrollo web, entusiasta por la programación y en búsqueda de nuevos desafíos.

  Actualmente busco insertarme en el mundo IT, específicamente en el área de desarrollo, para poder aplicar todos los conocimientos que he adquirido y crecer profesionalmente en este rubro. Me considero una persona organizada, honesta, responsable, comprometida, colaboradora y me gusta estar en constante aprendizaje.`,
  resumeLink: Cv,
};

export const openSource = {
  githubUserName: 'DanloisTovar',
};

export const contact = {};

export const socialLinks = {
  github: 'https://github.com/DanloisTovar',
  linkedin: 'https://linkedin.com/in/danloistovar',
};

export const skillsSection = {
  title: '¿Cual es mi objetivo?',
  subTitle: `SOY UN PROGAMADOR FULL STACK NODE.JS QUE BUSCA INSERTARSE EN EL AREA, PARA ADQUIRIR EXPERIENCIA Y SEGUIR APRENDIENDO TODOS DIAS, TENGO CONOCIMIENTOS EN:`,
  skills: [
    emoji(
      '⚡ Conocimiento en creacion de APIS-REST a traves de express.js para la interacion entre el Bakend y Front-End'
    ),
    emoji('⚡ Conocimientos en Progressive Web Applications ( PWA ).'),
    emoji('⚡ Conocimientos en CRM sequelize.'),
    emoji('⚡ Conocimientos en Axios.'),
    emoji('⚡ Conocimientos en webpack 5.'),
    emoji('⚡ Intregracion de servicios en Digital Ocean'),
  ],

  softwareSkills: [
    {
      skillName: 'html-5',
      fontAwesomeClassname: 'vscode-icons:file-type-html',
    },
    {
      skillName: 'css3',
      fontAwesomeClassname: 'vscode-icons:file-type-css',
    },
    {
      skillName: 'sass',
      fontAwesomeClassname: 'logos:sass',
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'logos:javascript',
    },
    {
      skillName: 'npm',
      fontAwesomeClassname: 'vscode-icons:file-type-npm',
    },
    {
      skillName: 'ejs',
      fontAwesomeClassname: 'vscode-icons:file-type-ejs',
    },
    {
      skillName: 'reactjs',
      fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
    },
    {
      skillName: 'Handlebars',
      fontAwesomeClassname: 'vscode-icons:file-type-handlebars',
    },
    {
      skillName: 'nodejs',
      fontAwesomeClassname: 'logos:nodejs-icon',
    },
    {
      skillName: 'sql-database',
      fontAwesomeClassname: 'vscode-icons:file-type-sql',
    },
    {
      skillName: 'mongoDB',
      fontAwesomeClassname: 'vscode-icons:file-type-mongo',
    },
    {
      skillName: 'Webpack',
      fontAwesomeClassname: 'vscode-icons:file-type-webpack',
    },

    {
      skillName: 'git',
      fontAwesomeClassname: 'logos:git-icon',
    },
  ],
};

export const SkillBars = [
  {
    Stack: emoji('⚡ Escucha activa'), //habilidades:
  },
  {
    Stack: emoji('⚡ Comunicación continua'),
  },
  {
    Stack: emoji('⚡ Empatía'),
  },
  {
    Stack: emoji('⚡ Proactividad'),
  },
  {
    Stack: emoji('⚡ Trabajo en equipo'),
  },
  {
    Stack: emoji('⚡ Capacitación constante'),
  },
];

export const educationInfo = [
  {
    schoolName:
      'Instuto de Formacion Tecnica Superior N° 12, Capital Federal, Buenos Aires, Argentina.',
    subHeader: 'Analista de Sistemas.',
    duration: 'Enero 2020 - Diciembre 2022',
    desc: 'Actualmente cursando 2 año.',
  },
  {
    schoolName:
      'Instituto Universitario de Administracion y Gerencia (I.U.D.A.G), Caracas, Distrito Capital, Venezuela.',
    subHeader:
      'Tecnico Universitario en Administración Mención Organización y Sistemas.',
    duration: 'Enero 2004 - Diciembre 2008',
    desc: 'Estudios Culminados.',
  },
];

export const cursosInfo = [
  {
    schoolName: 'Education IT, Capital Federal, Buenos aires, Argentina.',
    subHeader: 'Curso Desarrollador Full Stack Node.JS',
    duration: '2019 - 2020',
    desc: `Curso culminado.
    
  Técnologias Aprendidas:`,
    descBullets: [
      'HTML5 Fundamentos de una página Web | 12 horas | 2019.',
      'Javascript desde cero | 15 horas | 2019.',
      'Maquetación Web: HTML 5 y CSS | 18 horas | 2019.',
      'Maquetado Avanzado: HTML y CSS3 | 15 horas | 2019.',
      'Javascript Desarrollador Avanzado Front-End | 36 horas | 2019.',
      'Node.js y Mongo DB | 54 horas | 2019.',
      'ReactJS | 15 horas | 2019.',
      'Protocolo HTTPS | 03 horas | 2020.',
      'Presupuesto web | 03 horas | 2020.',
      ' Mongo DB Fundamentos | 06 horas | 2020.',
      ' Mongo DB Avanzado | 12 horas | 2020.',
      ' Javascript AWP (aplicaciones web progresivas) | 21 horas | 2020.',
      ' Arquitectura avanzada en Node.js | 18 horas | 2020.',
    ],
  },
  {
    schoolName:
      ' Programa de enseñanza Codo a Codo del Gobierno de la Ciudad de Buenos Aires | 2018',
    subHeader: 'Curso Java Desktop, Programacion Orientada a Objetos POO.',
    duration: 'Marzo 2018 - Diciembre 2018',
    desc: `Curso culminado.`,
    descBullets: [
      'Fundamentos de la Programacion.',
      'Porgramacion structurada.',
      'Porgramacion Orientada a Objetos.',
      'Encapsulatiento.',
      'Polimorfismo.',
      'Herencia.',
      'Bases de Datos Mysql.',
    ],
  },
];

export const experience = [
  {
    role: 'Developer star MERN',
    company: 'Empresa',
    companylogo: googlelogo,
    date: 'fecha',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    descBullets: [
      'Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ],
  },
];

export const projects = [
  /* >Mi portfolio: */
  {
    name: 'Mi Portafolio',
    desc: `Este portafolio fue realizado en base a una plantilla, Utilizando React (libreria javascript) en la cual se construyo en base a Hooks. Adicioanlmente se utiliza el consumo de la api de Github para mostrar el perfil de mi usuario.`,
    link: {
      /* web: */
      name: 'Ir al proyecto...',
      url: 'https://danloistovar.netlify.app/',
      nameRepository: 'Ir al Repositorio',
      urlRepository: 'https://github.com/DanloisTovar/mi-portafolio-v1 ',
    },
  },
  {
    name: 'Aplicacion Rick y Morty',
    desc: `Esta aplicacion fue realizada con React (libreria javascript), en la cual se utiliza la api de Rick y Morty para luego redenrizarlo en la web. `,

    link: {
      /* web: */
      name: 'Ir al proyecto...',
      url: 'https://rick-y-morty-app-danlois-tovar.netlify.app/',
      /* repositorio: */
      nameRepository: 'Ir al repositorio...',
      urlRepository: ' https://github.com/DanloisTovar/rick-y-morty-app',
    },
  },

  /* crud con ejs y MV */
  {
    name: 'Aplicacion de Notas (CRUD)',
    desc: `Esta aplicacion fue realizada con las siguientes tecnologias: Bootstrap, NodeJS, Express, EJS (embeber Javascript) y MongoDB. Utilizando modelos y vistas (MV).`,
    link: {
      /* web: */
      name: 'Ir al proyecto...',
      url: ' https://crud-nodejs-danlois-tovar.herokuapp.com',
      /* repositorio: */
      nameRepository: 'Ir al repositorio...',
      urlRepository: 'https://github.com/DanloisTovar/CRUD-Nodejs',
    },
  },
  /* crud con handlebars y MVC: */
  {
    name: 'Aplicacion de tareas (CRUD) con login',
    desc: `Esta aplicacion fue realizada con las siguientes tecnologias: Bootstrap, NodeJS, Express, Handlebars , passport y MongoDB. Utilizando MVC.`,
    link: {
      /* web */
      name: 'Ir al proyecto...',
      url: 'https://crud-login-danlois-tovar.herokuapp.com/ ',
      /* repositorio: */
      nameRepository: 'Ir al repositorio...',
      urlRepository: 'https://github.com/DanloisTovar/crud-login-mongo',
    },
  },

  /* formulario falso: */

  {
    name: 'Formulario de envio de email.',
    desc: `Esta aplicacion fue realizada con el fin de dar comportamiento de envio de email falso utilizando HTML, CSS, talwing, Javascript y Local storage.`,
    link: {
      /* web: */
      name: 'Ir al proyecto...',
      url: 'https://formulario-mails-danlois-tovar.netlify.app',
      /* repositorio: */
      nameRepository: 'Ir al repositorio...',
      urlRepository: 'https://github.com/DanloisTovar/simulador-formulario',
    },
  },

  {
    name: 'Pagina web estilo blog',
    desc: `Esta Pagina web fue realizada con fines practicos de Javascript y Jquery.`,
    link: {
      /* web: */
      name: 'Ir al proyecto...',
      url: 'https://pagina-web-js-blog-danlois-tovar.netlify.app/',
      /* repositorio: */
      nameRepository: 'Ir al repositorio...',
      urlRepository: ' https://github.com/DanloisTovar/pagina-web-js',
    },
  },

  /* Crud Clon ASANA en contrucion con MVC: (me falta deebuguear esta app:*/
  /*  {
    name: 'Gestor de proyectos (CRUD)',
    desc: `Esta aplicacion fue realizada con las siguientes tecnologias: Materialize, NodeJS, Express, PUG, Webpack, Mysql, Zequelize y Axios. Utilizando MVC.`,
    link: {
      name: 'Ir al proyecto...',
      url: ' ',
    },
  }, */
];
