import { LanguageData, Lesson, DayScenario, Language, Level } from '../types';

// ===================== دروس اللغة الإنجليزية =====================
const englishLessons: Lesson[] = [
  {
    id: 'en-basics-1',
    title: 'First Words',
    titleAr: 'الكلمات الأولى',
    description: 'Essential greetings and introductions',
    descriptionAr: 'التحيات والتعارف الأساسية',
    category: 'basics',
    categoryAr: 'الأساسيات',
    level: 'beginner',
    duration: 10,
    xp: 50,
    icon: '👋',
    words: [
      {
        id: 'en-w-1',
        word: 'Hello',
        translation: 'مرحبا',
        transliteration: 'هيلو',
        pronunciation: '/həˈloʊ/',
        examples: ['Hello, how are you?', 'Hello everyone!'],
        examplesTranslation: ['مرحبا، كيف حالك؟', 'مرحبا بالجميع!'],
        memoryTip: 'تخيل أنك تلوح بيدك وتقول "هاي-لو"',
        category: 'greetings',
        level: 'beginner'
      },
      {
        id: 'en-w-2',
        word: 'Goodbye',
        translation: 'مع السلامة',
        transliteration: 'جود باي',
        pronunciation: '/ɡʊdˈbaɪ/',
        examples: ['Goodbye, see you tomorrow!', 'Say goodbye to everyone.'],
        examplesTranslation: ['مع السلامة، أراك غداً!', 'قل مع السلامة للجميع.'],
        memoryTip: 'Good + Bye = وداع جيد',
        category: 'greetings',
        level: 'beginner'
      },
      {
        id: 'en-w-3',
        word: 'Please',
        translation: 'من فضلك',
        transliteration: 'بليز',
        pronunciation: '/pliːz/',
        examples: ['Please help me.', 'Can I have water, please?'],
        examplesTranslation: ['من فضلك ساعدني.', 'هل يمكنني الحصول على ماء، من فضلك؟'],
        memoryTip: 'كلمة السحر التي تفتح كل الأبواب',
        category: 'polite',
        level: 'beginner'
      },
      {
        id: 'en-w-4',
        word: 'Thank you',
        translation: 'شكراً',
        transliteration: 'ثانك يو',
        pronunciation: '/θæŋk juː/',
        examples: ['Thank you so much!', 'Thank you for your help.'],
        examplesTranslation: ['شكراً جزيلاً!', 'شكراً على مساعدتك.'],
        memoryTip: 'Think of "شكراً لك" = Thank you',
        category: 'polite',
        level: 'beginner'
      },
      {
        id: 'en-w-5',
        word: 'Yes',
        translation: 'نعم',
        transliteration: 'يس',
        pronunciation: '/jes/',
        examples: ['Yes, I understand.', 'Yes, please!'],
        examplesTranslation: ['نعم، أنا أفهم.', 'نعم، من فضلك!'],
        memoryTip: 'قصيرة ومباشرة مثل "أي"',
        category: 'basics',
        level: 'beginner'
      },
      {
        id: 'en-w-6',
        word: 'No',
        translation: 'لا',
        transliteration: 'نو',
        pronunciation: '/noʊ/',
        examples: ['No, thank you.', 'No problem!'],
        examplesTranslation: ['لا، شكراً.', 'لا مشكلة!'],
        memoryTip: 'مثل "لا" بالعربية تقريباً',
        category: 'basics',
        level: 'beginner'
      }
    ],
    phrases: [
      {
        id: 'en-p-1',
        phrase: 'How are you?',
        translation: 'كيف حالك؟',
        pronunciation: '/haʊ ɑːr juː/',
        literal: 'كيف أنت؟',
        situation: 'عند مقابلة شخص',
        usage: 'تحية يومية شائعة جداً',
        formality: 'neutral',
        variations: ["How's it going?", "What's up?", "How are you doing?"],
        level: 'beginner'
      },
      {
        id: 'en-p-2',
        phrase: "I'm fine, thank you",
        translation: 'أنا بخير، شكراً',
        pronunciation: '/aɪm faɪn θæŋk juː/',
        literal: 'أنا جيد، شكراً لك',
        situation: 'الرد على سؤال عن الحال',
        usage: 'الرد الكلاسيكي المهذب',
        formality: 'neutral',
        variations: ["I'm good", "I'm doing well", "Not bad"],
        level: 'beginner'
      },
      {
        id: 'en-p-3',
        phrase: 'Nice to meet you',
        translation: 'تشرفت بمعرفتك',
        pronunciation: '/naɪs tuː miːt juː/',
        literal: 'لطيف أن أقابلك',
        situation: 'عند التعارف لأول مرة',
        usage: 'عبارة رسمية للتعارف',
        formality: 'formal',
        variations: ['Pleased to meet you', 'Good to meet you'],
        level: 'beginner'
      },
      {
        id: 'en-p-4',
        phrase: 'My name is...',
        translation: 'اسمي...',
        pronunciation: '/maɪ neɪm ɪz/',
        literal: 'اسمي هو...',
        situation: 'عند تقديم نفسك',
        usage: 'الطريقة الرسمية لتقديم نفسك',
        formality: 'neutral',
        variations: ["I'm...", "They call me..."],
        level: 'beginner'
      }
    ],
    conversations: [
      {
        id: 'en-c-1',
        title: 'Meeting Someone New',
        titleAr: 'مقابلة شخص جديد',
        situation: 'At a coffee shop',
        situationAr: 'في مقهى',
        characters: ['Alex', 'You'],
        lines: [
          { speaker: 'Alex', text: 'Hi there!', translation: 'مرحباً!', hint: 'تحية ودية' },
          { speaker: 'You', text: 'Hello!', translation: 'مرحباً!', hint: 'رد بالتحية' },
          { speaker: 'Alex', text: "I'm Alex. What's your name?", translation: 'أنا أليكس. ما اسمك؟', hint: 'يقدم نفسه' },
          { speaker: 'You', text: "My name is... Nice to meet you!", translation: 'اسمي... تشرفت بمعرفتك!', hint: 'قدم نفسك' },
          { speaker: 'Alex', text: 'Nice to meet you too! How are you?', translation: 'تشرفت بك أيضاً! كيف حالك؟', hint: 'يسأل عن حالك' },
          { speaker: 'You', text: "I'm fine, thank you. And you?", translation: 'أنا بخير، شكراً. وأنت؟', hint: 'أجب واسأله' }
        ],
        level: 'beginner'
      }
    ],
    grammar: {
      title: 'To Be Verb',
      titleAr: 'فعل الكينونة',
      explanation: 'Use "am" with I, "is" with he/she/it, "are" with you/we/they',
      explanationAr: 'استخدم "am" مع أنا، "is" مع هو/هي، "are" مع أنت/نحن/هم',
      examples: [
        { text: 'I am happy', translation: 'أنا سعيد' },
        { text: 'She is nice', translation: 'هي لطيفة' },
        { text: 'They are friends', translation: 'هم أصدقاء' }
      ]
    },
    cultureTip: {
      title: 'Small Talk Culture',
      content: 'في الثقافة الغربية، السؤال "How are you?" غالباً مجرد تحية وليس سؤالاً حقيقياً عن حالتك. الرد المعتاد هو "Fine, thanks!" حتى لو لم تكن بخير تماماً.'
    }
  },
  {
    id: 'en-cafe-1',
    title: 'At the Café',
    titleAr: 'في المقهى',
    description: 'Order drinks and food like a local',
    descriptionAr: 'اطلب المشروبات والطعام مثل السكان المحليين',
    category: 'daily',
    categoryAr: 'الحياة اليومية',
    level: 'beginner',
    duration: 15,
    xp: 75,
    icon: '☕',
    words: [
      {
        id: 'en-w-cafe-1',
        word: 'Coffee',
        translation: 'قهوة',
        transliteration: 'كوفي',
        pronunciation: '/ˈkɔːfi/',
        examples: ['I need my morning coffee.', 'Two coffees, please.'],
        examplesTranslation: ['أحتاج قهوتي الصباحية.', 'قهوتين، من فضلك.'],
        memoryTip: 'الكلمة العالمية للقهوة',
        category: 'drinks',
        level: 'beginner'
      },
      {
        id: 'en-w-cafe-2',
        word: 'Water',
        translation: 'ماء',
        transliteration: 'ووتر',
        pronunciation: '/ˈwɔːtər/',
        examples: ['Can I have some water?', 'Still or sparkling water?'],
        examplesTranslation: ['هل يمكنني الحصول على ماء؟', 'ماء عادي أم فوار؟'],
        memoryTip: 'W-ater = ووتر',
        category: 'drinks',
        level: 'beginner'
      },
      {
        id: 'en-w-cafe-3',
        word: 'Menu',
        translation: 'قائمة الطعام',
        transliteration: 'مينيو',
        pronunciation: '/ˈmenjuː/',
        examples: ['Can I see the menu?', "What's on the menu today?"],
        examplesTranslation: ['هل يمكنني رؤية القائمة؟', 'ماذا في القائمة اليوم؟'],
        memoryTip: 'نفس الكلمة تقريباً بالعربية العامية',
        category: 'restaurant',
        level: 'beginner'
      },
      {
        id: 'en-w-cafe-4',
        word: 'Bill',
        translation: 'الفاتورة',
        transliteration: 'بيل',
        pronunciation: '/bɪl/',
        examples: ['The bill, please.', 'Can we split the bill?'],
        examplesTranslation: ['الفاتورة، من فضلك.', 'هل يمكننا تقسيم الفاتورة؟'],
        memoryTip: 'Bill = فاتورة (أيضاً اسم شخص!)',
        category: 'restaurant',
        level: 'beginner'
      }
    ],
    phrases: [
      {
        id: 'en-p-cafe-1',
        phrase: "I'd like a coffee, please",
        translation: 'أريد قهوة، من فضلك',
        pronunciation: '/aɪd laɪk ə ˈkɔːfi pliːz/',
        literal: 'أود قهوة، من فضلك',
        situation: 'عند الطلب في مقهى',
        usage: 'طريقة مهذبة للطلب',
        formality: 'formal',
        variations: ['Can I get a coffee?', 'Coffee, please', "I'll have a coffee"],
        level: 'beginner'
      },
      {
        id: 'en-p-cafe-2',
        phrase: 'For here or to go?',
        translation: 'هنا أم للخارج؟',
        pronunciation: '/fɔːr hɪr ɔːr tuː ɡoʊ/',
        literal: 'لهنا أم للذهاب؟',
        situation: 'سؤال من البائع',
        usage: 'سؤال شائع جداً في المقاهي',
        formality: 'neutral',
        variations: ['Eating in or taking away?', 'Dine in or take out?'],
        level: 'beginner'
      },
      {
        id: 'en-p-cafe-3',
        phrase: 'Could I have the bill?',
        translation: 'هل يمكنني الحصول على الفاتورة؟',
        pronunciation: '/kʊd aɪ hæv ðə bɪl/',
        literal: 'هل أستطيع أن أحصل على الحساب؟',
        situation: 'عند الانتهاء والدفع',
        usage: 'طلب الفاتورة بأدب',
        formality: 'formal',
        variations: ['Check, please', 'The bill, please'],
        level: 'beginner'
      }
    ],
    conversations: [
      {
        id: 'en-c-cafe-1',
        title: 'Ordering at a Café',
        titleAr: 'الطلب في مقهى',
        situation: 'Morning at a local café',
        situationAr: 'صباحاً في مقهى محلي',
        characters: ['Barista', 'You'],
        lines: [
          { speaker: 'Barista', text: 'Hi! What can I get you?', translation: 'مرحباً! ماذا تريد؟', hint: 'تحية وسؤال عن طلبك' },
          { speaker: 'You', text: "I'd like a coffee, please.", translation: 'أريد قهوة، من فضلك.', hint: 'اطلب قهوة' },
          { speaker: 'Barista', text: 'Sure! What size? Small, medium, or large?', translation: 'بالتأكيد! أي حجم؟ صغير، وسط، أو كبير؟', hint: 'يسأل عن الحجم' },
          { speaker: 'You', text: 'Medium, please.', translation: 'وسط، من فضلك.', hint: 'اختر الحجم' },
          { speaker: 'Barista', text: 'For here or to go?', translation: 'هنا أم للخارج؟', hint: 'أين ستشرب؟' },
          { speaker: 'You', text: 'For here, thank you.', translation: 'هنا، شكراً.', hint: 'ستجلس هنا' },
          { speaker: 'Barista', text: "That'll be $4.50.", translation: 'سيكون ٤.٥٠ دولار.', hint: 'السعر' },
          { speaker: 'You', text: 'Here you go. Thank you!', translation: 'تفضل. شكراً!', hint: 'ادفع واشكره' }
        ],
        level: 'beginner'
      }
    ],
    grammar: {
      title: "I'd like vs I want",
      titleAr: 'أود vs أريد',
      explanation: "\"I'd like\" is more polite than \"I want\". Use it when ordering or requesting.",
      explanationAr: '"I\'d like" أكثر أدباً من "I want". استخدمها عند الطلب.',
      examples: [
        { text: "I'd like a coffee", translation: 'أود قهوة (مهذب)' },
        { text: 'I want a coffee', translation: 'أريد قهوة (مباشر)' }
      ]
    },
    cultureTip: {
      title: 'Tipping Culture',
      content: 'في أمريكا، من المعتاد ترك بقشيش (tip) بنسبة 15-20% في المطاعم. في المقاهي، يمكنك ترك الباقي أو دولار إضافي.'
    }
  },
  {
    id: 'en-work-1',
    title: 'At Work',
    titleAr: 'في العمل',
    description: 'Professional communication basics',
    descriptionAr: 'أساسيات التواصل المهني',
    category: 'work',
    categoryAr: 'العمل',
    level: 'elementary',
    duration: 20,
    xp: 100,
    icon: '💼',
    words: [
      {
        id: 'en-w-work-1',
        word: 'Meeting',
        translation: 'اجتماع',
        transliteration: 'ميتينج',
        pronunciation: '/ˈmiːtɪŋ/',
        examples: ['We have a meeting at 10.', "I'm in a meeting right now."],
        examplesTranslation: ['لدينا اجتماع في العاشرة.', 'أنا في اجتماع الآن.'],
        memoryTip: 'Meet + ing = لقاء/اجتماع',
        category: 'work',
        level: 'elementary'
      },
      {
        id: 'en-w-work-2',
        word: 'Email',
        translation: 'بريد إلكتروني',
        transliteration: 'إيميل',
        pronunciation: '/ˈiːmeɪl/',
        examples: ['Send me an email.', 'Did you get my email?'],
        examplesTranslation: ['أرسل لي إيميل.', 'هل وصلك إيميلي؟'],
        memoryTip: 'كلمة عالمية مستخدمة في كل اللغات',
        category: 'work',
        level: 'elementary'
      },
      {
        id: 'en-w-work-3',
        word: 'Deadline',
        translation: 'موعد نهائي',
        transliteration: 'ديدلاين',
        pronunciation: '/ˈdedlaɪn/',
        examples: ["The deadline is Friday.", "We need to meet the deadline."],
        examplesTranslation: ['الموعد النهائي يوم الجمعة.', 'يجب أن نلتزم بالموعد النهائي.'],
        memoryTip: 'Dead + Line = خط ميت (لا تتجاوزه!)',
        category: 'work',
        level: 'elementary'
      },
      {
        id: 'en-w-work-4',
        word: 'Report',
        translation: 'تقرير',
        transliteration: 'ريبورت',
        pronunciation: '/rɪˈpɔːrt/',
        examples: ['I need to finish this report.', 'The report is ready.'],
        examplesTranslation: ['أحتاج إنهاء هذا التقرير.', 'التقرير جاهز.'],
        memoryTip: 'Re-port = نقل مرة أخرى (المعلومات)',
        category: 'work',
        level: 'elementary'
      }
    ],
    phrases: [
      {
        id: 'en-p-work-1',
        phrase: "I'll get back to you",
        translation: 'سأعود إليك لاحقاً',
        pronunciation: '/aɪl ɡet bæk tuː juː/',
        literal: 'سأعود إليك',
        situation: 'عندما تحتاج وقتاً للرد',
        usage: 'عبارة مهنية شائعة جداً',
        formality: 'formal',
        variations: ["I'll follow up", "Let me check and get back to you"],
        level: 'elementary'
      },
      {
        id: 'en-p-work-2',
        phrase: 'Could you send me the details?',
        translation: 'هل يمكنك إرسال التفاصيل لي؟',
        pronunciation: '/kʊd juː send miː ðə dɪˈteɪlz/',
        literal: 'هل تستطيع أن ترسل لي التفاصيل؟',
        situation: 'طلب معلومات إضافية',
        usage: 'طلب مهذب للمعلومات',
        formality: 'formal',
        variations: ['Can you share the details?', 'Please send me the info'],
        level: 'elementary'
      },
      {
        id: 'en-p-work-3',
        phrase: "Let's schedule a meeting",
        translation: 'لنحدد موعد اجتماع',
        pronunciation: '/lets ˈskedʒuːl ə ˈmiːtɪŋ/',
        literal: 'دعنا نجدول اجتماعاً',
        situation: 'ترتيب اجتماع',
        usage: 'اقتراح عقد اجتماع',
        formality: 'formal',
        variations: ['Can we set up a meeting?', 'When can we meet?'],
        level: 'elementary'
      }
    ],
    conversations: [
      {
        id: 'en-c-work-1',
        title: 'Quick Office Chat',
        titleAr: 'محادثة سريعة في المكتب',
        situation: 'Meeting a colleague in the hallway',
        situationAr: 'مقابلة زميل في الممر',
        characters: ['Colleague', 'You'],
        lines: [
          { speaker: 'Colleague', text: 'Hey! Did you see my email?', translation: 'مرحباً! هل رأيت إيميلي؟', hint: 'يسأل عن الإيميل' },
          { speaker: 'You', text: "Yes, I did. I'll get back to you this afternoon.", translation: 'نعم، رأيته. سأرد عليك بعد الظهر.', hint: 'أكد أنك رأيته' },
          { speaker: 'Colleague', text: 'Great! The deadline is tomorrow, by the way.', translation: 'ممتاز! الموعد النهائي غداً، بالمناسبة.', hint: 'يذكرك بالموعد' },
          { speaker: 'You', text: "Don't worry, I'll have the report ready.", translation: 'لا تقلق، سيكون التقرير جاهزاً.', hint: 'طمئنه' },
          { speaker: 'Colleague', text: 'Perfect. Thanks!', translation: 'ممتاز. شكراً!', hint: 'يشكرك' }
        ],
        level: 'elementary'
      }
    ],
    grammar: {
      title: 'Future with Will',
      titleAr: 'المستقبل مع Will',
      explanation: "Use \"will\" or \"'ll\" to talk about future actions or promises.",
      explanationAr: 'استخدم "will" أو "\'ll" للحديث عن المستقبل أو الوعود.',
      examples: [
        { text: "I'll call you tomorrow", translation: 'سأتصل بك غداً' },
        { text: "She'll send the report", translation: 'ستُرسل التقرير' },
        { text: "We'll finish on time", translation: 'سننتهي في الوقت' }
      ]
    }
  }
];

