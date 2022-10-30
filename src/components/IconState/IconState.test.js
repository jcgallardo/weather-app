import { render } from '@testing-library/react'
import React from 'react'
import IconState from './IconState'

test('IconState render', async () => {
    render(<IconState state='clear' />);

    // TODO: svg role???
    // const icon = await screen.findAllByRole('none');

    // expect(icon).toHaveLength(1);
})