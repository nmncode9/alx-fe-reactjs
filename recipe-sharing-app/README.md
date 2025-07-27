# Recipe Manager App

This is a React app for managing recipes with features including adding, editing, deleting, searching, and favoriting recipes. It uses Zustand for state management and React Router v6.4+ for routing.

This project was my first attempt at using Zustand for state management and was developed as part of the ALX Frontend training program. It provided a practical opportunity to learn and apply modern React state management and routing techniques.

## Features

- Add new recipes with title and description
- View list of all recipes
- Edit existing recipes via dynamic routes
- Delete recipes
- Search recipes by title with live filtering
- Mark recipes as favorites and view favorite recipes
- Persistent state stored in localStorage via Zustand middleware

## Tech Stack

- React (functional components with hooks)
- Zustand for global state management with persistence
- React Router v6.4+ with `createBrowserRouter` and `RouterProvider`
- LocalStorage for persistence of recipes and favorites

## Project Structure

- `App.jsx` defines routes and router configuration
- `main.jsx` renders the app with `RouterProvider`
- Components:
  - `AddRecipeForm`
  - `RecipeList`
  - `EditRecipeForm`
  - `FavoritesList`
  - `SearchBar`
  - `DeleteRecipeButton`
  - `AddToFavoritesButton`
  - `Layout` with `<Outlet />`
- Zustand store in `recipeStore.js` handles recipes, favorites, search term, and filtering

## Running the Project

1. Clone the repository  
2. Run `npm install` to install dependencies  
3. Run `npm start` to start the development server  
4. Access the app at `http://localhost:3000`

## Notes

- Routing uses nested routes under a shared layout component  
- Search filtering is implemented via Zustand store state and updates live on input  
- Favorites are managed by storing recipe IDs in the store and filtering the recipe list accordingly  
- The app uses localStorage to persist state between sessions
- Recipe recommendations are not yet integrated


