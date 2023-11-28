import { NextUIProvider } from '@nextui-org/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { render } from 'preact';
import React from 'preact/compat';
import { QueryClient, QueryClientProvider } from 'react-query';
import { App } from './app.tsx';
import './styles/index.css';

const queryClient = new QueryClient();

document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        once: true
    })
})

render((
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <NextUIProvider>
                <App />
            </NextUIProvider>
        </QueryClientProvider>
    </React.StrictMode>
), document.getElementById('app')!)
