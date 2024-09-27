import { Product } from '../models/Product'; // Import the product model
import { GetStaticProps } from 'next';

interface ProductsPageProps {
  products: Product[];
}

const ProductsPage: React.FC<ProductsPageProps> = ({ products }) => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-64 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-lg font-bold mt-2">${product.price}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // Fetch products (can be from an API or local JSON)
  const products: Product[] = [
    {
      id: '1',
      name: 'Product 1',
      description: 'A nice product',
      price: 50,
      category: 'category1',
      imageUrl: '/images/product1.jpg',
      inStock: true,
    },
    // Add more products
  ];

  return {
    props: {
      products,
    },
  };
};

export default ProductsPage;
