'use client'

import { useState, useEffect } from 'react'
import {
  Flame,
  Wind,
  Layers,
  Box,
  Factory,
} from "lucide-react";
const rows = [
  { icon: Flame, val: "Low-Grade Waste Heat Powered" },
  { icon: Wind, val: "Ultra-Low Pressure Drop Capture" },
  { icon: Layers, val: "Plug-and-Play Modular Scaling" },
  { icon: Box, val: "Permanent Carbon-to-Solid Conversion" },
  { icon: Factory, val: "Zero-Disruption Industrial Retrofit" },
];

const navLinks = ['VICLOCK', 'ADVANTAGES', 'FEATURES', 'FOUNDER']

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* ─── HERO ─── */}
      <header
        className="relative min-h-[100vh] flex flex-col overflow-hidden"
        style={{ fontFamily: 'Arial, sans-serif' }}
      >
        <style>{`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(28px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .anim-1 { animation: fadeUp 0.7s ease 0.2s both; }
          .anim-2 { animation: fadeUp 0.8s ease 0.4s both; }
          .anim-3 { animation: fadeUp 0.8s ease 0.6s both; }

          .nav-link { position: relative; font-family: Arial, sans-serif; }
          .nav-link::after {
            content: '';
            position: absolute;
            bottom: -3px; left: 0;
            width: 0; height: 1px;
            background: #fff;
            transition: width 0.3s;
          }
          .nav-link:hover::after { width: 100%; }
        `}</style>

        {/* Background */}
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url('/image/bg-awal.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        {/* Subtle dark overlay so text is always legible */}
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.3)' }} />

        {/* ── Navbar ── */}
          <nav
          className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between md:justify-center px-6 md:px-16 py-5 transition-all duration-500 ${
            scrolled ? 'bg-black/90 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'
          }`}
          >
          <div className="hidden md:flex items-center gap-10">
            <img src="/image/logo.png" alt="logo" className="w-8 h-8 rounded-xl" />
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="nav-link text-white/60 hover:text-white transition-colors duration-200"
                style={{ fontSize: 11, letterSpacing: '0.25em' }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block w-6 h-[2px] bg-white transition-all duration-300"
                style={{
                  transform:
                    i === 0 && menuOpen ? 'rotate(45deg) translateY(7px)' :
                    i === 2 && menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
                  opacity: i === 1 && menuOpen ? 0 : 1,
                }}
              />
            ))}
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          className="fixed top-[60px] left-0 right-0 z-40 overflow-hidden transition-all duration-300 md:hidden"
          style={{ maxHeight: menuOpen ? 220 : 0 }}
        >
          <div className="bg-black/95 backdrop-blur-md border-b border-white/10 px-8 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-white/60 hover:text-white transition-colors"
                style={{ fontSize: 12, letterSpacing: '0.2em' }}
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* ── Hero copy ── */}
        <div className="relative flex-1 flex items-end pb-24 px-8 sm:px-14 md:px-20 lg:px-32">
          <div className="relative z-10 max-w-2xl">
            <h1 className="anim-2 text-white uppercase font-black text-[44px] sm:text-[60px] md:text-[76px] lg:text-[88px] leading-[0.88]">
              CARBON IS<br />CURRENCY
            </h1>
            <p
              className="anim-3 text-white/55 mt-7 max-w-xl uppercase"
              style={{ fontSize: 13, letterSpacing: '0.15em', lineHeight: 1.9 }}
            >
              Turning emissions into economic power.            
            </p>
            {/* Scroll hint */}
            <div className="anim-3 mt-10 flex items-center gap-3">
              <div className="w-8 h-px bg-white/30" />
              <span className="text-white/30 uppercase" style={{ fontSize: 10, letterSpacing: '0.3em' }}>Scroll to explore</span>
            </div>
          </div>
        </div>
      </header>

      {/* ─── SECTION 2 — Tagline ─── */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: '32vh' }}>
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url('/image/bg-dua.png')`, backgroundSize: 'cover', backgroundPosition: 'center top' }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.65) 100%)' }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-16" style={{ minHeight: '32vh' }}>
          <h2 className="text-white font-black uppercase text-[26px] sm:text-[36px] md:text-[48px] leading-tight">
            PROFIT FROM YOUR POLLUTION.
          </h2>
          <div className="w-14 h-px bg-white/40 my-5" />
          <p
            className="text-white/55 uppercase max-w-md"
            style={{ fontSize: 11, letterSpacing: '0.2em', lineHeight: 2 }}
          >
            Our engine transforms environmental liabilities into new revenue streams.
          </p>
        </div>
        {/* Gradient bawah */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none h-36"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.7))' }}
        />
      </section>

      {/* ─── SECTION 3 — Produk ─── */}
      <section id="viclock" className="relative w-full bg-black overflow-hidden" style={{ minHeight: '100vh' }}>
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-0 px-8 sm:px-14 md:px-20 lg:px-32 py-24 md:min-h-screen">

          {/* Teks */}
          <div className="w-full md:w-5/12 flex flex-col justify-center text-center md:text-left">
            <p className="text-white/30 uppercase mb-4" style={{ fontSize: 11, letterSpacing: '0.3em' }}>Redefining Industry Standards</p>
            <h1 className="anim-2 text-white uppercase font-black text-[40px] sm:text-[54px] md:text-[64px] lg:text-[72px] leading-[0.88]">
              VICLOCK™
            </h1>
            <div className="w-10 h-px bg-white/20 my-6 mx-auto md:mx-0" />
            <p
              className="text-white/40 max-w-sm mx-auto md:mx-0 uppercase"
              style={{ fontSize: 12, letterSpacing: '0.12em', lineHeight: 2 }}
            >
              Built for tomorrow. Cutting emissions today.
            </p>
          </div>

          {/* Video */}
          <div className="w-full md:w-7/12 flex justify-center md:justify-end">
            <video
              className="w-full max-w-[540px] md:max-w-full rounded-xl"
              style={{ boxShadow: '0 32px 64px rgba(0,0,0,0.7)' }}
              autoPlay muted loop playsInline
            >
              <source src="/video/produk1.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
      {/* ─── SECTION 4 — Description ─── */}
      <section
        id="description"
        className="relative w-full bg-white overflow-hidden"
        style={{ minHeight: '100vh' }}
      >
        {/* Header */}
        <div className="pt-20 pb-4 flex flex-col items-center text-center px-6">
          <p
            className="text-black/30 uppercase mb-3"
            style={{ fontSize: 11, letterSpacing: '0.3em' }}
          >
            Pioneering the Next Era
          </p>

          <h1 className="text-black uppercase font-black text-[40px] sm:text-[54px] md:text-[68px] leading-[0.9]">
            Description
          </h1>

          <div className="w-16 h-[2px] bg-black mt-5" />
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-16 px-8 sm:px-14 md:px-20 lg:px-32 pt-14 pb-24">
          
          {/* Gambar */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              className="w-full max-w-[380px] md:max-w-[460px] rounded-xl"
              src="/image/prototipe-putih.png"
              alt="gambar-prototipe"
            />
          </div>

          {/* Deskripsi Kanan */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <div className="max-w-[520px]">

              <h2
                className="text-black font-bold uppercase mb-5"
                style={{ fontSize: 18, letterSpacing: '0.01em' }}
              >
                Modular Carbon Capture. Engineered for Real Industry
              </h2>

              <p
                className="text-black/80 text-justify"
                style={{ fontSize: 14, lineHeight: 1.5 }}
              >
                Industrial decarbonization demands more than just capture—it requires efficiency, integration, and permanence.
                VICLOCK is a modular ICCU platform that combines advanced gas conditioning, low-energy adsorption, and direct carbon locking within a single system.
                
                <br /><br />
                
                Built on a radial-flow moving bed architecture, VICLOCK minimizes pressure drop while maximizing gas–solid contact efficiency.
                The system operates using low-grade waste heat, avoiding the high energy penalties associated with conventional solvent-based technologies,
                where regeneration can consume over 50% of total process energy.
                
                <br /><br />
                
                Rather than treating CO₂ as a waste stream, VICLOCK converts it into stable solid carbonates through integrated mineralization,
                eliminating the need for transport and long-term storage infrastructure.
                Designed as a fully modular platform, VICLOCK scales through parallel deployment, enabling flexible integration across industrial emission points
                while maintaining consistent performance under variable flow conditions.
                
                <br /><br />
                
                From flue gas to fixed carbon, VICLOCK transforms carbon management into a controlled, scalable, and cost-efficient industrial process.
              </p>

            </div>
          </div>
        </div>

        {/* Gradient bawah */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none h-36"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.7))',
          }}
        />
      </section>

      {/* ─── SECTION 5 — Stat Banner ─── */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: '34vh' }}>
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url('/image/gambar-solusi.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'rgba(0,0,0,0.5)' }}
        />

       <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-8 sm:px-14 md:px-20 py-14"
        style={{ minHeight: '34vh' }}
      >
        {/* Teks */}
        <div className="flex flex-col items-center justify-center">
          <h3
            className="text-white font-black uppercase leading-tight"
            style={{ fontSize: 'clamp(18px, 2.8vw, 28px)' }}
          >
            LESS ENERGY LOSS. MORE CLEAN AIR GAIN.
          </h3>
          <p
            className="mt-3 text-white/55 uppercase"
            style={{ fontSize: 11, letterSpacing: '0.2em', lineHeight: 1.9 }}
          >
            Thermal efficiency increased. Emissions intensity decreased.
          </p>
        </div>
      </div>
      </section>

      {/* ─── SECTION 6 — Spesifikasi ─── */}
      <section id="Advantages" className="relative w-full bg-white overflow-hidden" style={{ minHeight: '100vh' }}>
        {/* Header */}
        <div className="pt-20 pb-2 flex flex-col items-center text-center px-6">
          <p className="text-black/30 uppercase mb-3" style={{ fontSize: 11, letterSpacing: '0.3em' }}>The Architecture of Tomorrow</p>
          <h1 className="text-black uppercase font-black text-[40px] sm:text-[54px] md:text-[68px] leading-[0.9]">
            Distinctions
          </h1>
          <div className="w-16 h-[2px] bg-black mt-5" />
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-14 px-8 sm:px-14 md:px-20 lg:px-32 pt-14 pb-24">
          {/* Gambar */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              className="w-full max-w-[380px] md:max-w-[460px] rounded-xl"
              style={{ boxShadow: 'none' }}
              src="/image/prototipe-putih.png"
              alt="gambar-prototipe"
            />
          </div>

          {/* Tabel */}
          <div className="w-full md:w-1/2">
            <table className="w-full" style={{ borderCollapse: 'collapse' }}>
              <tbody>
                {rows.map((row, i) => {
                  const Icon = row.icon;

                  return (
                    <tr
                      key={i}
                      style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}
                      className="hover:bg-black/[0.02] transition"
                    >
                      {/* Kolom kiri (ikon + label) */}
                      <td
                        className="py-5 pr-6 text-black"
                        style={{ fontSize: 16, width: "36%" }}
                      >
                        <div className="flex items-center gap-3">
                          <Icon size={18} strokeWidth={1.5} className="text-black" />
                          {/* <span className="font-semibold">{row.label}</span> */}
                        </div>
                      </td>

                      {/* Kolom kanan */}
                      <td className="py-5 text-black" style={{ fontSize: 16 }}>
                        {row.val}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Gradient bawah */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none h-36"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.7))' }}
        />
      </section>

      {/* ─── SECTION 7 — Stat Banner ─── */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: '34vh' }}>
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url('/image/bg-tiga.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'rgba(0,0,0,0.5)' }}
        />

        <div
          className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-0 px-8 sm:px-14 md:px-20 py-14"
          style={{ minHeight: '34vh' }}
        >
          {/* Angka */}
          <div className="text-white font-black leading-none sm:pr-10 text-center sm:text-right"
            style={{ fontSize: 'clamp(52px, 10vw, 84px)' }}>
            60°C
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-20 bg-white/25" />

          {/* Teks */}
          <div className="sm:pl-10 text-center sm:text-left">
            <h3
              className="text-white font-black uppercase leading-tight"
              style={{ fontSize: 'clamp(18px, 2.8vw, 28px)' }}
            >
              FEWER DEGREES.<br />MORE DOLLARS.
            </h3>
            <p className="mt-3 text-white/55 uppercase" style={{ fontSize: 11, letterSpacing: '0.2em', lineHeight: 1.9 }}>
              60°C instead of 100°C+. Lower energy. Lower cost per ton.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 8 — Fitur ─── */}
      <section id="features" className="relative w-full bg-white overflow-hidden" style={{ minHeight: '110vh' }}>
        <style>{`
          @keyframes ping-dot {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.8); opacity: 0; }
          }
          .dot-ring {
            position: absolute;
            inset: -5px;
            border-radius: 50%;
            border: 1.5px solid #000;
            animation: ping-dot 2s ease-in-out infinite;
          }
          .hotspot-popup {
            opacity: 0;
            pointer-events: none;
            transform: translateY(8px) scale(0.96);
            transition: opacity 0.22s ease, transform 0.22s ease;
          }
          .hotspot:hover .hotspot-popup {
            opacity: 1;
            pointer-events: auto;
            transform: translateY(0) scale(1);
          }
          .popup-card {
            background: #fff;
            border-radius: 14px;
            width: 400px;
            overflow: hidden;
            box-shadow: 0 10px 36px rgba(0,0,0,0.16), 0 1px 4px rgba(0,0,0,0.06);
            border: 1px solid rgba(0,0,0,0.06);
          }
          .popup-img {
            width: 150%;
            height: 150px;
            object-fit: contain;
            display: block;
            background: #f4f4f4;
          }
          .popup-body {
            padding: 11px 13px 13px;
          }
          .popup-tag {
            display: inline-block;
            font-size: 9px;
            font-weight: 700;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            background: #111;
            color: #fff;
            border-radius: 4px;
            padding: 2px 7px;
            margin-bottom: 6px;
          }
          .popup-title {
            font-size: 12px;
            font-weight: 800;
            color: #111;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            margin: 0 0 5px;
            font-family: Arial, sans-serif;
          }
          .popup-desc {
            font-size: 11px;
            color: #777;
            line-height: 1.65;
            margin: 0;
            font-family: Arial, sans-serif;
          }
        `}</style>

        <div className="flex flex-col items-center px-8 sm:px-14 md:px-20 lg:px-32 pt-20 pb-24 min-h-screen">

          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16">
            <p className="text-black/30 uppercase mb-3" style={{ fontSize: 11, letterSpacing: '0.3em' }}>The Catalyst of Innovation</p>
            <h1 className="text-black uppercase font-black text-[40px] sm:text-[54px] md:text-[68px] leading-[0.9]">
              FEATURES
            </h1>
            <div className="w-16 h-[2px] bg-black mt-5" />
          </div>

          {/* Gambar + Dots */}
          <div className="flex-1 flex items-center justify-center w-full">
            <div className="relative inline-block w-full max-w-[340px] sm:max-w-[460px] md:max-w-[540px]">
              <img
                className="w-full rounded-xl"
                src="/image/prototipe-putih.png"
                alt="gambar-prototipe"
              />

              {/* ── Dot 1 — kiri atas, popup ke kanan ── */}
              <div className="hotspot absolute" style={{ left: '28%', top: '30%' }}>
                <div className="relative w-4 h-4 -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                  <div className="dot-ring" />
                  <div className="w-4 h-4 rounded-full bg-black flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>
                </div>
                <div
                  className="hotspot-popup absolute z-30"
                  style={{ left: 22, top: -10 }}
                >
                  <div className="popup-card">
                    <img
                      className="popup-img"
                      src="/image/alat-1.png"
                      alt="Fitur 1"
                    />
                    <div className="popup-body">
                      <span className="popup-tag">Front-End Gas Conditioning Tower</span>
                      <p className="popup-title">Optimizing Flue Gas for High-Efficiency Capture</p>
                      <p className="popup-desc">
                        This module prepares industrial flue gas for optimal carbon capture by rapidly cooling, cleaning, and stabilizing the stream. 
                        It removes particulates and corrosive gases such as SO₂ while reducing temperature to the ideal range for adsorption. 
                        By delivering a clean and controlled gas input, it significantly improves capture efficiency, protects downstream systems, and ensures long-term operational reliability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Dot 2 — kanan tengah, popup ke kiri ── */}
              <div className="hotspot absolute" style={{ left: '50%', top: '44%' }}>
                <div className="relative w-4 h-4 -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                  <div className="dot-ring" style={{ animationDelay: '0.7s' }} />
                  <div className="w-4 h-4 rounded-full bg-black flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>
                </div>
                <div
                  className="hotspot-popup absolute z-30"
                  style={{ right: 22, top: -10 }}
                >
                  <div className="popup-card">
                    <img
                      className="popup-img"
                      src="/image/alat-2.png"
                      alt="Fitur 2"
                    />
                    <div className="popup-body">
                      <span className="popup-tag">RFMB CO₂ Capture Reactor</span>
                      <p className="popup-title">Low-Energy, Continuous Carbon Capture Core</p>
                     <p className="popup-desc">
                      The Radial-Flow Moving Bed (RFMB) reactor serves as the primary capture unit in the VICLOCK system, designed to remove CO₂ from flue gas using advanced Viciazites adsorbent in a continuous, gravity-driven process. 
                      Its radial-flow configuration minimizes pressure drop, reducing the energy required for gas handling, while adsorbent regeneration is achieved using low-grade waste heat instead of high-temperature steam.
                      <br /><br />
                      This approach enables a more compact system design, lowers operational energy consumption, and simplifies integration into existing industrial facilities compared to conventional solvent-based technologies.
                    </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Dot 3 — tengah, popup ke atas ── */}
              <div className="hotspot absolute" style={{ left: '75%', top: '70%' }}>
                <div className="relative w-4 h-4 -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                  <div className="dot-ring" style={{ animationDelay: '1.4s' }} />
                  <div className="w-4 h-4 rounded-full bg-black flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>
                </div>
                <div
                  className="hotspot-popup absolute z-30"
                  style={{ bottom: 22, left: '50%', transform: 'translateX(-50%)' }}
                >
                  <div className="popup-card">
                    <img
                      className="popup-img"
                      src="/image/alat-3.png"
                      alt="Fitur 3"
                    />
                    <div className="popup-body">
                      <span className="popup-tag">Adaptive Carbon Locking Reactor</span>
                      <p className="popup-title">Turning CO₂ into Permanent, Valuable Materials</p>
                      <p className="popup-desc">
                        This module converts captured CO₂ into stable carbonated solids through mineralization with industrial residues such as slag. 
                        The process permanently locks carbon without requiring costly storage or transport infrastructure, 
                        while simultaneously valorizing industrial waste into usable materials. 
                        It transforms carbon capture from a cost center into a circular, value-generating pathway. 
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none h-36"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.7))' }}
          />
        </div>
      </section>

      {/* ─── SECTION 9 — Quote ─── */}
      <section className="relative w-full bg-black overflow-hidden" style={{ minHeight: '100vh' }}>
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "url('/image/bulan.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.48)' }} />

        <div className="relative z-10 flex items-center px-8 sm:px-14 md:px-20 lg:px-32 py-24 min-h-screen">
          <div className="max-w-2xl">
            <div className="w-8 h-px bg-white/30 mb-8" />
            <h1 className="text-white uppercase font-black text-[32px] sm:text-[48px] md:text-[60px] lg:text-[70px] leading-[0.92]">
              THE EARTH<br />DOESN&apos;T NEED<br />APOLOGIES
            </h1>
            <p
              className="text-white/40 mt-8 max-w-sm uppercase"
              style={{ fontSize: 13, letterSpacing: '0.15em', lineHeight: 2 }}
            >
              It needs engineering. And now, it has both.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SECTION 10 — Founder ─── */}
      <section
        id="founder"
        className="relative w-full bg-[#f5f5f5] px-8 sm:px-14 md:px-20 lg:px-28 pt-24 pb-24"
      >
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <p className="text-black/30 uppercase mb-3" style={{ fontSize: 11, letterSpacing: '0.3em' }}>Behind the Future Mind</p>
          <h1 className="text-black uppercase font-black text-[48px] sm:text-[64px] md:text-[76px] leading-[0.9]">
            FOUNDER
          </h1>
          <div className="w-16 h-px bg-black/25 mt-5" />
        </div>

        {/* Grid */}
        <div className="max-w-5xl mx-auto">

          {/* ROW 1 */}
          <div className="flex justify-center mb-px">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-black/10 max-w-2xl w-full">
              {[
                {
                  name: 'Naohide Kiyosawa',
                  desc: 'Mechanical Engineering',
                  role: 'Manufacturing Lead',
                  image: '/image/nao-jaz.png',
                },
                {
                  name: 'Ivo Albert Gabriel',
                  desc: 'Mechanical Engineering',
                  role: 'Mechanical Designer',
                  image: '/image/ivo-jaz.png',
                },
              ].map((p, i) => (
                <div
                  key={i}
                  className="bg-[#f5f5f5] p-8 flex flex-col gap-5 group
                  hover:bg-black transition-colors duration-300"
                >
                  {/* FOTO */}
                  <div className="aspect-square rounded-lg overflow-hidden group-hover:scale-[1.03] transition-transform duration-300">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                  </div>

                  {/* TEXT */}
                  <div>
                    <p className="font-semibold text-black group-hover:text-white text-sm tracking-wide transition-colors duration-300">
                      {p.name}
                    </p>
                    <p className="text-black/40 group-hover:text-white/50 text-xs mt-1 tracking-wide transition-colors duration-300">
                      {p.desc}
                    </p>
                    <p className="text-pink-500 text-xs mt-2 tracking-wide">
                      {p.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-black/10">
          {[
            {
              name: 'Muhammad Shakil Fattan',
              desc: 'Industrial Engineering',
              role: 'Industrial Analyst',
              image: '/image/fatan-jaz.png',
            },
            {
              name: 'Ananda Krishna Murti',
              desc: 'Accounting',
              role: 'Finance and Market Analyst',
              image: '/image/nanda.jpeg',
            },
            {
              name: 'Sendi Seniora',
              desc: 'Software Engineering',
              role: 'Fullstack Developer',
              image: '/image/sendi-jaz.png',
            },
          ].map((p, i) => (
            <div
              key={i}
              className="bg-[#f5f5f5] p-8 flex flex-col gap-5 group cursor-default
              hover:bg-black transition-colors duration-300"
            >
              {/* FOTO */}
              <div className="w-full aspect-square rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-[1.03]">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* TEXT */}
              <div>
                <p className="font-semibold text-black group-hover:text-white text-sm tracking-wide transition-colors duration-300">
                  {p.name}
                </p>
                <p className="text-black/40 group-hover:text-white/50 text-xs mt-1 tracking-wide transition-colors duration-300">
                  {p.desc}
                </p>
                <p className="text-pink-500 text-xs mt-2 tracking-wide">{p.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Header (DOSPEM) */}
        <div className="flex flex-col items-center text-center mt-20 mb-20">
          <p className="text-black/30 uppercase mb-3" style={{ fontSize: 11, letterSpacing: '0.3em' }}>Behind the Future Mind</p>
          <h1 className="text-black uppercase font-black text-[48px] sm:text-[64px] md:text-[76px] leading-[0.9]">
            AdVISOR
          </h1>
          <div className="w-16 h-px bg-black/25 mt-5" />
        </div>
        <div className="max-w-5xl mx-auto">

          {/* ROW 3 */}
          <div className="grid grid-cols-3 gap-px bg-black/10 mb-px">
            <div className="col-span-3 flex justify-center bg-[#f5f5f5] gap-px">
              {[
                {
                  name: 'Dr. Akmal Irfan Majid, S.T., M.Eng.',
                  role: 'Professional Advisor',
                  image: '/image/MAJID.jpeg',
                },
              ].map((p, i) => (
                <div
                  key={i}
                  className="w-full sm:w-1/3 bg-[#f5f5f5] p-8 flex flex-col gap-5 group cursor-default
                  hover:bg-black transition-colors duration-300"
                >
                  {/* FOTO */}
                  <div className="w-full aspect-square rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-[1.03]">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* TEXT */}
                  <div>
                    <p className="font-semibold text-black group-hover:text-white text-sm tracking-wide transition-colors duration-300">
                      {p.name}
                    </p>
                    <p className="text-pink-500 text-xs mt-2 tracking-wide">
                      {p.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="w-full bg-black text-white px-8 sm:px-14 md:px-20 py-24">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-4">
          <div className="w-px h-16 bg-white/20 mb-4" />
          <p className="text-white/30 uppercase" style={{ fontSize: 10, letterSpacing: '0.3em' }}>
            For more information about us and our technology, please reach out to us at:
          </p>
          <a
            className="text-white/70 hover:text-white transition-colors"
            style={{ fontSize: 13, letterSpacing: '0.15em' }}
          >
            viclockrenewable@gmail.com
          </a>
          <a
            href="mailto:viclockrenewable@gmail.com"
            className="mt-3 border border-white/25 hover:border-white/70 hover:bg-white hover:text-black px-8 py-3 uppercase transition-all duration-300 inline-block"
            style={{ fontSize: 10, letterSpacing: '0.3em' }}
          >
            Contact Us
          </a>
        </div>

        <div className="mt-20 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto">
          <span className="text-white/20" style={{ fontSize: 11 }}>© 2026</span>
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-white/20 hover:text-white/60 transition-colors"
                style={{ fontSize: 10, letterSpacing: '0.2em' }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  )
}