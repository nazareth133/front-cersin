import {Component, OnInit} from '@angular/core';
import {MensagensService} from '../../services/ui/mensagens.service';
import {MensagemTipo} from '../../models/enums/tipo-mensagem.enum';
import {MensagemInterface} from '../../models/ui/mensagem-interface';

@Component({
    selector: 'section[app-mensagens], app-mensagens',
    templateUrl: './mensagens.component.html',
    styleUrls: ['./mensagens.component.css']
})
export class MensagensComponent implements OnInit {
    fila: MensagemInterface[];

    icons = {
        erro: '×',
        sucesso: '✓',
        atencao: '⚠',
        info: 'i'
    };

    constructor(private mensagens: MensagensService) {
    }

    ngOnInit() {
        this.fila = this.mensagens.fila;
    }


    push(mensagem: string, tipo: MensagemTipo = MensagemTipo.info, descricao: string) {
        this.mensagens.push(
            {
                titulo: mensagem,
                descricao,
                tipo
            }
        );
    }

    remove(mensagem: MensagemInterface) {
        this.mensagens.remove(mensagem);
    }

}

