import SolutionsHero from './components/SolutionsHero'
import SolutionsOverview from './components/SolutionsOverview'
import EMDocSection from './components/EMDocSection'
import SmartConnectSection from './components/SmartConnectSection'
import EnterpriseSection from './components/EnterpriseSection'
import SolutionsCTA from './components/SolutionsCTA'

function Solutions() {
  return (
    <main className="overflow-hidden bg-[#071326] text-white">
      <SolutionsHero />
      <SolutionsOverview />
      <EMDocSection />
      <SmartConnectSection />
      <EnterpriseSection />
      <SolutionsCTA />
    </main>
  )
}

export default Solutions