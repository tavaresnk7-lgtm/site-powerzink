import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Layers, Leaf, FileCheck, Wrench, HeadsetIcon, Package, TrendingDown, Clock } from 'lucide-react';

const benefits = [
  { Icon: Layers, title: 'Dispensa Wash Primer', description: 'Elimina etapas intermediárias — aplicação direta sobre metais, alumínio e galvanizado.' },
  { Icon: Leaf, title: 'Linha Ecológica / Sem VOC', description: 'Formulações sustentáveis com baixo impacto ambiental e conformidade com normas.' },
  { Icon: FileCheck, title: 'Conformidade Técnica', description: 'Produtos em conformidade com normas NBR, ABNT e certificações aplicáveis ao setor.' },
  { Icon: Wrench, title: 'Serviço Completo', description: 'Não vendemos só tinta — oferecemos aplicação, tratamento e pintura técnica.' },
  { Icon: HeadsetIcon, title: 'Pós-venda Real', description: 'Pré e Pós-venda diferenciado, entendendo e atendendo a necessidade de forma presencial, se destacando dos concorrentes.' },
  { Icon: Package, title: 'Produtos On-Demand', description: 'Formulação sob medida para necessidades específicas do cliente.' },
  { Icon: TrendingDown, title: 'Melhor Custo-Benefício', description: 'Pricing acessível sem comprometer a qualidade — economia real por m².' },
  { Icon: Clock, title: 'Menor Homem-Hora', description: 'Tecnologia 3em1 significa menos camadas, menos tempo, mais produtividade.' },
];

export default function Differentials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="diferenciais" className="relative py-24 lg:py-32 bg-bg-white overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="eyebrow">Por que a PowerZink</span>
          <h2 className="heading-display text-3xl sm:text-4xl lg:text-[2.75rem] mt-5 mb-4">
            MAIS DO QUE VENDER TINTA, <span className="text-pz-green">ENTREGAMOS RESULTADO.</span>
          </h2>
          <p className="text-graphite-400 max-w-2xl mx-auto">
            Diferenciais reais que os grandes fornecedores não oferecem — do diagnóstico ao pós-venda.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.06 * i }}
              className="card-elevated p-6 group hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <div className="icon-box mb-4 group-hover:scale-110 transition-transform duration-300">
                <b.Icon size={22} strokeWidth={2} />
              </div>
              <h3 className="font-semibold text-graphite text-[15px] mb-1.5">{b.title}</h3>
              <p className="text-sm text-graphite-400 leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
