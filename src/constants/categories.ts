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
  {
    title: "cursus42",
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
    title: "todo",
    repos: [
      {
        type: "github",
        usr: "Jkutkut", repoName: "osmia-ide",
      },
      {
        type: "github",
        usr: "jkutkutOrg", repoName: "Android-CineHub",
      },
      {
        type: 'github',
        usr: 'jkutkutOrg', repoName: 'EatUp',
      }
    ],
  },
  {
    title: "tools",
    description: "Tools and utilities to help with various tasks.",
    repos: [
      {
        type: "github",
        usr: "Jkutkut", repoName: "Sh-CloneRepository",
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "JS-MultiTool",
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "JS-LearningCards",
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "PY-Seven_Segment_Display",
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
        usr: "Jkutkut", repoName: "rust-notebook",
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "Java-Input_Policy",
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "PY-Process_Planner_Visualizer",
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "42Madrid-Molewakamole",
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "rust-api_docs_generator",
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "ts-logger",
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "gamecup",
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "party-planner",
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "rust-macro-test",
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "nginx-fileserver",
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "Eurovision",
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "PY-AsciiGraph",
      },
    ],
  },
  {
    title: "visualize",
    description: "Different visualization projects to help understand algorithms and concepts.",
    repos: [
      {
        type: "github",
        usr: "Jkutkut", repoName: "PY-Process_Planner_Visualizer",
      },
      {
        type: "github",
        usr: "JkutkutArchive", repoName: "JS-A_Star-Path-Finding-Matrices",
      },
      {
        type: "github",
        usr: "JkutkutArchive", repoName: "JS-A_Star-for-mazes",
      },
      {
        type: "github",
        usr: "JkutkutArchive", repoName: "JS_Barnsley-fern-fractal",
      },
      {
        type: "github",
        usr: "JkutkutArchive", repoName: "JS_Tree-Fractal",
      },
      {
        type: "github",
        usr: "JkutkutArchive", repoName: "JS-Lissajous-curves",
      },
      {
        type: "github",
        usr: "JkutkutArchive", repoName: "JS-Drawing-SVGs-using-DFT",
      },
      {
        type: "github",
        usr: "JkutkutArchive", repoName: "JS-Fourier-Series-Visualization",
      },
      {
        type: "github",
        usr: "JkutkutArchive", repoName: "PY-Hilvert_curve",
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "JS-Dijkstra-Minimum-Spanning-Tree",
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "C-N_Queens_Puzzle",
      },
    ],
  },
  {
    title: "games",
    description: "Some games I made over the years.",
    repos: [
      {
        type: "github",
        usr: "Jkutkut", repoName: "42Madrid-so_long",
      },
      {
        type: "github",
        usr: "JkutkutArchive", repoName: "PY-Sudoku_Solver",
      },
      {
        type: "github",
        usr: "JkutkutArchive", repoName: "PY-Cards_Simulation",
      },
      {
        type: "github",
        usr: "JkutkutArchive", repoName: "JS-Chess",
      },
      {
        type: "github",
        usr: "JkutkutArchive", repoName: "PY-Breakout",
      },
      {
        type: "github",
        usr: "JkutkutArchive", repoName: "PY-Tetris",
      },
      {
        type: "github",
        usr: "JkutkutArchive", repoName: "JS-Rubik_Cube",
      },
      {
        type: "github",
        usr: "JkutkutArchive", repoName: "Java-Juego_Ahorcado",
      },
      {
        type: "github",
        usr: "JkutkutArchive", repoName: "JS_Snake-Game",
      },
      {
        type: "github",
        usr: "JkutkutArchive", repoName: "PY-GameOfLife",
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "JS-Tangle_Game",
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "JS-SPACEWAR",
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "JS-Wii_Play_Tanks",
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "Xun-GuiTos",
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "JS-GameRoom",
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "JS-The_mind",
      },
    ],
  }
];

export default categories;
