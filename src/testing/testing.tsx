import { render } from '@testing-library/react';
import { PropsWithChildren, ReactElement } from 'react';
import { AppContext } from 'context';
import { ContentMock } from './ContextMock';

export * from '@testing-library/user-event';
export { default as userEvent } from '@testing-library/user-event';
export * from '@testing-library/react';

const customRender = (
  children: PropsWithChildren<ReactElement>,
  extraProps?: Record<string, unknown> | undefined
) => {
  const merged = { ...ContentMock, ...extraProps };
  return render(<AppContext.Provider value={merged}>{children}</AppContext.Provider>);
};
export { customRender as renderWithContext };
