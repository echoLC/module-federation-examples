import * as React from 'react';

import LocalButton from './Button';
import { Button } from 'app1/share';
import Input from 'app1/Input';
import { format } from 'app1/date';
import { sum } from 'app1/lodash';

console.log(format(new Date))
console.log(sum([1, '2', 3]))

const App = () => (
  <div>
    <h1>Typescript</h1>
    <h2>App 2</h2>
    <LocalButton />
    <React.Suspense fallback="loading...">
      <Button>APP1 button</Button>
    </React.Suspense>
    <React.Suspense fallback="loading...">
      <Input value="123" />
    </React.Suspense>
  </div>
);

export default App;
