import { render } from '@testing-library/react';

import DistributorApp from './distributor-app';

describe('DistributorApp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DistributorApp />);
    expect(baseElement).toBeTruthy();
  });
});
