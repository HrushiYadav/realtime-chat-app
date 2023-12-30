export type UserId = string;
export interface Chat {
    id: string;
    userId: UserId;
    name: string;
    message: string;
    upvotes: UserId[];
}
export abstract class Store {
    constructor(){

    }
    initRoom (roomId: string){

    }
    getChats(room :string , limits : number , offset:number){

    }

    addChat ( userId: UserId , name : string,room: string , message:string){

    }
    upvote(userId: UserId , room:string , chatId: string){

    }
}