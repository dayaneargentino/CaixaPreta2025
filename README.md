# Caixa Preta - Experiência Interativa sobre IA

Uma experiência imersiva e interativa que explora os aspectos técnicos, éticos e ambientais da inteligência artificial através de uma narrativa cyber-futurista. O projeto utiliza design neon, efeitos visuais avançados e interatividade para criar uma jornada educativa sobre o funcionamento interno das IAs.

## 🎨 Design Cyber-Futurista

### Paleta de Cores
- **Fundo Escuro**: `#0A0A0D`
- **Neon Ciano**: `#00FFF7`
- **Neon Magenta**: `#FF00E0`
- **Neon Amarelo**: `#FFEA00`
- **Vermelho Accent**: `#FF3B3F`
- **Verde Accent**: `#4AFF4A`

### Efeitos Visuais
- **Glassmorphism**: Cards com backdrop-filter e bordas translúcidas
- **Scanlines**: Efeito de linhas de varredura animadas
- **Particle Emitter**: Partículas flutuantes em movimento
- **Neon Glow**: Brilho neon nos elementos interativos
- **Easter Eggs**: Elementos interativos ocultos em todas as páginas

## 📁 Estrutura do Projeto

### Arquivos Principais
- `styles.css` - Estilos globais com paleta cyber-futurista
- `audio-manager.js` - Sistema centralizado de gerenciamento de áudio
- `audio-button.js` - Controle global de áudio e navegação
- `easter-eggs.js` - Sistema de easter eggs interativos
- `datacenters.js` - Funcionalidades do mapa SVG, tooltips e animações count-up

### Arquivos HTML - Fluxo Completo da Experiência

#### 1. `1-index.html` - Página Inicial
- Caixa 3D neon com texto "CAIXA PRETA" em todas as faces
- Efeitos de hover e rotação 3D
- Animação de flutuação
- Particle emitter
- Easter egg na palavra "CAIXA" (título) - link para busca sobre "caixa-preta" + IA
- Botão "ativar áudio" global
- Redirecionamento para 2-chat.html

#### 2. `2-chat.html` - Interface de Chat
- Interface full-screen com tema cyber-futurista
- Botões neon "Sim" e "Não" com diálogo irônico
- Mensagens da IA-guia "Caixa Preta"
- Sistema de narração automática
- Easter egg na palavra "consciência"
- Área de controles de áudio (audioControls) - botão "ativar áudio" reposicionado
- Scanlines e particle emitter
- Redirecionamento automático para 3-transition.html

#### 3. `3-transition.html` - Página de Transição
- Efeitos visuais de erro de sistema
- Animação Matrix de fundo
- Scan lines vermelhas
- Progress bar animada
- Som de alarme e processamento
- Easter egg na palavra "ERRO"
- Redirecionamento automático para 4-primeira-camada.html

#### 4. `4-primeira-camada.html` - Tokenização e Processamento
- Simulação de tokenização e processamento de texto pela IA
- Divisão silábica da frase digitada
- Animação dos tokens passando por camadas numeradas
- Cards com números correspondentes às camadas
- Sistema de narração
- Easter egg na palavra "tokens"
- Botão "Abrir a próxima camada" para 5-segunda-camada.html

#### 5. `5-segunda-camada.html` - Data Centers e Vídeos IA
- Data centers e infraestrutura física das IAs
- Grid de 3 vídeos gerados por IA (Sora, Hailu, Kling AI)
- Botões de prompt expansíveis com textos em português e inglês
- Controles independentes para cada vídeo
- Sistema de narração
- Easter egg na palavra "energia"
- Link para "Data Centers" no título
- Botão "Abrir a próxima camada" para 6-terceira-camada.html

#### 6. `6-terceira-camada.html` - O Combustível Invisível
- Exploração do consumo energético das IAs
- Timeline interativa com seleção de anos
- Estatísticas detalhadas sobre consumo de energia
- Quiz interativo com sons específicos
- Links para Wikipedia nos conceitos
- Easter egg na palavra "commodities"
- Reflexões sobre o impacto ambiental
- Botão "Ouvir" reposicionado após o título

#### 7. `7-quarta-camada.html` - Diálogo com IA
- Interface de chat avançada com IA
- Mensagens animadas com efeitos de digitação
- Sistema de respostas dinâmicas
- Som de erro no início
- Narração automática da primeira mensagem
- Easter egg na palavra "Humanidade"
- Área de controles de áudio (audioControls) - botão "ativar áudio" reposicionado
- Efeitos visuais de partículas e scanlines
- Botão "Abrir a próxima camada" para 8-prefechamento.html

