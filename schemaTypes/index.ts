import {SchemaTypeDefinition} from 'sanity'

import menus from './menus'
import {promotionType} from './promotionType'
import {formType} from './formType'
import {heroType} from './heroType'
import {imageGalleryType} from './imageGalleryType'
import {pageType} from './pageType'
import {homepageType} from './homepageType'
import {textWithIllustrationType} from './textWithIllustrationType'
import {videoType} from './videoType'

export const schemaTypes = [
  menus,
  homepageType,
  pageType,
  heroType,
  promotionType,
  textWithIllustrationType,
  imageGalleryType,
  formType,
  videoType,
]
export const schema: {types: SchemaTypeDefinition[]} = {
  types: [menus, promotionType, formType, heroType, imageGalleryType, pageType, textWithIllustrationType, videoType, formType],
}
