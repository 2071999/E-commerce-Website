import { Subject } from 'rxjs';
  
export class RxJsEventEmitter {  
    subjects;  
  
    constructor() {  
        this.subjects = {};  
    }  
  
    static getInstance()   
    {  
        if (!window["RxJsEventEmitter"]) {  
            window["RxJsEventEmitter"] = new RxJsEventEmitter();  
        }  
        return window["RxJsEventEmitter"];  
    }  
  
    emit(name, data)   
    {  
        if (!this.subjects[name]) {  
            this.subjects[name] = new Subject();  
        }  
        this.subjects[name].next(data);  
    }  
  
    on(name, handler)   
    {  
        if (!this.subjects[name]) {  
            this.subjects[name] = new Subject();  
        }  
        this.subjects[name].subscribe(handler);  
    }  
}