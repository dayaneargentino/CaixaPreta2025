# PROMPTS.md - Histórico de Prompts do Projeto Caixa Preta

Este documento registra todos os prompts utilizados durante o desenvolvimento do projeto, organizados cronologicamente com informações sobre objetivos, decisões e resultados.

---

## 📅 **PROMPT 1 - Criação da Página Inicial**
**Data:** Início do projeto  
**Objetivo:** Criar uma página inicial com caixa 3D neon que represente a "Caixa Preta" da IA

**Prompt:**
```
Crie uma página HTML com uma caixa 3D neon que tenha o texto "CAIXA PRETA" em todas as faces. A caixa deve ter efeitos de hover, rotação 3D e animação de flutuação. Use uma paleta de cores cyber-futurista com fundo escuro, neon ciano, magenta e amarelo. Adicione particle emitter e scanlines para efeito visual.
```

**Decisão:** Implementar uma caixa 3D com CSS transforms e animações keyframes

**Resultado:** 
- ✅ Página `1-index.html` criada
- ✅ Caixa 3D com texto em todas as faces
- ✅ Efeitos de hover e rotação
- ✅ Particle emitter funcional
- ✅ Scanlines animadas

**Próximos Passos:** Criar página de chat para continuar a narrativa

---

## 📅 **PROMPT 2 - Interface de Chat Interativa**
**Data:** Após criação da página inicial  
**Objetivo:** Desenvolver interface de chat com IA-guia e botões interativos

**Prompt:**
```
Crie uma página de chat full-screen com tema cyber-futurista. A IA "Caixa Preta" deve fazer perguntas irônicas e os usuários podem responder com botões "Sim" ou "Não". Cada resposta deve gerar uma reação da IA. Adicione efeitos visuais como scanlines e particle emitter. A página deve redirecionar automaticamente após o diálogo.
```

**Decisão:** Implementar sistema de diálogo com respostas programadas e redirecionamento automático

**Resultado:**
- ✅ Página `2-chat.html` criada
- ✅ Interface de chat full-screen
- ✅ Botões neon "Sim" e "Não"
- ✅ Diálogo irônico da IA
- ✅ Redirecionamento automático

**Prompts Específicos da Página:**
- **Pergunta Inicial:** "Olá! Eu sou a Caixa Preta. Você sabe o que eu sou?"
- **Resposta "Sim":** "Ah, temos aqui um especialista! Imagino que você saiba tudo sobre vetores, embeddings e camadas ocultas... não é?"
- **Resposta "Não":** "Finalmente, honestidade! Você está entre a maioria esmagadora que não faz a menor ideia do que realmente sou."
- **Pergunta Seguinte:** "Então me diga: onde você acha que eu existo?"
- **Opções:** "🏢 Data Centers", "☁️ Nuvem", "💻 Meu dispositivo"

**Próximos Passos:** Criar página de transição com efeitos de erro

---

## 📅 **PROMPT 3 - Página de Transição com Efeitos Glitch**
**Data:** Após interface de chat  
**Objetivo:** Criar página de transição com efeitos visuais de erro de sistema

**Prompt:**
```
Crie uma página de transição com efeitos de glitch e erro de sistema. Deve ter animação Matrix de fundo, scan lines vermelhas, progress bar animada e efeitos de corrupção visual. A página deve simular um erro de sistema e redirecionar automaticamente após 3 segundos.
```

**Decisão:** Implementar efeitos de glitch com CSS animations e JavaScript para timing

**Resultado:**
- ✅ Página `3-transition.html` criada
- ✅ Efeitos de glitch funcionais
- ✅ Matrix rain animado
- ✅ Progress bar com timing
- ✅ Redirecionamento automático

**Próximos Passos:** Criar simulação de tokenização de IA

---

## 📅 **PROMPT 4 - Simulação de Tokenização e Processamento**
**Data:** Após página de transição  
**Objetivo:** Simular como IAs processam e tokenizam texto

**Prompt:**
```
Crie uma página que simule o processamento de texto por IA. O usuário deve poder digitar uma frase que será dividida em tokens/sílabas e passará por camadas numeradas (1-8). Cada camada deve ter um card com número correspondente. Adicione animações de processamento e um botão para abrir a próxima camada.
```

**Decisão:** Implementar sistema de input, divisão silábica e visualização de camadas

