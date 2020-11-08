import Call, { Img } from "./axios";

const Api = () => {
  var setUrl = (path) => {
    return new Call(path);
  };

  var setImgUrl = (path) => {
    return new Img(path);
  };

  return {
    server_url: setUrl(),
    auth: setUrl("api/token/"),
    refresh: setUrl("api/token/refresh/"),
    reset: setUrl("api/password_reset/"),
    confirmreset: setUrl("api/password_reset/confirm/"),
    categories: setUrl("categories/"),
    subcategories: setUrl("subcategories/"),
    productclass: setUrl("productclass/"),
    catalog: setUrl("catalog/"),
    payments: setUrl("payments/payments/"),
    notifications: setUrl("payments/notifications/"),
    me: setUrl("users/usersList/me/"),
    users: setUrl("users/usersList/"),
    userdetails: setUrl("users/userDetails/"),
    orders: setUrl("orders/list/"),
    orderitems: setUrl("orders/orderItems/"),
    orderstats: setUrl("orders/stats/"),
    orderstatus: setUrl("orders/status/"),
    itemsstats: setUrl("orders/itemssold/"),
    clients: setUrl("clients/clients/"),
    clientscats: setUrl("clients/clientsCategory"),
    postas: setUrl("orders/postas/"),
    images_url: setUrl("images/"),
    images: setImgUrl(""),
    news: setUrl("posts/news/"),
    visitors: setUrl("users/visitors/"),
    visitorstats: setUrl("users/visitorStats/"),
    events: setUrl("posts/events/"),
    about: setUrl("clients/about/"),
    sendemail: setUrl("orders/sendEmail/"),
  };
};

export default Api();