// ===================== سيناريوهات يومك في البلد - الإنجليزية =====================
const englishDayScenarios: DayScenario[] = [
  {
    id: 'en-day-1',
    time: '7:00 AM',
    timeAr: '٧:٠٠ صباحاً',
    title: 'Wake Up',
    titleAr: 'الاستيقاظ',
    icon: '🌅',
    location: 'Your apartment',
    locationAr: 'شقتك',
    conversation: {
      id: 'en-day-conv-1',
      title: 'Morning Routine',
      titleAr: 'الروتين الصباحي',
      situation: 'Starting your day',
      situationAr: 'بداية يومك',
      characters: ['Roommate', 'You'],
      lines: [
        { speaker: 'Roommate', text: 'Good morning! Did you sleep well?', translation: 'صباح الخير! هل نمت جيداً؟' },
        { speaker: 'You', text: 'Good morning! Yes, I did. You?', translation: 'صباح الخير! نعم. وأنت؟' },
        { speaker: 'Roommate', text: 'Not bad. Want some coffee?', translation: 'ليس سيئاً. تريد قهوة؟' },
        { speaker: 'You', text: "Yes, please! That'd be great.", translation: 'نعم، من فضلك! سيكون رائعاً.' }
      ],
      level: 'beginner'
    }
  },
  {
    id: 'en-day-2',
    time: '8:00 AM',
    timeAr: '٨:٠٠ صباحاً',
    title: 'Coffee Shop',
    titleAr: 'المقهى',
    icon: '☕',
    location: 'Local coffee shop',
    locationAr: 'مقهى محلي',
    conversation: {
      id: 'en-day-conv-2',
      title: 'Getting Coffee',
      titleAr: 'شراء القهوة',
      situation: 'Ordering your morning coffee',
      situationAr: 'طلب قهوتك الصباحية',
      characters: ['Barista', 'You'],
      lines: [
        { speaker: 'Barista', text: 'Good morning! What can I get for you?', translation: 'صباح الخير! ماذا تريد؟' },
        { speaker: 'You', text: "Hi! I'd like a large latte, please.", translation: 'مرحباً! أريد لاتيه كبير، من فضلك.' },
        { speaker: 'Barista', text: 'Sure! Any sugar?', translation: 'بالتأكيد! سكر؟' },
        { speaker: 'You', text: 'No sugar, thanks.', translation: 'بدون سكر، شكراً.' },
        { speaker: 'Barista', text: "That's $5.50. Card or cash?", translation: 'سيكون ٥.٥٠ دولار. بطاقة أم نقداً؟' },
        { speaker: 'You', text: 'Card, please.', translation: 'بطاقة، من فضلك.' }
      ],
      level: 'beginner'
    }
  },
  {
    id: 'en-day-3',
    time: '9:00 AM',
    timeAr: '٩:٠٠ صباحاً',
    title: 'Taking Transportation',
    titleAr: 'وسائل النقل',
    icon: '🚌',
    location: 'Bus stop',
    locationAr: 'محطة الباص',
    conversation: {
      id: 'en-day-conv-3',
      title: 'Catching the Bus',
      titleAr: 'ركوب الباص',
      situation: 'Going to work',
      situationAr: 'الذهاب للعمل',
      characters: ['Stranger', 'You'],
      lines: [
        { speaker: 'You', text: 'Excuse me, does this bus go downtown?', translation: 'عفواً، هل هذا الباص يذهب لوسط المدينة؟' },
        { speaker: 'Stranger', text: 'Yes, it does. Are you new here?', translation: 'نعم. هل أنت جديد هنا؟' },
        { speaker: 'You', text: "Yes, I just moved here last week.", translation: 'نعم، انتقلت هنا الأسبوع الماضي.' },
        { speaker: 'Stranger', text: 'Welcome! Where are you from?', translation: 'أهلاً بك! من أين أنت؟' },
        { speaker: 'You', text: "I'm from the Middle East. I'm learning English.", translation: 'أنا من الشرق الأوسط. أتعلم الإنجليزية.' },
        { speaker: 'Stranger', text: "Your English is good! Here's our bus.", translation: 'إنجليزيتك جيدة! ها هو الباص.' }
      ],
      level: 'beginner'
    }
  },
  {
    id: 'en-day-4',
    time: '12:30 PM',
    timeAr: '١٢:٣٠ ظهراً',
    title: 'Lunch Break',
    titleAr: 'استراحة الغداء',
    icon: '🍽️',
    location: 'Restaurant',
    locationAr: 'مطعم',
    conversation: {
      id: 'en-day-conv-4',
      title: 'Ordering Lunch',
      titleAr: 'طلب الغداء',
      situation: 'Lunch with colleagues',
      situationAr: 'غداء مع الزملاء',
      characters: ['Waiter', 'You'],
      lines: [
        { speaker: 'Waiter', text: 'Hi! Are you ready to order?', translation: 'مرحباً! مستعد للطلب؟' },
        { speaker: 'You', text: "Yes. What do you recommend?", translation: 'نعم. ماذا تنصح؟' },
        { speaker: 'Waiter', text: 'The chicken sandwich is really popular.', translation: 'ساندويش الدجاج مشهور جداً.' },
        { speaker: 'You', text: "Sounds good! I'll have that with fries.", translation: 'يبدو لذيذاً! سآخذه مع البطاطس.' },
        { speaker: 'Waiter', text: 'Anything to drink?', translation: 'أي مشروب؟' },
        { speaker: 'You', text: 'Just water, please.', translation: 'ماء فقط، من فضلك.' }
      ],
      level: 'beginner'
    }
  },
  {
    id: 'en-day-5',
    time: '6:00 PM',
    timeAr: '٦:٠٠ مساءً',
    title: 'Grocery Shopping',
    titleAr: 'التسوق',
    icon: '🛒',
    location: 'Supermarket',
    locationAr: 'سوبرماركت',
    conversation: {
      id: 'en-day-conv-5',
      title: 'At the Supermarket',
      titleAr: 'في السوبرماركت',
      situation: 'Buying groceries',
      situationAr: 'شراء المواد الغذائية',
      characters: ['Employee', 'You'],
      lines: [
        { speaker: 'You', text: 'Excuse me, where can I find the bread?', translation: 'عفواً، أين أجد الخبز؟' },
        { speaker: 'Employee', text: "It's in aisle 3, on your right.", translation: 'في الممر ٣، على يمينك.' },
        { speaker: 'You', text: 'Thank you! And the milk?', translation: 'شكراً! والحليب؟' },
        { speaker: 'Employee', text: "Dairy is in the back, aisle 7.", translation: 'منتجات الألبان في الخلف، ممر ٧.' },
        { speaker: 'You', text: 'Perfect, thanks for your help!', translation: 'ممتاز، شكراً لمساعدتك!' }
      ],
      level: 'beginner'
    }
  },
  {
    id: 'en-day-6',
    time: '8:00 PM',
    timeAr: '٨:٠٠ مساءً',
    title: 'Evening Social',
    titleAr: 'السهرة',
    icon: '🎉',
    location: 'Friend\'s house',
    locationAr: 'منزل صديق',
    conversation: {
      id: 'en-day-conv-6',
      title: 'At a Party',
      titleAr: 'في حفلة',
      situation: 'Meeting new people',
      situationAr: 'التعرف على أشخاص جدد',
      characters: ['New Friend', 'You'],
      lines: [
        { speaker: 'New Friend', text: "Hi! I don't think we've met. I'm Sarah.", translation: 'مرحباً! لا أظن أننا تقابلنا. أنا سارة.' },
        { speaker: 'You', text: "Hi Sarah! I'm... Nice to meet you.", translation: 'مرحباً سارة! أنا... تشرفت بمعرفتك.' },
        { speaker: 'New Friend', text: 'Nice to meet you too! How do you know Mike?', translation: 'تشرفت بك أيضاً! كيف تعرف مايك؟' },
        { speaker: 'You', text: "We work together. What about you?", translation: 'نعمل معاً. وأنتِ؟' },
        { speaker: 'New Friend', text: "We went to college together. So, what do you do?", translation: 'كنا في الجامعة معاً. إذن، ماذا تعمل؟' },
        { speaker: 'You', text: "I'm a software developer. I moved here recently.", translation: 'أنا مطور برمجيات. انتقلت هنا مؤخراً.' }
      ],
      level: 'beginner'
    }
  }
];

