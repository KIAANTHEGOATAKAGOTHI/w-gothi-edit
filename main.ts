basic.forever(function () {
    const tucoSound = new Audio(
        "https://www.myinstants.com/media/sounds/get-out-tuco.mp3"
    );

    function playTuco(event) {
        if (
            (event.code === "AltLeft" || event.code === "AltRight") &&
            !event.repeat
        ) {
            tucoSound.currentTime = 0;
            tucoSound.play();
        }
    }

    document.addEventListener("keydown", playTuco, true);
})
