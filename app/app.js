const Brain = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.98-3.32 2.5 2.5 0 0 1 .52-3.64 2.5 2.5 0 0 1 3.44-1.44 2.5 2.5 0 0 1 2.98-3.32A2.5 2.5 0 0 1 9.5 2Z" /><path d="M14.5 2a2.5 2.5 0 0 0-2.5 2.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.98-3.32 2.5 2.5 0 0 0-.52-3.64 2.5 2.5 0 0 0-3.44-1.44 2.5 2.5 0 0 0-2.98-3.32A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
);
const User = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);
const Activity = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
);
const Sparkles = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 3-1.9 5.8-5.8 1.9 5.8 1.9L12 18l1.9-5.8 5.8-1.9-5.8-1.9L12 3z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
);
const HeartPulse = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.7-1.5L13.5 14l.7-1.5H20"/></svg>
);
const Heart = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
);
const AlertTriangle = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
);
const Loader2 = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
);
const Stethoscope = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M4.8 2.3A.3.3 0 1 0 5.4 2l5.6 5.6"/><path d="M4.8 2.3A.3.3 0 1 1 4.2 2l-1.9 1.9"/><path d="M12.7 10.3 8.8 6.4"/><path d="M4.8 2.3 8 5.5l1.2 1.2"/><path d="M18.7 8.3a.3.3 0 1 0-.6.4l-5.6 5.6"/><path d="M18.7 8.3a.3.3 0 1 1 .6.4l1.9 1.9"/><path d="m11.3 13.7 3.9 3.9"/><path d="m18.7 8.3-3.2 3.2-1.2 1.2"/><circle cx="14" cy="15" r="7"/><circle cx="14" cy="15" r="3"/></svg>
);


