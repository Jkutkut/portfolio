import type { RepoReference } from "../types";

const categories: {
    title: string,
    description?: string,
    repos: RepoReference[],
}[] = [
  {
    title: "osmia",
    description: "Custom interpreter language designed to be used as an agnostic templating engine.",
    repos: [
      {
        type: 'github',
        usr: 'jkutkut', repoName: 'osmia',
        highlights: [
          'API fully customizable',
          'JSON context support',
          'Minimal dependencies',
        ],
        links: [
          {
            url: 'https://jkutkut.github.io/osmia/osmia/index.html',
            text: 'Docs',
          }
        ]
      },
      {
        type: 'github',
        usr: 'jkutkut', repoName: 'osmia-vscode',
        highlights: [
          'Syntax highlighting',
          'Built-in snippets',
          'Context-aware autocompletion',
          'Fully customizable settings',
        ],
        links: [
          {
            url: 'https://marketplace.visualstudio.com/items?itemName=jkutkut.osmia',
            text: 'VSCode Marketplace',
          }
        ]
      },
      {
        type: 'github',
        usr: 'jkutkut', repoName: 'osmia-cli',
        highlights: [
          'Zsh autocompletion',
          'CLI help page built-in',
        ],
        links: [
          {
            url: 'https://github.com/Jkutkut/osmia-cli/blob/main/README.md',
            text: 'Docs',
          }
        ]
      },
      {
        type: 'github',
        usr: 'jkutkut', repoName: 'osmia-npm',
        highlights: [
          'Rust based, WebAssembly compiled',
        ],
        links: [
          {
            url: 'https://jkutkut.github.io/osmia-npm/',
            text: 'Web preview',
          }
        ]
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "docker4osmia",
      },
    ]
  },
  {
    title: "42 Cursus",
    description: "Some highlights of my journey through the 42 Madrid cursus.",
    repos: [
      {
        type: "github",
        usr: "Jkutkut", repoName: "42Madrid-Cursus",
        highlights: [
          "Cursus projects",
          "42 API integration projects",
          "42 Tester projects",
        ]
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "42Madrid-Molewakamole",
        highlights: [
          "Analysis tools to extract details not directly available in the 42 API",
          "Graphic library used to print graphs on the terminal",
          "cli interface to interact easily with the API",
          "Simple setup to authorize to the 42 API",
        ]
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "MoleWakaMoleWeb",
        highlights: [
          "Web interface to interact with the 42 API",
          "Analysis tools to extract details not directly available in the 42 API",
          "Simple setup to authorize to the 42 API",
          "UI emulating cli interface with autocompletion"
        ]
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "PY-API42",
        highlights: [
          "Wrapper around the 42 API",
          "Easy to use",
          "Automatic authentication logic",
        ]
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "42Madrid-pipex",
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "42Madrid-push_swap",
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "42Madrid-so_long",
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "42Madrid-Philosophers",
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "custom_header",
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "Sh-Norminette_Tester",
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "42Tester-push_swap",
      },
    ],
  },
  {
    title: "Games",
    description: "Some games I made over the years.",
    repos: [
      {
        type: "github",
        usr: "JkutkutArchive", repoName: "JS-Rubik_Cube",
        highlights: [
          "Rubik's logic made without libraries",
          "More cubes: 2x2x2, 3x3x3... nxnxn!",
          "Simpler controls by using a diagram of the cube side",
          "Mirror cube variation",
        ],
        links: [
          {
            url: 'https://jkutkutarchive.github.io/JS-Rubik_Cube/',
            text: 'Play now',
          }
        ]
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "JS-GameRoom",
        description: "Website with multiple games made with Js and P5.js.",
        highlights: [
          "Agnostic to the games it contains",
          "Allows any game to be added",
          "Games loaded as a JSON file",
        ]
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "JS-SPACEWAR",
        highlights: [
          "Up to 4 players in a local computer",
          "Custom physics engine",
          "Fully customizable players and ships",
          "Kill stats and scoreboard",
        ],
        links: [
          {
            url: 'https://jkutkut.github.io/JS-SPACEWAR/',
            text: 'Play now',
          }
        ]
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "42Madrid-so_long",
      },
      {
        type: "github",
        usr: "JkutkutArchive", repoName: "PY-Sudoku_Solver",
        highlights: [
          "Human steps to solve the sudoku if it has a single solution",
          "PDF with steps made with Python3 + LaTeX",
        ]
      },
      {
        type: "github",
        usr: "JkutkutArchive", repoName: "PY-Tetris",
      },
      {
        type: "github",
        usr: "JkutkutArchive", repoName: "PY-Breakout",
        highlights: [
          "Multiple levels",
          "Multiple UI themes"
        ]
      },
      {
        type: "github",
        usr: "JkutkutArchive", repoName: "PY-GameOfLife",
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "JS-Tangle_Game",
        highlights: [
          "Automatic solver with animation",
          "Multiple game modes",
        ],
        links: [
          {
            url: 'https://jkutkut.github.io/JS-Tangle_Game/',
            text: 'Play now',
          }
        ]
      },
      {
        type: "github",
        usr: "JkutkutArchive", repoName: "JS_Snake-Game",
        links: [
          {
            url: 'https://jkutkutarchive.github.io/JS_Snake-Game/',
            text: 'Play now',
          }
        ]
      },
      {
        type: "github",
        usr: "JkutkutArchive", repoName: "JS-Chess",
        highlights: [
          "Hover over a piece to see its available moves",
        ],
        links: [
          {
            url: 'https://jkutkutarchive.github.io/JS-Chess/',
            text: 'Play now',
          }
        ]
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "JS-Wii_Play_Tanks",
        description: "My own POC version of the clasic game of tanks from the original \"Wii Play\"",
        highlights: [
          "Physics engine",
          "Basic enemy AI"
        ]
      },
    ],
  },
  {
    title: "IoT",
    description: "Various projects involving IoT. Includes Arduino, ESP32 and Raspberry Pi.",
    repos: [
      {
        type: 'github',
        usr: "ReGonzalezTeam", repoName: "InfoReflect",
        highlights: [
          "Docker based infrastructure",
          "Google Auth y Google Calendar integration",
          "AEMET OpenData API integration",
        ]
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "Arduino-SwitchItON",
        description: "An ESP8266 project to control any electric device",
      }
    ],
  },
  {
    title: "3D Design",
    description: "3D designs? 3D printing? Sure!",
    repos: [
      {
        type: "github",
        usr: "Jkutkut", repoName: "3D-Design-BQ_ZUM",
      },
      {
        type: "github",
        usr: "JkutkutArchive", repoName: "3D_Design_Sunflower_Keychain",
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "3D_Design-Phone_Stand",
      },
    ],
  },
  {
    title: "Tools",
    description: "Tools and utilities to help with various tasks.",
    repos: [
      {
        type: "github",
        usr: "Jkutkut", repoName: "PY-Process_Planner_Visualizer",
        highlights: [
          "Colorful console graphs",
          "Simple configuration",
        ]
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "42Madrid-Molewakamole",
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "rust-api_docs_generator",
        highlights: [
          "JSON to Markdown converter",
          "Fast and simple documentation of API endpoints based on JSON",
          "Agnostic conversion",
        ]
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "gamecup",
        links: [
          {
            url: 'https://jkutkut.memoriadeelefante.com/gamecup/',
            text: 'Live page',
          }
        ]
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "JS-MultiTool",
        highlights: [
          "Digital circuit simulator with truth table calculator",
          "Ascii and binary converters",
          "Base converter calculator",
        ],
        links: [
          {
            url: 'https://jkutkut.github.io/JS-MultiTool/',
            text: 'Live page',
          }
        ]
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "JS-LearningCards",
        highlights: [
          "Simple configuration",
          "Content can be shared as a single JSON file",
          "Great for learning any new topic",
        ]
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "nginx-fileserver",
        highlights: [
          "File explorer included",
          "Trivial configuration",
          "Docker based and lightweight",
        ]
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "Sh-CloneRepository",
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "rust-notebook",
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "party-planner",
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "Eurovision",
      },
    ],
  },
  {
    title: "Libraries",
    description: "Libraries to abstract and simplify different tasks.",
    repos: [
      {
        type: "github",
        usr: "Jkutkut", repoName: "rust-macro-test",
        highlights: [
          "Cleaner unit testing in Rust",
          "Simplified logic and easier to use",
          "Syntax control to ease the development",
        ]
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "PY-API42",
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "PY-NanoShell",
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "PY-AsciiGraph",
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "ts-logger",
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "Java-Input_Policy",
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "PY-Seven_Segment_Display",
      },
    ]
  },
  {
    title: "Visualization",
    description: "Different visualization projects to help understand algorithms and concepts.",
    repos: [
      {
        type: "github",
        usr: "Jkutkut", repoName: "PY-Process_Planner_Visualizer",
      },
      {
        type: "github",
        usr: "JkutkutArchive", repoName: "JS-A_Star-Path-Finding-Matrices",
        highlights: [
          "Random node mesh generator",
          "Simple controls to change the start and end nodes",
        ],
        links: [
          {
            url: 'https://jkutkutarchive.github.io/JS-A_Star-Path-Finding-Matrices/',
            text: 'Live page',
          }
        ]
      },
      {
        type: "github",
        usr: "JkutkutArchive", repoName: "JS-A_Star-for-mazes",
        highlights: [
          "Maze generator",
          "Random level generator",
          "Great controls to handle the visualization",
        ],
        links: [
          {
            url: 'https://jkutkutarchive.github.io/JS-A_Star-for-mazes/',
            text: 'Live page',
          }
        ]
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "JS-Dijkstra-Minimum-Spanning-Tree",
        links: [
          {
            url: 'https://jkutkut.github.io/JS-Dijkstra-Minimum-Spanning-Tree/',
            text: 'Live page',
          }
        ]
      },
      {
        type: "github",
        usr: "JkutkutArchive", repoName: "JS-Drawing-SVGs-using-DFT",
        links: [
          {
            url: 'https://jkutkutarchive.github.io/JS-Drawing-SVGs-using-DFT/',
            text: 'Live page',
          }
        ]
      },
      {
        type: "github",
        usr: "JkutkutArchive", repoName: "JS-Fourier-Series-Visualization",
        links: [
          {
            url: 'https://jkutkutarchive.github.io/JS-Fourier-Series-Visualization/',
            text: 'Live page',
          }
        ]
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "C-N_Queens_Puzzle",
      },
      {
        type: "github",
        usr: "JkutkutArchive", repoName: "PY-Hilvert_curve",
      },
      {
        type: "github",
        usr: "JkutkutArchive", repoName: "JS_Barnsley-fern-fractal",
        links: [
          {
            url: 'https://jkutkutarchive.github.io/JS_Barnsley-fern-fractal/',
            text: 'Live page',
          }
        ]
      },
      {
        type: "github",
        usr: "JkutkutArchive", repoName: "JS_Tree-Fractal",
        links: [
          {
            url: 'https://jkutkutarchive.github.io/JS_Tree-Fractal/',
            text: 'Live page',
          }
        ]
      },
      {
        type: "github",
        usr: "JkutkutArchive", repoName: "JS-Lissajous-curves",
        links: [
          {
            url: 'https://jkutkutarchive.github.io/JS-Lissajous-curves/',
            text: 'Live page',
          }
        ]
      },
    ],
  },
  {
    title: "docker4all",
    description: "Collection of Docker images to help developing and running projects.",
    repos: [
      {
        type: "github",
        usr: "Jkutkut", repoName: "Docker4C",
        highlights: [
          "valgrind, clang and libraries like build-essential and readline-common pre-installed",
          "zsh with Oh-My-Zsh pre-installed with custom configuration",
          "vim installed and configured to work directly within the container",
          "Utility tools like curl, git and zip pre-installed",
        ]
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "Docker4Rust",
        highlights: [
          "Rust compiler installed: rustc and cargo",
          "cargo watch pre-installed",
        ]
      },
      {
        type: "github",
        usr: "jkutkutOrg", repoName: "Docker4Java",
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "docker4osmia",
        highlights: [
          "osmia can be used as a cli tool with osmia-cli",
          "content can be passed with pipes and with files",
        ]
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "Docker4Norminette",
      },
    ],
  },
];

export default categories;
