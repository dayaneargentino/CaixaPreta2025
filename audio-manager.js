/**
 * Audio Manager - Caixa Preta
 * Sistema de áudio para todas as páginas
 */

// Array para rastrear todos os elementos de áudio ativos
let activeAudioElements = [];
let activeAudioContexts = [];

// Verifica se o áudio está habilitado
function isAudioEnabled() {
    return localStorage.getItem('caixa-preta-audio-enabled') === 'true';
}

// Ativa o áudio
function enableAudio() {
    localStorage.setItem('caixa-preta-audio-enabled', 'true');
    return true;
}

// Desativa o áudio
function disableAudio() {
    localStorage.setItem('caixa-preta-audio-enabled', 'false');
    // Para todos os sons quando o áudio é desativado
    stopAllAudio();
    return false;
}

// Função para parar todos os sons ativos
function stopAllAudio() {
    // Para todos os elementos de áudio HTML
    activeAudioElements.forEach(audio => {
        if (audio && !audio.paused) {
            audio.pause();
            audio.currentTime = 0;
        }
    });
    
    // Para todos os contextos de áudio Web Audio API
    activeAudioContexts.forEach(context => {
        if (context && context.state !== 'closed') {
            context.suspend();
        }
    });
    
    // Para síntese de voz (speechSynthesis)
    if (window.speechSynthesis && window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
    }
    
    // Limpa os arrays
    activeAudioElements = [];
    activeAudioContexts = [];
}

// Função para adicionar elemento de áudio ao rastreamento
function trackAudioElement(audio) {
    if (audio && !activeAudioElements.includes(audio)) {
        activeAudioElements.push(audio);
    }
}

// Função para adicionar contexto de áudio ao rastreamento
function trackAudioContext(context) {
    if (context && !activeAudioContexts.includes(context)) {
        activeAudioContexts.push(context);
    }
}

// Função para reproduzir som de processamento
function playProcessingSound() {
    if (!isAudioEnabled()) return;
    
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        trackAudioContext(audioContext);
        
        const frequencies = [800, 1200, 1600, 2000];
        const duration = 0.8;
        const sampleRate = audioContext.sampleRate;
        const buffer = audioContext.createBuffer(1, sampleRate * duration, sampleRate);
        const data = buffer.getChannelData(0);
        
        for (let i = 0; i < data.length; i++) {
            const time = i / sampleRate;
            let sample = 0;
            
            frequencies.forEach((freq, index) => {
                const startTime = index * 0.2;
                const endTime = startTime + 0.15;
                
                if (time >= startTime && time <= endTime) {
                    const envelope = Math.sin(Math.PI * (time - startTime) / (endTime - startTime));
                    sample += Math.sin(2 * Math.PI * freq * time) * envelope * 0.3;
                }
            });
            
            sample += (Math.random() - 0.5) * 0.1;
            data[i] = sample;
        }
        
        const source = audioContext.createBufferSource();
        source.buffer = buffer;
        source.connect(audioContext.destination);
        source.start();
    } catch (error) {
        console.log('Erro ao reproduzir som de processamento:', error);
    }
}

// Função para reproduzir som de hover
function playHoverSound() {
    if (!isAudioEnabled()) return;
    
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        trackAudioContext(audioContext);
        
        const duration = 0.3;
        const sampleRate = audioContext.sampleRate;
        const buffer = audioContext.createBuffer(1, sampleRate * duration, sampleRate);
        const data = buffer.getChannelData(0);
        
        for (let i = 0; i < data.length; i++) {
            const time = i / sampleRate;
            const envelope = Math.sin(Math.PI * time / duration);
            const frequency = 400 + (time * 200);
            data[i] = Math.sin(2 * Math.PI * frequency * time) * envelope * 0.15;
        }
        
        const source = audioContext.createBufferSource();
        source.buffer = buffer;
        source.connect(audioContext.destination);
        source.start();
    } catch (error) {
        console.log('Erro ao reproduzir som de hover:', error);
    }
}

