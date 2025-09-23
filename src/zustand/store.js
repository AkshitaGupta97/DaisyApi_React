import {create} from 'zustand'

const CurrencyStore = create((set) => ({
    currency :'usd',  // default value
    setCurrency: (newCurrency)=> set((state) => {
        return{
            ...state,
            currency: newCurrency
        }
    })
}))

export default CurrencyStore;