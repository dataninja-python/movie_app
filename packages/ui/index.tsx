import * as React from "react";
import { AppShell as MantineAppShell, Title, Header, MantineProvider } from '@mantine/core';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import { Test } from './Test';

export type RouteProps = {
    element: any;
    path: string;
};

const testArr: any = [
    {
        path: "./Test",
        element: <Test />
    },
]

export const AppShell: React.FunctionComponent<{
    title: string;
    routes: RouteProps[];
    colorScheme?: "light" | "dark";
}> = ({ title, routes, colorScheme = "light" }) => (
    <BrowserRouter>
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{ colorScheme, }}
        >
            <MantineAppShell>
                <Header height={60} p="xs" sx={{ display: "flex" }}>
                    <Title>{title}</Title>
                </Header>
                <Routes>
                    {routes.map((route) => (
                        <Route key={route.path} path={route.path} element={testArr}
                </Routes>
                <Outlet />
            </MantineAppShell>
        </MantineProvider>
    </BrowserRouter>
);
