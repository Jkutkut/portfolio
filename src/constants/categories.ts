import type { RepoReference } from "../types";

const categories: {
    title: string,
    description?: string,
    repos: RepoReference[],
}[] = [
  {
    title: "osmia",
    description: "Templating language designed to be used as an agnostic engine that can be used anywhere.",
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
    title: "cursus42",
    description: "Some highlights of my journey through the 42 Madrid cursus.",
    repos: [
      {
        type: "github",
        usr: "Jkutkut", repoName: "42Madrid-Cursus",
      },
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
    title: "IoT",
    description: "Various projects involving IoT. Includes Arduino, ESP32 and Raspberry Pi.",
    repos: [
      {
        type: "github",
        usr: "Jkutkut", repoName: "Arduino-SwitchItON",
      },
      {
        type: 'github',
        usr: "ReGonzalezTeam", repoName: "InfoReflect"
      }
    ],
  },
  {
    title: "designs3d",
    description: "3D designs? Yes, I have some!",
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
    title: "visualize",
    description: "Different visualization projects to help understand algorithms and concepts.",
    repos: [
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
  },
  {
    title: "docker4all",
    description: "Docker images ready to be used in various situations.",
    repos: [
      {
        type: "github",
        usr: "jkutkutOrg", repoName: "Docker4Java",
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "Docker4Rust",
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "docker4osmia",
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "Docker4Norminette",
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "Docker4Any",
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "Docker4C",
      },
      {
        type: "github",
        usr: "Jkutkut", repoName: "Docker4Java",
      },
    ],
  }
];

export default categories;
