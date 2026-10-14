import { IconName } from '@/components/ui/Icon';

export interface BentoMetric {
  label: string;
  value: string;
  unit: string;
  description: string;
  icon: IconName;
  color: 'primary' | 'secondary' | 'tertiary' | 'primary-fixed';
}

export interface ChallengeCard {
  title: string;
  description: string;
  icon: IconName;
}

export interface ArchitecturePillar {
  title: string;
  description: string;
  tag: string;
  icon: IconName;
  color: 'primary' | 'secondary' | 'tertiary' | 'primary-fixed';
}

export interface TopologyNode {
  badge: string;
  title: string;
  description: string;
  stat: string;
  statColor?: string;
  icon: IconName;
  badgeColor: string;
  highlight?: boolean;
}

export interface LowerTopologyNode {
  title: string;
  description: string;
  icon: IconName;
  color: string;
}

export interface ResultCard {
  metric: string;
  title: string;
  description: string;
  tag: string;
  icon: IconName;
  color: 'primary' | 'secondary' | 'tertiary';
}

export interface TechStackItem {
  name: string;
  role: string;
  icon: IconName;
  color: string;
}

export interface CaseStudyData {
  slug: string;
  aliasSlugs?: string[];
  breadcrumbTitle: string;
  categoryBadge: string;
  clientBadge: string;
  periodBadge: string;
  title: string;
  subtitle: string;
  coverImage?: string;
  externalLink?: string;
  privacyPolicyUrl?: string;
  metrics: BentoMetric[];
  challenge: {
    badge: string;
    title: string;
    description: string;
    impactBox: {
      title: string;
      description: string;
    };
    cards: ChallengeCard[];
  };
  solution: {
    badge: string;
    title: string;
    description: string;
    pillars: ArchitecturePillar[];
    topology: {
      title: string;
      tags: { label: string; color: string }[];
      nodes: TopologyNode[];
      lowerNodes: LowerTopologyNode[];
    };
  };
  results: {
    badge: string;
    title: string;
    description: string;
    cards: ResultCard[];
  };
  testimonial: {
    rating: number;
    quote: string;
    author: string;
    company: string;
  };
  techStack: TechStackItem[];
  cta: {
    badge: string;
    title: string;
    description: string;
    primaryButtonText: string;
    secondaryButtonText: string;
  };
}

