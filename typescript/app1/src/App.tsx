import * as React from 'react';
import LocalButton from './components/Button'
import { assign } from './utils/lodash'
import { StarOutlined } from '@ant-design/icons'

console.log(assign({a: 1}, { b: 2}))

const RemoteButton = React.lazy(() => import('app2/Button'));

const App = () => (
  <div>
    <h1>Typescript</h1>
    <h2>App 1</h2>
    <React.Suspense fallback="Loading Button">
      <RemoteButton />
    </React.Suspense>
    <LocalButton type="primary">Local Button</LocalButton>
    <StarOutlined />
  </div>
);

export default App;
