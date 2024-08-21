# Node.js and Npm Setup

### installs nvm (Node Version Manager)
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
```

### download and install Node.js (you may need to restart the terminal)
```bash
nvm install 22
```

### verifies the right Node.js version is in the environment
```bash
node -v # should print `v22.6.0`
```

### verifies the right npm version is in the environment
```bash
npm -v # should print `10.8.2`
```

### update npm
```bash
n latest
```

## Project Setup

```bash
npm install
```

### Compile and Hot-Reload for Development

```bash
npm run dev
```

### Compile and Minify for Production

```bash
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```bash
npm run lint
```
