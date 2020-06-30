import {dependentPaths, environment} from '../../../../environments/environment';

enum commonPaths {
    api = 'http://localhost:8080',
}
/** Para viabilizar um enum dinâmico, com valores que se alteram conforme o ambiente, exportamos tanto o objeto quanto o tipo. **/
export const ApiPaths = Object.assign({}, dependentPaths, commonPaths);
export type ApiPaths = dependentPaths | commonPaths;
