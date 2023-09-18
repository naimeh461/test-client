import { render, screen } from '@testing-library/react';


import { describe, it } from 'vitest';
import AppT from './AppT';

describe('App', () => {
  it('renders headline', () => {
    render(<AppT title="React" />);
    screen.debug();
  });
});