import Mock from 'mockjs'

Mock.mock('/api/user/login', 'post', () => {
  return {
  code: 200,
  message: '登录成功',
  data: {
    token: '@guid',
  },
}})