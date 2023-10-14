export interface ResponseType {
    success: boolean;
    status: number;
    messages: string;
    results: string;
  }

export class ResponseTemplate {
    success: boolean;
    status: number;
    messages: string;
    results: string;

    constructor(success:boolean, status:number, messages:string = '', results:string = ''){
        this.success = success 
        this.status = status
        this.messages = messages
        this.results = results
    }
}
