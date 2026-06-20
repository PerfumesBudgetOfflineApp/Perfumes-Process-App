# Perfumes Process App برفيومز بروسس اب

A local-first offline bilingual English Arabic personal fragrance companion
تطبيق عطور شخصي يعمل دون اتصال ثنائي اللغة انجليزي عربي

Track your perfume collection log wears plan a budget set goals and explore a
small built-in encyclopedia of perfume stories quotes and name symbolism
تتبع مجموعتك من العطور سجل ارتداءك خطط ميزانيتك ضع اهدافك واستكشف موسوعة مصغرة
لقصص العطور واقتباساتها ومعاني اسمائها

All data lives on your device IndexedDB there is no server no account and no
tracking the app works fully offline
كل البيانات تعيش على جهازك بلا خادم ولا حساب ولا تتبع والتطبيق يعمل كاملا دون اتصال

## Features الميزات

- Collection and wear log catalogue your bottles and samples and record when you wear them
  المجموعة وسجل الارتداء فهرس قنيناتك وعيناتك وسجل اوقات ارتدائها
- Brand and perfumer pages with computed essence accords health awareness and signature
  صفحات البراند والعطار مع جوهر محسوب واكوردات ومؤشر صحة توعوي وبصمة
- Export cards share a perfume or a brand as a designed card
  بطاقات تصدير شارك عطرا او براندا كبطاقة مصممة
- Budget statistics and goals plan spending see where you stand and set targets
  ميزانية واحصاءات واهداف خطط الانفاق واعرف موقعك وضع مستهدفات
- Mini encyclopedia a perfume story a quote and a name symbolism
  موسوعة مصغرة قصة عطر واقتباس ومعنى علامة

## Design التصميم

- Green palette a calm light green accent on a soft mint background
  لوحة خضراء لون مميز اخضر فاتح هادئ على خلفية نعناعية ناعمة
- Glass flacon every perfume is drawn as a slim glass bottle a sealed cap and a glass sheen its liquid colored by the dominant accord and the gender outline
  قنينة زجاجية كل عطر يرسم قنينة زجاجية نحيلة بغطاء مقفل ولمعة زجاج يلون سائلها الاكورد المسيطر وحد الجنس
- Square motif ratings and badges use a clean square mark instead of a diamond
  زخرفة مربعة التقييمات والشارات تستعمل علامة مربعة انيقة بدل المعين

## Screenshots لقطات

Add device screenshots to `docs/screenshots/` and they appear here.
ضع لقطات الجهاز في `docs/screenshots/` لتظهر هنا.

| Home الواجهة | Perfumes العطور | Encyclopedia الموسوعة |
|---|---|---|
| ![Home](docs/screenshots/home.png) | ![Perfumes](docs/screenshots/perfumes.png) | ![Encyclopedia](docs/screenshots/encyclopedia.png) |

## Tech stack التقنيات

React Vite Capacitor IndexedDB Dexie Tailwind CSS
رياكت وفايت وكاباسيتور وقاعدة بيانات محلية وتيلويند

## Getting started البداية

```bash
npm ci          # install dependencies تثبيت الاعتماديات
npm run dev     # start the dev server تشغيل خادم التطوير
npm run build   # production build بناء الانتاج
```

### Android  أندرويد

```bash
npm install
npm run build
npx cap add android
npm i -D @capacitor/assets
npx capacitor-assets generate --android --splashBackgroundColor "#FFFFFF"
npm run icons:android
npx cap sync android
npx cap open android   # then Build > Clean Project > Rebuild Project
```

The splash background is white. For the app version number, Text-to-Speech setup, and the full Android guide see [INSTALL.md](INSTALL.md).
خلفية شاشة البدء بيضاء. لرقم النسخة و إعداد النطق الصوتي و دليل أندرويد الكامل راجع [INSTALL.md](INSTALL.md).

## License الترخيص

MIT License رخصة ام اي تي

### English

Copyright (c) 2026 Perfumes Process App

Permission is hereby granted free of charge to any person obtaining a copy of
this software and associated documentation files the Software to deal in the
Software without restriction including without limitation the rights to use
copy modify merge publish distribute sublicense and or sell copies of the
Software and to permit persons to whom the Software is furnished to do so
subject to the following conditions

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software

THE SOFTWARE IS PROVIDED AS IS WITHOUT WARRANTY OF ANY KIND EXPRESS OR IMPLIED
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM DAMAGES OR OTHER LIABILITY WHETHER IN
AN ACTION OF CONTRACT TORT OR OTHERWISE ARISING FROM OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE

### عربي

حقوق النشر لعام الفين وستة وعشرين لتطبيق برفيومز بروسس اب

يصرح بموجب هذا ودون مقابل لاي شخص يحصل على نسخة من هذا البرنامج وملفات التوثيق
المرتبطة به البرنامج بالتعامل مع البرنامج دون قيود بما في ذلك ودون حصر حقوق
الاستخدام والنسخ والتعديل والدمج والنشر والتوزيع والترخيص من الباطن وبيع نسخ من
البرنامج والسماح للاشخاص الذين يقدم لهم البرنامج بفعل ذلك وفق الشروط الاتية

يجب تضمين اشعار حقوق النشر اعلاه واشعار الاذن هذا في كل النسخ او الاجزاء الجوهرية
من البرنامج

يقدم البرنامج كما هو دون اي ضمان من اي نوع صريح او ضمني بما في ذلك ودون حصر
ضمانات القابلية للتسويق والملاءمة لغرض معين وعدم الانتهاك ولا يتحمل المؤلفون او
اصحاب حقوق النشر باي حال المسؤولية عن اي مطالبة او اضرار او اي مسؤولية اخرى سواء
في دعوى تعاقدية او تقصيرية او غير ذلك تنشا من او بسبب او فيما يتصل بالبرنامج او
استخدامه او التعامل به
