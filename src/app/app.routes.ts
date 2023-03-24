import { Routes } from "@angular/router";
import { DataBidingComponent } from "./demos/data-biding/data-biding.component";
import { ContatoComponent } from "./institucional/contato/contato.component";
import { SobreComponent } from "./institucional/sobre/sobre.component";
import { HomeComponent } from "./navegacao/home/home.component";
import { ListaProdutoComponent } from "./produtos/lista-produto/lista-produto.component";
import { ProdutoComponent } from "./produtos/produto/produto.component";

export const rootRouterConfig : Routes =[

    { path: '', redirectTo:'/home', pathMatch:'full' },
    { path: 'home', component: HomeComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'feature-data-binding', component: DataBidingComponent },
    { path: 'produtos', component: ListaProdutoComponent },
    { path: 'produtos/produto-detalhe/:id', component: ProdutoComponent }


];