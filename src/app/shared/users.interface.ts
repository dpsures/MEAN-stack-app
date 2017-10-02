export interface Users {
    _id : string;
    firstName : string;
    lastName : string;
    mobile : string;
    email : string;

    constructor(firstName: string, lastName: string, mobile:string,email:string);
}