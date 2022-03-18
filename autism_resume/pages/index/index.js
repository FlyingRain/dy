Page({
    onItemClick() {
      tt.navigateTo({
        url: `/pages/index/record?params=navigateTo`, //demo示例，一般路径形式：/pages/detail/detail?key=${value}
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