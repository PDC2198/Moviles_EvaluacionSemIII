import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';

type RootStackParamList = {
    VIEW_CART: { cart: { [key: string]: number }, products: Array<{ id: string; name: string; imageUrl: string; price: string }> };
};

type RouteProps = RouteProp<RootStackParamList, 'VIEW_CART'>;

const ViewCartScreen: React.FC = () => {
  const route = useRoute<RouteProps>();
  const navigation = useNavigation();
  const { cart, products } = route.params;

  const [purchaseSuccess, setPurchaseSuccess] = useState(false);
  const [showEmptyMessage, setShowEmptyMessage] = useState(false);
  const [currentCart, setCurrentCart] = useState(cart); // Estado local del carrito

  // Función para calcular el precio total
  const calculateTotalPrice = useCallback(() => {
    return Object.keys(currentCart).reduce((total, productId) => {
      const product = products.find(p => p.id === productId);
      if (product) {
        const price = parseFloat(product.price.replace('$', '').replace(',', ''));
        return total + (price * currentCart[productId]);
      }
      return total;
    }, 0);
  }, [currentCart, products]);

  const totalPrice = calculateTotalPrice().toFixed(2);

  const handlePurchase = () => {
    setPurchaseSuccess(true);
    setShowEmptyMessage(false);
  };

  const handleClearCart = () => {
    setCurrentCart({}); // Limpiar el carrito en el estado local
    setShowEmptyMessage(true);
    setPurchaseSuccess(false);
  };

  const isCartEmpty = Object.keys(currentCart).length === 0;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {isCartEmpty ? (
        <Text style={styles.emptyMessage}>Selecciona un producto por favor.</Text>
      ) : (
        Object.keys(currentCart).map(productId => {
          const product = products.find(p => p.id === productId);
          return product ? (
            <View key={product.id} style={styles.productContainer}>
              <Text style={styles.productName}>Destino: {product.name}</Text>
              <Text style={styles.productPrice}>Precio: {product.price}</Text>
              <Text style={styles.productQuantity}>Cantidad: {currentCart[product.id]}</Text>
            </View>
          ) : null;
        })
      )}
      {!isCartEmpty && <Text style={styles.totalPrice}>Precio Total: ${totalPrice}</Text>}
      {purchaseSuccess && !isCartEmpty && (
        <Text style={styles.successMessage}>¡Tu compra se ha realizado con éxito!</Text>
      )}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handlePurchase} style={styles.button} disabled={isCartEmpty}>
          <Text style={styles.buttonText}>REALIZAR COMPRA</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleClearCart} style={styles.button}>
          <Text style={styles.buttonText}>LIMPIAR CARRITO</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#4c5776',
  },
  productContainer: {
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  productPrice: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  productQuantity: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
  },
  totalPrice: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#ffff',
    marginVertical: 20,
    textAlign: 'center',
  },
  successMessage: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#02fa1f',
    textAlign: 'center',
    marginVertical: 15,
  },
  emptyMessage: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff0018',
    textAlign: 'center',
    marginVertical: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#8a3a3a',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ViewCartScreen;
