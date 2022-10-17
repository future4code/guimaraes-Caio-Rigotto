import app from "./app";
import { ProductsRouter } from "./router/ProductsRouter";
import { UserRouter } from "./router/UserRouter";

app.use('/products', ProductsRouter)
app.use('/users', UserRouter)