export const caseStudiesList: CaseStudyData[] = [
  {
    slug: 'consultoria-em-engenharia-de-software',
    aliasSlugs: [
      'fintech-concorrencia',
      'plataforma-fintech-alta-concorrencia',
    ],
    breadcrumbTitle: 'Consultoria em Engenharia de Software',
    categoryBadge: 'SOFTWARE ENGINEERING & AI ACCELERATION',
    clientBadge: 'Cliente: Edvisor (Global EdTech)',
    periodBadge: 'Ano: 2024 - 2025',
    title:
      'Engenharia de Software e Aceleração com Inteligência Artificial para Gestão Escolar',
    subtitle:
      'Consultoria técnica sênior no desenvolvimento de features de alta complexidade, arquitetura de software escalável e fluxos assistidos por Inteligência Artificial (Claude AI) para a Edvisor, plataforma global de tecnologia educacional.',
    coverImage: '/images/clients/edvisor-newlogo.svg',
    externalLink: 'https://www.edvisor.io/',
    metrics: [
      {
        label: 'ALUNOS & AGENTES IMPACTADOS',
        value: '+30k',
        unit: 'usuários',
        description:
          'Features operando em escala em centenas de instituições de ensino internacionais.',
        icon: 'person',
        color: 'primary',
      },
      {
        label: 'ACELERAÇÃO COM IA',
        value: '-40',
        unit: '% tempo ciclo',
        description:
          'Adoção estruturada de Claude AI para especificação de código e testes de regressão.',
        icon: 'speed',
        color: 'secondary',
      },
      {
        label: 'QUALIDADE DE CÓDIGO',
        value: '100',
        unit: '% TypeScript',
        description:
          'Tipagem estrita ponta a ponta eliminando erros de tipagem em tempo de execução.',
        icon: 'check_circle',
        color: 'tertiary',
      },
      {
        label: 'DISPONIBILIDADE EM PRODUÇÃO',
        value: '99.9',
        unit: '% uptime',
        description:
          'Deploys contínuos sem regressões ou quebra de contratos de API pré-existentes.',
        icon: 'verified_user',
        color: 'primary-fixed',
      },
    ],
    challenge: {
      badge: 'DIAGNÓSTICO DO ESTADO ANTERIOR',
      title:
        'O Desafio Técnico: Complexidade Educacional Global & Aceleração de Features',
      description:
        'A Edvisor atende instituições de ensino e agências de intercâmbio em múltiplos continentes, com regras fiscais, moedas e calendários distintos. O desafio era entregar novas capacidades de produto com máxima velocidade e zero regressão no core da plataforma.',
      impactBox: {
        title: 'Desafio de Escala e Time-to-Market',
        description:
          'A demanda por novos módulos exigia engenharia de software sênior capaz de entrar na esteira existente, entender o domínio de negócio complexo e produzir código sustentável imediatamente.',
      },
      cards: [
        {
          title: 'Regras de Negócio Multi-País',
          description:
            'Fluxos de gestão escolar e cotações internacionais exigindo modelagem flexível de dados e tratamento rigoroso de exceções.',
          icon: 'lock_clock',
        },
        {
          title: 'Integrações Assíncronas de API',
          description:
            'Comunicação com serviços terceiros e sistemas legados de parceiros demandando validações robustas e tratamento de timeouts.',
          icon: 'hourglass_bottom',
        },
        {
          title: 'Necessidade de Aceleração com IA',
          description:
            'Integrar IA no processo de engenharia de forma responsável e auditada para diminuir o tempo de prototipagem e testes.',
          icon: 'code_blocks',
        },
        {
          title: 'Manutenibilidade e Testes',
          description:
            'Garantir que novos módulos possuíssem cobertura de testes e aderissem aos padrões de arquitetura corporativa da empresa.',
          icon: 'visibility_off',
        },
      ],
    },
    solution: {
      badge: 'ENGENHARIA ESTRUTURAL GIVISIEZ',
      title:
        'Arquitetura Modular, TypeScript Estrito e Aceleração com Claude AI',
      description:
        'A Givisiez atuou diretamente na esteira de desenvolvimento, desenhando interfaces reativas em React, tipagens estritas em TypeScript e aplicando prompts determinísticos com Claude AI para automação de testes e geração de código.',
      pillars: [
        {
          title: 'React & TypeScript Moderno',
          description:
            'Construção de componentes desacoplados com React Server/Client Components, hooks customizados e tipagem rigorosa.',
          tag: 'Clean Frontend Architecture',
          icon: 'code_blocks',
          color: 'primary',
        },
        {
          title: 'Pair Programming com Claude AI',
          description:
            'Utilização de modelos avançados de IA para gerar especificações de testes, refatorar código legado e antecipar edge cases.',
          tag: 'Engenharia Aumentada por IA',
          icon: 'neurology',
          color: 'secondary',
        },
        {
          title: 'APIs Resilientes & Validação',
          description:
            'Consumo de endpoints com schemas de validação de dados em runtime (Zod), interceptores de erro e feedback visual imediato.',
          tag: 'Contratos de Dados Seguros',
          icon: 'router',
          color: 'tertiary',
        },
        {
          title: 'Product Management & Mentoria',
          description:
            'Alinhamento estreito com stakeholders de produto, divisão de épicos em histórias acionáveis e mentoria técnica de pares.',
          tag: 'Alinhamento Ágil de Engenharia',
          icon: 'insights',
          color: 'primary-fixed',
        },
      ],
      topology: {
        title:
          'Diagrama Esquemático: Pipeline de Desenvolvimento Aumentado por IA',
        tags: [
          { label: 'Frontend Reativo', color: 'bg-[#10B981]' },
          { label: 'Claude AI Acceleration', color: 'bg-primary' },
          { label: 'Core Edvisor API', color: 'bg-tertiary' },
        ],
        nodes: [
          {
            badge: 'USER INTERFACE',
            badgeColor: 'text-outline',
            title: 'React & Next.js Modules',
            description:
              'Componentes reativos com design system padronizado e acessibilidade.',
            stat: 'Renderização Fluida',
            statColor: 'text-[#10B981]',
            icon: 'terminal',
          },
          {
            badge: 'AI DEV WORKFLOW',
            badgeColor: 'text-secondary',
            title: 'Claude AI Assistant',
            description:
              'Geração e validação de casos de teste, mocking de dados e testes unitários.',
            stat: '-40% Tempo de Ciclo',
            statColor: 'text-secondary',
            icon: 'neurology',
            highlight: true,
          },
          {
            badge: 'BACKEND SERVICES',
            badgeColor: 'text-tertiary',
            title: 'Edvisor Core Services',
            description:
              'APIs de gestão escolar, faturamento e integração com escolas de intercâmbio.',
            stat: '100% Contratos Válidos',
            statColor: 'text-tertiary',
            icon: 'database',
          },
        ],
        lowerNodes: [
          {
            title: 'TypeScript Type-Checking',
            description:
              'Verificação em tempo de compilação sem casts inseguros (no any).',
            icon: 'check_circle',
            color: 'text-primary',
          },
          {
            title: 'Automated CI/CD Tests',
            description:
              'Esteiras de build com testes automatizados executados a cada PR.',
            icon: 'code_blocks',
            color: 'text-tertiary',
          },
          {
            title: 'Product Roadmaps & Releases',
            description:
              'Entregas previsíveis e alinhadas ao cronograma estratégico.',
            icon: 'insights',
            color: 'text-[#10B981]',
          },
        ],
      },
    },
    results: {
      badge: 'BUSINESS IMPACT & ROI',
      title:
        'Resultados Mensuráveis: Velocidade de Entrega com Qualidade Exemplar',
      description:
        'A consultoria permitiu que a equipe da Edvisor antecipasse entregas críticas de produto sem comprometer a estabilidade do ecossistema.',
      cards: [
        {
          metric: '-40%',
          title: 'Redução no Tempo de Ciclo de Features',
          description:
            'A combinação de engenharia sênior e inteligência artificial acelerou drasticamente a implementação de novas interfaces.',
          tag: 'Produtividade de Engenharia',
          icon: 'speed',
          color: 'primary',
        },
        {
          metric: 'Zero',
          title: 'Regressões Graves em Produção',
          description:
            'Testes automatizados rigorosos e tipagem estrita garantiram estabilidade total em ambientes de produção corporativa.',
          tag: 'Confiabilidade de Software',
          icon: 'check_circle',
          color: 'secondary',
        },
        {
          metric: '100%',
          title: 'Aderência a Boas Práticas e Clean Code',
          description:
            'Código amplamente documentado, modular e facilmente manutenível pela equipe interna da Edvisor.',
          tag: 'Sustentabilidade do Código',
          icon: 'rocket_launch',
          color: 'tertiary',
        },
      ],
    },
    testimonial: {
      rating: 5,
      quote:
        '“A Givisiez entrou na nossa equipe de engenharia com autonomia imediata. Conseguiram absorver as particularidades do nosso produto rapidamente, entregando features com alto padrão de qualidade em React e TypeScript. O uso de IA nas esteiras de desenvolvimento trouxe um ganho real de velocidade.”',
      author: 'Liderança de Engenharia de Software',
      company: 'Edvisor (Plataforma Global de Gestão Educacional)',
    },
    techStack: [
      {
        name: 'React',
        role: 'Frontend Core',
        icon: 'terminal',
        color: 'text-primary',
      },
      {
        name: 'TypeScript',
        role: 'Tipagem Estrita',
        icon: 'code_blocks',
        color: 'text-secondary',
      },
      {
        name: 'Claude AI',
        role: 'Aceleração com IA',
        icon: 'neurology',
        color: 'text-tertiary',
      },
      {
        name: 'Node.js',
        role: 'Runtime Services',
        icon: 'storage',
        color: 'text-primary-fixed',
      },
      {
        name: 'Next.js',
        role: 'Web Platform',
        icon: 'grid_view',
        color: 'text-primary',
      },
      {
        name: 'REST APIs',
        role: 'Integrações',
        icon: 'router',
        color: 'text-secondary',
      },
      {
        name: 'Git & CI/CD',
        role: 'Versionamento',
        icon: 'integration_instructions',
        color: 'text-tertiary',
      },
    ],
    cta: {
      badge: 'CONSULTORIA ESPECIALIZADA EM ENGENHARIA',
      title:
        'Sua equipe de tecnologia precisa acelerar entregas com qualidade sênior e IA?',
      description:
        'A Givisiez integra-se diretamente ao seu time para destravar gargalos de desenvolvimento, modernizar arquiteturas e implementar fluxos com inteligência artificial.',
      primaryButtonText: 'Agendar Consulta de Engenharia',
      secondaryButtonText: 'Explorar Outros Projetos',
    },
  },
  {
    slug: 'conectakids-app',
    breadcrumbTitle: 'ConectaKids App',
    categoryBadge: 'HEALTHTECH & PEDIATRIC SENSORY CARE',
    clientBadge: 'Cliente: Givisiez em parceria com SensaKids',
    periodBadge: 'Ano: 2026',
    title:
      'ConectaKids: Plataforma Integrada de Saúde e Acompanhamento Sensorial Infantil',
    subtitle:
      'Aplicativo web e mobile desenvolvido para conectar profissionais de saúde (terapeutas ocupacionais, psicólogos e pediatras) com pais de crianças atípicas, centralizando relatórios de evolução clínica e diários comportamentais em tempo real.',
    coverImage: '/images/projects/CK-Logo.png',
    metrics: [
      {
        label: 'FAMÍLIAS & TERAPEUTAS',
        value: '+5k',
        unit: 'usuários',
        description:
          'Engajamento diário de especialistas e famílias no acompanhamento infantil.',
        icon: 'person',
        color: 'primary',
      },
      {
        label: 'SINCRONIZAÇÃO REALTIME',
        value: '< 180',
        unit: 'ms',
        description:
          'Sincronização imediata de relatórios e diários de crise sensorial.',
        icon: 'timer',
        color: 'secondary',
      },
      {
        label: 'DISPONIBILIDADE DO APP',
        value: '99.9',
        unit: '%',
        description:
          'Acesso estável para consultas em consultórios e anotações dos pais em casa.',
        icon: 'verified_user',
        color: 'tertiary',
      },
      {
        label: 'SATISFAÇÃO CLÍNICA',
        value: '98.6',
        unit: '% NPS',
        description:
          'Avaliação excelente por terapeutas ocupacionais e clínicas parceiras.',
        icon: 'star',
        color: 'primary-fixed',
      },
    ],
    challenge: {
      badge: 'DIAGNÓSTICO DO ESTADO ANTERIOR',
      title:
        'O Desafio Técnico: Fragmentação do Histórico Clínico & Comunicação Dispersa',
      description:
        'O acompanhamento terapêutico de crianças atípicas frequentemente dependia de cadernos físicos de anotação e conversas em apps de mensagens. Informações vitais sobre crises sensoriais ou avanços motores se perdiam entre consultas, dificultando a tomada de decisão médica.',
      impactBox: {
        title: 'Impacto no Desenvolvimento Infantil',
        description:
          'Sem um histórico unificado, médicos e terapeutas demoravam semanas para identificar padrões comportamentais, atrasando ajustes necessários no plano terapêutico individualizado.',
      },
      cards: [
        {
          title: 'Prontuários Descentralizados',
          description:
            'Terapeutas de diferentes especialidades não tinham visibilidade das intervenções realizadas pelos colegas da equipe multidisciplinar.',
          icon: 'visibility_off',
        },
        {
          title: 'Dificuldade de Registro pelos Pais',
          description:
            'Formulários complexos levavam ao abandono do preenchimento diário das crises comportamentais.',
          icon: 'hourglass_bottom',
        },
        {
          title: 'Privacidade de Dados de Menores',
          description:
            'Necessidade de blindagem absoluta e conformidade com a LGPD no armazenamento de relatórios e laudos médicos infantis.',
          icon: 'lock_clock',
        },
        {
          title: 'Sincronização em Tempo Real',
          description:
            'Garantir que atualizações feitas na clínica apareçam instantaneamente no aplicativo dos pais sem atrasos.',
          icon: 'cloud_off',
        },
      ],
    },
    solution: {
      badge: 'ENGENHARIA ESTRUTURAL GIVISIEZ',
      title: 'Ecossistema Multiplataforma com Supabase, Next.js e Tailwind CSS',
      description:
        'Projetamos e codificamos uma solução web e mobile responsiva sobre o Supabase, utilizando Row Level Security (RLS) para isolamento estrito de prontuários médicos e WebSockets para atualização instantânea de diários de evolução.',
      pillars: [
        {
          title: 'Supabase & PostgreSQL RLS',
          description:
            'Segurança em nível de linha garantindo que apenas profissionais credenciados e os respectivos responsáveis acessem os dados da criança.',
          tag: 'Row Level Security Estrito',
          icon: 'database',
          color: 'primary',
        },
        {
          title: 'Next.js 15 App Router & React',
          description:
            'Interface web ultra rápida com Server Actions e renderização híbrida para dashboards analíticos de clínicas terapêuticas.',
          tag: 'Web & Mobile Responsivo',
          icon: 'code_blocks',
          color: 'secondary',
        },
        {
          title: 'Tailwind CSS & Design Inclusivo',
          description:
            'Design system acessível com paleta de cores acolhedora, alto contraste e tipografia legível para uso sob qualquer iluminação.',
          tag: 'UX Acessível e Sensorial',
          icon: 'insights',
          color: 'tertiary',
        },
        {
          title: 'Realtime Subscriptions',
          description:
            'Barramento em tempo real avisando pais e terapeutas sempre que um novo registro clínico ou laudo é assinado digitalmente.',
          tag: 'WebSockets < 180ms',
          icon: 'hub',
          color: 'primary-fixed',
        },
      ],
      topology: {
        title: 'Diagrama Esquemático: Arquitetura da Plataforma ConectaKids',
        tags: [
          { label: 'Portal Web Clínicas', color: 'bg-[#10B981]' },
          { label: 'Supabase Realtime API', color: 'bg-primary' },
          { label: 'PostgreSQL Isolado (RLS)', color: 'bg-tertiary' },
        ],
        nodes: [
          {
            badge: 'CLIENT APPS',
            badgeColor: 'text-outline',
            title: 'Next.js Web / Mobile PWA',
            description:
              'Interface responsiva para registro diário de refeições, crises e conquistas.',
            stat: 'Multiplataforma Unificada',
            statColor: 'text-[#10B981]',
            icon: 'person',
          },
          {
            badge: 'REALTIME ENGINE',
            badgeColor: 'text-secondary',
            title: 'Supabase Edge & Realtime',
            description:
              'Canal de mensageria WebSockets com controle de autenticação baseado em JWT.',
            stat: 'Latência < 180ms',
            statColor: 'text-secondary',
            icon: 'router',
            highlight: true,
          },
          {
            badge: 'DATABASE VAULT',
            badgeColor: 'text-tertiary',
            title: 'PostgreSQL com RLS',
            description:
              'Tabelas relacionais com criptografia em repouso e isolamento estrito por paciente.',
            stat: '100% Protegido LGPD',
            statColor: 'text-tertiary',
            icon: 'database',
          },
        ],
        lowerNodes: [
          {
            title: 'Painel de Evolução Clínica',
            description:
              'Gráficos comparativos de marcos de desenvolvimento infantil.',
            icon: 'insights',
            color: 'text-primary',
          },
          {
            title: 'Storage Seguro de Laudos',
            description:
              'Armazenamento de exames e vídeos de sessões com URLs pré-assinadas.',
            icon: 'storage',
            color: 'text-tertiary',
          },
          {
            title: 'Notificações Automáticas',
            description:
              'Lembretes de atividades e avisos para equipe multidisciplinar.',
            icon: 'speed',
            color: 'text-[#10B981]',
          },
        ],
      },
    },
    results: {
      badge: 'BUSINESS IMPACT & ROI',
      title:
        'Resultados Mensuráveis: Histórico Clínico Unificado e Famílias Apoiadas',
      description:
        'A plataforma transformou o dia a dia de consultórios multidisciplinares, aproximando famílias e terapeutas em torno da evolução infantil.',
      cards: [
        {
          metric: '100%',
          title: 'Histórico Terapêutico Centralizado',
          description:
            'Fim dos papéis perdidos e anotações soltas: todos os profissionais compartilham o mesmo contexto do paciente.',
          tag: 'Visão Clínica Integrada',
          icon: 'check_circle',
          color: 'primary',
        },
        {
          metric: '4x',
          title: 'Mais Agilidade na Adaptação Terapêutica',
          description:
            'Identificação imediata de alterações comportamentais permitiu antecipar intervenções clínicas importantes.',
          tag: 'Evolução Acelerada',
          icon: 'rocket_launch',
          color: 'secondary',
        },
        {
          metric: '98.6%',
          title: 'Satisfação de Pais e Profissionais',
          description:
            'Interface elogiada pela facilidade de uso diário, proporcionando clareza e acolhimento para as famílias.',
          tag: 'NPS de Excelência',
          icon: 'star',
          color: 'tertiary',
        },
      ],
    },
    testimonial: {
      rating: 5,
      quote:
        '“O ConectaKids trouxe a ponte digital que faltava entre o consultório e a casa das crianças. Nossos terapeutas conseguem acompanhar cada avanço sensorial em tempo real e os pais se sentem verdadeiramente amparados. A engenharia da Givisiez foi fundamental para transformar essa ideia em um produto seguro e intuitivo.”',
      author: 'Equipe de Gestão e Saúde',
      company: 'SensaKids & Clínicas Multidisciplinares',
    },
    techStack: [
      {
        name: 'React',
        role: 'Frontend UI',
        icon: 'terminal',
        color: 'text-primary',
      },
      {
        name: 'Next.js',
        role: 'Full-Stack Framework',
        icon: 'grid_view',
        color: 'text-secondary',
      },
      {
        name: 'Tailwind CSS',
        role: 'Design System',
        icon: 'insights',
        color: 'text-tertiary',
      },
      {
        name: 'TypeScript',
        role: 'Tipagem Estrita',
        icon: 'code_blocks',
        color: 'text-primary-fixed',
      },
      {
        name: 'Supabase',
        role: 'Backend & Realtime',
        icon: 'database',
        color: 'text-primary',
      },
      {
        name: 'PostgreSQL',
        role: 'Banco de Dados',
        icon: 'storage',
        color: 'text-secondary',
      },
      {
        name: 'RLS Security',
        role: 'Segurança de Dados',
        icon: 'shield_lock',
        color: 'text-tertiary',
      },
    ],
    cta: {
      badge: 'DESENVOLVIMENTO DE SOFTWARE EM SAÚDE',
      title:
        'Quer desenvolver uma aplicação de saúde digital moderna, segura e com foco humano?',
      description:
        'A Givisiez alia rigor técnico, conformidade LGPD e usabilidade acessível para criar plataformas de saúde que impactam vidas.',
      primaryButtonText: 'Falar sobre Projeto Healthtech',
      secondaryButtonText: 'Explorar Outros Projetos',
    },
  },
  {
    slug: 'presente-certo-app',
    breadcrumbTitle: 'Presente Certo App',
    categoryBadge: 'MOBILE SOCIAL PLATFORM & E-COMMERCE',
    clientBadge: 'Cliente: Givisiez (App Store & Google Play)',
    periodBadge: 'Ano: 2026',
    title:
      'Presente Certo: Ecossistema Mobile para Listas Colaborativas e Eventos Sociais',
    subtitle:
      'Aplicativo móvel desenvolvido em React Native e Expo que soluciona o problema de presentes repetidos em festas, casamentos e aniversários através de reserva atômica em tempo real, amigo secreto e listas compartilhadas.',
    coverImage: '/images/projects/PC-Login.jpeg',
    externalLink:
      'https://play.google.com/store/apps/details?id=com.givisiez.presentecertoapp',
    privacyPolicyUrl: '/presente-certo/delete-user',
    metrics: [
      {
        label: 'DOWNLOADS NAS LOJAS',
        value: '+25k',
        unit: 'instalações',
        description:
          'Usuários organizando casamentos, chás de bebê, aniversários e amigos secretos.',
        icon: 'savings',
        color: 'primary',
      },
      {
        label: 'AVALIAÇÃO NAS LOJAS',
        value: '4.9',
        unit: '★ App Store',
        description:
          'Reconhecimento máximo dos usuários pela simplicidade e estabilidade do app.',
        icon: 'star',
        color: 'secondary',
      },
      {
        label: 'TEMPO DE INICIALIZAÇÃO',
        value: '1.1',
        unit: 's cold start',
        description:
          'Abertura rápida com renderização otimizada e bundle enxuto em React Native.',
        icon: 'speed',
        color: 'tertiary',
      },
      {
        label: 'TAXA LIVRE DE FALHAS',
        value: '99.95',
        unit: '% crash-free',
        description:
          'Estabilidade comprovada em centenas de modelos de smartphones Android e iOS.',
        icon: 'verified_user',
        color: 'primary-fixed',
      },
    ],
    challenge: {
      badge: 'DIAGNÓSTICO DO ESTADO ANTERIOR',
      title:
        'O Desafio Técnico: Concorrência de Reserva & Sincronização em Grupos',
      description:
        'Em eventos com muitos convidados, o maior atrito é a repetição de presentes por falta de sincronização imediata. Dois amigos escolhiam o mesmo presente ao mesmo tempo, gerando constrangimento e retrabalho de trocas no comércio.',
      impactBox: {
        title: 'Frustração Social em Eventos',
        description:
          'Presentes duplicados geram perda de tempo para anfitriões e convidados. A plataforma precisava garantir reserva instantânea e sigilosa sem demandar conexão constante de internet pesada.',
      },
      cards: [
        {
          title: 'Reserva Concorrente Conflitante',
          description:
            'Garantir atomicidade na reserva de itens para que nenhum presente seja selecionado por duas pessoas simultaneamente.',
          icon: 'lock_clock',
        },
        {
          title: 'Sigilo no Amigo Secreto',
          description:
            'Sorteios de amigo secreto com geração aleatória no dispositivo sem revelar os pares a organizadores ou terceiros.',
          icon: 'visibility_off',
        },
        {
          title: 'Notificações Push Imediatas',
          description:
            'Notificar participantes instantaneamente quando um item é reservado ou a data do evento é alterada.',
          icon: 'hourglass_bottom',
        },
        {
          title: 'Performance em Dispositivos Diversos',
          description:
            'Suportar desde smartphones topo de linha até aparelhos de entrada com 60fps constantes e baixo consumo de bateria.',
          icon: 'flash_on',
        },
      ],
    },
    solution: {
      badge: 'ENGENHARIA ESTRUTURAL GIVISIEZ',
      title:
        'Arquitetura Reativa Mobile com React Native, Expo e Firebase Serverless',
      description:
        'Construímos um aplicativo nativo ágil utilizando React Native e Expo Router, integrado a transações atômicas no Firebase Firestore para bloqueio instantâneo de itens e Firebase Cloud Functions para envio de notificações push via FCM.',
      pillars: [
        {
          title: 'React Native & Expo Router',
          description:
            'Navegação baseada em arquivos com transições nativas fluídas, tipagem estrita em TypeScript e deploy simplificado via EAS.',
          tag: 'Cross-Platform Mobile',
          icon: 'code_blocks',
          color: 'primary',
        },
        {
          title: 'Firestore Atomic Transactions',
          description:
            'Operações atômicas de escrita que asseguram que uma reserva só é confirmada se o item ainda estiver disponível no milissegundo exato.',
          tag: 'Zero Presentes Duplicados',
          icon: 'database',
          color: 'secondary',
        },
        {
          title: 'Firebase Cloud Functions & FCM',
          description:
            'Backend serverless que despacha notificações push personalizadas para grupos de amigos em menos de 1 segundo.',
          tag: 'Mensageria Push em Tempo Real',
          icon: 'cloud',
          color: 'tertiary',
        },
        {
          title: 'Deep Linking & Compartilhamento',
          description:
            'Links universais que abrem as listas diretamente no app ou no navegador, facilitando convites via WhatsApp e redes sociais.',
          tag: 'Crescimento Orgânico Viral',
          icon: 'share',
          color: 'primary-fixed',
        },
      ],
      topology: {
        title: 'Diagrama Esquemático: Arquitetura Mobile Presente Certo',
        tags: [
          { label: 'React Native App', color: 'bg-[#10B981]' },
          { label: 'Firebase Serverless Functions', color: 'bg-primary' },
          { label: 'Firestore Atomic DB', color: 'bg-tertiary' },
        ],
        nodes: [
          {
            badge: 'MOBILE CLIENT',
            badgeColor: 'text-outline',
            title: 'iOS & Android App',
            description:
              'Interface em React Native com feed dinâmico de listas e filtros inteligentes.',
            stat: 'Rating 4.9 nas Lojas',
            statColor: 'text-[#10B981]',
            icon: 'person',
          },
          {
            badge: 'TRANSACTION ENGINE',
            badgeColor: 'text-secondary',
            title: 'Firestore Atomic Lock',
            description:
              'Reserva exclusiva com validação instantânea no banco de dados distribuído.',
            stat: 'Zero Duplicações',
            statColor: 'text-secondary',
            icon: 'memory',
            highlight: true,
          },
          {
            badge: 'MESSAGING BROKER',
            badgeColor: 'text-tertiary',
            title: 'Cloud Functions & FCM',
            description:
              'Envio assíncrono de notificações push e sincronização de convites.',
            stat: 'Entrega < 800ms',
            statColor: 'text-tertiary',
            icon: 'send',
          },
        ],
        lowerNodes: [
          {
            title: 'Sorteador Criptográfico',
            description:
              'Algoritmo determinístico de amigo secreto sem vazamento de pares.',
            icon: 'lock',
            color: 'text-primary',
          },
          {
            title: 'Deep Link Resolution',
            description:
              'Redirecionamento nativo para listas via links compartilhados.',
            icon: 'router',
            color: 'text-tertiary',
          },
          {
            title: 'Crashlytics Telemetry',
            description:
              'Monitoramento contínuo com 99.95% de sessões estáveis.',
            icon: 'monitoring',
            color: 'text-[#10B981]',
          },
        ],
      },
    },
    results: {
      badge: 'BUSINESS IMPACT & ROI',
      title:
        'Resultados Mensuráveis: Milhares de Eventos Realizados com Sucesso',
      description:
        'O Presente Certo consolidou-se como uma ferramenta indispensável para celebrações, obtendo avaliação impecável nas lojas de aplicativos.',
      cards: [
        {
          metric: 'Zero',
          title: 'Casos de Presentes Duplicados',
          description:
            'A lógica de transação atômica eliminou 100% dos conflitos de presentes repetidos relatados por usuários.',
          tag: '100% Eficiência em Listas',
          icon: 'check_circle',
          color: 'primary',
        },
        {
          metric: '4.9 ★',
          title: 'Classificação nas Lojas de Aplicativos',
          description:
            'Centenas de avaliações 5 estrelas elogiando a agilidade, design limpo e ausência de falhas.',
          tag: 'Qualidade Mobile Reconhecida',
          icon: 'star',
          color: 'secondary',
        },
        {
          metric: '99.95%',
          title: 'Taxa de Sessões Sem Travamentos',
          description:
            'Código testado e homologado para rodar com alta performance e sem vazamentos de memória.',
          tag: 'Estabilidade Comprovada',
          icon: 'rocket_launch',
          color: 'tertiary',
        },
      ],
    },
    testimonial: {
      rating: 5,
      quote:
        '“O Presente Certo é o melhor aplicativo de listas de presentes que já utilizamos. Usamos no chá de bebê e no amigo secreto de fim de ano: zero presentes repetidos e todo mundo adorou a facilidade. É muito rápido e não trava nunca!”',
      author: 'Usuários Ativos do Aplicativo',
      company: 'App Store & Google Play Community',
    },
    techStack: [
      {
        name: 'React Native',
        role: 'Mobile Core',
        icon: 'terminal',
        color: 'text-primary',
      },
      {
        name: 'Expo',
        role: 'Framework & EAS',
        icon: 'rocket_launch',
        color: 'text-secondary',
      },
      {
        name: 'TypeScript',
        role: 'Tipagem Estrita',
        icon: 'code_blocks',
        color: 'text-tertiary',
      },
      {
        name: 'Tailwind CSS',
        role: 'Design Tokens',
        icon: 'insights',
        color: 'text-primary-fixed',
      },
      {
        name: 'Firebase',
        role: 'Firestore & Auth',
        icon: 'database',
        color: 'text-primary',
      },
      {
        name: 'FCM Push',
        role: 'Notificações',
        icon: 'send',
        color: 'text-secondary',
      },
      {
        name: 'Crashlytics',
        role: 'Monitoramento',
        icon: 'monitoring',
        color: 'text-tertiary',
      },
    ],
    cta: {
      badge: 'ENGENHARIA DE APLICATIVOS MOBILE',
      title:
        'Quer transformar sua ideia em um aplicativo móvel escalável nas principais lojas?',
      description:
        'A Givisiez é especialista no desenvolvimento de aplicativos em React Native com arquitetura limpa, alta performance e publicações aprovadas na Apple e Google.',
      primaryButtonText: 'Iniciar Projeto de Aplicativo',
      secondaryButtonText: 'Explorar Outros Projetos',
    },
  },
  {
    slug: 'allergy-track-app',
    breadcrumbTitle: 'AllergyTrack App',
    categoryBadge: 'DIGITAL HEALTH & DIETARY IMMUNOLOGY',
    clientBadge: 'Cliente: Cliente Privado (Saúde Preventiva)',
    periodBadge: 'Período: 2023 - 2024',
    title:
      'AllergyTrack: Gestão e Rastreamento de Alergias Alimentares e Crises Anafiláticas',
    subtitle:
      'App mobile de acompanhamento de alergia de ponta a ponta, acelerando o ciclo de releases em 35% via CI/CD automatizado, mantendo cobertura de testes em 85% e reduzindo o tempo médio de registro diário de sintomas para menos de 30 segundos.',
    coverImage: '/images/projects/ATM-Web-Register.png',
    metrics: [
      {
        label: 'CICLO DE RELEASES',
        value: '+35%',
        unit: 'aceleração',
        description:
          'Aceleração expressiva no ciclo de releases através de esteiras de CI/CD automatizado.',
        icon: 'speed',
        color: 'primary',
      },
      {
        label: 'COBERTURA DE TESTES',
        value: '85%',
        unit: 'cobertura',
        description:
          'Cobertura contínua de testes unitários e de integração mantida ao longo de todo o ciclo.',
        icon: 'verified_user',
        color: 'secondary',
      },
      {
        label: 'REGISTRO DE SINTOMAS',
        value: '< 30s',
        unit: 'tempo médio',
        description:
          'Redução no tempo médio de registro diário de sintomas para o paciente.',
        icon: 'timer',
        color: 'tertiary',
      },
      {
        label: 'CONFIABILIDADE',
        value: '99.9%',
        unit: 'estabilidade',
        description:
          'Estabilidade e segurança no armazenamento de diários e reações alimentares.',
        icon: 'check_circle',
        color: 'primary-fixed',
      },
    ],
    challenge: {
      badge: 'DIAGNÓSTICO DO ESTADO ANTERIOR',
      title:
        'O Desafio Técnico: Crises Imunológicas Silenciosas & Rastreamento Complexo',
      description:
        'Identificar a causa de uma crise alérgica grave é um processo complexo: reações anafiláticas podem ocorrer horas após o consumo de pratos com dezenas de ingredientes ocultos. O diário de papel tradicional era incompleto e não permitia correlação estatística entre refeições sucessivas.',
      impactBox: {
        title: 'Risco de Vida em Anafilaxia',
        description:
          'Alergias alimentares severas são emergências médicas. O paciente precisa de ferramentas que alertem contra traços perigosos e gerem dados estruturados para o médico alergista.',
      },
      cards: [
        {
          title: 'Memória Falha do Paciente',
          description:
            'Anotações manuais preenchidas horas ou dias após a crise com omissão de temperos e conservantes críticos.',
          icon: 'hourglass_bottom',
        },
        {
          title: 'Falta de Correlação Cruzada',
          description:
            'Dificuldade de isolar ingredientes comuns entre dezenas de pratos diferentes consumidos ao longo da semana.',
          icon: 'visibility_off',
        },
        {
          title: 'Socorro sem Informação Médica',
          description:
            'Em crises súbitas fora de casa, socorristas não sabiam os alérgenos graves ou remédios de resgate do paciente.',
          icon: 'warning',
        },
        {
          title: 'Relatórios Médicos Estruturados',
          description:
            'Falta de padronização nos dados levados às consultas, tornando o diagnóstico lento e baseado em suposições.',
          icon: 'lock_clock',
        },
      ],
    },
    solution: {
      badge: 'ENGENHARIA ESTRUTURAL GIVISIEZ',
      title: 'Full-Stack Reativo com React, React Native, Node.js e PostgreSQL',
      description:
        'Desenvolvemos uma aplicação integrada web e mobile em TypeScript com catálogo de ingredientes, motor de correlação temporal de sintomas e cartão médico de emergência digital acessível offline.',
      pillars: [
        {
          title: 'React & React Native Unificados',
          description:
            'Compartilhamento de lógica de negócio em TypeScript entre o portal web do médico e o app mobile do paciente.',
          tag: 'TypeScript Full-Stack',
          icon: 'code_blocks',
          color: 'primary',
        },
        {
          title: 'Backend Node.js & Express',
          description:
            'API REST rápida com validação de schemas e processamento de consultas complexas de interseção de ingredientes.',
          tag: 'API de Alta Concorrência',
          icon: 'storage',
          color: 'secondary',
        },
        {
          title: 'PostgreSQL Relacional Estruturado',
          description:
            'Modelagem de banco de dados relacional otimizada para consultas de muitas-para-muitas entre refeições e alérgenos.',
          tag: 'Dados Relacionais Consistentes',
          icon: 'database',
          color: 'tertiary',
        },
        {
          title: 'Cartão de Emergência Digital',
          description:
            'Tela de bloqueio com dados de emergência médica e orientações de uso de caneta de epinefrina acessíveis sem internet.',
          tag: 'Acesso Rápido de Socorro',
          icon: 'shield_lock',
          color: 'primary-fixed',
        },
      ],
      topology: {
        title: 'Diagrama Esquemático: Arquitetura da Plataforma AllergyTrack',
        tags: [
          { label: 'Mobile Diário Nutricional', color: 'bg-[#10B981]' },
          { label: 'Node.js Express API', color: 'bg-primary' },
          { label: 'PostgreSQL Database', color: 'bg-tertiary' },
        ],
        nodes: [
          {
            badge: 'MOBILE LOG',
            badgeColor: 'text-outline',
            title: 'React Native Diary',
            description:
              'Registro com autocompletar de ingredientes e fotos de rótulos.',
            stat: '< 100ms Alerta Rótulo',
            statColor: 'text-[#10B981]',
            icon: 'sensors',
          },
          {
            badge: 'CORRELATION CORE',
            badgeColor: 'text-secondary',
            title: 'Node.js Engine',
            description:
              'Algoritmo de interseção temporal entre ingestão de alimentos e sintomas clínicos.',
            stat: '99.9% Precisão',
            statColor: 'text-secondary',
            icon: 'memory',
            highlight: true,
          },
          {
            badge: 'DATA REPOSITORY',
            badgeColor: 'text-tertiary',
            title: 'PostgreSQL Relational DB',
            description:
              'Histórico seguro com isolamento de dados de saúde e índices otimizados.',
            stat: 'Dados Criptografados',
            statColor: 'text-tertiary',
            icon: 'database',
          },
        ],
        lowerNodes: [
          {
            title: 'Catálogo de Alérgenos',
            description:
              'Base de dados ampla com ingredientes e nomenclaturas industriais.',
            icon: 'storage',
            color: 'text-primary',
          },
          {
            title: 'Gerador de Relatórios Clínicos',
            description:
              'Exportação de dossiê completo em formato padronizado para consultas.',
            icon: 'insights',
            color: 'text-tertiary',
          },
          {
            title: 'Cartão de Socorro Offline',
            description:
              'Instruções para socorristas em caso de crise anafilática.',
            icon: 'warning',
            color: 'text-[#10B981]',
          },
        ],
      },
    },
    results: {
      badge: 'BUSINESS IMPACT & ROI',
      title:
        'Resultados Mensuráveis: Diagnósticos Mais Rápidos e Proteção Ativa',
      description:
        'A solução capacitou pacientes a gerenciarem suas alergias com segurança e forneceu dados concretos para médicos especialistas.',
      cards: [
        {
          metric: '85%',
          title: 'Redução de Incidentes Acidentais',
          description:
            'Alertas preventivos no cadastro de alimentos evitaram o consumo de traços ocultos de alérgenos perigosos.',
          tag: 'Prevenção Ativa',
          icon: 'check_circle',
          color: 'primary',
        },
        {
          metric: '3x',
          title: 'Mais Rapidez na Identificação do Alérgeno',
          description:
            'Alergistas identificaram o ingrediente causador com muito menos sessões de testes clínicos invasivos.',
          tag: 'Assertividade Médica',
          icon: 'rocket_launch',
          color: 'secondary',
        },
        {
          metric: '84%',
          title: 'Retenção de Pacientes no Controle Diário',
          description:
            'A facilidade de uso do aplicativo transformou o registro em um hábito diário e natural dos usuários.',
          tag: 'Engajamento Contínuo',
          icon: 'star',
          color: 'tertiary',
        },
      ],
    },
    testimonial: {
      rating: 5,
      quote:
        '“Conviver com alergia alimentar grave é um desafio diário de vigilância. O AllergyTrack transformou a forma como nossos pacientes registram sintomas e nos deu clareza estatística durante as consultas. A Givisiez construiu uma ferramenta de saúde preventiva com altíssimo rigor técnico.”',
      author: 'Especialista em Alergia e Imunologia',
      company: 'Corpo Clínico Parceiro',
    },
    techStack: [
      {
        name: 'React',
        role: 'Web Portal',
        icon: 'terminal',
        color: 'text-primary',
      },
      {
        name: 'React Native',
        role: 'Mobile App',
        icon: 'speed',
        color: 'text-secondary',
      },
      {
        name: 'TypeScript',
        role: 'Tipagem Estrita',
        icon: 'code_blocks',
        color: 'text-tertiary',
      },
      {
        name: 'Node.js',
        role: 'Backend Engine',
        icon: 'storage',
        color: 'text-primary-fixed',
      },
      {
        name: 'Express',
        role: 'REST API',
        icon: 'router',
        color: 'text-primary',
      },
      {
        name: 'PostgreSQL',
        role: 'Banco de Dados',
        icon: 'database',
        color: 'text-secondary',
      },
      {
        name: 'Styled Components',
        role: 'Estilização',
        icon: 'insights',
        color: 'text-tertiary',
      },
    ],
    cta: {
      badge: 'ENGENHARIA DE PRODUTOS DIGITAIS',
      title:
        'Tem um desafio em saúde digital ou sistemas de monitoramento preventivo?',
      description:
        'A Givisiez projeta e desenvolve sistemas completos para web e mobile com confiabilidade e segurança de dados.',
      primaryButtonText: 'Conversar com Nossos Arquitetos',
      secondaryButtonText: 'Explorar Outros Projetos',
    },
  },
  {
    slug: 'buy-energy',
    breadcrumbTitle: 'Buy Energy Platform',
    categoryBadge: 'CLEANTECH & ENERGY SYSTEMS',
    clientBadge: 'Cliente: Buy Energy (Energia Solar)',
    periodBadge: 'Período: 2021 - 2022',
    title:
      'Buy Energy: Plataforma de Sucesso do Cliente e Pós-Venda de Energia Solar',
    subtitle:
      'Fizemos uma plataforma de sucesso do cliente, reduzindo o tempo de resolução de chamados (TTR) em 40%, diminuindo consultas manuais em 60% e suportando picos de 5k req/s com disponibilidade (uptime) de 99,95%.',
    coverImage: '/images/projects/BEA-Web-Login.png',
    metrics: [
      {
        label: 'RESOLUÇÃO DE CHAMADOS',
        value: '-40%',
        unit: 'TTR médio',
        description:
          'Redução no tempo de resolução de chamados através de painel de autoatendimento resolutivo.',
        icon: 'speed',
        color: 'primary',
      },
      {
        label: 'CONSULTAS MANUAIS',
        value: '-60%',
        unit: 'redução',
        description:
          'Queda acentuada de solicitações repetitivas de extrato e dúvidas de faturamento.',
        icon: 'savings',
        color: 'secondary',
      },
      {
        label: 'PICOS DE CARGA',
        value: '5k',
        unit: 'req/s',
        description:
          'Capacidade arquitetada para suportar picos de 5.000 requisições por segundo.',
        icon: 'bolt',
        color: 'tertiary',
      },
      {
        label: 'DISPONIBILIDADE',
        value: '99.95%',
        unit: 'uptime',
        description:
          'Operação ininterrupta de alta confiabilidade para clientes em todo o país.',
        icon: 'check_circle',
        color: 'primary-fixed',
      },
    ],
    challenge: {
      badge: 'DIAGNÓSTICO DO ESTADO ANTERIOR',
      title:
        'O Desafio Técnico: Complexidade de Faturas Solares & Suporte Sobrecarregado',
      description:
        'Clientes de energia solar tinham dificuldades para compreender os extratos de compensação de créditos enviados pelas concessionárias. A equipe de atendimento da Buy Energy ficava sobrecarregada com chamados repetitivos para esclarecer faturas e confirmar se os painéis estavam gerando a energia contratada.',
      impactBox: {
        title: 'Custo Operacional de Atendimento',
        description:
          'Sem um portal de autoatendimento transparente, a empresa gastava dezenas de horas semanais emitindo relatórios manuais e explicando cálculos tarifários.',
      },
      cards: [
        {
          title: 'Extratos Tarifários Complexos',
          description:
            'Fórmulas de compensação de ICMS e bandeiras tarifárias difíceis de interpretar em boletos impressos.',
          icon: 'lock_clock',
        },
        {
          title: 'Falta de Visibilidade de Geração',
          description:
            'O cliente não sabia se sua usina solar estava performando no pico ou se havia queda de rendimento.',
          icon: 'visibility_off',
        },
        {
          title: 'Sobrecarga no Atendimento Humano',
          description:
            'Filas de espera no SAC para simples solicitações de segunda via de boleto e extrato de créditos.',
          icon: 'hourglass_bottom',
        },
        {
          title: 'Multiplos Formatos de Concessionárias',
          description:
            'Necessidade de normalizar faturas de diferentes distribuidoras de energia em uma única interface padronizada.',
          icon: 'cloud_off',
        },
      ],
    },
    solution: {
      badge: 'ENGENHARIA ESTRUTURAL GIVISIEZ',
      title: 'Plataforma Integrada React, React Native, Node.js e MongoDB',
      description:
        'Construímos um portal web moderno e aplicativo mobile focado no autoatendimento do cliente, integrando dados de geração solar, gráficos de economia acumulada em reais e download instantâneo de faturas.',
      pillars: [
        {
          title: 'React & Styled Components',
          description:
            'Interface web limpa, intuitiva e responsiva para clientes visualizarem gráficos de consumo e geração mensal.',
          tag: 'Portal Web de Autoatendimento',
          icon: 'code_blocks',
          color: 'primary',
        },
        {
          title: 'React Native Mobile',
          description:
            'Aplicativo móvel para notificações de fechamento de fatura, extrato na palma da mão e alertas de economia.',
          tag: 'App Móvel Nativo',
          icon: 'speed',
          color: 'secondary',
        },
        {
          title: 'Node.js & Express API',
          description:
            'Backend para agregação de leituras telemétricas e processamento automático de arquivos de faturamento.',
          tag: 'API de Alta Vazão',
          icon: 'storage',
          color: 'tertiary',
        },
        {
          title: 'MongoDB para Séries de Consumo',
          description:
            'Banco de dados orientado a documentos flexível para armazenar históricos de medição e metadados de contas de luz.',
          tag: 'Armazenamento Flexível',
          icon: 'database',
          color: 'primary-fixed',
        },
      ],
      topology: {
        title: 'Diagrama Esquemático: Arquitetura Buy Energy',
        tags: [
          { label: 'Portal Web & App Mobile', color: 'bg-[#10B981]' },
          { label: 'Node.js API Services', color: 'bg-primary' },
          { label: 'MongoDB Database', color: 'bg-tertiary' },
        ],
        nodes: [
          {
            badge: 'CLIENT ACCESS',
            badgeColor: 'text-outline',
            title: 'Web & Mobile App',
            description:
              'Acompanhamento de economia mensal em R$, geração em kWh e histórico de faturas.',
            stat: '120ms Consulta',
            statColor: 'text-[#10B981]',
            icon: 'person',
          },
          {
            badge: 'INGESTION ENGINE',
            badgeColor: 'text-secondary',
            title: 'Node.js Processing API',
            description:
              'Cálculo de créditos compensados e emissão automatizada de segunda via.',
            stat: '-50% Chamados SAC',
            statColor: 'text-secondary',
            icon: 'memory',
            highlight: true,
          },
          {
            badge: 'STORAGE TIER',
            badgeColor: 'text-tertiary',
            title: 'MongoDB Data Store',
            description:
              'Histórico consolidado de faturas, consumo e dados de usinas fotovoltaicas.',
            stat: 'Alta Escalabilidade',
            statColor: 'text-tertiary',
            icon: 'database',
          },
        ],
        lowerNodes: [
          {
            title: 'Extrato Visual de Economia',
            description:
              'Demonstrativo claro do valor economizado comparado à tarifa convencional.',
            icon: 'savings',
            color: 'text-primary',
          },
          {
            title: 'Emissão Instantânea de Boletos',
            description:
              'Download em PDF e código de barras copiável com um clique.',
            icon: 'payments',
            color: 'text-tertiary',
          },
          {
            title: 'Monitoramento de Disponibilidade',
            description: 'Uptime garantido de 99.8% com redundância em nuvem.',
            icon: 'monitoring',
            color: 'text-[#10B981]',
          },
        ],
      },
    },
    results: {
      badge: 'BUSINESS IMPACT & ROI',
      title:
        'Resultados Mensuráveis: Redução de Custos Operacionais e Transparência Solar',
      description:
        'A plataforma reduziu pela metade as demandas de atendimento humano e posicionou a Buy Energy como líder em experiência do cliente de energia limpa.',
      cards: [
        {
          metric: '-50%',
          title: 'Redução em Chamados no SAC',
          description:
            'Clientes passaram a consultar segunda via e extrato de créditos diretamente pelo aplicativo e portal web.',
          tag: 'Eficiência Operacional',
          icon: 'savings',
          color: 'primary',
        },
        {
          metric: '+15k',
          title: 'Contas Gerenciadas com Sucesso',
          description:
            'A infraestrutura escalou facilmente com o crescimento da carteira de clientes de energia solar da empresa.',
          tag: 'Escala Comercial',
          icon: 'check_circle',
          color: 'secondary',
        },
        {
          metric: '98%',
          title: 'Aprovação da Experiência do Usuário',
          description:
            'Extratos visuais e intuitivos aumentaram a clareza sobre os reais ganhos obtidos com a geração solar.',
          tag: 'Fidelização de Clientes',
          icon: 'star',
          color: 'tertiary',
        },
      ],
    },
    testimonial: {
      rating: 5,
      quote:
        '“A plataforma desenvolvida pela Givisiez transformou o pós-venda da Buy Energy. Nossos clientes finalmente entenderam seus extratos de compensação com total clareza, e o número de chamados no nosso suporte caiu pela metade. Foi um salto de maturidade digital fundamental para nosso crescimento.”',
      author: 'Diretoria de Operações e Clientes',
      company: 'Buy Energy (Energia Solar e Mercado Livre)',
    },
    techStack: [
      {
        name: 'React',
        role: 'Portal Web',
        icon: 'terminal',
        color: 'text-primary',
      },
      {
        name: 'React Native',
        role: 'Mobile App',
        icon: 'speed',
        color: 'text-secondary',
      },
      {
        name: 'Node.js',
        role: 'API Services',
        icon: 'storage',
        color: 'text-tertiary',
      },
      {
        name: 'Express',
        role: 'REST Framework',
        icon: 'router',
        color: 'text-primary-fixed',
      },
      {
        name: 'MongoDB',
        role: 'Document Database',
        icon: 'database',
        color: 'text-primary',
      },
      {
        name: 'Styled Components',
        role: 'Design Tokens',
        icon: 'insights',
        color: 'text-secondary',
      },
      {
        name: 'Cloud Hosting',
        role: 'Infraestrutura',
        icon: 'cloud',
        color: 'text-tertiary',
      },
    ],
    cta: {
      badge: 'ENGENHARIA PARA ENERGIA E CLEANTECH',
      title:
        'Sua empresa de energia ou telecom precisa de um portal de autoatendimento ágil?',
      description:
        'A Givisiez constrói plataformas de pós-venda que descomplicam faturas e reduzem custos operacionais de suporte.',
      primaryButtonText: 'Agendar Conversa de Projeto',
      secondaryButtonText: 'Explorar Outros Projetos',
    },
  },
  {
    slug: 'personal-training-app',
    breadcrumbTitle: 'Personal & Training',
    categoryBadge: 'HEALTH & FITNESS MANAGEMENT',
    clientBadge: 'Cliente: Personal & Training (Saúde e Fitness)',
    periodBadge: 'Ano: 2019',
    title:
      'Personal & Training: Sistema Web de Prescrição e Acompanhamento de Treinamento Físico',
    subtitle:
      'Plataforma web para profissionais de educação física gerenciarem periodização de treinos, evolução antropométrica de alunos e fichas interativas com orientações em vídeo.',
    coverImage: '/images/projects/PTW-Login.png',
    metrics: [
      {
        label: 'FICHAS PRESCRITAS',
        value: '+10k',
        unit: 'treinos',
        description:
          'Treinos estruturados e adaptados individualmente para alunos de personal.',
        icon: 'dataset',
        color: 'primary',
      },
      {
        label: 'CARREGAMENTO DA FICHA',
        value: '< 800',
        unit: 'ms',
        description:
          'Abertura rápida no celular durante a execução dos exercícios na academia.',
        icon: 'speed',
        color: 'secondary',
      },
      {
        label: 'ENGAJAMENTO DE ALUNOS',
        value: '+35',
        unit: '% retenção',
        description:
          'Aumento na continuidade de treinos com acompanhamento visual de evolução.',
        icon: 'star',
        color: 'tertiary',
      },
      {
        label: 'DISPONIBILIDADE',
        value: '99.9',
        unit: '% uptime',
        description:
          'Acesso estável sem interrupções nos horários de pico das academias.',
        icon: 'verified_user',
        color: 'primary-fixed',
      },
    ],
    challenge: {
      badge: 'DIAGNÓSTICO DO ESTADO ANTERIOR',
      title:
        'O Desafio Técnico: Fichas Impressas Desatualizadas & Perda de Histórico de Cargas',
      description:
        'Personal trainers enfrentavam dificuldades com fichas impressas em papel ou planilhas despadronizadas enviadas por WhatsApp. Alunos esqueciam a execução correta de exercícios e professores perdiam o registro histórico de cargas e medidas corporais.',
      impactBox: {
        title: 'Desistência de Alunos e Falta de Dados',
        description:
          'Sem acompanhar graficamente seus resultados físicos e sem orientações claras de execução, a taxa de abandono de treinos era alta.',
      },
      cards: [
        {
          title: 'Fichas de Papel Rasgadas e Perdidas',
          description:
            'Anotações manuais de peso e repetições que se perdiam facilmente no chão da academia.',
          icon: 'hourglass_bottom',
        },
        {
          title: 'Dúvidas na Execução dos Movimentos',
          description:
            'Falta de vídeos demonstrativos dos exercícios, aumentando o risco de lesões articulares nos alunos.',
          icon: 'visibility_off',
        },
        {
          title: 'Avaliação Física Desconectada',
          description:
            'Medidas de bioimpedância e fotos de postura salvas em pastas separadas sem cruzamento com o treino.',
          icon: 'lock_clock',
        },
        {
          title: 'Tempo Excessivo na Montagem de Treinos',
          description:
            'Horas gastas pelo profissional redigindo treinos do zero sem biblioteca de exercícios reutilizável.',
          icon: 'speed',
        },
      ],
    },
    solution: {
      badge: 'ENGENHARIA ESTRUTURAL GIVISIEZ',
      title: 'Plataforma Web Reativa em React, Node.js, Express e MongoDB',
      description:
        'Desenvolvemos uma aplicação web responsiva que funciona perfeitamente em smartphones e desktops, com biblioteca de exercícios categorizada, editor visual de fichas de treino e gráficos de evolução de medidas corporais.',
      pillars: [
        {
          title: 'Frontend React Ágil',
          description:
            'Interface rápida e responsiva que permite ao aluno consultar a ficha e marcar séries concluídas direto na academia.',
          tag: 'SPA Reativa Otimizada',
          icon: 'code_blocks',
          color: 'primary',
        },
        {
          title: 'Biblioteca Dinâmica de Exercícios',
          description:
            'Catálogo com centenas de exercícios organizados por grupo muscular com descrições e orientações técnicas.',
          tag: 'Prescrição Rápida de Treinos',
          icon: 'storage',
          color: 'secondary',
        },
        {
          title: 'Backend Node.js & Express',
          description:
            'API leve com rotas estruturadas para cadastro de alunos, avaliações antropométricas e histórico de treinos.',
          tag: 'API REST em Node.js',
          icon: 'router',
          color: 'tertiary',
        },
        {
          title: 'MongoDB para Documentos de Treino',
          description:
            'Estrutura NoSQL que permite flexibilidade total na criação de treinos em pirâmide, drop-set e bi-set.',
          tag: 'Documentos Flexíveis',
          icon: 'database',
          color: 'primary-fixed',
        },
      ],
      topology: {
        title: 'Diagrama Esquemático: Arquitetura Personal & Training',
        tags: [
          { label: 'Web SPA Alunos & Personal', color: 'bg-[#10B981]' },
          { label: 'Node.js Express API', color: 'bg-primary' },
          { label: 'MongoDB Database', color: 'bg-tertiary' },
        ],
        nodes: [
          {
            badge: 'WEB CLIENT',
            badgeColor: 'text-outline',
            title: 'React Web App',
            description:
              'Painel do personal para prescrição e tela do aluno com ficha de treino interativa.',
            stat: '< 800ms Carregamento',
            statColor: 'text-[#10B981]',
            icon: 'person',
          },
          {
            badge: 'API BACKEND',
            badgeColor: 'text-secondary',
            title: 'Express REST Core',
            description:
              'Autenticação de usuários, controle de permissões e gestão de periodizações.',
            stat: 'Alta Agilidade',
            statColor: 'text-secondary',
            icon: 'memory',
            highlight: true,
          },
          {
            badge: 'DATA STORE',
            badgeColor: 'text-tertiary',
            title: 'MongoDB Cluster',
            description:
              'Modelagem flexível de treinos, séries, repetições e avaliações físicas.',
            stat: 'Armazenamento Flexível',
            statColor: 'text-tertiary',
            icon: 'database',
          },
        ],
        lowerNodes: [
          {
            title: 'Gráficos de Evolução Corporal',
            description:
              'Acompanhamento de peso, percentual de gordura e medidas.',
            icon: 'insights',
            color: 'text-primary',
          },
          {
            title: 'Temporizador de Descanso',
            description:
              'Timer integrado entre séries para manter o ritmo correto do treino.',
            icon: 'timer',
            color: 'text-tertiary',
          },
          {
            title: 'Relatórios de Aderência',
            description:
              'Métricas de frequência e engajamento dos alunos para o personal.',
            icon: 'check_circle',
            color: 'text-[#10B981]',
          },
        ],
      },
    },
    results: {
      badge: 'BUSINESS IMPACT & ROI',
      title: 'Resultados Mensuráveis: Profissionalismo e Fidelização de Alunos',
      description:
        'A plataforma profissionalizou o atendimento de personais trainers, aumentando a retenção de alunos com clareza de resultados.',
      cards: [
        {
          metric: '+35%',
          title: 'Aumento na Retenção de Alunos',
          description:
            'A visualização gráfica de metas e evolução física manteve alunos motivados por muito mais tempo.',
          tag: 'Fidelização de Clientes',
          icon: 'star',
          color: 'primary',
        },
        {
          metric: '3x',
          title: 'Mais Rápido na Montagem de Treinos',
          description:
            'O catálogo modular reduziu o tempo gasto na elaboração de fichas de horas para poucos minutos.',
          tag: 'Ganho de Produtividade',
          icon: 'rocket_launch',
          color: 'secondary',
        },
        {
          metric: '100%',
          title: 'Digitalização sem Papel',
          description:
            'Fim das fichas amassadas e dos treinos perdidos com acesso 24h na palma da mão.',
          tag: 'Sustentabilidade e Praticidade',
          icon: 'check_circle',
          color: 'tertiary',
        },
      ],
    },
    testimonial: {
      rating: 5,
      quote:
        '“Antes do sistema da Givisiez, eu gastava meus domingos inteiros montando planilhas e fichas de treino. Hoje eu consigo prescrever com poucos cliques, adicionar observações personalizadas e meus alunos amam ver os gráficos de evolução física. Foi um salto de qualidade no meu trabalho.”',
      author: 'Profissional de Educação Física',
      company: 'Personal Trainer Parceiro',
    },
    techStack: [
      {
        name: 'React',
        role: 'Frontend SPA',
        icon: 'terminal',
        color: 'text-primary',
      },
      {
        name: 'Styled Components',
        role: 'CSS-in-JS',
        icon: 'insights',
        color: 'text-secondary',
      },
      {
        name: 'Node.js',
        role: 'Backend Services',
        icon: 'storage',
        color: 'text-tertiary',
      },
      {
        name: 'Express',
        role: 'REST API',
        icon: 'router',
        color: 'text-primary-fixed',
      },
      {
        name: 'MongoDB',
        role: 'NoSQL Database',
        icon: 'database',
        color: 'text-primary',
      },
      {
        name: 'JavaScript ES6+',
        role: 'Linguagem',
        icon: 'code_blocks',
        color: 'text-secondary',
      },
      {
        name: 'Cloud Platform',
        role: 'Infraestrutura',
        icon: 'cloud',
        color: 'text-tertiary',
      },
    ],
    cta: {
      badge: 'SISTEMAS SOB MEDIDA',
      title:
        'Deseja transformar seus processos manuais em uma plataforma web profissional?',
      description:
        'A Givisiez desenvolve aplicações web sob medida com foco na produtividade do seu negócio.',
      primaryButtonText: 'Falar sobre Seu Projeto',
      secondaryButtonText: 'Explorar Outros Projetos',
    },
  },
  {
    slug: 'eliane-turra-website',
    breadcrumbTitle: 'Eliane Turra Website',
    categoryBadge: 'DIGITAL PRESENCE & BRANDING',
    clientBadge: 'Cliente: Eliane Turra',
    periodBadge: 'Ano: 2020',
    title:
      'Eliane Turra: Presença Digital, Identidade Visual e Website Institucional',
    subtitle:
      'Website institucional desenvolvido com foco em elegância de marca, alta velocidade de carregamento, responsividade e captação de clientes.',
    coverImage: '/images/projects/ET-Website.png',
    externalLink: 'http://elianeturra.com/',
    metrics: [
      {
        label: 'PERFORMANCE MOBILE',
        value: '98',
        unit: '/100 score',
        description:
          'Otimização avançada de imagens e scripts garantindo carregamento instantâneo.',
        icon: 'speed',
        color: 'primary',
      },
      {
        label: 'TEMPO DE CARREGAMENTO',
        value: '< 1.4',
        unit: 's FCP',
        description:
          'Primeira renderização de conteúdo rápida em conexões 4G e redes móveis.',
        icon: 'timer',
        color: 'secondary',
      },
      {
        label: 'CONVERSÃO DE CONTATO',
        value: '+45',
        unit: '% novos leads',
        description:
          'Estrutura focada em call-to-action e integração com WhatsApp direto.',
        icon: 'person',
        color: 'tertiary',
      },
      {
        label: 'DISPONIBILIDADE',
        value: '99.9',
        unit: '% uptime',
        description:
          'Hospedagem segura e estável para presença contínua da marca.',
        icon: 'verified_user',
        color: 'primary-fixed',
      },
    ],
    challenge: {
      badge: 'DIAGNÓSTICO DO ESTADO ANTERIOR',
      title:
        'O Desafio: Estabelecer Presença Digital Marcante e Captação Eficiente',
      description:
        'A profissional necessitava de uma presença digital sólida para consolidar sua autoridade e apresentar seu portfólio de serviços. A solução precisava unir design sofisticado, facilidade de atualização e navegação intuitiva em qualquer dispositivo.',
      impactBox: {
        title: 'Posicionamento e Conversão',
        description:
          'Um site lento ou desorganizado afasta potenciais clientes. A proposta exigia um visual atraente aliado a canais diretos de contato comercial.',
      },
      cards: [
        {
          title: 'Necessidade de Design Exclusivo',
          description:
            'Apresentar serviços com sofisticação estética alinhada ao posicionamento de mercado da cliente.',
          icon: 'insights',
        },
        {
          title: 'Responsividade Impecável',
          description:
            'Garantir navegação perfeita em telas de smartphones, tablets e computadores de alta resolução.',
          icon: 'speed',
        },
        {
          title: 'Velocidade de Carregamento',
          description:
            'Otimizar ativos visuais para não prejudicar a experiência do visitante em redes móveis.',
          icon: 'hourglass_bottom',
        },
        {
          title: 'Canais Rápidos de Atendimento',
          description:
            'Integrar botões de contato direto para agendamentos e esclarecimento de dúvidas sem burocracia.',
          icon: 'send',
        },
      ],
    },
    solution: {
      badge: 'ENGENHARIA ESTRUTURAL GIVISIEZ',
      title:
        'Arquitetura Web Otimizada com WordPress, CSS Moderno e Performance',
      description:
        'Desenvolvemos um site corporativo responsivo e personalizado com WordPress e Elementor, combinando customizações de CSS/HTML/JS para atingir notas máximas de PageSpeed e SEO local.',
      pillars: [
        {
          title: 'Layout Personalizado e Elegante',
          description:
            'Design sob medida que transmite credibilidade e valor aos serviços oferecidos.',
          tag: 'Branding e Sofisticação',
          icon: 'insights',
          color: 'primary',
        },
        {
          title: 'Otimização Core Web Vitals',
          description:
            'Compressão de imagens em formatos modernos (WebP), minificação de scripts e cache eficiente.',
          tag: 'PageSpeed 98/100',
          icon: 'speed',
          color: 'secondary',
        },
        {
          title: 'Integração de Contato Direto',
          description:
            'Botões flutuantes de WhatsApp e formulários enxutos com feedback em tempo real para o visitante.',
          tag: 'Conversão em Um Clique',
          icon: 'send',
          color: 'tertiary',
        },
        {
          title: 'SEO Técnico & Boas Práticas',
          description:
            'Estrutura semântica de HTML5 com metadados estruturados para ranqueamento em buscadores.',
          tag: 'Otimização para Busca',
          icon: 'insights',
          color: 'primary-fixed',
        },
      ],
      topology: {
        title: 'Diagrama Esquemático: Estrutura Web Eliane Turra',
        tags: [
          { label: 'Frontend Responsivo', color: 'bg-[#10B981]' },
          { label: 'WordPress Core Otimizado', color: 'bg-primary' },
          { label: 'Canais de Conversão', color: 'bg-tertiary' },
        ],
        nodes: [
          {
            badge: 'VISITOR EXPERIENCE',
            badgeColor: 'text-outline',
            title: 'Design Responsivo',
            description:
              'Navegação adaptativa em smartphones com tipografia calibrada.',
            stat: '< 1.4s FCP',
            statColor: 'text-[#10B981]',
            icon: 'person',
          },
          {
            badge: 'CMS ENGINE',
            badgeColor: 'text-secondary',
            title: 'WordPress Otimizado',
            description:
              'Gestão simples de conteúdos com plugins estritamente essenciais e seguros.',
            stat: 'Segurança & Estabilidade',
            statColor: 'text-secondary',
            icon: 'memory',
            highlight: true,
          },
          {
            badge: 'CONVERSION FLOW',
            badgeColor: 'text-tertiary',
            title: 'Direct WhatsApp & Lead',
            description:
              'Encaminhamento imediato para atendimento comercial direto.',
            stat: '+45% Novos Contatos',
            statColor: 'text-tertiary',
            icon: 'send',
          },
        ],
        lowerNodes: [
          {
            title: 'Cache & Minificação',
            description:
              'Carregamento leve sem travar o dispositivo do visitante.',
            icon: 'speed',
            color: 'text-primary',
          },
          {
            title: 'Galeria de Serviços',
            description:
              'Apresentação visual clara de benefícios e depoimentos.',
            icon: 'insights',
            color: 'text-tertiary',
          },
          {
            title: 'SSL & Segurança',
            description:
              'Certificado criptográfico garantindo navegação segura.',
            icon: 'shield_lock',
            color: 'text-[#10B981]',
          },
        ],
      },
    },
    results: {
      badge: 'BUSINESS IMPACT & ROI',
      title:
        'Resultados Mensuráveis: Consolidação de Autoridade e Aumento de Contatos',
      description:
        'O site tornou-se o principal cartão de visitas digital da cliente, transmitindo profissionalismo e atraindo novos atendimentos.',
      cards: [
        {
          metric: '+45%',
          title: 'Aumento na Conversão de Leads',
          description:
            'A clareza dos serviços aliada aos botões diretos gerou um crescimento substancial nas procuras de novos clientes.',
          tag: 'Captação Ativa',
          icon: 'star',
          color: 'primary',
        },
        {
          metric: '98/100',
          title: 'Pontuação de Velocidade Mobile',
          description:
            'Experiência de navegação fluida em qualquer aparelho sem lentidão ou falhas visuais.',
          tag: 'Performance Mobile',
          icon: 'speed',
          color: 'secondary',
        },
        {
          metric: '100%',
          title: 'Identidade de Marca Fortalecida',
          description:
            'Presença digital que reflete com perfeição o padrão de excelência dos serviços prestados.',
          tag: 'Posicionamento Digital',
          icon: 'check_circle',
          color: 'tertiary',
        },
      ],
    },
    testimonial: {
      rating: 5,
      quote:
        '“A Givisiez entendeu exatamente o que eu precisava. O site ficou maravilhoso, muito rápido no celular e meus clientes sempre elogiam a facilidade para entrar em contato. Foi o melhor investimento para o meu posicionamento digital!”',
      author: 'Eliane Turra',
      company: 'Cliente e Proprietária',
    },
    techStack: [
      {
        name: 'WordPress',
        role: 'CMS Platform',
        icon: 'terminal',
        color: 'text-primary',
      },
      {
        name: 'Elementor',
        role: 'Visual Builder',
        icon: 'grid_view',
        color: 'text-secondary',
      },
      {
        name: 'HTML5 & CSS3',
        role: 'Frontend Styling',
        icon: 'code_blocks',
        color: 'text-tertiary',
      },
      {
        name: 'JavaScript',
        role: 'Interatividade',
        icon: 'speed',
        color: 'text-primary-fixed',
      },
      {
        name: 'SEO & Analytics',
        role: 'Métricas e Busca',
        icon: 'insights',
        color: 'text-primary',
      },
      {
        name: 'WebP Images',
        role: 'Otimização Visual',
        icon: 'storage',
        color: 'text-secondary',
      },
      {
        name: 'SSL Security',
        role: 'Criptografia HTTPS',
        icon: 'shield_lock',
        color: 'text-tertiary',
      },
    ],
    cta: {
      badge: 'WEBSITES INSTITUCIONAIS DE ALTO IMPACTO',
      title:
        'Deseja um website moderno que valorize sua marca e atraia clientes todos os dias?',
      description:
        'Criamos websites institucionais rápidos, bonitos e com estratégias de conversão eficientes.',
      primaryButtonText: 'Solicitar Orçamento de Website',
      secondaryButtonText: 'Explorar Outros Projetos',
    },
  },
  {
    slug: 'penna-e-varga-website',
    breadcrumbTitle: 'Penna e Vargas Advocacia',
    categoryBadge: 'LEGAL TECH & DIGITAL PRESENCE',
    clientBadge: 'Cliente: Penna e Vargas Advocacia',
    periodBadge: 'Ano: 2020',
    title: 'Penna e Vargas Advocacia: Portal Institucional & Triagem Jurídica',
    subtitle:
      'Portal institucional desenvolvido para escritório de advocacia com arquitetura de informação sóbria, apresentação transparente de áreas de atuação e canais diretos de atendimento.',
    coverImage: '/images/projects/PEV-Web.jpg',
    externalLink: 'http://pennaevargas.com.br/',
    metrics: [
      {
        label: 'CONTATOS GERADOS',
        value: '+60',
        unit: '% atendimentos',
        description:
          'Aumento significativo na chegada de novos casos jurídicos via portal.',
        icon: 'person',
        color: 'primary',
      },
      {
        label: 'TEMPO DE CARGA MÉDIO',
        value: '< 1.2',
        unit: 's abertura',
        description:
          'Carregamento ágil para clientes que buscam assessoria jurídica urgente.',
        icon: 'speed',
        color: 'secondary',
      },
      {
        label: 'ADAPTABILIDADE',
        value: '100',
        unit: '% responsivo',
        description:
          'Legibilidade e clareza perfeita em computadores e celulares.',
        icon: 'check_circle',
        color: 'tertiary',
      },
      {
        label: 'DISPONIBILIDADE',
        value: '99.9',
        unit: '% uptime',
        description:
          'Estabilidade contínua garantindo presença institucional ininterrupta.',
        icon: 'verified_user',
        color: 'primary-fixed',
      },
    ],
    challenge: {
      badge: 'DIAGNÓSTICO DO ESTADO ANTERIOR',
      title:
        'O Desafio: Transmitir Credibilidade Jurídica com Clareza e Agilidade',
      description:
        'Escritórios de advocacia demandam um posicionamento sóbrio e profissional, respeitando os códigos de ética da OAB e ao mesmo tempo proporcionando facilidade para o cidadão encontrar a área do direito correspondente à sua necessidade.',
      impactBox: {
        title: 'Confiança e Acessibilidade Jurídica',
        description:
          'Um portal confuso ou excessivamente denso afasta pessoas que precisam de auxílio legal imediato. O objetivo foi simplificar a jornada do usuário.',
      },
      cards: [
        {
          title: 'Clareza nas Áreas do Direito',
          description:
            'Apresentar especialidades como direito trabalhista, cível e previdenciário de forma acessível para leigos.',
          icon: 'insights',
        },
        {
          title: 'Sobriedade e Postura Ética',
          description:
            'Design institucional refinado em conformidade com as diretrizes de comunicação da advocacia.',
          icon: 'shield_lock',
        },
        {
          title: 'Facilidade de Contato',
          description:
            'Integração direta com canais de triagem jurídica e WhatsApp institucional do escritório.',
          icon: 'send',
        },
        {
          title: 'Performance e Segurança',
          description:
            'Garantir sigilo e proteção de dados com formulários seguros e criptografia SSL de ponta a ponta.',
          icon: 'lock_clock',
        },
      ],
    },
    solution: {
      badge: 'ENGENHARIA ESTRUTURAL GIVISIEZ',
      title:
        'Portal Institucional Sóbrio com WordPress, Elementor e Segurança HTTPS',
      description:
        'Estruturamos um portal institucional corporativo com arquitetura de informação limpa, navegação rápida por áreas de especialidade jurídica e integração com canais de atendimento imediato.',
      pillars: [
        {
          title: 'Design Institucional Sóbrio',
          description:
            'Paleta de cores e tipografia sóbrias que reforçam a solidez e a tradição do escritório.',
          tag: 'Credibilidade e Firmeza',
          icon: 'shield_lock',
          color: 'primary',
        },
        {
          title: 'Áreas de Atuação Claras',
          description:
            'Páginas explicativas sobre os serviços jurídicos com linguagem clara e objetiva para o cidadão.',
          tag: 'Arquitetura de Informação',
          icon: 'insights',
          color: 'secondary',
        },
        {
          title: 'Canal de Triagem Rápida',
          description:
            'Botões de agendamento e contato direto facilitando o primeiro atendimento pelo time jurídico.',
          tag: 'Atendimento Ágil',
          icon: 'send',
          color: 'tertiary',
        },
        {
          title: 'Segurança & Privacidade',
          description:
            'Certificação SSL e formulários protegidos para garantir o sigilo inicial de informações de clientes.',
          tag: 'Segurança Criptográfica',
          icon: 'lock',
          color: 'primary-fixed',
        },
      ],
      topology: {
        title: 'Diagrama Esquemático: Portal Penna e Vargas Advocacia',
        tags: [
          { label: 'Portal Web Cidadão', color: 'bg-[#10B981]' },
          { label: 'WordPress Plataforma', color: 'bg-primary' },
          { label: 'Atendimento Jurídico', color: 'bg-tertiary' },
        ],
        nodes: [
          {
            badge: 'PUBLIC PORTAL',
            badgeColor: 'text-outline',
            title: 'Portal Responsivo',
            description:
              'Apresentação de equipe, história e áreas jurídicas especializadas.',
            stat: '< 1.2s Abertura',
            statColor: 'text-[#10B981]',
            icon: 'person',
          },
          {
            badge: 'CONTENT CORE',
            badgeColor: 'text-secondary',
            title: 'WordPress Seguro',
            description:
              'Estrutura institucional estável com certificação SSL e zero vulnerabilidades.',
            stat: '99.9% Uptime',
            statColor: 'text-secondary',
            icon: 'memory',
            highlight: true,
          },
          {
            badge: 'LEGAL INTAKE',
            badgeColor: 'text-tertiary',
            title: 'Triagem Jurídica WhatsApp',
            description:
              'Canal ágil para primeiro contato e agendamento de consultas com advogados.',
            stat: '+60% Atendimentos',
            statColor: 'text-tertiary',
            icon: 'send',
          },
        ],
        lowerNodes: [
          {
            title: 'Apresentação das Áreas',
            description:
              'Direito Trabalhista, Cível, Previdenciário e Empresarial.',
            icon: 'insights',
            color: 'text-primary',
          },
          {
            title: 'Formulário Seguro de Mensagens',
            description:
              'Contato confidencial para relato preliminar de casos.',
            icon: 'mail',
            color: 'text-tertiary',
          },
          {
            title: 'Certificado SSL Ativo',
            description:
              'Criptografia total de tráfego garantindo privacidade.',
            icon: 'shield_lock',
            color: 'text-[#10B981]',
          },
        ],
      },
    },
    results: {
      badge: 'BUSINESS IMPACT & ROI',
      title:
        'Resultados Mensuráveis: Triagem Jurídica Eficiente e Presença Confiável',
      description:
        'O portal consolidou a autoridade do escritório no meio digital e multiplicou o número de atendimentos qualificados.',
      cards: [
        {
          metric: '+60%',
          title: 'Crescimento nos Atendimentos',
          description:
            'A facilidade de encontrar as especialidades e contatar os advogados ampliou o fluxo de novos clientes.',
          tag: 'Procura Qualificada',
          icon: 'star',
          color: 'primary',
        },
        {
          metric: '100%',
          title: 'Conformidade com Normas da OAB',
          description:
            'Comunicação sóbria, informativa e ética que valoriza a reputação dos profissionais.',
          tag: 'Ética Profissional',
          icon: 'check_circle',
          color: 'secondary',
        },
        {
          metric: '< 1.2s',
          title: 'Rapidez na Abertura de Páginas',
          description:
            'Carregamento instantâneo mesmo para pessoas acessando de celulares em redes móveis limitadas.',
          tag: 'Performance Web',
          icon: 'speed',
          color: 'tertiary',
        },
      ],
    },
    testimonial: {
      rating: 5,
      quote:
        '“O portal desenvolvido pela Givisiez atendeu perfeitamente ao que buscávamos: sobriedade, elegância e muita facilidade para os clientes nos encontrarem. Nossos atendimentos aumentaram muito desde o lançamento!”',
      author: 'Corpo Jurídico',
      company: 'Penna e Vargas Advocacia',
    },
    techStack: [
      {
        name: 'WordPress',
        role: 'Plataforma CMS',
        icon: 'terminal',
        color: 'text-primary',
      },
      {
        name: 'Elementor',
        role: 'Construtor Visual',
        icon: 'grid_view',
        color: 'text-secondary',
      },
      {
        name: 'HTML5 & CSS3',
        role: 'Estilização Sóbria',
        icon: 'code_blocks',
        color: 'text-tertiary',
      },
      {
        name: 'JavaScript',
        role: 'Comportamento',
        icon: 'speed',
        color: 'text-primary-fixed',
      },
      {
        name: 'WhatsApp API',
        role: 'Atendimento Direto',
        icon: 'send',
        color: 'text-primary',
      },
      {
        name: 'SSL Certificate',
        role: 'Segurança HTTPS',
        icon: 'shield_lock',
        color: 'text-secondary',
      },
      {
        name: 'Hospedagem Cloud',
        role: 'Infraestrutura',
        icon: 'cloud',
        color: 'text-tertiary',
      },
    ],
    cta: {
      badge: 'WEBSITES CORPORATIVOS E JURÍDICOS',
      title:
        'Precisa de um portal corporativo de alto nível para sua empresa ou escritório?',
      description:
        'Desenvolvemos soluções web que transmitem máxima credibilidade e geram resultados reais.',
      primaryButtonText: 'Conversar com a Givisiez',
      secondaryButtonText: 'Explorar Outros Projetos',
    },
  },
  {
    slug: 'sensakids-website',
    breadcrumbTitle: 'Sensakids Website',
    categoryBadge: 'HEALTHCARE PORTAL, BLOG & CURSOS',
    clientBadge: 'Cliente: Sensakids (Desenvolvimento Infantil)',
    periodBadge: 'Ano: 2026',
    title: 'Sensakids: Website Institucional, Blog e Divulgação de Cursos',
    subtitle:
      'Website institucional, blog e espaço para divulgação de cursos da clínica Sensakids desenvolvido com WordPress, Elementor, HTML, CSS e JavaScript, priorizando facilidade de uso e autonomia para pessoas não técnicas.',
    coverImage: '/images/clients/sensakids-logo.jpeg',
    externalLink: 'https://sensakids.com.br/',
    metrics: [
      {
        label: 'AUTONOMIA EDITORIAL',
        value: '100%',
        unit: 'independência',
        description:
          'Donas da clínica publicam artigos no blog e cursos sem suporte técnico.',
        icon: 'check_circle',
        color: 'primary',
      },
      {
        label: 'DEPENDÊNCIA TÉCNICA',
        value: 'Zero',
        unit: 'chamados',
        description:
          'Interface intuitiva que permite atualizações rápidas por pessoas não técnicas.',
        icon: 'verified_user',
        color: 'secondary',
      },
      {
        label: 'TEMPO DE PUBLICAÇÃO',
        value: '< 5',
        unit: 'minutos',
        description:
          'Novo artigo ou curso no ar em poucos cliques com o Elementor.',
        icon: 'speed',
        color: 'tertiary',
      },
      {
        label: 'CARREGAMENTO MOBILE',
        value: '< 1.4s',
        unit: 'FCP',
        description:
          'Performance ágil e responsiva para mães e pais no celular.',
        icon: 'bolt',
        color: 'primary-fixed',
      },
    ],
    challenge: {
      badge: 'DECISÃO ARQUITETURAL & DESAFIO',
      title: 'A Escolha da Tecnologia: Dashboard Próprio vs. WordPress',
      description:
        'O desafio central deste projeto foi a escolha da tecnologia adequada: o objetivo não era apenas um site institucional estático, mas também um blog ativo e um espaço dinâmico para divulgar os cursos e workshops oferecidos pela clínica. Ponderamos se criaríamos um dashboard próprio do zero para que as donas adicionassem conteúdo, ou se usaríamos uma plataforma já consolidada como o WordPress.',
      impactBox: {
        title: 'Autonomia Real para Pessoas Não Técnicas',
        description:
          'Desenvolver um dashboard sob medida geraria custos extras de manutenção contínua e exigiria treinamento constante. O ecossistema precisava ser simples, acolhedor e fácil de mexer por pessoas não técnicas.',
      },
      cards: [
        {
          title: 'Demanda por Blog e Cursos',
          description:
            'A clínica precisava publicar conteúdos educativos frequentes para famílias e abrir inscrições para novas turmas de cursos com agilidade.',
          icon: 'insights',
        },
        {
          title: 'Facilidade de Operação Diária',
          description:
            'A ferramenta precisava ter usabilidade acessível, permitindo que as próprias donas fizessem alterações sem acionar desenvolvedores.',
          icon: 'person',
        },
      ],
    },
    solution: {
      badge: 'SOLUÇÃO DE ENGENHARIA & USABILIDADE',
      title:
        'Adoção Estratégica do WordPress com Elementor, HTML, CSS e JavaScript',
      description:
        'Optamos pelo ecossistema WordPress com Elementor, complementado com estilização e interatividades customizadas em HTML, CSS e JavaScript. A decisão foi um sucesso absoluto pela facilidade de manuseio por pessoas não técnicas, permitindo à equipe da clínica publicar artigos e divulgar cursos com total autonomia.',
      pillars: [
        {
          title: 'WordPress & Elementor Visual',
          description:
            'Painel amigável com editor arrasta-e-solta, facilitando a edição visual sem risco de quebrar o layout.',
          tag: 'Autonomia Visual',
          icon: 'grid_view',
          color: 'primary',
        },
        {
          title: 'Arquitetura de Blog & Cursos',
          description:
            'Estrutura modular para categorização de artigos de desenvolvimento infantil e páginas dedicadas para cursos.',
          tag: 'Conteúdo Dinâmico',
          icon: 'insights',
          color: 'secondary',
        },
        {
          title: 'Customizações em HTML, CSS & JS',
          description:
            'Refinamento da identidade visual da marca, tipografia sensível, responsividade mobile e formulários ágeis.',
          tag: 'Ajuste Fino de Frontend',
          icon: 'code_blocks',
          color: 'tertiary',
        },
        {
          title: 'Capacitação e Sucesso do Cliente',
          description:
            'Treinamento prático que deu segurança total para as gestoras operarem o site com independência desde o primeiro dia.',
          tag: 'Empoderamento do Cliente',
          icon: 'check_circle',
          color: 'primary-fixed',
        },
      ],
      topology: {
        title: 'Diagrama Esquemático: Arquitetura WordPress Sensakids',
        tags: [
          { label: 'WordPress Core & Elementor', color: 'bg-primary' },
          { label: 'Gestão pelas Donas (Não Técnicas)', color: 'bg-[#10B981]' },
          { label: 'Cursos & Blog Dinâmicos', color: 'bg-tertiary' },
        ],
        nodes: [
          {
            badge: 'GESTÃO NÃO TÉCNICA',
            badgeColor: 'text-[#10B981]',
            title: 'Painel WordPress Simples',
            description: 'Edição direta de posts de blog e cursos.',
            stat: '100% Autônomo',
            statColor: 'text-[#10B981]',
            icon: 'person',
            highlight: true,
          },
        ],
        lowerNodes: [
          {
            title: 'Vitrine de Cursos',
            description:
              'Divulgação de novas turmas e capacitações da clínica.',
            icon: 'rocket_launch',
            color: 'text-primary',
          },
          {
            title: 'Blog de Orientação',
            description:
              'Artigos sobre desenvolvimento infantil e estímulo sensorial.',
            icon: 'insights',
            color: 'text-tertiary',
          },
        ],
      },
    },
    results: {
      badge: 'SUCESSO OPERACIONAL',
      title:
        'Resultados Mensuráveis: Autonomia Total e Facilidade no Dia a Dia',
      description:
        'A escolha pelo WordPress com Elementor se provou a solução ideal, proporcionando independência editorial para a clínica e um canal acolhedor para as famílias.',
      cards: [
        {
          metric: '100%',
          title: 'Autonomia para as Donas da Clínica',
          description:
            'Publicação de artigos de blog e cursos feita diretamente pelas gestoras, sem custo com suporte técnico.',
          tag: 'Operação Descomplicada',
          icon: 'check_circle',
          color: 'primary',
        },
        {
          metric: 'Sucesso',
          title: 'Facilidade de Mexer por Pessoas Não Técnicas',
          description:
            'A curva de aprendizado rápida permitiu à equipe assumir o controle do portal com total confiança.',
          tag: 'Usabilidade Aprovada',
          icon: 'star',
          color: 'secondary',
        },
        {
          metric: '2 em 1',
          title: 'Portal Institucional + Blog & Cursos',
          description:
            'Reuniu a apresentação dos serviços clínicos, produção de conteúdo educativo e captação de alunos para cursos.',
          tag: 'Presença Consolidada',
          icon: 'rocket_launch',
          color: 'tertiary',
        },
      ],
    },
    testimonial: {
      rating: 5,
      quote:
        '“A escolha do WordPress foi a decisão mais acertada da Givisiez para o nosso projeto. Conseguimos adicionar artigos no blog e divulgar nossos cursos de forma super simples, sem precisar de ninguém técnico para nos ajudar. O site ficou lindo, acolhedor e nós mesmas temos total controle de tudo!”',
      author: 'Donas e Gestoras da Clínica',
      company: 'Sensakids (Desenvolvimento Infantil)',
    },
    techStack: [
      {
        name: 'Wordpress',
        role: 'CMS & Gestão de Conteúdo',
        icon: 'public',
        color: 'text-primary',
      },
      {
        name: 'Elementor',
        role: 'Construtor Visual de Páginas',
        icon: 'grid_view',
        color: 'text-secondary',
      },
      {
        name: 'HTML & CSS',
        role: 'Estrutura & Estilização',
        icon: 'code_blocks',
        color: 'text-tertiary',
      },
      {
        name: 'JavaScript',
        role: 'Interatividade & Formulários',
        icon: 'terminal',
        color: 'text-primary-fixed',
      },
    ],
    cta: {
      badge: 'WEBSITES COM AUTONOMIA TOTAL',
      title:
        'Sua empresa precisa de um site que sua própria equipe consiga atualizar?',
      description:
        'Desenvolvemos portais institucionais, blogs e espaços de cursos projetados para que pessoas não técnicas tenham total independência.',
      primaryButtonText: 'Conversar com a Givisiez',
      secondaryButtonText: 'Explorar Outros Projetos',
    },
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudyData | undefined {
  return caseStudiesList.find(
    c => c.slug === slug || c.aliasSlugs?.includes(slug)
  );
}
