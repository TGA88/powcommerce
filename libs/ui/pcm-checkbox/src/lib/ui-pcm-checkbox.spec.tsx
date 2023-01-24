import { render } from '@testing-library/react';

import UiPcmCheckbox from './ui-pcm-checkbox';

describe('UiPcmCheckbox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiPcmCheckbox />);
    expect(baseElement).toBeTruthy();
  });
});
