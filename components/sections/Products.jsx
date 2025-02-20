import React, { useState, useEffect } from 'react';
import './Products.css';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('vegetables');
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  // Product data with backup image option
  const categories = {
    vegetables: [
      { id: 1, name: 'Green Chilli', image: 'https://cdn.pixabay.com/photo/2013/01/05/13/54/pepperoni-73908_1280.jpg?w=800&h=600&fit=crop', fallback: 'https://via.placeholder.com/800x600/4CAF50/FFFFFF?text=Green+Chilli' },
      { id: 2, name: 'Coriander', image: 'https://cdn.pixabay.com/photo/2019/06/06/08/00/coriander-4255400_1280.jpg?w=800&h=600&fit=crop', fallback: 'https://via.placeholder.com/800x600/4CAF50/FFFFFF?text=Coriander' },
      { id: 3, name: 'Onion', image: 'https://cdn.pixabay.com/photo/2014/10/22/21/53/red-onions-vegetables-499066_1280.jpg?w=800&h=600&fit=crop', fallback: 'https://via.placeholder.com/800x600/4CAF50/FFFFFF?text=Onion' },
      { id: 4, name: 'Tomatoes', image: 'https://cdn.pixabay.com/photo/2021/09/10/21/18/tomatoes-6614242_1280.jpg?w=800&h=600&fit=crop', fallback: 'https://via.placeholder.com/800x600/4CAF50/FFFFFF?text=Tomatoes' },
      { id: 5, name: 'Garlic', image: 'https://cdn.pixabay.com/photo/2016/05/05/17/21/garlic-1374329_1280.jpg?w=800&h=600&fit=crop', fallback: 'https://via.placeholder.com/800x600/4CAF50/FFFFFF?text=Garlic' },
      { id: 6, name: 'Ginger', image: 'https://cdn.pixabay.com/photo/2021/10/31/14/25/ginger-6757588_1280.jpg?w=800&h=600&fit=crop', fallback: 'https://via.placeholder.com/800x600/4CAF50/FFFFFF?text=Ginger' }
    ],
    fruits: [
      { id: 7, name: 'Banana', image: 'https://cdn.pixabay.com/photo/2024/04/25/06/50/banana-8719086_1280.jpg?w=800&h=600&fit=crop', fallback: 'https://via.placeholder.com/800x600/FF9800/FFFFFF?text=Banana' },
      { id: 8, name: 'Pomegranate', image: 'https://cdn.pixabay.com/photo/2018/05/08/20/19/pomegranate-3383814_1280.jpg?w=800&h=600&fit=crop', fallback: 'https://via.placeholder.com/800x600/FF9800/FFFFFF?text=Pomegranate' },
      { id: 9, name: 'Grapes', image: 'https://cdn.pixabay.com/photo/2024/01/13/08/08/green-grape-8505248_1280.jpg?w=800&h=600&fit=crop', fallback: 'https://via.placeholder.com/800x600/FF9800/FFFFFF?text=Grapes' },
      { id: 10, name: 'Guava', image: 'https://cdn.pixabay.com/photo/2018/08/06/07/37/guava-3586944_1280.jpg?w=800&h=600&fit=crop', fallback: 'https://via.placeholder.com/800x600/FF9800/FFFFFF?text=Guava' },
      { id: 11, name: 'Mangos', image: 'https://cdn.pixabay.com/photo/2020/03/26/17/22/mango-4971095_1280.jpg?w=800&h=600&fit=crop', fallback: 'https://via.placeholder.com/800x600/FF9800/FFFFFF?text=Mangoes' },
      { id: 12, name: 'Coconut', image: 'https://cdn.pixabay.com/photo/2015/11/10/01/44/coconut-1036198_1280.jpg?w=800&h=600&fit=crop', fallback: 'https://via.placeholder.com/800x600/FF9800/FFFFFF?text=Coconut' }
    ],
    cereals: [
      { id: 13, name: 'Sorghum', image: 'https://cdn.pixabay.com/photo/2014/02/26/13/20/sorghum-275258_1280.jpg?w=800&h=600&fit=crop', fallback: 'https://via.placeholder.com/800x600/795548/FFFFFF?text=Jowar' },
      { id: 14, name: 'Wheat', image: 'https://cdn.pixabay.com/photo/2022/05/05/14/57/rice-7176354_1280.jpg?w=800&h=600&fit=crop', fallback: 'https://via.placeholder.com/800x600/795548/FFFFFF?text=Wheat' },
      { id: 15, name: 'Rice', image: 'https://cdn.pixabay.com/photo/2018/06/29/15/18/rice-3506194_1280.jpg?w=800&h=600&fit=crop', fallback: 'https://via.placeholder.com/800x600/795548/FFFFFF?text=Rice' },
      { id: 16, name: 'Corn', image: 'https://cdn.pixabay.com/photo/2015/05/26/17/42/pop-corn-785074_1280.jpg?w=800&h=600&fit=crop', fallback: 'https://via.placeholder.com/800x600/795548/FFFFFF?text=Corn' },
      { id: 17, name: 'Soyabean', image: 'https://cdn.pixabay.com/photo/2017/09/18/05/06/soybean-2760711_1280.jpg?w=800&h=600&fit=crop', fallback: 'https://via.placeholder.com/800x600/795548/FFFFFF?text=Soybean' }
    ],
    pulses: [
      { id: 18, name: 'Chickpeas', image: 'https://cdn.pixabay.com/photo/2014/04/05/11/40/chickpea-316593_1280.jpg?w=800&h=600&fit=crop', fallback: 'https://via.placeholder.com/800x600/FFC107/000000?text=Chickpeas' },
      { id: 19, name: 'Pigeon Peas', image: 'https://cdn.pixabay.com/photo/2014/03/15/10/30/peas-287730_1280.jpg?w=800&h=600&fit=crop', fallback: 'https://via.placeholder.com/800x600/FFC107/000000?text=Pigeon+Peas' },
      { id: 20, name: 'Mung Beans', image: 'https://cdn.pixabay.com/photo/2013/07/25/12/04/mung-beans-166996_1280.jpg?w=800&h=600&fit=crop', fallback: 'https://via.placeholder.com/800x600/FFC107/000000?text=Mung+Beans' },
      { id: 21, name: 'Urad Dal', image: 'https://as1.ftcdn.net/v2/jpg/04/23/75/30/1000_F_423753006_VrOkM8zaOWgpRXpJCD9roaZbl2Eoh3s2.jpg?w=800&h=600&fit=crop', fallback: 'https://via.placeholder.com/800x600/FFC107/000000?text=Urad+Dal' },
      { id: 22, name: 'Peas', image: 'https://cdn.pixabay.com/photo/2013/06/03/18/05/peas-115951_1280.jpg?w=800&h=600&fit=crop', fallback: 'https://via.placeholder.com/800x600/FFC107/000000?text=Green+Peas' },
      { id: 23, name: 'Red Lentils', image: 'https://cdn.pixabay.com/photo/2023/02/06/17/34/lentils-7772450_1280.jpg?w=800&h=600&fit=crop', fallback: 'https://via.placeholder.com/800x600/FFC107/000000?text=Red+Lentils' }
    ],
    others: [
      { id: 24, name: 'Terry Towel', image: 'https://cdn.pixabay.com/photo/2024/04/10/17/02/towel-8688401_1280.jpg?w=800&h=600&fit=crop', fallback: 'https://via.placeholder.com/800x600/607D8B/FFFFFF?text=Terry+Towel' },
      { id: 25, name: 'Shirt', image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&h=600&fit=crop', fallback: 'https://via.placeholder.com/800x600/607D8B/FFFFFF?text=Shirt' },
      { id: 26, name: 'Pant', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=600&fit=crop', fallback: 'https://via.placeholder.com/800x600/607D8B/FFFFFF?text=Pants' },
    ]
  };

  // Effect to track image loading status
  useEffect(() => {
    setImagesLoaded(true);
  }, [selectedCategory]);

  // Handle image loading errors
  const handleImageError = (e, fallbackSrc) => {
    e.target.src = fallbackSrc;
  };

  return (
    <section className="products-container">
      <div className="products-title">
        <h2 className="products-heading">Our Products</h2>
      </div>

      <div className="category-filter">
        {['Vegetables', 'Fruits', 'Cereals', 'Pulses', 'Others'].map((category) => (
          <button
            key={category}
            className={`category-button ${selectedCategory === category.toLowerCase() ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.toLowerCase())}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {!imagesLoaded && (
          <div className="loading-indicator">Loading products...</div>
        )}
        
        {categories[selectedCategory]?.map((product) => (
          <div key={product.id} className="product-card">
            <div className="image-container">
              <img 
                src={product.image} 
                alt={product.name} 
                className="product-image"
                loading="lazy"
                onError={(e) => handleImageError(e, product.fallback)}
              />
            </div>
            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              <span className="product-category">{selectedCategory}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;