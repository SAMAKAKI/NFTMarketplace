// Basic modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
// All components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/templates/header/header.component';
import { FooterComponent } from './components/templates/footer/footer.component';
import { UserComponent } from './components/templates/user/user.component';
import { HomeComponent } from './components/main_pages/home/home.component';
import { MarketplaceComponent } from './components/main_pages/marketplace/marketplace.component';
import { RankingsComponent } from './components/main_pages/rankings/rankings.component';
import { ConnectWalletComponent } from './components/main_pages/connect-wallet/connect-wallet.component';
import { SignUpComponent } from './components/main_pages/sign-up/sign-up.component';
import { SignInComponent } from './components/main_pages/sign-in/sign-in.component';
import { AdminPanelComponent } from './components/main_pages/admin-panel/admin-panel.component';
import { NftCategoryComponent } from './components/templates/nft-category/nft-category.component';
// Imported modules
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    HomeComponent,
    MarketplaceComponent,
    RankingsComponent,
    ConnectWalletComponent,
    SignUpComponent,
    SignInComponent,
    AdminPanelComponent,
    NftCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
