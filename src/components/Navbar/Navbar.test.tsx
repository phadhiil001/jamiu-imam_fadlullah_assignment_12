import { isLinkClickable } from './Navbar';

describe('isLinkClickable', () => {
  test('returns true when disabled is false', () => {
    expect(isLinkClickable(false)).toBe(true);
    expect(isLinkClickable(null)).toBe(true);
  });

  test('returns false when disabled is true', () => {
    expect(isLinkClickable(true)).toBe(false);
  });
});
