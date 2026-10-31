import React from 'react';

function App() {
  return (
    <>
      {/* MENU FIXO NO TOPO */}
      <nav style={styles.navbar}>
        <div className="menu-container">
          <button className="nav-button" onClick={() => alert('Início')}>INÍCIO</button>
          <button className="nav-button" onClick={() => alert('Sobre')}>SOBRE</button>
          <button className="nav-button" onClick={() => alert('FAQ')}>FAQ</button>
          <button className="nav-button" onClick={() => alert('Contatos')}>CONTATOS</button>
        </div>
      </nav>

      {/* CONTEÚDO DEMONSTRATIVO DA PÁGINA */}
      <main style={styles.content}>
        <h1>Menu com Efeito Barra de Progresso!</h1>
        <p>Passe o mouse por cima dos botões para ver a animação na base.</p>
        <div style={{ height: '120vh', marginTop: '20px', background: 'linear-gradient(#e0e0e0, #fff)' }}>
          <p style={{ padding: '20px' }}>O menu continua fixo lá em cima enquanto você navega.</p>
        </div>
      </main>
    </>
  );
}

// Mantemos apenas o posicionamento estrutural do Menu aqui
const styles = {
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center',
    padding: '15px 0',
  },
  content: {
    maxWidth: '800px',
    margin: '40px auto',
    padding: '0 20px',
    textAlign: 'center',
  }
};

export default App;
