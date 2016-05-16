"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var CurrencyListService = (function () {
    function CurrencyListService(http) {
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
            MXN: {
                notes: {
                    20: { full: '20f' },
                    50: { full: '50f' },
                    100: { full: '100f' },
                    200: { full: '200f' },
                    500: { full: '500f' },
                    1000: { full: '1000f' }
                }
            },
            EUR: {
                notes: {
                    20: { full: '20f' },
                    50: { full: '50f' },
                    100: { full: '100f' },
                    200: { full: '200f' },
                    500: { full: '500f' }
                }
            },
            INR: {
                notes: {
                    20: { full: '20f' },
                    50: { full: '50f' },
                    100: { full: '100f' },
                    500: { full: '500f' },
                    1000: { full: '1000f' }
                }
            }
        };
        this.getFullImage = function (currencyCode, value) {
            var str = this.currencies[currencyCode].notes[value].full;
            return 'http://res.cloudinary.com/midrate/image/upload/banknotes/' + currencyCode + str + '.jpg';
        };
        this.getImagesUrls = function (currencyCode, amount) {
            var that = this;
            var imageUrls = {};
            var availableNotes = this.getAvailableNotes(currencyCode);
            var bills = this.computeBills(amount, availableNotes);
            Object.keys(bills).forEach(function (note) {
                imageUrls[note] = {
                    url: that.getFullImage(currencyCode, note),
                    note: note,
                    number: bills[note]
                };
            });
            return imageUrls;
        };
        this.computeBills = function (amount, availableNotes) {
            var bills = {};
            var availableNoteValues = availableNotes.map(function (n) {
                return Number.parseInt(n);
            });
            availableNoteValues.sort(function (a, b) {
                return b - a;
            });
            [1000, 500, 200, 100, 50, 20];
            availableNoteValues.forEach(function (note) {
                while (amount > note) {
                    if (!bills[note]) {
                        bills[note] = 1;
                    }
                    else {
                        bills[note]++;
                    }
                    amount -= note;
                }
            });
            return bills;
        };
        this.currencieCodes = {
            AED: 'United Arab Emirates dirham',
            AFN: 'Afghan afghani',
            ALL: 'Albanian lek',
            AMD: 'Armenian dram',
            ANG: 'Netherlands Antillean guilder',
            AOA: 'Angolan kwanza',
            ARS: 'Argentine peso',
            AUD: 'Australian dollar',
            AWG: 'Aruban florin',
            AZN: 'Azerbaijani manat',
            BAM: 'Bosnia and Herzegovina convertible mark',
            BBD: 'Barbados dollar',
            BDT: 'Bangladeshi taka',
            BGN: 'Bulgarian lev',
            BHD: 'Bahraini dinar',
            BIF: 'Burundian franc',
            BMD: 'Bermudian dollar',
            BND: 'Brunei dollar',
            BOB: 'Boliviano',
            BRL: 'Brazilian real',
            BSD: 'Bahamian dollar',
            BTN: 'Bhutanese ngultrum',
            BWP: 'Botswana pula',
            BYR: 'Belarusian ruble',
            BZD: 'Belize dollar',
            CAD: 'Canadian dollar',
            CDF: 'Congolese franc',
            CHF: 'Swiss franc',
            CLP: 'Chilean peso',
            CNY: 'Chinese yuan',
            COP: 'Colombian peso',
            CRC: 'Costa Rican colon',
            CUC: 'Cuban convertible peso',
            CUP: 'Cuban peso',
            CVE: 'Cape Verde escudo',
            CZK: 'Czech koruna',
            DJF: 'Djiboutian franc',
            DKK: 'Danish krone',
            DOP: 'Dominican peso',
            DZD: 'Algerian dinar',
            EGP: 'Egyptian pound',
            ERN: 'Eritrean nakfa',
            ETB: 'Ethiopian birr',
            EUR: 'Euro',
            FJD: 'Fiji dollar',
            FKP: 'Falkland Islands pound',
            GBP: 'pound sterling',
            GEL: 'Georgian lari',
            GHS: 'Ghanaian cedi',
            GIP: 'Gibraltar pound',
            GMD: 'Gambian dalasi',
            GNF: 'Guinean franc',
            GTQ: 'Guatemalan quetzal',
            GYD: 'Guyanese dollar',
            HNL: 'Honduran lempira',
            HRK: 'Croatian kuna',
            HTG: 'Haitian gourde',
            HUF: 'Hungarian forint',
            IDR: 'Indonesian rupiah',
            ILS: 'Israeli new shekel',
            INR: 'Indian rupee',
            IQD: 'Iraqi dinar',
            IRR: 'Iranian rial',
            ISK: 'Icelandic krona',
            JMD: 'Jamaican dollar',
            JOD: 'Jordanian dinar',
            JPY: 'Japanese yen',
            KES: 'Kenyan shilling',
            KGS: 'Kyrgyzstani som',
            KHR: 'Cambodian riel',
            KMF: 'Comorian franc',
            KPW: 'North Korean won',
            KRW: 'South Korean won',
            KWD: 'Kuwaiti dinar',
            KYD: 'Cayman Islands dollar',
            KZT: 'Kazakhstani tenge',
            LAK: 'Lao kip',
            LBP: 'Lebanese pound',
            LKR: 'Sri Lankan rupee',
            LRD: 'Liberian dollar',
            LSL: 'Lesotho loti',
            LYD: 'Libyan dinar',
            MAD: 'Moroccan dirham',
            MDL: 'Molodavan leu',
            MGA: 'Malagasy ariary',
            MKD: 'Macedonian denar',
            MMK: 'Myanmar kyat',
            MNT: 'Mongolian tugrik',
            MOP: 'Macanese pataca',
            MRO: 'Mauritanian ouguiya',
            MUR: 'Mauritian rupee',
            MVR: 'Maldivian rufiyaa',
            MWK: 'Malawian kwacha',
            MXN: 'Mexican peso',
            MYR: 'Malaysian ringgit',
            MZN: 'Mozambican metical',
            NAD: 'Namibian dollar',
            NGN: 'Nigerian naira',
            NIO: 'Nicaraguan cordoba',
            NOK: 'Norwegian krone',
            NPR: 'Nepalese rupee',
            NZD: 'New Zealand dollar',
            OMR: 'Omani rial',
            PEN: 'Peruvian nuevo sol',
            PGK: 'Papua New Guinean kina',
            PHP: 'Philippine peso',
            PKR: 'Pakistani rupee',
            PLN: 'Polish zloty',
            PYG: 'Paraguayan guarani',
            QAR: 'Qatari riyal',
            RON: 'Romanian leu',
            RSD: 'Serbian dinar',
            RUB: 'Russian ruble',
            RWF: 'Rwandan franc',
            SAR: 'Saudi riyal',
            SBD: 'Solomon Islands dollar',
            SCR: 'Seychelles rupee',
            SDG: 'Sudanese pound',
            SEK: 'Swedish krona',
            SGD: 'Singapore dollar',
            SHP: 'Saint Helena pound',
            SLL: 'Sierra Leonean leone',
            SOS: 'Somali shilling',
            SRD: 'Surinamese dollar',
            SSP: 'South Sudanese pound',
            STD: 'Sao Tomé and Príncipe dobra',
            SVC: 'El Salvador colon',
            SYP: 'Syrian pound',
            SZL: 'Swazi lilangeni',
            THB: 'Thai baht',
            TJS: 'Tajikistani somoni',
            TMT: 'Turkmenistani manat',
            TND: 'Tunisian dinar',
            TOP: 'Tongan panga',
            TRY: 'Turkish lira',
            TTD: 'Trinidad Tobago dollar',
            TWD: 'New Taiwan dollar',
            TZS: 'Tanzanian shilling',
            UAH: 'Ukrainian hryvnia',
            UGX: 'Ugandan shilling',
            USD: 'US dollar',
            UYU: 'Uruguayan peso',
            UZS: 'Uzbekistan som',
            VEB: 'Venezuelan bolívar',
            VND: 'Vietnamese dong',
            VUV: 'Vanuatu vatu',
            WST: 'Samoan tala',
            XAF: 'CFA franc BEAC Central African States',
            XCD: 'East Caribbean dollar',
            XOF: 'CFA franc BCEAO (West African States)',
            XPF: 'CFP franc',
            YER: 'Yemeni rial',
            ZAR: 'South African rand',
            ZMW: 'Zambian kwacha',
            ZWL: 'Zimbabwe dollar'
        };
        this.http = http;
    }
    CurrencyListService.prototype.getAvailableNotes = function (currencyCode) {
        return Object.keys(this.currencies[currencyCode].notes);
    };
    ;
    CurrencyListService.prototype.get = function () {
        console.log('112');
        return this.currencies;
    };
    ;
    CurrencyListService.prototype.initCurrency = function (code) {
        if (!this.currencies[code]) {
            this.getCurrencyData(code);
        }
    };
    CurrencyListService.prototype.getCurrencyData = function (code) {
        var url = 'http://www.midrate.com/currency_info/' + code;
    };
    CurrencyListService = __decorate([
        __param(0, core_1.Inject(http_1.Http)), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CurrencyListService);
    return CurrencyListService;
}());
exports.CurrencyListService = CurrencyListService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvY3VycmVuY3ktbGlzdC9jdXJyZW5jeS1saXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHFCQUFxQixlQUFlLENBQUMsQ0FBQTtBQUNyQyxxQkFBbUMsZUFBZSxDQUFDLENBQUE7QUFFbkQ7SUFJSSw2QkFBMEIsSUFBUztRQUcvQixlQUFVLEdBQ2Q7WUFDSSxHQUFHLEVBQUU7Z0JBQ0QsS0FBSyxFQUFFO29CQUNILENBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUM7b0JBQ2YsRUFBRSxFQUFFLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQztvQkFDakIsRUFBRSxFQUFFLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQztvQkFDakIsRUFBRSxFQUFFLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQztvQkFDakIsR0FBRyxFQUFFLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQztpQkFDdEI7YUFDSjtZQUlELEdBQUcsRUFBRTtnQkFDRCxLQUFLLEVBQUU7b0JBQ0gsRUFBRSxFQUFFLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQztvQkFDakIsRUFBRSxFQUFFLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQztvQkFDakIsR0FBRyxFQUFFLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQztvQkFDbkIsR0FBRyxFQUFFLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQztvQkFDbkIsR0FBRyxFQUFFLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQztvQkFDbkIsSUFBSSxFQUFFLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBQztpQkFDeEI7YUFDSjtZQUVELEdBQUcsRUFBRTtnQkFDRCxLQUFLLEVBQUU7b0JBQ0gsRUFBRSxFQUFFLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQztvQkFDakIsRUFBRSxFQUFFLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQztvQkFDakIsR0FBRyxFQUFFLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQztvQkFDbkIsR0FBRyxFQUFFLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQztvQkFDbkIsR0FBRyxFQUFFLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQztpQkFDdEI7YUFDSjtZQUVELEdBQUcsRUFBRTtnQkFDRCxLQUFLLEVBQUU7b0JBQ0gsRUFBRSxFQUFFLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQztvQkFDakIsRUFBRSxFQUFFLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQztvQkFDakIsR0FBRyxFQUFFLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQztvQkFDbkIsR0FBRyxFQUFFLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQztvQkFDbkIsSUFBSSxFQUFFLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBQztpQkFDeEI7YUFDSjtTQUNKLENBQUM7UUFFRixpQkFBWSxHQUFHLFVBQVUsWUFBWSxFQUFFLEtBQUs7WUFDeEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzFELE1BQU0sQ0FBQywyREFBMkQsR0FBRyxZQUFZLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQztRQUNyRyxDQUFDLENBQUM7UUFFRixrQkFBYSxHQUFHLFVBQVUsWUFBWSxFQUFFLE1BQU07WUFDMUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2hCLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztZQUVuQixJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7WUFDdEQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJO2dCQUNyQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUc7b0JBQ2QsR0FBRyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQztvQkFDMUMsSUFBSSxFQUFFLElBQUk7b0JBQ1YsTUFBTSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUM7aUJBRXRCLENBQUE7WUFDTCxDQUFDLENBQUMsQ0FBQTtZQUNGLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDckIsQ0FBQyxDQUFBO1FBTUQsaUJBQVksR0FBRyxVQUFVLE1BQU0sRUFBRSxjQUFjO1lBQzNDLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNmLElBQUksbUJBQW1CLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7Z0JBQ3BELE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFBO1lBQzdCLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUk7Z0JBQ3RDLE9BQU8sTUFBTSxHQUFHLElBQUksRUFBRSxDQUFDO29CQUNuQixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2YsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDcEIsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDSixLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztvQkFDbEIsQ0FBQztvQkFDRCxNQUFNLElBQUksSUFBSSxDQUFDO2dCQUNuQixDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUMsQ0FBQztRQWtCRixtQkFBYyxHQUNkO1lBQ0ksR0FBRyxFQUFFLDZCQUE2QjtZQUNsQyxHQUFHLEVBQUUsZ0JBQWdCO1lBQ3JCLEdBQUcsRUFBRSxjQUFjO1lBQ25CLEdBQUcsRUFBRSxlQUFlO1lBQ3BCLEdBQUcsRUFBRSwrQkFBK0I7WUFDcEMsR0FBRyxFQUFFLGdCQUFnQjtZQUNyQixHQUFHLEVBQUUsZ0JBQWdCO1lBQ3JCLEdBQUcsRUFBRSxtQkFBbUI7WUFDeEIsR0FBRyxFQUFFLGVBQWU7WUFDcEIsR0FBRyxFQUFFLG1CQUFtQjtZQUN4QixHQUFHLEVBQUUseUNBQXlDO1lBQzlDLEdBQUcsRUFBRSxpQkFBaUI7WUFDdEIsR0FBRyxFQUFFLGtCQUFrQjtZQUN2QixHQUFHLEVBQUUsZUFBZTtZQUNwQixHQUFHLEVBQUUsZ0JBQWdCO1lBQ3JCLEdBQUcsRUFBRSxpQkFBaUI7WUFDdEIsR0FBRyxFQUFFLGtCQUFrQjtZQUN2QixHQUFHLEVBQUUsZUFBZTtZQUNwQixHQUFHLEVBQUUsV0FBVztZQUNoQixHQUFHLEVBQUUsZ0JBQWdCO1lBQ3JCLEdBQUcsRUFBRSxpQkFBaUI7WUFDdEIsR0FBRyxFQUFFLG9CQUFvQjtZQUN6QixHQUFHLEVBQUUsZUFBZTtZQUNwQixHQUFHLEVBQUUsa0JBQWtCO1lBQ3ZCLEdBQUcsRUFBRSxlQUFlO1lBQ3BCLEdBQUcsRUFBRSxpQkFBaUI7WUFDdEIsR0FBRyxFQUFFLGlCQUFpQjtZQUN0QixHQUFHLEVBQUUsYUFBYTtZQUNsQixHQUFHLEVBQUUsY0FBYztZQUNuQixHQUFHLEVBQUUsY0FBYztZQUNuQixHQUFHLEVBQUUsZ0JBQWdCO1lBQ3JCLEdBQUcsRUFBRSxtQkFBbUI7WUFDeEIsR0FBRyxFQUFFLHdCQUF3QjtZQUM3QixHQUFHLEVBQUUsWUFBWTtZQUNqQixHQUFHLEVBQUUsbUJBQW1CO1lBQ3hCLEdBQUcsRUFBRSxjQUFjO1lBQ25CLEdBQUcsRUFBRSxrQkFBa0I7WUFDdkIsR0FBRyxFQUFFLGNBQWM7WUFDbkIsR0FBRyxFQUFFLGdCQUFnQjtZQUNyQixHQUFHLEVBQUUsZ0JBQWdCO1lBQ3JCLEdBQUcsRUFBRSxnQkFBZ0I7WUFDckIsR0FBRyxFQUFFLGdCQUFnQjtZQUNyQixHQUFHLEVBQUUsZ0JBQWdCO1lBQ3JCLEdBQUcsRUFBRSxNQUFNO1lBQ1gsR0FBRyxFQUFFLGFBQWE7WUFDbEIsR0FBRyxFQUFFLHdCQUF3QjtZQUM3QixHQUFHLEVBQUUsZ0JBQWdCO1lBQ3JCLEdBQUcsRUFBRSxlQUFlO1lBQ3BCLEdBQUcsRUFBRSxlQUFlO1lBQ3BCLEdBQUcsRUFBRSxpQkFBaUI7WUFDdEIsR0FBRyxFQUFFLGdCQUFnQjtZQUNyQixHQUFHLEVBQUUsZUFBZTtZQUNwQixHQUFHLEVBQUUsb0JBQW9CO1lBQ3pCLEdBQUcsRUFBRSxpQkFBaUI7WUFDdEIsR0FBRyxFQUFFLGtCQUFrQjtZQUN2QixHQUFHLEVBQUUsZUFBZTtZQUNwQixHQUFHLEVBQUUsZ0JBQWdCO1lBQ3JCLEdBQUcsRUFBRSxrQkFBa0I7WUFDdkIsR0FBRyxFQUFFLG1CQUFtQjtZQUN4QixHQUFHLEVBQUUsb0JBQW9CO1lBQ3pCLEdBQUcsRUFBRSxjQUFjO1lBQ25CLEdBQUcsRUFBRSxhQUFhO1lBQ2xCLEdBQUcsRUFBRSxjQUFjO1lBQ25CLEdBQUcsRUFBRSxpQkFBaUI7WUFDdEIsR0FBRyxFQUFFLGlCQUFpQjtZQUN0QixHQUFHLEVBQUUsaUJBQWlCO1lBQ3RCLEdBQUcsRUFBRSxjQUFjO1lBQ25CLEdBQUcsRUFBRSxpQkFBaUI7WUFDdEIsR0FBRyxFQUFFLGlCQUFpQjtZQUN0QixHQUFHLEVBQUUsZ0JBQWdCO1lBQ3JCLEdBQUcsRUFBRSxnQkFBZ0I7WUFDckIsR0FBRyxFQUFFLGtCQUFrQjtZQUN2QixHQUFHLEVBQUUsa0JBQWtCO1lBQ3ZCLEdBQUcsRUFBRSxlQUFlO1lBQ3BCLEdBQUcsRUFBRSx1QkFBdUI7WUFDNUIsR0FBRyxFQUFFLG1CQUFtQjtZQUN4QixHQUFHLEVBQUUsU0FBUztZQUNkLEdBQUcsRUFBRSxnQkFBZ0I7WUFDckIsR0FBRyxFQUFFLGtCQUFrQjtZQUN2QixHQUFHLEVBQUUsaUJBQWlCO1lBQ3RCLEdBQUcsRUFBRSxjQUFjO1lBQ25CLEdBQUcsRUFBRSxjQUFjO1lBQ25CLEdBQUcsRUFBRSxpQkFBaUI7WUFDdEIsR0FBRyxFQUFFLGVBQWU7WUFDcEIsR0FBRyxFQUFFLGlCQUFpQjtZQUN0QixHQUFHLEVBQUUsa0JBQWtCO1lBQ3ZCLEdBQUcsRUFBRSxjQUFjO1lBQ25CLEdBQUcsRUFBRSxrQkFBa0I7WUFDdkIsR0FBRyxFQUFFLGlCQUFpQjtZQUN0QixHQUFHLEVBQUUscUJBQXFCO1lBQzFCLEdBQUcsRUFBRSxpQkFBaUI7WUFDdEIsR0FBRyxFQUFFLG1CQUFtQjtZQUN4QixHQUFHLEVBQUUsaUJBQWlCO1lBQ3RCLEdBQUcsRUFBRSxjQUFjO1lBQ25CLEdBQUcsRUFBRSxtQkFBbUI7WUFDeEIsR0FBRyxFQUFFLG9CQUFvQjtZQUN6QixHQUFHLEVBQUUsaUJBQWlCO1lBQ3RCLEdBQUcsRUFBRSxnQkFBZ0I7WUFDckIsR0FBRyxFQUFFLG9CQUFvQjtZQUN6QixHQUFHLEVBQUUsaUJBQWlCO1lBQ3RCLEdBQUcsRUFBRSxnQkFBZ0I7WUFDckIsR0FBRyxFQUFFLG9CQUFvQjtZQUN6QixHQUFHLEVBQUUsWUFBWTtZQUNqQixHQUFHLEVBQUUsb0JBQW9CO1lBQ3pCLEdBQUcsRUFBRSx3QkFBd0I7WUFDN0IsR0FBRyxFQUFFLGlCQUFpQjtZQUN0QixHQUFHLEVBQUUsaUJBQWlCO1lBQ3RCLEdBQUcsRUFBRSxjQUFjO1lBQ25CLEdBQUcsRUFBRSxvQkFBb0I7WUFDekIsR0FBRyxFQUFFLGNBQWM7WUFDbkIsR0FBRyxFQUFFLGNBQWM7WUFDbkIsR0FBRyxFQUFFLGVBQWU7WUFDcEIsR0FBRyxFQUFFLGVBQWU7WUFDcEIsR0FBRyxFQUFFLGVBQWU7WUFDcEIsR0FBRyxFQUFFLGFBQWE7WUFDbEIsR0FBRyxFQUFFLHdCQUF3QjtZQUM3QixHQUFHLEVBQUUsa0JBQWtCO1lBQ3ZCLEdBQUcsRUFBRSxnQkFBZ0I7WUFDckIsR0FBRyxFQUFFLGVBQWU7WUFDcEIsR0FBRyxFQUFFLGtCQUFrQjtZQUN2QixHQUFHLEVBQUUsb0JBQW9CO1lBQ3pCLEdBQUcsRUFBRSxzQkFBc0I7WUFDM0IsR0FBRyxFQUFFLGlCQUFpQjtZQUN0QixHQUFHLEVBQUUsbUJBQW1CO1lBQ3hCLEdBQUcsRUFBRSxzQkFBc0I7WUFDM0IsR0FBRyxFQUFFLDZCQUE2QjtZQUNsQyxHQUFHLEVBQUUsbUJBQW1CO1lBQ3hCLEdBQUcsRUFBRSxjQUFjO1lBQ25CLEdBQUcsRUFBRSxpQkFBaUI7WUFDdEIsR0FBRyxFQUFFLFdBQVc7WUFDaEIsR0FBRyxFQUFFLG9CQUFvQjtZQUN6QixHQUFHLEVBQUUscUJBQXFCO1lBQzFCLEdBQUcsRUFBRSxnQkFBZ0I7WUFDckIsR0FBRyxFQUFFLGNBQWM7WUFDbkIsR0FBRyxFQUFFLGNBQWM7WUFDbkIsR0FBRyxFQUFFLHdCQUF3QjtZQUM3QixHQUFHLEVBQUUsbUJBQW1CO1lBQ3hCLEdBQUcsRUFBRSxvQkFBb0I7WUFDekIsR0FBRyxFQUFFLG1CQUFtQjtZQUN4QixHQUFHLEVBQUUsa0JBQWtCO1lBQ3ZCLEdBQUcsRUFBRSxXQUFXO1lBQ2hCLEdBQUcsRUFBRSxnQkFBZ0I7WUFDckIsR0FBRyxFQUFFLGdCQUFnQjtZQUNyQixHQUFHLEVBQUUsb0JBQW9CO1lBQ3pCLEdBQUcsRUFBRSxpQkFBaUI7WUFDdEIsR0FBRyxFQUFFLGNBQWM7WUFDbkIsR0FBRyxFQUFFLGFBQWE7WUFDbEIsR0FBRyxFQUFFLHVDQUF1QztZQUM1QyxHQUFHLEVBQUUsdUJBQXVCO1lBQzVCLEdBQUcsRUFBRSx1Q0FBdUM7WUFDNUMsR0FBRyxFQUFFLFdBQVc7WUFDaEIsR0FBRyxFQUFFLGFBQWE7WUFDbEIsR0FBRyxFQUFFLG9CQUFvQjtZQUN6QixHQUFHLEVBQUUsZ0JBQWdCO1lBQ3JCLEdBQUcsRUFBRSxpQkFBaUI7U0FDekIsQ0FBQztRQTdRRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBcUVELCtDQUFpQixHQUFqQixVQUFrQixZQUFZO1FBQzFCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7SUF3QkQsaUNBQUcsR0FBSDtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQzs7SUFFRCwwQ0FBWSxHQUFaLFVBQWEsSUFBSTtRQUNiLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM5QixDQUFDO0lBQ0wsQ0FBQztJQUVELDZDQUFlLEdBQWYsVUFBZ0IsSUFBSTtRQUNoQixJQUFJLEdBQUcsR0FBRyx1Q0FBdUMsR0FBRyxJQUFJLENBQUM7SUFFN0QsQ0FBQztJQS9HVzttQkFBQyxhQUFNLENBQUMsV0FBSSxDQUFDOzsyQkFBQTtJQStRN0IsMEJBQUM7QUFBRCxDQW5SQSxBQW1SQyxJQUFBO0FBblJZLDJCQUFtQixzQkFtUi9CLENBQUEiLCJmaWxlIjoiYXBwL3NoYXJlZC9jdXJyZW5jeS1saXN0L2N1cnJlbmN5LWxpc3Quc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cCwgSFRUUF9QUk9WSURFUlN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5leHBvcnQgY2xhc3MgQ3VycmVuY3lMaXN0U2VydmljZSB7XG5cbiAgICBodHRwOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KEh0dHApIGh0dHA6SHR0cCkge1xuICAgICAgICB0aGlzLmh0dHAgPSBodHRwO1xuICAgIH1cbiAgICAgICAgY3VycmVuY2llcyA9XG4gICAge1xuICAgICAgICBDQUQ6IHtcbiAgICAgICAgICAgIG5vdGVzOiB7XG4gICAgICAgICAgICAgICAgNToge2Z1bGw6ICc1Zid9LFxuICAgICAgICAgICAgICAgIDEwOiB7ZnVsbDogJzEwZid9LFxuICAgICAgICAgICAgICAgIDIwOiB7ZnVsbDogJzIwZid9LFxuICAgICAgICAgICAgICAgIDUwOiB7ZnVsbDogJzUwZid9LFxuICAgICAgICAgICAgICAgIDEwMDoge2Z1bGw6ICcxMDBmJ31cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLy8gICAgICA8aW1nIGNsYXNzPVwidGh1bWJcIiBzcmM9XCJodHRwOi8vcmVzLmNsb3VkaW5hcnkuY29tL21pZHJhdGUvaW1hZ2UvdXBsb2FkL2Nfc2NhbGUsd18xMzAvYmFua25vdGVzL01YTjIwZi5qcGdcIiB3aWR0aD1cIjEzMFwiIGhlaWdodD1cImF1dG9cIiBhbHQ9XCJcIlxuICAgICAgICAvLyBkYXRhLWZ1bGw9XCJodHRwOi8vcmVzLmNsb3VkaW5hcnkuY29tL21pZHJhdGUvaW1hZ2UvdXBsb2FkL2Jhbmtub3Rlcy9NWE4yMGYuanBnXCJcIi8+XG5cbiAgICAgICAgTVhOOiB7XG4gICAgICAgICAgICBub3Rlczoge1xuICAgICAgICAgICAgICAgIDIwOiB7ZnVsbDogJzIwZid9LFxuICAgICAgICAgICAgICAgIDUwOiB7ZnVsbDogJzUwZid9LFxuICAgICAgICAgICAgICAgIDEwMDoge2Z1bGw6ICcxMDBmJ30sXG4gICAgICAgICAgICAgICAgMjAwOiB7ZnVsbDogJzIwMGYnfSxcbiAgICAgICAgICAgICAgICA1MDA6IHtmdWxsOiAnNTAwZid9LFxuICAgICAgICAgICAgICAgIDEwMDA6IHtmdWxsOiAnMTAwMGYnfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIEVVUjoge1xuICAgICAgICAgICAgbm90ZXM6IHtcbiAgICAgICAgICAgICAgICAyMDoge2Z1bGw6ICcyMGYnfSxcbiAgICAgICAgICAgICAgICA1MDoge2Z1bGw6ICc1MGYnfSxcbiAgICAgICAgICAgICAgICAxMDA6IHtmdWxsOiAnMTAwZid9LFxuICAgICAgICAgICAgICAgIDIwMDoge2Z1bGw6ICcyMDBmJ30sXG4gICAgICAgICAgICAgICAgNTAwOiB7ZnVsbDogJzUwMGYnfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgSU5SOiB7XG4gICAgICAgICAgICBub3Rlczoge1xuICAgICAgICAgICAgICAgIDIwOiB7ZnVsbDogJzIwZid9LFxuICAgICAgICAgICAgICAgIDUwOiB7ZnVsbDogJzUwZid9LFxuICAgICAgICAgICAgICAgIDEwMDoge2Z1bGw6ICcxMDBmJ30sXG4gICAgICAgICAgICAgICAgNTAwOiB7ZnVsbDogJzUwMGYnfSxcbiAgICAgICAgICAgICAgICAxMDAwOiB7ZnVsbDogJzEwMDBmJ31cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBnZXRGdWxsSW1hZ2UgPSBmdW5jdGlvbiAoY3VycmVuY3lDb2RlLCB2YWx1ZSk6c3RyaW5nIHtcbiAgICAgICAgdmFyIHN0ciA9IHRoaXMuY3VycmVuY2llc1tjdXJyZW5jeUNvZGVdLm5vdGVzW3ZhbHVlXS5mdWxsO1xuICAgICAgICByZXR1cm4gJ2h0dHA6Ly9yZXMuY2xvdWRpbmFyeS5jb20vbWlkcmF0ZS9pbWFnZS91cGxvYWQvYmFua25vdGVzLycgKyBjdXJyZW5jeUNvZGUgKyBzdHIgKyAnLmpwZyc7XG4gICAgfTtcblxuICAgIGdldEltYWdlc1VybHMgPSBmdW5jdGlvbiAoY3VycmVuY3lDb2RlLCBhbW91bnQpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICB2YXIgaW1hZ2VVcmxzID0ge307XG4gICAgICAgIC8vdmFyIGluaXRDdXJyZW5jeShjdXJyZW5jeUNvZGUpO1xuICAgICAgICB2YXIgYXZhaWxhYmxlTm90ZXMgPSB0aGlzLmdldEF2YWlsYWJsZU5vdGVzKGN1cnJlbmN5Q29kZSk7XG4gICAgICAgIHZhciBiaWxscyA9IHRoaXMuY29tcHV0ZUJpbGxzKGFtb3VudCwgYXZhaWxhYmxlTm90ZXMpO1xuICAgICAgICBPYmplY3Qua2V5cyhiaWxscykuZm9yRWFjaChmdW5jdGlvbiAobm90ZSkge1xuICAgICAgICAgICAgaW1hZ2VVcmxzW25vdGVdID0ge1xuICAgICAgICAgICAgICAgIHVybDogdGhhdC5nZXRGdWxsSW1hZ2UoY3VycmVuY3lDb2RlLCBub3RlKSxcbiAgICAgICAgICAgICAgICBub3RlOiBub3RlLFxuICAgICAgICAgICAgICAgIG51bWJlcjogYmlsbHNbbm90ZV1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gaW1hZ2VVcmxzO1xuICAgIH1cblxuICAgIGdldEF2YWlsYWJsZU5vdGVzKGN1cnJlbmN5Q29kZSk6YW55IHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuY3VycmVuY2llc1tjdXJyZW5jeUNvZGVdLm5vdGVzKTtcbiAgICB9O1xuXG4gICAgY29tcHV0ZUJpbGxzID0gZnVuY3Rpb24gKGFtb3VudCwgYXZhaWxhYmxlTm90ZXMpOmFueSB7XG4gICAgICAgIHZhciBiaWxscyA9IHt9O1xuICAgICAgICB2YXIgYXZhaWxhYmxlTm90ZVZhbHVlcyA9IGF2YWlsYWJsZU5vdGVzLm1hcChmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgcmV0dXJuIE51bWJlci5wYXJzZUludChuKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGF2YWlsYWJsZU5vdGVWYWx1ZXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgcmV0dXJuIGIgLSBhO1xuICAgICAgICB9KTtcbiAgICAgICAgWzEwMDAsIDUwMCwgMjAwLCAxMDAsIDUwLCAyMF1cbiAgICAgICAgYXZhaWxhYmxlTm90ZVZhbHVlcy5mb3JFYWNoKGZ1bmN0aW9uIChub3RlKSB7XG4gICAgICAgICAgICB3aGlsZSAoYW1vdW50ID4gbm90ZSkge1xuICAgICAgICAgICAgICAgIGlmICghYmlsbHNbbm90ZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgYmlsbHNbbm90ZV0gPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJpbGxzW25vdGVdKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFtb3VudCAtPSBub3RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGJpbGxzO1xuICAgIH07XG5cbiAgICBnZXQoKTphbnkge1xuICAgICAgICBjb25zb2xlLmxvZygnMTEyJyk7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbmNpZXM7XG4gICAgfTtcblxuICAgIGluaXRDdXJyZW5jeShjb2RlKSB7XG4gICAgICAgIGlmICghdGhpcy5jdXJyZW5jaWVzW2NvZGVdKSB7XG4gICAgICAgICAgICB0aGlzLmdldEN1cnJlbmN5RGF0YShjb2RlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Q3VycmVuY3lEYXRhKGNvZGUpIHtcbiAgICAgICAgdmFyIHVybCA9ICdodHRwOi8vd3d3Lm1pZHJhdGUuY29tL2N1cnJlbmN5X2luZm8vJyArIGNvZGU7XG4gICAgICAgIC8vdGhpcy5odHRwLmdldCh1cmwpLnN1YnNjcmliZSgocmVzOlJlc3BvbnNlKSA9PiBkb1NvbWV0aGluZyhyZXMpKTtcbiAgICB9XG5cbiAgICBjdXJyZW5jaWVDb2RlcyA9XG4gICAge1xuICAgICAgICBBRUQ6ICdVbml0ZWQgQXJhYiBFbWlyYXRlcyBkaXJoYW0nLFxuICAgICAgICBBRk46ICdBZmdoYW4gYWZnaGFuaScsXG4gICAgICAgIEFMTDogJ0FsYmFuaWFuIGxlaycsXG4gICAgICAgIEFNRDogJ0FybWVuaWFuIGRyYW0nLFxuICAgICAgICBBTkc6ICdOZXRoZXJsYW5kcyBBbnRpbGxlYW4gZ3VpbGRlcicsXG4gICAgICAgIEFPQTogJ0FuZ29sYW4ga3dhbnphJyxcbiAgICAgICAgQVJTOiAnQXJnZW50aW5lIHBlc28nLFxuICAgICAgICBBVUQ6ICdBdXN0cmFsaWFuIGRvbGxhcicsXG4gICAgICAgIEFXRzogJ0FydWJhbiBmbG9yaW4nLFxuICAgICAgICBBWk46ICdBemVyYmFpamFuaSBtYW5hdCcsXG4gICAgICAgIEJBTTogJ0Jvc25pYSBhbmQgSGVyemVnb3ZpbmEgY29udmVydGlibGUgbWFyaycsXG4gICAgICAgIEJCRDogJ0JhcmJhZG9zIGRvbGxhcicsXG4gICAgICAgIEJEVDogJ0JhbmdsYWRlc2hpIHRha2EnLFxuICAgICAgICBCR046ICdCdWxnYXJpYW4gbGV2JyxcbiAgICAgICAgQkhEOiAnQmFocmFpbmkgZGluYXInLFxuICAgICAgICBCSUY6ICdCdXJ1bmRpYW4gZnJhbmMnLFxuICAgICAgICBCTUQ6ICdCZXJtdWRpYW4gZG9sbGFyJyxcbiAgICAgICAgQk5EOiAnQnJ1bmVpIGRvbGxhcicsXG4gICAgICAgIEJPQjogJ0JvbGl2aWFubycsXG4gICAgICAgIEJSTDogJ0JyYXppbGlhbiByZWFsJyxcbiAgICAgICAgQlNEOiAnQmFoYW1pYW4gZG9sbGFyJyxcbiAgICAgICAgQlROOiAnQmh1dGFuZXNlIG5ndWx0cnVtJyxcbiAgICAgICAgQldQOiAnQm90c3dhbmEgcHVsYScsXG4gICAgICAgIEJZUjogJ0JlbGFydXNpYW4gcnVibGUnLFxuICAgICAgICBCWkQ6ICdCZWxpemUgZG9sbGFyJyxcbiAgICAgICAgQ0FEOiAnQ2FuYWRpYW4gZG9sbGFyJyxcbiAgICAgICAgQ0RGOiAnQ29uZ29sZXNlIGZyYW5jJyxcbiAgICAgICAgQ0hGOiAnU3dpc3MgZnJhbmMnLFxuICAgICAgICBDTFA6ICdDaGlsZWFuIHBlc28nLFxuICAgICAgICBDTlk6ICdDaGluZXNlIHl1YW4nLFxuICAgICAgICBDT1A6ICdDb2xvbWJpYW4gcGVzbycsXG4gICAgICAgIENSQzogJ0Nvc3RhIFJpY2FuIGNvbG9uJyxcbiAgICAgICAgQ1VDOiAnQ3ViYW4gY29udmVydGlibGUgcGVzbycsXG4gICAgICAgIENVUDogJ0N1YmFuIHBlc28nLFxuICAgICAgICBDVkU6ICdDYXBlIFZlcmRlIGVzY3VkbycsXG4gICAgICAgIENaSzogJ0N6ZWNoIGtvcnVuYScsXG4gICAgICAgIERKRjogJ0RqaWJvdXRpYW4gZnJhbmMnLFxuICAgICAgICBES0s6ICdEYW5pc2gga3JvbmUnLFxuICAgICAgICBET1A6ICdEb21pbmljYW4gcGVzbycsXG4gICAgICAgIERaRDogJ0FsZ2VyaWFuIGRpbmFyJyxcbiAgICAgICAgRUdQOiAnRWd5cHRpYW4gcG91bmQnLFxuICAgICAgICBFUk46ICdFcml0cmVhbiBuYWtmYScsXG4gICAgICAgIEVUQjogJ0V0aGlvcGlhbiBiaXJyJyxcbiAgICAgICAgRVVSOiAnRXVybycsXG4gICAgICAgIEZKRDogJ0ZpamkgZG9sbGFyJyxcbiAgICAgICAgRktQOiAnRmFsa2xhbmQgSXNsYW5kcyBwb3VuZCcsXG4gICAgICAgIEdCUDogJ3BvdW5kIHN0ZXJsaW5nJyxcbiAgICAgICAgR0VMOiAnR2VvcmdpYW4gbGFyaScsXG4gICAgICAgIEdIUzogJ0doYW5haWFuIGNlZGknLFxuICAgICAgICBHSVA6ICdHaWJyYWx0YXIgcG91bmQnLFxuICAgICAgICBHTUQ6ICdHYW1iaWFuIGRhbGFzaScsXG4gICAgICAgIEdORjogJ0d1aW5lYW4gZnJhbmMnLFxuICAgICAgICBHVFE6ICdHdWF0ZW1hbGFuIHF1ZXR6YWwnLFxuICAgICAgICBHWUQ6ICdHdXlhbmVzZSBkb2xsYXInLFxuICAgICAgICBITkw6ICdIb25kdXJhbiBsZW1waXJhJyxcbiAgICAgICAgSFJLOiAnQ3JvYXRpYW4ga3VuYScsXG4gICAgICAgIEhURzogJ0hhaXRpYW4gZ291cmRlJyxcbiAgICAgICAgSFVGOiAnSHVuZ2FyaWFuIGZvcmludCcsXG4gICAgICAgIElEUjogJ0luZG9uZXNpYW4gcnVwaWFoJyxcbiAgICAgICAgSUxTOiAnSXNyYWVsaSBuZXcgc2hla2VsJyxcbiAgICAgICAgSU5SOiAnSW5kaWFuIHJ1cGVlJyxcbiAgICAgICAgSVFEOiAnSXJhcWkgZGluYXInLFxuICAgICAgICBJUlI6ICdJcmFuaWFuIHJpYWwnLFxuICAgICAgICBJU0s6ICdJY2VsYW5kaWMga3JvbmEnLFxuICAgICAgICBKTUQ6ICdKYW1haWNhbiBkb2xsYXInLFxuICAgICAgICBKT0Q6ICdKb3JkYW5pYW4gZGluYXInLFxuICAgICAgICBKUFk6ICdKYXBhbmVzZSB5ZW4nLFxuICAgICAgICBLRVM6ICdLZW55YW4gc2hpbGxpbmcnLFxuICAgICAgICBLR1M6ICdLeXJneXpzdGFuaSBzb20nLFxuICAgICAgICBLSFI6ICdDYW1ib2RpYW4gcmllbCcsXG4gICAgICAgIEtNRjogJ0NvbW9yaWFuIGZyYW5jJyxcbiAgICAgICAgS1BXOiAnTm9ydGggS29yZWFuIHdvbicsXG4gICAgICAgIEtSVzogJ1NvdXRoIEtvcmVhbiB3b24nLFxuICAgICAgICBLV0Q6ICdLdXdhaXRpIGRpbmFyJyxcbiAgICAgICAgS1lEOiAnQ2F5bWFuIElzbGFuZHMgZG9sbGFyJyxcbiAgICAgICAgS1pUOiAnS2F6YWtoc3RhbmkgdGVuZ2UnLFxuICAgICAgICBMQUs6ICdMYW8ga2lwJyxcbiAgICAgICAgTEJQOiAnTGViYW5lc2UgcG91bmQnLFxuICAgICAgICBMS1I6ICdTcmkgTGFua2FuIHJ1cGVlJyxcbiAgICAgICAgTFJEOiAnTGliZXJpYW4gZG9sbGFyJyxcbiAgICAgICAgTFNMOiAnTGVzb3RobyBsb3RpJyxcbiAgICAgICAgTFlEOiAnTGlieWFuIGRpbmFyJyxcbiAgICAgICAgTUFEOiAnTW9yb2NjYW4gZGlyaGFtJyxcbiAgICAgICAgTURMOiAnTW9sb2RhdmFuIGxldScsXG4gICAgICAgIE1HQTogJ01hbGFnYXN5IGFyaWFyeScsXG4gICAgICAgIE1LRDogJ01hY2Vkb25pYW4gZGVuYXInLFxuICAgICAgICBNTUs6ICdNeWFubWFyIGt5YXQnLFxuICAgICAgICBNTlQ6ICdNb25nb2xpYW4gdHVncmlrJyxcbiAgICAgICAgTU9QOiAnTWFjYW5lc2UgcGF0YWNhJyxcbiAgICAgICAgTVJPOiAnTWF1cml0YW5pYW4gb3VndWl5YScsXG4gICAgICAgIE1VUjogJ01hdXJpdGlhbiBydXBlZScsXG4gICAgICAgIE1WUjogJ01hbGRpdmlhbiBydWZpeWFhJyxcbiAgICAgICAgTVdLOiAnTWFsYXdpYW4ga3dhY2hhJyxcbiAgICAgICAgTVhOOiAnTWV4aWNhbiBwZXNvJyxcbiAgICAgICAgTVlSOiAnTWFsYXlzaWFuIHJpbmdnaXQnLFxuICAgICAgICBNWk46ICdNb3phbWJpY2FuIG1ldGljYWwnLFxuICAgICAgICBOQUQ6ICdOYW1pYmlhbiBkb2xsYXInLFxuICAgICAgICBOR046ICdOaWdlcmlhbiBuYWlyYScsXG4gICAgICAgIE5JTzogJ05pY2FyYWd1YW4gY29yZG9iYScsXG4gICAgICAgIE5PSzogJ05vcndlZ2lhbiBrcm9uZScsXG4gICAgICAgIE5QUjogJ05lcGFsZXNlIHJ1cGVlJyxcbiAgICAgICAgTlpEOiAnTmV3IFplYWxhbmQgZG9sbGFyJyxcbiAgICAgICAgT01SOiAnT21hbmkgcmlhbCcsXG4gICAgICAgIFBFTjogJ1BlcnV2aWFuIG51ZXZvIHNvbCcsXG4gICAgICAgIFBHSzogJ1BhcHVhIE5ldyBHdWluZWFuIGtpbmEnLFxuICAgICAgICBQSFA6ICdQaGlsaXBwaW5lIHBlc28nLFxuICAgICAgICBQS1I6ICdQYWtpc3RhbmkgcnVwZWUnLFxuICAgICAgICBQTE46ICdQb2xpc2ggemxvdHknLFxuICAgICAgICBQWUc6ICdQYXJhZ3VheWFuIGd1YXJhbmknLFxuICAgICAgICBRQVI6ICdRYXRhcmkgcml5YWwnLFxuICAgICAgICBST046ICdSb21hbmlhbiBsZXUnLFxuICAgICAgICBSU0Q6ICdTZXJiaWFuIGRpbmFyJyxcbiAgICAgICAgUlVCOiAnUnVzc2lhbiBydWJsZScsXG4gICAgICAgIFJXRjogJ1J3YW5kYW4gZnJhbmMnLFxuICAgICAgICBTQVI6ICdTYXVkaSByaXlhbCcsXG4gICAgICAgIFNCRDogJ1NvbG9tb24gSXNsYW5kcyBkb2xsYXInLFxuICAgICAgICBTQ1I6ICdTZXljaGVsbGVzIHJ1cGVlJyxcbiAgICAgICAgU0RHOiAnU3VkYW5lc2UgcG91bmQnLFxuICAgICAgICBTRUs6ICdTd2VkaXNoIGtyb25hJyxcbiAgICAgICAgU0dEOiAnU2luZ2Fwb3JlIGRvbGxhcicsXG4gICAgICAgIFNIUDogJ1NhaW50IEhlbGVuYSBwb3VuZCcsXG4gICAgICAgIFNMTDogJ1NpZXJyYSBMZW9uZWFuIGxlb25lJyxcbiAgICAgICAgU09TOiAnU29tYWxpIHNoaWxsaW5nJyxcbiAgICAgICAgU1JEOiAnU3VyaW5hbWVzZSBkb2xsYXInLFxuICAgICAgICBTU1A6ICdTb3V0aCBTdWRhbmVzZSBwb3VuZCcsXG4gICAgICAgIFNURDogJ1NhbyBUb23DqSBhbmQgUHLDrW5jaXBlIGRvYnJhJyxcbiAgICAgICAgU1ZDOiAnRWwgU2FsdmFkb3IgY29sb24nLFxuICAgICAgICBTWVA6ICdTeXJpYW4gcG91bmQnLFxuICAgICAgICBTWkw6ICdTd2F6aSBsaWxhbmdlbmknLFxuICAgICAgICBUSEI6ICdUaGFpIGJhaHQnLFxuICAgICAgICBUSlM6ICdUYWppa2lzdGFuaSBzb21vbmknLFxuICAgICAgICBUTVQ6ICdUdXJrbWVuaXN0YW5pIG1hbmF0JyxcbiAgICAgICAgVE5EOiAnVHVuaXNpYW4gZGluYXInLFxuICAgICAgICBUT1A6ICdUb25nYW4gcGFuZ2EnLFxuICAgICAgICBUUlk6ICdUdXJraXNoIGxpcmEnLFxuICAgICAgICBUVEQ6ICdUcmluaWRhZCBUb2JhZ28gZG9sbGFyJyxcbiAgICAgICAgVFdEOiAnTmV3IFRhaXdhbiBkb2xsYXInLFxuICAgICAgICBUWlM6ICdUYW56YW5pYW4gc2hpbGxpbmcnLFxuICAgICAgICBVQUg6ICdVa3JhaW5pYW4gaHJ5dm5pYScsXG4gICAgICAgIFVHWDogJ1VnYW5kYW4gc2hpbGxpbmcnLFxuICAgICAgICBVU0Q6ICdVUyBkb2xsYXInLFxuICAgICAgICBVWVU6ICdVcnVndWF5YW4gcGVzbycsXG4gICAgICAgIFVaUzogJ1V6YmVraXN0YW4gc29tJyxcbiAgICAgICAgVkVCOiAnVmVuZXp1ZWxhbiBib2zDrXZhcicsXG4gICAgICAgIFZORDogJ1ZpZXRuYW1lc2UgZG9uZycsXG4gICAgICAgIFZVVjogJ1ZhbnVhdHUgdmF0dScsXG4gICAgICAgIFdTVDogJ1NhbW9hbiB0YWxhJyxcbiAgICAgICAgWEFGOiAnQ0ZBIGZyYW5jIEJFQUMgQ2VudHJhbCBBZnJpY2FuIFN0YXRlcycsXG4gICAgICAgIFhDRDogJ0Vhc3QgQ2FyaWJiZWFuIGRvbGxhcicsXG4gICAgICAgIFhPRjogJ0NGQSBmcmFuYyBCQ0VBTyAoV2VzdCBBZnJpY2FuIFN0YXRlcyknLFxuICAgICAgICBYUEY6ICdDRlAgZnJhbmMnLFxuICAgICAgICBZRVI6ICdZZW1lbmkgcmlhbCcsXG4gICAgICAgIFpBUjogJ1NvdXRoIEFmcmljYW4gcmFuZCcsXG4gICAgICAgIFpNVzogJ1phbWJpYW4ga3dhY2hhJyxcbiAgICAgICAgWldMOiAnWmltYmFid2UgZG9sbGFyJ1xuICAgIH07XG59XG4iXX0=
