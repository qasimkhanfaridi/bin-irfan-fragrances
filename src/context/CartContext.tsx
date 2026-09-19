import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, Product, CurrencyCode, CurrencyConfig } from '../types/product';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, size?: '50ml' | '100ml', quantity?: number) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotalPKR: number;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  currency: CurrencyCode;
  setCurrency: (currency: CurrencyCode) => void;
  formatPrice: (pricePKR: number) => string;
  whatsappNumber: string;
  generateWhatsAppLink: (product?: Product, size?: string, quantity?: number) => string;
  generateCartWhatsAppLink: (customerName?: string, customerCity?: string) => string;
}

const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  PKR: { code: 'PKR', symbol: '₨', rate: 1, label: 'PKR (₨)' },
  USD: { code: 'USD', symbol: '$', rate: 0.0036, label: 'USD ($)' },
  AED: { code: 'AED', symbol: 'AED', rate: 0.013, label: 'AED (د.إ)' }
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('bin_irfan_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [currency, setCurrency] = useState<CurrencyCode>('PKR');
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const whatsappNumber = '923169699892'; // Bin Irfan Official Contact

  useEffect(() => {
    try {
      localStorage.setItem('bin_irfan_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  const addToCart = (product: Product, size: '50ml' | '100ml' = '50ml', quantity: number = 1) => {
    const variant = product.variants.find(v => v.size === size) || product.variants[0];
    const itemId = `${product.id}-${size}`;

    setCart(prev => {
      const existing = prev.find(item => item.id === itemId);
      if (existing) {
        return prev.map(item =>
          item.id === itemId ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { id: itemId, product, size, pricePKR: variant.pricePKR, quantity }];
    });

    setIsDrawerOpen(true);
  };

  const removeFromCart = (itemId: string) => {
    setCart(prev => prev.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart(prev => prev.map(item => (item.id === itemId ? { ...item, quantity } : item)));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotalPKR = cart.reduce((total, item) => total + item.pricePKR * item.quantity, 0);

  const formatPrice = (pricePKR: number): string => {
    const cfg = CURRENCIES[currency];
    const converted = Math.round(pricePKR * cfg.rate);
    if (currency === 'PKR') {
      return `₨ ${pricePKR.toLocaleString()}`;
    }
    if (currency === 'USD') {
      return `$${(pricePKR * cfg.rate).toFixed(2)}`;
    }
    return `${converted} AED`;
  };

  const generateWhatsAppLink = (product?: Product, size: string = '50ml', quantity: number = 1): string => {
    if (!product) {
      return `https://wa.me/${whatsappNumber}?text=Hello%20Bin%20Irfan%20Fragrance,%20I%20have%20an%20inquiry%20regarding%20your%20perfumes.`;
    }
    const variant = product.variants.find(v => v.size === size) || product.variants[0];
    const msg = `Hello Bin Irfan Fragrance, I want to order ${product.name} ${size} × ${quantity} (${formatPrice(variant.pricePKR * quantity)}). Please confirm availability and delivery details.`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  const generateCartWhatsAppLink = (customerName: string = '', customerCity: string = ''): string => {
    if (cart.length === 0) {
      return `https://wa.me/${whatsappNumber}?text=Hello%20Bin%20Irfan%20Fragrance,%20I%20would%20like%20to%20place%20an%20order!`;
    }
    let itemsText = cart.map(i => `• ${i.product.name} (${i.size}) × ${i.quantity} = ${formatPrice(i.pricePKR * i.quantity)}`).join('\n');
    let msg = `*NEW ORDER - BIN IRFAN FRAGRANCE*\n\nItems:\n${itemsText}\n\n*Total Amount:* ${formatPrice(cartTotalPKR)}`;
    if (customerName) {
      msg += `\n*Customer:* ${customerName}`;
    }
    if (customerCity) {
      msg += `\n*City / Address:* ${customerCity}`;
    }
    msg += `\n\nPlease confirm my order. Thank you!`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotalPKR,
        isDrawerOpen,
        openDrawer: () => setIsDrawerOpen(true),
        closeDrawer: () => setIsDrawerOpen(false),
        currency,
        setCurrency,
        formatPrice,
        whatsappNumber,
        generateWhatsAppLink,
        generateCartWhatsAppLink
      }}
    >
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
