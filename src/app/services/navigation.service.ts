import { OnInit } from "@angular/core";
import { NavItem } from "../enums/nav-item";

export class NavigationService implements OnInit {
    di = new Map<string, NavItem>();

    ngOnInit() {
    }

    createNavMap() {
        this.di.set("/home", NavItem.HOME);
        this.di.set("/bible", NavItem.BIBLE);
        this.di.set("/contact", NavItem.CONTACT);
        this.di.set("/websites", NavItem.WEBSITES);
        this.di.set("/about", NavItem.ABOUT);
    }

    getNavIcon(currentURL: string) {
        this.createNavMap();
        return this.di.get(currentURL);
    }
}