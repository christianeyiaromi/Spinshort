import Header from "./components/header";
import Hero from "./components/hero";
import Features from "./components/features";

export default function Home() {
  return (
    <main className="">
      <div className="bg-blue-900 px-6 md:px-20 ">
        <Header />
        <Hero />
      </div>
      <Features />
    </main>
  );
}
