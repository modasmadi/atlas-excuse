import { useState, useEffect, useCallback } from 'react';
import { 
  Language, Level, Word, Phrase, 
  Conversation, Lesson, UserProgress 
} from './types';
import { languages, getLanguageData, getLevelName } from './data/languages';
import { useSpeech } from './hooks/useSpeech';
import { useLocalStorage } from './hooks/useLocalStorage';

// ===================== التطبيق الرئيسي =====================
type Screen = 'welcome' | 'language-select' | 'assessment' | 'dashboard' | 'lesson' | 'immersion' | 'conversation' | 'progress' | 'review';

const defaultProgress: UserProgress = {
  currentLanguage: 'en',
  level: 'beginner',
  xp: 0,
  streak: 0,
  lastActive: new Date().toISOString().split('T')[0],
  completedLessons: [],
  masteredWords: [],
  masteredPhrases: [],
  dailyGoal: 50,
  todayXp: 0,
  skills: { listening: 0, speaking: 0, reading: 0, vocabulary: 0, grammar: 0 },
  achievements: [],
  weeklyActivity: [0, 0, 0, 0, 0, 0, 0]
};

export default function App() {
  const [screen, setScreen] = useState<Screen>('welcome');
  const [progress, setProgress] = useLocalStorage<UserProgress>('fluency-progress', defaultProgress);
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const { speak } = useSpeech();

  const langData = getLanguageData(progress.currentLanguage);

  // تحديث الـ streak
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const lastActive = progress.lastActive;
    
    if (lastActive !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split('T')[0];
      
      if (lastActive === yesterdayStr) {
        setProgress(prev => ({ ...prev, streak: prev.streak + 1, lastActive: today, todayXp: 0 }));
      } else if (lastActive !== today) {
        setProgress(prev => ({ ...prev, streak: 1, lastActive: today, todayXp: 0 }));
      }
    }
  }, []);

  const addXp = useCallback((amount: number) => {
    setProgress(prev => ({
      ...prev,
      xp: prev.xp + amount,
      todayXp: prev.todayXp + amount,
      lastActive: new Date().toISOString().split('T')[0]
    }));
  }, [setProgress]);

  const completeLesson = useCallback((lessonId: string, xp: number) => {
    setProgress(prev => ({
      ...prev,
      completedLessons: prev.completedLessons.includes(lessonId) 
        ? prev.completedLessons 
        : [...prev.completedLessons, lessonId],
      xp: prev.xp + xp,
      todayXp: prev.todayXp + xp
    }));
  }, [setProgress]);

  const switchLanguage = useCallback((lang: Language) => {
    setProgress(prev => ({ ...prev, currentLanguage: lang }));
    setScreen('dashboard');
  }, [setProgress]);

  const speakText = useCallback((text: string) => {
    if (langData) {
      speak(text, langData.speechCode);
    }
  }, [speak, langData]);

  // ===================== شاشة الترحيب =====================
  const WelcomeScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center p-4">
      <div className="text-center text-white max-w-2xl">
        <div className="text-8xl mb-6">🗣️</div>
        <h1 className="text-5xl font-bold mb-4">Fluency</h1>
        <h2 className="text-2xl mb-2 opacity-90">فلونسي</h2>
        <p className="text-xl mb-8 opacity-80">تحدث اللغة كأنك عشت سنة في بلدها</p>
        
        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-center gap-3 text-lg">
            <span className="text-2xl">🎯</span>
            <span>تعلّم من محادثات حقيقية، ليس من كتب</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-lg">
            <span className="text-2xl">🗣️</span>
            <span>ركّز على التحدث والاستماع أولاً</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-lg">
            <span className="text-2xl">🌍</span>
            <span>عِش يوماً كاملاً في البلد افتراضياً</span>
          </div>
        </div>

        <button
          onClick={() => setScreen('language-select')}
          className="bg-white text-purple-600 px-12 py-4 rounded-2xl text-xl font-bold shadow-2xl hover:scale-105 transition-transform"
        >
          ابدأ رحلتك 🚀
        </button>
      </div>
    </div>
  );

  // ===================== اختيار اللغة =====================
  const LanguageSelectScreen = () => (
    <div className="min-h-screen bg-gray-50 p-4" dir="rtl">
      <div className="max-w-2xl mx-auto pt-8">
        <h1 className="text-3xl font-bold text-center mb-2">اختر اللغة</h1>
        <p className="text-gray-600 text-center mb-8">أي لغة تريد إتقانها؟</p>
        
        <div className="grid gap-4">
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => {
                setProgress(prev => ({ ...prev, currentLanguage: lang.code }));
                setScreen('assessment');
              }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center gap-4 border-2 border-transparent hover:border-purple-500"
            >
              <span className="text-5xl">{lang.flag}</span>
              <div className="text-right flex-1">
                <h3 className="text-2xl font-bold">{lang.nameAr}</h3>
                <p className="text-gray-500">{lang.nativeName}</p>
              </div>
              <span className="text-3xl">←</span>
            </button>
          ))}
        </div>

        <div className="mt-8 p-4 bg-purple-50 rounded-xl text-center">
          <p className="text-purple-700">🌟 قريباً: الفرنسية، الألمانية، الإيطالية</p>
        </div>
      </div>
    </div>
  );

  // ===================== اختبار تحديد المستوى =====================
  const AssessmentScreen = () => {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<number[]>([]);
    
    const questions = langData?.code === 'en' ? [
      {
        type: 'listening',
        audio: 'Hello, how are you today?',
        question: 'ماذا سمعت؟',
        options: ['تحية وسؤال عن الحال', 'طلب طعام', 'وداع', 'لم أفهم شيئاً'],
        correct: 0
      },
      {
        type: 'reading',
        text: 'I would like a cup of coffee, please.',
        question: 'ما معنى هذه الجملة؟',
        options: ['أريد فنجان قهوة، من فضلك', 'أين المقهى؟', 'القهوة غالية', 'لا أحب القهوة'],
        correct: 0
      },
      {
        type: 'vocabulary',
        question: 'ما معنى كلمة "Tomorrow"؟',
        options: ['أمس', 'اليوم', 'غداً', 'الأسبوع'],
        correct: 2
      },
      {
        type: 'grammar',
        question: 'اختر الصيغة الصحيحة:',
        text: 'She ___ to school every day.',
        options: ['go', 'goes', 'going', 'went'],
        correct: 1
      }
    ] : [
      {
        type: 'listening',
        audio: '¡Hola! ¿Cómo estás?',
        question: 'ماذا سمعت؟',
        options: ['تحية وسؤال عن الحال', 'طلب طعام', 'وداع', 'لم أفهم شيئاً'],
        correct: 0
      },
      {
        type: 'reading',
        text: 'Quisiera un café con leche, por favor.',
        question: 'ما معنى هذه الجملة؟',
        options: ['أريد قهوة بالحليب، من فضلك', 'أين المقهى؟', 'القهوة غالية', 'لا أحب القهوة'],
        correct: 0
      },
      {
        type: 'vocabulary',
        question: 'ما معنى كلمة "Mañana"؟',
        options: ['أمس', 'اليوم', 'غداً/الصباح', 'الأسبوع'],
        correct: 2
      },
      {
        type: 'grammar',
        question: 'اختر الصيغة الصحيحة:',
        text: 'Ella ___ a la escuela cada día.',
        options: ['ir', 'va', 'voy', 'van'],
        correct: 1
      }
    ];

    const currentQ = questions[step];

    const handleAnswer = (idx: number) => {
      const newAnswers = [...answers, idx];
      setAnswers(newAnswers);
      
      if (step < questions.length - 1) {
        setStep(step + 1);
      } else {
        // حساب المستوى
        const correct = newAnswers.filter((a, i) => a === questions[i].correct).length;
        let level: Level = 'beginner';
        if (correct === 4) level = 'intermediate';
        else if (correct >= 2) level = 'elementary';
        
        setProgress(prev => ({ ...prev, level }));
        setScreen('dashboard');
      }
    };

    return (
      <div className="min-h-screen bg-gray-50 p-4" dir="rtl">
        <div className="max-w-2xl mx-auto pt-8">
          {/* شريط التقدم */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-500">اختبار تحديد المستوى</span>
              <span className="text-sm text-gray-500">{step + 1} / {questions.length}</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div 
                className="h-full bg-purple-500 rounded-full transition-all"
                style={{ width: `${((step + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* السؤال */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">
                {currentQ.type === 'listening' ? '🎧' : currentQ.type === 'reading' ? '📖' : currentQ.type === 'vocabulary' ? '📝' : '📚'}
              </span>
              <span className="text-sm text-gray-500">
                {currentQ.type === 'listening' ? 'استماع' : currentQ.type === 'reading' ? 'قراءة' : currentQ.type === 'vocabulary' ? 'مفردات' : 'قواعد'}
              </span>
            </div>

            {currentQ.audio && (
              <div className="mb-4">
                <button
                  onClick={() => speakText(currentQ.audio!)}
                  className="w-full bg-purple-100 p-4 rounded-xl flex items-center justify-center gap-2 hover:bg-purple-200 transition-colors"
                >
                  <span className="text-3xl">🔊</span>
                  <span className="text-purple-700">اضغط للاستماع</span>
                </button>
              </div>
            )}

            {currentQ.text && (
              <div className="bg-gray-100 p-4 rounded-xl mb-4 text-center">
                <p className="text-xl font-medium" dir="ltr">{currentQ.text}</p>
              </div>
            )}

            <h2 className="text-xl font-bold mb-6">{currentQ.question}</h2>

            <div className="space-y-3">
              {currentQ.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  className="w-full p-4 bg-gray-50 rounded-xl text-right hover:bg-purple-50 hover:border-purple-500 border-2 border-transparent transition-all"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // ===================== لوحة التحكم الرئيسية =====================
  const DashboardScreen = () => {
    if (!langData) return null;

    const progressPercent = Math.min((progress.todayXp / progress.dailyGoal) * 100, 100);
    const levelInfo = getLevelName(progress.level);

    return (
      <div className="min-h-screen bg-gray-50 pb-20" dir="rtl">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 pb-8">
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setScreen('language-select')}
                  className="text-4xl hover:scale-110 transition-transform"
                >
                  {langData.flag}
                </button>
                <div>
                  <h1 className="font-bold">{langData.nameAr}</h1>
                  <p className="text-sm opacity-80">{levelInfo.ar}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <span className="text-2xl">🔥</span>
                  <p className="text-sm font-bold">{progress.streak}</p>
                </div>
                <div className="text-center">
                  <span className="text-2xl">⭐</span>
                  <p className="text-sm font-bold">{progress.xp}</p>
                </div>
              </div>
            </div>

            {/* Daily Progress */}
            <div className="bg-white/20 rounded-xl p-4">
              <div className="flex justify-between mb-2">
                <span>هدف اليوم</span>
                <span>{progress.todayXp} / {progress.dailyGoal} XP</span>
              </div>
              <div className="h-3 bg-white/30 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-yellow-400 rounded-full transition-all"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 -mt-4">
          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button
              onClick={() => setScreen('immersion')}
              className="bg-gradient-to-br from-orange-400 to-pink-500 text-white p-4 rounded-2xl shadow-lg"
            >
              <span className="text-3xl mb-2 block">🌍</span>
              <span className="font-bold">يومك في البلد</span>
              <p className="text-xs opacity-80 mt-1">عش يوماً كاملاً</p>
            </button>
            <button
              onClick={() => setScreen('review')}
              className="bg-gradient-to-br from-green-400 to-teal-500 text-white p-4 rounded-2xl shadow-lg"
            >
              <span className="text-3xl mb-2 block">🔄</span>
              <span className="font-bold">مراجعة</span>
              <p className="text-xs opacity-80 mt-1">راجع ما تعلمته</p>
            </button>
          </div>

          {/* Lessons */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">الدروس</h2>
            <div className="space-y-3">
              {langData.lessons.map(lesson => {
                const isCompleted = progress.completedLessons.includes(lesson.id);
                return (
                  <button
                    key={lesson.id}
                    onClick={() => {
                      setCurrentLesson(lesson);
                      setScreen('lesson');
                    }}
                    className={`w-full bg-white p-4 rounded-2xl shadow-md flex items-center gap-4 transition-all hover:shadow-lg ${isCompleted ? 'border-2 border-green-500' : ''}`}
                  >
                    <span className="text-3xl">{lesson.icon}</span>
                    <div className="flex-1 text-right">
                      <h3 className="font-bold">{lesson.titleAr}</h3>
                      <p className="text-sm text-gray-500">{lesson.descriptionAr}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                          {getLevelName(lesson.level).ar}
                        </span>
                        <span className="text-xs text-gray-400">⏱ {lesson.duration} دقيقة</span>
                        <span className="text-xs text-yellow-600">⭐ {lesson.xp} XP</span>
                      </div>
                    </div>
                    {isCompleted ? (
                      <span className="text-2xl text-green-500">✓</span>
                    ) : (
                      <span className="text-gray-300">←</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Skills */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">مهاراتك</h2>
            <div className="bg-white rounded-2xl p-4 shadow-md">
              {[
                { key: 'listening', name: 'الاستماع', icon: '🎧' },
                { key: 'speaking', name: 'التحدث', icon: '🗣️' },
                { key: 'reading', name: 'القراءة', icon: '📖' },
                { key: 'vocabulary', name: 'المفردات', icon: '📝' },
                { key: 'grammar', name: 'القواعد', icon: '📚' }
              ].map(skill => (
                <div key={skill.key} className="flex items-center gap-3 mb-3 last:mb-0">
                  <span className="text-xl">{skill.icon}</span>
                  <span className="w-20 text-sm">{skill.name}</span>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-purple-500 rounded-full"
                      style={{ width: `${progress.skills[skill.key as keyof typeof progress.skills]}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-500 w-12">
                    {progress.skills[skill.key as keyof typeof progress.skills]}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Button */}
          <button
            onClick={() => setScreen('progress')}
            className="w-full bg-white p-4 rounded-2xl shadow-md flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">📊</span>
              <span className="font-bold">إحصائياتك</span>
            </div>
            <span className="text-gray-400">←</span>
          </button>
        </div>
      </div>
    );
  };

  // ===================== شاشة الدرس =====================
  const LessonScreen = () => {
    const [phase, setPhase] = useState<'words' | 'phrases' | 'conversation' | 'practice' | 'complete'>('words');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showTranslation, setShowTranslation] = useState(false);
    const [practiceAnswers, setPracticeAnswers] = useState<boolean[]>([]);

    if (!currentLesson || !langData) return null;

    const handleNext = () => {
      setShowTranslation(false);
      if (phase === 'words') {
        if (currentIndex < currentLesson.words.length - 1) {
          setCurrentIndex(currentIndex + 1);
        } else {
          setPhase('phrases');
          setCurrentIndex(0);
        }
      } else if (phase === 'phrases') {
        if (currentIndex < currentLesson.phrases.length - 1) {
          setCurrentIndex(currentIndex + 1);
        } else {
          setPhase('conversation');
          setCurrentIndex(0);
        }
      } else if (phase === 'conversation') {
        if (currentIndex < currentLesson.conversations.length - 1) {
          setCurrentIndex(currentIndex + 1);
        } else {
          setPhase('practice');
          setCurrentIndex(0);
        }
      }
    };

    const renderWord = (word: Word) => (
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="text-center mb-6">
          <button
            onClick={() => speakText(word.word)}
            className="text-6xl mb-4 hover:scale-110 transition-transform cursor-pointer"
          >
            🔊
          </button>
          <h2 className="text-4xl font-bold mb-2" dir="ltr">{word.word}</h2>
          <p className="text-gray-500 text-lg" dir="ltr">{word.pronunciation}</p>
          <p className="text-purple-600 font-medium mt-2">{word.transliteration}</p>
        </div>

        {showTranslation ? (
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-xl text-center">
              <p className="text-2xl font-bold text-green-700">{word.translation}</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-xl">
              <h3 className="font-bold mb-2">أمثلة:</h3>
              {word.examples.map((ex, i) => (
                <div key={i} className="mb-2">
                  <p className="font-medium" dir="ltr">{ex}</p>
                  <p className="text-sm text-gray-600">{word.examplesTranslation[i]}</p>
                </div>
              ))}
            </div>

            <div className="bg-yellow-50 p-4 rounded-xl">
              <h3 className="font-bold mb-1">💡 حيلة للتذكر:</h3>
              <p>{word.memoryTip}</p>
            </div>

            <button
              onClick={handleNext}
              className="w-full bg-purple-600 text-white py-4 rounded-xl font-bold text-lg"
            >
              التالي ←
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowTranslation(true)}
            className="w-full bg-purple-100 text-purple-700 py-4 rounded-xl font-bold text-lg"
          >
            أظهر الترجمة
          </button>
        )}
      </div>
    );

    const renderPhrase = (phrase: Phrase) => (
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="text-center mb-6">
          <button
            onClick={() => speakText(phrase.phrase)}
            className="text-5xl mb-4 hover:scale-110 transition-transform cursor-pointer"
          >
            🔊
          </button>
          <h2 className="text-2xl font-bold mb-2" dir="ltr">{phrase.phrase}</h2>
          <p className="text-gray-500" dir="ltr">{phrase.pronunciation}</p>
          <div className="flex justify-center gap-2 mt-2">
            <span className={`text-xs px-2 py-1 rounded-full ${
              phrase.formality === 'formal' ? 'bg-blue-100 text-blue-700' :
              phrase.formality === 'informal' ? 'bg-orange-100 text-orange-700' :
              'bg-gray-100 text-gray-700'
            }`}>
              {phrase.formality === 'formal' ? 'رسمي' : phrase.formality === 'informal' ? 'غير رسمي' : 'محايد'}
            </span>
          </div>
        </div>

        {showTranslation ? (
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-xl text-center">
              <p className="text-xl font-bold text-green-700">{phrase.translation}</p>
              {phrase.literal && (
                <p className="text-sm text-green-600 mt-1">حرفياً: {phrase.literal}</p>
              )}
            </div>

            <div className="bg-blue-50 p-4 rounded-xl">
              <h3 className="font-bold mb-1">📍 متى تستخدمها:</h3>
              <p>{phrase.situation}</p>
              <p className="text-sm text-gray-600 mt-1">{phrase.usage}</p>
            </div>

            {phrase.variations.length > 0 && (
              <div className="bg-purple-50 p-4 rounded-xl">
                <h3 className="font-bold mb-2">🔄 بدائل:</h3>
                {phrase.variations.map((v, i) => (
                  <button
                    key={i}
                    onClick={() => speakText(v)}
                    className="block w-full text-right p-2 hover:bg-purple-100 rounded-lg transition-colors"
                    dir="ltr"
                  >
                    🔊 {v}
                  </button>
                ))}
              </div>
            )}

            <button
              onClick={handleNext}
              className="w-full bg-purple-600 text-white py-4 rounded-xl font-bold text-lg"
            >
              التالي ←
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowTranslation(true)}
            className="w-full bg-purple-100 text-purple-700 py-4 rounded-xl font-bold text-lg"
          >
            أظهر الترجمة
          </button>
        )}
      </div>
    );

    const renderConversation = (conv: Conversation) => (
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold">{conv.titleAr}</h2>
          <p className="text-gray-500">📍 {conv.situationAr}</p>
        </div>

        <div className="space-y-3 mb-6">
          {conv.lines.map((line, i) => (
            <div 
              key={i}
              className={`p-3 rounded-xl ${
                line.speaker === 'You' 
                  ? 'bg-purple-100 mr-8' 
                  : 'bg-gray-100 ml-8'
              }`}
            >
              <div className="flex justify-between items-start mb-1">
                <span className="text-xs text-gray-500">{line.speaker}</span>
                <button 
                  onClick={() => speakText(line.text)}
                  className="text-lg"
                >
                  🔊
                </button>
              </div>
              <p className="font-medium" dir="ltr">{line.text}</p>
              {showTranslation && (
                <p className="text-sm text-gray-600 mt-1">{line.translation}</p>
              )}
              {line.hint && showTranslation && (
                <p className="text-xs text-purple-600 mt-1">💡 {line.hint}</p>
              )}
            </div>
          ))}
        </div>

        {!showTranslation ? (
          <button
            onClick={() => setShowTranslation(true)}
            className="w-full bg-purple-100 text-purple-700 py-4 rounded-xl font-bold"
          >
            أظهر الترجمة
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="w-full bg-purple-600 text-white py-4 rounded-xl font-bold"
          >
            التالي ←
          </button>
        )}
      </div>
    );

    const renderPractice = () => {
      const allItems = [...currentLesson.words, ...currentLesson.phrases];
      const item = allItems[currentIndex];
      
      if (!item) {
        // Complete
        completeLesson(currentLesson.id, currentLesson.xp);
        setPhase('complete');
        return null;
      }

      const isWord = 'word' in item;
      const text = isWord ? (item as Word).word : (item as Phrase).phrase;
      const correct = isWord ? (item as Word).translation : (item as Phrase).translation;
      
      // Generate options
      const otherTranslations = allItems
        .filter(x => x !== item)
        .map(x => 'word' in x ? (x as Word).translation : (x as Phrase).translation)
        .slice(0, 3);
      
      const options = [correct, ...otherTranslations].sort(() => Math.random() - 0.5);

      return (
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-bold text-center mb-4">اختر الترجمة الصحيحة</h2>
          
          <div className="text-center mb-6">
            <button
              onClick={() => speakText(text)}
              className="text-4xl mb-2"
            >
              🔊
            </button>
            <p className="text-2xl font-bold" dir="ltr">{text}</p>
          </div>

          <div className="space-y-3">
            {options.map((opt, i) => (
              <button
                key={i}
                onClick={() => {
                  const isCorrect = opt === correct;
                  setPracticeAnswers([...practiceAnswers, isCorrect]);
                  if (isCorrect) {
                    addXp(5);
                  }
                  setTimeout(() => {
                    setCurrentIndex(currentIndex + 1);
                  }, 500);
                }}
                className="w-full p-4 bg-gray-50 rounded-xl text-right hover:bg-purple-50 border-2 border-transparent hover:border-purple-500 transition-all"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      );
    };

    const renderComplete = () => (
      <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
        <span className="text-6xl mb-4 block">🎉</span>
        <h2 className="text-2xl font-bold mb-2">أحسنت!</h2>
        <p className="text-gray-600 mb-6">أكملت درس "{currentLesson.titleAr}"</p>
        
        <div className="bg-yellow-50 p-4 rounded-xl mb-6">
          <p className="text-lg">
            حصلت على <span className="font-bold text-yellow-600">{currentLesson.xp} XP</span>
          </p>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => {
              setScreen('dashboard');
              setCurrentLesson(null);
            }}
            className="w-full bg-purple-600 text-white py-4 rounded-xl font-bold"
          >
            العودة للرئيسية
          </button>
        </div>
      </div>
    );

    const phaseNames = {
      words: 'الكلمات',
      phrases: 'العبارات',
      conversation: 'المحادثة',
      practice: 'التمرين',
      complete: 'مكتمل'
    };

    const totalItems = currentLesson.words.length + currentLesson.phrases.length + currentLesson.conversations.length;
    let currentItem = currentIndex + 1;
    if (phase === 'phrases') currentItem += currentLesson.words.length;
    if (phase === 'conversation') currentItem += currentLesson.words.length + currentLesson.phrases.length;

    return (
      <div className="min-h-screen bg-gray-50 p-4" dir="rtl">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <button 
              onClick={() => {
                setScreen('dashboard');
                setCurrentLesson(null);
              }}
              className="text-gray-500"
            >
              ✕
            </button>
            <span className="font-bold">{currentLesson.titleAr}</span>
            <span className="text-sm text-gray-500">{phaseNames[phase]}</span>
          </div>

          {/* Progress */}
          {phase !== 'complete' && (
            <div className="mb-6">
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-purple-500 rounded-full transition-all"
                  style={{ width: `${(currentItem / totalItems) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Content */}
          {phase === 'words' && renderWord(currentLesson.words[currentIndex])}
          {phase === 'phrases' && renderPhrase(currentLesson.phrases[currentIndex])}
          {phase === 'conversation' && renderConversation(currentLesson.conversations[currentIndex])}
          {phase === 'practice' && renderPractice()}
          {phase === 'complete' && renderComplete()}
        </div>
      </div>
    );
  };

  // ===================== يومك في البلد =====================
  const ImmersionScreen = () => {
    const [scenarioIndex, setScenarioIndex] = useState(0);
    const [lineIndex, setLineIndex] = useState(0);
    const [showTranslation, setShowTranslation] = useState(false);
    const [completed, setCompleted] = useState(false);

    if (!langData) return null;

    const scenarios = langData.dayScenarios;
    const currentScn = scenarios[scenarioIndex];

    if (completed) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-orange-400 to-pink-500 p-4 flex items-center justify-center" dir="rtl">
          <div className="bg-white rounded-2xl p-8 max-w-md text-center">
            <span className="text-6xl mb-4 block">🌟</span>
            <h1 className="text-2xl font-bold mb-2">أكملت يومك!</h1>
            <p className="text-gray-600 mb-6">عشت يوماً كاملاً باللغة {langData.nameAr}</p>
            <div className="bg-yellow-50 p-4 rounded-xl mb-6">
              <p className="text-lg">حصلت على <span className="font-bold text-yellow-600">100 XP</span></p>
            </div>
            <button
              onClick={() => {
                addXp(100);
                setScreen('dashboard');
              }}
              className="w-full bg-purple-600 text-white py-4 rounded-xl font-bold"
            >
              العودة للرئيسية
            </button>
          </div>
        </div>
      );
    }

    const currentLine = currentScn.conversation.lines[lineIndex];

    const handleNext = () => {
      if (lineIndex < currentScn.conversation.lines.length - 1) {
        setLineIndex(lineIndex + 1);
        setShowTranslation(false);
      } else if (scenarioIndex < scenarios.length - 1) {
        setScenarioIndex(scenarioIndex + 1);
        setLineIndex(0);
        setShowTranslation(false);
      } else {
        setCompleted(true);
      }
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-400 to-pink-500" dir="rtl">
        {/* Header */}
        <div className="p-4">
          <div className="max-w-2xl mx-auto flex items-center justify-between text-white">
            <button onClick={() => setScreen('dashboard')} className="text-2xl">✕</button>
            <div className="text-center">
              <p className="text-sm opacity-80">يومك في {langData.code === 'es' ? 'إسبانيا' : 'أمريكا'}</p>
              <p className="font-bold">{currentScn.timeAr}</p>
            </div>
            <span className="text-2xl">{currentScn.icon}</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="px-4 mb-4">
          <div className="max-w-2xl mx-auto flex justify-between">
            {scenarios.map((s, i) => (
              <div 
                key={s.id}
                className={`text-2xl ${i <= scenarioIndex ? 'opacity-100' : 'opacity-40'}`}
              >
                {s.icon}
              </div>
            ))}
          </div>
        </div>

        {/* Scenario Card */}
        <div className="px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-6 shadow-xl">
            <div className="text-center mb-4">
              <h2 className="text-xl font-bold">{currentScn.titleAr}</h2>
              <p className="text-gray-500">📍 {currentScn.locationAr}</p>
            </div>

            {/* Current Line */}
            <div className={`p-4 rounded-xl mb-4 ${
              currentLine.speaker === 'You' 
                ? 'bg-purple-100 mr-8' 
                : 'bg-gray-100 ml-8'
            }`}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500">
                  {currentLine.speaker === 'You' ? 'أنت' : currentLine.speaker}
                </span>
                <button 
                  onClick={() => speakText(currentLine.text)}
                  className="text-xl"
                >
                  🔊
                </button>
              </div>
              <p className="text-xl font-medium" dir="ltr">{currentLine.text}</p>
              {showTranslation && (
                <p className="text-gray-600 mt-2">{currentLine.translation}</p>
              )}
            </div>

            {/* Actions */}
            <div className="space-y-3">
              {!showTranslation ? (
                <button
                  onClick={() => setShowTranslation(true)}
                  className="w-full bg-gray-100 py-3 rounded-xl font-medium"
                >
                  أظهر الترجمة
                </button>
              ) : null}
              <button
                onClick={handleNext}
                className="w-full bg-purple-600 text-white py-4 rounded-xl font-bold"
              >
                {lineIndex < currentScn.conversation.lines.length - 1 
                  ? 'التالي ←' 
                  : scenarioIndex < scenarios.length - 1 
                    ? 'المكان التالي ←' 
                    : 'إنهاء اليوم 🎉'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // ===================== المراجعة =====================
  const ReviewScreen = () => {
    const [mode, setMode] = useState<'words' | 'phrases'>('words');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [score, setScore] = useState({ correct: 0, total: 0 });

    if (!langData) return null;

    const allWords = langData.lessons.flatMap(l => l.words);
    const allPhrases = langData.lessons.flatMap(l => l.phrases);
    const items = mode === 'words' ? allWords : allPhrases;
    const currentItem = items[currentIndex];

    if (!currentItem || currentIndex >= items.length) {
      return (
        <div className="min-h-screen bg-gray-50 p-4 flex items-center justify-center" dir="rtl">
          <div className="bg-white rounded-2xl p-8 max-w-md text-center">
            <span className="text-6xl mb-4 block">🎯</span>
            <h1 className="text-2xl font-bold mb-2">أكملت المراجعة!</h1>
            <p className="text-gray-600 mb-4">
              النتيجة: {score.correct} / {score.total}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setCurrentIndex(0);
                  setScore({ correct: 0, total: 0 });
                }}
                className="flex-1 bg-purple-100 text-purple-700 py-3 rounded-xl font-bold"
              >
                مرة أخرى
              </button>
              <button
                onClick={() => setScreen('dashboard')}
                className="flex-1 bg-purple-600 text-white py-3 rounded-xl font-bold"
              >
                العودة
              </button>
            </div>
          </div>
        </div>
      );
    }

    const handleAnswer = (knew: boolean) => {
      setScore({
        correct: knew ? score.correct + 1 : score.correct,
        total: score.total + 1
      });
      if (knew) addXp(3);
      setShowAnswer(false);
      setCurrentIndex(currentIndex + 1);
    };

    const text = mode === 'words' 
      ? (currentItem as Word).word 
      : (currentItem as Phrase).phrase;
    const translation = mode === 'words'
      ? (currentItem as Word).translation
      : (currentItem as Phrase).translation;

    return (
      <div className="min-h-screen bg-gray-50 p-4" dir="rtl">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <button onClick={() => setScreen('dashboard')} className="text-gray-500">✕</button>
            <span className="font-bold">مراجعة {mode === 'words' ? 'الكلمات' : 'العبارات'}</span>
            <span className="text-sm text-gray-500">{currentIndex + 1} / {items.length}</span>
          </div>

          {/* Mode Toggle */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => { setMode('words'); setCurrentIndex(0); }}
              className={`flex-1 py-2 rounded-xl font-medium ${mode === 'words' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
            >
              كلمات
            </button>
            <button
              onClick={() => { setMode('phrases'); setCurrentIndex(0); }}
              className={`flex-1 py-2 rounded-xl font-medium ${mode === 'phrases' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
            >
              عبارات
            </button>
          </div>

          {/* Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-center mb-6">
              <button
                onClick={() => speakText(text)}
                className="text-5xl mb-4"
              >
                🔊
              </button>
              <p className="text-2xl font-bold" dir="ltr">{text}</p>
            </div>

            {showAnswer ? (
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-xl text-center">
                  <p className="text-xl font-bold text-green-700">{translation}</p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleAnswer(false)}
                    className="flex-1 bg-red-100 text-red-700 py-4 rounded-xl font-bold"
                  >
                    ❌ لم أعرفها
                  </button>
                  <button
                    onClick={() => handleAnswer(true)}
                    className="flex-1 bg-green-100 text-green-700 py-4 rounded-xl font-bold"
                  >
                    ✓ عرفتها
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setShowAnswer(true)}
                className="w-full bg-purple-100 text-purple-700 py-4 rounded-xl font-bold"
              >
                أظهر الترجمة
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  // ===================== الإحصائيات =====================
  const ProgressScreen = () => {
    if (!langData) return null;
    
    const levelInfo = getLevelName(progress.level);
    const totalWords = langData.lessons.reduce((sum, l) => sum + l.words.length, 0);
    const totalPhrases = langData.lessons.reduce((sum, l) => sum + l.phrases.length, 0);

    return (
      <div className="min-h-screen bg-gray-50 p-4" dir="rtl">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <button onClick={() => setScreen('dashboard')} className="text-gray-500">✕</button>
            <span className="font-bold text-xl">إحصائياتك</span>
            <div></div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white p-4 rounded-2xl">
              <span className="text-3xl">⭐</span>
              <p className="text-3xl font-bold mt-2">{progress.xp}</p>
              <p className="text-sm opacity-80">نقاط الخبرة</p>
            </div>
            <div className="bg-gradient-to-br from-orange-400 to-red-500 text-white p-4 rounded-2xl">
              <span className="text-3xl">🔥</span>
              <p className="text-3xl font-bold mt-2">{progress.streak}</p>
              <p className="text-sm opacity-80">أيام متتالية</p>
            </div>
            <div className="bg-gradient-to-br from-green-400 to-teal-500 text-white p-4 rounded-2xl">
              <span className="text-3xl">📚</span>
              <p className="text-3xl font-bold mt-2">{progress.completedLessons.length}</p>
              <p className="text-sm opacity-80">دروس مكتملة</p>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-cyan-500 text-white p-4 rounded-2xl">
              <span className="text-3xl">🎯</span>
              <p className="text-3xl font-bold mt-2">{levelInfo.ar}</p>
              <p className="text-sm opacity-80">مستواك</p>
            </div>
          </div>

          {/* Weekly Activity */}
          <div className="bg-white rounded-2xl p-4 shadow-md mb-6">
            <h3 className="font-bold mb-4">نشاط الأسبوع</h3>
            <div className="flex justify-between items-end h-24">
              {['س', 'ح', 'ن', 'ث', 'ر', 'خ', 'ج'].map((day, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div 
                    className="w-8 bg-purple-500 rounded-t-lg"
                    style={{ height: `${Math.max(progress.weeklyActivity[i] * 2, 4)}px` }}
                  />
                  <span className="text-xs text-gray-500 mt-1">{day}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Content Stats */}
          <div className="bg-white rounded-2xl p-4 shadow-md mb-6">
            <h3 className="font-bold mb-4">المحتوى المتاح</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>الدروس</span>
                <span className="font-bold">{langData.lessons.length}</span>
              </div>
              <div className="flex justify-between">
                <span>الكلمات</span>
                <span className="font-bold">{totalWords}</span>
              </div>
              <div className="flex justify-between">
                <span>العبارات</span>
                <span className="font-bold">{totalPhrases}</span>
              </div>
              <div className="flex justify-between">
                <span>سيناريوهات اليوم</span>
                <span className="font-bold">{langData.dayScenarios.length}</span>
              </div>
            </div>
          </div>

          {/* Language Switch */}
          <div className="bg-white rounded-2xl p-4 shadow-md">
            <h3 className="font-bold mb-4">تبديل اللغة</h3>
            <div className="grid grid-cols-2 gap-3">
              {languages.map(lang => (
                <button
                  key={lang.code}
                  onClick={() => switchLanguage(lang.code)}
                  className={`p-3 rounded-xl flex items-center gap-2 ${
                    progress.currentLanguage === lang.code 
                      ? 'bg-purple-100 border-2 border-purple-500' 
                      : 'bg-gray-100'
                  }`}
                >
                  <span className="text-2xl">{lang.flag}</span>
                  <span className="font-medium">{lang.nameAr}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // ===================== Render =====================
  return (
    <div className="font-sans">
      {screen === 'welcome' && <WelcomeScreen />}
      {screen === 'language-select' && <LanguageSelectScreen />}
      {screen === 'assessment' && <AssessmentScreen />}
      {screen === 'dashboard' && <DashboardScreen />}
      {screen === 'lesson' && <LessonScreen />}
      {screen === 'immersion' && <ImmersionScreen />}
      {screen === 'review' && <ReviewScreen />}
      {screen === 'progress' && <ProgressScreen />}
    </div>
  );
}
