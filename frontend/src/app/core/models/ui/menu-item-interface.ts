export interface MenuItemInterface {
  titulo: string;
  url: string;
  descricao: string;
  items?: MenuItemInterface[];
  papel?: string;
  status?: string;
  descricaoLonga?: string;
  class?: string;
  query?: {};
  chave?: string;
}

