import React, { useState } from 'react';
import { 
  Sparkles, 
  MessageCircle, 
  ShieldCheck, 
  Users, 
  HeartHandshake, 
  Check, 
  Clock, 
  Calendar, 
  MapPin, 
  Phone, 
  Send, 
  Menu, 
  X,
  Sun,
  Heart,
  Palette,
  BookOpen,
  FlaskConical,
  UtensilsCrossed,
  Music,
  Moon
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '2 a 3 años',
    message: ''
  });

  const handleConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#0E9B97', '#F37023', '#FDB813', '#E93F78', '#48B749', '#745296']
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleConfetti();
    const textMsg = `¡Hola Maria Fernanda! Mi nombre es ${formData.parentName}. Deseo información e inscribir a mi peque ${formData.childName} (${formData.childAge}) a Hora de Aventura. ${formData.message ? `Comentario adicional: ${formData.message}` : ''}`;
    const whatsappUrl = `https://wa.me/57310406167?text=${encodeURIComponent(textMsg)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="landing-app">
      {/* Top Banner */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <span>🎒 <strong>Inscripciones abiertas:</strong> Cupos limitados para grupos pequeños</span>
          <a 
            href="https://wa.me/57310406167?text=Hola%20Maria%20Fernanda,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Hora%20de%20Aventura" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="top-link"
          >
            <MessageCircle size={15} /> WhatsApp Directo
          </a>
        </div>
      </div>

      {/* Navigation Bar */}
      <header className="navbar">
        <div className="container nav-container">
          <a href="#" className="logo-container">
            <div className="logo-compass-wrap">
              <span className="logo-compass-emoji">🧭</span>
            </div>
            <div className="logo-text-group">
              <div className="logo-title">
                <span className="logo-h">H</span>
                <span className="logo-o">O</span>
                <span className="logo-r">R</span>
                <span className="logo-a">A</span>
                <span className="logo-de">de</span>
                <span className="logo-aventura">AVENTURA</span>
              </div>
              <span className="logo-tagline">Jugar • Crear • Explorar • Crecer</span>
            </div>
          </a>

          <nav className={`nav-links ${mobileMenuOpen ? 'nav-open' : ''}`}>
            <a href="#actividades" onClick={() => setMobileMenuOpen(false)}>¿Qué Hacemos?</a>
            <a href="#sesion" onClick={() => setMobileMenuOpen(false)}>Estructura</a>
            <a href="#edades" onClick={() => setMobileMenuOpen(false)}>Edades</a>
            <a href="#semana" onClick={() => setMobileMenuOpen(false)}>Programación</a>
            <a href="#beneficios" onClick={() => setMobileMenuOpen(false)}>Beneficios</a>
            <a 
              href="#contacto" 
              className="nav-btn-cta" 
              onClick={() => {
                setMobileMenuOpen(false);
                handleConfetti();
              }}
            >
              <Sparkles size={16} /> ¡Inscribir a mi peque!
            </a>
          </nav>

          <button 
            className="mobile-toggle-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menú"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-wrapper">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles size={16} /> Experiencias Mágicas de 4:00 a 6:00 PM
            </div>

            <div className="hero-banner-sub">
              DOS HORAS PARA JUGAR, CREAR, EXPLORAR Y CRECER
            </div>

            <h1 className="hero-title">
              ¡El lugar favorito de tu hijo para <br />
              <span className="word-jugar">Jugar</span>, {' '}
              <span className="word-crear">Crear</span>, {' '}
              <span className="word-explorar">Explorar</span> y {' '}
              <span className="word-crecer">Crecer</span>!
            </h1>

            <p className="hero-desc">
              Un espacio mágico, cálido y seguro donde los niños viven experiencias divertidas y profundamente significativas a través del juego, el arte, la literatura y la exploración.
            </p>

            {/* Poste de flechas direccionales de madera fiel a la foto */}
            <div className="signpost-area">
              <div className="signpost-wood">
                <div className="signpost-pole"></div>
                <div className="sign-arrow sign-jugar">JUGAR</div>
                <div className="sign-arrow sign-crear">CREAR</div>
                <div className="sign-arrow sign-explorar">EXPLORAR</div>
                <div className="sign-arrow sign-crecer">CRECER</div>
                <div className="sign-grass-base">🌱💖🌱</div>
              </div>

              <div className="signpost-quote-box">
                <p>
                  «En Hora de Aventura no venimos solamente a pasar la tarde... ¡venimos a vivir una aventura!»
                </p>
              </div>
            </div>

            <div className="hero-cta-buttons">
              <a 
                href="https://wa.me/57310406167?text=Hola%20Maria%20Fernanda,%20quiero%20apartar%20un%20cupo%20para%20Hora%20de%20Aventura" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-main-whatsapp"
                onClick={handleConfetti}
              >
                <MessageCircle size={22} /> ¡Apartar Cupo con Mafe!
              </a>
              <a href="#contacto" className="btn-secondary-action">
                <Phone size={18} /> Ver Contacto
              </a>
            </div>

            <div className="hero-trust-row">
              <div className="trust-chip">
                <ShieldCheck size={20} color="#0E9B97" />
                <span>Espacio Seguro</span>
              </div>
              <div className="trust-chip">
                <Users size={20} color="#E93F78" />
                <span>Grupos Pequeños</span>
              </div>
              <div className="trust-chip">
                <HeartHandshake size={20} color="#FDB813" />
                <span>Atención Personalizada</span>
              </div>
            </div>
          </div>

          {/* Tarjeta de Precio del Hero ($15.000) */}
          <div className="hero-price-col">
            <div className="price-card-vibrant">
              <div className="card-top-tag">
                <span className="tag-label-precio">PRECIO ESPECIAL</span>
                <span className="super-plan-pill">⭐ PLAN COMPLETO</span>
              </div>

              <div className="big-price-row">
                <span className="curr">$</span>
                <span className="amount">15.000</span>
              </div>
              <div className="price-subtitle-kid">POR NIÑO / SESIÓN DE 2 HORAS</div>

              <div className="includes-block">
                <span className="includes-block-title">INCLUYE TODO:</span>
                <ul className="includes-list-items">
                  <li>
                    <span className="chk-badge"><Check size={14} /></span>
                    2 horas de actividades guiadas y pedagógicas
                  </li>
                  <li>
                    <span className="chk-badge"><Check size={14} /></span>
                    Todos los materiales básicos incluidos
                  </li>
                  <li>
                    <span className="chk-badge"><Check size={14} /></span>
                    Acompañamiento pedagógico y afectivo
                  </li>
                  <li>
                    <span className="chk-badge"><Check size={14} /></span>
                    Experiencias de juego, arte, literatura y exploración
                  </li>
                  <li>
                    <span className="chk-badge"><Check size={14} /></span>
                    Actividad de cierre y regulación emocional
                  </li>
                </ul>
              </div>

              <a 
                href="https://wa.me/57310406167?text=Hola%20Maria%20Fernanda,%20quiero%20reservar%20por%20$15.000%20para%20Hora%20de%20Aventura" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="card-action-btn"
                onClick={handleConfetti}
              >
                <Sparkles size={18} /> ¡Reservar por $15.000!
              </a>
              <p className="card-micro-hint">Cupos estrictamente reducidos para cuidar cada detalle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pilares Fundamentales */}
      <section className="pillars-section">
        <div className="container">
          <div className="pillars-grid">
            <div className="pillar-item pillar-blue">
              <div className="pillar-icon-box">
                <ShieldCheck size={32} />
              </div>
              <h3>ESPACIO SEGURO</h3>
              <p>Ambiente cálido, seguro y adecuado especialmente para los niños.</p>
            </div>

            <div className="pillar-item pillar-green">
              <div className="pillar-icon-box">
                <Users size={32} />
              </div>
              <h3>GRUPOS PEQUEÑOS</h3>
              <p>Atención personalizada, cuidada y respetuosa para cada niño.</p>
            </div>

            <div className="pillar-item pillar-pink">
              <div className="pillar-icon-box">
                <Heart size={32} />
              </div>
              <h3>DESARROLLO INTEGRAL</h3>
              <p>Estimula habilidades cognitivas, emocionales, sociales y motoras.</p>
            </div>

            <div className="pillar-item pillar-yellow">
              <div className="pillar-icon-box">
                <Sparkles size={32} />
              </div>
              <h3>EXPERIENCIAS ÚNICAS</h3>
              <p>Cada día una aventura diferente para aprender y divertirse.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Qué hacemos en Hora de Aventura? */}
      <section className="activities-section" id="actividades">
        <div className="container">
          <div className="section-header">
            <span className="section-pill-tag">EXPLORACIÓN SENSORIAL</span>
            <h2 className="section-main-title">¿Qué hacemos en <span>Hora de Aventura?</span></h2>
            <p className="section-intro-text">
              Propuestas diseñadas para estimular la curiosidad innata de tu hijo en cada momento.
            </p>
          </div>

          <div className="activities-grid">
            {/* Arte */}
            <div className="activity-card card-arte">
              <div className="act-avatar">🎨</div>
              <div className="act-info">
                <h3>ARTE</h3>
                <p>Pintura, dibujo, modelado, collage, estampado, manualidades y arte sensorial.</p>
              </div>
            </div>

            {/* Juego */}
            <div className="activity-card card-juego">
              <div className="act-avatar">🧸</div>
              <div className="act-info">
                <h3>JUEGO</h3>
                <p>Juego simbólico, juegos cooperativos, circuitos, juegos tradicionales y retos divertidos.</p>
              </div>
            </div>

            {/* Literatura */}
            <div className="activity-card card-literatura">
              <div className="act-avatar">📖</div>
              <div className="act-info">
                <h3>LITERATURA</h3>
                <p>Cuentos, títeres, dramatizaciones, canciones, creación de personajes y narraciones.</p>
              </div>
            </div>

            {/* Exploración del Medio */}
            <div className="activity-card card-exploracion">
              <div className="act-avatar">🌱</div>
              <div className="act-info">
                <h3>EXPLORACIÓN DEL MEDIO</h3>
                <p>Experimentos, naturaleza, agua, arena, animales, semillas y texturas.</p>
              </div>
            </div>

            {/* Música y Movimiento */}
            <div className="activity-card card-musica">
              <div className="act-avatar">🎵</div>
              <div className="act-info">
                <h3>MÚSICA Y MOVIMIENTO</h3>
                <p>Baile, canciones, instrumentos, percusión, expresión corporal y coordinación.</p>
              </div>
            </div>

            {/* Relajación y Regulación */}
            <div className="activity-card card-relajacion">
              <div className="act-avatar">🌙</div>
              <div className="act-info">
                <h3>RELAJACIÓN Y REGULACIÓN</h3>
                <p>Cuentos de relajación, respiración infantil, estiramientos, música suave y reconocimiento de emociones.</p>
                <span className="act-footer-tag">Favorece rutinas y transición hacia el descanso 💖</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estructura de la Sesión (2 Horas) & Horario */}
      <section className="session-section" id="sesion">
        <div className="container">
          <div className="session-layout">
            {/* Estructura */}
            <div className="structure-panel">
              <div className="structure-title-row">
                <div className="st-icon">
                  <Clock size={28} />
                </div>
                <div>
                  <h3>ESTRUCTURA DE LA SESIÓN</h3>
                  <span>2 HORAS DE ACTIVIDADES INTEGRALES</span>
                </div>
              </div>

              <div className="timeline-flow">
                <div className="flow-step">
                  <div className="step-time-pill bg-t-pink">15 min</div>
                  <div className="step-desc">
                    <h4>Bienvenida y juego de integración</h4>
                    <p>Recepción amorosa, dinámicas de bienvenida y conexión grupal.</p>
                  </div>
                </div>

                <div className="flow-step">
                  <div className="step-time-pill bg-t-green">25 min</div>
                  <div className="step-desc">
                    <h4>Literatura</h4>
                    <p>Cuentos vivos, títeres, dramatización y animación lectora.</p>
                  </div>
                </div>

                <div className="flow-step">
                  <div className="step-time-pill bg-t-purple">35 min</div>
                  <div className="step-desc">
                    <h4>Arte o experiencia sensorial</h4>
                    <p>Pintura, modelado, textura y creación libre guiada.</p>
                  </div>
                </div>

                <div className="flow-step">
                  <div className="step-time-pill bg-t-teal">25 min</div>
                  <div className="step-desc">
                    <h4>Exploración del medio / juego</h4>
                    <p>Circuitos dinámicos, experimentos científicos y juegos cooperativos.</p>
                  </div>
                </div>

                <div className="flow-step">
                  <div className="step-time-pill bg-t-orange">10 min</div>
                  <div className="step-desc">
                    <h4>Música y movimiento</h4>
                    <p>Ritmo, rondas musicales, expresión corporal y coordinación.</p>
                  </div>
                </div>

                <div className="flow-step">
                  <div className="step-time-pill bg-t-blue">10 min</div>
                  <div className="step-desc">
                    <h4>Relajación y cierre</h4>
                    <p>Regulación respiratoria, mindfulness infantil y despedida cálida.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Horario */}
            <div className="schedule-panel">
              <div className="schedule-card-pink">
                <div className="sched-header">HORARIO</div>
                <div className="sched-body">
                  <div className="clock-huge">
                    <div className="clock-icon-symbol">🕒</div>
                    <div className="clock-details">
                      <span className="clock-hours">4:00 a 6:00</span>
                      <span className="clock-sub">DE LA TARDE</span>
                    </div>
                  </div>

                  <p className="sched-motto">
                    ⭐ Dos horas llenas de experiencias para jugar, crear, explorar y crecer.
                  </p>

                  <div className="sched-magic-quote">
                    <p>«¡En Hora de Aventura no venimos solamente a pasar la tarde... venimos a vivir una aventura!»</p>
                    <span className="quote-foot">✨ Experiencias diferentes a las pantallas ✨</span>
                  </div>

                  <a 
                    href="https://wa.me/57310406167?text=Hola%20Maria%20Fernanda,%20quiero%20reservar%20el%20horario%20de%204:00%20a%206:00%20PM" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="card-action-btn"
                    onClick={handleConfetti}
                  >
                    <Calendar size={18} /> Reservar Horario de la Tarde
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Edades y Grupos */}
      <section className="groups-section" id="edades">
        <div className="container">
          <div className="section-header">
            <span className="section-pill-tag">GRUPOS ADAPTADOS</span>
            <h2 className="section-main-title">Edades y <span>Grupos</span></h2>
            <p className="section-intro-text">Cada etapa tiene necesidades y ritmos propios.</p>
          </div>

          <div className="groups-grid">
            {/* 2 a 3 años */}
            <div className="group-card group-small">
              <div className="group-avatar-wrap">👶</div>
              <span className="group-age-pill">2 a 3 años</span>
              <h3>Aventureros pequeños</h3>
              <p className="group-desc">
                Desarrollo psicomotriz temprano, juego sensorial con texturas, primeras interacciones sociales y estimulación del lenguaje a través de canciones y cuentos.
              </p>
              <ul className="group-bullet-list">
                <li><Check size={14} color="#F37023" /> Acompañamiento continuo y amoroso</li>
                <li><Check size={14} color="#F37023" /> Estimulación del lenguaje</li>
                <li><Check size={14} color="#F37023" /> Juego sensorial seguro</li>
              </ul>
            </div>

            {/* 4 a 5 años */}
            <div className="group-card group-mid">
              <div className="group-avatar-wrap">👦</div>
              <span className="group-age-pill">4 a 5 años</span>
              <h3>Aventureros</h3>
              <p className="group-desc">
                Juego simbólico colaborativo, exploración creativa con pintura y modelado, curiosidad científica elemental y desarrollo de autonomía e imaginación.
              </p>
              <ul className="group-bullet-list">
                <li><Check size={14} color="#48B749" /> Fomento de la autonomía</li>
                <li><Check size={14} color="#48B749" /> Proyectos artísticos guiados</li>
                <li><Check size={14} color="#48B749" /> Socialización y empatía</li>
              </ul>
            </div>

            {/* 6 a 7 años */}
            <div className="group-card group-big">
              <div className="group-avatar-wrap">🧒</div>
              <span className="group-age-pill">6 a 7 años</span>
              <h3>Grandes aventureros</h3>
              <p className="group-desc">
                Retos y circuitos de trabajo cooperativo, experimentos de ciencia, dramatizaciones teatrales, expresión artística compleja y gestión positiva de emociones.
              </p>
              <ul className="group-bullet-list">
                <li><Check size={14} color="#0E9B97" /> Retos cooperativos y liderazgo</li>
                <li><Check size={14} color="#0E9B97" /> Inteligencia socioemocional</li>
                <li><Check size={14} color="#0E9B97" /> Pensamiento creativo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ejemplo de Programación Semanal */}
      <section className="weekly-section" id="semana">
        <div className="container">
          <div className="section-header">
            <span className="section-pill-tag">DINÁMICA CADA DÍA</span>
            <h2 className="section-main-title">Ejemplo de <span>Programación Semanal</span></h2>
            <p className="section-intro-text">Una temática diferente cada tarde para sorprenderlos y enriquecer su mundo.</p>
          </div>

          <div className="weekly-grid">
            {/* Lunes */}
            <div className="weekly-card day-lunes">
              <div className="day-header-pill">LUNES</div>
              <div className="day-card-body">
                <div className="day-icon-circle">🎨</div>
                <h4>Aventuras Artísticas</h4>
                <p>Pintamos, creamos y experimentamos con diferentes materiales.</p>
              </div>
            </div>

            {/* Martes */}
            <div className="weekly-card day-martes">
              <div className="day-header-pill">MARTES</div>
              <div className="day-card-body">
                <div className="day-icon-circle">📖</div>
                <h4>Aventuras de Cuentos</h4>
                <p>Los cuentos se convierten en experiencias de juego y creatividad.</p>
              </div>
            </div>

            {/* Miércoles */}
            <div className="weekly-card day-miercoles">
              <div className="day-header-pill">MIÉRCOLES</div>
              <div className="day-card-body">
                <div className="day-icon-circle">🧪</div>
                <h4>Pequeños Exploradores</h4>
                <p>Experimentos y experiencias de ciencia y naturaleza.</p>
              </div>
            </div>

            {/* Jueves */}
            <div className="weekly-card day-jueves">
              <div className="day-header-pill">JUEVES</div>
              <div className="day-card-body">
                <div className="day-icon-circle">👩‍🍳</div>
                <h4>Aventuras en la Cocina</h4>
                <p>Recetas sencillas y experiencias culinarias divertidas.</p>
              </div>
            </div>

            {/* Viernes */}
            <div className="weekly-card day-viernes">
              <div className="day-header-pill">VIERNES</div>
              <div className="day-card-body">
                <div className="day-icon-circle">🎉</div>
                <h4>Fiesta de Aventuras</h4>
                <p>Música, baile, juegos y expresión corporal. ¡Día de mucha diversión!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Niños & Familias */}
      <section className="benefits-section" id="beneficios">
        <div className="container">
          <div className="benefits-duo">
            {/* Beneficios Niños */}
            <div className="benefit-box benefit-kids-box">
              <div className="benefit-header-bar">
                <div className="b-icon-wrap">
                  <Heart size={24} />
                </div>
                <h3>BENEFICIOS PARA LOS NIÑOS</h3>
              </div>
              <ul className="benefit-list-items">
                <li>
                  <span className="bullet-heart">💖</span>
                  Desarrolla creatividad, motricidad y lenguaje.
                </li>
                <li>
                  <span className="bullet-heart">💖</span>
                  Fomenta la autonomía y la socialización.
                </li>
                <li>
                  <span className="bullet-heart">💖</span>
                  Estimula la imaginación y la curiosidad.
                </li>
                <li>
                  <span className="bullet-heart">💖</span>
                  Fortalece habilidades emocionales y sociales.
                </li>
                <li>
                  <span className="bullet-heart">💖</span>
                  Favorece hábitos saludables y rutinas.
                </li>
                <li>
                  <span className="bullet-heart">💖</span>
                  Ayuda a regular su energía y preparar una transición tranquila hacia la noche.
                </li>
              </ul>
            </div>

            {/* Beneficios Familias */}
            <div className="benefit-box benefit-parents-box">
              <div className="benefit-header-bar">
                <div className="b-icon-wrap">
                  <Sun size={24} />
                </div>
                <h3>BENEFICIOS PARA LAS FAMILIAS</h3>
              </div>
              <ul className="benefit-list-items">
                <li>
                  <span className="bullet-sun">☀️</span>
                  Una alternativa educativa y divertida.
                </li>
                <li>
                  <span className="bullet-sun">☀️</span>
                  Aprovechan mejor el tiempo de la tarde.
                </li>
                <li>
                  <span className="bullet-sun">☀️</span>
                  Niños acompañados en un ambiente seguro y afectivo.
                </li>
                <li>
                  <span className="bullet-sun">☀️</span>
                  Desarrollo integral a través del juego.
                </li>
                <li>
                  <span className="bullet-sun">☀️</span>
                  Experiencias diferentes a las pantallas.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto & Inscripciones con Maria Fernanda */}
      <section className="contact-section" id="contacto">
        <div className="container">
          <div className="contact-card-hero">
            <div className="contact-left">
              <span className="mafe-badge">
                <Sparkles size={16} /> DIRECCIÓN Y ACOMPAÑAMIENTO DIRECTO
              </span>
              <h2>Informes e Inscripciones</h2>
              <p className="contact-intro-p">
                Ponte en contacto directo con <strong>Maria Fernanda</strong> para reservar cupos, conocer las instalaciones y aclarar cualquier inquietud sobre la experiencia de tu peque.
              </p>

              <div className="contact-channels-stack">
                <a 
                  href="https://wa.me/57310406167?text=Hola%20Maria%20Fernanda,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Hora%20de%20Aventura" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="channel-btn channel-whatsapp"
                  onClick={handleConfetti}
                >
                  <div className="ch-icon">
                    <MessageCircle size={28} />
                  </div>
                  <div className="channel-meta">
                    <span className="ch-label">WHATSAPP DIRECTO</span>
                    <span className="ch-number">+57 310 406 167</span>
                    <span className="ch-helper">Toca aquí para chatear inmediatamente con Maria Fernanda</span>
                  </div>
                </a>
              </div>

              <div className="location-box-pill">
                <div className="loc-icon">📍</div>
                <div className="loc-info">
                  <h4>LUGAR:</h4>
                  <p>Un espacio lleno de color, naturaleza y creatividad.</p>
                </div>
              </div>
            </div>

            {/* Formulario React con enlace dinámico a WhatsApp */}
            <div className="contact-right">
              <div className="contact-form-panel">
                <h3>Reserva Rápida de Cupo</h3>
                <p>Completa los datos y te redirigirá a WhatsApp con el mensaje listo:</p>

                <form onSubmit={handleSubmit}>
                  <div className="form-field">
                    <label>Nombre del acudiente (Mamá / Papá):</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Ej: Laura Gómez" 
                      value={formData.parentName}
                      onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                    />
                  </div>

                  <div className="form-grid-2">
                    <div className="form-field">
                      <label>Nombre del peque:</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Ej: Lucas" 
                        value={formData.childName}
                        onChange={(e) => setFormData({...formData, childName: e.target.value})}
                      />
                    </div>
                    <div className="form-field">
                      <label>Grupo / Edad:</label>
                      <select 
                        value={formData.childAge}
                        onChange={(e) => setFormData({...formData, childAge: e.target.value})}
                      >
                        <option value="2 a 3 años">2 a 3 años (Pequeños)</option>
                        <option value="4 a 5 años">4 a 5 años (Aventureros)</option>
                        <option value="6 a 7 años">6 a 7 años (Grandes)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-field">
                    <label>¿Algún mensaje o consulta especial? (Opcional):</label>
                    <textarea 
                      rows={3} 
                      placeholder="Ej: ¿Qué días de esta semana tienen cupo disponible?"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>

                  <button type="submit" className="form-send-btn">
                    <Send size={18} /> Enviar Mensaje a Maria Fernanda (+57 310 406 167)
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-area">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <span style={{ fontSize: '2.5rem' }}>🧭</span>
              <div>
                <h4>HORA DE AVENTURA</h4>
                <p>Dos horas para jugar, crear, explorar y crecer.</p>
              </div>
            </div>

            <div className="footer-director">
              <p>Contacto Pedagógico: <strong>Maria Fernanda</strong></p>
              <p>WhatsApp: <strong>+57 310 406 167</strong></p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Hora de Aventura. Diseñado con amor para la infancia y las familias.</p>
          </div>
        </div>
      </footer>

      {/* Botón flotante de WhatsApp siempre visible */}
      <a 
        href="https://wa.me/57310406167?text=Hola%20Maria%20Fernanda,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Hora%20de%20Aventura" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-whatsapp"
        aria-label="Hablar con Maria Fernanda por WhatsApp"
        onClick={handleConfetti}
      >
        <MessageCircle size={24} />
        <span>Habla con Mafe</span>
      </a>
    </div>
  );
}