// ===================== دروس اللغة الإسبانية =====================
const spanishLessons: Lesson[] = [
  {
    id: 'es-basics-1',
    title: 'Primeras Palabras',
    titleAr: 'الكلمات الأولى',
    description: 'Saludos y presentaciones esenciales',
    descriptionAr: 'التحيات والتعارف الأساسية',
    category: 'basics',
    categoryAr: 'الأساسيات',
    level: 'beginner',
    duration: 10,
    xp: 50,
    icon: '👋',
    words: [
      {
        id: 'es-w-1',
        word: 'Hola',
        translation: 'مرحبا',
        transliteration: 'أولا',
        pronunciation: '/ˈola/',
        examples: ['¡Hola! ¿Cómo estás?', '¡Hola a todos!'],
        examplesTranslation: ['مرحبا! كيف حالك؟', 'مرحبا بالجميع!'],
        memoryTip: 'مثل "أولا" - أول كلمة تقولها عند اللقاء',
        category: 'greetings',
        level: 'beginner'
      },
      {
        id: 'es-w-2',
        word: 'Adiós',
        translation: 'مع السلامة',
        transliteration: 'أديوس',
        pronunciation: '/aˈðjos/',
        examples: ['¡Adiós! ¡Hasta mañana!', 'Dile adiós a todos.'],
        examplesTranslation: ['مع السلامة! إلى الغد!', 'قل مع السلامة للجميع.'],
        memoryTip: 'A-Dios = إلى الله (مثل "في أمان الله")',
        category: 'greetings',
        level: 'beginner'
      },
      {
        id: 'es-w-3',
        word: 'Por favor',
        translation: 'من فضلك',
        transliteration: 'بور فابور',
        pronunciation: '/poɾ faˈβoɾ/',
        examples: ['Ayúdame, por favor.', '¿Agua, por favor?'],
        examplesTranslation: ['ساعدني، من فضلك.', 'ماء، من فضلك؟'],
        memoryTip: 'Por = من أجل، Favor = معروف',
        category: 'polite',
        level: 'beginner'
      },
      {
        id: 'es-w-4',
        word: 'Gracias',
        translation: 'شكراً',
        transliteration: 'غراثياس',
        pronunciation: '/ˈɡɾaθjas/',
        examples: ['¡Muchas gracias!', 'Gracias por tu ayuda.'],
        examplesTranslation: ['شكراً جزيلاً!', 'شكراً على مساعدتك.'],
        memoryTip: 'Grace = نعمة، Gracias = شكر على النعم',
        category: 'polite',
        level: 'beginner'
      },
      {
        id: 'es-w-5',
        word: 'Sí',
        translation: 'نعم',
        transliteration: 'سي',
        pronunciation: '/si/',
        examples: ['Sí, entiendo.', '¡Sí, por favor!'],
        examplesTranslation: ['نعم، أفهم.', 'نعم، من فضلك!'],
        memoryTip: 'قصيرة مثل "سي" بالعربية العامية',
        category: 'basics',
        level: 'beginner'
      },
      {
        id: 'es-w-6',
        word: 'No',
        translation: 'لا',
        transliteration: 'نو',
        pronunciation: '/no/',
        examples: ['No, gracias.', '¡No hay problema!'],
        examplesTranslation: ['لا، شكراً.', 'لا مشكلة!'],
        memoryTip: 'نفس النطق بالإنجليزية!',
        category: 'basics',
        level: 'beginner'
      }
    ],
    phrases: [
      {
        id: 'es-p-1',
        phrase: '¿Cómo estás?',
        translation: 'كيف حالك؟',
        pronunciation: '/ˈkomo esˈtas/',
        literal: 'كيف أنت؟',
        situation: 'عند مقابلة شخص',
        usage: 'تحية يومية شائعة جداً (غير رسمية)',
        formality: 'informal',
        variations: ['¿Qué tal?', '¿Cómo te va?', '¿Cómo está usted?'],
        level: 'beginner'
      },
      {
        id: 'es-p-2',
        phrase: 'Estoy bien, gracias',
        translation: 'أنا بخير، شكراً',
        pronunciation: '/esˈtoj bjen ˈɡɾaθjas/',
        literal: 'أنا جيد، شكراً',
        situation: 'الرد على سؤال عن الحال',
        usage: 'الرد الكلاسيكي',
        formality: 'neutral',
        variations: ['Muy bien', 'Todo bien', 'Así así'],
        level: 'beginner'
      },
      {
        id: 'es-p-3',
        phrase: 'Mucho gusto',
        translation: 'تشرفت بمعرفتك',
        pronunciation: '/ˈmutʃo ˈɡusto/',
        literal: 'سرور كبير',
        situation: 'عند التعارف لأول مرة',
        usage: 'عبارة رسمية للتعارف',
        formality: 'formal',
        variations: ['Encantado/a', 'Es un placer'],
        level: 'beginner'
      },
      {
        id: 'es-p-4',
        phrase: 'Me llamo...',
        translation: 'اسمي...',
        pronunciation: '/me ˈʎamo/',
        literal: 'أُدعى...',
        situation: 'عند تقديم نفسك',
        usage: 'الطريقة الشائعة لتقديم نفسك',
        formality: 'neutral',
        variations: ['Soy...', 'Mi nombre es...'],
        level: 'beginner'
      }
    ],
    conversations: [
      {
        id: 'es-c-1',
        title: 'Conocer a Alguien Nuevo',
        titleAr: 'مقابلة شخص جديد',
        situation: 'En una cafetería',
        situationAr: 'في مقهى',
        characters: ['María', 'You'],
        lines: [
          { speaker: 'María', text: '¡Hola!', translation: 'مرحباً!', hint: 'تحية ودية' },
          { speaker: 'You', text: '¡Hola!', translation: 'مرحباً!', hint: 'رد بالتحية' },
          { speaker: 'María', text: 'Soy María. ¿Cómo te llamas?', translation: 'أنا ماريا. ما اسمك؟', hint: 'تقدم نفسها' },
          { speaker: 'You', text: 'Me llamo... ¡Mucho gusto!', translation: 'اسمي... تشرفت بمعرفتك!', hint: 'قدم نفسك' },
          { speaker: 'María', text: '¡Mucho gusto! ¿Cómo estás?', translation: 'تشرفت! كيف حالك؟', hint: 'تسأل عن حالك' },
          { speaker: 'You', text: 'Estoy bien, gracias. ¿Y tú?', translation: 'أنا بخير، شكراً. وأنتِ؟', hint: 'أجب واسألها' }
        ],
        level: 'beginner'
      }
    ],
    grammar: {
      title: 'Verbo Estar',
      titleAr: 'فعل الكينونة (estar)',
      explanation: 'Estar is used for temporary states and locations: estoy, estás, está, estamos, están',
      explanationAr: 'يُستخدم estar للحالات المؤقتة والمواقع',
      examples: [
        { text: 'Estoy feliz', translation: 'أنا سعيد (الآن)' },
        { text: '¿Dónde estás?', translation: 'أين أنت؟' },
        { text: 'Ella está en casa', translation: 'هي في البيت' }
      ]
    },
    cultureTip: {
      title: 'Dos besos',
      content: 'في إسبانيا، من الشائع تحية الأصدقاء والعائلة بقبلتين على الخدين (بدءاً من الخد الأيسر). مع الغرباء أو في سياق رسمي، المصافحة تكفي.'
    }
  },
  {
    id: 'es-cafe-1',
    title: 'En la Cafetería',
    titleAr: 'في المقهى',
    description: 'Pide bebidas y comida como un local',
    descriptionAr: 'اطلب المشروبات والطعام مثل السكان المحليين',
    category: 'daily',
    categoryAr: 'الحياة اليومية',
    level: 'beginner',
    duration: 15,
    xp: 75,
    icon: '☕',
    words: [
      {
        id: 'es-w-cafe-1',
        word: 'Café',
        translation: 'قهوة',
        transliteration: 'كافيه',
        pronunciation: '/kaˈfe/',
        examples: ['Necesito mi café de la mañana.', 'Dos cafés, por favor.'],
        examplesTranslation: ['أحتاج قهوتي الصباحية.', 'قهوتين، من فضلك.'],
        memoryTip: 'نفس الكلمة العالمية!',
        category: 'drinks',
        level: 'beginner'
      },
      {
        id: 'es-w-cafe-2',
        word: 'Agua',
        translation: 'ماء',
        transliteration: 'أغوا',
        pronunciation: '/ˈaɣwa/',
        examples: ['¿Me da agua, por favor?', '¿Agua con gas o sin gas?'],
        examplesTranslation: ['هل تعطيني ماء، من فضلك؟', 'ماء فوار أم عادي؟'],
        memoryTip: 'Aqua بالاتينية = ماء',
        category: 'drinks',
        level: 'beginner'
      },
      {
        id: 'es-w-cafe-3',
        word: 'La cuenta',
        translation: 'الفاتورة',
        transliteration: 'لا كوينتا',
        pronunciation: '/la ˈkwenta/',
        examples: ['La cuenta, por favor.', '¿Podemos pagar la cuenta?'],
        examplesTranslation: ['الفاتورة، من فضلك.', 'هل يمكننا دفع الفاتورة؟'],
        memoryTip: 'Cuenta = حساب/عد',
        category: 'restaurant',
        level: 'beginner'
      },
      {
        id: 'es-w-cafe-4',
        word: 'Cerveza',
        translation: 'بيرة',
        transliteration: 'ثيربيثا',
        pronunciation: '/θeɾˈβeθa/',
        examples: ['Una cerveza, por favor.', '¿Qué cervezas tienen?'],
        examplesTranslation: ['بيرة، من فضلك.', 'أي أنواع البيرة لديكم؟'],
        memoryTip: 'C في الإسبانية تُنطق "ث"',
        category: 'drinks',
        level: 'beginner'
      }
    ],
    phrases: [
      {
        id: 'es-p-cafe-1',
        phrase: 'Quisiera un café, por favor',
        translation: 'أريد قهوة، من فضلك',
        pronunciation: '/kiˈsjeɾa un kaˈfe poɾ faˈβoɾ/',
        literal: 'أودّ قهوة، من فضلك',
        situation: 'عند الطلب في مقهى',
        usage: 'طريقة مهذبة للطلب',
        formality: 'formal',
        variations: ['Me pone un café', 'Un café, por favor', 'Ponme un café'],
        level: 'beginner'
      },
      {
        id: 'es-p-cafe-2',
        phrase: '¿Para tomar aquí o para llevar?',
        translation: 'هنا أم للخارج؟',
        pronunciation: '/ˈpaɾa toˈmaɾ aˈki o ˈpaɾa ʎeˈβaɾ/',
        literal: 'للشرب هنا أم للأخذ؟',
        situation: 'سؤال من البائع',
        usage: 'سؤال شائع جداً',
        formality: 'neutral',
        variations: ['¿Aquí o para llevar?'],
        level: 'beginner'
      },
      {
        id: 'es-p-cafe-3',
        phrase: '¿Me trae la cuenta?',
        translation: 'هل تحضر لي الفاتورة؟',
        pronunciation: '/me ˈtɾae la ˈkwenta/',
        literal: 'هل تجلب لي الحساب؟',
        situation: 'عند الانتهاء والدفع',
        usage: 'طلب الفاتورة بأدب',
        formality: 'formal',
        variations: ['La cuenta, por favor', '¿Cuánto es?'],
        level: 'beginner'
      }
    ],
    conversations: [
      {
        id: 'es-c-cafe-1',
        title: 'Pidiendo en una Cafetería',
        titleAr: 'الطلب في مقهى',
        situation: 'Mañana en una cafetería local',
        situationAr: 'صباحاً في مقهى محلي',
        characters: ['Camarero', 'You'],
        lines: [
          { speaker: 'Camarero', text: '¡Buenos días! ¿Qué le pongo?', translation: 'صباح الخير! ماذا أضع لك؟', hint: 'تحية وسؤال' },
          { speaker: 'You', text: 'Buenos días. Un café con leche, por favor.', translation: 'صباح الخير. قهوة بالحليب، من فضلك.', hint: 'اطلب قهوة' },
          { speaker: 'Camarero', text: '¿Grande o pequeño?', translation: 'كبير أم صغير؟', hint: 'يسأل عن الحجم' },
          { speaker: 'You', text: 'Grande, por favor.', translation: 'كبير، من فضلك.', hint: 'اختر الحجم' },
          { speaker: 'Camarero', text: '¿Algo más?', translation: 'شيء آخر؟', hint: 'يسأل إن كنت تريد المزيد' },
          { speaker: 'You', text: 'No, eso es todo. ¿Cuánto es?', translation: 'لا، هذا كل شيء. كم السعر؟', hint: 'اسأل عن السعر' },
          { speaker: 'Camarero', text: 'Son tres euros.', translation: 'ثلاثة يورو.', hint: 'السعر' },
          { speaker: 'You', text: 'Aquí tiene. ¡Gracias!', translation: 'تفضل. شكراً!', hint: 'ادفع واشكره' }
        ],
        level: 'beginner'
      }
    ],
    grammar: {
      title: 'Quisiera vs Quiero',
      titleAr: 'أودّ vs أريد',
      explanation: '"Quisiera" is more polite than "Quiero". Use it when ordering or requesting.',
      explanationAr: '"Quisiera" أكثر أدباً من "Quiero". استخدمها عند الطلب.',
      examples: [
        { text: 'Quisiera un café', translation: 'أودّ قهوة (مهذب)' },
        { text: 'Quiero un café', translation: 'أريد قهوة (مباشر)' }
      ]
    },
    cultureTip: {
      title: 'Coffee Culture',
      content: 'في إسبانيا، "café con leche" (قهوة بالحليب) هي المشروب الصباحي الأكثر شيوعاً. القهوة الإسبانية قوية جداً! "Cortado" هو إسبريسو مع قليل من الحليب.'
    }
  }
];

