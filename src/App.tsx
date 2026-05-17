import { Nav } from "./components/Nav";
import { Hero } from "./sections/Hero";
import { Invariants } from "./sections/Invariants";
import { Agents } from "./sections/Agents";
import { Architecture } from "./sections/Architecture";
import { Intelligence } from "./sections/Intelligence";
import { CTA } from "./sections/CTA";
import { Footer } from "./components/Footer";

export default function App(): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Invariants />
        <Agents />
        <Architecture />
        <Intelligence />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
