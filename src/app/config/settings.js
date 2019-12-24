const URLS = () => {
  const BASE_URL = 'https://b23.pythonanywhere.com/'
  const IMG_URL = 'https://media.motiontalentafrica.co.ke/'
  // const IMG_URL = 'http://mta.lan/'
  // const BASE_URL = 'http://localhost:8000/'

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
      "USERDETAILS": BASE_URL + 'users/userDetails/',
      "ORDERS": BASE_URL + 'orders/list/',
      "ORDERITEMS": BASE_URL + 'orders/orderItems/',
      "ORDERSTATS": BASE_URL + 'orders/stats/',
      "ITEMSSTATS": BASE_URL + 'orders/itemssold/',
      "CLIENTS": BASE_URL + 'clients/clients/',
      "CLIENTSCATS": BASE_URL + 'clients/clientsCategory',
      "POSTAS": BASE_URL + 'orders/postas/',
      "IMAGES_URL": BASE_URL + 'images/',
      "IMAGES": IMG_URL,
      "NEWS": BASE_URL + 'posts/news/',
      "VISITORS": BASE_URL + 'users/visitors/',
      "VISITORSTATS": BASE_URL + 'users/visitorStats/'
    }
  )
}

export default URLS