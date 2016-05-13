"use strict";
var NameListService = (function () {
    function NameListService() {
        this.names = [
            'Edsger Dijkstra',
            'Donald Knuth',
            'Alan Turing',
            'Grace Hopper'
        ];
    }
    NameListService.prototype.get = function () {
        return this.names;
    };
    NameListService.prototype.add = function (value) {
        this.names.push(value);
    };
    return NameListService;
}());
exports.NameListService = NameListService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvbmFtZS1saXN0L25hbWUtbGlzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtJQUFBO1FBQ0UsVUFBSyxHQUFHO1lBQ04saUJBQWlCO1lBQ2pCLGNBQWM7WUFDZCxhQUFhO1lBQ2IsY0FBYztTQUNmLENBQUM7SUFRSixDQUFDO0lBTkMsNkJBQUcsR0FBSDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFDRCw2QkFBRyxHQUFILFVBQUksS0FBYTtRQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFDSCxzQkFBQztBQUFELENBZEEsQUFjQyxJQUFBO0FBZFksdUJBQWUsa0JBYzNCLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9uYW1lLWxpc3QvbmFtZS1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTmFtZUxpc3RTZXJ2aWNlIHtcbiAgbmFtZXMgPSBbXG4gICAgJ0Vkc2dlciBEaWprc3RyYScsXG4gICAgJ0RvbmFsZCBLbnV0aCcsXG4gICAgJ0FsYW4gVHVyaW5nJyxcbiAgICAnR3JhY2UgSG9wcGVyJ1xuICBdO1xuXG4gIGdldCgpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZXM7XG4gIH1cbiAgYWRkKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLm5hbWVzLnB1c2godmFsdWUpO1xuICB9XG59XG4iXX0=
