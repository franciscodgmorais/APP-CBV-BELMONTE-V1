# CBV BELMONTE — pacote local-first V2

## Publicação
Extrai o ZIP e carrega todos os ficheiros para a raiz do repositório GitHub Pages, colocando todos os ficheiros diretamente na raiz do repositório. Não é necessária a pasta raiz do repositório.

## O que muda nesta versão
- A abertura da cartografia deixa de consultar automaticamente Overpass e DGT.
- Os dados Overpass já guardados no `localStorage` deste iPhone são desenhados imediatamente.
- Se não houver cache, a aplicação informa e só descarrega dados quando carregares em **Atualizar dados cartográficos**.
- Os limites DGT guardados no iPhone são reutilizados; uma atualização DGT só ocorre quando pedida manualmente.
- Existem pontos ferroviários locais em GeoJSON: Belmonte-Manteigas, Maçainhas e uma passagem de nível de Benespera.
- Os sete hidrantes estão incluídos em GeoJSON local.
- O Service Worker guarda a aplicação, os dados locais, Leaflet e os mosaicos que forem efetivamente visualizados.

## Limitações conhecidas — importante para uso operacional
- O pacote não inclui ainda o traçado completo e validado da A23 nem a geometria contínua da Linha da Beira Baixa. É necessário obter e validar um extrato geográfico completo.
- As referências PK dos nós 31–34 permanecem sem coordenadas exatas confirmadas. Não usei o centro da povoação de Benespera como se fosse a saída da A23.
- Os limites de freguesia só ficam disponíveis offline se já tiverem sido guardados neste iPhone ou após a atualização manual.
- O fundo OSM/Esri é guardado apenas nos mosaicos efetivamente vistos; não existe cobertura de mosaicos pré-descarregada para toda a área.
- Navegação e cálculo de rotas em Google/Apple Maps dependem da aplicação externa, da cobertura e dos mapas offline do telemóvel.
- Não utilizar como cartografia operacional certificada sem validação por fonte oficial e teste no terreno.

## Primeiro teste
1. Publica todos os ficheiros, colocando todos os ficheiros diretamente na raiz do repositório. Não é necessária a pasta raiz do repositório.
2. Abre a app no iPhone com Internet e entra em Cartografia.
3. Se a A23/ferrovia não aparecerem, toca uma vez em **Atualizar dados cartográficos** e aguarda a conclusão.
4. Fecha completamente a app e volta a abrir. A próxima abertura usa a cache local sem consulta automática.
5. Testa em modo de voo as zonas e níveis de zoom que já visualizaste.

O Service Worker pode precisar de uma abertura adicional para assumir a nova versão no iOS.
