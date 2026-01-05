import { Component, input } from '@angular/core';
import { Livro } from '../livro/livro';
import { CommonModule } from '@angular/common';
import { IGeneroLiterario } from '../livro/livro.type';

@Component({
  selector: 'app-genero-literario',
  imports: [
    Livro,
    CommonModule
  ],
  templateUrl: './genero-literario.html',
  styleUrl: './genero-literario.css'
})
export class GeneroLiterarioComponent {

  genero = input.required<IGeneroLiterario>();
}