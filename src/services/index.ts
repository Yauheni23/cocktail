import { CocktailApi } from '../types'

export const getIngredientsList = (cocktail: CocktailApi) => {
  const list: { measure: string; ingredient: string }[] = []

  for (let i = 1; i; i++) {
    const measure = cocktail[`strMeasure${i}`]
    const ingredient = cocktail[`strIngredient${i}`]

    if (!measure || !ingredient) break

    list.push({ measure, ingredient })
  }

  return list
}
