{/* قسم اختبار البلدان */ }
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