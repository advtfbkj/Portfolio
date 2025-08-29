import React, { useRef, useState, Suspense } from "react"; import { Canvas, useFrame } from "@react-three/fiber"; import { OrbitControls, Float, Html, Text } from "@react-three/drei"; import { motion } from "framer-motion"; import { Code2, Database, Mail, Github, Download } from "lucide-react";

function RotatingCube({ onClick }) { const ref = useRef(); const [hovered, setHovered] = useState(false); useFrame((state, delta) => { ref.current.rotation.x += delta * 0.3; ref.current.rotation.y += delta * 0.45; }); return ( <Float speed={1} rotationIntensity={1} floatIntensity={1.5}> <mesh ref={ref} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)} onClick={onClick} castShadow receiveShadow > <boxGeometry args={[2.4, 2.4, 2.4]} /> <meshStandardMaterial color={hovered ? "#22d3ee" : "#7c3aed"} metalness={0.2} roughness={0.3} /> {/* Front label */} <Html center occlude> <div className="px-3 py-1 rounded-full text-xs md:text-sm font-semibold bg-white/80 backdrop-blur text-gray-900 shadow"> Bank Management System </div> </Html> </mesh> </Float> ); }

function FloatingBadge({ icon: Icon, label }) { return ( <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur shadow border border-white/60"> <Icon className="w-4 h-4" /> <span className="text-sm font-medium">{label}</span> </div> ); }

function Scene3D() { const [clicked, setClicked] = useState(false); return ( <Canvas shadows camera={{ position: [4, 3, 6], fov: 45 }}> <ambientLight intensity={0.6} /> <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow /> <Suspense fallback={null}> <group> <RotatingCube onClick={() => setClicked((v) => !v)} /> {/* A little accent ring /} <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.8}> <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}> <torusGeometry args={[3.6, 0.04, 16, 100]} /> <meshStandardMaterial color="#a78bfa" metalness={0.5} roughness={0.2} /> </mesh> </Float> {/ Name in 3D space */} <Float speed={1.1}> <Text position={[0, 2.8, 0]} fontSize={0.5} color="#ffffff" anchorX="center" anchorY="middle" outlineWidth={0.008} outlineColor="#000000" > Rohit Chand </Text> </Float> </group> </Suspense> <OrbitControls enableZoom={false} /> </Canvas> ); }

export default function Portfolio3D() { return ( <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-indigo-900 to-cyan-800 text-white"> <div className="max-w-6xl mx-auto px-4 py-8 md:py-12"> {/* Header */} <header className="flex items-center justify-between"> <div className="flex items-center gap-3"> <div className="h-10 w-10 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center shadow-inner"> <Code2 className="h-6 w-6" /> </div> <div> <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Rohit Chand</h1> <p className="text-sm md:text-base text-white/80">C & Python Developer</p> </div> </div> <div className="flex items-center gap-2"> <a href="#projects" className="px-4 py-2 rounded-2xl bg-white/15 hover:bg-white/25 transition shadow">Projects</a> <a href="#contact" className="px-4 py-2 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold transition shadow">Contact</a> </div> </header>

{/* Hero */}
    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mt-8 md:mt-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-5"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Building robust <span className="text-cyan-300">systems</span> with
          <span className="text-indigo-300"> C</span> & <span className="text-indigo-300">Python</span>
        </h2>
        <p className="text-white/85">
          I create efficient console and file‑driven applications. My featured project is a
          <span className="font-semibold"> Bank Management System</span> focusing on secure storage, transactions,
          and clean architecture.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <FloatingBadge icon={Code2} label="C" />
          <FloatingBadge icon={Code2} label="Python" />
          <FloatingBadge icon={Database} label="File Handling" />
        </div>
        <div className="flex items-center gap-3 pt-1">
          <a href="#projects" className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white text-slate-900 font-semibold shadow hover:shadow-lg transition">
            <Github className="w-4 h-4" /> View Work
          </a>
          <a href="#resume" className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-white/40 hover:bg-white/10 transition">
            <Download className="w-4 h-4" /> Resume
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="h-[380px] md:h-[480px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black/30"
      >
        <Scene3D />
      </motion.div>
    </div>

    {/* Projects */}
    <section id="projects" className="mt-14 md:mt-20">
      <h3 className="text-xl md:text-2xl font-bold mb-4">Featured Project</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-5 shadow">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h4 className="text-lg md:text-xl font-semibold">Bank Management System</h4>
              <p className="text-sm text-white/80">Secure account handling, deposits/withdrawals, transaction history, and file-based persistence.</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 text-xs rounded-full bg-white/15">C</span>
              <span className="px-2 py-1 text-xs rounded-full bg-white/15">Python</span>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <a href="#" className="block rounded-2xl bg-white text-slate-900 font-medium px-4 py-2 text-center hover:shadow-lg transition">Source</a>
            <a href="#" className="block rounded-2xl bg-cyan-400 text-slate-900 font-semibold px-4 py-2 text-center hover:bg-cyan-300 transition">Live Demo</a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-5 shadow">
          <h4 className="text-lg md:text-xl font-semibold">Skills Snapshot</h4>
          <ul className="mt-2 space-y-2 text-white/85">
            <li>• Algorithms and data structures for efficient operations</li>
            <li>• File I/O, pointers, and memory safety in C</li>
            <li>• Modular design and error handling in Python</li>
            <li>• Clean CLI UX and structured logging</li>
          </ul>
        </div>
      </div>
    </section>

    {/* Contact */}
    <section id="contact" className="mt-14 md:mt-20">
      <h3 className="text-xl md:text-2xl font-bold mb-4">Get in touch</h3>
      <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-5 shadow">
        <p className="text-white/85">Want the code or a customized build? Drop a note:</p>
        <form className="mt-4 grid md:grid-cols-3 gap-3">
          <input className="px-4 py-2 rounded-2xl bg-white/90 text-slate-900 placeholder:text-slate-500" placeholder="Your name" />
          <input className="px-4 py-2 rounded-2xl bg-white/90 text-slate-900 placeholder:text-slate-500" placeholder="Email" />
          <button type="button" className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-2xl bg-indigo-400 text-slate-900 font-semibold hover:bg-indigo-300 transition">
            <Mail className="w-4 h-4" /> Send
          </button>
        </form>
      </div>
    </section>

    {/* Footer */}
    <footer className="py-8 text-center text-white/60">
      © {new Date().getFullYear()} Rohit Chand · Built with React, Tailwind, and @react-three/fiber
    </footer>
  </div>
</div>

); }

  
