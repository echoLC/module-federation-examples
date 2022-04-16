/// <reference types="react" />

declare module 'app1/share' {
  const Button: React.ComponentType;
  const Modal: React.ComponentType;

  export { Button, Modal}
}

declare module 'app1/lodash' {
  const sum: (list: any[]) => any;
  const assign: (o1: object, o2: object) => any;

  export { sum, assign }
}

declare module 'app1/Input' {
  const Input: React.ComponentType;

  export default Input
}

declare module 'app1/date' {
  const format: (date: Date | number | string, formatStr?: string) => string;

  export { format }
}
