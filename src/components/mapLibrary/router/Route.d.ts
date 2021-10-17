module ymaps {
    export module router {
        export class Route extends interfaces.IGeoObject {
            editor: ymaps.router.Editor;

            getHumanJamsTime():string;
            getHumanLength():string;
            getHumanTime():string;
            getJamsTime():number;
            getLength():number;
            
            getPaths():GeoObjectCollection; // todo generics
            getTime():number;
            getViaPoints():GeoObjectCollection; // todo generics
            getWayPoints():GeoObjectCollection; // todo generics

        }
    }
}