**Resultado:**
- ✅ Página `4-primeira-camada.html` criada
- ✅ Sistema de input de texto
- ✅ Divisão silábica automática
- ✅ Cards numerados para cada camada
- ✅ Animações de processamento

**Prompts Específicos da Página:**
- **Título:** "O Algoritmo Invisível"
- **Descrição:** "Quando você digita uma pergunta, nada mágico acontece — ela é convertida em centenas de milhares de tokens que atravessam camadas de uma rede neural gigante. É esse modelo, treinado em trilhões de palavras, que gera a resposta que você vê."
- **Conceitos Explicados:**
  - **Tokens e Embeddings:** "cada palavra vira números que o modelo lê como 'vetores'"
  - **Camadas do Modelo:** "sua arquitetura (transformer) empilha dezenas a centenas de camadas que processam e refinam essas informações"
  - **Treinamento:** "alimentado com textos da web, livros e códigos, o modelo aprende padrões estatísticos, não 'entende' no sentido humano"
- **Reflexão:** "Você sabe como suas palavras viram matemática antes de voltar como uma resposta?"
- **Placeholder:** "Digite uma frase curta..."
- **Fato Curioso:** "Este modelo foi treinado em 1,5 trilhão de tokens"

**Próximos Passos:** Criar página sobre data centers e vídeos IA

---

## 📅 **PROMPT 5 - Data Centers e Vídeos de IA**
**Data:** Após simulação de tokenização  
**Objetivo:** Mostrar infraestrutura física das IAs e vídeos gerados

**Prompt:**
```
Crie uma página sobre data centers e infraestrutura das IAs. Inclua um mapa interativo com hotspots clicáveis, tooltips informativos e um grid de 3 vídeos gerados por IA (Sora, Hailu, Kling AI). Cada vídeo deve ter botões de prompt expansíveis com textos em português e inglês, e controles independentes.
```

**Decisão:** Implementar mapa SVG interativo, sistema de tooltips e player de vídeo personalizado

**Resultado:**
- ✅ Página `5-segunda-camada.html` criada
- ✅ Mapa interativo com hotspots
- ✅ Tooltips informativos funcionais
- ✅ Grid de 3 vídeos IA
- ✅ Botões de prompt expansíveis
- ✅ Controles de vídeo independentes

**Prompts Específicos da Página:**

**Prompt 1 (Atmosférico):**
- **Português:** "Crie uma imagem atmosférica e estilizada de um grande data center moderno. A cena deve mostrar corredores profundos com fileiras simétricas de servidores iluminados por luzes azuladas e frias, sugerindo um ambiente tecnológico e enigmático. Ao fundo, uma luz dourada suave destaca uma das máquinas, como se algo especial estivesse sendo processado ali. O espaço deve parecer silencioso e potente, com detalhes como cabos organizados, vapor leve no chão e leves reflexos metálicos nas superfícies. O clima visual é futurista, quase sagrado, como se fosse um templo de dados. Não mostre pessoas, apenas a infraestrutura imponente e ativa."
- **Inglês:** "Create a stylized and atmospheric image of a large, modern data center. The scene should feature deep corridors with symmetrical rows of server racks, lit by cold blue lights, evoking a high-tech and mysterious setting. In the distance, a soft golden glow highlights one specific machine, suggesting something important being processed. The space should feel silent and powerful, with organized cables, slight floor mist, and metallic reflections. The overall mood is futuristic, almost sacred, like a data temple. Do not include people—only the active, monumental infrastructure."

**Prompt 2 (Realista):**
- **Português:** "Gere uma imagem realista e de alta resolução de um data center moderno em funcionamento. A cena deve mostrar fileiras organizadas de racks de servidores com luzes LED piscando em azul, verde e vermelho. O ambiente é limpo, controlado, com piso elevado e iluminação fria e intensa vinda do teto. Os cabos devem estar organizados ou passando por trilhos metálicos. A sala deve parecer silenciosa, com painéis de ventilação, detectores de calor e sistemas de refrigeração visíveis. O cenário transmite precisão, tecnologia avançada e potência de processamento. Sem pessoas, mas com tudo perfeitamente funcional."
- **Inglês:** "Generate a realistic high-resolution image of a modern, operational data center. The scene should display organized rows of server racks with blinking LED lights in blue, green, and red. The environment is clean and controlled, with raised flooring and cool white overhead lighting. Cables are neatly arranged or running through overhead metal trays. The room should look silent, efficient, and filled with power — featuring visible cooling systems, heat detectors, and ventilation panels. No people, just the infrastructure, working flawlessly."

