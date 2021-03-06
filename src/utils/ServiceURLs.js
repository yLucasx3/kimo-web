export const serviceURLs = {
    PRODUCTS: '/products',
    PRODUCTS_ID: '/products/{id}',

    ORDERS: '/orders',
    ORDERS_ID: '/orders/{id}',
    ORDERS_ID_PRODUCTS_ID: '/orders/{orderId}/products/{productId}',

    CUSTOMERS: '/customers',
    CUSTOMERS_ID_PRODUCTS_ID: '/customers/{customerId}/products/{productId}',

    USERS: '/users',

    AUTH: '/auth',

    CATEGORIES: '/categories',
    CATEGORIES_ID_PRODUCTS: '/categories/{categoryId}/products',

    CUSTOMER_BAGS: '/customerBags',
    CUSTOMER_BAGS_ID: '/customerBags/{id}'
}
