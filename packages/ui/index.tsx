import * as React from "react";
import { AppShell as MantineAppShell, Title, Header, MantineProvider } from '@mantine/core';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
//import { Test } from './Test';
//import { Test2 } from './Test2';

export type RouteProps = {
    path: string;
    element: JSX.Element | React.FunctionComponent | any;
};

export const AppShell: React.FunctionComponent<{
    title: string;
    colorScheme?: "light" | "dark";
    routes: RouteProps[];
}> = ({ title, colorScheme = "light", routes }) => (
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
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.element}
                        />
                    ))}
                </Routes>
                <Outlet />
            </MantineAppShell>
        </MantineProvider>
    </BrowserRouter>
);
