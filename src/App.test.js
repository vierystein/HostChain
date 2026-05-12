// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders HostChain title', () => {
    render(<App />);
    const titleElement = screen.getByText(/HostChain/i);
    expect(titleElement).toBeInTheDocument();
});
