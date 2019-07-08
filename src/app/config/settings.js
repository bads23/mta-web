const URLS = () => {
  // const BASE_URL = 'https://polar-coast-92082.herokuapp.com/'
  const BASE_URL = 'http://localhost:8000/'
  return (
    {
      "SERVER_URL": BASE_URL,
      "AUTH": BASE_URL + 'api/token/',
      "REFRESH": BASE_URL + 'api/token/refresh/',
      "CATEGORIES": BASE_URL + 'categories/',
      "SUBCATEGORIES": BASE_URL + 'subcategories/',
      "PRODUCTCLASS": BASE_URL + 'productclass/',
      "CATALOG": BASE_URL + 'catalog/',
      "PAYMENTS": BASE_URL + 'payments/payments/',
      "NOTIFICATIONS": BASE_URL + 'payments/notifications/',
      "ME": BASE_URL + 'users/usersList/me',
      "USERS": BASE_URL + 'users/usersList/',
      "CLIENTS": BASE_URL + 'clients/clients/',

    }
  )
}

export default URLS