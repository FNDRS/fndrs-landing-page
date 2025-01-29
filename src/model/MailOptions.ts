import {ArrayMinSize, IsArray, IsEmail, IsNotEmpty, IsString} from "class-validator";

export class MailOptions {
    @IsEmail({}, { message: "Invalid email format for sender." })
    @IsNotEmpty({ message: "Sender is required." })
    from: string;
    @IsArray({ message: "Recipients should be an array." })
    @ArrayMinSize(1, { message: "At least one recipient is required." })
    @IsEmail({}, { each: true, message: "Each recipient must be a valid email." })
    to: string[];
    @IsNotEmpty({ message: "Subject is required." })
    @IsString({message: "Subject should be a string"})
    subject: string;
    @IsNotEmpty({ message: "Text is required." })
    @IsString({message: "Text should be a string"})
    text: string;
    @IsNotEmpty({ message: "Html is required." })
    @IsString({message: "Text should be a string"})
    html: string


    constructor(from: string, to: string[], subject: string, text: string, html: string) {
        this.from = from;
        this.to = to;
        this.subject = subject;
        this.text = text;
        this.html = html;
    }
}
