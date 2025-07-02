
import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  size?: string;
  quantity: number;
  category: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeFromCart: (id: string, size?: string) => void;
  updateQuantity: (id: string, quantity: number, size?: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('ventre-foot-cart');
    if (savedCart) {
      setItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('ventre-foot-cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => {
    const itemKey = `${item.id}-${item.size || 'no-size'}`;
    setItems(prevItems => {
      const existingItem = prevItems.find(i => `${i.id}-${i.size || 'no-size'}` === itemKey);
      if (existingItem) {
        return prevItems.map(i => 
          `${i.id}-${i.size || 'no-size'}` === itemKey 
            ? { ...i, quantity: i.quantity + (item.quantity || 1) }
            : i
        );
      }
      return [...prevItems, { ...item, quantity: item.quantity || 1 }];
    });
  };

  const removeFromCart = (id: string, size?: string) => {
    const itemKey = `${id}-${size || 'no-size'}`;
    setItems(prevItems => prevItems.filter(i => `${i.id}-${i.size || 'no-size'}` !== itemKey));
  };

  const updateQuantity = (id: string, quantity: number, size?: string) => {
    const itemKey = `${id}-${size || 'no-size'}`;
    if (quantity <= 0) {
      removeFromCart(id, size);
      return;
    }
    setItems(prevItems => 
      prevItems.map(i => 
        `${i.id}-${i.size || 'no-size'}` === itemKey 
          ? { ...i, quantity }
          : i
      )
    );
  };

  const clearCart = () => setItems([]);

  const getTotalPrice = () => items.reduce((total, item) => total + (item.price * item.quantity), 0);

  const getTotalItems = () => items.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getTotalPrice,
      getTotalItems
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
