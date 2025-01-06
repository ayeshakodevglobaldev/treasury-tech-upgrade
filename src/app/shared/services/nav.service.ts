import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';

//Menu Bar
export interface Menu {
  headTitle?: string;
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  badgeType?: string;
  badgeValue?: string;
  badgeClass?: string;
  active?: boolean;
  bookmark?: boolean;
  Menusub?: boolean;
  children?: Menu[];
}

@Injectable({
  providedIn: 'root',
})
export class NavService implements OnDestroy {
  private unsubscriber: any = new Subject();
  public screenWidth: BehaviorSubject<number> = new BehaviorSubject(
    window.innerWidth
  );

  public megaMenu: boolean = false;
  public megaMenuCollapse: boolean = window.innerWidth < 1199 ? true : false;
  public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;
  public fullScreen: boolean = false;
  constructor(private router: Router) {
    this.setScreenWidth(window.innerWidth);
    fromEvent(window, 'resize')
      .pipe(debounceTime(1000), takeUntil(this.unsubscriber))
      .subscribe((evt: any) => {
        this.setScreenWidth(evt.target.innerWidth);
        if (evt.target.innerWidth < 991) {
          this.collapseSidebar = false;
          this.megaMenu = false;
        }
        if (evt.target.innerWidth < 1199) {
          this.megaMenuCollapse = true;
        }
      });
    if (window.innerWidth < 991) {
      this.router.events.subscribe((event) => {
        this.collapseSidebar = false;
        this.megaMenu = false;
      });
    }
  }

  ngOnDestroy() {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }

  private setScreenWidth(width: number): void {
    this.screenWidth.next(width);
  }