// ===================== سيناريوهات يومك في البلد - الإسبانية =====================
const spanishDayScenarios: DayScenario[] = [
  {
    id: 'es-day-1',
    time: '7:00 AM',
    timeAr: '٧:٠٠ صباحاً',
    title: 'Despertarse',
    titleAr: 'الاستيقاظ',
    icon: '🌅',
    location: 'Tu apartamento',
    locationAr: 'شقتك',
    conversation: {
      id: 'es-day-conv-1',
      title: 'Rutina Matutina',
      titleAr: 'الروتين الصباحي',
      situation: 'Empezando el día',
      situationAr: 'بداية يومك',
      characters: ['Compañero', 'You'],
      lines: [
        { speaker: 'Compañero', text: '¡Buenos días! ¿Dormiste bien?', translation: 'صباح الخير! هل نمت جيداً؟' },
        { speaker: 'You', text: '¡Buenos días! Sí, muy bien. ¿Y tú?', translation: 'صباح الخير! نعم، جيداً جداً. وأنت؟' },
        { speaker: 'Compañero', text: 'No está mal. ¿Quieres café?', translation: 'ليس سيئاً. تريد قهوة؟' },
        { speaker: 'You', text: '¡Sí, por favor! Eso sería genial.', translation: 'نعم، من فضلك! سيكون رائعاً.' }
      ],
      level: 'beginner'
    }
  },
  {
    id: 'es-day-2',
    time: '8:00 AM',
    timeAr: '٨:٠٠ صباحاً',
    title: 'La Cafetería',
    titleAr: 'المقهى',
    icon: '☕',
    location: 'Cafetería local',
    locationAr: 'مقهى محلي',
    conversation: {
      id: 'es-day-conv-2',
      title: 'Pidiendo Café',
      titleAr: 'طلب القهوة',
      situation: 'Pidiendo tu café de la mañana',
      situationAr: 'طلب قهوتك الصباحية',
      characters: ['Camarero', 'You'],
      lines: [
        { speaker: 'Camarero', text: '¡Buenos días! ¿Qué le pongo?', translation: 'صباح الخير! ماذا تريد؟' },
        { speaker: 'You', text: '¡Hola! Un café con leche grande, por favor.', translation: 'مرحباً! قهوة بالحليب كبيرة، من فضلك.' },
        { speaker: 'Camarero', text: '¡Muy bien! ¿Con azúcar?', translation: 'حسناً! مع سكر؟' },
        { speaker: 'You', text: 'Sin azúcar, gracias.', translation: 'بدون سكر، شكراً.' },
        { speaker: 'Camarero', text: 'Son tres euros cincuenta. ¿Tarjeta o efectivo?', translation: 'ثلاثة يورو وخمسون سنت. بطاقة أم نقداً؟' },
        { speaker: 'You', text: 'Tarjeta, por favor.', translation: 'بطاقة، من فضلك.' }
      ],
      level: 'beginner'
    }
  },
  {
    id: 'es-day-3',
    time: '9:00 AM',
    timeAr: '٩:٠٠ صباحاً',
    title: 'Transporte',
    titleAr: 'وسائل النقل',
    icon: '🚌',
    location: 'Parada de autobús',
    locationAr: 'محطة الباص',
    conversation: {
      id: 'es-day-conv-3',
      title: 'Tomando el Bus',
      titleAr: 'ركوب الباص',
      situation: 'Yendo al trabajo',
      situationAr: 'الذهاب للعمل',
      characters: ['Desconocido', 'You'],
      lines: [
        { speaker: 'You', text: 'Perdona, ¿este autobús va al centro?', translation: 'عفواً، هل هذا الباص يذهب لوسط المدينة؟' },
        { speaker: 'Desconocido', text: 'Sí, sí va. ¿Eres nuevo aquí?', translation: 'نعم. هل أنت جديد هنا؟' },
        { speaker: 'You', text: 'Sí, llegué la semana pasada.', translation: 'نعم، وصلت الأسبوع الماضي.' },
        { speaker: 'Desconocido', text: '¡Bienvenido! ¿De dónde eres?', translation: 'أهلاً بك! من أين أنت؟' },
        { speaker: 'You', text: 'Soy de Oriente Medio. Estoy aprendiendo español.', translation: 'أنا من الشرق الأوسط. أتعلم الإسبانية.' },
        { speaker: 'Desconocido', text: '¡Tu español es muy bueno! Mira, aquí viene el bus.', translation: 'إسبانيتك جيدة جداً! انظر، ها هو الباص.' }
      ],
      level: 'beginner'
    }
  },
  {
    id: 'es-day-4',
    time: '2:00 PM',
    timeAr: '٢:٠٠ ظهراً',
    title: 'La Comida',
    titleAr: 'الغداء',
    icon: '🍽️',
    location: 'Restaurante',
    locationAr: 'مطعم',
    conversation: {
      id: 'es-day-conv-4',
      title: 'Pidiendo el Almuerzo',
      titleAr: 'طلب الغداء',
      situation: 'Almuerzo con colegas',
      situationAr: 'غداء مع الزملاء',
      characters: ['Camarero', 'You'],
      lines: [
        { speaker: 'Camarero', text: '¡Buenas tardes! ¿Están listos para pedir?', translation: 'مساء الخير! مستعدون للطلب؟' },
        { speaker: 'You', text: 'Sí. ¿Qué nos recomienda?', translation: 'نعم. ماذا تنصح؟' },
        { speaker: 'Camarero', text: 'La paella está muy buena hoy.', translation: 'الباييلا لذيذة جداً اليوم.' },
        { speaker: 'You', text: '¡Perfecto! Una paella para mí.', translation: 'ممتاز! باييلا لي.' },
        { speaker: 'Camarero', text: '¿Para beber?', translation: 'للشرب؟' },
        { speaker: 'You', text: 'Agua con gas, por favor.', translation: 'ماء فوار، من فضلك.' }
      ],
      level: 'beginner'
    }
  },
  {
    id: 'es-day-5',
    time: '6:00 PM',
    timeAr: '٦:٠٠ مساءً',
    title: 'De Compras',
    titleAr: 'التسوق',
    icon: '🛒',
    location: 'Supermercado',
    locationAr: 'سوبرماركت',
    conversation: {
      id: 'es-day-conv-5',
      title: 'En el Supermercado',
      titleAr: 'في السوبرماركت',
      situation: 'Comprando comida',
      situationAr: 'شراء الطعام',
      characters: ['Empleado', 'You'],
      lines: [
        { speaker: 'You', text: 'Perdone, ¿dónde está el pan?', translation: 'عفواً، أين الخبز؟' },
        { speaker: 'Empleado', text: 'Está en el pasillo 3, a la derecha.', translation: 'في الممر ٣، على اليمين.' },
        { speaker: 'You', text: '¡Gracias! ¿Y la leche?', translation: 'شكراً! والحليب؟' },
        { speaker: 'Empleado', text: 'Los lácteos están al fondo, pasillo 7.', translation: 'منتجات الألبان في الخلف، ممر ٧.' },
        { speaker: 'You', text: 'Perfecto, ¡muchas gracias!', translation: 'ممتاز، شكراً جزيلاً!' }
      ],
      level: 'beginner'
    }
  },
  {
    id: 'es-day-6',
    time: '9:00 PM',
    timeAr: '٩:٠٠ مساءً',
    title: 'Salida Nocturna',
    titleAr: 'السهرة',
    icon: '🎉',
    location: 'Casa de un amigo',
    locationAr: 'منزل صديق',
    conversation: {
      id: 'es-day-conv-6',
      title: 'En una Fiesta',
      titleAr: 'في حفلة',
      situation: 'Conociendo gente nueva',
      situationAr: 'التعرف على أشخاص جدد',
      characters: ['Nuevo Amigo', 'You'],
      lines: [
        { speaker: 'Nuevo Amigo', text: '¡Hola! No creo que nos conozcamos. Soy Carlos.', translation: 'مرحباً! لا أظن أننا تقابلنا. أنا كارلوس.' },
        { speaker: 'You', text: '¡Hola Carlos! Me llamo... ¡Mucho gusto!', translation: 'مرحباً كارلوس! اسمي... تشرفت!' },
        { speaker: 'Nuevo Amigo', text: '¡Igualmente! ¿Cómo conoces a Marta?', translation: 'وأنا كذلك! كيف تعرف مارتا؟' },
        { speaker: 'You', text: 'Trabajamos juntos. ¿Y tú?', translation: 'نعمل معاً. وأنت؟' },
        { speaker: 'Nuevo Amigo', text: 'Somos amigos de la universidad. ¿A qué te dedicas?', translation: 'نحن أصدقاء من الجامعة. ماذا تعمل؟' },
        { speaker: 'You', text: 'Soy programador. Me mudé aquí hace poco.', translation: 'أنا مبرمج. انتقلت هنا مؤخراً.' }
      ],
      level: 'beginner'
    }
  }
];

