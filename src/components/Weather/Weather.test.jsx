import React from "react";
import Weather from './Weather';
import { render, screen } from "@testing-library/react";

test('Weather render', async () => {
    // ARRANGE
    render(<Weather temperature={10} />);
    // ACT
    const temp = await screen.findByRole('heading');
    // ASSERT
    expect(temp).toHaveTextContent('10');
})