import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Angulartics2Module } from 'angulartics2';
import { UploadFileSITCS } from './components/upload-file-sitcs/upload-file-sitcs.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import{CertidaoSindicalComponent} from './main/certidao-sindical/certidao-sindical.component';
import{EmitirCertidaoComponent} from './main/certidao-sindical/emitir-certidao/emitir-certidao.component'


const routes: Routes = [
    { path: '', component: CertidaoSindicalComponent },
    { path: 'upload', component: UploadFileSITCS},
    { path: 'login', component: LoginComponent},
    { path: 'cadastro', component: CadastroComponent},
    { path: 'emitir', component: EmitirCertidaoComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        Angulartics2Module.forRoot({})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
