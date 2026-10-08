// Data Centers Interactive Map with SVG, Tooltips and Count-up Animations
class DataCenterMap {
    constructor() {
        this.map = document.getElementById('mapa');
        this.hotspots = [];
        this.stats = [];
        this.init();
    }

    init() {
        this.createSVGMap();
        this.createHotspots();
        this.addEventListeners();
        this.initCountUpAnimations();
    }

    createSVGMap() {
        const svgMap = `
            <svg viewBox="0 0 1000 500" class="world-map">
                <!-- Continentes simplificados -->
                <path d="M150,200 Q200,180 250,200 Q300,220 350,200 Q400,180 450,200 L450,250 Q400,270 350,250 Q300,230 250,250 Q200,270 150,250 Z" 
                      class="continent" data-region="América do Norte"/>
                <path d="M200,300 Q250,280 300,300 Q350,320 400,300 Q450,280 500,300 L500,350 Q450,370 400,350 Q350,330 300,350 Q250,370 200,350 Z" 
                      class="continent" data-region="América do Sul"/>
                <path d="M600,150 Q650,130 700,150 Q750,170 800,150 Q850,130 900,150 L900,200 Q850,220 800,200 Q750,180 700,200 Q650,220 600,200 Z" 
                      class="continent" data-region="Europa"/>
                <path d="M750,250 Q800,230 850,250 Q900,270 950,250 Q1000,230 1050,250 L1050,300 Q1000,320 950,300 Q900,280 850,300 Q800,320 750,300 Z" 
                      class="continent" data-region="Ásia"/>
                <path d="M650,350 Q700,330 750,350 Q800,370 850,350 Q900,330 950,350 L950,400 Q900,420 850,400 Q800,380 750,400 Q700,420 650,400 Z" 
                      class="continent" data-region="África"/>
                <path d="M1100,200 Q1150,180 1200,200 Q1250,220 1300,200 Q1350,180 1400,200 L1400,250 Q1350,270 1300,250 Q1250,230 1200,250 Q1150,270 1100,250 Z" 
                      class="continent" data-region="Oceania"/>
            </svg>
        `;
        this.map.innerHTML = svgMap;
    }

    createHotspots() {
        const hotspotData = [
            { x: 300, y: 180, region: 'América do Norte', consumption: '40%', dataCenters: 2500, energy: '150 TWh', color: 'var(--neon-yellow)' },
            { x: 350, y: 320, region: 'América do Sul', consumption: '8%', dataCenters: 500, energy: '30 TWh', color: 'var(--accent-green)' },
            { x: 750, y: 175, region: 'Europa', consumption: '15%', dataCenters: 1800, energy: '55 TWh', color: 'var(--neon-cyan)' },
            { x: 900, y: 275, region: 'Ásia', consumption: '25%', dataCenters: 3000, energy: '90 TWh', color: 'var(--neon-magenta)' },
            { x: 800, y: 375, region: 'África', consumption: '5%', dataCenters: 300, energy: '15 TWh', color: 'var(--neon-cyan)' },
            { x: 1250, y: 225, region: 'Oceania', consumption: '7%', dataCenters: 400, energy: '20 TWh', color: 'var(--accent-red)' }
        ];

        hotspotData.forEach((data, index) => {
            const hotspot = this.createHotspot(data, index);
            this.hotspots.push(hotspot);
            this.map.appendChild(hotspot);
        });
    }

    createHotspot(data, index) {
        const hotspot = document.createElement('div');
        hotspot.className = 'hotspot';
        hotspot.style.cssText = `
            position: absolute;
            left: ${data.x}px;
            top: ${data.y}px;
            width: 20px;
            height: 20px;
            background: ${data.color};
            border-radius: 50%;
            cursor: pointer;
            animation: pulse 2s ease-in-out infinite;
            animation-delay: ${index * 0.3}s;
            box-shadow: 0 0 20px ${data.color};
            z-index: 10;
            transform: translate(-50%, -50%);
        `;

        hotspot.dataset.region = data.region;
        hotspot.dataset.consumption = data.consumption;
        hotspot.dataset.dataCenters = data.dataCenters;
        hotspot.dataset.energy = data.energy;
        hotspot.dataset.color = data.color;

        return hotspot;
    }

    addEventListeners() {
        this.hotspots.forEach(hotspot => {
            hotspot.addEventListener('mouseenter', (e) => this.showTooltip(e));
            hotspot.addEventListener('mouseleave', () => this.hideTooltip());
            hotspot.addEventListener('click', (e) => this.handleClick(e));
        });
    }

