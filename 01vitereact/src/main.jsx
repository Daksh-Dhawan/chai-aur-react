import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <>
    <h1>CUSTOM APP!</h1>
    </>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://www.google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit Google!'
// }

const anotherElement = (
  <a href='https://www.google.com' target='_blank'>Visit Google!</a>
)

const anotherUser = "Babbu Maan"

const reactElement = React.createElement(
  'a',
  {href: 'https://www.google.com', target: '_blank'},
  'Click here to visit gooooogle',
  anotherUser
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <>
  //   <MyApp />
  //   <App />
  //   </>
  // </StrictMode>,
  reactElement
  // <App />
)
