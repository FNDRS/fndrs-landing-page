import { IsString, IsNotEmpty, IsEmail, MinLength, IsPhoneNumber } from "class-validator"

export class ContactFormDTO {
  @IsString({ message: "Name should be a string" })
  @IsNotEmpty({ message: "Name is required." })
  private _name: string

  @IsNotEmpty({ message: "Email is required." })
  @IsEmail({}, { message: "Invalid email format." })
  private _email: string

  @IsPhoneNumber("HN", { message: "Must be a valid phone number +50499999999" })
  private _phoneNumber: string

  @IsString({ message: "Subject must be a string" })
  @IsNotEmpty({ message: "Subject must not be empty" })
  private _subject: string

  @IsNotEmpty({ message: "Message is required." })
  @IsString({ message: "Message should be a string" })
  @MinLength(5, { message: "Message must be at least 5 characters long." })
  private _message: string

  constructor(name: string, email: string, phoneNumber: string, subject: string, message: string) {
    this._name = name
    this._email = email
    this._phoneNumber = phoneNumber
    this._subject = subject
    this._message = message
  }

  get name(): string {
    return this._name
  }

  set name(value: string) {
    this._name = value
  }

  get email(): string {
    return this._email
  }

  set email(value: string) {
    this._email = value
  }

  get phoneNumber(): string {
    return this._phoneNumber
  }

  set phoneNumber(value: string) {
    this._phoneNumber = value
  }

  get subject(): string {
    return this._subject
  }

  set subject(value: string) {
    this._subject = value
  }

  get message(): string {
    return this._message
  }

  set message(value: string) {
    this._message = value
  }
}