    showTooltip(event) {
        const hotspot = event.target;
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip glass';
        tooltip.style.cssText = `
            position: absolute;
            left: ${event.pageX + 15}px;
            top: ${event.pageY - 40}px;
            background: rgba(10,10,13,0.95);
            border: 1px solid ${hotspot.dataset.color};
            padding: 20px;
            border-radius: 12px;
            z-index: 1000;
            min-width: 250px;
            backdrop-filter: blur(15px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        `;

        tooltip.innerHTML = `
            <h3 style="color: ${hotspot.dataset.color}; margin-bottom: 12px; font-size: 1.2rem;">${hotspot.dataset.region}</h3>
            <div style="color: var(--text-light); line-height: 1.6;">
                <p><strong>Consumo Energético:</strong> ${hotspot.dataset.consumption}</p>
                <p><strong>Data Centers:</strong> ${hotspot.dataset.dataCenters.toLocaleString()}</p>
                <p><strong>Energia Anual:</strong> ${hotspot.dataset.energy}</p>
            </div>
            <p style="color: var(--text-muted); font-size: 0.9em; margin-top: 10px;">Clique para mais detalhes</p>
        `;

        document.body.appendChild(tooltip);
        hotspot.tooltip = tooltip;

        // Animate tooltip
        setTimeout(() => tooltip.classList.add('fade-in'), 10);
    }

    hideTooltip() {
        const tooltips = document.querySelectorAll('.tooltip');
        tooltips.forEach(tooltip => {
            tooltip.remove();
        });
    }

    handleClick(event) {
        const hotspot = event.target;
        const region = hotspot.dataset.region;
        
        // Create a ripple effect
        this.createRipple(event);
        
        // Show detailed information
        this.showDetailedInfo(region, hotspot.dataset);
    }

    createRipple(event) {
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: absolute;
            left: ${event.pageX - 10}px;
            top: ${event.pageY - 10}px;
            width: 20px;
            height: 20px;
            border: 2px solid ${event.target.dataset.color};
            border-radius: 50%;
            animation: ripple 0.8s ease-out;
            pointer-events: none;
            z-index: 1001;
        `;

        document.body.appendChild(ripple);
        setTimeout(() => ripple.remove(), 800);
    }

    showDetailedInfo(region, data) {
        const modal = document.createElement('div');
        modal.className = 'modal glass';
        modal.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(10,10,13,0.98);
            border: 2px solid var(--neon-cyan);
            padding: 40px;
            border-radius: 20px;
            z-index: 1000;
            max-width: 600px;
            backdrop-filter: blur(25px);
            box-shadow: 0 20px 60px rgba(0,0,0,0.8);
        `;

        modal.innerHTML = `
            <h2 style="color: var(--neon-yellow); margin-bottom: 25px; font-size: 2rem;">${region}</h2>
            <div style="color: var(--text-light); line-height: 1.8;">
                <p style="margin-bottom: 15px;">
                    <strong>Consumo Energético:</strong> ${data.consumption} da energia global
                </p>
                <p style="margin-bottom: 15px;">
                    <strong>Data Centers Ativos:</strong> ${data.dataCenters.toLocaleString()} instalações
                </p>
                <p style="margin-bottom: 15px;">
                    <strong>Consumo Anual:</strong> ${data.energy} de eletricidade
                </p>
                <p style="margin-bottom: 20px; color: var(--text-muted);">
                    Esta região abriga alguns dos maiores data centers do mundo, 
                    consumindo energia equivalente a milhões de residências e 
                    contribuindo significativamente para a crise energética global.
                </p>
            </div>
            <button onclick="this.parentElement.remove()" class="btn-neon" style="margin-top: 25px;">
                Fechar
            </button>
        `;

        document.body.appendChild(modal);
        
        // Add fade-in animation
        setTimeout(() => modal.classList.add('fade-in'), 10);
    }

    initCountUpAnimations() {
        // Find all stat numbers and animate them
        const statNumbers = document.querySelectorAll('.stat-number');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCountUp(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statNumbers.forEach(stat => {
            observer.observe(stat);
        });
    }

    animateCountUp(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current).toLocaleString();
        }, 16);
    }
}

// Initialize map when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new DataCenterMap();
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    .world-map {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }

    .continent {
        fill: rgba(0,255,247,0.1);
        stroke: var(--neon-cyan);
        stroke-width: 1;
        transition: all 0.3s ease;
    }

    .continent:hover {
        fill: rgba(0,255,247,0.2);
        stroke-width: 2;
    }

    @keyframes pulse {
        0%, 100% { 
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.8;
        }
        50% { 
            transform: translate(-50%, -50%) scale(1.4);
            opacity: 1;
        }
    }

    @keyframes ripple {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(6);
            opacity: 0;
        }
    }

    .modal {
        animation: fadeIn 0.4s ease-out;
    }

    .tooltip {
        animation: fadeIn 0.2s ease-out;
    }
`;
document.head.appendChild(style); 