// ===================== المزيد من دروس الإنجليزية =====================
const moreEnglishLessons: Lesson[] = [
  {
    id: 'en-travel-1',
    title: 'Traveling',
    titleAr: 'السفر',
    description: 'Navigate airports, hotels, and transportation',
    descriptionAr: 'تنقل في المطارات والفنادق والمواصلات',
    category: 'travel',
    categoryAr: 'السفر',
    level: 'elementary',
    duration: 20,
    xp: 100,
    icon: '✈️',
    words: [
      {
        id: 'en-w-travel-1',
        word: 'Airport',
        translation: 'مطار',
        transliteration: 'إيربورت',
        pronunciation: '/ˈeərpɔːrt/',
        examples: ['The airport is very busy today.', 'How far is the airport?'],
        examplesTranslation: ['المطار مزدحم جداً اليوم.', 'كم يبعد المطار؟'],
        memoryTip: 'Air (هواء) + Port (ميناء) = ميناء جوي',
        category: 'travel',
        level: 'elementary'
      },
      {
        id: 'en-w-travel-2',
        word: 'Passport',
        translation: 'جواز سفر',
        transliteration: 'باسبورت',
        pronunciation: '/ˈpɑːspɔːrt/',
        examples: ['May I see your passport?', "I lost my passport!"],
        examplesTranslation: ['هل يمكنني رؤية جواز سفرك؟', 'فقدت جواز سفري!'],
        memoryTip: 'Pass (عبور) + Port (ميناء) = تصريح العبور',
        category: 'travel',
        level: 'elementary'
      },
      {
        id: 'en-w-travel-3',
        word: 'Flight',
        translation: 'رحلة طيران',
        transliteration: 'فلايت',
        pronunciation: '/flaɪt/',
        examples: ['My flight is at 3 PM.', 'The flight was delayed.'],
        examplesTranslation: ['رحلتي في الساعة 3.', 'تأخرت الرحلة.'],
        memoryTip: 'Fly (يطير) → Flight (رحلة طيران)',
        category: 'travel',
        level: 'elementary'
      },
      {
        id: 'en-w-travel-4',
        word: 'Luggage',
        translation: 'أمتعة',
        transliteration: 'لاجج',
        pronunciation: '/ˈlʌɡɪdʒ/',
        examples: ['Where is the luggage claim?', 'My luggage is missing.'],
        examplesTranslation: ['أين استلام الأمتعة؟', 'أمتعتي مفقودة.'],
        memoryTip: 'Lug (يجر) + age = ما تجره معك',
        category: 'travel',
        level: 'elementary'
      },
      {
        id: 'en-w-travel-5',
        word: 'Reservation',
        translation: 'حجز',
        transliteration: 'ريزرفيشن',
        pronunciation: '/ˌrezərˈveɪʃn/',
        examples: ['I have a reservation.', 'Can I make a reservation?'],
        examplesTranslation: ['لدي حجز.', 'هل يمكنني عمل حجز؟'],
        memoryTip: 'Reserve (يحجز) → Reservation (حجز)',
        category: 'travel',
        level: 'elementary'
      }
    ],
    phrases: [
      {
        id: 'en-p-travel-1',
        phrase: 'Where is the check-in counter?',
        translation: 'أين مكتب تسجيل الدخول؟',
        pronunciation: '/weər ɪz ðə tʃek-ɪn ˈkaʊntər/',
        literal: 'أين عداد تسجيل الدخول؟',
        situation: 'عند الوصول للمطار',
        usage: 'للسؤال عن مكان التسجيل',
        formality: 'neutral',
        variations: ['Where can I check in?', 'Is this the check-in desk?'],
        level: 'elementary'
      },
      {
        id: 'en-p-travel-2',
        phrase: 'I have a reservation under the name...',
        translation: 'لدي حجز باسم...',
        pronunciation: '/aɪ hæv ə ˌrezərˈveɪʃn ˈʌndər ðə neɪm/',
        literal: 'لدي حجز تحت الاسم...',
        situation: 'عند الفندق',
        usage: 'لتأكيد حجزك',
        formality: 'formal',
        variations: ["I booked a room under...", "There should be a reservation for..."],
        level: 'elementary'
      },
      {
        id: 'en-p-travel-3',
        phrase: 'My flight has been delayed',
        translation: 'تأخرت رحلتي',
        pronunciation: '/maɪ flaɪt hæz biːn dɪˈleɪd/',
        literal: 'رحلتي تم تأخيرها',
        situation: 'عند تأخر الرحلة',
        usage: 'لإخبار شخص عن التأخير',
        formality: 'neutral',
        variations: ['The flight is delayed', 'We have a delay'],
        level: 'elementary'
      }
    ],
    conversations: [
      {
        id: 'en-c-travel-1',
        title: 'At the Airport Check-in',
        titleAr: 'في تسجيل المطار',
        situation: 'Checking in for a flight',
        situationAr: 'التسجيل لرحلة طيران',
        characters: ['Agent', 'You'],
        lines: [
          { speaker: 'Agent', text: 'Good morning! May I see your passport, please?', translation: 'صباح الخير! جواز سفرك، من فضلك؟', hint: 'تحية وطلب الجواز' },
          { speaker: 'You', text: 'Good morning. Here you go.', translation: 'صباح الخير. تفضل.', hint: 'أعطه الجواز' },
          { speaker: 'Agent', text: 'Thank you. Where are you flying to today?', translation: 'شكراً. إلى أين تسافر اليوم؟', hint: 'يسأل عن الوجهة' },
          { speaker: 'You', text: "I'm flying to New York.", translation: 'أسافر إلى نيويورك.', hint: 'أخبره بوجهتك' },
          { speaker: 'Agent', text: 'Any checked luggage?', translation: 'أي أمتعة للشحن؟', hint: 'يسأل عن الأمتعة' },
          { speaker: 'You', text: 'Yes, one suitcase.', translation: 'نعم، حقيبة واحدة.', hint: 'أخبره عن أمتعتك' },
          { speaker: 'Agent', text: "Here's your boarding pass. Gate B7. Have a nice flight!", translation: 'تفضل بطاقة الصعود. بوابة B7. رحلة سعيدة!', hint: 'يعطيك التذكرة' },
          { speaker: 'You', text: 'Thank you so much!', translation: 'شكراً جزيلاً!', hint: 'اشكره' }
        ],
        level: 'elementary'
      }
    ],
    grammar: {
      title: 'Present Perfect',
      titleAr: 'المضارع التام',
      explanation: 'Use "has/have + past participle" for actions that happened at an unspecified time or have a result now.',
      explanationAr: 'استخدم "has/have + التصريف الثالث" لأفعال حدثت في وقت غير محدد أو لها نتيجة الآن.',
      examples: [
        { text: 'I have lost my passport', translation: 'فقدت جواز سفري (والآن لا أجده)' },
        { text: 'The flight has been delayed', translation: 'تأخرت الرحلة (وما زالت متأخرة)' },
        { text: 'Have you ever been to Paris?', translation: 'هل زرت باريس من قبل؟' }
      ]
    },
    cultureTip: {
      title: 'Airport Security',
      content: 'في المطارات الغربية، كن مستعداً لخلع الحذاء والحزام عند التفتيش الأمني. لا تمزح عن الأسلحة أو المتفجرات - هذا يُعتبر جريمة!'
    }
  },
  {
    id: 'en-shopping-1',
    title: 'Shopping',
    titleAr: 'التسوق',
    description: 'Shop like a local at stores and markets',
    descriptionAr: 'تسوق كالسكان المحليين في المتاجر والأسواق',
    category: 'daily',
    categoryAr: 'الحياة اليومية',
    level: 'beginner',
    duration: 15,
    xp: 75,
    icon: '🛍️',
    words: [
      {
        id: 'en-w-shop-1',
        word: 'Price',
        translation: 'سعر',
        transliteration: 'برايس',
        pronunciation: '/praɪs/',
        examples: ["What's the price?", 'The price is too high.'],
        examplesTranslation: ['ما السعر؟', 'السعر مرتفع جداً.'],
        memoryTip: 'Prize (جائزة) ≠ Price (سعر) - انتبه للفرق!',
        category: 'shopping',
        level: 'beginner'
      },
      {
        id: 'en-w-shop-2',
        word: 'Size',
        translation: 'مقاس',
        transliteration: 'سايز',
        pronunciation: '/saɪz/',
        examples: ['What size do you wear?', 'Do you have this in a larger size?'],
        examplesTranslation: ['ما مقاسك؟', 'هل لديكم هذا بمقاس أكبر؟'],
        memoryTip: 'Size = حجم/مقاس',
        category: 'shopping',
        level: 'beginner'
      },
      {
        id: 'en-w-shop-3',
        word: 'Discount',
        translation: 'تخفيض/خصم',
        transliteration: 'ديسكاونت',
        pronunciation: '/ˈdɪskaʊnt/',
        examples: ['Is there a discount?', '20% discount on all items.'],
        examplesTranslation: ['هل هناك تخفيض؟', 'تخفيض 20% على كل الأصناف.'],
        memoryTip: 'Dis (إزالة) + Count (حساب) = إنقاص من الحساب',
        category: 'shopping',
        level: 'beginner'
      },
      {
        id: 'en-w-shop-4',
        word: 'Receipt',
        translation: 'إيصال/فاتورة',
        transliteration: 'ريسيت',
        pronunciation: '/rɪˈsiːt/',
        examples: ['Can I have the receipt?', 'Keep your receipt.'],
        examplesTranslation: ['هل يمكنني الحصول على الإيصال؟', 'احتفظ بالإيصال.'],
        memoryTip: 'Receive → Receipt (ما تستلمه كدليل)',
        category: 'shopping',
        level: 'beginner'
      }
    ],
    phrases: [
      {
        id: 'en-p-shop-1',
        phrase: "I'm just looking, thank you",
        translation: 'أنا أتفرج فقط، شكراً',
        pronunciation: '/aɪm dʒʌst ˈlʊkɪŋ θæŋk juː/',
        literal: 'أنا فقط أنظر، شكراً لك',
        situation: 'عندما يسألك البائع إذا كنت تحتاج مساعدة',
        usage: 'طريقة مهذبة لرفض المساعدة',
        formality: 'neutral',
        variations: ["I'm just browsing", "No thanks, just looking"],
        level: 'beginner'
      },
      {
        id: 'en-p-shop-2',
        phrase: 'Do you have this in a different color?',
        translation: 'هل لديكم هذا بلون مختلف؟',
        pronunciation: '/duː juː hæv ðɪs ɪn ə ˈdɪfrənt ˈkʌlər/',
        literal: 'هل لديك هذا في لون مختلف؟',
        situation: 'عند البحث عن خيارات',
        usage: 'للسؤال عن ألوان أخرى',
        formality: 'neutral',
        variations: ['Does this come in other colors?', 'What colors do you have?'],
        level: 'beginner'
      },
      {
        id: 'en-p-shop-3',
        phrase: 'Can I try this on?',
        translation: 'هل يمكنني تجربة هذا؟',
        pronunciation: '/kæn aɪ traɪ ðɪs ɒn/',
        literal: 'هل أستطيع أن أجرب هذا؟',
        situation: 'قبل شراء الملابس',
        usage: 'للسؤال عن غرفة القياس',
        formality: 'neutral',
        variations: ['Where are the fitting rooms?', 'May I try this on?'],
        level: 'beginner'
      }
    ],
    conversations: [
      {
        id: 'en-c-shop-1',
        title: 'At a Clothing Store',
        titleAr: 'في متجر ملابس',
        situation: 'Buying clothes',
        situationAr: 'شراء ملابس',
        characters: ['Salesperson', 'You'],
        lines: [
          { speaker: 'Salesperson', text: 'Hi! Can I help you find something?', translation: 'مرحباً! هل يمكنني مساعدتك؟', hint: 'عرض المساعدة' },
          { speaker: 'You', text: "Yes, I'm looking for a jacket.", translation: 'نعم، أبحث عن جاكيت.', hint: 'أخبره ما تبحث عنه' },
          { speaker: 'Salesperson', text: 'What size do you wear?', translation: 'ما مقاسك؟', hint: 'يسأل عن المقاس' },
          { speaker: 'You', text: 'Medium, I think.', translation: 'متوسط، أظن.', hint: 'أخبره بمقاسك' },
          { speaker: 'Salesperson', text: 'How about this one? It just arrived.', translation: 'ما رأيك بهذا؟ وصل للتو.', hint: 'يعرض خياراً' },
          { speaker: 'You', text: 'Nice! Can I try it on?', translation: 'جميل! هل يمكنني تجربته؟', hint: 'اطلب التجربة' },
          { speaker: 'Salesperson', text: 'Of course! The fitting room is over there.', translation: 'بالطبع! غرفة القياس هناك.', hint: 'يوجهك' },
          { speaker: 'You', text: 'It fits perfectly! How much is it?', translation: 'مناسب تماماً! كم سعره؟', hint: 'اسأل عن السعر' }
        ],
        level: 'beginner'
      }
    ],
    grammar: {
      title: 'Do/Does Questions',
      titleAr: 'أسئلة Do/Does',
      explanation: 'Use "Do" with I/you/we/they and "Does" with he/she/it to form questions.',
      explanationAr: 'استخدم "Do" مع أنا/أنت/نحن/هم و"Does" مع هو/هي لتكوين الأسئلة.',
      examples: [
        { text: 'Do you have this in blue?', translation: 'هل لديكم هذا باللون الأزرق؟' },
        { text: 'Does it come in other sizes?', translation: 'هل يأتي بمقاسات أخرى؟' },
        { text: 'Do they accept credit cards?', translation: 'هل يقبلون بطاقات الائتمان؟' }
      ]
    },
    cultureTip: {
      title: 'No Bargaining',
      content: 'في المتاجر الغربية الكبرى، الأسعار ثابتة ولا يمكن المفاوضة عليها. الاستثناء هو أسواق السلع المستعملة (flea markets) وبعض المتاجر الصغيرة.'
    }
  },
  {
    id: 'en-health-1',
    title: 'Health & Doctor',
    titleAr: 'الصحة والطبيب',
    description: 'Communicate about health issues',
    descriptionAr: 'تواصل حول المشاكل الصحية',
    category: 'essential',
    categoryAr: 'ضروري',
    level: 'intermediate',
    duration: 20,
    xp: 120,
    icon: '🏥',
    words: [
      {
        id: 'en-w-health-1',
        word: 'Headache',
        translation: 'صداع',
        transliteration: 'هيديك',
        pronunciation: '/ˈhedeɪk/',
        examples: ['I have a terrible headache.', 'This headache won\'t go away.'],
        examplesTranslation: ['لدي صداع شديد.', 'هذا الصداع لا يختفي.'],
        memoryTip: 'Head (رأس) + Ache (ألم) = ألم الرأس',
        category: 'health',
        level: 'intermediate'
      },
      {
        id: 'en-w-health-2',
        word: 'Fever',
        translation: 'حمى',
        transliteration: 'فيفر',
        pronunciation: '/ˈfiːvər/',
        examples: ['I have a high fever.', 'The fever broke last night.'],
        examplesTranslation: ['لدي حمى عالية.', 'انكسرت الحمى البارحة.'],
        memoryTip: 'Fever = حرارة مرتفعة',
        category: 'health',
        level: 'intermediate'
      },
      {
        id: 'en-w-health-3',
        word: 'Prescription',
        translation: 'وصفة طبية',
        transliteration: 'بريسكربشن',
        pronunciation: '/prɪˈskrɪpʃn/',
        examples: ['You need a prescription for this.', 'Here\'s your prescription.'],
        examplesTranslation: ['تحتاج وصفة طبية لهذا.', 'هذه وصفتك الطبية.'],
        memoryTip: 'Pre (قبل) + Script (كتابة) = ما يُكتب مسبقاً',
        category: 'health',
        level: 'intermediate'
      },
      {
        id: 'en-w-health-4',
        word: 'Pharmacy',
        translation: 'صيدلية',
        transliteration: 'فارمسي',
        pronunciation: '/ˈfɑːrməsi/',
        examples: ['Is there a pharmacy nearby?', 'The pharmacy is closed.'],
        examplesTranslation: ['هل توجد صيدلية قريبة؟', 'الصيدلية مغلقة.'],
        memoryTip: 'Pharma = دواء (مثل pharmaceutical)',
        category: 'health',
        level: 'intermediate'
      }
    ],
    phrases: [
      {
        id: 'en-p-health-1',
        phrase: "I'm not feeling well",
        translation: 'لا أشعر بأنني بخير',
        pronunciation: '/aɪm nɒt ˈfiːlɪŋ wel/',
        literal: 'أنا لا أشعر جيداً',
        situation: 'عند المرض',
        usage: 'للتعبير عن أنك مريض',
        formality: 'neutral',
        variations: ['I feel sick', "I don't feel good", "I'm under the weather"],
        level: 'intermediate'
      },
      {
        id: 'en-p-health-2',
        phrase: 'I need to see a doctor',
        translation: 'أحتاج رؤية طبيب',
        pronunciation: '/aɪ niːd tuː siː ə ˈdɒktər/',
        literal: 'أحتاج أن أرى طبيباً',
        situation: 'عند الحاجة لعناية طبية',
        usage: 'لطلب موعد مع طبيب',
        formality: 'neutral',
        variations: ['Can I see a doctor?', 'I need medical attention'],
        level: 'intermediate'
      },
      {
        id: 'en-p-health-3',
        phrase: 'It hurts here',
        translation: 'يؤلمني هنا',
        pronunciation: '/ɪt hɜːrts hɪər/',
        literal: 'يؤلم هنا',
        situation: 'عند وصف مكان الألم للطبيب',
        usage: 'أشر إلى مكان الألم',
        formality: 'neutral',
        variations: ['I have pain here', 'This area hurts'],
        level: 'intermediate'
      }
    ],
    conversations: [
      {
        id: 'en-c-health-1',
        title: "At the Doctor's Office",
        titleAr: 'عند الطبيب',
        situation: 'Medical consultation',
        situationAr: 'استشارة طبية',
        characters: ['Doctor', 'You'],
        lines: [
          { speaker: 'Doctor', text: 'Hello! What brings you in today?', translation: 'مرحباً! ما الذي أتى بك اليوم؟', hint: 'يسأل عن سبب الزيارة' },
          { speaker: 'You', text: "I'm not feeling well. I have a headache and fever.", translation: 'لا أشعر بأنني بخير. لدي صداع وحمى.', hint: 'اشرح أعراضك' },
          { speaker: 'Doctor', text: 'How long have you had these symptoms?', translation: 'منذ متى وهذه الأعراض؟', hint: 'يسأل عن المدة' },
          { speaker: 'You', text: 'Since yesterday morning.', translation: 'منذ صباح أمس.', hint: 'أخبره بالمدة' },
          { speaker: 'Doctor', text: 'Any other symptoms? Cough, sore throat?', translation: 'أي أعراض أخرى؟ سعال، التهاب حلق؟', hint: 'يسأل عن أعراض إضافية' },
          { speaker: 'You', text: 'Yes, my throat hurts a little.', translation: 'نعم، حلقي يؤلمني قليلاً.', hint: 'أجب بصدق' },
          { speaker: 'Doctor', text: "I'll prescribe some medicine. Get plenty of rest.", translation: 'سأكتب لك دواء. احصل على راحة كافية.', hint: 'يعطيك التعليمات' },
          { speaker: 'You', text: 'Thank you, doctor.', translation: 'شكراً يا دكتور.', hint: 'اشكره' }
        ],
        level: 'intermediate'
      }
    ],
    grammar: {
      title: 'Present Perfect for Duration',
      titleAr: 'المضارع التام للمدة',
      explanation: 'Use "How long have you had...?" to ask about the duration of a condition.',
      explanationAr: 'استخدم "How long have you had...?" للسؤال عن مدة الحالة.',
      examples: [
        { text: 'How long have you had this pain?', translation: 'منذ متى وهذا الألم؟' },
        { text: 'I have had a headache since morning', translation: 'لدي صداع منذ الصباح' },
        { text: "I've been sick for three days", translation: 'كنت مريضاً لثلاثة أيام' }
      ]
    },
    cultureTip: {
      title: 'Healthcare System',
      content: 'في أمريكا، الرعاية الصحية غالية جداً. تأكد من امتلاك تأمين صحي قبل السفر. في حالات الطوارئ، اتصل على 911.'
    }
  }
];