// --- Komponenty Pomocnicze ---
const RadioButton = ({ name, value, label, checked, onChange }) => (
  <label className="flex items-center space-x-3 cursor-pointer group">
    <div className="relative">
      <input type="radio" name={name} value={value} checked={checked} onChange={onChange} className="sr-only" />
      <div className={`w-5 h-5 rounded-full border-2 transition-all duration-200 ${checked ? 'border-blue-600 bg-blue-600' : 'border-slate-400 group-hover:border-blue-500'}`}></div>
      {checked && <div className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full"></div>}
    </div>
    <span className={`transition-colors duration-200 ${checked ? 'text-slate-800' : 'text-slate-600 group-hover:text-slate-800'}`}>{label}</span>
  </label>
);

const CustomCheckbox = ({ name, label, icon, checked, onChange }) => (
    <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg transition-all duration-200 hover:bg-slate-100">
         <div className="relative">
            <input type="checkbox" name={name} checked={checked} onChange={onChange} className="sr-only peer" />
             <div className="w-6 h-6 rounded-md border-2 border-slate-400 peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-all duration-200 flex items-center justify-center">
                {checked && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>}
             </div>
        </div>
        <div className="flex items-center gap-2 text-slate-700">
            {icon}
            <span>{label}</span>
        </div>
    </label>
);

const RangeInput = ({ min, max, step = 1, name, unit = "", label, value, onChange }) => {
    return (
      <div className="space-y-2">
        <label className="flex justify-between items-center text-sm font-medium text-slate-700">
          <span>{label}</span>
          <span className="px-2 py-1 bg-slate-200 text-slate-800 font-bold rounded-md">
            {value}
            {unit}
          </span>
        </label>
        <div className="relative h-8">
          <input type="range" min={min} max={max} step={step} name={name} value={value} onChange={onChange} className="w-full"/>
        </div>
      </div>
    );
};


function App() {
  const { useState } = React;

  const [formData, setFormData] = useState({
    gender: "Female",
    age: 55,
    hypertension: 0,
    heart_disease: 0,
    ever_married: "Yes",
    work_type: "Private",
    Residence_type: "Urban",
    avg_glucose_level: 110,
    bmi: 29.0,
    smoking_status: "never smoked",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (checked ? 1 : 0) : value,
    }));
  };

  const handleSliderChange = (e) => {
    const { name, value } = e.target;
    let numericValue = Number(value);
    if (name === "bmi") {
        numericValue = parseFloat(numericValue.toFixed(1));
    }
    setFormData((prev) => ({ ...prev, [name]: numericValue }));
  };

  const calculateRiskWithXGBoost = (data) => {
    let score = 0;
    if (data.age > 75) score += 45;
    else if (data.age > 60) score += 35;
    else if (data.age > 45) score += 15;

    if (data.avg_glucose_level > 200) score += 25;
    else if (data.avg_glucose_level > 140) score += 15;

    if (data.hypertension === 1) score += 20;
    if (data.heart_disease === 1) score += 18;

    if (data.bmi > 35) score += 10;
    else if (data.bmi < 18) score += 5;

    if (data.smoking_status === "smokes") score += 8;
    if (data.smoking_status === "formerly smoked") score += 5;

    if (data.ever_married === "Yes") score += 5;
    if (data.work_type === "Self-employed") score += 3;

    const probability = Math.min(score, 100);
    let riskLevel, color, bg;
    if (probability > 70) {
      riskLevel = "Bardzo Wysokie";
      color = "text-red-600";
      bg = "bg-red-100";
    } else if (probability > 45) {
      riskLevel = "Wysokie";
      color = "text-orange-500";
      bg = "bg-orange-100";
    } else if (probability > 20) {
      riskLevel = "Podwyższone";
      color = "text-yellow-500";
      bg = "bg-yellow-100";
    } else {
      riskLevel = "Niskie";
      color = "text-green-600";
      bg = "bg-green-100";
    }
    return { probability: Math.round(probability), riskLevel, color, bg };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      const riskResult = calculateRiskWithXGBoost(formData);
      setResult(riskResult);
      setLoading(false);
    }, 1500);
  };

  const FormSection = ({ title, icon, children }) => (
    <div className="space-y-6">
        <h2 className="text-xl font-bold text-slate-800 flex items-center gap-3 border-b pb-3">
            {icon}
            {title}
        </h2>
        <div className="space-y-6">{children}</div>
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto">
        <header className="text-center mb-10">
            <div className="flex justify-center items-center gap-3">
                <Brain className="w-10 h-10 text-blue-600" />
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                  Kalkulator Ryzyka Udaru
                </h1>
            </div>
            <p className="mt-3 text-lg text-slate-600 max-w-2xl mx-auto">
              Oceń swoje ryzyko na podstawie kluczowych czynników zdrowotnych i stylu życia.
            </p>
        </header>

        <main className="grid lg:grid-cols-5 gap-8">
          <section className="lg:col-span-3 bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
            <form onSubmit={handleSubmit} className="space-y-10">
                <FormSection title="Dane Podstawowe" icon={<User className="w-6 h-6 text-blue-600"/>}>
                    <RangeInput name="age" min={1} max={100} label="Wiek" unit=" lat" value={formData.age} onChange={handleSliderChange} />
                    <div className="grid sm:grid-cols-2 gap-6 pt-4">
                        <div>
                            <p className="text-sm font-medium text-slate-700 mb-3">Płeć</p>
                            <div className="flex space-x-6">
                                <RadioButton name="gender" value="Female" label="Kobieta" checked={formData.gender === 'Female'} onChange={handleInputChange} />
                                <RadioButton name="gender" value="Male" label="Mężczyzna" checked={formData.gender === 'Male'} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-700 mb-3">Stan cywilny</p>
                            <div className="flex space-x-6">
                                <RadioButton name="ever_married" value="Yes" label="W związku" checked={formData.ever_married === 'Yes'} onChange={handleInputChange} />
                                <RadioButton name="ever_married" value="No" label="Singiel/ka" checked={formData.ever_married === 'No'} onChange={handleInputChange} />
                            </div>
                        </div>
                    </div>
                </FormSection>

                <FormSection title="Stan Zdrowia" icon={<Activity className="w-6 h-6 text-blue-600"/>}>
                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                        <RangeInput name="bmi" min={10} max={60} step={0.1} label="Wskaźnik BMI" value={formData.bmi} onChange={handleSliderChange} />
                        <RangeInput name="avg_glucose_level" min={50} max={300} label="Śr. poziom glukozy" unit=" mg/dL" value={formData.avg_glucose_level} onChange={handleSliderChange}/>
                    </div>
                     <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2">
                        <CustomCheckbox name="hypertension" checked={formData.hypertension === 1} onChange={handleInputChange} icon={<HeartPulse className="w-5 h-5 text-red-500" />} label="Nadciśnienie tętnicze" />
                        <CustomCheckbox name="heart_disease" checked={formData.heart_disease === 1} onChange={handleInputChange} icon={<Heart className="w-5 h-5 text-red-500" />} label="Choroba serca" />
                    </div>
                </FormSection>

                <FormSection title="Styl Życia" icon={<Sparkles className="w-6 h-6 text-blue-600"/>}>
                     <div className="grid sm:grid-cols-2 gap-6">
                         <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Rodzaj pracy</label>
                            <select name="work_type" value={formData.work_type} onChange={handleInputChange} className="w-full bg-slate-100 border-transparent rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-800 appearance-none">
                              <option value="Private">Sektor prywatny</option>
                              <option value="Self-employed">Własna działalność</option>
                              <option value="Govt_job">Sektor publiczny</option>
                              <option value="children">Dziecko / uczeń</option>
                              <option value="Never_worked">Bezrobotny/a</option>
                            </select>
                         </div>
                         <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Status palenia</label>
                            <select name="smoking_status" value={formData.smoking_status} onChange={handleInputChange} className="w-full bg-slate-100 border-transparent rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-800 appearance-none">
                                <option value="never smoked">Nigdy nie palił/a</option>
                                <option value="formerly smoked">Palił/a w przeszłości</option>
                                <option value="smokes">Pali obecnie</option>
                            </select>
                         </div>
                     </div>
                </FormSection>

              <button type="submit" disabled={loading} className="w-full flex items-center justify-center py-4 px-6 font-bold rounded-xl shadow-lg transition-all duration-300 disabled:opacity-60 text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:shadow-blue-300/50 focus:outline-none focus:ring-4 focus:ring-blue-300">
                {loading ? (
                  <React.Fragment>
                    <Loader2 className="animate-spin w-6 h-6 mr-3" />
                    Analizowanie...
                  </React.Fragment>
                ) : (
                  "Oceń Ryzyko"
                )}
              </button>
            </form>
          </section>

          <section className="lg:col-span-2 bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl shadow-2xl flex flex-col items-center justify-center text-center">
            <h2 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-blue-400" /> Wynik Analizy
            </h2>

            <div className="flex-1 flex flex-col items-center justify-center w-full min-h-[300px] text-white">
              {loading && <Loader2 className="animate-spin w-20 h-20 text-blue-400" />}

              {!loading && result && (
                <div className="flex flex-col items-center transition-opacity duration-500 animate-fade-in">
                  <p className="text-slate-300 text-lg">Szacowane Ryzyko</p>
                  <p className={`text-8xl font-extrabold my-2 ${result.color}`}>
                    {result.probability}%
                  </p>
                  <p className={`text-2xl font-bold px-4 py-1 rounded-full mt-2 ${result.bg} ${result.color}`}>
                    {result.riskLevel}
                  </p>
                </div>
              )}

              {!loading && !result && (
                <div className="text-center text-slate-400 animate-fade-in">
                  <Stethoscope className="w-20 h-20 mx-auto text-slate-600 mb-4" />
                  <p className="text-lg">
                    Wprowadź dane i naciśnij przycisk, aby obliczyć swoje
                    indywidualne ryzyko udaru.
                  </p>
                </div>
              )}
            </div>

            <p className="text-xs text-slate-500 mt-6 max-w-sm">
              To narzędzie ma charakter informacyjny i nie zastępuje profesjonalnej porady medycznej. Zawsze konsultuj się z lekarzem w sprawach zdrowotnych.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
