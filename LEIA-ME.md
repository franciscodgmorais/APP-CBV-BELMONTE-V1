# CBV BELMONTE — correção da Cartografia

## O que foi corrigido
- As camadas da Linha Ferroviária, A23, estações/passagens e nós de acesso consultam agora mais do que um servidor público OpenStreetMap/Overpass, caso a primeira fonte falhe.
- As linhas e pontos recebidos são adicionados às respetivas camadas, com identificação e ligação para navegação no Google Maps.
- A imagem enviada da rede de estradas já não é colocada por cima do mapa. O conteúdo foi traçado como linhas vetoriais coloridas e clicáveis, com os nomes visíveis ao tocar/selecionar.

## Importante
- O traçado extraído da fotografia é aproximado, porque a imagem não contém georreferenciação/controlo cartográfico suficiente para garantir a posição exata de cada troço. Usar como referência visual e confirmar os alinhamentos no terreno.
- A quilometragem oficial da A23 e dos nós não é inventada; só deve ser mostrada quando for confirmada por fonte rodoviária oficial.
- A obtenção de dados ferroviários, nós de acesso e outros elementos externos depende de Internet e da disponibilidade dos servidores públicos. Se os servidores estiverem indisponíveis, voltar a abrir Cartografia mais tarde.
- O conteúdo continua a não substituir cartografia operacional certificada.

## Atualizar GitHub Pages
1. Extrair o ZIP.
2. Substituir `index.html` no repositório `APP-CBV-BELMONTE-V1`.
3. Manter os restantes ficheiros e imagens já existentes no repositório. O ficheiro `rede-estradas-belmonte.jpg` deixa de ser necessário para sobreposição, mas pode ser mantido como referência.
4. Fazer Commit changes e atualizar a aplicação.


Atualização cartográfica: foram adicionados localmente os PK de referência da imagem fornecida para os nós (34) Benespera (199,2/199,7), (33) Maçainhas (190,1/190,6), (32) Caria (181,7/182,1) e (31) Covilhã Norte (172,6/172,9). Entrada/saída e sentido de circulação permanecem por confirmar documentalmente; não foram inferidos.
