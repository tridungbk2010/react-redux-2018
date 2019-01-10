import { lazy } from 'react';

export const Home = lazy(() => import('../pages/Home'));
export const Dashboard = lazy(() => import('../pages/Dashboard'));
export const LoginForm = lazy(() => import('../pages/Login'));
export const SignInPage = lazy(() => import('../pages/SignInPage'));
export const SignUpPage = lazy(() => import('../pages/SignUpPage'));
export const AdminPage = lazy(() => import('../components/Admin'));
