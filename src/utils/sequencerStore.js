import { createContext, useContext, useReducer } from 'react'
import { defaultContext } from './constants'

export const SequencerContext = createContext(defaultContext)

export const useSequencerContext = () => useContext(SequencerContext)

const reducer = (state, actions) => {

}

export const SequencerProvider = props => {
  const [state, dispatch] = useReducer(reducer, defaultContext)

  return <SequencerContext.Provider value={{ state, dispatch }} {...props} />
}