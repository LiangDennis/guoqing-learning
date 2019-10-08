export default function request(options) {
  const BASE_URL_REQUEST = 'http://219.135.161.101:8002/api';
  options.url = BASE_URL_REQUEST+options.url;
  return new Promise((resolve, reject) => {
    wx.request({
      url: options.url,
      method: options.method || 'get',
      header: options.header || {},
      data:options.data || {},
      success: resolve,
      fail: reject
    })
  })
}