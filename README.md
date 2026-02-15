# E-Cell SRMIST Website

A modern, responsive website for the Entrepreneurship Cell at SRM Institute of Science and Technology. Built with React and Vite, featuring animated hero, marquee, cubes background, and rich section layouts.

## Features
- Responsive layout across desktop, tablet, and mobile
- Animated hero with countdown, marquee, and CTA buttons
- Interactive cube background and demo section
- Sections for Impact, Initiatives, Events, Team, About, and Footer
- Custom cursor effect (desktop only)

## Tech Stack
- React (Vite)
- React Router
- CSS (component-scoped styles)

## Getting Started

Install dependencies:
```
npm install
```

Run the dev server:
```
npm run dev
```

Build for production:
```
npm run build
```

Preview production build:
```
npm run preview
```

## Project Structure
```
src/
  Component/
    About/
    Contact/
    Cubeanimation/
    CustomCursor/
    Developers/
    Events/
    Footer/
    Hero/
    Home/
    Impact/
    Initiatives/
    Marquee/
    Navbar/
    Startups/
    Team/
```

## Routes
- `/` Home
- `/about`
- `/team`
- `/startups`
- `/events`
- `/contact`
- `/developers`

## Customize Content
- Team members: edit the `members` array in `src/Component/Team/Team.jsx`
- Events data: edit `eventsData` in `src/Component/Events/Events.jsx`
- Footer links and address: edit `src/Component/Footer/Footer.jsx`

## Notes
- The custom cursor is disabled on touch devices.
- Images use external URLs; replace with local assets if needed.

## License
This project is for the E-Cell SRMIST website. Add a license if required.
