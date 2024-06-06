import { Component, OnInit, inject } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';

interface Categoria {
  id?: number,
  nombre: string;
  detalle?: string
}
@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent implements OnInit {
  private categoriaService = inject(CategoriaService)

  categorias: Categoria[]=[]
    ngOnInit(): void {
        this.getCategorias()
    }
  getCategorias(){
    
  }
}
