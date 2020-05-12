import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Injectable()
export class TaskService {
    private subject = new Subject<any>();
    private removeTask = new Subject<string>();
    clearTask$ = this.removeTask.asObservable();

    createTask(title: string, path: string) {
        this.subject.next({ title: title, path: path });
    }

    getTask(): Observable<any> {
        return this.subject.asObservable();
    }
    
    clearTask(mission: string) {
        this.removeTask.next(mission);
    }
}