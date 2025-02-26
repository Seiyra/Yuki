let questionsAndAnswers = [
  {
    question: 'هاشيرا',
    answers: [
      'غيو',     'جيو',    'قيو',
      'غيومي',   'جيومي',  'قيومي',
      'سانيمي',  'شينوبو', 'متسوري',
      'تينغن',   'تينجن',  'تينقن',
      'تنغن',    'تنجن',   'تنقن',
      'اوباناي', 'سانيمي', 'توكيتو'
    ]
  },
  {
    question: 'قبعة القش',
    answers: [
      'لوفي',   'زورو',
      'نامي',   'روبين',
      'تشوبر',  'بروك',
      'سانجي',  'سانغي',
      'سانقي',  'اوسوب',
      'فرانكي'
    ]
  },
  {
    question: 'طاقم روجر',
    answers: [
      'روجر',  'روغر',
      'روقر',  'رايلي',
      'باغي',  'باجي',
      'باقي',  'كروكس',
      'شانكس'
    ]
  },
  {
    question: 'طاقم اللحيه',
    answers: [ 'ماركو', 'ايس', 'تيتش', 'ساتش' ]
  },
  {
    question: 'بحرية',
    answers: [
      'غارب',   'جارب',
      'قارب',   'شو',
      'هينا',   'كوبي',
      'اوكيجي', 'اوكيغي',
      'اوكيقي', 'كوزان',
      'كيزارو', 'اكاينو'
    ]
  },
  {
    question: 'هوكاجي',
    answers: [
      'ميناتو',   'ناروتو',
      'كاكاشي',   'تسونادي',
      'هاشيراما', 'توبيراما',
      'هيروزين',  'ساروتوبي'
    ]
  },
  { question: 'كاجي', answers: [ 'اي', 'مو', 'مي' ] },
  {
    question: 'سانين',
    answers: [ 'تسونادي', 'جيرايا', 'غيرايا', 'قيرايا', 'اوروتشيمارو' ]
  },
  {
    question: 'بليتش',
    answers: [
      'ايزن',   'روز',     'لوف',
      'قين',    'غين',     'جين',
      'توسين',  'ايتشيفو', 'ايشين',
      'يوزو',   'كارين',   'فوسو',
      'ميتوا',  'ماساكي',  'ياماموتو',
      'زاراكي', 'كيوراكو', 'موموي',
      'هيوري',  'هوري'
    ]
  },
  {
    question: 'قادة',
    answers: [
      'ايزن',  'روز',
      'لوف',   'لوفي',
      'توسين', 'جين',
      'غين',   'قين'
    ]
  },
  { question: 'جنرالات', answers: [ 'هيو', 'كيو', 'تو' ] },
  {
    question: 'كينقدوم',
    answers: [
      'نيل',   'تيا',
      'يامي',  'لوبي',
      'هيو',   'كيو',
      'تو',    'اوكي',
      'رينبا', 'اوهون',
      'توسين', 'كانكي'
    ]
  },
  {
    question: 'ارانكار',
    answers: [ 'نيل', 'تيا', 'يامي', 'لوبي', 'ايزن' ]
  },
  {
    question: 'شياطين',
    answers: [
      'روي',     'دوما',
      'داكي',    'غيو',
      'جيو',     'قيو',
      'غيومي',   'جيومي',
      'قيومي',   'سانيمي',
      'شينوبو',  'نيزوكو',
      'تانجيرو', 'تانغيرو',
      'تانقيرو'
    ]
  },
  {
    question: 'بلاك كلوفر',
    answers: [
      'استا',  'ريل',    'يونوا',
      'جاك',   'غاك',    'قاك',
      'لاك',   'غوش',    'جوش',
      'قوش',   'ماغنا',  'ماجنا',
      'ماقنا', 'يوليوس'
    ]
  },
  {
    question: 'قمر علوي',
    answers: [
      'داكي',     'غيوتارو',
      'جيوتارو',  'قيوتارو',
      'دوما',     'اكازا',
      'كوكوشيبو'
    ]
  },
  { question: 'ثالوث اعظم', answers: [ 'زينون', 'دانتي', 'فانيكا' ] },
  { question: 'اسبادا', answers: [ 'نيل', 'تيا', 'لوبي', 'يامي' ] },
  {
    question: 'نواب',
    answers: [
      'زورو',  'كوين',
      'كينغ',  'كينج',
      'كينق',  'بارا',
      'رينجي', 'رينغي',
      'رينقي'
    ]
  },
  {
    question: 'معجزات',
    answers: [
      'اكاشي',  'اوميني',
      'كيسي',   'دايكي',
      'ريوتا',  'اتسوشي',
      'كوروكو'
    ]
  },
  {
    question: 'فايزارد',
    answers: [
      'روز',   'لوف',
      'شينجي', 'شينغي',
      'شينقي', 'هيوري',
      'كينسي'
    ]
  },
  {
    question: 'يونكو',
    answers: [
      'تيتش',  'كايدو',
      'لوفي',  'باغي',
      'باجي',  'باقي',
      'شانكس'
    ]
  },
  {
    question: 'اوزوماكي',
    answers: [ 'ميتوا', 'فوسو', 'كارين', 'كوشينا' ]
  },
  {
    question: 'تشيبوكاي',
    answers: [
      'كروكودايل',  'دوفلامينغو',
      'دوفلامينجو', 'دوفلامينقو',
      'لاو',        'هانكوك',
      'كوما',       'تيتش',
      'ميهوك',      'باغي',
      'باجي',       'باقي',
      'موريا'
    ]
  },
  {
    question: 'طاقم شانكس',
    answers: [ 'لاكي رو', 'شانكس', 'ياسوب', 'بيكمان' ]
  },
  {
    question: 'سون',
    answers: [
      'غوكو',  'جوكو',
      'قوكو',  'غوهان',
      'جوهان', 'قوهان',
      'غوتين', 'جوتين',
      'قوتين'
    ]
  },
  {
    question: 'سينجو',
    answers: [
      'ايتاما',   'ناواكي',
      'توكا',     'ميتوا',
      'تسونادي',  'هاشيراما',
      'توبيراما'
    ]
  },
  { question: 'سوبرنوفا', answers: [ 'ابو', 'كيد', 'لاو' ] },
  {
    question: 'سفن',
    answers: [
      'نوا',      'ماكسيم',
      'ساني غو',  'ساني جو',
      'ساني قو',  'ميري',
      'غونغ',     'جونغ',
      'قونغ',     'ميس لوف',
      'موبي ديك', 'ريد فورس'
    ]
  },
  {
    question: 'طاقم تيتش',
    answers: [ 'تيتش', 'شوت', 'كيو', 'اوجر', 'اوغر', 'اوقر' ]
  },
  { question: 'اخوة الساكي', answers: [ 'ايس', 'سابو', 'لوفي' ] },
  {
    question: 'اوتشيها',
    answers: [
      'راي',    'بارو',
      'شين',    'ناكا',
      'تيكا',   'ساسكي',
      'مادارا', 'ايتاتشي',
      'ايتاشي', 'ايزانا',
      'ايزومي', 'اوبيتو',
      'سارادا'
    ]
  },
  {
    question: 'اكatsuki',
    answers: [ 'باين', 'توبي', 'زيتسو', 'كونان', 'ايتاشي', 'ساسوري' ]
  },
  {
    question: 'قادة',
    answers: [
      'تيتش', 'ايزن', 'جين',
      'غين',  'قين',  'قين',
      'غين',  'جين',  'غين',
      'جين',  'قين',  'توسين'
    ]
  },
  { question: 'غيلان', answers: [ 'روز', 'ماريا', 'سينا' ] },
  {
    question: 'تنانين',
    answers: [
      'اغنيل',     'اجنيل',
      'اقنيل',     'كايدو',
      'ليفايا',    'ايرين',
      'اكنولوغيا', 'اكنولوجيا',
      'اكنولوقيا'
    ]
  },
  {
    question: 'فريكس',
    answers: [
      'غون', 'جون',   'قون',
      'غين', 'جين',   'قين',
      'ابي', 'ميتوا', 'جين',
      'غين', 'قين',   'قين',
      'غين', 'جين',   'جون',
      'غون', 'قون'
    ]
  },
  { question: 'هايكيو', answers: [ 'يو', 'ريو', 'كي', 'شويو' ] },
  {
    question: 'كوارث كايدو',
    answers: [
      'كينغ', 'كينج',
      'كينق', 'جاك',
      'غاك',  'قاك',
      'كوين'
    ]
  },
  {
    question: 'هيوغا',
    answers: [ "هانابي","هيناتا",'نيجي', 'نيغي', 'نيقي', 'هياشي', 'كو', 'ناتسو' ]
  },
  {
    question: 'دريار',
    answers: [ 'يوري', 'ريتا', 'ايفان', 'ماكاروف', 'لاكسوس', 'لاكسس' ]
  },
  {
    question: 'كونوها',
    answers: [
      'ساي',    'قاي',
      'غاي',    'جاي',
      'لي',     'داي',
      'تن تن',  'ساسكي',
      'ناروتو'
    ]
  },
  {
    question: 'الفريق السابع',
    answers: [
      'رين',    'توبي',
      'ساي',    'ساسكي',
      'ساكورا', 'ناروتو',
      'اوبيتو'
    ]
  },
  {
    question: 'السانين الاسطورين',
    answers: [ 'جيرايا', 'غيرايا', 'قيرايا', 'اوروتشيمارو', 'تسونادي' ]
  },
  {
    question: 'مدربين ناروتو',
    answers: [ 'ايروكا', 'كاكاشي', 'جيرايا', 'غيرايا', 'قيرايا' ]
  },
  { question: 'نمل', answers: [ 'ميرويم', 'يوبي', 'بوف', 'بيتو' ] },
  {
    question: 'سيراف النهاية',
    answers: [ 'يو', 'شينوا', 'غورين', 'جورين', 'قورين' ]
  },
  { question: 'حراس الملك', answers: [ 'يوبي', 'بوف', 'بيتو' ] },
  {
    question: 'عمالقة',
    answers: [ 'اني', 'زيكي', 'بيك', 'زيك', 'رود' ]
  },
  {
    question: 'اكرمان',
    answers: [ 'كيني', 'ليفاي', 'ريتشل', 'ميكاسا' ]
  },
  {
    question: 'قادة سحره',
    answers: [ 'ريل', 'جاك', 'غاك', 'قاك', 'يامي', 'يونوا' ]
  },
  {
    question: 'سحره',
    answers: [
      'ريل',  'جاك',
      'غاك',  'قاك',
      'يامي', 'يونوا',
      'استا', 'لاك',
      'غوش',  'جوش',
      'قوش'
    ]
  },
  {
    question: 'مونكي',
    answers: [
      'لوفي',   'دراغون',
      'دراجون', 'دراقون',
      'غارب',   'جارب',
      'قارب'
    ]
  },
  {
    question: 'زودياك',
    answers: [
      'غين', 'جين',  'قين',
      'جين', 'غين',  'قين',
      'هيل', 'بيون', 'قين',
      'غين', 'جين',  'سايو'
    ]
  },
  {
    question: 'دي',
    answers: [
      'لامي', 'لاو',
      'تيتش', 'ايس',
      'لوفي', 'غارب',
      'جارب', 'قارب'
    ]
  },
  {
    question: 'ديث نوت',
    answers: [ 'رم', 'نير', 'ال', 'ريم', 'لايت', 'ريوك' ]
  },
  {
    question: 'ثوار',
    answers: [
      'كوما',   'باجي',
      'باغي',   'باقي',
      'دراغون', 'دراجون',
      'دراقون', 'كوالا',
      'سابو'
    ]
  },
  {
    question: 'يوجين',
    answers: [ 'هاك', 'هودي', 'جيمبي', 'غيمبي', 'قيمبي' ]
  },
  {
    question: 'كوتشيكي',
    answers: [ 'بياكويا', 'روكيا', 'غينري', 'جينري', 'قينري' ]
  },
  {
    question: 'محققين',
    answers: [
      'هيجي',  'هيغي',
      'هيقي',  'نير',
      'ال',    'اي',
      'كونان', 'ميلو'
    ]
  },
  {
    question: 'قرية الرمل',
    answers: [ 'غارا', 'جارا', 'قارا', 'راسا', 'باكي', 'تيماري' ]
  },
  {
    question: 'شينيغامي',
    answers: [
      'ريوك', 'بارا',
      'لايت', 'كيرا',
      'ايزن', 'روز',
      'لوف'
    ]
  },
  {
    question: 'وصايا',
    answers: [
      'زيلدريس', 'درول',
      'جالان',   'غالان',
      'قالان',   'غوثر',
      'جوثر',    'قوثر',
      'جوثر',    'غوثر',
      'قوثر',    'استاروسا'
    ]
  },
  {
    question: 'خطايا',
    answers: [
      'كينغ', 'كينج',
      'كينق', 'بان',
      'ديان', 'ميليوداس',
      'كينق', 'كينغ',
      'كينج', 'كينج',
      'كينغ', 'كينق'
    ]
  },
  {
    question: 'فرقة استطلاع',
    answers: [
      'ليفاي',  'هانجي',
      'هانغي',  'هانقي',
      'ارمين',  'ايرين',
      'ميكاسا', 'جان',
      'غان',    'قان',
      'كوني',   'ساشا'
    ]
  },
  {
    question: 'ابطال بنها',
    answers: [
      'ديكو', 'مومو',
      'جيرو', 'غيرو',
      'قيرو', 'ايدا',
      'شوتو'
    ]
  },
  {
    question: 'ادميرالات',
    answers: [
      'ايشو',   'كونغ',
      'كونج',   'كونق',
      'كوزان',  'اكاينو',
      'اوكيجي', 'اوكيغي',
      'اوكيقي', 'كيزارو'
    ]
  },
  { question: 'اطفال', answers: [ 'فيل', 'ايما', 'راي' ] },
  {
    question: 'كهنة اينيل',
    answers: [ 'شورا', 'اوم', 'جيداتسو', 'غيداتسو', 'قيداتسو' ]
  },
  {
    question: 'مفجرين',
    answers: [ 'ساب', 'بارا', 'جينثيرو', 'غينثيرو', 'قينثيرو' ]
  }
];
  
  let handler = m => m;
  
  let currentCount = 1;
  let gameState = {
    active: false,
    currentQuestion: '',
    responses: {} 
  };
  
  async function isAdmin(m, conn) {
    if (!m.isGroup) return false;
    try {
      let groupMetadata = await conn.groupMetadata(m.chat);
      let participants = groupMetadata.participants;
      let admins = participants.filter(p => p.admin === 'admin' || p.admin === 'superadmin');
      return admins.some(admin => admin.id === m.sender);
    } catch (error) {
      console.error('Error fetching group metadata:', error);
      return false;
    }
  }
  
  handler.all = async function(m, { conn }) {
    if (/^\.متع$/i.test(m.text)) {
      if (gameState.active) {
        return m.reply('اللعبة قيد التشغيل بالفعل.');
      }
  
      gameState.active = true;
      gameState.responses = {};
      let randomIndex = Math.floor(Math.random() * questionsAndAnswers.length);
      gameState.currentQuestion = questionsAndAnswers[randomIndex].question;
      await m.reply(`*${gameState.currentQuestion} 3/تع*`);
    } else if (/^\.ستع$/i.test(m.text)) {
      if (!gameState.active) {
        return m.reply('لا توجد لعبة قيد التشغيل حالياً.');
      }
  
      gameState.active = false;
  
      if (Object.keys(gameState.responses).length === 0) {
        await m.reply('لم يربح أحد نقاطاً في هذه اللعبة.');
      } else {
        let result = Object.entries(gameState.responses).map(([jid, points]) => {
          return `@${jid.split('@')[0]}: ${points} نقطة`;
        }).join('\n');
  
        await m.reply(`اللعبة انتهت!\n\nالنقاط:\n${result}`, null, {
          mentions: Object.keys(gameState.responses)
        });
      }
  
      gameState.currentQuestion = '';
    } else if (gameState.active && gameState.currentQuestion) {
      let correctAnswers = questionsAndAnswers.find(q => q.question === gameState.currentQuestion).answers;
      let userAnswers = m.text.split(' ').map(answer => answer.trim());
      let correctCount = userAnswers.filter(answer => correctAnswers.includes(answer)).length;
  
      if (correctCount >= 3) {
        if (!gameState.responses[m.sender]) {
          gameState.responses[m.sender] = 1;
        } else {
          gameState.responses[m.sender] += 1;
        }
        let randomIndex = Math.floor(Math.random() * questionsAndAnswers.length);
        gameState.currentQuestion = questionsAndAnswers[randomIndex].question;
        setTimeout(async () => {
          await m.reply(`*${gameState.currentQuestion} 3/تع*`);
        }, 500);
      }
    }
  };
  
  export default handler;
  