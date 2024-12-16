import { Navigate, useParams } from 'react-router'

import { useCocktailQuery } from '../../hooks'

import { Loader } from '../Loader'

import { Ingredients } from './Ingredients'
import CN from './style.module.scss'

export const Cocktail = () => {
  const { cocktail: name } = useParams()
  const { data: cocktail, isError, isLoading } = useCocktailQuery(name)

  if (isLoading) {
    return (
      <article className={CN.stub}>
        <Loader />
      </article>
    )
  }

  if (isError || !cocktail) {
    return <Navigate to="/404" />
  }

  const { strDrinkThumb, strDrink, strCategory, strAlcoholic, strGlass, strInstructions } = cocktail

  return (
    <article className={CN.container}>
      <aside className={CN.imageContainer}>
        <img src={strDrinkThumb} alt={strDrink} className={CN.image} loading="lazy" />
      </aside>
      <section className={CN.info}>
        <h2 className={CN.name}>{strDrink}</h2>
        <dl className={CN.description}>
          <dt>Category:</dt>
          <dd>{strCategory}</dd>
          <dt>Alcoholic:</dt>
          <dd>{strAlcoholic}</dd>
          <dt>Glass:</dt>
          <dd>{strGlass}</dd>
        </dl>

        <section className={CN.instructions}>
          <h4>Instructions:</h4>
          <dd>{strInstructions}</dd>
        </section>

        <Ingredients cocktail={cocktail} />
      </section>
    </article>
  )
}
