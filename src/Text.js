const Text = {
  Norwegian: {
    Button: { Text: "NO" },
    Home: {
      Greetings: "Hello, jeg er",
      Name: "Morthen Johannessen",
      Title: "Front-End dev student fra Norge.",
    },
    About: {
      Now: {
        Title: "Nå",
        Text: "Jeg har lært HTML, CSS, Javascript og tatt veien videre med å bruke React.",
      },
      EarlyLife: {
        Title: "Tidligere",
        Text: "Jobbet som telemontør hvor jeg for det meste reparerte fiber, enten om det var i infrastrukturen i Vestland/Norge eller om det var rett hjem til folket.",
      },
      Hobbies: {
        Title: "Hobbyer",
        Text: "Jeg bruker mesteparten av fritiden min på ting som er spill relatert, alt fra å gjøre raids i Guild Wars 2 til å arrangere lokale turneringer, spill-eventer og LAN-parties.",
      },
    },
    Contact: {
      Title: "Få tak i meg.",
    },
    Project: { Title: "Prosjekter" },
    Projects: [
      {
        id: 1,
        title: "GG Bergen Nettside",
        description:
          "Satt opp en nettside for GGBergen, en frivillig organisasjon jeg jobber med.",
        coverIMG: require("./pages/projectPage/img/ggbergen.png"),
        alt: "GGBergen Website",
        link: "https://morthenjo.github.io/ggbergen-website",
        website: "Nettside",
        repo: "https://github.com/Morthenjo/ggbergen-website",
      },
      {
        id: 2,
        title: "Passord Generator",
        description:
          "Skriv inn hvor langt du vil ha passordet ditt og trykk generate for å lage deg et passord.",
        coverIMG: require("./pages/projectPage/img/PwdGenerator.png"),
        alt: "Snippet of the password generator page",
        link: "https://morthenjo.github.io/Password-Generator/",
        website: "Nettside",
        repo: "https://github.com/Morthenjo/Password-Generator",
      },
      {
        id: 3,
        title: "Pokemon API",
        description: "Henter ut alle pokemonene som ligger i pokemon API'en.",
        coverIMG: require("./pages/projectPage/img/pokemonAPI.png"),
        alt: "Snippet of the Pokemon API call",
        link: "https://morthenjo.github.io/pokemon-list/",
        website: "Nettside",
        repo: "https://github.com/Morthenjo/pokemon-list",
      },
      {
        id: 4,
        title: "To Do List",
        description:
          "Her kan du ha en liten kladdelapp online, det er lagret i local storage så du kan finne tilbake det du skrev ned tidligere.",
        coverIMG: require("./pages/projectPage/img/ToDoList.png"),
        alt: "Snippet of the To Do List",
        link: "https://morthenjo.github.io/ToDoList/",
        website: "Nettside",
        repo: "https://github.com/Morthenjo/ToDoList",
      },
      {
        id: 5,
        title: "Trommesett",
        description: "Spill trommer med tastaturet ditt.",
        coverIMG: require("./pages/projectPage/img/drumkit.png"),
        alt: "A drumkit",
        link: "https://morthenjo.github.io/DrumKit-git/",
        website: "Nettside",
        repo: "https://github.com/Morthenjo/DrumKit-git",
      },
      {
        id: 6,
        title: "Solsystemet",
        description:
          "Et gruppeprosjekt hvor vi jobbet sammen for å lage en side om solsystemet",
        coverIMG: require("./pages/projectPage/img/SolarSystem.png"),
        alt: "En fremvisning av hovedskjermen til solsystemet",
        link: "https://andreastak86.github.io/Solsytemet/",
        website: "Nettside",
        repo: "https://github.com/Andreastak86/Solsytemet",
      },
    ],
  },
  English: {
    Button: { Text: "EN" },
    Home: {
      Greetings: "Hello, I am",
      Name: "Morthen Johannessen",
      Title: "Front-End dev student from Norway",
    },
    About: {
      Now: {
        Title: "Now",
        Text: "I've learned HTML, CSS, Javascript and started dabbling in the art of using React.",
      },
      EarlyLife: {
        Title: "Early Life",
        Text: "I worked as a telecommunication technician where I worked with repairing fiber either in the infrastructure or locally.",
      },
      Hobbies: {
        Title: "Hobbies",
        Text: "I use most of my spare time with anything gaming related, ranging from raiding in Guild Wars 2, to hosting local tournaments at either GGBergen or various LAN parties.",
      },
    },
    Contact: {
      Title: "Get in touch.",
    },
    Project: { Title: "Projects" },
    Projects: [
      {
        id: 1,
        title: "GG Bergen Website",
        description:
          "Set up a webpage for the volunteer organization I work with.",
        coverIMG: require("./pages/projectPage/img/ggbergen.png"),
        alt: "GGBergen Website",
        link: "https://morthenjo.github.io/ggbergen-website",
        website: "Website",
        repo: "https://github.com/Morthenjo/ggbergen-website",
      },
      {
        id: 2,
        title: "Password Generator",
        description:
          "Input the length of your password and press the button to generate 4 passwords.",
        coverIMG: require("./pages/projectPage/img/PwdGenerator.png"),
        alt: "Snippet of the password generator page",
        link: "https://morthenjo.github.io/Password-Generator/",
        website: "Website",
        repo: "https://github.com/Morthenjo/Password-Generator",
      },
      {
        id: 3,
        title: "Pokemon API",
        description: "Renders out all the pokemon from the Pokemon API.",
        coverIMG: require("./pages/projectPage/img/pokemonAPI.png"),
        alt: "Snippet of the Pokemon API call",
        link: "https://morthenjo.github.io/pokemon-list/",
        website: "Website",
        repo: "https://github.com/Morthenjo/pokemon-list",
      },
      {
        id: 4,
        title: "To Do List",
        description:
          "Here you can jot down whatever it is you need to do, it is saved in your local storage, allows for editing and sorting.",
        coverIMG: require("./pages/projectPage/img/ToDoList.png"),
        alt: "Snippet of the To Do List",
        link: "https://morthenjo.github.io/ToDoList/",
        website: "Website",
        repo: "https://github.com/Morthenjo/ToDoList",
      },
      {
        id: 5,
        title: "Drumkit",
        description: "Play some drums with your keyboard.",
        coverIMG: require("./pages/projectPage/img/drumkit.png"),
        alt: "A drumkit",
        link: "https://morthenjo.github.io/Drumkit-git",
        website: "Website",
        repo: "https://github.com/Morthenjo/Drumkit-git",
      },
      {
        id: 6,
        title: "SolarSystem",
        description:
          "Group Project which we worked together to create a webpage about the solar system",
        coverIMG: require("./pages/projectPage/img/SolarSystem.png"),
        alt: "A preview of the solarsystem homepage",
        link: "https://andreastak86.github.io/Solsytemet/",
        website: "Website",
        repo: "https://github.com/Andreastak86/Solsytemet",
      },
    ],
  },
};

export default Text;
