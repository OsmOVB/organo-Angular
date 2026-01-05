import { Component, input, Input } from '@angular/core';
import { Ilivro } from './livro.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-livro',
  imports: [CommonModule],
  templateUrl: './livro.html',
  styleUrls: ['./livro.css'],
})
export class Livro {

  livro = input.required<Ilivro>();

  alternarFavorito() {
    this.livro().favorito = !this.livro().favorito;
  }

}
