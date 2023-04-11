import ProductRepository from "../repositories/product.repository";
import { Product } from "../models/product.model";

class ProductService {
  getAll() {
    return ProductRepository.getAll();
  }
  getByID(id: string) {
    return ProductRepository.getByID(id);
  }
  createProduct(body: typeof Product) {
    return ProductRepository.create(body);
  }
  deleteProduct(id: string) {
    return ProductRepository.deleteByID(id);
  }
  updateProduct(id: string, body: Partial<typeof Product>) {
    return ProductRepository.updateByID(id, body);
  }
}
export default new ProductService();
