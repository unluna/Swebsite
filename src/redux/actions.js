import axios from 'axios/index'

import {
  GET_INNER,
  MEMBER_FONTEND,
  MEMBER_GAME,
  MEMBER_BACKGROUND

} from './action-types'

//inner：获取搜索框的文字
export const getInner = (inner) => ({
  type: GET_INNER,
  data: inner
}) //type:名字 data：操作的数据

// export const fontEndGet = (fontEnd) => ({
//   type: MEMBER_FONTEND,
//   data: fontEnd
// })
// export const AjaxFontEnd = (searchName) => {
//   return dispatch => {
//     setTimeout(() => {
//       const fontEnd = response.data.fontend.map((name, key) => {
//           return ({
//             title: name.title,
//             image: name.image,
//             intro: name.intro,
//           })
//         }
//         , 10000)
//       dispatch(fontEndGet(fontEnd))
//     })
//   }

export const backgroundGet = (BgPageMember) => ({
  type: MEMBER_BACKGROUND,
  data: BgPageMember
})
export const AjaxBackground = () => {
  return dispatch => {
    setTimeout(function () {
        let BgPageMember = [{
            name: 'aaa',


          },
          {
            name: 'aaa',
            title: ''


          },
          {
            name: 'aaa',
            title: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'

          },
          {
            name: 'aaa',
            title: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'

          },
          {
            name: 'aaa',
            title: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'

          }
        ]
        dispatch(backgroundGet(BgPageMember))
      return(BgPageMember)

      }

      , 2000)

    
  }

}


// export const gameGet = (game) => ({
//   type: MEMBER_GAME,
//   data: game
// })
// export const AjaxGame = (searchName) => {
//   return dispatch => {
//     setTimeout(() => {
//       const game = response.data.game.map((name, key) => {
//           return ({
//             title: name.title,
//             image: name.image,
//             intro: name.intro,
//           })
//         }
//         , 10000)
//       console.log(game)
//       dispatch(gameGet(game))
//     })
//   }
// }