export const SERVER_BASE_URL = 'https://jsonplaceholder.typicode.com'

export const fetchApi = async (options) => {
   try {
      let { path } = options

      const requestOptions = {
         method: options.method || 'GET',
         headers: { 'Content-Type': 'application/json' },
      }

      if (options.method !== 'GET') {
         requestOptions.body = JSON.stringify(options.body || {})
      }

      if (options.params) {
         const queryParamsStringValue = Object.keys(options.params)
            .map((paramKey) => `${paramKey}=${options.params[paramKey]}`)
            .join('&')
         path = `${path}?${queryParamsStringValue}`
      }

      const response =
         options?.noBaseUrl && options?.noBaseUrl
            ? await fetch(`${path}`, requestOptions)
            : await fetch(`${SERVER_BASE_URL}/${path}`, requestOptions)
      const data = await response.json()

      if (!response.ok) {
         let errorMessage = 'Something went wrong'
         if (data && data.message) {
            errorMessage = data.message
         }
         throw new Error(errorMessage)
      }

      return data
   } catch (e) {
      throw new Error(e.message)
   }
}
