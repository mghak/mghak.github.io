export class CurrencyListService {
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

        MNX: {
            notes: {
                20: {full: '20f'},
                50: {full: '50f'},
                100: {full: '100f'},
                200: {full: '200f'},
                500: {full: '500f'},
                1000: {full: '1000f'}
            }
        }
    };

    getFullImage = function (currencyCode, value):string {
        return 'http://res.cloudinary.com/midrate/image/upload/c_scale,w_130/banknotes/' + currencyCode + value + '.jpg';
    };

    getImagesUrls = function(currencyCode, amount) {
        var imageUrls = {};
        var availableNotes = this.getAvailableNotes(currencyCode);
        var bills = this.computeBills(amount, availableNotes );
        bills.keys.forEach(function(note) {
            bills[note].url = this.getFullImage(currencyCode, note);
        })
        return bills;
    }

    getAvailableNotes(currencyCode):any {
      var currency = this.currencies[currencyCode].keys();
    };

    computeBills = function(amount, availableNotes):any {
        var bills = {};
        for(note in availableNotes) {
            while (amount > note) {
                if (!bills[note]) {
                    bills[note] = 1;
                } else {
                    bills[note]++;
                }
                amount -= note;
            }
        }
        return bills;
    };

    get():any {
        return this.currencies;
    };
}
