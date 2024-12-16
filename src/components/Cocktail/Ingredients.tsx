import { Fragment, memo } from 'react'

import { CocktailApi } from '../../types'
import { getIngredientsList } from '../../services'

import CN from './style.module.scss'

export const IngredientsRaw = (props: IngredientsProps) => {
  const { cocktail } = props
  // Здесь useMemo не нужен из-за использования React.memo для компонента
  // Но в текущем примере и React.memo избыточен. Добавлено на будущие импрувы:)
  const list = getIngredientsList(cocktail)

  return (
    <section className={CN.ingredients}>
      <h4>List of ingredients:</h4>
      <dl>
        {list.map(({ measure, ingredient }, i) => (
          <Fragment key={ingredient}>
            <dt>
              {i + 1}. {measure}
            </dt>
            <dd>{ingredient}</dd>
          </Fragment>
        ))}
      </dl>
    </section>
  )
}

export type IngredientsProps = {
  cocktail: CocktailApi
}

export const Ingredients = memo(IngredientsRaw)
