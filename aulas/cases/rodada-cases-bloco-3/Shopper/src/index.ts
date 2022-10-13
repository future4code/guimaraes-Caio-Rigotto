import app from "./app";
import { ProductsRouter } from "./router/ProductsRouter";

app.use('/products', ProductsRouter)