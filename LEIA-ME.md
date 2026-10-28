# CBV BELMONTE — atualização de outubro de 2026

## Conteúdo
- `index.html` — aplicação atualizada com navegação Voltar/Início, partilha de localização, contactos úteis, EPH, cartografia e símbolos coloridos.
- `logo-cbv-belmonte.png` — emblema usado sem quadrado de fundo na interface.
- `frota-cbv-belmonte.jpg` — imagem de fundo já usada pela aplicação.
- `rede-estradas-belmonte.jpg` — fotografia enviada da rede de estradas do concelho, disponível como camada de referência visual.

## Atualizar o GitHub Pages
1. Extrai o ZIP.
2. No repositório `APP-CBV-BELMONTE-V1`, substitui `index.html`.
3. Adiciona também `rede-estradas-belmonte.jpg` à raiz do repositório.
4. Mantém os ficheiros existentes `sw.js`, `manifesto.webmanifesto` e restantes ficheiros do repositório; não os apagues.
5. Faz Commit changes e abre a aplicação novamente. Se aparecer a versão antiga, fecha a aplicação e volta a abrir ou faz uma atualização forçada.

## Notas importantes
- A camada dos Hidrantes Urbanos está criada, mas sem marcadores até existirem coordenadas georreferenciadas.
- A fotografia da rede de estradas é apresentada como sobreposição de referência aproximada; não está georreferenciada com precisão e não deve ser usada para navegação ou decisões operacionais como se fosse cartografia oficial.
- As camadas externas, distâncias rodoviárias, GPS, partilha e Google Maps dependem de ligação à Internet, permissões do dispositivo e disponibilidade dos serviços.
- Os nós de acesso e os quilómetros oficiais só aparecem quando os dados públicos disponíveis os fornecem; a quilometragem não é inventada.
- O contacto do CDOS de Castelo Branco incluído é 272 329 935, conforme acordado, e deve ser confirmado junto da entidade antes de uso operacional.
- Adulto e Pediátrico estão criados como áreas preparadas; ainda não contêm protocolos clínicos completos.
- A atualização foi verificada quanto à sintaxe JavaScript e ao conteúdo do pacote, mas não foi testada num iPhone nem validada em serviço operacional real.
