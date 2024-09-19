// main.tsx or main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import App from './App'
import '@/css/index.css'
// import '@/css/fonts.css'

const rootElement = document.getElementById("root");

if (rootElement !== null) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <NextUIProvider>
        <main className="dark text-foreground bg-background  tbt-font">
          <App />
        </main>
      </NextUIProvider>
    </React.StrictMode>
  )
}