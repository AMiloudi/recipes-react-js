import React from 'react'
import { shallow } from 'enzyme'
import LikeButton from './LikeButton'

describe('<LikeButton />', () => {
  const button = shallow(<LikeButton />)

  it('is wrapped in a paragraph with class "like"', () => {
    expect(button).toHaveTagName('div')
    expect(button).toHaveClassName('like')
  })
  it('has an initial state for "liked", that is "false"', () => {
    expect(button).toHaveState('liked', false)
  })
  describe('click it', () => {
    it('toggles the "liked" state', () => {
      // initial
      expect(button).toHaveState('liked', false)

      // first click
      button.find('button').simulate('click')
      expect(button).toHaveState('liked', true)

      // second click
      button.find('button').simulate('click')
      expect(button).toHaveState('liked', false)
    })
  })
})