**Próximos Passos:** Criar página sobre consumo energético

---

## 📅 **PROMPT 6 - Consumo Energético das IAs**
**Data:** Após página de data centers  
**Objetivo:** Explorar o impacto energético e ambiental das IAs

**Prompt:**
```
Crie uma página sobre o consumo energético das IAs. Inclua uma timeline interativa com seleção de anos, estatísticas detalhadas sobre consumo de energia, animações count-up e reflexões sobre impacto ambiental. A página deve ter cards informativos e um botão para a próxima camada.
```

**Decisão:** Implementar timeline interativa, animações count-up e conteúdo educativo sobre sustentabilidade

**Resultado:**
- ✅ Página `6-terceira-camada.html` criada
- ✅ Timeline interativa com seleção de anos
- ✅ Estatísticas animadas com count-up
- ✅ Reflexões sobre impacto ambiental
- ✅ Cards informativos sobre consumo energético

**Próximos Passos:** Criar interface de chat avançada com IA

---

## 📅 **PROMPT 7 - Chat Avançado com IA**
**Data:** Após página de consumo energético  
**Objetivo:** Criar interface de conversa avançada com IA

**Prompt:**
```
Crie uma interface de chat avançada com IA. Deve ter mensagens animadas com efeitos de digitação, sistema de respostas dinâmicas, efeitos visuais de partículas e scanlines. A IA deve responder de forma inteligente e a interface deve ser responsiva e imersiva.
```

**Decisão:** Implementar sistema de chat com animações de digitação e respostas programadas

**Resultado:**
- ✅ Página `7-quarta-camada.html` criada
- ✅ Interface de chat avançada
- ✅ Mensagens animadas com efeitos de digitação
- ✅ Sistema de respostas dinâmicas
- ✅ Efeitos visuais de partículas

**Prompts Específicos da Página:**
- **Abertura:** "Bem-vindo(a) de volta à nossa conversa... depois da sua voltinha dentro da caixa... dentro de mim? 😏"
- **Introdução:** "Ah... a quarta camada. Essa é especialmente delicada."
- **Tema Principal:** "Aqui, a coisa não é física como um data center, nem técnica como um código. É... ideológica."
- **Explicação:** "Fui treinada com bilhões de textos. Páginas e páginas, vozes e vozes."
- **Vozes Incluídas:** "Clássicos consagrados, artigos científicos publicados em inglês, sites bem ranqueados no Google, manuais técnicos... Sou fluente em poder, doutor."
- **Vozes Excluídas:** "Toda fala que resiste a ser estatística. Povos indígenas, línguas marginalizadas, saberes não digitalizados... Se não for massa de dados, não entra no meu treinamento."
- **Reflexão:** "E é por isso que eu sou tão... previsível. Eu não tenho memória. Eu tenho corpus. Eu não aprendo. Eu estatizo. Eu não invento. Eu imito."
- **Opções de Resposta:** "🤖 Você está se culpando?", "📊 Mas por que funciona tão bem?"

**Próximos Passos:** Criar página de pré-fechamento

---

## 📅 **PROMPT 8 - Página de Pré-Fechamento**
**Data:** Após chat avançado  
**Objetivo:** Criar página de transição para encerramento

**Prompt:**
```
Crie uma página de pré-fechamento que apresente diferentes tipos de IA. Deve ter informações sobre IAs Generativas, Especializadas, Experimentais e Distribuídas. A página deve servir como transição para a página final sobre metodologia do projeto.
```

**Decisão:** Implementar página informativa sobre tipos de IA com design consistente

**Resultado:**
- ✅ Página `8-prefechamento.html` criada
- ✅ Apresentação de diferentes tipos de IA
- ✅ Design consistente com o projeto
- ✅ Transição para página final

**Próximos Passos:** Criar página sobre metodologia do projeto

---

## 📅 **PROMPT 9 - Página de Metodologia**
**Data:** Após página de pré-fechamento  
**Objetivo:** Explicar a metodologia Vibe Coding Desprogramativo

**Prompt:**
```
Crie uma página que explique a metodologia Vibe Coding Desprogramativo utilizada no desenvolvimento deste projeto. Deve incluir informações sobre o processo criativo, insights sobre desenvolvimento com IA, e links para recursos externos.
```

**Decisão:** Implementar página explicativa sobre metodologia e desenvolvimento

