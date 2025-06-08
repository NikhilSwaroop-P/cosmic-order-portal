
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Truck, Clock, Zap, CreditCard, Shield, CheckCircle } from 'lucide-react';

const Index = () => {
  const [shippingMethod, setShippingMethod] = useState('standard');
  const [paymentMethod, setPaymentMethod] = useState('card');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 pt-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
            Checkout
          </h1>
          <p className="text-muted-foreground">Complete your order in a few simple steps</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Shipping Information */}
            <Card className="p-6 transform hover:scale-[1.02] transition-all duration-300 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3 shadow-lg">
                  1
                </div>
                <h2 className="text-xl font-semibold">Shipping Information</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com"
                    className="mt-1 transition-all duration-200 focus:scale-[1.02] focus:shadow-md"
                  />
                </div>
                
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input 
                    id="firstName" 
                    placeholder="John"
                    className="mt-1 transition-all duration-200 focus:scale-[1.02] focus:shadow-md"
                  />
                </div>
                
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Doe"
                    className="mt-1 transition-all duration-200 focus:scale-[1.02] focus:shadow-md"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+1 (555) 123-4567"
                    className="mt-1 transition-all duration-200 focus:scale-[1.02] focus:shadow-md"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <Label htmlFor="address">Address</Label>
                  <Input 
                    id="address" 
                    placeholder="123 Main Street, Apt 4B"
                    className="mt-1 transition-all duration-200 focus:scale-[1.02] focus:shadow-md"
                  />
                </div>
                
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input 
                    id="city" 
                    placeholder="New York"
                    className="mt-1 transition-all duration-200 focus:scale-[1.02] focus:shadow-md"
                  />
                </div>
                
                <div>
                  <Label htmlFor="state">State</Label>
                  <Select>
                    <SelectTrigger className="mt-1 transition-all duration-200 focus:scale-[1.02] focus:shadow-md">
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ny">New York</SelectItem>
                      <SelectItem value="ca">California</SelectItem>
                      <SelectItem value="tx">Texas</SelectItem>
                      <SelectItem value="fl">Florida</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="md:col-span-2">
                  <Label htmlFor="zipCode">ZIP Code</Label>
                  <Input 
                    id="zipCode" 
                    placeholder="10001"
                    className="mt-1 transition-all duration-200 focus:scale-[1.02] focus:shadow-md"
                  />
                </div>
              </div>
            </Card>

            {/* Shipping Method */}
            <Card className="p-6 transform hover:scale-[1.02] transition-all duration-300 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3 shadow-lg">
                  <Truck className="w-4 h-4" />
                </div>
                <h2 className="text-xl font-semibold">Shipping Method</h2>
              </div>
              
              <RadioGroup value={shippingMethod} onValueChange={setShippingMethod} className="space-y-3">
                <div className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                  shippingMethod === 'standard' 
                    ? 'border-blue-500 bg-blue-50 shadow-md transform scale-[1.02]' 
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                }`}>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="standard" id="standard" />
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <div>
                        <Label htmlFor="standard" className="font-medium cursor-pointer">Standard Shipping</Label>
                        <p className="text-sm text-muted-foreground">Delivery in 5-7 business days</p>
                      </div>
                    </div>
                  </div>
                  <span className="text-lg font-semibold text-blue-600">₹25</span>
                </div>
                
                <div className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                  shippingMethod === 'express' 
                    ? 'border-blue-500 bg-blue-50 shadow-md transform scale-[1.02]' 
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                }`}>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="express" id="express" />
                    <div className="flex items-center space-x-2">
                      <Zap className="w-5 h-5 text-orange-500" />
                      <div>
                        <Label htmlFor="express" className="font-medium cursor-pointer">Express Shipping</Label>
                        <p className="text-sm text-muted-foreground">Delivery in 2-3 business days</p>
                      </div>
                    </div>
                  </div>
                  <span className="text-lg font-semibold text-orange-500">₹50</span>
                </div>
                
                <div className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                  shippingMethod === 'nextday' 
                    ? 'border-blue-500 bg-blue-50 shadow-md transform scale-[1.02]' 
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                }`}>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="nextday" id="nextday" />
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <div>
                        <Label htmlFor="nextday" className="font-medium cursor-pointer">Next Day Delivery</Label>
                        <p className="text-sm text-muted-foreground">Order before 2pm for next day delivery</p>
                      </div>
                    </div>
                  </div>
                  <span className="text-lg font-semibold text-green-500">₹100</span>
                </div>
              </RadioGroup>
            </Card>

            {/* Billing & Payment */}
            <Card className="p-6 transform hover:scale-[1.02] transition-all duration-300 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3 shadow-lg">
                  <CreditCard className="w-4 h-4" />
                </div>
                <h2 className="text-xl font-semibold">Billing & Payment</h2>
              </div>
              
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3 mb-6">
                <div className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                  paymentMethod === 'card' 
                    ? 'border-blue-500 bg-blue-50 shadow-md transform scale-[1.02]' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}>
                  <RadioGroupItem value="card" id="card" />
                  <CreditCard className="w-5 h-5 text-blue-600" />
                  <Label htmlFor="card" className="font-medium cursor-pointer">Credit/Debit Card</Label>
                </div>
                
                <div className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                  paymentMethod === 'upi' 
                    ? 'border-blue-500 bg-blue-50 shadow-md transform scale-[1.02]' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}>
                  <RadioGroupItem value="upi" id="upi" />
                  <Shield className="w-5 h-5 text-green-600" />
                  <Label htmlFor="upi" className="font-medium cursor-pointer">UPI Payment</Label>
                </div>
              </RadioGroup>
              
              {paymentMethod === 'card' && (
                <div className="space-y-4 animate-fade-in">
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input 
                      id="cardNumber" 
                      placeholder="1234 5678 9012 3456"
                      className="mt-1 transition-all duration-200 focus:scale-[1.02] focus:shadow-md"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input 
                        id="expiry" 
                        placeholder="MM/YY"
                        className="mt-1 transition-all duration-200 focus:scale-[1.02] focus:shadow-md"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input 
                        id="cvv" 
                        placeholder="123"
                        className="mt-1 transition-all duration-200 focus:scale-[1.02] focus:shadow-md"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="cardName">Name on Card</Label>
                    <Input 
                      id="cardName" 
                      placeholder="John Doe"
                      className="mt-1 transition-all duration-200 focus:scale-[1.02] focus:shadow-md"
                    />
                  </div>
                </div>
              )}
              
              {paymentMethod === 'upi' && (
                <div className="animate-fade-in">
                  <Label htmlFor="upiId">UPI ID</Label>
                  <Input 
                    id="upiId" 
                    placeholder="your-upi@bank"
                    className="mt-1 transition-all duration-200 focus:scale-[1.02] focus:shadow-md"
                  />
                </div>
              )}
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-8 transform hover:scale-[1.02] transition-all duration-300 shadow-xl border-0 bg-gradient-to-br from-white to-blue-50/50 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹999</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>
                    {shippingMethod === 'standard' && '₹25'}
                    {shippingMethod === 'express' && '₹50'}
                    {shippingMethod === 'nextday' && '₹100'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>₹80</span>
                </div>
                <hr />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>
                    ₹{1079 + 
                      (shippingMethod === 'standard' ? 25 : 
                       shippingMethod === 'express' ? 50 : 100)}
                  </span>
                </div>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg">
                Complete Order
              </Button>
              
              <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 mr-1" />
                Secure checkout protected by 256-bit SSL
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
