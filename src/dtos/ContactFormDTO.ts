import {IsString, IsNotEmpty, IsEmail, MinLength} from 'class-validator';

export class ContactFormDTO {
    @IsString({message: "Name should be a string"})
    @IsNotEmpty({ message: "Name is required." }) private _name: string;

    @IsNotEmpty({ message: "Surname is required." })
    @IsString({message: "Surname should be a string"}) private _surname: string;

    @IsNotEmpty({ message: "Email is required." })
    @IsEmail({}, { message: "Invalid email format." }) private _email: string;

    @IsNotEmpty({ message: "Message is required." })
    @IsString({message: "Message should be a string"})
    @MinLength(5, { message: "Message must be at least 5 characters long." }) private _message: string;


    constructor(name: string, surname: string, email: string, message: string) {
        this._name = name;
        this._surname = surname;
        this._email = email;
        this._message = message;
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get surname(): string {
        return this._surname;
    }

    set surname(value: string) {
        this._surname = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get message(): string {
        return this._message;
    }

    set message(value: string) {
        this._message = value;
    }
}
