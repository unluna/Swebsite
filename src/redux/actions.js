import axios from 'axios/index'

import {
  GET_INNER,
  MEMBER_FONTEND,
  MEMBER_GAME,
  MEMBER_BACKGROUND,
  GET_MEMBERS,
  CHANGE_SOURCENAV_STATE,
  FRONT_REQUEST_START,
  ITEM_SHOW,
  CHANGE_ITEM,
  SET_TIME,
  SEND_TEXT,
  MEMBERS_START,
  GETNUM,
} from './action-types'

//inner：获取搜索框的文字

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
        return (BgPageMember)

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
export const getInner = (inner) => ({type: GET_INNER, data: inner})
export const changeSourceNavState = (state) => ({type: CHANGE_SOURCENAV_STATE, data: state})
export const frontStart = (start) => ({
  type: FRONT_REQUEST_START, data: start
})
export const changeItemShow = (ItemShow) => ({
  type: ITEM_SHOW, data: ItemShow
})
export const getItem = (item) => ({
  type: CHANGE_ITEM, data: item,
})

export const setTimeOut = (item) => ({
  type: SET_TIME, data: item

})

export const setOut = () => {
  return dispatch => {
    setTimeout(function () {
      let data = [
         {
          name: '阿拉斯加上课',
          title: '我的祖国',
          contener: '那是孤独的雪，是死掉的雨，是雨的精魂。　　暖国〔2〕的雨，向来没有变过冰冷的坚硬的灿烂的雪花。博识的人们觉得他单调，他自己也以为不幸否耶？江南的雪，可是滋润美艳之至了；那是还在隐约着的青春的消息，是极壮健的处子的皮肤。雪野中有血红的宝珠山茶〔3〕，白中隐青的单瓣梅花，深黄的磬口的蜡梅花〔4〕；雪下面还有冷绿的杂草。胡蝶确乎没有；蜜蜂是否来采山茶花和梅花的蜜，我可记不真切了。但我的眼前仿佛看见冬花开在雪野中，有许多蜜蜂们忙碌地飞着，也听得他们嗡嗡地闹着。　　孩子们呵着冻得通红，像紫芽姜一般的小手，七八个一齐来塑雪罗汉。因为不成功，谁的父亲也来帮忙了。罗汉就塑得比孩子们高得多，虽然不过是上小下大的一堆，终于分不清是壶卢还是罗汉；然而很洁白，很明艳，以自身的滋润相粘结，整个地闪闪地生光。孩子们用龙眼核给他做眼珠，又从谁的母亲的脂粉奁中偷得胭脂来涂在嘴唇上。这回确是一个大阿罗汉了。他也就目光灼灼地嘴唇通红地坐在雪地里。　　第二天还有几个孩子来访问他；对了他拍手，点头，嘻笑。但他终于独自坐着了。晴天又来消释他的皮肤，寒夜又使他结一层冰，化作不透明的水晶模样；连续的晴天又使他成为不知道算什么，而嘴上的胭脂也褪尽了。　　但是，朔方的雪花在纷飞之后，却永远如粉，如沙，他们决不粘连，撒在屋上，地上，枯草上，就是这样。屋上的雪是早已就有消化了的，因为屋里居人的火的温热。别的，在晴天之下，旋风忽来，便蓬勃地奋飞，在日光中灿灿地生光，如包藏火焰的大雾，旋转而且升腾，弥漫太空，使太空旋转而且升腾地闪烁。',
          comments:[{name:'喷子1',comment:'你个zz'},{name:'喷子2',comment:'1楼说的好'}],
        }, {
          name: '阿拉斯加上课',
          title: '我的祖国',
          contener: 'qqq',
          comments:[{name:'喷子2',comment:'你个zz'},{name:'喷子2',comment:'1楼说的好'}],
        }, {
          name: '阿拉斯加上课',
          title: '我的祖国',
          contener: 'eee',
          comments:[{name:'喷子3',comment:'你个zz'},{name:'喷子2',comment:'1楼说的好'}],
        }, {
          name: '阿拉斯加上课',
          title: '我的祖国',
          comments:[{name:'喷子4',comment:'你个zz'},{name:'喷子2',comment:'1楼说的好'}],
        },
      ]
      dispatch(setTimeOut(data))
    }, 1000)
    setTimeout(function () {
      /*dispatch(sendContent(content))*/
    }, 1)
  }
}
export const sendContent = (content) => ({
  type: SEND_TEXT, data: content
})
export const send = () => {
  return dispatch => {
    /*dispatch(sendContent(content))*/
  }
}
export const getMember = (members) => ({
  type: GET_MEMBERS, data: members
})
export const memberStart = (start) => ({
  type: MEMBERS_START, data: start
})
export const members = () => {

  return dispatch => {
    dispatch(memberStart('not first'))
    setTimeout(function () {
      let info = {
        grade2017: [{grade: '2017'}, {name: '0网工二班牛鬼蛇神0'}, {name: 'q网工二班牛鬼蛇神'}, {name: '网工二班牛鬼蛇神'}, {name: '网工二班牛鬼蛇神'}],
        grade2016: [
          {grade: '2016'}, {name: '网工二班牛鬼蛇神1'}, {name: '网工二班牛鬼蛇神1'}, {name: '网工二班牛鬼蛇神1'}, {name: '网工二班牛鬼蛇神1'}, {name: '网工二班牛鬼蛇神1'}, {name: '网工二班牛鬼蛇神1'}, {name: '网工二班牛鬼蛇神1'}, {name: '网工二班牛鬼蛇神1'}, {name: '网工二班牛鬼蛇神1'}, {name: '网工二班牛鬼蛇神1'}, {name: '网工二班牛鬼蛇神1'}, {name: '网工二班牛鬼蛇神'}, {name: '网工二班牛鬼蛇神'}, {name: '网工二班牛鬼蛇神'}],
        grade2015: [{grade: '2015'}, {name: '网工二班牛鬼蛇神2'}, {name: '网工二班牛鬼蛇神'}, {name: '网工二班牛鬼蛇神'}, {name: '网工二班牛鬼蛇神'}],
      }
      for (let i in info) {
        dispatch(getMember(info[i]))
      }
    }, 10)

  }
}
export const getValue = (content) => {
  return dispatch => {
    dispatch(getInner(content))
  }
}