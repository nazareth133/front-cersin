import {TabelaDeDominioInterface} from './tabela-de-dominio-interface';

export interface DadosBasicosInterface {
  editalTipoOcorrencias: TabelaDeDominioInterface[];
  fluxosPublicacaoEdital: TabelaDeDominioInterface[];
  estagiosAlienacao: TabelaDeDominioInterface[];
  tiposImovel: TabelaDeDominioInterface[];
  ocupacoes: TabelaDeDominioInterface[];
  fluxosProposta: TabelaDeDominioInterface[];
  situacoesItemEdital: TabelaDeDominioInterface[];
  entidadesProprietarias: TabelaDeDominioInterface[];
  roles: TabelaDeDominioInterface[];
}
