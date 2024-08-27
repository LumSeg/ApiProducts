const Product = require("../models/Product"); 

module.exports = {
  
  createProduct: async (productData) => {
    try {
      const newProduct = new Product(productData);
      await newProduct.save();
      return newProduct;
    } catch (error) {
      throw new Error("Error al crear el producto: " + error.message);
    }
  },

  getProduct: async () => {
    try {
      const products = await Product.find();
      return products;
    } catch (error) {
      throw new Error("Error al obtener productos: " + error.message);
    }
  },

  getProductByCategory: async (category) => {
    try {
      const normalizedCategory = category
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      const products = await Product.find();
      const filteredProducts = products.filter((product) => {
        const normalizedProductCategory = product.categoria
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");

        return normalizedProductCategory === normalizedCategory;
      });

      return filteredProducts;
    } catch (error) {
      throw new Error("Error al obtener productos por categoría: " + error.message);
    }
  },

  deleteProduct: async (id) => {
    try {
      await Product.findByIdAndDelete(id);
    } catch (error) {
      throw new Error("Error al eliminar el producto: " + error.message);
    }
  },

  updateProduct: async (id, productData) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(id, productData, {
        new: true, 
        runValidators: true, 
      });
      return updatedProduct;
    } catch (error) {
      throw new Error("Error al actualizar el producto: " + error.message);
    }
  }
};
