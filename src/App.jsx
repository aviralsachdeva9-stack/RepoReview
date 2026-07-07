import "@/app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";

import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Marquee } from "@/components/landing/Marquee";
import { Features } from "@/components/landing/Features";
import { Demos } from "@/components/landing/Demos";
import { Install } from "@/components/landing/Install";
import { Footer } from "@/components/landing/Footer";

const Landing = () => {
  return (
    <div className="App relative min-h-screen bg-white dark:bg-[#0A0A0A] text-slate-900 dark:text-white overflow-x-hidden transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <Demos />
        <Marquee />
        <Features />
        <Install />
      </main>
      <Footer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "12px",
          },
          className: "dark:bg-[#0f0f0f] dark:border-orange-500/35 dark:text-[#F8FAFC] bg-white border-orange-500/35 text-slate-900",
        }}
      />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
