import * as React from "react";
import { AppShell as MantineAppShell, Title, Header, MantineProvider } from '@mantine/core';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

export const AppShell: React.FunctionComponent<{
    title: string;
    colorScheme?: "light" | "dark";
}> = ({ title, colorScheme }) => (
    <BrowserRouter>
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
                colorScheme,
            }}
        >
            <MantineAppShell>
                <Header height={60} p="xs" sx={{ display: "flex" }}
                    styles={
                        (theme) => ({
                            main: {
                                backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
                            },
                        })}
                >
                    <Title>{title}</Title>
                </Header>

                <div>Hello</div>
            </MantineAppShell>
        </MantineProvider>
    </BrowserRouter>
);
