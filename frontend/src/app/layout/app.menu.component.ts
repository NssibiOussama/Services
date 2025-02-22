import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Kit RH',
                items: [
                    { label: 'Kit RH', icon: 'pi pi-fw pi-home', routerLink: ['/kitrh'] }
                ]
            },
            {
                items: [
                    {
                        label: 'Services',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Search',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/admin']
                            },
                            {
                                label: 'Search By Position',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/admin/position']
                            }
                        ]
                    },
                    { label: 'Offres', icon: 'pi pi-fw pi-check-square', routerLink: ['/admin/offres'] },
                    { label: 'Candidats', icon: 'pi pi-fw pi-bookmark', routerLink: ['/admin/candidats'] },
                    { label: 'Filtres', icon: 'pi pi-fw pi-bookmark', routerLink: ['/admin/candidats'] },

                ]
            },

            {
                icon: 'pi pi-fw pi-briefcase',
                items: [

                    {
                        label: 'Paramètres',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Login',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/auth/login']
                            },
                            {
                                label: 'Error',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/auth/error']
                            },
                            {
                                label: 'Access Denied',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/auth/access']
                            }
                        ]
                    },
                ]
            },
        ];
    }
}
