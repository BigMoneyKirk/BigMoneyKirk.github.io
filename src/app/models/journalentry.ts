export class JournalEntry{
    constructor(private _JournalID : number, private _Name : string, private _IsActive : boolean, private _CreatedAt : Date) {
        this._JournalID = _JournalID;
        this._Name = _Name;
        this._IsActive = _IsActive;
    }

    public get JournalID() : number {
        return this._JournalID;
    }
    public set JournalID(v : number) {
        this._JournalID = v;
    }
        
    public get Name() : string {
        return this._Name;
    }
    public set Name(v : string) {
        this._Name = v;
    }
    
    public get IsActive() : boolean {
        return this._IsActive;
    }
    public set IsActive(v : boolean) {
        this._IsActive = v;
    }
     
    public get CreatedAt() : Date {
        return this._CreatedAt;
    }
    public set CreatedAt(v : Date) {
        this._CreatedAt = v;
    }

    private _CreatedBy : number;
    public get CreatedBy() : number {
        return this._CreatedBy;
    }
    public set CreatedBy(v : number) {
        this._CreatedBy = v;
    }
    
    private _UpdatedAt : Date;
    public get UpdatedAt() : Date {
        return this._UpdatedAt;
    }
    public set UpdatedAt(v : Date) {
        this._UpdatedAt = v;
    }
    
    private _UpdatedBy : number;
    public get UpdatedBy() : number {
        return this._UpdatedBy;
    }
    public set UpdatedBy(v : number) {
        this._UpdatedBy = v;
    }
    
    private _DeletedAt : Date;
    public get DeletedAt() : Date {
        return this._DeletedAt;
    }
    public set DeletedAt(v : Date) {
        this._DeletedAt = v;
    }

    private _DeletedBy : number;
    public get DeletedBy() : number {
        return this._DeletedBy;
    }
    public set DeletedBy(v : number) {
        this._DeletedBy = v;
    }
}