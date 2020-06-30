import { Component, OnInit } from '@angular/core';
import { BasicInfoService } from "./core/services/negocio/basic-info.service";
import { environment } from '../environments/environment';
import { Angulartics2Piwik } from 'angulartics2/piwik';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  localStorageKeyVersao = 'versao';
  basicInfo = {
    classificacao: "",
    nomeOrgao: "",
    nomeServico: ""
  };
  info;
  versao: string;
  pronto = true;


  constructor(
    private basicInfoService: BasicInfoService,
    private angulartics2Piwik: Angulartics2Piwik
  ) {
    this.preparaBasicInfo();
    angulartics2Piwik.startTracking();
  }

  /**
   * Carrega scripts externos
   */
  ngOnInit() {
    this.loadScript("//barra.brasil.gov.br/barra_2.0.js");
    this.versao = environment.versao;
    const versaoArmazenada = localStorage.getItem(this.localStorageKeyVersao);
    if (this.versao != versaoArmazenada) {
      localStorage.clear();
      localStorage.setItem(this.localStorageKeyVersao, this.versao);
    }
  }

  preparaBasicInfo() {
    console.log("Preparando Basic Info");
    const info = this.basicInfoService.getInfo();
    this.basicInfo.classificacao = info.orgaoClassificacao + " da";
    this.basicInfo.nomeOrgao = info.orgaoTema;
    this.basicInfo.nomeServico = info.sistemaNome;
    this.basicInfoService.dadosBasicos.subscribe(
      (dadosBasicos) => {
        if (dadosBasicos) {
          this.info = dadosBasicos;
          this.pronto = true;
        }
      });
  }

  loadScript(url: string) {
    const script = this.createScript();
    script.src = url;
  }


  createScript() {
    const body = document.body as HTMLDivElement;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.async = false;
    script.defer = true;
    body.appendChild(script);
    return script;
  }
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
}

}
