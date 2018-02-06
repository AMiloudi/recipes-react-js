import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Vegan from '../images/vegan.svg'
import Vegetarian from '../images/vegetarian.svg'
import Pescatarian from '../images/pescatarian.svg'
import LikeButton from '../components/LikeButton'

class RecipeItem extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    vegan: PropTypes.bool,
    vegetarian: PropTypes.bool,
    pescatarian: PropTypes.bool,
  }

  render() {
    const { title, summary, vegan, vegetarian, pescatarian } = this.props

    return(
      <article className="recipe">
      <h1>{ title }</h1>
      <div>
      <p>{ summary }</p>
      <ul >
      { vegan && <li><img src={Vegan} alt="vegan" style = {{height: '1.5em'}} /></li> }
      { !vegan && vegetarian && <li><img src={Vegetarian} alt="vegetarian" style = {{height: '1.5em'}}/></li> }
      { pescatarian && <li><img src={Pescatarian} alt="pescatarian" style = {{height: '1.5em'}}/></li> }
      <LikeButton content= "likes"/>
      </ul>
      </div>
      </article>
    )
  }
}

export default RecipeItem
