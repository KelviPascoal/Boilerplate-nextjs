import { render, screen } from '@testing-library/react';
import { Main } from '.';

describe('<Main />', () => {
  it('should be render Main', () => {
    render(<Main>react avançado</Main>);

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument();
  });
});
