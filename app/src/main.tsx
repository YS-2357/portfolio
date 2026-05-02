import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom'
import './index.css'
import Nav from './components/Nav'
import App from './App.tsx'
import AboutPage from './pages/AboutPage.tsx'
import AwardsPage from './pages/AwardsPage.tsx'
import EducationPage from './pages/EducationPage.tsx'
import ExperiencePage from './pages/ExperiencePage.tsx'
import MarkdownPage from './pages/MarkdownPage.tsx'
import ProjectIntroPage from './pages/ProjectIntroPage.tsx'
import ProjectsPage from './pages/ProjectsPage.tsx'

function LegacyProjectPageRedirect() {
  const { project, page } = useParams<{ project: string; page: string }>()
  if (!project || !page) return <Navigate to="/projects" replace />
  return <Navigate to={`/projects/${project}/${page}`} replace />
}

function LegacyProjectIntroRedirect() {
  const { project } = useParams<{ project: string }>()
  if (!project) return <Navigate to="/projects" replace />
  return <Navigate to={`/projects/${project}`} replace />
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/awards" element={<AwardsPage />} />
        <Route path="/projects/:project/:page" element={<MarkdownPage />} />
        <Route path="/projects/:project" element={<ProjectIntroPage />} />
        <Route path="/projects/codeit/:project/:page" element={<LegacyProjectPageRedirect />} />
        <Route path="/projects/codeit/:project" element={<LegacyProjectIntroRedirect />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
