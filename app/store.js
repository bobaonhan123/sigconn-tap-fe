import { create } from 'zustand'

export const useNamePopupStore = create((set) => ({
    isVisible:false,
    toggle:()=> {
        set((state) => ( { isVisible: !state.isVisible }))
    }
}))