#### 8. `8-prefechamento.html` - Pré-Fechamento
- Apresentação de diferentes tipos de IA
- Versão 1.0 - outubro de 2025
- Descrição expandida de IAs Generativas
- Easter egg na palavra "Versão"
- Remoção de cards de IAs Especializadas, Experimentais e Distribuídas
- Texto atualizado: "Você explorou apenas a primeira versão deste projeto"
- Transição para 9-vibe-coding-desprogramativo.html

#### 9. `9-vibe-coding-desprogramativo.html` - Metodologia do Projeto
- Explicação da metodologia Vibe Coding Desprogramativo
- Informações sobre o desenvolvimento do projeto
- Links para recursos externos
- Easter egg na palavra "Desprogramativo"
- Botão "Voltar" para 8-prefechamento.html

### Arquivos de Mídia

#### 🎵 **Créditos de Áudio**
Todos os arquivos de áudio utilizados no projeto foram obtidos do [Freesound.org](https://freesound.org) sob licenças Creative Commons. Para informações detalhadas sobre licenças e atribuições, consulte: [AUDIO_CREDITS.md](AUDIO_CREDITS.md)

**Arquivos de Áudio Utilizados:**
- `alarm-siren-sound-effect-type-01-294194.mp3` - Som de alarme (3-transition.html)
- `button-press-2-386176.mp3` - Som de clique (easter eggs, interações)
- `computer-processing-sound-effect-01-122131.mp3` - Som de processamento (3-transition.html)
- `error-beep-2-296492.mp3` - Som de erro (7-quarta-camada.html)
- `funny-sound-effect-for-quotjack-in-the-boxquot-sound-ver1-110923.mp3` - Som do quiz (6-terceira-camada.html)
- `gear-spinning-loop-6981.mp3` - Som de engrenagem (5-segunda-camada.html)
- `metal-drawer-with-objects-inside-105838.mp3` - Som de gaveta (5-segunda-camada.html)
- `snd_tacataca3-412245.mp3` - Som de processamento (efeitos gerais)
- `sonido-correcto-331225.mp3` - Som de resposta correta (6-terceira-camada.html)
- `water-splash-02-352021.mp3` - Som de água (5-segunda-camada.html)

**⚠️ Importante:** É necessário verificar as licenças específicas de cada arquivo no Freesound.org antes de qualquer uso comercial ou redistribuição.
- `prompt 1 sora.mp4` - Vídeo gerado por Sora AI
- `prompt 2 sora.mp4` - Vídeo gerado por Sora AI
- `prompt 1 Hailu.mp4` - Vídeo gerado por Hailu AI
- `prompt 2 Hailu.mp4` - Vídeo gerado por Hailu AI
- `prompt 1 klingai.mp4` - Vídeo gerado por Kling AI
- `prompt 2 klingai.mp4` - Vídeo gerado por Kling AI

## 🚀 Fluxo de Navegação Completo

1. **1-index.html** → **2-chat.html** (clique na caixa 3D)
2. **2-chat.html** → **3-transition.html** (redirecionamento automático)
3. **3-transition.html** → **4-primeira-camada.html** (redirecionamento automático)
4. **4-primeira-camada.html** → **5-segunda-camada.html** (botão "Abrir a próxima camada")
5. **5-segunda-camada.html** → **6-terceira-camada.html** (botão "Abrir a próxima camada")
6. **6-terceira-camada.html** → **7-quarta-camada.html** (botão "Abrir a próxima camada")
7. **7-quarta-camada.html** → **8-prefechamento.html** (botão "Abrir a próxima camada")
8. **8-prefechamento.html** → **9-vibe-coding-desprogramativo.html** (botão "Próximo")

### Páginas Alternativas
- **index.html** - Página de navegação geral do projeto
- **persona.html** - Acessível independentemente
- **glitch.html** - Página de erro/transição alternativa

## 🎯 Funcionalidades Especiais por Página

### Sistema de Áudio Global
- **Controle Centralizado**: Botão "🔊 Ativar áudio" em todas as páginas
- **Interrupção Automática**: Sons param ao trocar de página
- **Gerenciamento Inteligente**: Controle de HTML Audio, Web Audio API e Speech Synthesis
- **Narração**: Botões "🔊 Ouvir" em mensagens da IA
- **Sons de Feedback**: Cliques, erros, confirmações e efeitos especiais

### Easter Eggs
- **Sistema Interativo**: Clique em palavras destacadas para descobrir mensagens especiais
- **Som de Descoberta**: Som de clique ao ativar easter egg
- **Temática Coerente**: Cada easter egg relacionado ao contexto da página
- **Hover Hint**: Dica visual ao passar o mouse

### 1-index.html
- **Caixa 3D Neon**: Rotação 3D com efeitos de hover
- **Particle Emitter**: Partículas flutuantes ascendentes
- **Animação de Flutuação**: Movimento suave da caixa
- **Easter Egg**: Palavra "Jornada" com mensagem sobre curiosidade

### 2-chat.html
- **Diálogo Interativo**: Botões "Sim" e "Não" com respostas irônicas
- **IA-Guia**: Personagem "Caixa Preta" com personalidade
- **Narração Automática**: Primeira mensagem lida automaticamente
- **Easter Egg**: Palavra "consciência" com mensagem sobre conhecimento oculto
- **Redirecionamento Automático**: Transição programada

### 3-transition.html
- **Efeitos de Glitch**: Corrupção visual e erro de sistema
- **Matrix Rain**: Chuva de caracteres em fundo
- **Progress Bar**: Barra de progresso animada
- **Sons de Sistema**: Alarme e processamento
- **Easter Egg**: Palavra "ERRO" com mensagem sobre falhas temporárias

### 4-primeira-camada.html
- **Simulação de Tokenização**: Processamento visual de texto
- **Camadas Numeradas**: Visualização das camadas de IA
- **Input Interativo**: Campo de texto para processamento
- **Sistema de Narração**: Botões de áudio em mensagens
- **Easter Egg**: Palavra "tokens" com mensagem sobre curiosidade humana

### 5-segunda-camada.html
- **Mapa Interativo**: Continentes clicáveis com tooltips
- **Grid de Vídeos**: 3 vídeos IA com controles independentes
- **Prompts Expansíveis**: Informações detalhadas sobre cada IA
- **Links Externos**: Link para "Data Centers" no título
- **Sistema de Narração**: Botões de áudio
- **Easter Egg**: Palavra "energia" com mensagem sobre consumo

### 6-terceira-camada.html
- **Timeline Interativa**: Seleção de anos com estatísticas
- **Animações Count-up**: Números animados
- **Quiz Interativo**: Som específico para cada resposta
- **Links Wikipedia**: Conceitos técnicos linkados
- **Easter Egg**: Palavra "commodities" sobre valorização de dados
- **Reflexões Ambientais**: Conteúdo sobre impacto energético

### 7-quarta-camada.html
- **Chat Avançado**: Interface de conversa com IA
- **Mensagens Animadas**: Efeitos de digitação e fade-in
- **Sistema de Respostas**: Respostas dinâmicas baseadas em interação
- **Som de Erro**: Alerta sonoro no início
- **Narração Automática**: Primeira mensagem lida automaticamente
- **Easter Egg**: Palavra "você" sobre humanidade e IA

### 8-prefechamento.html
- **Apresentação de IAs**: Diferentes tipos de inteligência artificial
- **Versão Atualizada**: Versão 1.0 - outubro de 2025
- **Descrição Detalhada**: IAs Generativas com explicação expandida
- **Easter Egg**: Palavra "Versão" sobre desenvolvimento do projeto

### 9-vibe-coding-desprogramativo.html
- **Metodologia**: Explicação da abordagem Vibe Coding Desprogramativo
- **Desenvolvimento**: Informações sobre criação do projeto
- **Links Externos**: Recursos e referências
- **Easter Egg**: Palavra "Desprogramativo" sobre reprogramação da percepção

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos avançados com variáveis CSS
- **JavaScript** - Interatividade e animações
- **Web Audio API** - Controle avançado de áudio
- **Web Speech API** - Síntese de voz
- **Glassmorphism** - Efeitos de vidro translúcido
- **CSS Grid & Flexbox** - Layout responsivo
- **CSS Animations** - Keyframes e transições
- **SVG** - Mapas interativos e gráficos
- **Video Players** - Controles de vídeo personalizados

## 🎯 Funcionalidades Especiais

### Sistema de Áudio
- **Controle Global**: Botão único para ativar/desativar áudio
- **Interrupção Inteligente**: Sons param automaticamente ao navegar
- **Múltiplos Formatos**: HTML Audio, Web Audio API, Speech Synthesis
- **Feedback Sonoro**: Sons específicos para cada interação
- **Narração**: Sistema de leitura automática de mensagens

### Easter Eggs
- **Descoberta Interativa**: Clique em palavras destacadas
- **Mensagens Temáticas**: Cada easter egg relacionado ao contexto
- **Feedback Visual**: Popup animado com mensagem
- **Som de Descoberta**: Feedback sonoro ao ativar
- **Hover Hint**: Dica visual ao passar o mouse

### Efeitos Visuais
- **Scanlines**: Linhas de varredura animadas em toda a tela
- **Particle Emitter**: Partículas flutuantes que sobem da tela
- **Neon Glow**: Brilho neon nos botões e textos
- **Glassmorphism**: Cards com efeito de vidro translúcido
- **Glitch Effects**: Efeitos de corrupção e erro de sistema
- **3D Transformations**: Rotação e perspectiva 3D
- **Matrix Rain**: Chuva de caracteres em fundo

### Interatividade
- **Mapa Interativo**: Hotspots clicáveis com tooltips
- **Botões Neon**: Efeitos de hover e clique
- **Animações 3D**: Rotação e perspectiva na caixa 3D
- **Transições Suaves**: Entre páginas e elementos
- **Timeline Interativa**: Seleção de anos com dados dinâmicos
- **Chat Interface**: Sistema de mensagens animadas
- **Quiz Interativo**: Perguntas com feedback sonoro

### audio-manager.js - Sistema de Áudio Centralizado
- **Controle Unificado**: Gerenciamento de todos os tipos de áudio
- **Interrupção Global**: Para todos os sons ao navegar
- **Tracking**: Monitoramento de elementos de áudio ativos
- **Speech Synthesis**: Controle de síntese de voz
- **Web Audio API**: Geração de sons programáticos

### audio-button.js - Controle Global
- **Botão Único**: Ativa/desativa áudio em todas as páginas
- **Persistência**: Estado salvo no localStorage
- **Interrupção**: Para sons ao trocar de página
- **Navegação**: Intercepta cliques em links

### easter-eggs.js - Sistema de Easter Eggs
- **Mensagens Temáticas**: Cada easter egg com contexto específico
- **Popup Animado**: Interface visual para descobertas
- **Som de Feedback**: Áudio ao ativar easter egg
- **Auto-remoção**: Popup desaparece automaticamente

### datacenters.js - Funcionalidades Avançadas
- **Mapa SVG**: Continentes interativos com hover effects
- **Tooltips Informativos**: Dados detalhados de consumo energético
- **Animações Count-up**: Estatísticas animadas com Intersection Observer
- **Modais Detalhados**: Informações completas sobre cada região
- **Efeitos Ripple**: Animações de clique nos hotspots

## 📱 Responsividade

O projeto é totalmente responsivo e se adapta a diferentes tamanhos de tela:
- **Desktop**: Layout completo com todos os efeitos
- **Tablet**: Adaptação de grid e tamanhos
- **Mobile**: Layout otimizado para telas pequenas
- **Acessibilidade**: Suporte a screen readers e navegação por teclado

## 🚀 Como Executar

1. Clone ou baixe o projeto
2. Abra o arquivo `1-index.html` em um navegador web moderno
3. Ative o áudio clicando em "🔊 Ativar áudio" (opcional)
4. Siga o fluxo de navegação clicando na caixa preta
5. Explore todas as páginas e interações
6. Descubra os easter eggs clicando em palavras destacadas
7. Para páginas específicas, acesse diretamente os arquivos HTML

## 🎨 Características do Design

- **Tema Escuro**: Fundo escuro para melhor contraste
- **Cores Neon**: Paleta vibrante e futurista
- **Tipografia**: Fonte monospace para aspecto tecnológico
- **Animações**: Transições suaves e efeitos visuais
- **Consistência**: Design unificado em todas as páginas
- **Narrativa**: Experiência linear com storytelling interativo
- **Acessibilidade**: Suporte completo a tecnologias assistivas

## 📊 Conteúdo das Páginas

### Narrativa Principal
- **Introdução**: Caixa preta como metáfora da IA
- **Processamento**: Simulação de como IAs processam informação
- **Infraestrutura**: Data centers e vídeos gerados por IA
- **Impacto Ambiental**: Consumo energético e reflexões
- **Diálogo**: Conversa final com IA sobre viés e colonialismo
- **Metodologia**: Explicação da abordagem Vibe Coding Desprogramativo

### Temas Explorados
- Inteligência Artificial e seu funcionamento interno
- Colonialismo digital e infraestrutura tecnológica
- Consumo energético e impacto ambiental
- Interação humano-máquina e viés algorítmico
- Futurismo e tecnologia como ferramenta de reflexão
- Metodologia de desenvolvimento criativo

## 🔧 Sistema de Áudio

### Funcionalidades
- **Controle Global**: Botão único para ativar/desativar
- **Interrupção Automática**: Sons param ao navegar
- **Múltiplos Formatos**: HTML Audio, Web Audio API, Speech Synthesis
- **Feedback Sonoro**: Sons específicos para cada interação
- **Narração**: Leitura automática de mensagens da IA

### Arquivos de Som
- Sons de interface (cliques, erros, confirmações)
- Sons de ambiente (processamento, alarmes)
- Sons de feedback (quiz, descobertas)
- Narração automática de mensagens

## 🥚 Sistema de Easter Eggs

### Implementação
- **Descoberta Interativa**: Clique em palavras destacadas
- **Mensagens Temáticas**: Cada easter egg relacionado ao contexto
- **Feedback Visual**: Popup animado com mensagem
- **Som de Descoberta**: Feedback sonoro ao ativar
- **Hover Hint**: Dica visual ao passar o mouse

### Easter Eggs por Página
1. **1-index.html**: "Jornada" - sobre curiosidade
2. **2-chat.html**: "consciência" - sobre conhecimento oculto
3. **3-transition.html**: "ERRO" - sobre falhas temporárias
4. **4-primeira-camada.html**: "tokens" - sobre curiosidade humana
5. **5-segunda-camada.html**: "energia" - sobre consumo
6. **6-terceira-camada.html**: "commodities" - sobre valorização de dados
7. **7-quarta-camada.html**: "você" - sobre humanidade e IA
8. **8-prefechamento.html**: "Versão" - sobre desenvolvimento
9. **9-vibe-coding-desprogramativo.html**: "Desprogramativo" - sobre reprogramação

## 🔄 Modificações Recentes

### Sistema de Controles de Áudio
- **Páginas 2-chat.html e 7-quarta-camada.html**: Implementação de área dedicada para controles de áudio (`audioControls`)
- **Reposicionamento**: Botão "ativar áudio" movido para área específica para evitar sobreposição com conteúdo
- **CSS**: Estilos para `.audio-controls` com posicionamento fixo no canto inferior esquerdo

### Easter Eggs Implementados
- **1-index.html**: Easter egg na palavra "CAIXA" do título - link para busca sobre "caixa-preta" + IA
- **7-quarta-camada.html**: Easter egg na palavra "Humanidade" 
- **8-prefechamento.html**: Easter egg na palavra "Versão"

### Atualizações de Conteúdo
- **8-prefechamento.html**: 
  - Versão atualizada para "1.0 - outubro de 2025"
  - Remoção de cards de IAs Especializadas, Experimentais e Distribuídas
  - Texto atualizado: "Você explorou apenas a primeira versão deste projeto"
  - Descrição expandida de IAs Generativas

### Documentação de Áudio
- **AUDIO_CREDITS.md**: Documento criado com créditos completos dos arquivos de áudio
- **README.md**: Seção de créditos de áudio adicionada
- **PROMPTS.md**: Seção completa de prompts relacionados aos áudios

## 📚 Documentação Adicional

- **AUDIO_CREDITS.md** - Créditos e licenças dos arquivos de áudio
- **PROMPTS.md** - Histórico completo de prompts utilizados
- **voz/README.md** - Sistema de áudio e acessibilidade
- **voz/narracao/** - Textos para narração
- **voz/acessibilidade/** - Textos para acessibilidade

## 🎯 Objetivos do Projeto

- **Educação**: Explicar funcionamento interno das IAs
- **Reflexão**: Questionar impacto social e ambiental
- **Interatividade**: Engajar através de experiência imersiva
- **Acessibilidade**: Tornar conteúdo acessível a todos
- **Metodologia**: Demonstrar Vibe Coding Desprogramativo

---

*Projeto criado com foco em experiência visual imersiva, narrativa interativa sobre tecnologia e IA, e metodologia Vibe Coding Desprogramativo para desenvolvimento criativo.*