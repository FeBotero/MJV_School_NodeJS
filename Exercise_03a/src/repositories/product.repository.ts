import { Product } from "../models/product.model";

class ProductRepository {
  getAll() {
    return Product.find();
  }
  getByID(id: string) {
    return Product.findOne({ id });
  }
  updateByID(id: string, body: Partial<typeof Product>) {
    return Product.updateOne({ id }, { $set: body });
  }
  create(body: typeof Product) {
    return Product.create(body);
  }
  deleteByID(id: string) {
    return Product.deleteOne({ id });
  }
}

export default new ProductRepository();
