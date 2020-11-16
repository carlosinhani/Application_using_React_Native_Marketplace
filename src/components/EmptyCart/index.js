import React from 'react';
import LottieView from 'lottie-react-native';
import empytCartAnimation from '../../../EmptyCartAnimation.json';
import { Container, EmptyCartContainer, EmptyCartText } from './styles';


export default function EmptyCart() {
  return (
    <Container>
      <EmptyCartContainer>
        <LottieView
        source={empytCartAnimation}
        resizeMode="contain"
        autoPlay
        loop
        />
      </EmptyCartContainer>
      <EmptyCartText> O CARRINHO ESTÁ VAZIO :( </EmptyCartText>
    </Container>
  );
}

