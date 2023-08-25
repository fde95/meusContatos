import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      nomeContato: 'Juan Manuel',
      categoria: enums.Categoria.FAMILIA,
      email: 'juan@gmail.com',
      tel: '11981257156',
      id: 1
    },
    {
      nomeContato: 'Andrea Domingues',
      categoria: enums.Categoria.FAMILIA,
      email: 'adet@gmail.com',
      tel: '11970247929',
      id: 2
    },
    {
      nomeContato: 'Beatriz Sousa',
      categoria: enums.Categoria.FAMILIA,
      email: 'b.eatriz@gmail.com',
      tel: '11978879669',
      id: 3
    },
    {
      nomeContato: 'Felipe Espinoza',
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
    }
  }
})

export const { remover, editar } = contatosSlice.actions
export default contatosSlice.reducer
