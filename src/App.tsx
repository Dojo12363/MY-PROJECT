/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Egg, 
  Bird, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ShoppingBasket, 
  Award,
  ArrowRight,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-farm-bg font-sans text-farm-text overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-farm-bg/80 backdrop-blur-md border-b border-farm-leaf/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3">
              <div className="bg-farm-leaf w-10 h-10 rounded-full flex items-center justify-center text-white shadow-sm">
                <Bird className="w-5 h-5" />
              </div>
              <span className="text-2xl font-display font-bold text-farm-deep tracking-tight">Dojo Farm</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {['Mwanzo', 'Mifugo', 'Huduma', 'Mawasiliano'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-medium uppercase tracking-widest text-farm-earth hover:text-farm-leaf transition-colors">
                  {item}
                </a>
              ))}
              <button className="bg-farm-leaf text-white px-8 py-2.5 rounded-full text-sm font-bold shadow-md hover:shadow-lg hover:bg-farm-deep transition-all active:scale-95">
                Agiza Sasa
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden p-2 text-farm-leaf" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden bg-farm-bg border-b border-farm-leaf/5"
          >
            <div className="px-4 py-6 space-y-4">
              {['Mwanzo', 'Mifugo', 'Huduma', 'Mawasiliano'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="block text-lg font-display font-medium py-2 text-farm-deep"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="w-full bg-farm-leaf text-white py-3 rounded-full font-bold shadow-md">
                Agiza Sasa
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="mwanzo" className="pt-32 pb-20 px-4 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="lg:col-span-7 space-y-8"
          >
            <motion.div variants={fadeIn} className="inline-block px-3 py-1 bg-farm-sage text-farm-leaf text-xs font-bold uppercase tracking-widest rounded-md">
              Karibu Dojo Farm
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-6xl lg:text-8xl font-display font-normal leading-[1.05] text-farm-deep">
              Kuku Bora & <br /> 
              <span className="italic text-farm-rust">Mayai Safi</span> Kila Siku
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg text-farm-earth max-w-lg leading-relaxed">
              Tunajivunia kutoa mazao bora ya kuku yaliyofugwa kwa umakini mkubwa jijini Dar es Salaam. Ubora na afya ndio msingi wa Dojo Farm.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4 pt-4">
              <button className="bg-farm-leaf text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:bg-farm-deep transition-all flex items-center gap-2 group">
                Agiza Sasa 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-transparent border-2 border-farm-leaf text-farm-leaf px-10 py-4 rounded-full font-bold text-lg hover:bg-farm-leaf/5 transition-all">
                Pata Maelezo
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeIn} className="grid grid-cols-3 gap-8 pt-10 border-t border-farm-leaf/10">
              <div>
                <p className="text-3xl font-display text-farm-rust font-normal italic">5,000+</p>
                <p className="text-xs text-farm-earth uppercase font-bold tracking-widest">Kuku / Mwezi</p>
              </div>
              <div>
                <p className="text-3xl font-display text-farm-rust font-normal italic">10k</p>
                <p className="text-xs text-farm-earth uppercase font-bold tracking-widest">Mayai / Siku</p>
              </div>
              <div>
                <p className="text-3xl font-display text-farm-rust font-normal italic">99%</p>
                <p className="text-xs text-farm-earth uppercase font-bold tracking-widest">Wateja Bora</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 grid gap-6"
          >
            {/* Design Sidebar Pattern */}
            <div className="bg-farm-cream p-8 rounded-[2.5rem] border border-farm-sage flex items-start gap-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-3xl">🐔</div>
              <div>
                <h3 className="font-display text-xl text-farm-deep mb-1">Kuku wa Kisasa</h3>
                <p className="text-sm text-farm-earth leading-relaxed">Bora kwa biashara ya nyama na mayai. Afya ya uhakika kwa familia yako.</p>
              </div>
            </div>
            
            <div className="bg-farm-beige p-8 rounded-[2.5rem] border border-farm-beige flex items-start gap-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-3xl">🌿</div>
              <div>
                <h3 className="font-display text-xl text-farm-deep mb-1">Kuku wa Kienyeji</h3>
                <p className="text-sm text-farm-earth leading-relaxed">Ladha halisi ya asili na afya bora. Wamefugwa kiasili kabisa.</p>
              </div>
            </div>

            <div className="bg-farm-sage/20 p-8 rounded-[2.5rem] border border-farm-sage flex items-start gap-5 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-3xl">🥚</div>
              <div className="relative z-10">
                <h3 className="font-display text-xl text-farm-deep mb-1">Mayai Safi</h3>
                <p className="text-sm text-farm-earth leading-relaxed">Uzalishaji wa kila siku kwa bei nafuu. Kila yai linakaguliwa ubora wake.</p>
              </div>
              <Egg className="absolute -right-4 -bottom-4 w-24 h-24 text-farm-rust/10 rotate-12 group-hover:scale-110 transition-transform" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - Themed */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1547050605-2f3699742918?auto=format&fit=crop&q=80&w=1200" 
                  alt="Farm Management" 
                  className="w-full aspect-[4/3] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-farm-sage opacity-20 rounded-[4rem] -z-0 rotate-3" />
            </div>
            
            <div className="order-1 lg:order-2 space-y-8">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-farm-rust">Nguvu ya Dojo Farm</span>
              <h2 className="text-5xl font-display text-farm-deep leading-tight">Uaminifu Na Ubora Ni Nguzo Yetu Kuu</h2>
              <p className="text-farm-earth italic leading-relaxed text-lg border-l-4 border-farm-rust pl-6 py-2">
                "Tunaamini kuwa chakula bora ni haki ya kila mtu, ndio maana tunatumia mchakato wa asili kabisa wa kulisha mifugo yetu."
              </p>
              
              <div className="grid gap-6">
                {[
                  { title: "Usafi wa Hali ya Juu", desc: "Mazingira yetu ni safi masaa 24 kuzuia vimelea." },
                  { title: "Mifumo ya Kisasa", desc: "Tunatumia teknolojia kufuatilia afya ya kila kuku." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="bg-farm-sage p-2 rounded-lg h-fit">
                      <CheckCircle2 className="w-5 h-5 text-farm-leaf" />
                    </div>
                    <div>
                      <h4 className="font-bold text-farm-deep mb-1 uppercase text-xs tracking-widest">{item.title}</h4>
                      <p className="text-sm text-farm-earth">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Themed Footer */}
      <footer className="bg-farm-bg border-t border-farm-beige py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-5 space-y-6">
            <h4 className="font-display text-3xl text-farm-deep">Kuhusu Sisi</h4>
            <p className="text-sm text-farm-earth leading-relaxed max-w-sm">
              Dojo Farm ni mradi wa ufugaji wenye tija unaolenga kuimarisha lishe na uchumi wa familia za Kitanzania kupitia bidhaa za kuku zenye ubora wa hali ya juu. Sisi ni zaidi ya shamba; sisi ni washirika wako katika afya.
            </p>
          </div>
          
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-farm-leaf mb-2">Wasiliana Nasi</h4>
            <p className="text-base text-farm-deep font-display tracking-wide italic">📞 +255 712 345 678</p>
            <p className="text-base text-farm-deep font-display tracking-wide italic">📍 Dar es Salaam, Tanzania</p>
            <p className="text-sm text-farm-earth underline decoration-farm-sage underline-offset-4">dojofarm@gmail.com</p>
          </div>

          <div className="md:col-span-3 text-left md:text-right space-y-4">
            <p className="text-[10px] text-farm-earth font-bold uppercase tracking-[0.3em]">© 2024 DOJO FARM LIMITED</p>
            <div className="flex md:justify-end gap-3">
              <div className="w-10 h-10 bg-farm-leaf rounded-full shadow-inner" />
              <div className="w-10 h-10 bg-farm-deep rounded-full shadow-inner" />
              <div className="w-10 h-10 bg-farm-earth rounded-full shadow-inner" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

