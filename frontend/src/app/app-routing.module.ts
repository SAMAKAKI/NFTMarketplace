import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/main_pages/home/home.component';
import { MarketplaceComponent } from './components/main_pages/marketplace/marketplace.component';
import { RankingsComponent } from './components/main_pages/rankings/rankings.component';
import { ConnectWalletComponent } from './components/main_pages/connect-wallet/connect-wallet.component';
import { SignUpComponent } from './components/main_pages/sign-up/sign-up.component';
import { SignInComponent } from './components/main_pages/sign-in/sign-in.component';
import { AdminPanelComponent } from './components/main_pages/admin-panel/admin-panel.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'marketplace', component: MarketplaceComponent},
  {path: 'rankings', component: RankingsComponent},
  {path: 'connect-wallet', component: ConnectWalletComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'sign-in', component: SignInComponent},

  {path: 'admin-panel', component: AdminPanelComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