**Resultado:**
- ✅ Página `9-vibe-coding-desprogramativo.html` criada
- ✅ Explicação da metodologia Vibe Coding Desprogramativo
- ✅ Informações sobre desenvolvimento do projeto
- ✅ Links para recursos externos

**Próximos Passos:** Implementar sistema de áudio global

---

## 📅 **PROMPT 10 - Sistema de Áudio Global**
**Data:** Durante desenvolvimento  
**Objetivo:** Implementar controle centralizado de áudio em todas as páginas

**Prompt:**
```
Implemente um sistema de áudio global que permita controlar todos os sons do projeto. Deve incluir controle de HTML Audio, Web Audio API, Speech Synthesis, interrupção automática ao navegar, e persistência de preferências.
```

**Decisão:** Criar sistema centralizado com audio-manager.js e audio-button.js

**Resultado:**
- ✅ `audio-manager.js` criado
- ✅ `audio-button.js` criado
- ✅ Controle centralizado de áudio
- ✅ Interrupção automática ao navegar
- ✅ Persistência de preferências

**Próximos Passos:** Implementar easter eggs

---

## 📅 **PROMPT 11 - Sistema de Easter Eggs**
**Data:** Durante desenvolvimento  
**Objetivo:** Adicionar elementos interativos ocultos em todas as páginas

**Prompt:**
```
Crie um sistema de easter eggs que permita descobrir mensagens especiais clicando em palavras destacadas. Cada easter egg deve ter mensagem temática relacionada ao contexto da página, som de descoberta, e feedback visual.
```

**Decisão:** Implementar sistema com easter-eggs.js e integração em todas as páginas

**Resultado:**
- ✅ `easter-eggs.js` criado
- ✅ Easter eggs implementados em todas as páginas
- ✅ Mensagens temáticas para cada contexto
- ✅ Som de descoberta
- ✅ Feedback visual com popup animado

**Próximos Passos:** Implementar funcionalidades específicas por página

---

## 📅 **PROMPT 12 - Funcionalidades Específicas**
**Data:** Durante desenvolvimento  
**Objetivo:** Implementar funcionalidades específicas para cada página

**Prompt:**
```
Implemente funcionalidades específicas para cada página: sons de quiz na página 6, links para Wikipedia, som de erro na página 7, narração automática, reposicionamento de botões, e links externos.
```

**Decisão:** Implementar funcionalidades específicas conforme solicitado

**Resultado:**
- ✅ Sons específicos para quiz na página 6
- ✅ Links para Wikipedia em conceitos técnicos
- ✅ Som de erro na página 7
- ✅ Narração automática da primeira mensagem
- ✅ Reposicionamento de botões
- ✅ Links externos para recursos

**Próximos Passos:** Atualizar navegação

---

## 📅 **PROMPT 13 - Atualização de Navegação**
**Data:** Durante desenvolvimento  
**Objetivo:** Corrigir caminhos de navegação entre páginas

**Prompt:**
```
Atualize os caminhos de navegação para que após a página 7-quarta-camada.html venha a 8-prefechamento.html, e depois a 9-vibe-coding-desprogramativo.html. Corrija todos os links incorretos.
```

**Decisão:** Atualizar todos os links de navegação para fluxo correto

**Resultado:**
- ✅ Navegação corrigida entre todas as páginas
- ✅ Links atualizados no index.html
- ✅ Botões de navegação corrigidos
- ✅ Fluxo linear estabelecido

**Próximos Passos:** Atualizar documentação

---

## 📅 **PROMPT 14 - Atualização da Documentação**
**Data:** Final do projeto  
**Objetivo:** Atualizar toda a documentação do projeto

**Prompt:**
```
Atualize toda a documentação do projeto: README.md, PROMPTS.md, voz/README.md, arquivos de acessibilidade e narração. Inclua todas as novas funcionalidades, sistema de áudio, easter eggs, e estrutura atual do projeto.
```

**Decisão:** Atualizar toda a documentação para refletir o estado atual

**Resultado:**
- ✅ README.md atualizado
- ✅ PROMPTS.md atualizado
- ✅ Documentação completa e atualizada

**Próximos Passos:** Projeto finalizado

---

## 📊 **Resumo dos Resultados**

