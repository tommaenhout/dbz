# DBZ Micro-Frontend Application

## Project Overview
This project is a micro-frontend architecture application built around Dragon Ball Z content. The application consists of a host application (`mf_dbz`) that consumes several micro-frontend providers:

- **mf_dbz**: Host application that orchestrates and integrates all micro-frontends
- **mf_navbar**: Navigation bar component
- **mf_vue_cards**: Vue.js based card component for displaying characters
- **mf_card_detail**: Component for displaying detailed character information

Each micro-frontend is containerized and can be run independently or as part of the complete application.

## Technical Stack

This project leverages the following technologies:

- **Rspack**: High-performance JavaScript bundler used for building the application
- **React**: JavaScript library for building user interfaces in host and some micro-frontends
- **Vue.js**: Progressive JavaScript framework used in the cards micro-frontend
- **Module Federation**: Enables sharing of modules across multiple applications
- **Tailwind CSS**: Utility-first CSS framework for styling components
- **React Router**: Standard routing library for React applications

## Running the Application

### Using Docker (Recommended)
To see the project in action with Docker:

```bash
docker compose up --build
```

This will build and start all containers defined in the docker-compose.yml file.

### Using NPM
Alternatively, you can run each micro-frontend individually using NPM:

1. Navigate to each directory and install dependencies:
   ```bash
   cd mf_dbz && npm install
   cd mf_navbar && npm install
   cd mf_vue_cards && npm install
   cd mf_card_detail && npm install
   ```

2. Start each application in a separate terminal:
   ```bash
   # In terminal 1
   cd mf_dbz && npm start
   
   # In terminal 2
   cd mf_navbar && npm start
   
   # In terminal 3
   cd mf_vue_cards && npm start
   
   # In terminal 4
   cd mf_card_detail && npm start
   ```

## Port Configuration
- mf_dbz: http://localhost:8080
- mf_vue_cards: http://localhost:8081
- mf_navbar: http://localhost:8082
- mf_card_detail: http://localhost:8083
