import Placeholder from '../src/js/placeholder';

let placeholder;
beforeAll(() => {
  placeholder = new Placeholder();
});

describe('Placeholder class constructor', () => {
  test('it should correctly construct a placeholder object', () => {
    expect(placeholder instanceof Placeholder).toBe(true);
  });
});

describe('Placeholder.methodA()', () => {
  test('it should return confirmation of a successful call', () => {
    expect(placeholder.methodA()).toBe(
      'Placeholder.prototype.methodA() successfully called and returned'
    );
  });
});

describe('Placeholder.methodB()', () => {
  test('it should return confirmation of a successful call', () => {
    expect(placeholder.methodB()).toBe(
      'Placeholder.prototype.methodB() successfully called and returned'
    );
  });
});
