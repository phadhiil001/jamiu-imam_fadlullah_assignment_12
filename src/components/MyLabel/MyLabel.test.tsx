import { getLabelStyles } from './MyLabel';

describe('getLabelStyles', () => {
  test('returns disabled styles when disabled is true', () => {
    const styles = getLabelStyles(true, 'yellow');
    expect(styles).toEqual({
      color: '#535657',
      backgroundColor: '#ccc',
      cursor: 'not-allowed'
    });
  });

  test('returns default styles when disabled is false and no backgroundColor is provided', () => {
    const styles = getLabelStyles(false, undefined);
    expect(styles).toEqual({
      color: '#53bee5',
      backgroundColor: 'transparent',
      cursor: 'pointer'
    });
  });

  test('returns custom styles when disabled is false and backgroundColor is provided', () => {
    const styles = getLabelStyles(false, 'yellow');
    expect(styles).toEqual({
      color: '#53bee5',
      backgroundColor: 'yellow',
      cursor: 'pointer'
    });
  });
});
