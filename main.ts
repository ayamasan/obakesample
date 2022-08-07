let ランダム = 0
let 点 = 0
game.setLife(3)
let 自分 = game.createSprite(2, 2)
let オバケ = game.createSprite(0, 0)
basic.forever(function () {
    ランダム = randint(0, 3)
    if (ランダム == 0) {
        オバケ.change(LedSpriteProperty.Y, -1)
    } else if (ランダム == 1) {
        オバケ.change(LedSpriteProperty.Y, 1)
    } else if (ランダム == 2) {
        オバケ.change(LedSpriteProperty.X, -1)
    } else {
        オバケ.change(LedSpriteProperty.X, 1)
    }
    if (自分.isTouching(オバケ)) {
        music.playTone(131, music.beat(BeatFraction.Half))
        game.removeLife(1)
        basic.pause(500)
        自分 = game.createSprite(2, 2)
        オバケ = game.createSprite(0, 0)
    }
    点 += 1
    game.setScore(点)
    basic.pause(randint(100, 300))
})
