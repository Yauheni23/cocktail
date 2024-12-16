import { CocktailType, GetCocktail } from '../types'

export const getCocktail = async (cocktail: CocktailType): Promise<GetCocktail> => {
  const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`)
  return res.json()
}
