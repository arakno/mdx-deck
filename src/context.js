import React from 'react'

export const Context = React.createContext(null)
export const { Provider, Consumer } = Context

export const withDeck = Component => props =>
  <Consumer>
    {deck => (
      <Component
        {...props}
        deck={deck}
      />
    )}
  </Consumer>

export default Context
