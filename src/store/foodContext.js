import {createContext , useState} from "react"

export const FoodContext = createContext({
    items: []
})

export const FoodProvider = ({children}) => {
    const [items , setItems] = useState([])

   

    const addBasket = (data) => {

        setItems((prevState) => {
            const doesItemExist = prevState.find((el) => {
                return el.id === data.id
            })

            if(!doesItemExist){
                return [...prevState , data]
            }

            if(!prevState.length){
                return [data]
            }

            const updateItems = prevState.map((el) => {
                if(el.id === data.id){
                    el.amount = el.amount + data.amount
                }

                return el
            })

            return updateItems
        })
    }
    const stateFoods = {
        items,
        addBasket
    }

    return (
        <FoodContext.Provider value={stateFoods}  >{children}</FoodContext.Provider>
    )
}