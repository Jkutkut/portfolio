import type { RepoReference } from "../types";

const categories: {
    title: string,
    repos: RepoReference[],
}[] = [
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
    ],
  },
  {
    title: "cursus42",
    repos: [
      {
        type: "github",
        usr: "Jkutkut", repoName: "42Madrid-Cursus",
      },
    ],
  },
  {
    title: "tools",
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
    title: "arduino",
    repos: [
      {
        type: "github",
        usr: "Jkutkut", repoName: "Arduino-SwitchItON",
      },
    ],
  },
  {
    title: "designs3d",
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
    ],
  },
  {
    title: "games",
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
        usr: "Jkutkut", repoName: "C-N_Queens_Puzzle",
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
