import React, { useState, useMemo } from 'react';
import { View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { EmptyCart } from '../../components/EmptyCart';
import formatValue from '../../utils/formatValue';
import {
    Container,
    ProductContainer,
    ProductList,
    Product,
    ProductImage,
    ProductTitleContainer,
    ProductTitle,
    ProductPriceContainer,
    TotalContainer,
    ProductSinglePrice,
    ProductPrice,
    ProductQuantity,
    ActionContainer,
    ActionButton,
    TotalProductsContainer,
    TotalProductsText,
    SubTotalValue
} from './styles';

export default function Cart() {
  const [products, setProducts] = useState([]);

  const cartSize = useMemo(() => {
      return products.length || 0;
  }, [products]);

  const cartTotal = useMemo(() =>{
      const cartAmount = products.reduce((accumulator, product) => {
        const totalPrice = accumulator + product.price * product.quantity;
        return totalPrice;
      }, 0);

      return formatValue(cartAmount);
  }, [products]);

    return (
      <Container>
        <ProductContainer>
            <ProductList
              data={products}
              keyExtractor={(item) => item.id}
              ListFooterComponent={<EmptyCart />}
              ListFooterComponent={<View />}
              ListHeaderComponentStyle={{
                height: 80,
              }}
              renderitem={({ item }) => (
                <Product>
                   <ProductImage source={{ uri: item.image_url}} />
                   <ProductTitleContainer>
                     <ProductTitle>{item.title}</ProductTitle>
                     <ProductPriceContainer>
                       <ProductSinglePrice>
                         {formatValue(item.price)}
                       </ProductSinglePrice>

                       <TotalContainer>
                         <ProductQuantity>{`${item.quantity}x`}</ProductQuantity>

                         <ProductPrice>
                          {formatValue(item.price * item.quantity)}
                         </ProductPrice>
                       </TotalContainer>
                     </ProductPriceContainer>
                   </ProductTitleContainer>
                  <ActionContainer>
                    <ActionButton onPress={() => {}}>
                      <FeatherIcon name="plus" color="#e83f5b" size={16} />
                    </ActionButton>
                    <ActionButton onPress={() => {}}>
                      <FeatherIcon name="minus" color="#e83f5b" size={16} />
                    </ActionButton>
                  </ActionContainer>
                </Product>
              )}
            />
        </ProductContainer>
        <TotalProductsContainer>
            <FeatherIcon name="shopping-cart" color="#fff" size={24} />
              <TotalProductsText>
                  {cartSize} {cartSize === 1 ? 'item' : 'itens'}
              </TotalProductsText>
              <SubTotalValue>{cartTotal}</SubTotalValue>
        </TotalProductsContainer>
      </Container>
  );
}
