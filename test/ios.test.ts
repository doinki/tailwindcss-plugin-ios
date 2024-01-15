import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { expect, test } from 'vitest';

test('ios', () => {
  expect(readFileSync(join(process.cwd(), 'test', 'ios.css'), 'utf-8'))
    .toMatchInlineSnapshot(`
    "@supports (-webkit-touch-callout: none) {
      body {
        display: none
      }
    }

    @supports not (-webkit-touch-callout: none) {
      body {
        display: block
      }
    }
    "
  `);
});
