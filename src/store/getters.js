import variables from '@/styles/variables.modules.scss'

const getters = {
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  /**
   * @returns true 表示已存在用户信息
   */
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  cssVar: () => variables,
  sidebarOpened: (state) => state.app.sidebarOpened,
  language: (state) => state.app.language
}
export default getters
