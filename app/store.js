import { create } from 'zustand'

export const useNamePopupStore = create((set) => ({
    isVisible: false,
    toggle: () => {
        set((state) => ({ isVisible: !state.isVisible }))
    },
    isChanged: false,
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
    url: "",
    setUrl: (newUrl) => {
        set((state) => ({ url: newUrl }))
    },
}))

export const useProfile = create((set) => ({
    id: null,
    name: '',
    slogan: '',
    img: '',
    contact: [],

    updateState: (newState) => set((prevState) => ({ ...prevState, ...newState })),
    addContact: (newContact) => set((prevState) => ({
        contact: [...prevState.contact, newContact],
    })),
    editContactName: (index, newName) => set((prevState) => ({
        contact: prevState.contact.map((contact, i) =>
            i === index ? { ...contact, name: newName } : contact
        ),
    })),
    editContactUrl: (index, newUrl) => set((prevState) => ({
        contact: prevState.contact.map((contact, i) =>
            i === index ? { ...contact, url: newUrl } : contact
        ),
    })),
    updateName: (newName) => set((prevState) => ({
        name: newName,
    })),
    updateSlogan: (newSlogan) => set((prevState) => ({
        slogan: newSlogan,
    })),
}));

