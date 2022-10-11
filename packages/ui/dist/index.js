import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AppShell as MantineAppShell, Title, Header } from '@mantine/core';
export const AppShell = ({ title }) => (_jsxs(MantineAppShell, { children: [_jsx(Header, Object.assign({ height: 60, p: "xs", sx: { display: "flex" } }, { children: _jsx(Title, { children: title }) })), _jsx("div", { children: "Hello" })] }));
