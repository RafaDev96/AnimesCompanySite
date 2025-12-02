import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          targetElement?.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    // Form submission handler
    const form = document.querySelector('form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nameInput = form.querySelector('input[type="text"]') as HTMLInputElement;
        const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement;
        const successMessage = document.getElementById('success-message');

        if (nameInput && emailInput && nameInput.value && emailInput.value) {
          // Simulate API call
          console.log('Form submitted:', { name: nameInput.value, email: emailInput.value });
          
          if (successMessage) {
            successMessage.style.display = 'block';
            successMessage.style.opacity = '1';
            form.reset();
            
            setTimeout(() => {
              successMessage.style.opacity = '0';
              setTimeout(() => {
                successMessage.style.display = 'none';
              }, 300);
            }, 5000);
          }
        }
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0f0518] text-white font-inter overflow-x-hidden selection:bg-[#8b5cf6] selection:text-white">
      {/* Global Styles for this page specifically to ensure pure CSS feel */}
      <style>{`
        :root {
          --primary: #8b5cf6;
          --primary-dark: #7c3aed;
          --secondary: #06b6d4;
          --bg-dark: #0f0518;
          --bg-card: #1a0b2e;
          --text-gray: #9ca3af;
        }
        
        .font-lexend { font-family: 'Lexend', sans-serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
        
        .neon-text {
          text-shadow: 0 0 10px rgba(139, 92, 246, 0.5), 0 0 20px rgba(139, 92, 246, 0.3);
        }
        
        .neon-border {
          box-shadow: 0 0 5px rgba(139, 92, 246, 0.5), inset 0 0 5px rgba(139, 92, 246, 0.2);
        }
        
        .glass-card {
          background: rgba(26, 11, 46, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(139, 92, 246, 0.2);
        }
        
        .hero-gradient {
          background: linear-gradient(180deg, rgba(15, 5, 24, 0) 0%, #0f0518 100%);
        }

        .btn-primary {
          background: linear-gradient(90deg, #8b5cf6, #6d28d9);
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.4);
          transition: all 0.3s ease;
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 25px rgba(139, 92, 246, 0.6);
        }

        .card-hover {
          transition: all 0.3s ease;
        }
        
        .card-hover:hover {
          transform: translateY(-5px);
          border-color: rgba(139, 92, 246, 0.5);
          box-shadow: 0 10px 30px -10px rgba(139, 92, 246, 0.3);
        }
      `}</style>

      {/* HEADER */}
      <header className="fixed w-full top-0 z-50 glass-card border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-cyan-400 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.5)]">
              <span className="font-lexend font-bold text-white text-lg">A</span>
            </div>
            <span className="font-lexend font-bold text-xl tracking-tight text-white">Anime<span className="text-violet-400">Company</span></span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-medium text-gray-300 hover:text-white transition-colors hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">Início</a>
            <a href="#features" className="text-sm font-medium text-gray-300 hover:text-white transition-colors hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">Recursos</a>
            <a href="#plans" className="text-sm font-medium text-gray-300 hover:text-white transition-colors hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">Planos</a>
            <a href="#catalog" className="text-sm font-medium text-gray-300 hover:text-white transition-colors hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">Catálogo</a>
          </nav>

          <a href="#plans" className="hidden md:block px-6 py-2.5 rounded-full text-sm font-bold text-white btn-primary">
            Assinar Agora
          </a>

          {/* Mobile Menu Button (Visual only for this demo) */}
          <button className="md:hidden text-white p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.jpg" 
            alt="Anime Cityscape" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f0518]/80 via-[#0f0518]/40 to-[#0f0518]"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-30"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 backdrop-blur-sm">
            <span className="text-violet-300 text-xs font-bold tracking-wider uppercase">A melhor experiência anime</span>
          </div>
          
          <h1 className="font-lexend font-bold text-5xl md:text-7xl mb-6 leading-tight neon-text">
            Mergulhe no <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Universo Anime</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Assista aos seus animes favoritos em alta definição, sem anúncios e com lançamentos simultâneos com o Japão.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#plans" className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold text-white btn-primary min-w-[200px]">
              Começar Agora
            </a>
            <a href="#catalog" className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold text-white border border-white/20 hover:bg-white/10 transition-all backdrop-blur-sm min-w-[200px]">
              Ver Catálogo
            </a>
          </div>

          {/* Floating Cards Decoration */}
          <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-10 w-64 h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl rotate-[-6deg] opacity-80 hover:opacity-100 transition-opacity duration-500">
            <img src="/images/card-thumb-1.jpg" alt="Anime Thumb" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
              <p className="text-sm font-bold">Fantasy World</p>
              <p className="text-xs text-gray-400">Novos Episódios</p>
            </div>
          </div>
          
          <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-10 w-64 h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl rotate-[6deg] opacity-80 hover:opacity-100 transition-opacity duration-500">
            <img src="/images/card-thumb-2.jpg" alt="Anime Thumb" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
              <p className="text-sm font-bold">Mecha Future</p>
              <p className="text-xs text-gray-400">Temporada Completa</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-24 relative bg-[#0f0518]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-lexend font-bold text-3xl md:text-4xl mb-4">Por Que Escolher a <span className="text-violet-400">Anime Company</span>?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Tecnologia de ponta e paixão por animes reunidos em uma única plataforma.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="glass-card p-8 rounded-2xl card-hover group">
              <div className="w-14 h-14 rounded-xl bg-violet-500/10 flex items-center justify-center mb-6 group-hover:bg-violet-500/20 transition-colors border border-violet-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
              </div>
              <h3 className="font-lexend font-bold text-xl mb-3 text-white">Em Qualquer Lugar</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Assista na TV, computador, tablet ou celular. Sua conta viaja com você.</p>
            </div>

            {/* Feature 2 */}
            <div className="glass-card p-8 rounded-2xl card-hover group">
              <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors border border-cyan-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              </div>
              <h3 className="font-lexend font-bold text-xl mb-3 text-white">Download Offline</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Baixe seus episódios favoritos e assista mesmo sem conexão com a internet.</p>
            </div>

            {/* Feature 3 */}
            <div className="glass-card p-8 rounded-2xl card-hover group">
              <div className="w-14 h-14 rounded-xl bg-pink-500/10 flex items-center justify-center mb-6 group-hover:bg-pink-500/20 transition-colors border border-pink-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f472b6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </div>
              <h3 className="font-lexend font-bold text-xl mb-3 text-white">Perfis Únicos</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Crie perfis personalizados para cada membro da família com avatares exclusivos.</p>
            </div>

            {/* Feature 4 */}
            <div className="glass-card p-8 rounded-2xl card-hover group">
              <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors border border-emerald-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              </div>
              <h3 className="font-lexend font-bold text-xl mb-3 text-white">Lançamentos</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Novos episódios toda semana, simultaneamente com a transmissão no Japão.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PLANS SECTION */}
      <section id="plans" className="py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-1/4 -right-64 w-96 h-96 bg-violet-600/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-lexend font-bold text-3xl md:text-4xl mb-4">Escolha Seu Plano</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Sem contratos, sem taxas extras. Cancele quando quiser.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
            {/* Basic Plan */}
            <div className="glass-card p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-all">
              <h3 className="font-lexend font-bold text-xl text-gray-300 mb-2">Básico</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-sm text-gray-400">R$</span>
                <span className="text-4xl font-bold text-white">19,90</span>
                <span className="text-sm text-gray-400">/mês</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Qualidade HD (720p)
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  1 Tela simultânea
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Catálogo completo (com anúncios)
                </li>
              </ul>
              <button className="w-full py-3 rounded-xl border border-white/20 text-white font-bold text-sm hover:bg-white/5 transition-colors">
                Escolher Básico
              </button>
            </div>

            {/* Premium Plan (Highlighted) */}
            <div className="glass-card p-8 rounded-2xl border-2 border-violet-500 relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(139,92,246,0.15)]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-violet-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                MAIS POPULAR
              </div>
              <h3 className="font-lexend font-bold text-xl text-violet-300 mb-2">Premium</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-sm text-gray-400">R$</span>
                <span className="text-5xl font-bold text-white">34,90</span>
                <span className="text-sm text-gray-400">/mês</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm text-white">
                  <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Qualidade Full HD (1080p)
                </li>
                <li className="flex items-center gap-3 text-sm text-white">
                  <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  2 Telas simultâneas
                </li>
                <li className="flex items-center gap-3 text-sm text-white">
                  <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Sem anúncios
                </li>
                <li className="flex items-center gap-3 text-sm text-white">
                  <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Download offline
                </li>
              </ul>
              <button className="w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-bold text-sm transition-colors shadow-lg shadow-violet-600/20">
                Assinar Premium
              </button>
            </div>

            {/* Family Plan */}
            <div className="glass-card p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-all">
              <h3 className="font-lexend font-bold text-xl text-gray-300 mb-2">Família</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-sm text-gray-400">R$</span>
                <span className="text-4xl font-bold text-white">49,90</span>
                <span className="text-sm text-gray-400">/mês</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Qualidade 4K HDR
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  4 Telas simultâneas
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Sem anúncios
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Controle parental
                </li>
              </ul>
              <button className="w-full py-3 rounded-xl border border-white/20 text-white font-bold text-sm hover:bg-white/5 transition-colors">
                Escolher Família
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="glass-card rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden border border-white/10">
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-violet-500/10 to-transparent pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="font-lexend font-bold text-3xl md:text-4xl mb-4">Fique por dentro das novidades</h2>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto">Receba notificações sobre novos episódios, lançamentos exclusivos e promoções especiais.</p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="text" 
                  placeholder="Seu nome" 
                  className="flex-1 bg-black/30 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors"
                  required
                />
                <input 
                  type="email" 
                  placeholder="Seu melhor email" 
                  className="flex-1 bg-black/30 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors"
                  required
                />
                <button type="submit" className="px-8 py-3 rounded-xl bg-white text-violet-900 font-bold hover:bg-gray-100 transition-colors">
                  Enviar
                </button>
              </form>
              
              <div id="success-message" className="hidden mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 text-sm transition-opacity duration-300">
                Obrigado! Você foi inscrito com sucesso.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0a0310] border-t border-white/5 pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Column 1: Company */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-cyan-400 rounded flex items-center justify-center">
                  <span className="font-lexend font-bold text-white text-xs">A</span>
                </div>
                <span className="font-lexend font-bold text-lg tracking-tight text-white">Anime<span className="text-violet-400">Company</span></span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                A plataforma definitiva para fãs de anime. Assista aos melhores títulos onde e quando quiser.
              </p>
              <span className="text-gray-600 text-xs">© 2025 Anime Company. Todos os direitos reservados.</span>
            </div>

            {/* Column 2: Help */}
            <div>
              <h4 className="font-lexend font-bold text-white mb-6">Ajuda</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li><a href="#" className="hover:text-violet-400 transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">Contato</a></li>
              </ul>
            </div>

            {/* Column 3: Social */}
            <div>
              <h4 className="font-lexend font-bold text-white mb-6">Redes Sociais</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-violet-500 hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-violet-500 hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-violet-500 hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.373c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