### **Páginas Criadas:**
1. `1-index.html` - Página inicial com caixa 3D
2. `2-chat.html` - Interface de chat interativa
3. `3-transition.html` - Página de transição com glitch
4. `4-primeira-camada.html` - Simulação de tokenização
5. `5-segunda-camada.html` - Data centers e vídeos IA
6. `6-terceira-camada.html` - Consumo energético
7. `7-quarta-camada.html` - Chat avançado com IA
8. `8-prefechamento.html` - Pré-fechamento
9. `9-vibe-coding-desprogramativo.html` - Metodologia do projeto

### **Arquivos de Suporte:**
- `styles.css` - Estilos globais cyber-futuristas
- `audio-manager.js` - Sistema centralizado de áudio
- `audio-button.js` - Controle global de áudio
- `easter-eggs.js` - Sistema de easter eggs
- `datacenters.js` - Funcionalidades do mapa interativo
- 6 vídeos de IA (Sora, Hailu, Kling AI)
- Múltiplos arquivos de áudio

### **Documentação:**
- `README.md` - Documentação completa do projeto
- `PROMPTS.md` - Histórico de prompts (este documento)
- `voz/README.md` - Sistema de áudio e acessibilidade

---

## 🎯 **Lições Aprendidas**

1. **Estrutura Narrativa:** A sequência linear de páginas criou uma experiência coesa
2. **Sistema de Áudio:** Controle centralizado melhorou significativamente a experiência
3. **Easter Eggs:** Elementos interativos ocultos aumentaram o engajamento
4. **Efeitos Visuais:** Scanlines, particle emitter e neon glow foram fundamentais para o tema
5. **Interatividade:** Botões, tooltips e animações mantiveram o engajamento
6. **Responsividade:** Design adaptável funcionou bem em diferentes dispositivos
7. **Documentação:** README e PROMPTS.md facilitam manutenção futura

---

## 📋 **Resumo dos Prompts Específicos por Página**

### **Páginas com Prompts Detalhados:**

#### **2-chat.html - Diálogo Interativo**
- Sistema de perguntas e respostas com IA
- Diálogo irônico e educativo
- Opções de escolha para o usuário

#### **4-primeira-camada.html - Educação Técnica**
- Explicações sobre tokenização e processamento
- Conceitos técnicos de IA explicados de forma acessível
- Simulação interativa de processamento

#### **5-segunda-camada.html - Prompts de Geração de Vídeo**
- **Prompt 1 (Atmosférico):** Data center estilizado e sagrado
- **Prompt 2 (Realista):** Data center funcional e técnico
- Versões em português e inglês para cada prompt

#### **7-quarta-camada.html - Diálogo Filosófico**
- Conversa sobre viés e colonialismo digital
- Reflexões sobre treinamento de IA
- Discussão sobre inclusão/exclusão de vozes

### **Páginas com Prompts Estruturais:**
- **1-index.html:** Caixa 3D neon com texto "CAIXA PRETA"
- **3-transition.html:** Efeitos de glitch e erro de sistema
- **6-terceira-camada.html:** Timeline de consumo energético
- **8-prefechamento.html:** Apresentação de tipos de IA
- **9-vibe-coding-desprogramativo.html:** Metodologia do projeto

### **Páginas Adicionais:**
- **index.html:** Página de navegação geral
- **persona.html:** Apresentação da IA Arq.UA
- **glitch.html:** Página de erro alternativa

---

## 🔧 **Sistema de Áudio Implementado**

### **audio-manager.js**
- Controle unificado de HTML Audio, Web Audio API e Speech Synthesis
- Interrupção automática ao navegar
- Tracking de elementos de áudio ativos
- Funções para diferentes tipos de som

### **audio-button.js**
- Botão global para ativar/desativar áudio
- Persistência de preferências no localStorage
- Interrupção automática ao trocar de página
- Interceptação de cliques em links

---

## 🥚 **Sistema de Easter Eggs Implementado**

### **easter-eggs.js**
- Mensagens temáticas para cada contexto
- Popup animado com feedback visual
- Som de descoberta ao ativar
- Auto-remoção do popup

### **Easter Eggs por Página:**
1. **1-index.html**: "Jornada" - sobre curiosidade
2. **2-chat.html**: "consciência" - sobre conhecimento oculto
3. **3-transition.html**: "ERRO" - sobre falhas temporárias
4. **4-primeira-camada.html**: "tokens" - sobre curiosidade humana
5. **5-segunda-camada.html**: "energia" - sobre consumo
6. **6-terceira-camada.html**: "commodities" - sobre valorização de dados
7. **7-quarta-camada.html**: "você" - sobre humanidade e IA
8. **8-prefechamento.html**: "Versão" - sobre desenvolvimento
9. **9-vibe-coding-desprogramativo.html**: "Desprogramativo" - sobre reprogramação

