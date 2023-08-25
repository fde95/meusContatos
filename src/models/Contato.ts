import * as enums from '../utils/enums/Contato'

class Contato {
  nomeContato: string
  categoria: enums.Categoria
  tel: string
  email: string
  id: number

  constructor(
    nomeContato: string,
    categoria: enums.Categoria,
    tel: string,
    email: string,
    id: number
  ) {
    this.nomeContato = nomeContato
    this.categoria = categoria
    this.tel = tel
    this.email = email
    this.id = id
  }
}
export default Contato
