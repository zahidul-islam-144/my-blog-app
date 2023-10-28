export interface ResponseType {
    success: boolean;
    status: number;
    messages: string;
    results: string;
}

export interface PasswordObject {
    [key:string] : string
}

export interface PasswordTypes {
    salt: string
    password: string
}