  MENUITEMS: Menu[] = [
    //Title
    { headTitle: 'MAIN' },
    // {
    //   path: '/dashboards',
    //   title: 'Dashboard',
    //   badgeClass: 'badge bg-success text-light bg-side-text',
    //   badgeValue: '1',
    //   type: 'link',
    //   icon: '<svg class="side-menu__icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z"/></svg>',
    //   active: false,
    // },
    {
      path: '/dashboard',
      title: 'FX Dashboard',
      badgeClass: 'badge bg-sucess text-light bg-side-text',
      type: 'link',
      icon: '<svg class="side-menu__icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z"/></svg>',
      active: true,
    },
    {
      path: '/dashboard/mm-dashboard',
      title: 'MM Dashboard',
      badgeClass: 'badge bg-sucess text-light bg-side-text',
      type: 'link',
      icon: '<svg class="side-menu__icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z"/></svg>',
      active: true,
    },
    // Title

    // Title
    // { headTitle: 'WEB APPS' },
    // {
    //   title: 'Apps',
    //   icon: '<svg class="side-menu__icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/></svg>',
    //   type: 'sub',
    //   active: false,
    //   children: [
    //     {
    //       title: 'Contact',
    //       type: 'sub',
    //       active: false,
    //       Menusub: true,
    //       children: [
    //         {
    //           path: '/apps/contact/contact-list-1',
    //           title: 'Contact List ',
    //           type: 'link',
    //         },
    //       ],
    //     },
    //   ],
    // },
    { headTitle: 'Foreign Exchange (FX)' },
    {
      title: 'Foreign Exchange (FX)',
      icon: '<svg class="side-menu__icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/></svg>',
      type: 'sub',
      active: false,

      children: [
        {
          title: 'Front Office (InterBank)',
          type: 'sub',
          active: false,
          Menusub: true,
          children: [
            {
              title: 'Deals for outright',
              type: 'sub',
              active: false,
              // Menusub: true,
              children: [
                {
                  path: '/features/fx/fx-frontoffice/outright-deal/outright-input',
                  title: 'Input',
                  type: 'link',
                },
                {
                  path: '/features/fx/fx-frontoffice/outright-deal/outright-authorize',
                  title: 'Authorize',
                  type: 'link',
                },
                {
                  path: '/features/fx/fx-frontoffice/outright-deal/outright-editing',
                  title: 'Editing',
                  type: 'link',
                },
                {
                  path: '/features/fx/fx-frontoffice/outright-deal/outright-amendment',
                  title: 'Amendment',
                  type: 'link',
                },
                {
                  path: '/features/fx/fx-frontoffice/outright-deal/outright-cancellation',
                  title: 'Cancellation',
                  type: 'link',
                },
              ],
            },
            // {
            //   title: 'Fx Rates',
            //   type: 'sub',
            //   active: false,
            //   // Menusub: true,
            //   children: [
            //     // {path:'/apps/fx/front-office/fx-rates',title:'Fx Rates',type:'link'}
            //   ],
            // },
            {
              title: 'Swap Deals',
              type: 'sub',
              active: false,
              // Menusub: true,
              children: [
                {
                  path: '/features/fx/fx-frontoffice/swap-deal/swap-input',
                  title: 'Input',
                  type: 'link',
                },
                {
                  path: '/features/fx/fx-frontoffice/swap-deal/swap-editing',
                  title: 'Editing',
                  type: 'link',
                },
                {
                  path: '/features/fx/fx-frontoffice/swap-deal/swap-cancellation',
                  title: 'Cancellation',
                  type: 'link',
                },
                {
                  path: '/features/fx/fx-frontoffice/swap-deal/swap-authorize',
                  title: 'Authorize',
                  type: 'link',
                },
                {
                  path: '/features/fx/fx-frontoffice/swap-deal/swap-amendment',
                  title: 'Amendment',
                  type: 'link',
                },
              ],
            },
            {
              title: 'Nostro transfer',
              type: 'sub',
              active: false,
              // Menusub: true,
              children: [
                {
                  path: '/features/fx/fx-frontoffice/transfer-deal/transfer-input',
                  title: 'Input',
                  type: 'link',
                },
                {
                  path: '/features/fx/fx-frontoffice/transfer-deal/transfer-editing',
                  title: 'Editing',
                  type: 'link',
                },
                {
                  path: '/features/fx/fx-frontoffice/transfer-deal/transfer-cancellation',
                  title: 'Cancellation',
                  type: 'link',
                },
              ],
            },
            {
              title: 'FC Placement Borrow',
              type: 'sub',
              active: false,
              // Menusub: true,
              children: [
                {
                  path: '/features/fx/fx-frontoffice/placement-deal/placement-input',
                  title: 'Input',
                  type: 'link',
                },
              ],
            },
          ],
        },
      ],
    },

    { headTitle: 'Money Market (MM)' },
    {
      title: 'Money Market (MM)',
      icon: '<svg class="side-menu__icon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/></svg>',
      type: 'sub',
      active: false,

      children: [
        {
          title: 'Front Office (InterBank)',
          type: 'sub',
          active: false,
          Menusub: true,
          children: [
            {
              title: 'Outright',
              type: 'sub',
              active: false,
              // Menusub: true,
              children: [
                {
                  path: '/features/mm/mm-frontoffice/outright/input-purchase',
                  title: 'Outright Purchase Input',
                  type: 'link',
                },
                {
                  path: '/features/mm/mm-frontoffice/outright/sukuk-variable',
                  title: 'Sukuk Bond (Variable)',
                  type: 'link',
                },
                {
                  path: '/features/mm/mm-frontoffice/outright/sukuk-fixed',
                  title: 'Sukuk Bond (Fixed)',
                  type: 'link',
                },
                {
                  path: '/features/mm/mm-frontoffice/outright/pib-floater',
                  title: 'PIB Floater',
                  type: 'link',
                },
              ],
            },
            {
              title: 'Call C.O.I',
              type: 'sub',
              active: false,
              // Menusub: true,
              children: [
                {
                  path: '/features/mm/mm-frontoffice/call/call-input',
                  title: 'Input',
                  type: 'link',
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  //array
  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}
