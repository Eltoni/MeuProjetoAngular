import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { rootRouterConfig } from './app.routes';
import { DataBidingComponent } from './demos/data-biding/data-biding.component';
import { FormsModule } from '@angular/forms';
import { ProdutoService } from './produtos/produtos.service';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';
import { HttpClientModule } from '@angular/common/http';


//importando os pipe para reconhecer os pt no html
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ProdutoComponent } from './produtos/produto/produto.component';

registerLocaleData(localePt);
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    SobreComponent,
    ContatoComponent,
    DataBidingComponent,
    ListaProdutoComponent,
    ProdutoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false })]
  ],
  providers: [
    ProdutoService
  ],
 bootstrap: [AppComponent],
 
})
export class AppModule { }
