import { Directive, OnInit, OnDestroy } from '@angular/core';

import { LoggerService } from '../services/logger.service';

@Directive({selector: '[mySpy]'})
export class SpyDirective implements OnInit, OnDestroy {
    nextId = 1;

    constructor(private logger: LoggerService) {}

    ngOnInit() {
        this.logIt('OnInit');
    }

    ngOnDestroy() {
        this.logIt('OnDestroy');
    }

    private logIt(msg: string) {
        this.logger.log(`Spy #${this.nextId++} ${msg}`);
    }
}