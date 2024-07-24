import { Routes } from '@angular/router';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

export const routes: Routes = [
    {path: 'event-bind-example', component: EventBindingComponent},
    {path: 'welcome', component: WelcomeComponent},
    {path: "", redirectTo: "/welcome", pathMatch: "full"}
];
