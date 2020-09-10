export function calAPI(method, params) {
    const VK = window.VK
    params.v = '5.76'

  return new Promise((resolve, rejected) => {
    VK.api(method, params, (data) => {
      if (data.error) {
        rejected(data.error)
      } else {
        resolve(data.response)
      }
    })
  })
}