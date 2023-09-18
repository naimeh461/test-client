import { render, fireEvent, screen } from '@testing-library/react'; // Import from @testing-library/react
import { expect, test } from 'vitest';
import HomeBanner from '../component/UserPages/Home/HomeBanner/HomeBanner';

test('Clicking the button opens the modal', () => {
  render(<HomeBanner />); // Render your component

  // Find the button by its text content
  const button = screen.getByText('How it work');

  // Click the button to trigger the modal
  fireEvent.click(button);

  // Verify that the modal is displayed (you can use a test ID or other selectors)
  const modal = screen.getByTestId('my_modal_3'); // You can add a 'data-testid' to your modal for this
  expect(modal).toBeInTheDocument();
});
