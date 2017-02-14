import {
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
} from '@angular/core';
import { Component, Input, SimpleChanges } from '@angular/core';

import { LoggerService } from '../services/logger.service';

@Component({
    selector: 'peek-a-boo',
    template: `<p>Now you see my hero, {{name}}</p>`,
    styles: [`p {background: LightYellow; padding: 8px;}`]
})
export class PeekABooComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
    @Input() name: string;

    private verb = 'initialized';
    private nextId = 1;

    constructor(private logger: LoggerService) {
        let is = this.name ? 'is' : 'is not';
        this.logIt(`name ${is} known at construction`);
    }

    logIt(msg: string) {
        this.logger.log(`#${this.nextId++} ${msg}`);
    }

    ngOnInit() {
        this.logIt(`OnInit`);
    }

    ngOnChanges(changes: SimpleChanges) {
        let changesMsgs: string[] = [];
        for (let propName in changes) {
            if (propName === 'name') {
                let name = changes['name'].currentValue;
                changesMsgs.push(`name ${this.verb} to "${name}"`);
            } else {
                changesMsgs.push(propName + ' ' + this.verb);
            }
        }
        this.logIt(`OnChanges: ${changesMsgs.join('; ')}`);
        this.verb = 'changed';
    }

    ngDoCheck() {
        this.logIt(`DoCheck`);
    }

    ngAfterContentInit() {
        this.logIt(`AfterContentInit`);
    }

    ngAfterContentChecked() {
        this.logIt(`AfterContentChecked`);
    }

    ngAfterViewInit() {
        this.logIt(`AfterViewInit`);
    }

    ngAfterViewChecked() {
        this.logIt(`AfterViewChecked`);
    }

    ngOnDestroy() {
        this.logIt(`OnDestroy`);
    }

}