/**
 * Audio Button - Sistema genérico para todas as páginas
 * Adiciona botão de áudio no canto inferior esquerdo
 */

// Função para alternar áudio
function toggleAudio() {
    if (isAudioEnabled()) {
        disableAudio();
        updateAudioButton();
    } else {
        enableAudio();
        updateAudioButton();
    }
}

// Atualiza o visual do botão
function updateAudioButton() {
    const button = document.getElementById('audio-toggle');
    if (!button) return;
    
    if (isAudioEnabled()) {
        button.textContent = '🔇 desativar áudio';
        button.style.background = 'rgba(255,74,74,0.1)';
        button.style.borderColor = '#ff4a4a';
        button.style.color = '#ff4a4a';
        button.style.textShadow = '0 0 4px #ff4a4a';
    } else {
        button.textContent = '🔊 ativar áudio';
        button.style.background = 'rgba(0,255,247,0.1)';
        button.style.borderColor = 'var(--neon-cyan)';
        button.style.color = 'var(--neon-cyan)';
        button.style.textShadow = '0 0 4px var(--neon-cyan)';
    }
}

// HTML do botão de áudio
function createAudioButton() {
    return `
    <!-- Botão de áudio (canto inferior esquerdo) -->
    <div style="position: fixed; bottom: 20px; left: 20px; z-index: 1000;">
        <button id="audio-toggle" onclick="toggleAudio()" style="background: rgba(0,255,247,0.1); border: 1px solid var(--neon-cyan); border-radius: 4px; padding: 4px 8px; color: var(--neon-cyan); text-decoration: none; font-size: 0.7rem; text-shadow: 0 0 4px var(--neon-cyan); transition: all 0.3s ease; box-shadow: 0 0 8px rgba(0,255,247,0.2); cursor: pointer;" onmouseover="this.style.background='rgba(0,255,247,0.2)'; this.style.textShadow='0 0 8px var(--neon-cyan)'; this.style.transform='scale(1.05)'" onmouseout="this.style.background='rgba(0,255,247,0.1)'; this.style.textShadow='0 0 4px var(--neon-cyan)'; this.style.transform='scale(1)'">🔊 ativar áudio</button>
    </div>
    `;
}

// Inicializa o sistema de áudio
function initAudioSystem() {
    // Adiciona o botão se não existir
    if (!document.getElementById('audio-toggle')) {
        document.body.insertAdjacentHTML('beforeend', createAudioButton());
    }
    
    // Inicializa o estado do botão
    updateAudioButton();
}

// Inicializa quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAudioSystem);
} else {
    initAudioSystem();
}

// Adiciona listener para parar todos os sons ao sair da página
window.addEventListener('beforeunload', function() {
    if (typeof stopAllAudio === 'function') {
        stopAllAudio();
    }
});

// Adiciona listener para parar todos os sons ao trocar de página via navegação
window.addEventListener('pagehide', function() {
    if (typeof stopAllAudio === 'function') {
        stopAllAudio();
    }
});

// Para navegação via links
document.addEventListener('DOMContentLoaded', function() {
    // Intercepta cliques em links
    document.addEventListener('click', function(event) {
        const link = event.target.closest('a');
        if (link && link.href && !link.href.startsWith('javascript:') && !link.href.startsWith('#')) {
            // Pequeno delay para permitir que o som seja interrompido
            setTimeout(() => {
                if (typeof stopAllAudio === 'function') {
                    stopAllAudio();
                }
            }, 50);
        }
    });
});
