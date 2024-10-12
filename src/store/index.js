import { createContext } from "react";
import kuurdak from "../assets/images/kuurdak.png"
import beshbarmak from "../assets/images/beshbarmak.png"
import chuchuk from "../assets/images/chuchuk.png"
import byjy from "../assets/images/byjy.png"
import ash from "../assets/images/ash.png"


const product = [
    {
      imageFood: `${kuurdak}`,
      titleFood: "Kuurdak",
      priceFood: 400,
      description: "кыргыз элинин эң сыйлуу тамактарынын бири.",
      amount: 1,
      id: Math.random().toString()
    },
    {
      imageFood: `${beshbarmak}`,
      titleFood: "Beshbarmak",
      priceFood: 800,
      description: "майда тууралган эттен жасалган кыргыздын эң сый тамагы.",
      amount: 1,
      id: Math.random().toString()
    },
    {
      imageFood: `${chuchuk}`,
      titleFood: "Chuchuk",
      priceFood: 750,
      description: "жылкынын эти, казы-карта, татымдар кошулуп жасалган азык.",
      amount: 1,
      id: Math.random().toString()
    },
    {
      imageFood: `${byjy}`,
      titleFood: "Byjy",
      priceFood: 630,
      description: "койдун боорун эзип, ага майда тууралган пияз, сарымсак менен бышырылган чүйгүн тамак.",
      amount: 1,
      id: Math.random().toString()
    },
    {
      imageFood: `${ash}`,
      titleFood: "Ash",
      priceFood: 400,
      description: "койдун боорун эзип, ага майда тууралган пияз, сарымсак менен бышырылган чүйгүн тамак.",
      amount: 1,
      id: Math.random().toString()
    },
  ]

export const Store = createContext()



export const ProviderContext = ({children}) => {


    const state = {
        product
    }

    return (
        <Store.Provider value={state} >{children}</Store.Provider>
    )
}