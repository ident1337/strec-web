function type() {
    const typewriter = new Typewriter(document.getElementById(`Typewriter`), {
        loop: true
    });

    const phrases = [
        
        '"wacho de barrio no consume molly"',
        "paylodeando metadatos ddi since 2012",
        "vulnerando maquinas gubernamentales since 2012",
        '"tan rico que el auto tiene ascensor"',
        '"el drako pintado louis vuitton"',
        '"intocable como pablo en medellin"'
        
    ]

    typewriter.typeString(phrases[getRandomInt(phrases.length)]).pauseFor(4000).deleteAll().pauseFor(60).callFunction(() => {
        typewriter.stop();
        type();
    }).start();
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
