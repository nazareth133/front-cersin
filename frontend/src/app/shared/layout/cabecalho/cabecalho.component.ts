import {Component, Input, OnInit} from '@angular/core';
import {UserInterface} from "../../../core/models/user-interface";
import {ActivatedRoute} from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
    selector: '[app-cabecalho]',
    templateUrl: './cabecalho.component.html',
    styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

    autenticando = false;
    @Input() info;
    usuario: UserInterface;
    menuUsuario = [
        {
            titulo: "Minhas propostas",
            url: "/propostas/minhas",
            descricao: "Visualize as propostas enviadas"
        },
        {
            titulo: "Encerrar sessão",
            url: "/sair",
            descricao: "Sair do sistema"
        }
    ];

    constructor(
        private activatedRoute: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(
            (p) => {
                this.autenticando = (p.code && p.state);
            }
        );
    }

    login() {
        
    }

}
