"use strict";
var CurrencyListService = (function () {
    function CurrencyListService() {
        this.currencies = {
            CAD: {
                notes: {
                    5: { full: '5f' },
                    10: { full: '10f' },
                    20: { full: '20f' },
                    50: { full: '50f' },
                    100: { full: '100f' }
                }
            },
            //      <img class="thumb" src="http://res.cloudinary.com/midrate/image/upload/c_scale,w_130/banknotes/MXN20f.jpg" width="130" height="auto" alt=""
            // data-full="http://res.cloudinary.com/midrate/image/upload/banknotes/MXN20f.jpg""/>

            MPE: {
                notes: {
                    20: { full: '20f' },
                    50: { full: '50f' },
                    100: { full: '100f' },
                    200: { full: '200f' },
                    500: { full: '500f' },
                    1000: { full: '1000f' }
                }
            }
        };
    }
    CurrencyListService.prototype.getFullImage = function (currencyCode, value) {
        return 'http://res.cloudinary.com/midrate/image/upload/c_scale,w_130/banknotes/' + currencyCode +  value + '.jpg';
    };

    CurrencyListService.prototype.get = function () {
        return this.currencies;
    };

    return CurrencyListService;
}());
exports.CurrencyListService = CurrencyListService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY3VycmVuY3ktbGlzdC9jdXJyZW5jeS1saXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBQUE7UUFDRSxlQUFVLEdBQ1I7WUFDRSxHQUFHLEVBQUU7Z0JBQ0gsS0FBSyxFQUFFO29CQUNMLENBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUM7b0JBQ2YsRUFBRSxFQUFFLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQztvQkFDakIsRUFBRSxFQUFFLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQztvQkFDakIsRUFBRSxFQUFFLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQztvQkFDakIsR0FBRyxFQUFFLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQztpQkFDcEI7YUFDRjtTQUNGLENBQUM7SUFLTixDQUFDO0lBSEMsaUNBQUcsR0FBSDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFDSCwwQkFBQztBQUFELENBakJBLEFBaUJDLElBQUE7QUFqQlksMkJBQW1CLHNCQWlCL0IsQ0FBQSIsImZpbGUiOiJhcHAvc2hhcmVkL2N1cnJlbmN5LWxpc3QvY3VycmVuY3ktbGlzdC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEN1cnJlbmN5TGlzdFNlcnZpY2Uge1xuICBjdXJyZW5jaWVzID0gXG4gICAge1xuICAgICAgQ0FEOiB7XG4gICAgICAgIG5vdGVzOiB7XG4gICAgICAgICAgNToge2Z1bGw6ICc1Zid9LFxuICAgICAgICAgIDEwOiB7ZnVsbDogJzEwZid9LFxuICAgICAgICAgIDIwOiB7ZnVsbDogJzIwZid9LFxuICAgICAgICAgIDUwOiB7ZnVsbDogJzUwZid9LFxuICAgICAgICAgIDEwMDoge2Z1bGw6ICcxMDBmJ31cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgZ2V0KCk6YW55IHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW5jaWVzO1xuICB9XG59XG4iXX0=
