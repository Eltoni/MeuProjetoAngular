import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../produto';
import { ProdutoService } from '../produtos.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styles: [
  ]
})
export class ProdutoComponent implements OnInit {

  constructor(
    private produtoService : ProdutoService, 
    private route: ActivatedRoute,
    private router: Router) { }

  id!: string;
  produto!: Produto;

  ngOnInit(): void { 
      
    

    this.id = this.route.snapshot.params['id'];
      
    this.produtoService.find(this.id).subscribe((data: Produto)=>{
      this.produto = data;},
      error => console.log(error)
      );
  }

 

}