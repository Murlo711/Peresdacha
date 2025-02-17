import Header from "./components/Header/Header";
import OfferSection from "./components/OfferSection/OfferSection";
import DescriptionSection from "./components/DescriptionSection/DescriptionSection";
import ServiceSection from "./components/ServiceSection/ServiceSection";
import RentalSection from "./components/RentalSection/RentalSection";


export default function App() {
  return (
    <>
      <Header />

      <main>
        <OfferSection />
        <DescriptionSection />
        <ServiceSection />
        <RentalSection />
      </main>
    </>
  )
}