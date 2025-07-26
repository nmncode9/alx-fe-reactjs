import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './App.css'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import NotFound from './components/NotFound'
import Layout from './components/Layout'
import EditRecipeForm from './components/EditRecipeForm';

export const Routes = [
  {
    path: '/',
    element: <Layout />, // acts as the base layout with <Outlet />
    children: [
      { path: '', element: <AddRecipeForm /> },
      { path: 'list', element: <RecipeList /> },
      { path: 'edit/:id', element: <EditRecipeForm /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];

const router = createBrowserRouter(Routes);
export default router;


