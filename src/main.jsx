import { ArrowRight, Check, Menu, Play, Sparkles } from 'lucide-react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function App() {
    return (
        <main>
            <section className="hero" id="inicio">
                <nav className="nav wrap" aria-label="Navegacion principal">
                    <a className="brand" href="#inicio" aria-label="emmfit, inicio">
                        emm<span>fit</span>
                    </a>
                    <div className="nav-links">
                        <a href="#metodo">Metodo</a>
                        <a href="#planes">Planes</a>
                        <a href="#comunidad">Comunidad</a>
                    </div>
                    <a className="nav-cta" href="#planes">Empieza hoy <ArrowRight size={16} /></a>
                    <button className="menu-button" aria-label="Abrir menu"><Menu size={22} /></button>
                </nav>

                <div className="hero-grid wrap">
                    <div className="hero-copy">
                        <p className="eyebrow"><Sparkles size={16} /> ENTRENAMIENTO QUE TE SIGUE EL RITMO</p>
                        <h1>Haz del movimiento<br /><em>tu mejor plan.</em></h1>
                        <p className="lead">Rutinas que se adaptan a tu día, a tu nivel y a tus ganas. Entrena en cualquier sitio, sin complicarte.</p>
                        <div className="hero-actions">
                            <a className="button button-primary" href="#planes">Prueba emmfit gratis <ArrowRight size={18} /></a>
                            <a className="play-link" href="#metodo"><span><Play size={15} fill="currentColor" /></span> Conoce el método</a>
                        </div>
                        <div className="member-line">
                            <div className="avatars" aria-hidden="true"><i>LM</i><i>CR</i><i>AM</i><i>+</i></div>
                            <p><strong>12.000+ personas</strong><br />ya entrenan con emmfit</p>
                        </div>
                    </div>

                    <div className="hero-visual" aria-label="Persona entrenando con emmfit">
                        <div className="halo"></div>
                        <div className="workout-card">
                            <div className="card-header"><span>HOY</span><strong>28 min</strong></div>
                            <div className="activity-bars"><b></b><b></b><b></b><b></b><b></b><b></b><b></b></div>
                            <p>Movimiento diario</p>
                        </div>
                        <div className="photo-frame">
                            <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=85" alt="Atleta realizando ejercicio funcional" />
                        </div>
                        <div className="progress-card"><span>Esta semana</span><strong>4 <small>/ 5 sesiones</small></strong><div className="progress"><i></i></div></div>
                        <p className="vertical-copy">FUERTE A TU MANERA</p>
                    </div>
                </div>
                <div className="ticker" aria-hidden="true"><span>FUERZA</span><b>✦</b><span>ENERGIA</span><b>✦</b><span>CONSTANCIA</span><b>✦</b><span>BIENESTAR</span><b>✦</b><span>FUERZA</span></div>
            </section>

            <section className="method wrap" id="metodo">
                <div className="section-heading"><p className="eyebrow">CERO PRESION. TODO IMPULSO.</p><h2>Tu progreso no se parece<br />al de nadie más.</h2></div>
                <div className="method-grid">
                    <article><span className="number">01</span><h3>Elige tu punto de partida</h3><p>Cuéntanos cómo te sientes y qué te apetece conseguir. Nosotros trazamos la ruta.</p></article>
                    <article><span className="number">02</span><h3>Muévete con intención</h3><p>Sesiones claras, efectivas y guiadas por expertos, estés donde estés.</p></article>
                    <article><span className="number">03</span><h3>Disfruta de avanzar</h3><p>Pequeños logros que suman. Métricas que te motivan, sin obsesiones.</p></article>
                </div>
            </section>

            <section className="plans" id="planes"><div className="wrap plans-layout"><div><p className="eyebrow">EMPIEZA CUANDO QUIERAS</p><h2>Siete días para<br /><em>sentirte mejor.</em></h2></div><div className="plan-card"><p className="plan-label">PRUEBA GRATUITA</p><h3>Todo emmfit.<br />Sin compromiso.</h3><ul><li><Check size={17} /> Planes personalizados</li><li><Check size={17} /> Más de 300 sesiones</li><li><Check size={17} /> Seguimiento de progreso</li></ul><a href="#inicio" className="button button-light">Crear mi cuenta <ArrowRight size={18} /></a></div></div></section>
        </main>
    );
}

createRoot(document.getElementById('root')).render(<App />);