// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
},
  handleMy(){
    wx.navigateTo({
      url: '../my/my',
    })
  },
  handleTheir(){
    wx.navigateTo({
      url: '../their/their',
    })
  },
onLoad: function () {     //页面加载监听函数
 wx.getUserInfo({
    success: res => {
      console.log(res)    //获取的用户信息还有很多，都在res中，看打印结果
      this.setData({
        userInfo: res.userInfo,
        hasUserInfo: true
      })
    }
  })
},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})