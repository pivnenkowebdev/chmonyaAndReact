import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ListCard from "./modal.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ListCard />
  </StrictMode>
)
