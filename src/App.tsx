/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Personalize from './components/Personalize';
import Prevent from './components/Prevent';
import Prosper from './components/Prosper';
import Science from './components/Science';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-navy-900 min-h-screen text-white selection:bg-cyan-500/30">
      <Navbar />
      <main>
        <Hero />
        <Personalize />
        <Prevent />
        <Prosper />
        <Science />
      </main>
      <Footer />
    </div>
  );
}
