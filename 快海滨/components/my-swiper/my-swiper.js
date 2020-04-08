Page({

  data: {

    swiperCurrent: 0,

    indicatorDots: true,

    autoplay: true,

    interval: 1500,

    duration: 800,

    circular: true,

    imgUrls: [

      'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3062428137,134364702&fm=26&gp=0.jpg',

      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584859066490&di=f9da5c35e8c35ff10077aee64e8af84c&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2Fk1%2F0f%2FQJ6745637329.jpg',

      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584859364230&di=c203924941e49c5bdcc69ff8aca4b7e6&imgtype=0&src=http%3A%2F%2Fgoss4.vcg.com%2Feditorial%2Fvcg%2F800%2Fnew%2FVCG111151323495.jpg'

    ],

    links: [

      '../user/user',

      '../user/user',

      '../user/user'

    ]



  },

  //轮播图的切换事件

  swiperChange: function (e) {

    this.setData({

      swiperCurrent: e.detail.current

    })

  },

  //点击指示点切换

  chuangEvent: function (e) {

    this.setData({

      swiperCurrent: e.currentTarget.id

    })

  },

  //点击图片触发事件

  swipclick: function (e) {

    console.log(this.data.swiperCurrent);

    wx.switchTab({

      url: this.data.links[this.data.swiperCurrent]

    })

  }

})