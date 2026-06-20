# Build & Install — Perfumes Process App
# البناء و التثبيت — برفيومز بروسس اب

A local-first offline bilingual app. Web build with Vite, packaged for Android with Capacitor.
تطبيق محلّي يعمل دون اتصال. يُبنى للويب عبر Vite و يُحزَّم لأندرويد عبر Capacitor.

---

## 1. Prerequisites المتطلّبات

- Node.js 18+ and npm
- For Android: Android Studio (latest) + JDK 17
- نود ١٨+ و npm — و لأندرويد: أندرويد ستوديو الأحدث مع JDK 17

---

## 2. Web — run & build  تشغيل و بناء الويب

```bash
npm install        # install dependencies تثبيت الاعتماديات
npm run dev        # dev server خادم التطوير  -> http://localhost:5173
npm run build      # production build بناء الإنتاج  -> dist/
```

First launch seeds the local IndexedDB once (app entities + the built-in encyclopedia), then reads only from the DB.
أوّل فتح يزرع قاعدة IndexedDB مرّة واحدة (كيانات التطبيق + الموسوعة المدمجة) ثمّ يقرأ من القاعدة فقط.

---

## 3. Android — full build  بناء أندرويد الكامل

Run these in order from the project root. The splash background is **white**.
نفّذها بالترتيب من جذر المشروع. خلفية شاشة البدء **بيضاء**.

```bash
npm install
npm run build
npx cap add android                                   # creates the android/ project إنشاء مشروع أندرويد
npm i -D @capacitor/assets                            # icon & splash generator مولّد الأيقونة و البداية
npx capacitor-assets generate --android --splashBackgroundColor "#FFFFFF"
npm run icons:android                                 # copies your launcher icons نسخ أيقونات المُطلِق
npx cap sync android                                  # sync web build + plugins مزامنة
npx cap open android                                  # open Android Studio فتح أندرويد ستوديو
```

Then in Android Studio: **Build > Clean Project**, then **Build > Rebuild Project**, then Run / Build APK.
ثمّ في أندرويد ستوديو: **Build > Clean Project** ثمّ **Build > Rebuild Project** ثمّ شغّل / ابنِ الـAPK.

> After any web-code change, just run `npm run build && npx cap sync android` (no need to re-add android).
> بعد أيّ تعديل على كود الويب: يكفي `npm run build && npx cap sync android` دون إعادة إضافة أندرويد.

---

## 4. App version number  رقم نسخة التطبيق

Set the Android version in **`android/app/build.gradle`** under `defaultConfig`:
اضبط نسخة أندرويد في **`android/app/build.gradle`** داخل `defaultConfig`:

```gradle
defaultConfig {
    applicationId "com.perfumes.processapp"
    versionCode 1          // integer, increment by 1 each release رقم صحيح يزيد واحدا مع كل إصدار
    versionName "1.0.0"     // shown to users يظهر للمستخدم
}
```

- `versionCode` must **increase** for every new APK (Play Store rejects equal or lower).
- `versionName` is the human label and should match the app's About page.
- `package.json` -> `"version"` is the in-app label; keep it in sync with `versionName`.
- يجب أن **يزيد** `versionCode` مع كل APK؛ و `versionName` هو الاسم الظاهر و يطابق صفحة «حول التطبيق»؛ و `package.json` نسخة الواجهة، أبقِها مطابقة.

---

## 5. Text-to-Speech (TTS) — Android 11+  النطق الصوتي

Android 11+ (API 30+) hides TTS engines behind package visibility. Add this **`<queries>`** block to
**`android/app/src/main/AndroidManifest.xml`** as a direct child of `<manifest>` (sibling of `<application>`):

أندرويد ١١+ يخفي محرّكات النطق خلف رؤية الحزم. أضف كتلة **`<queries>`** هذه إلى
**`android/app/src/main/AndroidManifest.xml`** كابن مباشر لـ`<manifest>` (شقيق لـ`<application>`):

```xml
<queries>
    <intent>
        <action android:name="android.intent.action.TTS_SERVICE" />
    </intent>
</queries>
```

Without it the device TTS voices may not be found and speech stays silent.
بدونها قد لا يجد التطبيق أصوات النطق و يبقى الصوت صامتا.

Then re-sync and rebuild:
ثمّ أعد المزامنة و البناء:

```bash
npx cap sync android
# Android Studio > Build > Clean Project > Rebuild Project
```

> `cap sync` does **not** overwrite manual `AndroidManifest.xml` edits, so the `<queries>` block stays.
> `cap sync` لا يكتب فوق تعديلاتك اليدويّة في `AndroidManifest.xml` فتبقى الكتلة.

If the system has no TTS engine, install one (e.g. Google Speech Services) and set a default in Android **Settings > Accessibility > Text-to-speech**.
إن لم يوجد محرّك نطق، ثبّت واحدا و اضبط الافتراضي من **الإعدادات > إمكانية الوصول > تحويل النص إلى كلام**.

---

## 6. Privacy & network  الخصوصية و الشبكة

Fully offline: no server, no account, no tracking. A CSP in `index.html` blocks all external requests, and `capacitor.config.ts` sets `allowMixedContent: false`.
دون اتصال تماما: بلا خادم و لا حساب و لا تتبّع. سياسة CSP في `index.html` تقطع كل الطلبات الخارجية، و `capacitor.config.ts` يضبط `allowMixedContent: false`.
