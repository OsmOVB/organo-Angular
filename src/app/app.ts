import { Component, signal } from '@angular/core';
import { Cabecalho } from './components/cabecalho/cabecalho';
import { Rodape } from './components/rodape/rodape';
import { ListaLivro } from "./components/lista-livro/lista-livro";

@Component({
  selector: 'app-root',
  imports: [
    Cabecalho,
    Rodape,
    ListaLivro,
    ListaLivro,    
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('organo');
}
