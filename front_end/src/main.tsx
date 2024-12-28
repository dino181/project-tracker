import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Project from './pages/Project.tsx'
import ProjectList from './pages/ProjectList.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />

        <Route path="projects" >
          <Route index element={<ProjectList />} />
          <Route path=":project_name" element={<Project />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode >,
)
