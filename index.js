function sim() {
    alert('Aeee brigado ❤️🤙🏻')
}

function desvia(t) {
    var btn = t;
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(0, 90);
    btn.style.lef = geraPosicao(0, 90);
    console.log('opa, desviei...');
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + '%';
}