## Libraries

### Nanoid

nanoid is a small, fast, and secure library for generating unique IDs in JavaScript. It is designed to be as compact as possible while still providing a unique, unpredictable, and collision-resistant identifier.

The library generates random IDs that consist of a combination of uppercase and lowercase letters, as well as numbers. The default ID length is 21 characters, but this can be changed by passing a different length as an argument.

```sh
npm i nanoid
```

```js
import { nanoid } from 'nanoid'
example.map((item) => {
  return <Item key={nanoid()} />
})
```

### Values.js

Install the values.js library and use it to generate a list of colors in the App component.

[Values.js Library](https://github.com/noeldelgado/values.js/blob/master/README.md)

```sh
npm i values.js

```

```js
import Values from 'values.js'
new Values('#f15025').all(10)
```

### React-Toastify

Import and set up the react-toastify library.

[React Toastify](https://fkhadra.github.io/react-toastify/introduction)

```sh
npm i react-toastify
```

main.jsx

```js
import 'react-toastify/dist/ReactToastify.css'
```

App.jsx

```js
import { ToastContainer, toast } from 'react-toastify'

toast.success('awesome')
toast.error('error message')

return (
  <main>
    ...............
    <ToastContainer position="top-center" />
  </main>
)
```
