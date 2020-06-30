import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Title} from '@angular/platform-browser';
import {ApiService} from '../network/api.service';
import {ApiPaths} from '../../models/enums/api-paths.enum';
import {BehaviorSubject} from 'rxjs';
import {DadosBasicosInterface} from '../../models/dados-basicos-interface';

@Injectable({
  providedIn: 'root'
})
export class BasicInfoService {

  separator = " | ";

  info = {
    orgaoClassificacao: "Ministério",
    orgaoTema: "Economia",
    orgaoNome: "Ministério da Economia",
    unidadeClassificacao: "Secretaria",
    unidadeTema: "Sistema de Controle da Contribuição Sindical Urbana",
    unidadeNome: "Sistema de Controle da Contribuição Sindical Urbana",
    sistemaNome: "Sistema de Controle da Contribuição Sindical Urbana",
    descricao: "Sistema de Controle da Contribuição Sindical Urbana",
    idioma: "pt-br"
  };
  idiomas: ['pt-br', 'en'];

  dadosBasicos = new BehaviorSubject<DadosBasicosInterface>(null);

  constructor(
    private http: HttpClient,
    private titleService: Title,
    private api: ApiService
  ) {}

  
  getInfo() {
    return this.info;
  }

  setTitle(title: string) {
    const currentTitle = this.titleService.getTitle();
    let begin = currentTitle.split(this.separator)[0];
    begin = begin ? begin : currentTitle;
    this.titleService.setTitle(
        begin + this.separator + title
    );
  }

  nomeMaquinaParaId(tabelaDominio, nomeMaquina) {
    if (tabelaDominio && nomeMaquina)
      return this.dadosBasicos.getValue()[tabelaDominio].filter(e => e.nomeMaquina == nomeMaquina)[0].id;
  }


}
