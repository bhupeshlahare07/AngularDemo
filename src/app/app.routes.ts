import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';

export const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'data-binding',
        component: DataBindingComponent
    },
    {
        path: 'control-flow',
        component: ControlFlowComponent
    }
];
