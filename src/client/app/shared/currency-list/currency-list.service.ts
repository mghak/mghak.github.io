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
      }
    };

  get():any {
    return this.currencies;
  }
}
