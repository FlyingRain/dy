const app = getApp()

Page({
  data: {
    url: "https://s3.pstatp.com/toutiao/static/img/logo.201f80d.png",
    items: [{
      value: 'aa',
      name: '1'
    }, {
      value: 'bb',
      name: '2',
      checked: 'true',
    },]
  },
  onLoad: function () {
    console.log('Welcome to Mini Code')
  },
})
