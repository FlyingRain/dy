Page({
    data: {
        url: "https://s3.pstatp.com/toutiao/static/img/logo.201f80d.png",
    },
    onItemClick() {
        tt.navigateTo({
          url: '/pages/index/question?params=navigateTo', //demo示例，一般路径形式：/pages/detail/detail?key=${value}
          success(res) {
            console.log(res);
          },
          fail(res) {
              console.log(res)
            console.log("navigateTo调用失败");
          },
        });
      },
})