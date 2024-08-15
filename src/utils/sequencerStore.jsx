import { createContext, useContext, useReducer } from 'react'
import { defaultContext } from './constants'

export const SequencerContext = createContext(defaultContext)

export const useSequencerStore = () => useContext(SequencerContext)

export const actions = {
  TOGGLE_NOTE: 'TOGGLE_NOTE'
}

const reducer = (state, action) => {
  switch(action.type) {
    case actions.TOGGLE_NOTE:
      return {
        ...state,
        rows: state.rows.map((row, i) => {
          console.log(i)
          return {
            ...row,
            notes: row.notes.map((note, j) => {
              console.log(action.payload, action.payload.rowIdx === i && action.payload.noteIdx === j)
              return {
                ...note,
                active: action.payload.rowIdx === i && action.payload.noteIdx === j ? !note.active : note.active
              }
            })
          }
        })
      }
    default: 
      return state
  }
}

export const SequencerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultContext)

  return (
    <SequencerContext.Provider value={{ state, dispatch, actions }}>
      {children}
    </SequencerContext.Provider>
  )
}