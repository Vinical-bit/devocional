(function(){
  // ===== Frutos: adicione um novo objeto no fim da lista a cada dia =====
  var FRUTOS = [
    {
      data: '2026-09-28',
      capitulo: 'Marcos 11',
      versiculo: 'Tende fé em Deus.',
      ref: 'Marcos 11:22',
      meditacao: 'Hoje Jesus olhou para uma figueira cheia de folhas, mas sem nenhum fruto. De longe ela parecia viva; de perto, não tinha nada pra oferecer. Folha é fácil de ter: parecer bem, falar bonito. Fruto é outra coisa: é o que aparece na vida de quem anda com Ele todo dia. E logo depois, no mesmo capítulo, Jesus mostra por onde o fruto começa: tende fé em Deus.',
      pratica: 'Escolhe uma área da sua vida que hoje está mais "folha" do que fruto e entrega ela em oração, com nome e tudo.'
    }
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

  var n = Math.min(FRUTOS.length, SLOTS.length);
  SLOTS.forEach(function(s, i){
    var x = s[0], y = s[1];
    if (i < n){
      var f = FRUTOS[i], isToday = (i === n - 1);
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

  document.getElementById('count').textContent =
    n === 1 ? '1 fruto até aqui. Toca nele.' : n + ' frutos até aqui. O mais brilhante é o de hoje.';

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
