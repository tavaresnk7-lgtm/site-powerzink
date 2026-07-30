import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowLeft, Check, MessageCircle, Mail, RotateCcw, Star, Package, AlertTriangle, Info } from 'lucide-react';
import { quizSteps } from '../data/products';
import type { QuizAnswers } from '../types';
import DynamicIcon from './DynamicIcon';
import { getRecommendation, getSegmentMessage, generateWhatsAppMessage, generateEmailSubject, generateEmailBody } from '../utils/recommender';

const WHATSAPP_NUMBER = '5511947897574';

export default function ProductQuiz() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<QuizAnswers>>({});
  const [showResults, setShowResults] = useState(false);

  const totalSteps = quizSteps.length;
  const progress = showResults ? 100 : (currentStep / totalSteps) * 100;

  const handleSelect = (optionId: string) => {
    const stepId = quizSteps[currentStep].id as keyof QuizAnswers;
    const newAnswers = { ...answers, [stepId]: optionId };
    setAnswers(newAnswers);
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (showResults) setShowResults(false);
    else if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleReset = () => { setCurrentStep(0); setAnswers({}); setShowResults(false); };

  const recommendation = showResults ? getRecommendation(answers as QuizAnswers) : null;
  const segmentMsg = showResults && answers.segment ? getSegmentMessage(answers.segment) : '';

  return (
    <section id="quiz" className="relative py-24 lg:py-32 bg-bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 metal-divider" />
      <div ref={ref} className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
          <span className="eyebrow">Recomendador Inteligente</span>
          <h2 className="heading-display text-3xl sm:text-4xl lg:text-[2.75rem] mt-5 mb-4">
            QUAL O PRODUTO <span className="text-pz-green">IDEAL</span> PARA VOCÊ?
          </h2>
          <p className="text-graphite-400 max-w-lg mx-auto">Responda 5 perguntas rápidas e descubra a solução PowerZink perfeita para seu projeto.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl border border-graphite-100 shadow-sm overflow-hidden">
          <div className="h-1 bg-graphite-50">
            <motion.div className="h-full bg-pz-green" initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 0.4 }} />
          </div>

          <div className="p-6 sm:p-8">
            {!showResults && (
              <div className="flex items-center justify-between mb-8">
                <button onClick={handleBack} disabled={currentStep === 0}
                  className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${currentStep === 0 ? 'text-graphite-200 cursor-not-allowed' : 'text-graphite-400 hover:text-graphite cursor-pointer'}`}>
                  <ArrowLeft size={14} />Voltar
                </button>
                <div className="flex items-center gap-2">
                  {quizSteps.map((_, i) => (
                    <div key={i} className={`h-2 rounded-full transition-all duration-300 ${i < currentStep ? 'bg-pz-green w-2' : i === currentStep ? 'bg-pz-green w-6' : 'bg-graphite-100 w-2'}`} />
                  ))}
                </div>
                <span className="text-sm text-graphite-300 font-medium tabular-nums">{currentStep + 1}/{totalSteps}</span>
              </div>
            )}

            <AnimatePresence mode="wait">
              {!showResults ? (
                <motion.div key={currentStep} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.25 }}>
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-heading font-bold text-graphite uppercase tracking-tight mb-1">{quizSteps[currentStep].title}</h3>
                    <p className="text-sm text-graphite-400">{quizSteps[currentStep].subtitle}</p>
                  </div>
                  <div className={`grid gap-3 ${quizSteps[currentStep].options.length <= 4 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
                    {quizSteps[currentStep].options.map((option) => {
                      const stepId = quizSteps[currentStep].id as keyof QuizAnswers;
                      const isSelected = answers[stepId] === option.id;
                      return (
                        <button key={option.id} onClick={() => handleSelect(option.id)}
                          className={`group relative p-4 rounded-xl border text-left transition-all duration-300 cursor-pointer hover:shadow-sm hover:-translate-y-0.5 ${isSelected ? 'border-pz-green bg-pz-green-light/50 shadow-sm scale-[1.02]' : 'border-graphite-100 bg-graphite-50/50 hover:border-graphite-200 hover:bg-white'}`}>
                          <div className="flex items-center gap-3">
                            <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${isSelected ? 'bg-pz-green text-white' : 'bg-white text-graphite-400 border border-graphite-100'}`}>
                              <DynamicIcon name={option.icon} size={16} strokeWidth={2} />
                            </div>
                            <span className={`font-medium text-sm transition-colors ${isSelected ? 'text-pz-green' : 'text-graphite'}`}>{option.label}</span>
                            {isSelected && <Check size={14} className="text-pz-green ml-auto shrink-0" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              ) : (
                <motion.div key="results" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35 }}>
                  <div className="text-center mb-8">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-pz-green-light flex items-center justify-center">
                      <Star size={24} className="text-pz-green" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-graphite uppercase tracking-tight mb-1">Sua Recomendação PowerZink</h3>
                    <p className="text-sm text-graphite-400">Com base nas suas respostas, recomendamos:</p>
                  </div>

                  {recommendation && (
                    <div className="space-y-3">
                      {recommendation.preparatory && (
                        <div className="p-4 rounded-xl bg-yellow-accent/5 border border-yellow-accent/20">
                          <div className="flex items-center gap-2 mb-3">
                            <AlertTriangle size={14} className="text-yellow-accent" />
                            <span className="text-xs font-bold text-graphite-600 uppercase tracking-wider">Etapa Preparatória</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="icon-box !bg-yellow-accent/10 !text-yellow-accent"><DynamicIcon name={recommendation.preparatory.icon} size={18} strokeWidth={2} /></div>
                            <div className="min-w-0">
                              <span className="px-2 py-0.5 text-[10px] font-mono font-bold text-white bg-graphite-600 rounded tracking-wide">{recommendation.preparatory.code}</span>
                              <div className="font-semibold text-graphite mt-1">{recommendation.preparatory.name}</div>
                              <p className="text-sm text-graphite-400 mt-1 leading-relaxed">{recommendation.preparatory.description}</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {recommendation.primary.map((product) => (
                        <div key={product.id} className="p-4 rounded-xl bg-pz-green-light/40 border border-pz-green/20">
                          <div className="flex items-center gap-2 mb-3">
                            <Package size={14} className="text-pz-green" />
                            <span className="text-xs font-bold text-pz-green uppercase tracking-wider">Produto Recomendado</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="icon-box"><DynamicIcon name={product.icon} size={18} strokeWidth={2} /></div>
                            <div className="min-w-0">
                              <span className="px-2 py-0.5 text-[10px] font-mono font-bold text-white bg-graphite-600 rounded tracking-wide">{product.code}</span>
                              <div className="font-semibold text-graphite text-lg mt-1">{product.name}</div>
                              <p className="text-sm text-graphite-400 mt-1 leading-relaxed">{product.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}

                      {recommendation.complementary.map((product) => (
                        <div key={product.id} className="p-4 rounded-xl bg-graphite-50 border border-graphite-100">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs font-bold text-graphite-400 uppercase tracking-wider">Produto Complementar</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="icon-box"><DynamicIcon name={product.icon} size={18} strokeWidth={2} /></div>
                            <div className="min-w-0">
                              <span className="px-2 py-0.5 text-[10px] font-mono font-bold text-white bg-graphite-600 rounded tracking-wide">{product.code}</span>
                              <div className="font-semibold text-graphite mt-1">{product.name}</div>
                              <p className="text-sm text-graphite-400 mt-1 leading-relaxed">{product.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}

                      {/* Segment-specific message */}
                      {segmentMsg && (
                        <div className="p-4 rounded-xl bg-pz-green-light/20 border border-pz-green/10 flex items-start gap-3">
                          <Info size={16} className="text-pz-green mt-0.5 shrink-0" />
                          <p className="text-sm text-graphite-500 leading-relaxed">{segmentMsg}</p>
                        </div>
                      )}

                      <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-4 border-t border-graphite-100">
                        <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${generateWhatsAppMessage(recommendation, answers.segment)}`} target="_blank" rel="noopener noreferrer"
                          className="btn-metallic flex-1 flex items-center justify-center gap-2 px-6 py-3.5 text-white font-semibold rounded-xl">
                          <MessageCircle size={16} />Falar no WhatsApp
                        </a>
                        <a href={`mailto:contato@powerzink.com.br?subject=${generateEmailSubject(recommendation)}&body=${generateEmailBody(recommendation)}`}
                          className="btn-outline-metallic flex-1 flex items-center justify-center gap-2 px-6 py-3.5 font-semibold rounded-xl">
                          <Mail size={16} />Enviar por E-mail
                        </a>
                      </div>
                      <button onClick={handleReset} className="w-full mt-2 flex items-center justify-center gap-1.5 text-sm text-graphite-300 hover:text-graphite-500 transition-colors cursor-pointer py-2">
                        <RotateCcw size={13} />Refazer questionário
                      </button>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
