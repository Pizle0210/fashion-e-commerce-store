import Hero from "./components/hero"
import NewArrival from "./components/new-arrival"

export const dynamic = "force-dynamic"
export default function Home() {
  return (
    <main className="bg-white pb-8 sm:pb-10 lg:pb-12 ">
      <Hero />
      <NewArrival /> 
    </main>
  )
}
