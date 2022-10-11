import * as React from "react";
import { AppShell as MantineAppShell, Title, Header } from '@mantine/core';

export const AppShell: React.FunctionComponent<{ title: string; }> = ({ title }) => (
    <MantineAppShell>
        <Header height={60} p="xs" sx={{ display: "flex" }}>
            <Title>{title}</Title>
        </Header>

        <div>Hello</div>
    </MantineAppShell>
);
