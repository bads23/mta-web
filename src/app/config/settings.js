const URLS = () => {
  // const BASE_URL = 'https://polar-coast-92082.herokuapp.com/'
  const BASE_URL = 'http://localhost:8000/'
  return (
    {
      "SERVER_URL": BASE_URL,
      "AUTH": BASE_URL + 'api/login/',
      "CATEGORIES": BASE_URL + 'categories/',
      "CATALOG": BASE_URL + 'catalog/',
      "PAYMENTS": BASE_URL + 'payments/payments/',
      "NOTIFICATIONS": BASE_URL + 'payments/notifications/'
    }
  )
}

export default URLS