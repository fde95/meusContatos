import * as enums from '../utils/enums/Contato'

class Contato {
  nome: string
  categoria: enums.Categoria
  tel: string
  email: string
  id: number

  constructor(
    nome: string,
    categoria: enums.Categoria,
    tel: string,
    email: string,
    id: number
  ) {
    this.nome = nome
    this.categoria = categoria
    this.tel = tel
    this.email = email
    this.id = id
  }
}
export default Contato
