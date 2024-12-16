import type { AVAILABLE_COCKTAILS } from '../constants'

export type CocktailType = (typeof AVAILABLE_COCKTAILS)[number]

export type GetCocktail = {
  drinks: CocktailApi[]
}

export type CocktailApi = {
  [K in `strIngredient${number}`]: string | null
} & {
  [K in `strMeasure${number}`]: string | null
} & {
  idDrink: string
  strDrink: string
  strCategory: string
  strAlcoholic: string
  strGlass: string
  strInstructions: string
  strDrinkThumb: string
}
