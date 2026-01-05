import { Component, OnInit } from '@angular/core';
import { IGeneroLiterario, Ilivro } from '../livro/livro.type';
import { livros } from '../../mock-livro';
import { GeneroLiterarioComponent } from '../genero-literario/genero-literario';

@Component({
  selector: 'app-lista-livro',
  imports: [ GeneroLiterarioComponent],
  templateUrl: './lista-livro.html',
  styleUrl: './lista-livro.css',
})
export class ListaLivro implements OnInit {
  generos: IGeneroLiterario[] = [];
  livrosPorGenero: Map<string, Ilivro[]> = new Map();

  ngOnInit(): void {
    this.livrosPorGenero = new Map();

    livros.forEach(livro => {
      const generoId = livro.genero.id;
      if (!this.livrosPorGenero.has(generoId)) {
        this.livrosPorGenero.set(generoId, []);
      }
      this.livrosPorGenero.get(generoId)?.push(livro);
    })

    this.generos = [
      {
        id: 'romance',
        value: "Romance",
        livros: this.livrosPorGenero.get("romance") ?? []
      },
      {
        id: 'misterio',
        value: 'Mistério',
        livros: this.livrosPorGenero.get("misterio") ?? []
      },
      {
        id: 'fantasia',
        value: 'Fantasia',
        livros: this.livrosPorGenero.get("fantasia") ?? []
      },
      {
        id: 'ficcao-cientifica',
        value: 'Ficção Científica',
        livros: this.livrosPorGenero.get("ficcao-cientifica") ?? []
      },
      {
        id: 'tecnicos',
        value: 'Técnicos',
        livros: this.livrosPorGenero.get("tecnicos") ?? []
      },
    ]

    console.log(this.livrosPorGenero)
  }
}
