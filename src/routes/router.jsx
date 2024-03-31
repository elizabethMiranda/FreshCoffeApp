import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../layouts/Layout';
import { AuthLayout } from '../layouts/AuthLayout';
import { PageInicio } from '../views/PageInicio';
import { Login } from '../views/Login';
import Registro from '../views/Registro';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children:[{
            index: true,
            element: <PageInicio />
        }]

    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children:[
            {
                path: '/auth/login',
                element: <Login />
            },
            {
                path: '/auth/registro',
                element: <Registro />
            }
        ]
    },
]);