// const baseUrl = 'http://192.168.0.220:8767/'
// const baseUrl = 'http://localhost:8767/'
// baseUrl = '/dpc';    //H5下将地址修改为/dpc

const baseUrl = 'https://read.youngbird97.top/'

const showToast = (title) => {
    uni.showToast({
        title: title,
        icon: 'none'
    })
}

/**请求接口
 * @method http
 * @param {String} url 接口地址
 * @param {Object} data 接口参数
 * @param {Object} option 接口配置信息，可选
 * @return {Object} Promise
 */
const http = (url, data = {}, option = {}) => {
    let hideLoading = option.hideLoading || false // 是否显示 loading
    let hideMsg = option.hideMsg || false // 是否隐藏错误提示
    let token = '' // 登录鉴权获得的 token
    uni.getStorage({
        key: 'token',
        success: (ress) => {
            token = ress.data
        }
    })
    if (!hideLoading) {
        uni.showLoading({
            title: '加载中...',
            mask: true
        })
    }
    return new Promise((resolve, reject) => {
        uni.request({
            url: baseUrl + url,
            method: option.method || 'POST', // 默认 post 请求
            header: {
                'Token': token,
            },
            data: data,
            success: res => { // 服务器成功返回的回调函数
                if (!hideLoading) uni.hideLoading()
                if (res.statusCode === 200 || res.statusCode === 201) {
                    let result = res.data
					console.info(result)
                    if (result.code === 200 || result.code === 404 || result.code === 40164) {
                        resolve(result)
                        return
                    }
                    reject(result.errmsg)
                    if (!hideMsg) showToast(result.errmsg)
                } else { // 返回值非 200，强制显示提示信息
                    showToast('[' + res.statusCode + '] 系统处理失败')
                    reject('[' + res.statusCode + '] 系统处理失败')
                }
            },
            fail: (err) => { // 接口调用失败的回调函数
				console.info(err)
                if (!hideLoading) uni.hideLoading()
                if (err.errMsg != 'request:fail abort') {
                    showToast('连接超时，请检查您的网络。')
                    reject('连接超时，请检查您的网络。')
                }
            }
        })
    })
}
export default http