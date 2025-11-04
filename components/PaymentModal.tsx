import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { paymentDetails } from './paymentDetails';
import { CopyIcon } from './icons';

interface PaymentModalProps {
  onClose: () => void;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('usd');

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className="bg-gray-800 rounded-lg p-8 w-full max-w-md relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Detalles de Pago</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">&times;</button>
        </div>

        <div className="flex mb-4 border-b border-gray-700">
          <button 
            className={`py-2 px-4 ${activeTab === 'usd' ? 'border-b-2 border-brand-cyan text-white' : 'text-gray-400'}`}
            onClick={() => setActiveTab('usd')}
          >
            {paymentDetails.usd.flag} USD
          </button>
          <button 
            className={`py-2 px-4 ${activeTab === 'ars' ? 'border-b-2 border-brand-cyan text-white' : 'text-gray-400'}`}
            onClick={() => setActiveTab('ars')}
          >
            {paymentDetails.ars.flag} ARS
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-4">
              {Object.entries(paymentDetails[activeTab as keyof typeof paymentDetails]).map(([key, value]) => {
                if (key === 'flag') return null;
                return (
                  <div key={key} className="flex justify-between items-center">
                    <span className="text-gray-400 capitalize">{key}:</span>
                    <div className="flex items-center">
                      <span className="text-white">{value}</span>
                      {(key === 'CBU' || key === 'Alias' || key === 'CUIT' || key === 'Cuenta') && (
                        <button onClick={() => handleCopy(value)} className="ml-2 text-gray-400 hover:text-white">
                          <CopyIcon className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

      </motion.div>
    </motion.div>
  );
};