// Função para reproduzir som de confirmação
function playConfirmationSound() {
    if (!isAudioEnabled()) return;
    
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        trackAudioContext(audioContext);
        
        const duration = 0.5;
        const sampleRate = audioContext.sampleRate;
        const buffer = audioContext.createBuffer(1, sampleRate * duration, sampleRate);
        const data = buffer.getChannelData(0);
        
        for (let i = 0; i < data.length; i++) {
            const time = i / sampleRate;
            const envelope = Math.sin(Math.PI * time / duration);
            const frequency = 600 + Math.sin(time * 10) * 100;
            data[i] = Math.sin(2 * Math.PI * frequency * time) * envelope * 0.2;
        }
        
        const source = audioContext.createBufferSource();
        source.buffer = buffer;
        source.connect(audioContext.destination);
        source.start();
    } catch (error) {
        console.log('Erro ao reproduzir som de confirmação:', error);
    }
}

// Função para reproduzir som de erro
function playErrorSound() {
    if (!isAudioEnabled()) return;
    
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        trackAudioContext(audioContext);
        
        const duration = 0.4;
        const sampleRate = audioContext.sampleRate;
        const buffer = audioContext.createBuffer(1, sampleRate * duration, sampleRate);
        const data = buffer.getChannelData(0);
        
        for (let i = 0; i < data.length; i++) {
            const time = i / sampleRate;
            const envelope = Math.sin(Math.PI * time / duration);
            const frequency = 200 + Math.random() * 800;
            data[i] = Math.sin(2 * Math.PI * frequency * time) * envelope * 0.3;
        }
        
        const source = audioContext.createBufferSource();
        source.buffer = buffer;
        source.connect(audioContext.destination);
        source.start();
    } catch (error) {
        console.log('Erro ao reproduzir som de erro:', error);
    }
}

// Função para reproduzir som de acesso/carregando
function playAccessSound() {
    if (!isAudioEnabled()) return;
    
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        trackAudioContext(audioContext);
        
        const duration = 1.2;
        const sampleRate = audioContext.sampleRate;
        const buffer = audioContext.createBuffer(1, sampleRate * duration, sampleRate);
        const data = buffer.getChannelData(0);
        
        for (let i = 0; i < data.length; i++) {
            const time = i / sampleRate;
            let sample = 0;
            
            // Sequência de tons ascendentes (acesso/carregando)
            const tones = [
                { freq: 400, start: 0.0, end: 0.2 },
                { freq: 600, start: 0.2, end: 0.4 },
                { freq: 800, start: 0.4, end: 0.6 },
                { freq: 1000, start: 0.6, end: 0.8 },
                { freq: 1200, start: 0.8, end: 1.0 }
            ];
            
            tones.forEach(tone => {
                if (time >= tone.start && time <= tone.end) {
                    const envelope = Math.sin(Math.PI * (time - tone.start) / (tone.end - tone.start));
                    const vibrato = 1 + 0.1 * Math.sin(2 * Math.PI * 5 * time);
                    sample += Math.sin(2 * Math.PI * tone.freq * time * vibrato) * envelope * 0.25;
                }
            });
            
            // Adiciona um pouco de ruído digital
            sample += (Math.random() - 0.5) * 0.05;
            data[i] = sample;
        }
        
        const source = audioContext.createBufferSource();
        source.buffer = buffer;
        source.connect(audioContext.destination);
        source.start();
    } catch (error) {
        console.log('Erro ao reproduzir som de acesso:', error);
    }
}

// Função para reproduzir arquivos de áudio MP3 (para uso em outras páginas)
function playAudioFile(filePath, volume = 0.6) {
    if (!isAudioEnabled()) return null;
    
    try {
        const audio = new Audio(filePath);
        audio.volume = volume;
        trackAudioElement(audio);
        
        audio.play().catch(error => {
            console.log('Erro ao reproduzir arquivo de áudio:', error);
        });
        
        return audio;
    } catch (error) {
        console.log('Erro ao criar elemento de áudio:', error);
        return null;
    }
}
