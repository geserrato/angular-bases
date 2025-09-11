# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This is an Angular 20.1.x application with Yarn as the package manager.

**Development workflow:**
- `yarn start` or `ng serve` - Start development server on http://localhost:4200
- `yarn build` or `ng build` - Build for production
- `yarn test` or `ng test` - Run unit tests with Karma/Jasmine
- `ng build --watch --configuration development` - Build and watch in development mode

**Code generation:**
- `ng generate component component-name` - Generate new component
- `ng generate --help` - See all available schematics

## Architecture Overview

This is an Angular standalone application using Angular's new zoneless change detection and signal-based state management.

**Key architectural decisions:**
- **Zoneless Change Detection**: Uses `provideZonelessChangeDetection()` instead of Zone.js
- **Standalone Components**: All components use Angular's standalone architecture (no NgModules)
- **Signal-based State**: Components use Angular signals for reactive state management
- **File-based Routing**: Routes defined in `src/app/app.routes.ts` with lazy-loaded page components

**Directory Structure:**
```
src/
├── app/
│   ├── pages/           # Route-level page components
│   │   ├── counter/     # Counter page with signal examples
│   │   └── hero/        # Hero page demonstrating signal patterns
│   ├── app.ts          # Root App component
│   ├── app.config.ts   # Application providers configuration
│   ├── app.routes.ts   # Application routing
│   └── app.html        # Root template with <router-outlet>
├── main.ts             # Application bootstrap
└── styles.css          # Global styles
```

**Component Patterns:**
- Components use signals for state management (e.g., `signal<number>(10)`)
- Template binding follows signal patterns: `{{ counterSignal() }}`
- Signal updates use `.set()` for replacement and `.update()` for mutations
- Components are organized as standalone with inline imports array

**TypeScript Configuration:**
- Strict mode enabled with comprehensive type checking
- Angular strict templates and injection parameters
- Uses ES2022 target with experimental decorators
- Prettier configured for Angular HTML templates

## Component Development Guidelines

**When creating new components:**
1. Use standalone component architecture
2. Prefer signals over traditional reactive forms for simple state
3. Follow existing naming conventions (PascalCase for class names)
4. Place page-level components in `src/app/pages/[component-name]/`
5. Use template and style URLs for better organization

**Signal Usage Patterns:**
- Use `signal<T>(initialValue)` for component state
- Use `.set()` to replace signal values completely
- Use `.update(prev => newValue)` to modify based on previous value
- Access signal values in templates with `signalName()`

**Routing:**
- Add new routes to `src/app/app.routes.ts`
- Use component imports at the top of the routes file
- Follow the existing pattern for route configuration