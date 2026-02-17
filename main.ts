controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.setDialogTextColor(15)
    game.setDialogFrame(img`
        ..bbbbbbbbbbbbbbbbbbbb..
        .bd111111111111111111db.
        bd1dbbbbbbbbbbbbbbbbd1db
        b1dbbbbbbbbbbbbbbbbbbd1b
        b1bd1111111111111111db1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1b111111111111111111b1b
        b1bd1111111111111111db1b
        bd1bbbbbbbbbbbbbbbbbb1db
        bbd111111111111111111dbb
        .bbbbbbbbbbbbbbbbbbbbbb.
        ..bbbbbbbbbbbbbbbbbbbb..
        `)
    music.play(music.createSong(assets.song`birthday1`), music.PlaybackMode.InBackground)
    game.showLongText("TO THE PRETTIEST GIRL I KNOW ", DialogLayout.Bottom)
})
scene.setBackgroundImage(assets.image`background 1`)
carnival.addLabelTo("HAPPY BIRTHDAY ML!!", carnival.Areas.Top, 15)
effects.confetti.startScreenEffect(5000)
