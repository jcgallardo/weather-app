import React from "react";
import Weather from './';
import { render, screen } from "@testing-library/react";

test('Weather render', async () => {
    // ARRANGE
    render(<Weather temperature={10} state='clear' />);
    // ACT
    const temp = await screen.findByRole('heading');
    // ASSERT
    expect(temp).toHaveTextContent('10');
})