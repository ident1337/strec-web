function enter_website() {
    document.getElementById(`landing`).classList.add(`hidden`);
    document.getElementById(`content`).classList.remove(`hidden`);
    document.getElementById(`music-control`).classList.remove(`hidden`);
    document.getElementById(`music`).play();
    document.getElementById(`music`).volume = .5;

    document.getElementById(`video-control`).play();
    document.getElementById(`video-control`).volume = 0;
    type();
}

function open_servers() {
    window.open("https://github.com/ident1337");
}

function copy_discord() {
    const element = document.createElement('textarea');
    element.value = "sazy#1337";
    document.body.appendChild(element);
    element.select();
    document.execCommand('copy');
    document.body.removeChild(element);

    const discord = document.getElementById("discord");
    discord.innerText = "copied";
    setTimeout(() => discord.innerText = "discord", 1000);
}

function copy_tele() {
    const element = document.createElement('textarea');
    element.value = "@ident.";
    document.body.appendChild(element);
    element.select();
    document.execCommand('copy');
    document.body.removeChild(element);

    const tele = document.getElementById("tele");
    tele.innerText = "copied";
    setTimeout(() => tele.innerText = "telegram", 1000);
}