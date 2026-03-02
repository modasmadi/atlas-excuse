// أنواع البيانات الأساسية

export type Language = 'en' | 'es' | 'fr' | 'de';

export type Level = 'beginner' | 'elementary' | 'intermediate' | 'upper' | 'advanced' | 'fluent';

export interface Word {
  id: string;
  word: string;
  translation: string;
  transliteration: string;
  pronunciation: string;
  examples: string[];
  examplesTranslation: string[];
  memoryTip: string;
  category: string;
  level: Level;
}

export interface Phrase {
  id: string;
  phrase: string;
  translation: string;
  pronunciation: string;
  literal?: string;
  situation: string;
  usage: string;
  formality: 'formal' | 'informal' | 'neutral';
  variations: string[];
  level: Level;
}

export interface DialogueLine {
  speaker: string;
  text: string;
  translation: string;
  hint?: string;
}

export interface Conversation {
  id: string;
  title: string;
  titleAr: string;
  situation: string;
  situationAr: string;
  characters: string[];
  lines: DialogueLine[];
  level: Level;
}

export interface GrammarTip {
  title: string;
  titleAr: string;
  explanation: string;
  explanationAr: string;
  examples: { text: string; translation: string }[];
}

export interface Lesson {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  category: string;
  categoryAr: string;
  level: Level;
  duration: number;
  xp: number;
  icon: string;
  words: Word[];
  phrases: Phrase[];
  conversations: Conversation[];
  grammar?: GrammarTip;
  cultureTip?: {
    title: string;
    content: string;
  };
}

export interface DayScenario {
  id: string;
  time: string;
  timeAr: string;
  title: string;
  titleAr: string;
  icon: string;
  location: string;
  locationAr: string;
  conversation: Conversation;
}

export interface Challenge {
  id: string;
  type: 'listening' | 'speaking' | 'translation' | 'fillBlank' | 'reorder' | 'match';
  question: string;
  questionAr: string;
  answer: string;
  options?: string[];
  audio?: string;
  hint?: string;
}

export interface UserProgress {
  currentLanguage: Language;
  level: Level;
  xp: number;
  streak: number;
  lastActive: string;
  completedLessons: string[];
  masteredWords: string[];
  masteredPhrases: string[];
  dailyGoal: number;
  todayXp: number;
  skills: {
    listening: number;
    speaking: number;
    reading: number;
    vocabulary: number;
    grammar: number;
  };
  achievements: string[];
  weeklyActivity: number[];
}

export interface LanguageData {
  code: Language;
  name: string;
  nameAr: string;
  flag: string;
  nativeName: string;
  speechCode: string;
  lessons: Lesson[];
  dayScenarios: DayScenario[];
}
