import { test, expect } from '@jest/globals';

import dummy from '../bin/validator.js';

test('dummy test', () => {
  const result = dummy();
  expect(result).toBeInstanceOf(Date);
});
