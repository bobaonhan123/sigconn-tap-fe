import { create } from 'zustand'

export const useNamePopupStore = create((set) => ({
    isVisible:false,
    toggle:()=> {
        set((state) => ( { isVisible: !state.isVisible }))
    },
    isChanged:false,
    change: () => {
        set((state) => ({ isChanged: !state.isChanged }))
    },
}))

export const useTagPopupStore = create((set) => ({
    isVisible: false,
    toggle: () => {
        set((state) => ({ isVisible: !state.isVisible }))
    },
    isChanged: false,
    change: () => {
        set((state) => ({ isChanged: !state.isChanged }))
    },
}))