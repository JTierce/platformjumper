scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile8, function (sprite, location) {
    game.over(false)
})
function tileSet (board: number) {
    if (board == 0) {
        tiles.loadMap(tiles.createMap(tiles.createTilemap(hex`3300080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0c0000000000000000000000000000000000000000000000000000010200000000000000000000000000000000000000070b05070c00000000000000000000000000000000000000000000000001050500000000000000000000000d00000d00000000090507050700000000000000000000000000000000000000000000000105050500000000000d00000d0000010202020300000000090b070a00000000000000000000000000000000000000000000010505050b0e000d0000010202030000040505050600000000000808000000000000000d00000000000d00000d0000000000010505050b0b0b0102030f040505060f0f04050505060f0f0f0f0f0f0f0f0f0f0f0f010202030f0f0f0f01020202030f0f0f0105050b0b0b0b0b`, img`
            ...................................................
            ...................................................
            ....................22..........................22.
            ..................22222........................222.
            ..................22222.......................2222.
            ..........22222....2222......................22222.
            ....2222..22222.....22......................2222222
            222.2222..22222............2222....22222...22222222
            `, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath4,sprites.castle.tilePath5,sprites.castle.tilePath6,sprites.builtin.forestTiles28,sprites.builtin.oceanSand12,sprites.builtin.oceanSand13,sprites.builtin.oceanSand15,sprites.dungeon.darkGroundCenter,sprites.builtin.oceanSand11,sprites.builtin.forestTiles0,sprites.dungeon.collectibleInsignia,myTiles.tile8], TileScale.Sixteen)))
    } else if (board == 1) {
        tiles.loadMap(tiles.createMap(tiles.createTilemap(hex`32000800000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000070000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006000000000000000000000102030000000000000000000000000000000001020203000000000102020300000000000000000000000000000000000000050505030000000000000000000000000000010505050c000000000b0505050300000000000000000000000000000000000f080505050300000000000000000000000001050505050c000000000b0505050503000000010300000001020202020202100f0f0805050502020300000103000000000105050508050c0d0e0d0e0e08050505050203000b040000000b050505050505050f0f0f0f05050505040000090a000000000b08050508080d0d0d0e0d0805080508050804000b040000000b05050505050505`, img`
            ........................................2.........
            ........................................2.........
            ........................................2.........
            .222................2222....2222..................
            .2222..............22222....22222.................
            .22222............222222....222222...22...22222222
            .22222222..22....2222222....22222222.22...22222222
            222222222..22....2222222....22222222.22...22222222
            `, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath6,sprites.castle.tilePath5,sprites.builtin.oceanSand12,sprites.builtin.oceanSand11,sprites.dungeon.darkGroundCenter,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tilePath4,sprites.builtin.oceanDepths0,sprites.dungeon.hazardLava0,sprites.dungeon.hazardLava1,myTiles.tile1,sprites.dungeon.collectibleInsignia], TileScale.Sixteen)))
    } else if (board == 2) {
        tiles.loadMap(tiles.createMap(tiles.createTilemap(hex`3200080001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010201010202020201020202020101010202010101010202020202010101010102020101020202010101020101020201010101050202050505050205050505020202050502020202050505050505020202020505020205050505020205020205050202020203050503030303050503050303030305050505050505030303050505050503050503030303050305050505030303030303050403050404040403030403040404040303030303030304040403030303030403030404040403040303030304040404040403040403040404040606060606040404040404040404040404040406060606060606060404040404040406060606060606060604040404040406080807070704040406060606060606060404040707070807080807060404040404060808080707080807070906040404060707070808070404070707070707070707040404070708070808080807060404040607070807080807070807`, img`
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            .......22222..............22222222.......222222222
            ......222222...22222222...222222222.....2222222222
            22...2222222..222222222...2222222222...22222222222
            `, [myTiles.transparency16,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,sprites.builtin.oceanSand8,sprites.dungeon.darkGroundCenter,myTiles.tile7,myTiles.tile11], TileScale.Sixteen)))
    } else if (board == 3) {
        tiles.loadMap(tiles.createMap(tiles.createTilemap(hex`320008000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101020101020202020102020202010101020201010101020202020201010101010202010102020201010102010102020101010105020205050505020505050502020205050202020205050505050502020202050502020505050502020502020505020202020305050303030305050305030303030505050505050503030305050505050305050303030305030505050503030303030305040305040404040303040304040404030303030303030404040303030303040303040404040304030303030404040404040a0404030404040406060606060404040404040404040404040404060606060606060604040404040404060606060606060606040404040404060808070707040404060606060606060604040407070708070808070604040404040608080807070808070709060b0b0b060707070808070b0b0707070707070707070b0b0b0707080708080808070b0b0b0b0b07070807080807070807`, img`
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            ..................................................
            .......22222..............22222222.......222222222
            ......222222...22222222...222222222.....2222222222
            22...2222222..222222222...222222222.....2222222222
            `, [myTiles.transparency16,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,sprites.builtin.oceanSand8,sprites.dungeon.darkGroundCenter,myTiles.tile7,myTiles.tile11,myTiles.tile9,myTiles.tile10], TileScale.Sixteen)))
    } else {
    	
    }
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile9, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile11, function (sprite, location) {
    tileSet(3)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.over(false)
})
function initStart () {
    scene.setBackgroundColor(15)
    scene.setBackgroundImage(img`
        9999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        9999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        9999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        9999999999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        9999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111111111111111111111111111199111111111111111
        9999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111111111111111111111111119999911111111111199
        9999999999999999999999999999999999999999991111111111119999999999999999999111111111111111111111111111111111111111111111111111111111111111111999999999991111119999
        9999999999999999999999999999111111999999911111111111111199999999999999999111111111111111111111111111111111111111111111111111111111111111199999999999999999999999
        9999999999999999999999999911111111199999111111111111111111999999999999999111111111111111111111111111111111111111111111111111111111111111999999999999999999999999
        9111119999999999999999991111111111111911111111111111111111119999999999999111111111111111111111111111111111111111111111111111111111111119999999999999999999999999
        1111111119999999999999111111111111111111111111111111111111119999999999999911111111111111111111111111111111111111111111111111111111111999999999999999999999999999
        1111111111999999999111111111111111111111111111111111111111111999999999999911111111111111111111111111111111111111111111111111111111119999999999999999999999999999
        1111111111119999911111111111111111111111111111111111111111111999999999999991111111111111111199999999999999911111111111111111111111199999999999999999999999999999
        1111111111111991111111111111111111111111111111111111111111111199999999999991111111111111119999999999999999999111111111111111111111199999999999999999999999999999
        1111111111111111111111111111111111111111111111111111111111111199999999999999111111111111199999999999999999999991111111111111111111999999999999999999999999999999
        1111111111111111111111111111111111111111111111111111111111111199999999999999991111119999999999999999999999999999111111111111111119999999999999999999999999999999
        1111111111111111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999911111111111111199999999999999999999999999999999
        1111111111111111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999111111111111199999999999999999999999999999999
        1111111111111111111111111111111111111111111111111111111111111119999999999999999999999999999999999999999999999999999911111111119999999999999999999999999999999999
        1111111111111111111111111111111111111111111111111111111111111119999999999999999999999999999999999999999999999999999999111111999999999999999999999999999999999999
        1111111111111111111111111111111111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        1111111111111111111111111111111111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        1111111111111111111111111111111111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        1111111111111111111111111111111111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        1111111111111111111111111111111111111111111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        1111111111111111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999111111119999999999999
        1111111111111111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999991111111111111199999999999
        1111111111111111111111111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999911111111111111111199999999
        1111111111111111111111111111111111111111111111111111111111111999999999999999999999999999999991111111999999999999999999999999999999999111111111111111111111119999
        1111111111111111111111111111111111111111111111111111111111119999999999999999999999999999999111111111111999999999999999999999999999991111111111111111111111111119
        1111111111111111111111111111111111111111111111111111111111199999999999999999999999999999111111111111111111199999999999999999999999911111111111111111111111111119
        1111111111111111111111111111111111111111111111111111111111199999999999999999999999999911111111111111111111111199999999999999999999111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111999999999999999999999999911111111111111111111111111119999999999999999911111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111119999999999999999999999991111111111111111111111111111111999999999999999111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111999999999999999999999991111111111111111111111111111111111119999999999991111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111199999999999999999999991111111111111111111111111111111111111111199999999111111111111111111111111111111111111
        1111191111111111111111111111111111111111199911111119999999999999999999999111111111111111111111111111111111111111111111991111111111111111111111111111111111111111
        1111199111111111111111111111111111111111999999999999999999999999999999111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        9999999911111111111111111111111111111119999999999999999999999999999911111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        9999999991111111111111111111111111111999999999999999999999999999991111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        9999999999911111111111111111111111199999999999999999999999999999991111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        9999999999999911111111111111111119999999999999999999999999999999991111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        9999999999999999991111111111999999999999999999999999999999999999991111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        9999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        9999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        9999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        9999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        9999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        9999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        9999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        9999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111111111111111111111111111111111111111199999999
        9999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111111111111111111111111111111111111199999999999
        9999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111111111111111111111111111111111119999999999999
        9999999999999999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111111111111111111111111111111111111111999999999999999
        9999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111111111111111111111111111111111199999999999999999
        9999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111199999911111111111111111111111111111111111119999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999111111111111111111199999999999999999999911111111111111111111111111111111999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999991111111111111999999999999999999999999999111111111111111111111111111199999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999991111111111111999999999999999999999999999999111111111111111111111199999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999111111111111999999999999999999999999999999999911111111111111999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999911111111999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `)
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile10, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    tileSet(2)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    tileSet(1)
})
tileSet(0)
initStart()
let myCorg = corgio.create(SpriteKind.Player)
myCorg.follow()
myCorg.verticalMovement()
myCorg.horizontalMovement()
