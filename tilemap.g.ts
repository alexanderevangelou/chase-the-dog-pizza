// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100003020302030203020302030202020302030203020302030203020302020203020302030203010101010101010102030203020302030104040404040401020302030203020302030203020302020203020302030203020302030203020202030203020302030203010101030202020302030203020302030404010102020203020302010101020302030203020202030203020302030203020302030202020302030203020302030203020302020203020302030203020302030203020202030203020302030203020302030401010302030201010101010203020304010203020302030203020302030203010102030203020302030203020302030203020302`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 2 2 2 2 2 2 2 . . . 
. . . . . 2 . . . . . . 2 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 2 2 2 . . . . . . 
. . . . . . . . . 2 2 . . . . . 
. . 2 2 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 2 2 . . 
. . 2 2 2 2 2 . . . . . 2 . . . 
. . . . . . . . . . . 2 2 . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tileGrass2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
