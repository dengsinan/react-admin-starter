import type { StateCreator } from 'zustand'
import { create as actualCreate } from 'zustand'

const storeResetFns = new Set<() => void>()

export function resetAllStores() {
  storeResetFns.forEach((resetFn) => {
    resetFn()
  })
}

export const create = (<T>() => {
  return (stateCreator: StateCreator<T>) => {
    const store = actualCreate(stateCreator)
    storeResetFns.add(() => {
      store.setState(store.getInitialState(), true)
    })
    return store
  }
}) as typeof actualCreate
