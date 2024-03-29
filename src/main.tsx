import { createRoot } from 'react-dom/client'
import { App } from './app'
import { StrictMode } from 'react'

const domNode = document.getElementById('root')!
createRoot(domNode).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
