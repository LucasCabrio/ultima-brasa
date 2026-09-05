# A Última Brasa

RPG de ação 2D em português, feito para jogar diretamente no navegador.

## Campanha

Valverde é o refúgio central. Bosque dos Sussurros, Pântano das Lanternas e Forja do Sol Partido possuem três santuários de combate e um guardião cada. As três chamas liberam a Cidadela do Silêncio e o confronto final com Aurel. Inclui oito inimigos comuns, quatro chefes com fases e ataques distintos, duas missões secundárias, inscrições, baús, equipamentos, talentos e epílogo. A meta de duração é 30–60 minutos; não foi validada por uma partida humana completa cronometrada.

## Controles

WASD/setas: mover. J ou clique: atacar. Espaço: esquiva. K ou botão direito: magia. Q: poção. E: interagir. I: equipamentos. L: missões. M: mapa. Esc: pausa. Controles de toque aparecem em dispositivos com ponteiro coarse.

## Progresso

Salvamento automático local no navegador. Fogueiras restauram vida, garantem pelo menos quatro poções e definem o ponto de retorno. Morrer custa 10% das moedas. Rituais e chefes em andamento reiniciam ao recarregar; santuários concluídos, equipamentos, nível, baús e história são preservados. O salvamento não sincroniza entre dispositivos.

## Estrutura

- `public/game/core.js`: simulação determinística, mundo, combate e progressão.
- `public/game/render.js`: renderização Canvas 2D e mapas.
- `public/game/ui.js`: controles, menus, diálogos, áudio e persistência.
- `app/page.tsx`: entrada do Sites.
- `tests/game.test.mjs`: 18 verificações automatizadas das principais mecânicas e acessibilidade espacial dos objetivos.

Execute `node --test tests/game.test.mjs` para verificar a lógica. A interface foi inspecionada no navegador, incluindo início, mochila, mapa, magia, pausa e salvamento. A arte de capa foi gerada para este projeto; os sprites do jogo são desenhados pelo renderizador. Áudio sintetizado localmente, sem serviços externos. Tipografia possui fallback local.
