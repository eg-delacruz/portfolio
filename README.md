# 🌟 Personal Portfolio - Gerardo de la Cruz

A modern, multilingual portfolio website built with Next.js, showcasing professional experience, skills, and projects. This portfolio features internationalization support for English, Spanish, and German, with a clean and responsive design.

## ✨ Features

- 🌍 **Multilingual Support**: Full internationalization (i18n) with support for English, Spanish, and German
- 🎨 **Dark Mode**: Theme switching capability with next-themes
- ⚡ **Performance Optimized**: Built with Next.js 14 for optimal loading speeds and SEO
- 📱 **Fully Responsive**: Mobile-first design that looks great on all devices
- 🎯 **Type Safe**: Built with TypeScript for robust code and better developer experience
- 🚀 **Modern Stack**: Leveraging the latest web technologies and best practices

## 🛠️ Tech Stack

### Core Technologies
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety and enhanced DX
- **[Sass](https://sass-lang.com/)** - Advanced CSS styling

### Key Dependencies
- **[next-intl](https://next-intl-docs.vercel.app/)** (v3.9.5) - Internationalization for Next.js
- **[next-themes](https://github.com/pacocoursey/next-themes)** (v0.3.0) - Theme management (dark/light mode)
- **[Sharp](https://sharp.pixelplumbing.com/)** - High-performance image optimization

### Development Tools
- **ESLint** - Code quality and consistency
- **TypeScript** - Static type checking
- **Node.js** (>=20.x <=24.x) - JavaScript runtime

## 🚀 Getting Started

### Prerequisites

- Node.js (version 20.x to 24.x)
- npm, yarn, or pnpm package manager
- **Windows PowerShell** (recommended - avoid WSL/Linux for this project)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd CV
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio in action.

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the development server on port 3000 |
| `npm run build` | Creates an optimized production build |
| `npm run start` | Starts the production server |
| `npm run lint` | Runs ESLint to check code quality |

## 🌐 Internationalization

The portfolio supports three languages:

- 🇺🇸 **English** (en) - Default locale
- 🇪🇸 **Spanish** (es)
- 🇩🇪 **German** (de)

Translation files are located in `src/messages/`:
- `en.json` - English translations
- `es.json` - Spanish translations
- `de.json` - German translations

The locale is automatically detected from the URL path:
- `/` or `/en/*` - English
- `/es/*` - Spanish
- `/de/*` - German

## 📁 Project Structure

```
CV/
├── public/                 # Static assets
│   ├── certificates/      # Certificate images
│   ├── documents/         # Downloadable documents (e.g., resume)
│   └── favicon/           # Favicon files and browser config
├── src/
│   ├── app/               # Next.js App Router pages
│   ├── assets/            # Images, icons, and other assets
│   ├── components/        # Reusable React components
│   ├── font/              # Custom fonts
│   ├── hooks/             # Custom React hooks
│   ├── messages/          # i18n translation files
│   ├── styles/            # Global styles and SCSS modules
│   ├── i18n.ts            # Internationalization configuration
│   └── middleware.ts      # Next.js middleware for locale handling
├── eslint.config.mjs      # ESLint configuration
├── next.config.mjs        # Next.js configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies and scripts
```

## 🎨 Styling

The project uses Sass (SCSS) for styling with a modular approach:
- Global styles in `src/styles/`
- Component-specific styles using CSS Modules
- Theme support via next-themes
- TypeScript path aliases for clean imports:
  - `@/*` - src root
  - `@styles/*` - styles directory
  - `@components/*` - components directory
  - `@hooks/*` - hooks directory
  - `@assets/*` - assets directory
  - `@font/*` - font directory

## 🔧 Configuration

### TypeScript Paths
The project uses TypeScript path aliases for cleaner imports. Configure additional aliases in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "@/*": ["*"],
      "@components/*": ["components/*"]
    }
  }
}
```

## 🤝 Contributing

This is a personal portfolio project. However, if you find any bugs or have suggestions, feel free to open an issue.

## 📄 License

This project is private and proprietary.

## 👨‍💻 Author

**Gerardo de la Cruz**

---

Built with ❤️ using Next.js and modern web technologies.