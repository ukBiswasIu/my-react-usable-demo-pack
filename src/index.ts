import InputBoxer from './InputBox';
// import { Component } from 'react';

export const Greeter = (name: string) => `Hello ${name}`;
export const YourName = (name: string) => `Your name is: ${name}`;
// export {InputBoxer};
export const my = new InputBoxer();
my.hello("Stack Overflow");