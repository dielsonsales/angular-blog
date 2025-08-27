import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Blog } from './pages/blog/blog';
import { Portfolio } from './pages/portfolio/portfolio';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'about', component: About },
    { path: 'blog', component: Blog },
    { path: 'portfolio', component: Portfolio },
    { path: 'contact', component: Contact },
    { path: '**', redirectTo: '' } // Goes to home for any other path
];
