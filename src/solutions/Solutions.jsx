import SolutionsHero from './components/SolutionsHero'
import SolutionsOverview from './components/SolutionsOverview'
import EMDocSection from './components/EMDocSection'
import SmartConnectSection from './components/SmartConnectSection'
import EnterpriseSection from './components/EnterpriseSection'
import SolutionsComparison from './components/SolutionsComparison'
import SolutionsCTA from './components/SolutionsCTA'

function Solutions() {
  return (
    <main className="overflow-hidden bg-[#071326] text-white">
      <SolutionsHero />
      <SolutionsOverview />
      <EMDocSection />
      <SmartConnectSection />
      <EnterpriseSection />
      <SolutionsComparison />
      <SolutionsCTA />
    </main>
  )
}

export default Solutions