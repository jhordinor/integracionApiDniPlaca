import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { SearchLicensePlateComponent } from './features/shared/searchLicensePlate/searchLicensePlate.component';
import path from 'path';

export const routes: Routes = [
    {
        path: '',
        component: SearchLicensePlateComponent,
        //loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'comprar/soat',
        component: SearchLicensePlateComponent
        //loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    } 
];
  