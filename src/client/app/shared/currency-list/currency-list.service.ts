import {Inject} from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';

export class CurrencyListService {

    http: any;

    constructor(@Inject(Http) http:Http) {
        this.http = http;
    }
        currencies =
    {
        CAD: {
            notes: {
                5: {full: '5f'},
                10: {full: '10f'},
                20: {full: '20f'},
                50: {full: '50f'},
                100: {full: '100f'}
            }
        },
        //      <img class="thumb" src="http://res.cloudinary.com/midrate/image/upload/c_scale,w_130/banknotes/MXN20f.jpg" width="130" height="auto" alt=""
        // data-full="http://res.cloudinary.com/midrate/image/upload/banknotes/MXN20f.jpg""/>

        MXN: {
            notes: {
                20: {full: '20f'},
                50: {full: '50f'},
                100: {full: '100f'},
                200: {full: '200f'},
                500: {full: '500f'},
                1000: {full: '1000f'}
            }
        },

        EUR: {
            notes: {
                20: {full: '20f'},
                50: {full: '50f'},
                100: {full: '100f'},
                200: {full: '200f'},
                500: {full: '500f'}
            }
        },
        
        INR: {
            notes: {
                20: {full: '20f'},
                50: {full: '50f'},
                100: {full: '100f'},
                500: {full: '500f'},
                1000: {full: '1000f'}
            }
        }
    };

    getFullImage = function (currencyCode, value):string {
        var str = this.currencies[currencyCode].notes[value].full;
        return 'http://res.cloudinary.com/midrate/image/upload/banknotes/' + currencyCode + str + '.jpg';
    };

    getImagesUrls = function (currencyCode, amount) {
        var that = this;
        var imageUrls = {};
        //var initCurrency(currencyCode);
        var availableNotes = this.getAvailableNotes(currencyCode);
        var bills = this.computeBills(amount, availableNotes);
        Object.keys(bills).forEach(function (note) {
            imageUrls[note] = {
                url: that.getFullImage(currencyCode, note),
                note: note,
                number: bills[note]

            }
        })
        return imageUrls;
    }

    getAvailableNotes(currencyCode):any {
        return Object.keys(this.currencies[currencyCode].notes);
    };

    computeBills = function (amount, availableNotes):any {
        var bills = {};
        var availableNoteValues = availableNotes.map(function (n) {
            return Number.parseInt(n);
        });
        availableNoteValues.sort(function (a, b) {
            return b - a;
        });
        [1000, 500, 200, 100, 50, 20]
        availableNoteValues.forEach(function (note) {
            while (amount > note) {
                if (!bills[note]) {
                    bills[note] = 1;
                } else {
                    bills[note]++;
                }
                amount -= note;
            }
        });
        return bills;
    };

    get():any {
        console.log('112');
        return this.currencies;
    };

    initCurrency(code) {
        if (!this.currencies[code]) {
            this.getCurrencyData(code)
        }
    }

    getCurrencyData(code) {
        var url = 'http://www.midrate.com/currency_info/' + code;
        //this.http.get(url).subscribe((res:Response) => doSomething(res));
    }

    currencieCodes =
    {
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
}
