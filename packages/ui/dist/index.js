import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AppShell as MantineAppShell, Title, Header, MantineProvider } from '@mantine/core';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
export const AppShell = ({ title, colorScheme = "light", routes }) => (_jsx(BrowserRouter, { children: _jsx(MantineProvider, Object.assign({ withGlobalStyles: true, withNormalizeCSS: true, theme: { colorScheme, } }, { children: _jsxs(MantineAppShell, { children: [_jsx(Header, Object.assign({ height: 60, p: "xs", sx: { display: "flex" } }, { children: _jsx(Title, { children: title }) })), _jsx(Routes, { children: routes.map((route) => (_jsx(Route, { path: route.path, element: route.element }, route.path))) }), _jsx(Outlet, {})] }) })) }));
