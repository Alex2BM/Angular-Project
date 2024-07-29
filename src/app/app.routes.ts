import { Routes } from '@angular/router';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ComponentInputComponent } from './components/component-input/component-input.component';
import { ForDirectiveComponent } from './components/for-directive/for-directive.component';

export const routes: Routes = [
    {path: 'event-bind-example', component: EventBindingComponent},
    {path: 'component-input', component: ComponentInputComponent},
    {path: '', component: WelcomeComponent },
    {path: 'for-directive', component: ForDirectiveComponent}
];
