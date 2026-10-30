# CBV BELMONTE — pacote de preparação offline

## Ficheiros a publicar

Carrega/substitui no repositório mantendo esta estrutura:

- `index.html`
- `sw.js`
- `logo-cbv-belmonte.png`
- `frota-cbv-belmonte.jpg`
- `rede-estradas-belmonte.jpg`
- `dados/hidrantes-regadio.geojson`
- `dados/hidrantes-regadio.gpx`

Não coloques os ficheiros da pasta `dados` na raiz: mantém a pasta `dados`.

## O que esta versão prepara

- A aplicação e os ficheiros locais ficam pré-guardados pelo Service Worker.
- A biblioteca Leaflet (JavaScript/CSS) é guardada após a instalação/atualização do Service Worker.
- Os mosaicos do OpenStreetMap e da imagem de satélite são guardados à medida que são efetivamente consultados, com limite de 800 mosaicos para controlar o espaço ocupado.
- Os dados dos hidrantes já estão também disponíveis em GeoJSON e GPX na pasta `dados`.
- Os dados A23/ferrovia e limites que a aplicação já consulta continuam a usar a cache local própria do código.

## Limitação importante — cobertura do mapa offline

Este pacote **não contém uma cobertura completa de mosaicos cartográficos offline** para todo o concelho e A23. Não descarrega em massa mosaicos do OpenStreetMap. O mapa de fundo fica disponível offline apenas nas áreas/níveis de zoom que já tenham sido visualizados e guardados neste dispositivo. Para preparar uma área, abre a cartografia com Internet e percorre a zona e os níveis de zoom necessários.

A primeira abertura após publicar/atualizar o Service Worker pode exigir ligação e uma segunda abertura para a nova versão ficar ativa. A navegação externa (Google Maps/Apple Maps) e o cálculo de rotas dependem de Internet e/ou dos mapas offline configurados no telemóvel.

## Teste recomendado

1. Publica todos os ficheiros e pastas.
2. Abre a aplicação com Internet e aguarda que carregue.
3. Abre a Cartografia e percorre o concelho de Belmonte e o troço da A23 Covilhã Norte–Benespera, incluindo os níveis de zoom que costumas usar.
4. Fecha a aplicação, ativa modo de voo e volta a abrir a Cartografia.
5. Confirma que o mapa aparece nas zonas já visitadas e que os hidrantes/dados locais continuam acessíveis.

Esta versão é uma primeira camada de funcionamento offline. Não substitui a validação operacional da cartografia, dos acessos, dos PK e dos sentidos de circulação.
