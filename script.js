(function(){
  // ===== Frutos: cada um aparece sozinho na data marcada =====
  // Para acrescentar: copie um bloco, troque os campos e mantenha o formato AAAA-MM-DD.
  var FRUTOS = [
    { data:'2026-09-28', capitulo:'Marcos 11', versiculo:'Tende fé em Deus.', ref:'Marcos 11:22',
      meditacao:'Hoje Jesus olhou para uma figueira cheia de folhas, mas sem nenhum fruto. De longe ela parecia viva; de perto, não tinha nada pra oferecer. Folha é fácil de ter: parecer bem, falar bonito. Fruto é o que aparece na vida de quem anda com Ele todo dia. E no mesmo capítulo Jesus mostra por onde o fruto começa: tende fé em Deus.',
      pratica:'Escolhe uma área da sua vida que hoje está mais "folha" do que fruto e entrega ela em oração, com nome e tudo.' },

    { data:'2026-09-29', capitulo:'Marcos 12', versiculo:'Amarás o teu próximo como a ti mesmo.', ref:'Marcos 12:31',
      meditacao:'Perguntaram a Jesus qual era o maior mandamento, e Ele respondeu com dois que não se separam: amar a Deus com tudo e amar o próximo. No mesmo capítulo aparece a viúva que deu duas moedinhas, e Jesus disse que ela deu mais que todos. Amor não se mede pelo tamanho, mas pelo quanto custa.',
      pratica:'Faz hoje uma coisa por alguém que te custe um pouco: tempo, paciência ou orgulho.' },

    { data:'2026-09-30', capitulo:'Marcos 13', versiculo:'Passará o céu e a terra, mas as minhas palavras não passarão.', ref:'Marcos 13:31',
      meditacao:'Marcos 13 fala de coisas grandes e assustadoras: templos caindo, guerras, tempos difíceis. No meio de tudo isso, Jesus deixa um ponto fixo: o que Ele disse não passa. Quando tudo em volta muda, a Palavra continua no mesmo lugar.',
      pratica:'Escolhe um versículo desta semana e deixa ele à vista hoje: na tela do celular, num papel, onde der.' },

    { data:'2026-10-01', capitulo:'Marcos 14', versiculo:'Não seja, porém, o que eu quero, mas o que tu queres.', ref:'Marcos 14:36',
      meditacao:'No Getsêmani, Jesus foi completamente honesto: pediu que o cálice passasse. E depois se entregou. A oração dEle não escondeu o que Ele sentia, mas também não parou ali. Dá pra ser sincero com Deus sobre o que a gente quer e, mesmo assim, confiar no que Ele quer.',
      pratica:'Conta pra Deus, sem filtro, uma coisa que você quer muito. Depois termina com: seja feita a tua vontade.' },

    { data:'2026-10-02', capitulo:'Marcos 15', versiculo:'Verdadeiramente, este homem era o Filho de Deus.', ref:'Marcos 15:39',
      meditacao:'Quem reconheceu Jesus na cruz não foi um discípulo, foi o centurião romano, alguém que ninguém esperava. Às vezes as pessoas mais improváveis são as que enxergam primeiro. E a cruz, que parecia derrota, foi exatamente onde Ele foi reconhecido.',
      pratica:'Pensa numa pessoa que você acha "improvável" pra Deus e ora por ela pelo nome hoje.' },

    { data:'2026-10-03', capitulo:'Marcos 16', versiculo:'Já ressuscitou, não está aqui.', ref:'Marcos 16:6',
      meditacao:'As mulheres foram ao túmulo preocupadas com quem ia tirar a pedra. Quando chegaram, a pedra já estava fora do lugar. Muita coisa que a gente passa a noite se preocupando, Deus já resolveu antes de a gente chegar. Fim de Marcos: mais um livro juntos.',
      pratica:'Anota uma preocupação que você está carregando e, do lado, escreve: "a pedra já foi removida".' },

    { data:'2026-10-04', capitulo:'João 1', versiculo:'No princípio, era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus.', ref:'João 1:1',
      meditacao:'João começa diferente dos outros evangelhos: não pelo nascimento, mas pelo princípio de tudo. Antes de qualquer coisa existir, a Palavra já estava lá. E essa Palavra se fez carne e veio morar no meio de nós. Começar um livro novo juntos é começar de novo por Ele.',
      pratica:'Antes de pegar o celular amanhã cedo, a primeira palavra do seu dia é uma oração curta.' },

    { data:'2026-10-05', capitulo:'João 2', versiculo:'Fazei tudo quanto ele vos disser.', ref:'João 2:5',
      meditacao:'Nas bodas de Caná faltou vinho, e Maria não resolveu o problema: ela apontou pra Jesus e disse aos serventes para obedecer. Eles encheram talhas de água sem entender nada, e a água virou vinho. O milagre começou numa obediência que ainda não fazia sentido.',
      pratica:'Tem alguma coisa que você sabe que Deus está pedindo e está adiando? Dá o primeiro passo hoje.' },

    { data:'2026-10-06', capitulo:'João 3', versiculo:'Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.', ref:'João 3:16',
      meditacao:'É o versículo mais conhecido da Bíblia, e por isso é fácil ler sem sentir. Nicodemos foi até Jesus de noite, escondido, cheio de perguntas. E a resposta que recebeu foi essa: um amor tão grande que deu o que tinha de mais precioso. Esse "todo aquele" tem o seu nome.',
      pratica:'Lê o versículo de novo trocando "o mundo" e "todo aquele" pelo seu nome.' },

    { data:'2026-10-07', capitulo:'João 4', versiculo:'Mas aquele que beber da água que eu lhe der nunca terá sede.', ref:'João 4:14',
      meditacao:'A samaritana foi buscar água no horário em que ninguém ia ao poço, provavelmente pra não encontrar ninguém. E foi justamente ali que Jesus a esperava. Ela saiu tão transformada que largou o cântaro e foi contar pra cidade inteira.',
      pratica:'Pensa: de que "poço" você tem tentado tirar água que não mata a sede? Fala sobre isso com Deus hoje.' },

    { data:'2026-10-08', capitulo:'João 5', versiculo:'Levanta-te, toma a tua cama e anda.', ref:'João 5:8',
      meditacao:'O homem estava há 38 anos esperando alguém que o colocasse no tanque. Jesus não o colocou no tanque: mandou que ele se levantasse. Às vezes a gente espera a solução chegar do jeito que imaginou, e Deus tem um caminho que a gente nem considerava.',
      pratica:'Faz hoje aquela coisa pequena que você vem dizendo que "um dia" vai fazer.' },

    { data:'2026-10-09', capitulo:'João 6', versiculo:'Eu sou o pão da vida.', ref:'João 6:35',
      meditacao:'No mesmo capítulo o povo lembra do maná que caiu no deserto, e Jesus diz que o verdadeiro pão do céu é Ele. O maná precisava ser recolhido todo dia; não dava pra guardar pro dia seguinte. Esta árvore é um pouco isso: um pedaço de pão pra cada dia.',
      pratica:'Agradece hoje por três coisas simples que você recebeu sem pedir.' },

    { data:'2026-10-10', capitulo:'João 7', versiculo:'Se alguém tem sede, que venha a mim e beba.', ref:'João 7:37',
      meditacao:'No último dia da festa, Jesus se levantou e falou em voz alta. O convite não tem pré-requisito: só precisa ter sede. Não precisa estar arrumado, resolvido ou forte. A sede já é o bastante pra ir até Ele.',
      pratica:'Reserva cinco minutos hoje só pra ficar em silêncio com Deus, sem pedir nada.' },

    { data:'2026-10-11', capitulo:'João 8', versiculo:'Eu sou a luz do mundo; quem me segue não andará em trevas.', ref:'João 8:12',
      meditacao:'O capítulo começa com uma mulher cercada de gente pronta pra condená-la, e termina com Jesus falando de luz. Ele não fingiu que o erro não existia, mas também não deixou ninguém atirar pedra. A luz dEle mostra o que está errado sem esmagar quem errou.',
      pratica:'Segura hoje uma crítica que você ia fazer sobre alguém.' },

    { data:'2026-10-12', capitulo:'João 9', versiculo:'Uma coisa sei: é que, havendo eu sido cego, agora vejo.', ref:'João 9:25',
      meditacao:'O homem curado não sabia responder às perguntas difíceis dos fariseus. Mas sabia contar o que tinha acontecido com ele. Ninguém precisa ter todas as respostas pra testemunhar; basta contar o que Deus já fez.',
      pratica:'Lembra de uma coisa que Deus fez na sua vida e conta pra alguém hoje.' },

    { data:'2026-10-13', capitulo:'João 10', versiculo:'Eu sou o bom Pastor; o bom Pastor dá a sua vida pelas ovelhas.', ref:'João 10:11',
      meditacao:'Jesus diz que as ovelhas conhecem a voz do pastor e que Ele chama cada uma pelo nome. Não é um cuidado em massa: é pessoal. Ele conhece a sua voz, o seu jeito e o seu nome.',
      pratica:'Ora hoje usando o seu nome: "Senhor, a Ana está aqui".' },

    { data:'2026-10-14', capitulo:'João 11', versiculo:'Jesus chorou.', ref:'João 11:35',
      meditacao:'É o versículo mais curto da Bíblia. Jesus sabia que ia ressuscitar Lázaro poucos minutos depois, e mesmo assim chorou com Marta e Maria. Ele não pula a dor de ninguém pra chegar logo no final feliz. Ele chora junto.',
      pratica:'Manda uma mensagem pra alguém que está passando por algo difícil, só pra dizer que você lembrou dela.' },

    { data:'2026-10-15', capitulo:'João 12', versiculo:'Se o grão de trigo, caindo na terra, não morrer, fica ele só; mas, se morrer, dá muito fruto.', ref:'João 12:24',
      meditacao:'Todo fruto começa com uma semente que desaparece na terra. Parece perda, mas é assim que a vida se multiplica. Tem coisa em nós que precisa morrer pra que o fruto apareça: orgulho, pressa, vontade de estar sempre certo.',
      pratica:'Abre mão hoje de ter a última palavra numa conversa.' },

    { data:'2026-10-16', capitulo:'João 13', versiculo:'Um novo mandamento vos dou: Que vos ameis uns aos outros.', ref:'João 13:34',
      meditacao:'Jesus lavou os pés dos discípulos, inclusive os de quem ia traí-lo naquela mesma noite. Depois disse: amem como eu amei. O padrão não é amar quem merece, é amar como Ele ama.',
      pratica:'Serve alguém hoje numa tarefa que ninguém quer fazer, sem avisar que foi você.' },

    { data:'2026-10-17', capitulo:'João 14', versiculo:'Deixo-vos a paz, a minha paz vos dou.', ref:'João 14:27',
      meditacao:'Jesus disse isso na véspera da cruz, sabendo tudo o que vinha pela frente. A paz dEle não é a ausência de problema; é uma presença no meio do problema. Paz também é um dos frutos desta árvore.',
      pratica:'Quando algo te deixar ansiosa hoje, para, respira e repete: "a minha paz vos dou".' },

    { data:'2026-10-18', capitulo:'João 15', versiculo:'Eu sou a videira, vós, as varas; quem está em mim, e eu nele, este dá muito fruto.', ref:'João 15:5',
      meditacao:'Talvez o capítulo mais importante pra esta árvore. O galho não se esforça pra dar fruto: ele só fica ligado na videira. Cada um destes frutos é isso: um dia a mais permanecendo nEle. Não é força, é permanência.',
      pratica:'Volta nos frutos antigos desta árvore e escolhe o que mais ficou em você.' },

    { data:'2026-10-19', capitulo:'João 16', versiculo:'No mundo tereis aflições, mas tende bom ânimo; eu venci o mundo.', ref:'João 16:33',
      meditacao:'Jesus não prometeu uma vida sem aflição. Ele avisou que ela viria, e deu o motivo pra ter ânimo mesmo assim: Ele já venceu. A gente não luta pra vencer; a gente luta a partir da vitória dEle.',
      pratica:'Escreve uma aflição sua e embaixo: "Ele já venceu isso".' },

    { data:'2026-10-20', capitulo:'João 17', versiculo:'Santifica-os na verdade; a tua palavra é a verdade.', ref:'João 17:17',
      meditacao:'João 17 é Jesus orando pelos discípulos e também por todos os que iam crer depois, ou seja, por nós. Antes de a gente existir, Ele já tinha orado pela gente. E o que Ele pediu foi que fôssemos guardados pela Palavra.',
      pratica:'Ora hoje por uma pessoa como Jesus orou por nós: pedindo que ela seja guardada.' },

    { data:'2026-10-21', capitulo:'João 18', versiculo:'Disse-lhe Pilatos: Que é a verdade?', ref:'João 18:38',
      meditacao:'Pilatos fez a pergunta certa pra pessoa certa, e virou as costas sem esperar a resposta. A Verdade estava de pé na frente dele. Às vezes a gente também pergunta coisas a Deus e não fica tempo suficiente pra ouvir.',
      pratica:'Faz uma pergunta a Deus hoje e depois fica um minuto em silêncio.' },

    { data:'2026-10-22', capitulo:'João 19', versiculo:'Está consumado.', ref:'João 19:30',
      meditacao:'Duas palavras, e tudo muda. Não ficou nada pela metade, nenhuma dívida pendente. O que Jesus veio fazer, Ele terminou. A gente não precisa completar o que Ele já completou.',
      pratica:'Se tem alguma culpa que você insiste em carregar, entrega hoje: está consumado.' },

    { data:'2026-10-23', capitulo:'João 20', versiculo:'Disse-lhe Jesus: Maria!', ref:'João 20:16',
      meditacao:'Maria chorava no túmulo e não reconheceu Jesus, até que Ele chamou o nome dela. Bastou o nome. Lembra de Mateus 9, quando Ele chamou a mulher de "filha"? Deus continua fazendo isso: chamando a gente pelo nome.',
      pratica:'Passa um tempo hoje só agradecendo por ser conhecida pelo nome.' },

    { data:'2026-10-24', capitulo:'João 21', versiculo:'Senhor, tu sabes tudo; tu sabes que eu te amo.', ref:'João 21:17',
      meditacao:'Pedro tinha negado Jesus três vezes. Na praia, Jesus perguntou três vezes se ele o amava. Não foi pra humilhar, foi pra restaurar. Não importa quantas vezes a gente falhou: Ele sempre abre caminho de volta. Fim de João. Mais um livro juntos.',
      pratica:'Pensa em algo em que você falhou e recebe hoje o recomeço que Jesus deu a Pedro.' }
  ];

  // posições possíveis dos frutos na copa (a árvore enche com o tempo)
  var SLOTS = [
    [200,150],[140,190],[262,186],[170,100],[236,104],[200,70],[112,226],[296,222],
    [150,146],[252,146],[200,206],[96,176],[312,170],[176,236],[228,238],[124,110],
    [282,112],[200,112],[160,60],[244,62],[70,206],[330,200],[146,246],[256,248],
    [226,176],[176,176],[108,146],[296,142],[200,244],[132,72],[272,74],[216,36],
    [184,36],[88,236],[318,234],[160,212],[244,212],[196,184],[62,180],[340,176]
  ];

  var NS = 'http://www.w3.org/2000/svg';
  var slotsG = document.getElementById('slots');
  var sheet = document.getElementById('sheet'), bg = document.getElementById('bg');
  var lastFocus = null;
  var MESES = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];

  function fmt(d){ var p = d.split('-'); return +p[2] + ' de ' + MESES[+p[1]-1]; }
  function el(tag, attrs){ var e = document.createElementNS(NS, tag); for (var k in attrs) e.setAttribute(k, attrs[k]); return e; }

  function isoLocal(d){ return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); }
  var now = new Date(), HOJE = isoLocal(now);
  var ontem = new Date(now); ontem.setDate(now.getDate()-1); var ONTEM = isoLocal(ontem);
  FRUTOS = FRUTOS.filter(function(f){ return f.data <= HOJE; }).sort(function(a,b){ return a.data < b.data ? -1 : 1; });

  // dias de caminhada juntos (dia 1 = 21/08/2026)
  var INICIO = new Date(2026, 7, 21);
  var hoje0 = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  var diaN = Math.round((hoje0 - INICIO) / 86400000) + 1;
  document.getElementById('journey').textContent = 'Dia ' + diaN + ' da caminhada';

  // sequência dela abrindo o site (fica só neste navegador)
  (function(){
    var KEY = 'fruto-ana-sequencia', s = null;
    try { s = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch(e){}
    var note = '';
    if (!s) { s = {last:HOJE, count:1}; }
    else if (s.last === HOJE) { }
    else if (s.last === ONTEM) { s = {last:HOJE, count:s.count+1}; }
    else { if (s.count > 1) note = 'Recomeçar também faz parte do caminho.'; s = {last:HOJE, count:1}; }
    try { localStorage.setItem(KEY, JSON.stringify(s)); } catch(e){ return; }
    var el = document.getElementById('streak');
    el.hidden = false;
    el.textContent = '🔥 ' + s.count + (s.count === 1 ? ' dia seguido' : ' dias seguidos');
    document.getElementById('streakNote').textContent = note;
  })();

  var n = Math.min(FRUTOS.length, SLOTS.length);
  SLOTS.forEach(function(s, i){
    var x = s[0], y = s[1];
    if (i < n){
      var f = FRUTOS[i], isToday = (i === n - 1) && f.data === HOJE;
      var g = el('g', {class:'fruit' + (isToday ? ' today' : ''), tabindex:'0', role:'button',
        'aria-label':'Fruto de ' + fmt(f.data) + ', ' + f.capitulo + (isToday ? ' (hoje)' : '')});
      if (isToday) g.appendChild(el('circle', {class:'halo', cx:x, cy:y+2, r:15, fill:'var(--glow)', opacity:'.25'}));
      g.appendChild(el('line', {x1:x, y1:y-11, x2:x+1, y2:y-17, stroke:'var(--trunk)', 'stroke-width':'2.5', 'stroke-linecap':'round'}));
      g.appendChild(el('path', {d:'M'+(x+1)+','+(y-15)+' q8,-6 12,1 q-7,4 -12,-1z', fill:'var(--leaf3)'}));
      g.appendChild(el('circle', {class:'skin', cx:x, cy:y, r:10, fill:'var(--fruit)'}));
      g.appendChild(el('ellipse', {cx:x-3.5, cy:y-3.5, rx:3, ry:2.2, fill:'var(--fruit-hi)', opacity:'.9'}));
      g.addEventListener('click', function(){ open(i, g); });
      g.addEventListener('keydown', function(e){ if (e.key==='Enter'||e.key===' '){ e.preventDefault(); open(i, g); } });
      slotsG.appendChild(g);
    } else {
      slotsG.appendChild(el('circle', {cx:x, cy:y, r:3.2, fill:'var(--bud)', opacity:'.8'}));
    }
  });

  var temHoje = n && FRUTOS[n-1].data === HOJE;
  document.getElementById('count').textContent =
    (n === 1 ? '1 fruto até aqui.' : n + ' frutos até aqui.') +
    (temHoje ? ' O mais brilhante é o de hoje.' : ' O próximo está crescendo.');

  function open(i, g){
    var f = FRUTOS[i];
    lastFocus = g;
    g.classList.remove('pop'); void g.getBoundingClientRect(); g.classList.add('pop');
    document.getElementById('sheetMeta').textContent = fmt(f.data) + ' · ' + f.capitulo;
    var v = document.getElementById('sheetVerse');
    v.textContent = f.versiculo;
    var c = document.createElement('cite'); c.textContent = f.ref + ' (ARC)'; v.appendChild(c);
    document.getElementById('sheetMed').textContent = f.meditacao;
    document.getElementById('sheetPrac').textContent = f.pratica;
    setTimeout(function(){
      bg.classList.add('show'); sheet.classList.add('show');
      document.getElementById('close').focus();
    }, 380);
  }
  function close(){
    bg.classList.remove('show'); sheet.classList.remove('show');
    if (lastFocus) lastFocus.focus();
  }
  document.getElementById('close').addEventListener('click', close);
  bg.addEventListener('click', close);
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape') close(); });
})();
