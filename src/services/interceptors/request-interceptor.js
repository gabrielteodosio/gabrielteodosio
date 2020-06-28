export default function RequestInterceptor () {
  return (request) => {
    request.headers.accept = 'application/json'
    request.headers['content-type'] = 'application/json'

    return request
  }
}
