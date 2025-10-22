import styled from "styled-components";

export const ListProduct = () => {
  const products = [
    {
      id: 1,
      title: "Smartphone X200",
      price: 699.99,
      image: "https://via.placeholder.com/150",
      category: "electronics",
    },
    {
      id: 2,
      title: "Auriculares Inalámbricos",
      price: 129.99,
      image: "https://via.placeholder.com/150",
      category: "electronics",
    },
    {
      id: 3,
      title: "Reloj Deportivo",
      price: 199.99,
      image: "https://via.placeholder.com/150",
      category: "electronics",
    },
    {
      id: 4,
      title: "Anillo de Plata",
      price: 59.99,
      image: "https://via.placeholder.com/150",
      category: "jewelery",
    },
    {
      id: 5,
      title: "Vestido de Verano",
      price: 89.99,
      image: "https://via.placeholder.com/150",
      category: "women's clothing",
    },
    {
      id: 6,
      title: "Camisa Casual",
      price: 49.99,
      image: "https://via.placeholder.com/150",
      category: "men's clothing",
    },
    {
      id: 11,
      title: "Smartphone X200",
      price: 699.99,
      image: "https://via.placeholder.com/150",
      category: "electronics",
    },
    {
      id: 22,
      title: "Auriculares Inalámbricos",
      price: 129.99,
      image: "https://via.placeholder.com/150",
      category: "electronics",
    },
    {
      id: 13,
      title: "Smartphone X200",
      price: 699.99,
      image: "https://via.placeholder.com/150",
      category: "electronics",
    },
    {
      id: 24,
      title: "Auriculares Inalámbricos",
      price: 129.99,
      image: "https://via.placeholder.com/150",
      category: "electronics",
    },
  ];

  return (
    <ListProductContainer>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.title} />
          <h4>{product.title}</h4>
          <p>${product.price.toFixed(2)}</p>
        </div>
      ))}
    </ListProductContainer>
  );
};

const ListProductContainer = styled.div`
  width: 100%;
  display: grid;
  gap: 16px;

  /* Desktop: 3 columnas */
  grid-template-columns: repeat(3, 1fr);

  /* Tablet: 2 columnas */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Móvil: 1 columna */
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #fafafa;
    height: 400px;

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      margin-bottom: 12px;
      border-radius: 4px;
    }

    h4 {
      margin: 0 0 8px;
      text-align: center;
    }

    p {
      margin: 0;
      color: #333;
      font-weight: 500;
    }
  }
`;
