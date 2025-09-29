import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'sonner';

export interface CartItem {
  id: string;
  product_id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image_url: string;
  style: string;
}

interface CartContextType {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  addItem: (product: any, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  isInCart: (productId: string) => boolean;
  getItemQuantity: (productId: string) => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

const CART_STORAGE_KEY = 'golden-shower-cart';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);
        setItems(parsedCart);
      }
    } catch (error) {
      // Secure logging: no cart data exposed
      console.error('Cart loading failed');
    }
  }, []);

  // Save cart to localStorage whenever items change
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      // Secure logging: no cart data exposed  
      console.error('Cart saving failed');
    }
  }, [items]);

  const addItem = (product: any, quantity: number = 1) => {
    if (!product.is_active) {
      toast.error('Questo prodotto non è disponibile');
      return;
    }

    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.product_id === product.id);
      
      if (existingItem) {
        // Update quantity of existing item
        const updatedItems = currentItems.map(item =>
          item.product_id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
        toast.success(`${product.name} quantità aggiornata nel carrello`);
        return updatedItems;
      } else {
        // Add new item
        const newItem: CartItem = {
          id: `cart-${product.id}-${Date.now()}`,
          product_id: product.id,
          name: product.name,
          description: product.description || `Bottiglia 33cl`,
          price: product.price,
          quantity,
          image_url: product.image_url,
          style: product.style
        };
        toast.success(`${product.name} aggiunto al carrello`);
        return [...currentItems, newItem];
      }
    });
  };

  const removeItem = (productId: string) => {
    setItems(currentItems => {
      const itemToRemove = currentItems.find(item => item.product_id === productId);
      if (itemToRemove) {
        toast.success(`${itemToRemove.name} rimosso dal carrello`);
      }
      return currentItems.filter(item => item.product_id !== productId);
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }

    setItems(currentItems =>
      currentItems.map(item =>
        item.product_id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    toast.success('Carrello svuotato');
  };

  const isInCart = (productId: string) => {
    return items.some(item => item.product_id === productId);
  };

  const getItemQuantity = (productId: string) => {
    const item = items.find(item => item.product_id === productId);
    return item ? item.quantity : 0;
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const value = {
    items,
    totalItems,
    subtotal,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    isInCart,
    getItemQuantity
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};