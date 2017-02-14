import { Component } from '@angular/core';

import { LoggerService } from '../services/logger.service';

@Component({
    selector: 'peek-a-boo-parent',
    template: `
        <div class="parent">
            <h2>Peek-A-Boo</h2>

            <button (click)="toggleChild()">
                {{hasChild ? 'Destroy' : 'Create'}} PeekABooComponent
            </button>
            <button (click)="updateHero()" *ngIf="hasChild">Update Hero</button>

            <peek-a-boo *ngIf="hasChild" [name]="heroName"></peek-a-boo>

            <h4>-- Lifecycle Hook Log --</h4>
            <div *ngFor="let msg of hookLog">{{msg}}</div>
        </div>
    `,
    styles: ['.parent {background: moccasin}'],
    providers: [ LoggerService ],
})
export class PeekABooParentComponent {
    hasChild = false;
    hookLog: string[];

    heroName = 'Windstorm';
    
    constructor(private logger: LoggerService) {
        this.hookLog = this.logger.logs;
    }

    toggleChild() {
        this.hasChild = !this.hasChild;
        if (this.hasChild) {
            this.heroName = 'Windstorm';
            this.logger.clear();
        }
        this.logger.tick();
    }

    updateHero() {
        this.heroName += '!';
        this.logger.tick();
    }
}