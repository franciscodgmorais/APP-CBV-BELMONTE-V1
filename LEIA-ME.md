# CBV BELMONTE — Cartografia V2 corrigida

## O que foi corrigido
- A camada **Limites de freguesia** consulta agora o serviço geográfico da Direção-Geral do Território (DGT), filtrando as freguesias do concelho de Belmonte.
- A carga dos limites é independente da consulta à OpenStreetMap/Overpass, para uma falha numa fonte não bloquear as outras camadas.
- Mensagens de estado no ecrã para explicar se os dados estão a carregar ou se uma fonte externa não respondeu.
- Mantidos os 7 hidrantes já existentes.

## Instalação
1. Extrair o ZIP.
2. No repositório GitHub Pages, substituir o `index.html` pelo desta pasta, mantendo os restantes ficheiros existentes (manifesto, ícone, service worker, etc.).
3. Fazer commit e aguardar a publicação.
4. No iPhone, abrir a página e atualizar. Se aparecer a versão antiga, fechar e voltar a abrir ou limpar os dados da página/cache.

## Fontes e limitações
- Limites administrativos: serviço público da DGT (CAOP). A geometria é obtida em tempo real, portanto requer Internet e disponibilidade do serviço.
- Base cartográfica: OpenStreetMap.
- A23, ferrovia, estações e passagens: dados OpenStreetMap/Overpass, sujeitos a cobertura e validação local.
- Não utilizar como cartografia operacional certificada sem validação pelas entidades competentes e no terreno.
