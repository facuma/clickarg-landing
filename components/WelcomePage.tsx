
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './Header';
import { Button } from './Button';
import { PaymentModal } from './PaymentModal';

const WelcomePage: React.FC = () => {
  const { nombre } = useParams<{ nombre: string }>();
  const [currentStep, setCurrentStep] = useState(0);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [phoneNumbers, setPhoneNumbers] = useState([{ code: '+54', number: '' }]);
  const [error, setError] = useState('');

  const handlePhoneNumberChange = (index: number, field: string, value: string) => {
    const newPhoneNumbers = [...phoneNumbers];
    newPhoneNumbers[index] = { ...newPhoneNumbers[index], [field]: value };
    setPhoneNumbers(newPhoneNumbers);
  };

  const handleAddPhoneNumber = () => {
    setPhoneNumbers([...phoneNumbers, { code: '+54', number: '' }]);
  };

  const handleRemovePhoneNumber = (index: number) => {
    const newPhoneNumbers = [...phoneNumbers];
    newPhoneNumbers.splice(index, 1);
    setPhoneNumbers(newPhoneNumbers);
  };

  const countryCodes = [
    { code: '+54', country: 'Argentina' },
    { code: '+1', country: 'USA' },
    { code: '+44', country: 'UK' },
    { code: '+34', country: 'Spain' },
    { code: '+52', country: 'Mexico' },
  ];

  const roadmapSteps = [
    { title: 'Día 1-5: Auditoría y Estrategia', description: 'Análisis profundo de tus necesidades y definición de KPIs.' },
    { title: 'Día 6-15: Diseño y Prototipado', description: 'Creación de mockups y prototipos interactivos.' },
    { title: 'Día 16-30: Desarrollo e Integración', description: 'Implementación del frontend y backend.' },
    { title: 'Día 31-40: Pruebas y Optimización', description: 'Fase de QA, pruebas de rendimiento y ajustes.' },
    { title: 'Día 41-45: Lanzamiento y Seguimiento', description: 'Despliegue final y monitoreo inicial.' },
  ];

  const steps = [
    // Step 0: Welcome
    {
    content: (
      <div className="text-center mx-auto max-w-2xl">
        <h2 className="text-4xl font-bold text-white mb-4">
          ¡Bienvenido a bordo, {nombre}!
        </h2>
        <p className="text-lg text-gray-400">
          Estamos listos para construir tu Infraestructura de IA. Te guiaré en 7
          pasos rápidos para configurar el proyecto y definir exactamente cómo
          trabajaremos juntos.
        </p>
      </div>
    ),
    buttonText: "Comenzar",
  },
  // --- Paso 2: Secuencia de Lanzamiento ---
  {
    content: (
      <div className="text-center mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold text-white mb-4">
          Comencemos oficialmente
        </h2>
        <p className="text-lg text-gray-400 mb-8">
          Completa estos 2 puntos para activar el proyecto y poner en marcha el
          reloj de 45 días:
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          {/* Reemplaza '#' con tus enlaces reales de Calendly, WhatsApp, etc. */}
          <a
            href="https://wa.me/5493625190474?text=Hola%2C%20vengo%20de%20la%20p%C3%A1gina%20de%20bienvenida.%20Quiero%20agendar%20la%20llamada%20de%20Kick-off%20del%20proyecto."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Agendar Kick-off
          </a>
          {/* <a
            href="https://wa.me/5493625190474?text=Hola%2C%20vengo%20de%20la%20p%C3%A1gina%20de%20bienvenida.%20Quiero%20agendar%20la%20llamada%20de%20Kick-off%20del%20proyecto."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Unirse a WhatsApp
          </a> */}
          <button
            onClick={() => setIsPaymentModalOpen(true)}
            className="bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Gestionar Pago
          </button>
        </div>
      </div>
    ),
    buttonText: "Siguiente",
  },
  // --- Paso 3: Capturar números de WhatsApp ---
  {
    content: (
      <div className="text-center max-w-2xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-white mb-4">
          ¡Casi listo! Agrega a tu equipo al grupo de WhatsApp
        </h2>
        <p className="text-lg text-gray-400 mb-8">
          Para asegurar una comunicación fluida y que todos estén al tanto del progreso, por favor, ingresa los números de teléfono de las personas que deben unirse al grupo de WhatsApp del proyecto.
        </p>
        <form className="space-y-4 text-left">
          {phoneNumbers.map((phone, index) => (
            <div key={index} className="flex items-center gap-2">
              <select 
                value={phone.code} 
                onChange={(e) => handlePhoneNumberChange(index, 'code', e.target.value)}
                className="bg-gray-800 border-gray-700 text-white rounded-md p-2"
              >
                {countryCodes.map(country => (
                  <option key={country.code} value={country.code}>{country.code} ({country.country})</option>
                ))}
              </select>
              <input
                type="text"
                value={phone.number}
                onChange={(e) => handlePhoneNumberChange(index, 'number', e.target.value)}
                placeholder="1122334455"
                className="w-full bg-gray-800 border-gray-700 text-white rounded-md p-2"
              />
              {index > 0 && (
                <button type="button" onClick={() => handleRemovePhoneNumber(index)} className="text-red-500 hover:text-red-400">
                  Eliminar
                </button>
              )}
            </div>
          ))}
          <button type="button" onClick={handleAddPhoneNumber} className="text-brand-cyan hover:text-white">
            + Agregar otro número
          </button>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </form>
      </div>
    ),
    buttonText: "Crear Grupo de WhatsApp",
  },
  // --- Paso 4: Ritmo de Comunicación ---
  {
    content: (
      <div className="text-center mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-white mb-4">
          Cómo nos mantendremos en contacto
        </h2>
        <p className="text-lg text-gray-400 mb-10">
          La comunicación fluida es nuestra prioridad. Así funcionará:
        </p>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-2">
              Canal Directo (WA)
            </h3>
            <p className="text-gray-400">
              Para consultas ágiles del día a día. Respondemos en 2-4 hs
              hábiles.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-2">
              Consultorías 1-a-1
            </h3>
            <p className="text-gray-400">
              Una llamada de 30 min cada 15 días (agendada) para revisar avances.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-400">
              Para solicitudes formales, cambios de alcance o facturación.
            </p>
          </div>
        </div>
      </div>
    ),
    buttonText: "Entendido",
  },
  // --- Paso 5: Tu Rol ---
  {
    content: (
      <div className="text-center mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-white mb-4">
          Tu rol es clave para el éxito
        </h2>
        <p className="text-lg text-gray-400 mb-10">
          Para asegurar que el producto final sea perfecto, necesitaremos tu
          feedback en dos momentos cruciales:
        </p>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">
              Revisión de Flujos (Día 15-20 aprox)
            </h3>
            <p className="text-gray-400">
              Revisarás y aprobarás los flujos de conversación del Agente IA
              antes de la implementación.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">
              Pruebas de Aceptación (Día 31-40)
            </h3>
            <p className="text-gray-400">
              Tu equipo probará el sistema en un entorno de testeo para validar
              todo antes del lanzamiento.
            </p>
          </div>
        </div>
      </div>
    ),
    buttonText: "Siguiente",
  },
  // --- Paso 6: El Roadmap (Tu ejemplo) ---
  {
    content: (
      <div className="text-center mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-white text-center mb-4">
          Nuestro mapa de ruta
        </h2>
        <p className="text-lg text-gray-400 text-center mb-12">
          Así es como convertiremos la propuesta en realidad. Este es el plan de
          45 días:
        </p>
        {/* Esto asume que 'roadmapSteps' está definido en el scope de tu componente */}
        <ol className="relative border-l border-gray-700 max-w-3xl mx-auto text-left">
          {roadmapSteps.map((step, index) => (
            <li key={index} className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-900 rounded-full -left-3 ring-8 ring-gray-900">
                <svg
                  className="w-2.5 h-2.5 text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z" />
                  <path d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="block mb-2 text-sm font-normal leading-none text-gray-400">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    ),
    buttonText: "Casi terminamos",
  },
  // --- Paso 7: Cierre ---
  {
    content: (
      <div className="text-center mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold text-white mb-4">
          ¡Todo listo! Estamos en marcha.
        </h2>
        <p className="text-lg text-gray-400">
          Gracias por completar el onboarding. Hemos recibido tu configuración
          inicial. Nuestro equipo ya está preparando tu entorno, recibirás el contrato y te
          contactaremos por el canal de WhatsApp para coordinar el Kick-off.
          ¡Estamos emocionados de empezar!
        </p>
      </div>
    ),
    buttonText: "Finalizar",
  },
  ];

  const handleNext = async () => {
    if (currentStep === 2) {
      const validPhoneNumbers = phoneNumbers.every(phone => phone.number.trim() !== '' && /^[0-9]+$/.test(phone.number));
      if (!validPhoneNumbers) {
        setError('Por favor, ingresa al menos un número de teléfono válido.');
        return;
      }
      setError('');
      try {
        await fetch('https://n8n.cubells.com.ar/webhook-test/welcome', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ nombre, phoneNumbers }),
        });
      } catch (error) {
        console.error('Error sending webhook:', error);
      }
    }
    setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  };

  const animationVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans flex flex-col relative">
      <div 
        className="absolute inset-0 overflow-hidden -z-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '3rem 3rem',
        }}
      >
        <div className="absolute top-0 left-0 w-[50rem] h-[50rem] bg-[radial-gradient(circle,rgba(0,207,255,0.15)_0%,transparent_70%)] blur-3xl -translate-x-1/2 -translate-y-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[50rem] h-[50rem] bg-[radial-gradient(circle,rgba(0,207,255,0.15)_0%,transparent_70%)] blur-3xl translate-x-1/2 translate-y-1/3 pointer-events-none"></div>
        <div className="absolute top-1/4 right-0 w-[60rem] h-[60rem] bg-[radial-gradient(circle,rgba(0,0,0,0.4)_0%,transparent_70%)] blur-3xl translate-x-1/3 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-0 w-[60rem] h-[60rem] bg-[radial-gradient(circle,rgba(0,0,0,0.4)_0%,transparent_70%)] blur-3xl -translate-x-1/3 translate-y-1/2 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[80rem] h-[80rem] bg-[radial-gradient(circle,rgba(0,0,0,0.3)_0%,transparent_80%)] blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[80rem] h-[80rem] bg-[radial-gradient(circle,rgba(0,0,0,0.3)_0%,transparent_80%)] blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
      </div>

      <Header />
      
      <main className="flex-grow flex flex-col justify-center items-center px-4 md:px-8 lg:px-16 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            variants={animationVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="w-full max-w-4xl"
          >
            {steps[currentStep].content}
          </motion.div>
        </AnimatePresence>
        <div className="text-center py-8">
          {currentStep < steps.length - 1 && (
            <Button onClick={handleNext}>{steps[currentStep].buttonText}</Button>
          )}
        </div>
      </main>

      {isPaymentModalOpen && <PaymentModal onClose={() => setIsPaymentModalOpen(false)} />}
    </div>
  );
};

export default WelcomePage;
