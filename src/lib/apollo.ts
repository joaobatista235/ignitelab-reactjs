import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4u4xxgg0leg01t7gal6c82b/master',
    cache: new InMemoryCache()
})