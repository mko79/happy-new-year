"use client";

import Header from "../../components/Header";
import { useState } from "react";
import { Globe } from "lucide-react";

export default function ArabicPage() {
  const [selectedLocale, setSelectedLocale] = useState('ar');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6">
      <Header currentLocale={selectedLocale} />

      <main className="flex flex-col items-center justify-center min-h-screen pt-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            مرحبا بكم في عام جديد سعيد!
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
            استكشف تطبيقنا للتعرف على تقليد رأس السنة ومشاركتها مع الأصدقاء والعائلة.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 w-full max-w-6xl">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-3xl p-8 border-4 border-gray-200 hover:border-indigo-500 transition-all transform hover:-translate-y-2 duration-300 shadow-xl hover:shadow-2xl">
              <div className="text-indigo-600 mb-6">
                <Globe className="h-12 w-12" />
              </div>
              <h3 className="text-3xl font-extrabold mb-6 text-gray-900">
                مرحبا بكم في عام جديد سعيد!
              </h3>
              <p className="text-xl text-gray-600">
                هذا تطبيق رائع للاحتفال بالعام الجديد ومشاركة اللحظات السعيدة مع الأصدقاء والعائلة.
              </p>
            </div>
          ))}
        </div>

        {/* قسم اختبار البلدان */}
        <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 border-4 border-gray-200 mt-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-600 mb-6 sm:mb-8">
            اختبار البلدان: تقليد رأس السنة
          </h2>
          <p className="text-gray-600 text-center text-lg mb-8">حدد البلدان التي لديها كل تقليد.</p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[1000px] text-xl sm:text-2xl">
              <thead>
                <tr className="bg-blue-100">
                  <th className="border border-gray-300 p-4 sm:p-6 text-right font-bold text-gray-700">التقليد</th>
                  <th className="border border-gray-300 p-4 sm:p-6 text-right font-bold text-gray-700">البلدان</th>
                  <th className="border border-gray-300 p-4 sm:p-6 text-right font-bold text-gray-700">إجابتك</th>
                  <th className="border border-gray-300 p-4 sm:p-6 text-right font-bold text-gray-700">الإجابة الصحيحة</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-4 sm:p-6">يأكل الناس طعاماً خاصاً</td>
                  <td className="border border-gray-300 p-4 sm:p-6">
                    <div className="flex flex-col space-y-2">
                      <label className="flex items-center justify-end">
                        <input type="checkbox" name="q1-ar" value="Netherlands" className="ml-2" />
                        هولندا
                      </label>
                      <label className="flex items-center justify-end">
                        <input type="checkbox" name="q1-ar" value="Iran" className="ml-2" />
                        إيران
                      </label>
                      <label className="flex items-center justify-end">
                        <input type="checkbox" name="q1-ar" value="China" className="ml-2" />
                        الصين
                      </label>
                    </div>
                  </td>
                  <td className="border border-gray-300 p-4 sm:p-6" id="answer-q1-ar"></td>
                  <td className="border border-gray-300 p-4 sm:p-6 font-bold text-green-600 hidden" id="correct-q1-ar">هولندا</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-4 sm:p-6">يشاهد الناس الألعاب النارية</td>
                  <td className="border border-gray-300 p-4 sm:p-6">
                    <div className="flex flex-col space-y-2">
                      <label className="flex items-center justify-end">
                        <input type="checkbox" name="q2-ar" value="Netherlands" className="ml-2" />
                        هولندا
                      </label>
                      <label className="flex items-center justify-end">
                        <input type="checkbox" name="q2-ar" value="Iran" className="ml-2" />
                        إيران
                      </label>
                      <label className="flex items-center justify-end">
                        <input type="checkbox" name="q2-ar" value="China" className="ml-2" />
                        الصين
                      </label>
                    </div>
                  </td>
                  <td className="border border-gray-300 p-4 sm:p-6" id="answer-q2-ar"></td>
                  <td className="border border-gray-300 p-4 sm:p-6 font-bold text-green-600 hidden" id="correct-q2-ar">هولندا</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 sm:p-6">يتم الاحتفال في يناير</td>
                  <td className="border border-gray-300 p-4 sm:p-6">
                    <div className="flex flex-col space-y-2">
                      <label className="flex items-center justify-end">
                        <input type="checkbox" name="q3-ar" value="Netherlands" className="ml-2" />
                        هولندا
                      </label>
                      <label className="flex items-center justify-end">
                        <input type="checkbox" name="q3-ar" value="Iran" className="ml-2" />
                        إيران
                      </label>
                      <label className="flex items-center justify-end">
                        <input type="checkbox" name="q3-ar" value="China" className="ml-2" />
                        الصين
                      </label>
                    </div>
                  </td>
                  <td className="border border-gray-300 p-4 sm:p-6" id="answer-q3-ar"></td>
                  <td className="border border-gray-300 p-4 sm:p-6 font-bold text-green-600 hidden" id="correct-q3-ar">هولندا, الصين</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-4 sm:p-6">يعطي الناس الهدايا</td>
                  <td className="border border-gray-300 p-4 sm:p-6">
                    <div className="flex flex-col space-y-2">
                      <label className="flex items-center justify-end">
                        <input type="checkbox" name="q4-ar" value="Netherlands" className="ml-2" />
                        هولندا
                      </label>
                      <label className="flex items-center justify-end">
                        <input type="checkbox" name="q4-ar" value="Iran" className="ml-2" />
                        إيران
                      </label>
                      <label className="flex items-center justify-end">
                        <input type="checkbox" name="q4-ar" value="China" className="ml-2" />
                        الصين
                      </label>
                    </div>
                  </td>
                  <td className="border border-gray-300 p-4 sm:p-6" id="answer-q4-ar"></td>
                  <td className="border border-gray-300 p-4 sm:p-6 font-bold text-green-600 hidden" id="correct-q4-ar">إيران, الصين</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 sm:p-6">يشاهد الناس التلفزيون</td>
                  <td className="border border-gray-300 p-4 sm:p-6">
                    <div className="flex flex-col space-y-2">
                      <label className="flex items-center justify-end">
                        <input type="checkbox" name="q5-ar" value="Netherlands" className="ml-2" />
                        هولندا
                      </label>
                      <label className="flex items-center justify-end">
                        <input type="checkbox" name="q5-ar" value="Iran" className="ml-2" />
                        إيران
                      </label>
                      <label className="flex items-center justify-end">
                        <input type="checkbox" name="q5-ar" value="China" className="ml-2" />
                        الصين
                      </label>
                    </div>
                  </td>
                  <td className="border border-gray-300 p-4 sm:p-6" id="answer-q5-ar"></td>
                  <td className="border border-gray-300 p-4 sm:p-6 font-bold text-green-600 hidden" id="correct-q5-ar">هولندا</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-4 sm:p-6">احتفال طويل</td>
                  <td className="border border-gray-300 p-4 sm:p-6">
                    <div className="flex flex-col space-y-2">
                      <label className="flex items-center justify-end">
                        <input type="checkbox" name="q6-ar" value="Netherlands" className="ml-2" />
                        هولندا
                      </label>
                      <label className="flex items-center justify-end">
                        <input type="checkbox" name="q6-ar" value="Iran" className="ml-2" />
                        إيران
                      </label>
                      <label className="flex items-center justify-end">
                        <input type="checkbox" name="q6-ar" value="China" className="ml-2" />
                        الصين
                      </label>
                    </div>
                  </td>
                  <td className="border border-gray-300 p-4 sm:p-6" id="answer-q6-ar"></td>
                  <td className="border border-gray-300 p-4 sm:p-6 font-bold text-green-600 hidden" id="correct-q6-ar">الصين</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4 sm:p-6">ينظف الناس منازلهم</td>
                  <td className="border border-gray-300 p-4 sm:p-6">
                    <div className="flex flex-col space-y-2">
                      <label className="flex items-center justify-end">
                        <input type="checkbox" name="q7-ar" value="Netherlands" className="ml-2" />
                        هولندا
                      </label>
                      <label className="flex items-center justify-end">
                        <input type="checkbox" name="q7-ar" value="Iran" className="ml-2" />
                        إيران
                      </label>
                      <label className="flex items-center justify-end">
                        <input type="checkbox" name="q7-ar" value="China" className="ml-2" />
                        الصين
                      </label>
                    </div>
                  </td>
                  <td className="border border-gray-300 p-4 sm:p-6" id="answer-q7-ar"></td>
                  <td className="border border-gray-300 p-4 sm:p-6 font-bold text-green-600 hidden" id="correct-q7-ar">هولندا, إيران, الصين</td>
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
                  { id: 'q1-ar', correct: ['Netherlands'] },
                  { id: 'q2-ar', correct: ['Netherlands'] },
                  { id: 'q3-ar', correct: ['Netherlands', 'China'] },
                  { id: 'q4-ar', correct: ['Iran', 'China'] },
                  { id: 'q5-ar', correct: ['Netherlands'] },
                  { id: 'q6-ar', correct: ['China'] },
                  { id: 'q7-ar', correct: ['Netherlands', 'Iran', 'China'] }
                ];

                let score = 0;

                questions.forEach(q => {
                  const selected = Array.from(document.querySelectorAll(`input[type=checkbox][name=${q.id}]`))
                    .filter(checkbox => (checkbox as HTMLInputElement).checked)
                    .map(checkbox => (checkbox as HTMLInputElement).value);

                  const answerCell = document.getElementById(`answer-${q.id}`);
                  const correctCell = document.getElementById(`correct-${q.id}`);

                  if (answerCell && correctCell) {
                    answerCell.textContent = selected.length > 0 ? selected.join(', ') : 'لم تجب';

                    // Check if the selected answers match the correct answers
                    const isCorrect = selected.length === q.correct.length &&
                      selected.every(country => q.correct.includes(country)) &&
                      q.correct.every(country => selected.includes(country));

                    if (isCorrect) {
                      answerCell.className = 'border border-gray-300 p-4 sm:p-6 font-bold text-green-600';
                      score++;
                    } else {
                      answerCell.className = 'border border-gray-300 p-4 sm:p-6 font-bold text-red-600';
                    }

                    // Show the correct answer
                    correctCell.classList.remove('hidden');
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
              التحقق من الإجابات
            </button>
            <button
              id="reset-quiz-ar"
              className="px-6 py-3 bg-red-600 text-white font-bold rounded-full text-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => {
                const checkboxes = document.querySelectorAll('input[type=checkbox][name$="-ar"]');
                checkboxes.forEach(checkbox => {
                  (checkbox as HTMLInputElement).checked = false;
                });

                const answerCells = document.querySelectorAll('[id^="answer-q"][id$="-ar"]');
                answerCells.forEach(cell => {
                  cell.textContent = '';
                  cell.className = 'border border-gray-300 p-4 sm:p-6';
                });

                const correctCells = document.querySelectorAll('[id^="correct-q"][id$="-ar"]');
                correctCells.forEach(cell => {
                  cell.classList.add('hidden');
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

        {/* قسم الاحتفال المفضل */}
        <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 border-4 border-gray-200 mt-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-600 mb-6 sm:mb-8">
            احتفالي المفضل
          </h2>
          <p className="text-gray-600 text-center text-lg mb-8">
            اكتب عن احتفالك المفضل. ماذا يفعل الناس؟
          </p>

          <div className="bg-yellow-50 rounded-2xl p-6 border-2 border-yellow-200">
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-700 mb-4">السؤال:</h3>
            <p className="text-gray-700 text-lg mb-6">
              صف احتفالك المفضل. ما الأنشطة التي يفعلها الناس عادة خلال هذا الاحتفال؟
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">1</div>
                <div className="flex-1 border-b-2 border-gray-300 pb-2">
                  <p className="text-gray-700">عادة ما يفعل الناس ...</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">2</div>
                <div className="flex-1 border-b-2 border-gray-300 pb-2">
                  <p className="text-gray-700">أثناء الاحتفال، العائلات ...</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">3</div>
                <div className="flex-1 border-b-2 border-gray-300 pb-2">
                  <p className="text-gray-700">الأطعمة التقليدية تشمل ...</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">4</div>
                <div className="flex-1 border-b-2 border-gray-300 pb-2">
                  <p className="text-gray-700">هذا الاحتفال خاص لأنه ...</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">5</div>
                <div className="flex-1 border-b-2 border-gray-300 pb-2">
                  <p className="text-gray-700">الأطفال عادة ...</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-500 italic">
              يمكن للطلاب كتابة إجاباتهم في دفاترهم أو على ورقة منفصلة.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}