// ===================== المزيد من دروس الإسبانية =====================
const moreSpanishLessons: Lesson[] = [
  {
    id: 'es-travel-1',
    title: 'Viajando',
    titleAr: 'السفر',
    description: 'Navega aeropuertos, hoteles y transporte',
    descriptionAr: 'تنقل في المطارات والفنادق والمواصلات',
    category: 'travel',
    categoryAr: 'السفر',
    level: 'elementary',
    duration: 20,
    xp: 100,
    icon: '✈️',
    words: [
      {
        id: 'es-w-travel-1',
        word: 'Aeropuerto',
        translation: 'مطار',
        transliteration: 'أيروبويرتو',
        pronunciation: '/aeɾoˈpweɾto/',
        examples: ['El aeropuerto está muy lleno hoy.', '¿Qué tan lejos está el aeropuerto?'],
        examplesTranslation: ['المطار مزدحم جداً اليوم.', 'كم يبعد المطار؟'],
        memoryTip: 'Aero (جوي) + Puerto (ميناء) = ميناء جوي',
        category: 'travel',
        level: 'elementary'
      },
      {
        id: 'es-w-travel-2',
        word: 'Pasaporte',
        translation: 'جواز سفر',
        transliteration: 'باسابورتي',
        pronunciation: '/pasaˈpoɾte/',
        examples: ['¿Puedo ver su pasaporte?', '¡He perdido mi pasaporte!'],
        examplesTranslation: ['هل يمكنني رؤية جواز سفرك؟', 'فقدت جواز سفري!'],
        memoryTip: 'Pasar (يمر) + Porte (حمل) = ما يحملك للعبور',
        category: 'travel',
        level: 'elementary'
      },
      {
        id: 'es-w-travel-3',
        word: 'Vuelo',
        translation: 'رحلة طيران',
        transliteration: 'بويلو',
        pronunciation: '/ˈbwelo/',
        examples: ['Mi vuelo es a las 3.', 'El vuelo se ha retrasado.'],
        examplesTranslation: ['رحلتي في الساعة 3.', 'تأخرت الرحلة.'],
        memoryTip: 'Volar (يطير) → Vuelo (رحلة طيران)',
        category: 'travel',
        level: 'elementary'
      },
      {
        id: 'es-w-travel-4',
        word: 'Maleta',
        translation: 'حقيبة سفر',
        transliteration: 'ماليتا',
        pronunciation: '/maˈleta/',
        examples: ['¿Dónde está la recogida de maletas?', 'Mi maleta está perdida.'],
        examplesTranslation: ['أين استلام الأمتعة؟', 'حقيبتي مفقودة.'],
        memoryTip: 'Maleta = حقيبة (مثل المالة بالعامية!)',
        category: 'travel',
        level: 'elementary'
      },
      {
        id: 'es-w-travel-5',
        word: 'Reserva',
        translation: 'حجز',
        transliteration: 'ريسيرفا',
        pronunciation: '/reˈseɾβa/',
        examples: ['Tengo una reserva.', '¿Puedo hacer una reserva?'],
        examplesTranslation: ['لدي حجز.', 'هل يمكنني عمل حجز؟'],
        memoryTip: 'Reservar (يحجز) → Reserva (حجز)',
        category: 'travel',
        level: 'elementary'
      }
    ],
    phrases: [
      {
        id: 'es-p-travel-1',
        phrase: '¿Dónde está el mostrador de facturación?',
        translation: 'أين مكتب تسجيل الدخول؟',
        pronunciation: '/ˈdonde esˈta el mostɾaˈðoɾ ðe faktuɾaˈθjon/',
        literal: 'أين مكتب الفوترة؟',
        situation: 'عند الوصول للمطار',
        usage: 'للسؤال عن مكان التسجيل',
        formality: 'neutral',
        variations: ['¿Dónde puedo facturar?', '¿Es este el mostrador de facturación?'],
        level: 'elementary'
      },
      {
        id: 'es-p-travel-2',
        phrase: 'Tengo una reserva a nombre de...',
        translation: 'لدي حجز باسم...',
        pronunciation: '/ˈteŋgo ˈuna reˈseɾβa a ˈnombɾe ðe/',
        literal: 'لدي حجز باسم...',
        situation: 'عند الفندق',
        usage: 'لتأكيد حجزك',
        formality: 'formal',
        variations: ['Reservé una habitación a nombre de...', 'Debería haber una reserva para...'],
        level: 'elementary'
      },
      {
        id: 'es-p-travel-3',
        phrase: 'Mi vuelo se ha retrasado',
        translation: 'تأخرت رحلتي',
        pronunciation: '/mi ˈbwelo se a retɾaˈsaðo/',
        literal: 'رحلتي تأخرت',
        situation: 'عند تأخر الرحلة',
        usage: 'لإخبار شخص عن التأخير',
        formality: 'neutral',
        variations: ['El vuelo está retrasado', 'Hay un retraso'],
        level: 'elementary'
      }
    ],
    conversations: [
      {
        id: 'es-c-travel-1',
        title: 'En el mostrador del aeropuerto',
        titleAr: 'في تسجيل المطار',
        situation: 'Facturación para un vuelo',
        situationAr: 'التسجيل لرحلة طيران',
        characters: ['Agente', 'You'],
        lines: [
          { speaker: 'Agente', text: '¡Buenos días! ¿Me permite su pasaporte, por favor?', translation: 'صباح الخير! جواز سفرك، من فضلك؟', hint: 'تحية وطلب الجواز' },
          { speaker: 'You', text: 'Buenos días. Aquí tiene.', translation: 'صباح الخير. تفضل.', hint: 'أعطه الجواز' },
          { speaker: 'Agente', text: 'Gracias. ¿A dónde viaja hoy?', translation: 'شكراً. إلى أين تسافر اليوم؟', hint: 'يسأل عن الوجهة' },
          { speaker: 'You', text: 'Viajo a Barcelona.', translation: 'أسافر إلى برشلونة.', hint: 'أخبره بوجهتك' },
          { speaker: 'Agente', text: '¿Alguna maleta para facturar?', translation: 'أي أمتعة للشحن؟', hint: 'يسأل عن الأمتعة' },
          { speaker: 'You', text: 'Sí, una maleta.', translation: 'نعم، حقيبة واحدة.', hint: 'أخبره عن أمتعتك' },
          { speaker: 'Agente', text: 'Aquí tiene su tarjeta de embarque. Puerta B7. ¡Buen viaje!', translation: 'تفضل بطاقة الصعود. بوابة B7. رحلة سعيدة!', hint: 'يعطيك التذكرة' },
          { speaker: 'You', text: '¡Muchas gracias!', translation: 'شكراً جزيلاً!', hint: 'اشكره' }
        ],
        level: 'elementary'
      }
    ],
    grammar: {
      title: 'Pretérito Perfecto',
      titleAr: 'الماضي القريب',
      explanation: 'Use "he/has/ha + participio" for recent past actions with present relevance.',
      explanationAr: 'استخدم "he/has/ha + اسم المفعول" لأفعال ماضية قريبة لها علاقة بالحاضر.',
      examples: [
        { text: 'He perdido mi pasaporte', translation: 'فقدت جواز سفري' },
        { text: 'El vuelo se ha retrasado', translation: 'تأخرت الرحلة' },
        { text: '¿Has estado en París?', translation: 'هل زرت باريس؟' }
      ]
    },
    cultureTip: {
      title: 'La Siesta',
      content: 'في إسبانيا، بعض المتاجر تغلق من 2-5 مساءً للقيلولة (siesta). هذا التقليد يتلاشى في المدن الكبرى لكنه لا يزال شائعاً في المدن الصغيرة.'
    }
  },
  {
    id: 'es-shopping-1',
    title: 'De Compras',
    titleAr: 'التسوق',
    description: 'Compra como un local en tiendas y mercados',
    descriptionAr: 'تسوق كالسكان المحليين في المتاجر والأسواق',
    category: 'daily',
    categoryAr: 'الحياة اليومية',
    level: 'beginner',
    duration: 15,
    xp: 75,
    icon: '🛍️',
    words: [
      {
        id: 'es-w-shop-1',
        word: 'Precio',
        translation: 'سعر',
        transliteration: 'بريثيو',
        pronunciation: '/ˈpɾeθjo/',
        examples: ['¿Cuál es el precio?', 'El precio es muy alto.'],
        examplesTranslation: ['ما السعر؟', 'السعر مرتفع جداً.'],
        memoryTip: 'Precio ≈ Price بالإنجليزية',
        category: 'shopping',
        level: 'beginner'
      },
      {
        id: 'es-w-shop-2',
        word: 'Talla',
        translation: 'مقاس',
        transliteration: 'تايا',
        pronunciation: '/ˈtaʎa/',
        examples: ['¿Qué talla usas?', '¿Tienen esto en una talla más grande?'],
        examplesTranslation: ['ما مقاسك؟', 'هل لديكم هذا بمقاس أكبر؟'],
        memoryTip: 'Talla = قطع/حجم',
        category: 'shopping',
        level: 'beginner'
      },
      {
        id: 'es-w-shop-3',
        word: 'Descuento',
        translation: 'تخفيض/خصم',
        transliteration: 'ديسكوينتو',
        pronunciation: '/desˈkwento/',
        examples: ['¿Hay descuento?', '20% de descuento en todo.'],
        examplesTranslation: ['هل هناك تخفيض؟', 'تخفيض 20% على كل شيء.'],
        memoryTip: 'Des (إزالة) + Cuento (حساب) = إنقاص',
        category: 'shopping',
        level: 'beginner'
      },
      {
        id: 'es-w-shop-4',
        word: 'Recibo',
        translation: 'إيصال',
        transliteration: 'ريثيبو',
        pronunciation: '/reˈθiβo/',
        examples: ['¿Me da el recibo?', 'Guarde su recibo.'],
        examplesTranslation: ['هل تعطيني الإيصال؟', 'احتفظ بالإيصال.'],
        memoryTip: 'Recibir (يستلم) → Recibo (إيصال)',
        category: 'shopping',
        level: 'beginner'
      }
    ],
    phrases: [
      {
        id: 'es-p-shop-1',
        phrase: 'Solo estoy mirando, gracias',
        translation: 'أنا أتفرج فقط، شكراً',
        pronunciation: '/ˈsolo esˈtoj miˈɾando ˈɡɾaθjas/',
        literal: 'فقط أنا أنظر، شكراً',
        situation: 'عندما يسألك البائع إذا كنت تحتاج مساعدة',
        usage: 'طريقة مهذبة لرفض المساعدة',
        formality: 'neutral',
        variations: ['Solo estoy echando un vistazo', 'No gracias, solo miro'],
        level: 'beginner'
      },
      {
        id: 'es-p-shop-2',
        phrase: '¿Tienen esto en otro color?',
        translation: 'هل لديكم هذا بلون آخر؟',
        pronunciation: '/ˈtjenen ˈesto en ˈotɾo koˈloɾ/',
        literal: 'هل لديكم هذا في لون آخر؟',
        situation: 'عند البحث عن خيارات',
        usage: 'للسؤال عن ألوان أخرى',
        formality: 'neutral',
        variations: ['¿Viene en otros colores?', '¿Qué colores tienen?'],
        level: 'beginner'
      },
      {
        id: 'es-p-shop-3',
        phrase: '¿Puedo probármelo?',
        translation: 'هل يمكنني تجربته؟',
        pronunciation: '/ˈpweðo pɾoˈβaɾmelo/',
        literal: 'هل أستطيع أجربه لنفسي؟',
        situation: 'قبل شراء الملابس',
        usage: 'للسؤال عن غرفة القياس',
        formality: 'neutral',
        variations: ['¿Dónde están los probadores?', '¿Me lo puedo probar?'],
        level: 'beginner'
      }
    ],
    conversations: [
      {
        id: 'es-c-shop-1',
        title: 'En una tienda de ropa',
        titleAr: 'في متجر ملابس',
        situation: 'Comprando ropa',
        situationAr: 'شراء ملابس',
        characters: ['Vendedor', 'You'],
        lines: [
          { speaker: 'Vendedor', text: '¡Hola! ¿Le puedo ayudar en algo?', translation: 'مرحباً! هل يمكنني مساعدتك؟', hint: 'عرض المساعدة' },
          { speaker: 'You', text: 'Sí, estoy buscando una chaqueta.', translation: 'نعم، أبحث عن جاكيت.', hint: 'أخبره ما تبحث عنه' },
          { speaker: 'Vendedor', text: '¿Qué talla usa?', translation: 'ما مقاسك؟', hint: 'يسأل عن المقاس' },
          { speaker: 'You', text: 'Mediana, creo.', translation: 'متوسط، أظن.', hint: 'أخبره بمقاسك' },
          { speaker: 'Vendedor', text: '¿Qué le parece esta? Acaba de llegar.', translation: 'ما رأيك بهذه؟ وصلت للتو.', hint: 'يعرض خياراً' },
          { speaker: 'You', text: '¡Bonita! ¿Puedo probármela?', translation: 'جميلة! هل يمكنني تجربتها؟', hint: 'اطلب التجربة' },
          { speaker: 'Vendedor', text: '¡Por supuesto! El probador está allí.', translation: 'بالطبع! غرفة القياس هناك.', hint: 'يوجهك' },
          { speaker: 'You', text: '¡Me queda perfecta! ¿Cuánto cuesta?', translation: 'مناسبة تماماً! كم سعرها؟', hint: 'اسأل عن السعر' }
        ],
        level: 'beginner'
      }
    ],
    grammar: {
      title: 'Verbos Reflexivos',
      titleAr: 'الأفعال الانعكاسية',
      explanation: 'Reflexive verbs show action done to oneself: me, te, se, nos, os, se.',
      explanationAr: 'الأفعال الانعكاسية تُظهر فعلاً يقع على النفس.',
      examples: [
        { text: '¿Puedo probármelo?', translation: 'هل يمكنني تجربته (على نفسي)؟' },
        { text: 'Me llamo Ana', translation: 'أُدعى آنا (أسمي نفسي)' },
        { text: 'Se levanta temprano', translation: 'يستيقظ باكراً (يرفع نفسه)' }
      ]
    },
    cultureTip: {
      title: 'Regatear',
      content: 'في أسواق الشارع (mercadillos) والمتاجر الصغيرة في إسبانيا، يمكنك أحياناً التفاوض على السعر، خاصة إذا اشتريت أكثر من قطعة.'
    }
  }
];