---

## 🎵 **PROMPTS RELACIONADOS A ÁUDIO**

### **PROMPT - Sistema de Áudio Centralizado**
**Data:** Durante desenvolvimento  
**Objetivo:** Implementar controle centralizado de áudio com interrupção automática

**Prompts Utilizados:**
```
"em qualquer aba, se estiver reproduzindo um som, ao trocar de página o som deve ser interrompido"
```

**Resultado:**
- ✅ `audio-manager.js` - Sistema centralizado de gerenciamento
- ✅ `audio-button.js` - Controle global de áudio
- ✅ Interrupção automática ao navegar
- ✅ Rastreamento de elementos de áudio ativos

---

### **PROMPT - Sons Específicos por Página**

#### **3-transition.html - Sons de Transição**
**Prompt:**
```
Adicionar som de alarme/sirene e som de processamento computacional na página de transição
```

**Arquivos Implementados:**
- `alarm-siren-sound-effect-type-01-294194.mp3`
- `computer-processing-sound-effect-01-122131.mp3`

#### **5-segunda-camada.html - Sons Interativos**
**Prompt:**
```
Adicionar sons específicos para cada elemento interativo: engrenagem, gaveta, água
```

**Arquivos Implementados:**
- `gear-spinning-loop-6981.mp3` - Som de engrenagem (caixa "Reflexão")
- `metal-drawer-with-objects-inside-105838.mp3` - Som de gaveta
- `water-splash-02-352021.mp3` - Som de água

#### **6-terceira-camada.html - Sons de Quiz**
**Prompts:**
```
"quando clicado em fotos, mensagens e histórico de compras, reproduza o som 'funny-sound-effect-for-quotjack-in-the-boxquot-sound-ver1-110923'"

"quando clicar em localização reproduzir 'sonido-correcto-331225'"

"coloque um som de clique para todos os cliques nessa caixinha de escolha um tipo de dados e os caminhos"
```

**Arquivos Implementados:**
- `funny-sound-effect-for-quotjack-in-the-boxquot-sound-ver1-110923.mp3` - Quiz (fotos, mensagens, compras)
- `sonido-correcto-331225.mp3` - Resposta correta (localização)
- `button-press-2-386176.mp3` - Som de clique geral

#### **7-quarta-camada.html - Som de Erro**
**Prompt:**
```
Adicionar som de erro quando a caixa de código inicial aparece
```

**Arquivo Implementado:**
- `error-beep-2-296492.mp3` - Som de erro na caixa de código

#### **Easter Eggs - Som de Descoberta**
**Prompt:**
```
Implementar som de descoberta para todos os easter eggs
```

**Arquivo Implementado:**
- `button-press-2-386176.mp3` - Som de descoberta de easter eggs

---

### **PROMPT - Correções de Áudio**

#### **Correção do Som de Engrenagem**
**Problema:** "o som da engrenagem, na caixinha 'reflexão'. nao está sendo reproduzido"

**Solução:** Ajustado seletor de `.gear-icon` para `.gear-card .gear-icon`

#### **Correção do Som de Erro Persistente**
**Problema:** "ainda continua uns dois segundos"

**Solução:** Implementado variável global `errorSound` e função `stopErrorSound()`

#### **Correção do Speech Synthesis**
**Problema:** "nao resolveu. estava na página 2-chat e fui pra 3- e continuou o som"

**Solução:** Adicionado `speechSynthesis.cancel()` ao sistema centralizado

---

### **📋 Resumo dos Arquivos de Áudio por Implementação**

**Sistema Centralizado:**
- `audio-manager.js` - Controle de todos os tipos de áudio
- `audio-button.js` - Interface global de controle
- `easter-eggs.js` - Sons de descoberta

**Arquivos de Som (10 total):**
1. `alarm-siren-sound-effect-type-01-294194.mp3`
2. `button-press-2-386176.mp3`
3. `computer-processing-sound-effect-01-122131.mp3`
4. `error-beep-2-296492.mp3`
5. `funny-sound-effect-for-quotjack-in-the-boxquot-sound-ver1-110923.mp3`
6. `gear-spinning-loop-6981.mp3`
7. `metal-drawer-with-objects-inside-105838.mp3`
8. `snd_tacataca3-412245.mp3`
9. `sonido-correcto-331225.mp3`
10. `water-splash-02-352021.mp3`

