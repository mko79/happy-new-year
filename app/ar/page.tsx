'use client';

import { Globe } from 'lucide-react';
import Header from '../../components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col" dir="rtl">
      <Header currentLocale="ar" />

      <main className="flex flex-col items-center justify-center flex-grow p-4 xs:p-6 sm:p-8">
        <div className="w-full max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-4xl bg-white rounded-xl xs:rounded-2xl shadow-xl p-4 xs:p-6 sm:p-8 md:p-12">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-indigo-600 mb-4 xs:mb-6">
            مرحبا بكم في عام جديد سعيد!
          </h1>

          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 text-center mb-6 xs:mb-8 sm:mb-10">
            هذا تطبيق Next.js مع دعم متعدد اللغات.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 w-full">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border-2 border-gray-200 hover:border-indigo-400 transition-all transform hover:-translate-y-1 duration-300 shadow-md hover:shadow-lg">
                <div className="text-indigo-600 mb-3 sm:mb-4">
                  <Globe className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
                  الميزة {item}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600">
                  هذا وصف لميزة العينة باللغة العربية.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* قسم الجمل حول رأس السنة */}
        <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 border-4 border-gray-200 mt-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-600 mb-6 sm:mb-8">
            جمل حول رأس السنة
          </h2>
          <p className="text-gray-600 text-center text-lg mb-8">
            أكمل الجمل حول احتفالات رأس السنة
          </p>

          <div className="space-y-8">
            {/* الجملة 1 */}
            <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-200">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-700 mb-4">1. في يوم رأس السنة، أنا ...</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <input type="radio" id="sentence1a-ar" name="sentence1-ar" className="mt-1 mr-3" />
                  <label htmlFor="sentence1a-ar" className="text-gray-700 text-lg">
                    في يوم رأس السنة، أشاهد الألعاب النارية مع عائلتي في منتصف الليل.
                  </label>
                </div>
                <div className="flex items-start">
                  <input type="radio" id="sentence1b-ar" name="sentence1-ar" className="mt-1 mr-3" />
                  <label htmlFor="sentence1b-ar" className="text-gray-700 text-lg">
                    في يوم رأس السنة، أطبخ الطعام التقليدي وأشاركه مع جيراني.
                  </label>
                </div>
                <div className="flex items-start">
                  <input type="radio" id="sentence1c-ar" name="sentence1-ar" className="mt-1 mr-3" />
                  <label htmlFor="sentence1c-ar" className="text-gray-700 text-lg">
                    في يوم رأس السنة، أضع قرارات للعام القادم وأحدد أهدافاً جديدة.
                  </label>
                </div>
              </div>
            </div>

            {/* الجملة 2 */}
            <div className="bg-green-50 rounded-2xl p-6 border-2 border-green-200">
              <h3 className="text-xl sm:text-2xl font-bold text-green-700 mb-4">2. أود أن أحتفل بعيد رأس السنة في ... لأن ...</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <input type="radio" id="sentence2a-ar" name="sentence2-ar" className="mt-1 mr-3" />
                  <label htmlFor="sentence2a-ar" className="text-gray-700 text-lg">
                    أود أن أحتفل بعيد رأس السنة في هولندا لأنني أريد رؤية عرض الألعاب النارية الشهير في أمستردام.
                  </label>
                </div>
                <div className="flex items-start">
                  <input type="radio" id="sentence2b-ar" name="sentence2-ar" className="mt-1 mr-3" />
                  <label htmlFor="sentence2b-ar" className="text-gray-700 text-lg">
                    أود أن أحتفل بعيد رأس السنة في إيران لأنني أريد تجربة احتفال نوروز التقليدي مع عائلتي.
                  </label>
                </div>
                <div className="flex items-start">
                  <input type="radio" id="sentence2c-ar" name="sentence2-ar" className="mt-1 mr-3" />
                  <label htmlFor="sentence2c-ar" className="text-gray-700 text-lg">
                    أود أن أحتفل بعيد رأس السنة في الصين لأنني أريد المشاركة في مهرجان الربيع ورؤية رقصات التنين.
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-full text-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              التحقق من الإجابات
            </button>
          </div>
        </div>

        {/* قسم اختبار البلدان */}
        <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 border-4 border-gray-200 mt-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-600 mb-6 sm:mb-8">
            اختبار البلدان: تقليد رأس السنة
          </h2>
          <p className="text-gray-600 text-center text-lg mb-8">حدد البلدان التي لديها كل تقليد.</p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-100">
                  <th className="border border-gray-300 p-3 text-right font-bold text-gray-700">التقليد</th>
                  <th className="border border-gray-300 p-3 text-right font-bold text-gray-700">هولندا</th>
                  <th className="border border-gray-300 p-3 text-right font-bold text-gray-700">إيران</th>
                  <th className="border border-gray-300 p-3 text-right font-bold text-gray-700">الصين</th>
                  <th className="border border-gray-300 p-3 text-right font-bold text-gray-700">إجابتك</th>
                  <th className="border border-gray-300 p-3 text-right font-bold text-gray-700">الإجابة الصحيحة</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 text-right">يأكل الناس طعاماً خاصاً</td>
                  <td className="border border-gray-300 p-3">
                    <label className="flex items-center justify-end">
                      <input type="checkbox" name="q1-netherlands-ar" value="هولندا" className="ml-2" />
                      هولندا
                    </label>
                  </td>
                  <td className="border border-gray-300 p-3">
                    <label className="flex items-center justify-end">
                      <input type="checkbox" name="q1-iran-ar" value="إيران" className="ml-2" />
                      إيران
                    </label>
                  </td>
                  <td className="border border-gray-300 p-3">
                    <label className="flex items-center justify-end">
                      <input type="checkbox" name="q1-china-ar" value="الصين" className="ml-2" />
                      الصين
                    </label>
                  </td>
                  <td className="border border-gray-300 p-3 text-right" id="answer-q1-ar"></td>
                  <td className="border border-gray-300 p-3 font-bold text-green-600 text-right" id="correct-q1-ar">هولندا</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 text-right">يشاهد الناس الألعاب النارية</td>
                  <td className="border border-gray-300 p-3">
                    <label className="flex items-center justify-end">
                      <input type="checkbox" name="q2-netherlands-ar" value="هولندا" className="ml-2" />
                      هولندا
                    </label>
                  </td>
                  <td className="border border-gray-300 p-3">
                    <label className="flex items-center justify-end">
                      <input type="checkbox" name="q2-iran-ar" value="إيران" className="ml-2" />
                      إيران
                    </label>
                  </td>
                  <td className="border border-gray-300 p-3">
                    <label className="flex items-center justify-end">
                      <input type="checkbox" name="q2-china-ar" value="الصين" className="ml-2" />
                      الصين
                    </label>
                  </td>
                  <td className="border border-gray-300 p-3 text-right" id="answer-q2-ar"></td>
                  <td className="border border-gray-300 p-3 font-bold text-green-600 text-right" id="correct-q2-ar">هولندا</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 text-right">يتم الاحتفال في يناير</td>
                  <td className="border border-gray-300 p-3">
                    <label className="flex items-center justify-end">
                      <input type="checkbox" name="q3-netherlands-ar" value="هولندا" className="ml-2" />
                      هولندا
                    </label>
                  </td>
                  <td className="border border-gray-300 p-3">
                    <label className="flex items-center justify-end">
                      <input type="checkbox" name="q3-iran-ar" value="إيران" className="ml-2" />
                      إيران
                    </label>
                  </td>
                  <td className="border border-gray-300 p-3">
                    <label className="flex items-center justify-end">
                      <input type="checkbox" name="q3-china-ar" value="الصين" className="ml-2" />
                      الصين
                    </label>
                  </td>
                  <td className="border border-gray-300 p-3 text-right" id="answer-q3-ar"></td>
                  <td className="border border-gray-300 p-3 font-bold text-green-600 text-right" id="correct-q3-ar">هولندا، الصين</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 text-right">يعطي الناس الهدايا</td>
                  <td className="border border-gray-300 p-3">
                    <label className="flex items-center justify-end">
                      <input type="checkbox" name="q4-netherlands-ar" value="هولندا" className="ml-2" />
                      هولندا
                    </label>
                  </td>
                  <td className="border border-gray-300 p-3">
                    <label className="flex items-center justify-end">
                      <input type="checkbox" name="q4-iran-ar" value="إيران" className="ml-2" />
                      إيران
                    </label>
                  </td>
                  <td className="border border-gray-300 p-3">
                    <label className="flex items-center justify-end">
                      <input type="checkbox" name="q4-china-ar" value="الصين" className="ml-2" />
                      الصين
                    </label>
                  </td>
                  <td className="border border-gray-300 p-3 text-right" id="answer-q4-ar"></td>
                  <td className="border border-gray-300 p-3 font-bold text-green-600 text-right" id="correct-q4-ar">إيران، الصين</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 text-right">يشاهد الناس التلفزيون</td>
                  <td className="border border-gray-300 p-3">
                    <label className="flex items-center justify-end">
                      <input type="checkbox" name="q5-netherlands-ar" value="هولندا" className="ml-2" />
                      هولندا
                    </label>
                  </td>
                  <td className="border border-gray-300 p-3">
                    <label className="flex items-center justify-end">
                      <input type="checkbox" name="q5-iran-ar" value="إيران" className="ml-2" />
                      إيران
                    </label>
                  </td>
                  <td className="border border-gray-300 p-3">
                    <label className="flex items-center justify-end">
                      <input type="checkbox" name="q5-china-ar" value="الصين" className="ml-2" />
                      الصين
                    </label>
                  </td>
                  <td className="border border-gray-300 p-3 text-right" id="answer-q5-ar"></td>
                  <td className="border border-gray-300 p-3 font-bold text-green-600 text-right" id="correct-q5-ar">هولندا</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3 text-right">إنه احتفال طويل</td>
                  <td className="border border-gray-300 p-3">
                    <label className="flex items-center justify-end">
                      <input type="checkbox" name="q6-netherlands-ar" value="هولندا" className="ml-2" />
                      هولندا
                    </label>
                  </td>
                  <td className="border border-gray-300 p-3">
                    <label className="flex items-center justify-end">
                      <input type="checkbox" name="q6-iran-ar" value="إيران" className="ml-2" />
                      إيران
                    </label>
                  </td>
                  <td className="border border-gray-300 p-3">
                    <label className="flex items-center justify-end">
                      <input type="checkbox" name="q6-china-ar" value="الصين" className="ml-2" />
                      الصين
                    </label>
                  </td>
                  <td className="border border-gray-300 p-3 text-right" id="answer-q6-ar"></td>
                  <td className="border border-gray-300 p-3 font-bold text-green-600 text-right" id="correct-q6-ar">الصين</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 text-right">ينظف الناس منازلهم</td>
                  <td className="border border-gray-300 p-3">
                    <label className="flex items-center justify-end">
                      <input type="checkbox" name="q7-netherlands-ar" value="هولندا" className="ml-2" />
                      هولندا
                    </label>
                  </td>
                  <td className="border border-gray-300 p-3">
                    <label className="flex items-center justify-end">
                      <input type="checkbox" name="q7-iran-ar" value="إيران" className="ml-2" />
                      إيران
                    </label>
                  </td>
                  <td className="border border-gray-300 p-3">
                    <label className="flex items-center justify-end">
                      <input type="checkbox" name="q7-china-ar" value="الصين" className="ml-2" />
                      الصين
                    </label>
                  </td>
                  <td className="border border-gray-300 p-3 text-right" id="answer-q7-ar"></td>
                  <td className="border border-gray-300 p-3 font-bold text-green-600 text-right" id="correct-q7-ar">هولندا، إيران، الصين</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              id="check-answers-ar"
              className="px-6 py-3 bg-green-600 text-white font-bold rounded-full text-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => {
                const questions = [
                  { id: 'q1-ar', correct: ['هولندا'] },
                  { id: 'q2-ar', correct: ['هولندا'] },
                  { id: 'q3-ar', correct: ['هولندا', 'الصين'] },
                  { id: 'q4-ar', correct: ['إيران', 'الصين'] },
                  { id: 'q5-ar', correct: ['هولندا'] },
                  { id: 'q6-ar', correct: ['الصين'] },
                  { id: 'q7-ar', correct: ['هولندا', 'إيران', 'الصين'] }
                ];

                let score = 0;

                questions.forEach(q => {
                  const selected = Array.from(document.querySelectorAll(`input[type=checkbox][name^=${q.id}]`))
                    .filter(checkbox => (checkbox as HTMLInputElement).checked)
                    .map(checkbox => (checkbox as HTMLInputElement).value);

                  const answerCell = document.getElementById(`answer-${q.id}`);

                  if (answerCell) {
                    answerCell.textContent = selected.length > 0 ? selected.join('، ') : 'لم تجب';

                    // Check if the selected answers match the correct answers
                    const isCorrect = selected.length === q.correct.length &&
                      selected.every(country => q.correct.includes(country)) &&
                      q.correct.every(country => selected.includes(country));

                    if (isCorrect) {
                      answerCell.className = 'border border-gray-300 p-3 font-bold text-green-600 text-right';
                      score++;
                    } else {
                      answerCell.className = 'border border-gray-300 p-3 font-bold text-red-600 text-right';
                    }
                  }
                });

                const result = document.getElementById('result-ar');
                if (result) {
                  result.textContent = `لقد حصلت على ${score} من أصل ${questions.length}!`;

                  if (score === questions.length) {
                    result.className = 'mt-6 text-center text-xl font-bold text-green-600';
                  } else if (score >= questions.length / 2) {
                    result.className = 'mt-6 text-center text-xl font-bold text-blue-600';
                  } else {
                    result.className = 'mt-6 text-center text-xl font-bold text-red-600';
                  }
                }
              }}
            >
              تحقق من الإجابات
            </button>
            <button
              id="reset-quiz-ar"
              className="px-6 py-3 bg-red-600 text-white font-bold rounded-full text-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => {
                const checkboxes = document.querySelectorAll('input[type=checkbox]');
                checkboxes.forEach(checkbox => {
                  (checkbox as HTMLInputElement).checked = false;
                });

                const answerCells = document.querySelectorAll('[id^="answer-"]');
                answerCells.forEach(cell => {
                  cell.textContent = '';
                  cell.className = 'border border-gray-300 p-3 text-right';
                });

                const result = document.getElementById('result-ar');
                if (result) {
                  result.textContent = '';
                }
              }}
            >
              إعادة تعيين الاختبار
            </button>
          </div>

          <div id="result-ar" className="mt-6 text-center text-xl font-bold"></div>
        </div>
      </main>

      <footer className="py-4 xs:py-6 text-center text-gray-500 text-xs xs:text-sm sm:text-base">
        <p>© {new Date().getFullYear()} تطبيق عام جديد سعيد. جميع الحقوق محفوظة.</p>
      </footer>
    </div>
  );
}