import { Greeter, YourName } from '../index';
test('My Greeter', () => {
  expect(Greeter('Carl')).toBe('Hello Carl');
});

test('My Greeter', () => {
  expect(YourName('Carl')).toBe('Your name is: Carl');
});
