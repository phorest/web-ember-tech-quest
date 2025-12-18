# Phorest FE-web interview task - Ember

Your tasks will be revealed at the meeting with the Phorest Engineering team but feel free to get familiar with the project.
The idea is that this skeleton should bring some familiarity for an Ember developer (or front-end dev in general) and 
reduce the time needed for scaffolding.

Some of the dependencies and samples are here to speed up the styling process. Although we love beautiful interfaces,
the task is more focused on UX and front-end practices than figuring out every CSS class to make something pretty.

Not every little task has to be completed but you'll have to make this thing work. Still, during the live coding 
session, we value communication more than completeness.

Here are some technologies we used to make the live coding easier:
 - `ember-cli` - Ember's command-line interface for development
 - `ember 5.6` (part of the Ember 6.x LTS series) - A productive framework for building ambitious web applications
 - `ember-data` - For data management and API integration
 - `ember-cli-mirage` - Mock server for development and testing
 - `tailwind` - to speed up styling (if you are unfamiliar with Tailwind it's ok to write your own CSS) 
 
Note: In Phorest we write our front-ends in Ember (our web apps) and React (Next.js for Online Booking and React Native for mobile apps).

Resources:
 - https://guides.emberjs.com/
 - https://tailwindcss.com/
 - https://www.ember-cli-mirage.com/

## Getting Started

### Prerequisites

- Node.js >= 18
- npm or yarn

### Installation

```bash
npm install
```

### Running the App

```bash
npm start
```

This will start the Ember development server. Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

```bash
npm test
```

### Linting

```bash
npm run lint
```

To automatically fix linting issues:

```bash
npm run lint:fix
```

### Building for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

## Project Structure

```
app/
├── adapters/           # Ember Data adapters
├── components/         # Glimmer components
├── controllers/        # Route controllers
├── models/             # Ember Data models
├── routes/             # Route definitions
├── serializers/        # Ember Data serializers
├── styles/             # CSS/SCSS files
├── templates/          # Handlebars templates
├── app.js              # Application entry point
└── router.js           # Route configuration

config/
└── environment.js      # Environment configuration

mirage/
└── setup-mirage.ts     # Mock API server configuration

public/                 # Static assets
```

## Features

- **Clients Page**: View and filter clients by project
- **Sidebar Navigation**: Navigate between different sections
- **Profile Modal**: User profile interaction
- **Mock API**: Ember CLI Mirage for development

## Ember Octane

This project uses Ember Octane conventions:
- Glimmer components with `@glimmer/component`
- Tracked properties with `@tracked`
- Native JavaScript classes
- Angle bracket component invocation
- `{{on}}` and `{{fn}}` modifiers

----
