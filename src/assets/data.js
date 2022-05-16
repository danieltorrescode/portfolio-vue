export default {
  // my json here...
  contact: {
    name: "Daniel Torres",
    title: "System Engineer",
    job: "Software Developer",
    email: "danieltorres2902@gmail.com",
  },
  about: {
    photo: "foto.png",
    description: `
      I'm full-stack software developer.
      always learning something new in the tech field.
      highly interested in maths, data sicence and machine learning,
      enthusiast for free software philosophy and GNU-Linux operating systems.
    `,
    skills: [
      "Full-stack Dev",
      "Task Automatization",
      "Data Analysis",
      "Linux environment administration",
      "Sql database design and administration",
    ],
    languages: [
      "Python : Django",
      "php : Laravel",
      "Javascript : VueJS",
      "Boostrap",
      "PostgreSQL",
    ],
    tools: ["Atom", "Pycharm", "Github", "Gitlab", "Bash Shell"],
    git: "https://github.com/danieltorrescode",
  },
  portfolio: {
    gnu_linux: {
      project1: {
        codename: "dotfiles",
        description: "My dotfiles Arch Linux [DWM] (more intended to usability that ricing)",
        images: [
          "gnu_linux/dotfiles/sh1.png",
        ],
        github: "https://github.com/danieltorrescode/dotfiles/",
        link: "https://app-django-notes.herokuapp.com/",
        details:
          "Django 2.1 app use the class and function based views,custom admin site, authentication middleware and ORM in the framework",
      },
      project2: {
        codename: "emacs",
        description: "My GNU Emacs config",
        images: [
          "gnu_linux/emacs/el1.png",
        ],
        github: "https://github.com/danieltorrescode/emacs/",
        link: "https://app-django-notes.herokuapp.com/",
        details:
          "",
      },
    },
    javascript: {
      project1: {
        codename: "vue",
        description:
          "Minimalist front-end with Vue.js and Vuetify for CRUD tasks",
        images: [
          "js/vue/vue1.png",
        ],
        github: "https://github.com/danieltorrescode/vue/",
        link: "https://app-manager.herokuapp.com/index/",
        details:
          "",
      },
      // project1: {
      //   codename: "manager",
      //   description:
      //     "MEAN CRUD to manage departments and employees at a company",
      //   images: [
      //     "js/manager/js1.png",
      //     "js/manager/js2.png",
      //     "js/manager/js3.png",
      //     "js/manager/js4.png",
      //   ],
      //   github: "https://github.com/danieltorrescode/manager-rest-api/",
      //   link: "https://app-manager.herokuapp.com/index/",
      //   details:
      //     "Nodejs and Express REST API of MEAN CRUD, use Passport as authentication middleware and a JSON Web Token strategy with passport-jwt and mongoose  as a MongoDB object modeling tool.",
      // },
      // project2: {
      //   codename: "portfolio",
      //   description: "VueJS with Vuetify page",
      //   images: ["js/portfolio/js1.png", "js/portfolio/js2.png"],
      //   github: "https://github.com/danieltorrescode/portfolio-source/",
      //   link: "https://danieltorrescode.github.io/portfolio/",
      //   details: "",
      // },
    },
    php: {
      project1: {
        codename: "volunteer",
        description:
          "Laravel CRUD for manage volunteers in community service activities",
        images: [
          "php/volunteer/php1.png",
          "php/volunteer/php2.png",
          "php/volunteer/php3.png",
          "php/volunteer/php4.png",
        ],
        github: "https://github.com/danieltorrescode/volunteer/",
        link: "https://site-volunteer.herokuapp.com/",
        details:
          "Laravel app intended for college tutors to manage students in community service activities. this is a CRUD in which is used blade template, Faker library that generates fake data, authentication middleware, Eloquent ORM.",
      },
    },
    python: {
      project1: {
        codename: "notes",
        description: "Django CRUD for notes publication",
        images: [
          "py/notes/py1.png",
          "py/notes/py2.png",
          "py/notes/py3.png",
          "py/notes/py4.png",
        ],
        github: "https://github.com/danieltorrescode/notes/",
        link: "https://app-django-notes.herokuapp.com/",
        details:
          "Django 2.1 app use the class and function based views,custom admin site, authentication middleware and ORM in the framework",
      },
    },
    jupyter: {
      project1: {
        codename: "jupyter",
        description: "JupyterLab notes from my learning path in data science and machine learning",
        images: [
          "jupyter/ipynb1.png",
        ],
        github: "https://github.com/danieltorrescode/jupyter/",
        link: "https://app-django-notes.herokuapp.com/",
        details:
          "",
      },
    },
    solidity: {
      project1: {
        codename: "ether",
        description: "Environment for developing contracts with solidity",
        images: [
          "solidity/ether/sol1.png",
        ],
        github: "https://github.com/danieltorrescode/ether/",
        link: "https://app-django-notes.herokuapp.com/",
        details:
          "",
      },
    },

  },
};
