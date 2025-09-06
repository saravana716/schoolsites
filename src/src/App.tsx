import { useState } from 'react'
import { TopHeader } from '../components/TopHeader'
import { Header } from '../components/Header'
import { HomePage } from '../components/HomePage'
import { AboutSection } from '../components/AboutSection'
import { InfrastructureSection } from '../components/InfrastructureSection'
import { AcademicsSection } from '../components/AcademicsSection'
import { AdmissionFormSection } from '../components/AdmissionFormSection'
import { GallerySection } from '../components/GallerySection'
import { CareerSection } from '../components/CareerSection'
import { ContactFormSection } from '../components/ContactFormSection'
import { NewFooter } from '../components/NewFooter'
import { ScrollToTop } from '../components/ScrollToTop'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />
      case 'about':
        return <AboutSection />
      case 'infrastructure':
        return <InfrastructureSection />
      case 'academic':
        return <AcademicsSection />
      case 'admission':
        return <AdmissionFormSection />
      case 'gallery':
        return <GallerySection />
      case 'career':
        return <CareerSection />
      case 'contact':
        return <ContactFormSection />
      default:
        return <HomePage />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <TopHeader onNavigate={handleNavigation} />
      <Header currentPage={currentPage} onNavigate={handleNavigation} />
      <main>
        {renderCurrentPage()}
      </main>
      <NewFooter onNavigate={handleNavigation} />
      <ScrollToTop />
    </div>
  )
}