import { useCallback } from 'react'
import { useQuery } from '@tanstack/react-query'

import { getCocktail } from '../api'
import { AVAILABLE_COCKTAILS } from '../constants'
import { CocktailType, GetCocktail } from '../types'

export const useCocktailQuery = (cocktail?: string) => {
  const isAvailable = isValidCocktail(cocktail)
  // По заданию отображается один коктель при получении данных, без дополнительных пунктов. Поэтому взят первый из полученного списка
  const select = useCallback(({ drinks }: GetCocktail) => drinks[0], [])

  return useQuery({
    queryKey: ['cocktail', cocktail],
    queryFn: isAvailable ? () => getCocktail(cocktail) : void 0,
    enabled: isAvailable,
    staleTime: 10 * 60 * 1000, // 10 min
    select,
  })
}

const isValidCocktail = (cocktail?: string): cocktail is CocktailType => {
  return AVAILABLE_COCKTAILS.some((item) => item === cocktail)
}
