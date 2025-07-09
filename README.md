# Portfolio

This is the repository for my [portfolio](https://jkutkut.memoriadeelefante.com) website.
All the logic needed to setup the website, as well as the logic to fetch the needed data,
is contained in this repository.

In order to simplify the deployment while keeping a robust portfolio website, this repository
makes use of [Astro](https://astro.build/) with [TypeScript](https://www.typescriptlang.org/).

## Usage:

### Installation of the project
```bash
git clone https://github.com/Jkutkut/portfolio.git
cd portfolio
npm install
```

### Fetch the data
Use the commands under [Data logic](#data-logic).

### Live development server:
```bash
npm run dev
```

### Build the project:
```bash
npm run build
```

## Data logic:

The repositories are automatically fetched from GitHub using the logic under [`src/data/`](./src/data/).
In order to prevent excessive requests, a simple file cache is used to store the data.

```bash
npm run updateData
```

**Note**: A simple [`./utils.sh`](./utils.sh) script is used to help flush the cache like the following:

```bash
# Flush all the cache of the repositories that contains either `JS` or `PY`
./utils.sh flush << EOF && npm run updateData
JS
PY
EOF
```