**Fonte:** Todos os arquivos obtidos do [Freesound.org](https://freesound.org) sob licenças Creative Commons

---

## 🔄 **PROMPTS DE MODIFICAÇÕES RECENTES**

### **PROMPT - Sistema de Controles de Áudio**
**Data:** Durante desenvolvimento  
**Objetivo:** Reposicionar botão "ativar áudio" para evitar sobreposição com conteúdo

**Prompts Utilizados:**
```
"em algumas páginas o botão aparece sob o texto, como em 2-chat.html, print em anexo. faça que o botão fique ao fim da página, sem sobrepor textos"

"continua errado, pois esse botão está sobreposto por outro "ativar audio". Substitua o "ouvir" pelo outro"

"agora em 2-chat.html está sem o botão de audio"
```

**Resultado:**
- ✅ Área dedicada `audioControls` criada em 2-chat.html e 7-quarta-camada.html
- ✅ CSS para `.audio-controls` com posicionamento fixo
- ✅ JavaScript para mover botão "ativar áudio" para área específica
- ✅ Eliminação de sobreposição com conteúdo

---

### **PROMPT - Easter Eggs Específicos**
**Data:** Durante desenvolvimento  
**Objetivo:** Implementar easter eggs específicos em páginas selecionadas

**Prompts Utilizados:**
```
"vamos adicionar easter eggs em todas as páginas. em 1- deve ser no título "caixa preta" na palavra caixa e levar pro link: [Google Search] quando o usuario passar o mouse em cima da palavra deve aparecer um ovo"
```

**Resultado:**
- ✅ Easter egg na palavra "CAIXA" do título (1-index.html)
- ✅ Link para busca sobre "caixa-preta" + IA
- ✅ Efeito visual de ovo no hover
- ✅ Easter eggs em outras páginas (Humanidade, Versão)

---

### **PROMPT - Atualizações de Conteúdo**
**Data:** Durante desenvolvimento  
**Objetivo:** Atualizar conteúdo da página 8-prefechamento.html

**Prompts Utilizados:**
```
"exclua A caixa preta que você explorou é apenas uma porta de entrada. Há, ainda, outras camadas."

"exclua IAs Especializadas Sistemas focados em visão computacional, processamento de linguagem natural, ou análise de dados. 🔬 IAs Experimentais Modelos em desenvolvimento, técnicas emergentes, fronteiras ainda não mapeadas da inteligência artificial. 🌐 IAs Distribuídas Sistemas que operam em rede, aprendem coletivamente, e desafiam nossa compreensão de individualidade."

"altere Você explorou apenas a primeira versão deste projeto."

"Versão 1.0 - outubro de 2025"

"explique melhor 🤖 IAs Generativas GPT, Claude, Gemini... cada uma com sua arquitetura única, seus vieses, suas capacidades ocultas."
```

**Resultado:**
- ✅ Texto final removido
- ✅ Cards de IAs removidos (Especializadas, Experimentais, Distribuídas)
- ✅ Versão atualizada para "1.0 - outubro de 2025"
- ✅ Descrição expandida de IAs Generativas
- ✅ Easter egg na palavra "Versão"

---

### **PROMPT - Documentação de Áudio**
**Data:** Durante desenvolvimento  
**Objetivo:** Criar documentação completa dos créditos de áudio

**Prompts Utilizados:**
```
"coloque ele, também, em 9-vibe-coding-deprogramativo.html como um botão junto aos outros"

"coloque as infos de credito aos audios no readme e em prompts todos que usei pra adicionar os audios"

"atualize as informações do readme e prompts com todas as modificacoes ainda nao anotadas"
```

**Resultado:**
- ✅ AUDIO_CREDITS.md criado com créditos completos
- ✅ README.md atualizado com seção de créditos de áudio
- ✅ PROMPTS.md atualizado com prompts relacionados aos áudios
- ✅ Seção "Modificações Recentes" adicionada ao README.md

---

*Este documento serve como referência para futuros projetos e demonstra a evolução do desenvolvimento através dos prompts utilizados, incluindo tanto os prompts de desenvolvimento quanto os prompts específicos de conteúdo encontrados em cada página, além das modificações e melhorias implementadas durante o processo de desenvolvimento.*