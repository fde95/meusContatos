import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      nome: 'Juan Manuel',
      categoria: enums.Categoria.FAMILIA,
      email: 'juan@gmail.com',
      tel: '11981257156',
      id: 1
    },
    {
      nome: 'Andrea Domingues',
      categoria: enums.Categoria.FAMILIA,
      email: 'adet@gmail.com',
      tel: '11970247929',
      id: 2
    },
    {
      nome: 'Beatriz Sousa',
      categoria: enums.Categoria.FAMILIA,
      email: 'b.eatriz@gmail.com',
      tel: '11978879669',
      id: 3
    },
    {
      nome: 'Felipe Espinoza',
      categoria: enums.Categoria.TRABALHO,
      email: 'fdespinoza95@gmail.com',
      tel: '11978973663',
      id: 4
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoJaExiste) {
        alert('Já existe um cadastro com esse nome')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions
export default contatosSlice.reducer
