export class User {
    constructor(public email: string, 
        public ID: string, 
        private _token: string, 
        private _tokenExpirationDate: Date, 
        userName?: string) {}

    get token() {
        if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
            return null;
        }
        
        return this._token;
    }
}