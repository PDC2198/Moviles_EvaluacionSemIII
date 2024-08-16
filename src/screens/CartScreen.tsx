import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Datos de productos
const products = [
  {
    id: '1',
    name: 'QUITO',
    imageUrl: '/assets/Quito.jpeg',
    price: '$200',
  },
  {
    id: '2',
    name: 'ECUADOR',
    imageUrl: '/assets/Ecuador.jpg',
    price: '$250',
  },
  {
    id: '3',
    name: 'GALÁPAGOS',
    imageUrl: '/assets/Galapagos.jpeg',
    price: '$300',
  },
  {
    id: '4',
    name: 'CURAZAO',
    imageUrl: '/assets/Curazao.jpg',
    price: '$180',
  },
  {
    id: '5',
    name: 'CANCÚN',
    imageUrl: '/assets/Cancun.jpg',
    price: '$220',
  },
  {
    id: '6',
    name: 'PANAMÁ',
    imageUrl: '/assets/Cartanama.jpeg',
    price: '$270',
  },
];

const CartScreen: React.FC = () => {
  const [cart, setCart] = useState<{ [key: string]: number }>({});
  const navigation = useNavigation<any>();

  const handleAdd = (productId: string) => {
    setCart(prevCart => ({
      ...prevCart,
      [productId]: (prevCart[productId] || 0) + 1,
    }));
  };

  const handleRemove = (productId: string) => {
    setCart(prevCart => {
      const updatedCart = { ...prevCart };
      if (updatedCart[productId] > 0) {
        updatedCart[productId] -= 1;
      }
      if (updatedCart[productId] === 0) {
        delete updatedCart[productId];
      }
      return updatedCart;
    });
  };

  const handleViewCart = () => {
    navigation.navigate('VIEW_CART', { cart, products });
  };

  const renderItem = ({ item }: { item: { id: string; name: string; imageUrl: string; price: string } }) => (
    <View style={styles.productContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
      <View style={styles.textContainer}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.quantityText}>{cart[item.id] || 0}</Text>
        <TouchableOpacity onPress={() => handleRemove(item.id)} style={styles.button}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleAdd(item.id)} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const footerComponent = (
    <View style={styles.footer}>
      <Text style={styles.cartCount}>
        Carrito de compras: {Object.values(cart).reduce((a, b) => a + b, 0)}
      </Text>
      <TouchableOpacity onPress={handleViewCart} style={styles.viewButton}>
        <Text style={styles.viewButtonText}>VER </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={21}
        ListFooterComponent={footerComponent}
        ListFooterComponentStyle={styles.footerContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#4c5776',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  footerContainer: {
    marginTop: 10,
    paddingBottom: 20,
  },
  cartCount: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#ffff',
  },
  viewButton: {
    backgroundColor: '#8a3a3a',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewButtonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    padding: 10,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
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
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#ddd',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#333',
  },
  quantityText: {
    fontSize: 18,
    color: '#333',
    marginRight: 10,
  },
});

export default CartScreen;
