import { Routes } from "@angular/router";

export const projectsRoutes: Routes = [
    { path: 'FindVowels', loadComponent: () => import('./JavaString/vowelsfinder/vowelsfinder').then(m => m.Vowelsfinder)},
    { path: 'Convertor', loadComponent: () => import('./convertor/convertor').then(m => m.Convertor)},
    { path: 'BasicMath', loadComponent: () => import('./simplemath/simplemath').then(m => m.Simplemath)}
];