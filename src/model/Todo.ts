export class Todo {
    _id: string;
    done: boolean;
    constructor(public title:string) {
        this._id = '';
        this.done = false;
    }
}