// ===================== تصدير اللغات =====================
export const languages: LanguageData[] = [
  {
    code: 'en',
    name: 'English',
    nameAr: 'الإنجليزية',
    flag: '🇺🇸',
    nativeName: 'English',
    speechCode: 'en-US',
    lessons: [...englishLessons, ...moreEnglishLessons],
    dayScenarios: englishDayScenarios
  },
  {
    code: 'es',
    name: 'Spanish',
    nameAr: 'الإسبانية',
    flag: '🇪🇸',
    nativeName: 'Español',
    speechCode: 'es-ES',
    lessons: [...spanishLessons, ...moreSpanishLessons],
    dayScenarios: spanishDayScenarios
  }
];

export const getLanguageData = (code: Language): LanguageData | undefined => {
  return languages.find(lang => lang.code === code);
};

export const getLevelName = (level: Level): { en: string; ar: string } => {
  const levels = {
    beginner: { en: 'Beginner', ar: 'مبتدئ' },
    elementary: { en: 'Elementary', ar: 'أساسي' },
    intermediate: { en: 'Intermediate', ar: 'متوسط' },
    upper: { en: 'Upper Intermediate', ar: 'فوق المتوسط' },
    advanced: { en: 'Advanced', ar: 'متقدم' },
    fluent: { en: 'Fluent', ar: 'طليق' }
  };
  return levels[level];
};
