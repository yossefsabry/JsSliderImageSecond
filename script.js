let imgs = document.querySelectorAll('.imgs-show img'),
    textContent = document.querySelector('.content h1'),
    left = document.querySelector("#left"),
    right = document.querySelector("#right");
startindex = 0;


let assets = [
    {
        contentBackground: "background # 1"
    },
    {
        contentBackground: "background # 2"
    },
    {
        contentBackground: "background # 3"
    },
]



right.onclick = function () {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].classList.remove("active")
    };
    startindex++;
    if (startindex >= imgs.length) {
        startindex = 0
    };
    imgs[startindex].classList.add("active")
    textContent.textContent = assets[startindex].contentBackground
};


left.onclick = function () {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].classList.remove("active")
    };
    startindex--;
    if (startindex < 0) {
        startindex = imgs.length - 1
    };
    imgs[startindex].classList.add("active")
    textContent.textContent = assets[startindex].contentBackground

};

