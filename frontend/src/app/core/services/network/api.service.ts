/**
 *
 * O Serviço api.service é responsável por concentrar as chamadas à API.
 *
 * As respostas são enviadas aos serviços que as solicitam e estes as convertem em Behaviour Subjects que são enviados aos componentes
 * usuários.
 * Os componentes não devem invocar o api.service diretamente.
 *
 */
import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {ApiPaths} from '../../models/enums/api-paths.enum';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(
        private http: HttpClient
    ) {
        this.domain = environment.api;
    }
    private readonly domain: string;
    /**
     * Substitui pares em uma url da API
     * @param api a url que terá os dados substituídos
     * @param replace os pares de dados que serão utilizados nas substituições
     */
    private static replace(api: ApiPaths, replace = []) {
        let url = api as string;
        if (replace) {
            for (const pair of replace) {
                url = url.replace(pair[0], pair[1]);
            }
        }
        return url;
    }

    /**
     * Converte atributos específicos de um query object para um query path.
     * Remove atributos convertidos do objeto da query.
     *
     * Atributos convertidos:
     * - id
     *
     * @param query o objeto com os parâmetros que iriam para a query
     * @param remove deve-se remover o /search/ da URL?
     */
    private static queryPath(query: object, remove= true) {
        let queryPath = "";
        if (!query) return queryPath;
        if (query.hasOwnProperty('id')) {
            queryPath = "/" + query['id'];
            if (remove) delete query['id'];
        }
        if (query.hasOwnProperty('search')) {
            queryPath = "/search/" + query['search'];
            if (remove) delete query['search'];
        }
        return queryPath;
    }

    constroiOptions(contentType = 'application/json') {
        const dadosUsuario = JSON.parse(localStorage.getItem('token'));
        let token = false;
        if (dadosUsuario) {
            token = dadosUsuario['access_token'];
        }
        let headers;
        if (contentType == 'multipart/form-data') {
            headers = {};
        } else {
            headers = { 'Content-Type': contentType };
        }
        if (token) {
            headers['Authorization'] = "Bearer " + token;
        }
        return { headers: new HttpHeaders (headers) };
    }

    get(api: ApiPaths, query, replace = []) {
        const url = ApiService.replace(api, replace);
        const queryPath = ApiService.queryPath(query);
        const options = this.constroiOptions();
        options['params'] = new HttpParams({fromObject: {...query}});
        return this.http.get(this.apiUrl(url + queryPath), options);
    }

    /**
     * Envia um patch para o servidor usando o token do usuário
     *
     * O patch envia uma lista de operações add replace remove test
     *
     * @param api um caminho definido no ApiPaths
     * @param dados Os dados a serem enviados ao servidor
     * @param replace um conjunto de pares a serem substituídos no caminho (Ex: [ ["ID",5], ["NOME", "João"]
     */
    patch(api: ApiPaths, dados, replace = []) {
        return this.http.patch(
          this.apiUrl(ApiService.replace(api, replace)),
          dados,
          this.constroiOptions('application/json-patch+json')
        );
    }

    /**
     * Envia um merge patch para o servidor usando o token do usuário
     *
     * @param api um caminho definido no ApiPaths
     * @param dados Os dados a serem enviados ao servidor
     * @param replace um conjunto de pares a serem substituídos no caminho (Ex: [ ["ID",5], ["NOME", "João"]
     */
    mergePatch(api: ApiPaths, dados, replace = []) {
        return this.http.patch(this.apiUrl(ApiService.replace(api, replace)), dados, this.constroiOptions('application/merge-patch+json'));
    }

    /**
     * Envia um put para o servidor usando o token do usuário
     * @param api um caminho definido no ApiPaths
     * @param dados Os dados a serem enviados ao servidor
     * @param replace um conjunto de pares a serem substituídos no caminho (Ex: [ ["ID",5], ["NOME", "João"]
     */
    put(api: ApiPaths, dados, replace = []) {
        return this.http.put(this.apiUrl(ApiService.replace(api, replace)), dados, this.constroiOptions());
    }

    /**
     * Envia um post para o servidor usando o token do usuário
     * @param api um caminho definido no ApiPaths
     * @param dados Os dados a serem enviados ao servidor
     */
    post(api: ApiPaths, dados) {
        return this.http.post(this.apiUrl(api), dados, this.constroiOptions());
    }

    // uuid gerado com função descrita em https://stackoverflow.com/a/2117523/935645
    gerarNonce() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    /**
     * Constrói uma URL com query a partir do ApiPath e objeto
     * @param prefix string a ser usada para prefixar a query
     * @param query: o objeto com os atributos da query
     */
    queryHref(prefix: string, query) {
        const params = new HttpParams({fromObject: {...query}});
        return  `${prefix}?${params}` ;
    }


    /**
     * Retorna uma url incluindo o domínio da aplicação
     * @param path o caminho a ser usado para construir a URL.
     */
    apiUrl(path: string) {
        return this.domain + ApiPaths.api + path;
    }

}
