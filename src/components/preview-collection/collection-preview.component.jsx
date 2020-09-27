import React from 'react'

import { withRouter } from 'react-router-dom'
import CollectionItem from '../collection-item/collection-item.component'

import './collection-preview.styles.scss'

const CollectionPreview = ( { title, items, history, match, routeName } ) => {
  return (
    <div className='collection-preview' onClick={() => history.push(`${match.url}/${routeName}`)}>
      <h1 className='title'>{title}</h1>
      <div className='preview'>
        {
          items
          .filter((item, idx) => idx < 4)
          .map( ( { id, ...otherProps } ) => (
            <CollectionItem key={id} {...otherProps}/>
          ))
        }
      </div>
    </div>
  )
}

export default withRouter(CollectionPreview)
