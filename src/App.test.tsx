import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

const sleep = (time = 2000) =>
  new Promise<void>((resovle) => {
    setTimeout(() => {
      resovle();
    }, time);
  });

test('testSearchQQ', async () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/请输入qq号查询/i);

  fireEvent.change(input, { target: { value: '156908838' } });
  fireEvent.keyDown(input, { key: 'Enter' });

  await waitFor(
    () => {
      const result = screen.getByText(/^kira∑$/);
      expect(result).toBeInTheDocument();
    },
    { timeout: 3000 }
  );
});
