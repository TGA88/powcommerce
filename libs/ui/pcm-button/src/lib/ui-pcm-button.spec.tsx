import { render } from '@testing-library/react';

import UiPcmButton from './ui-pcm-button';

describe('UiPcmButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiPcmButton />);
    expect(baseElement).toBeTruthy();
  });
});
