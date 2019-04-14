const URLS = () => {
  // const BASE_URL = 'https://polar-coast-92082.herokuapp.com/'
  const BASE_URL = 'http://192.168.0.22:8000/'
  return (
    {
      "SERVER_URL": BASE_URL,
      "CATEGORIES": BASE_URL + 'categories/',
      "CATALOG": BASE_URL + 'catalog/',
      "PAYMENTS": BASE_URL + 'payments/payments/',
      "NOTIFICATIONS": BASE_URL + 'payments/notifications/'
    }
  )
}

export default URLS