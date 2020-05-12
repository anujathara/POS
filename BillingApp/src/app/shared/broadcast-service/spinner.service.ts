import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SpinnerService {
    public subject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    spinner(show: boolean) {
        this.subject.next(show);
    }
}