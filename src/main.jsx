import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)



// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
// import App from './App.jsx';
// import './index.css';

// // Set the basename for GitHub Pages (match your repository name)
// const basename = '/EmitechSample';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter basename={basename}>
//       <App />
//     </BrowserRouter>
//   </StrictMode>
// );
