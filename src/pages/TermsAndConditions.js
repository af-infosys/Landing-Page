import React from "react";
import { Helmet } from "react-helmet-async";

const TermsAndConditions = () => {
  const sections = [
    {
      title: "1. સેવા અંગે માહિતી",
      content:
        "A.F. Infosys ગ્રામ પંચાયત, તલાટી કમ મંત્રી અને રેવન્યુ સંબંધિત ડિજિટલ રેકોર્ડ મેનેજમેન્ટ સેવાઓ પ્રદાન કરે છે. અમારી સેવાઓમાં રેવન્યુ હિસાબ, કરવેરા રજીસ્ટર, આકારણી સર્વે, ડેટા એન્ટ્રી અને પંચાયતી રેકોર્ડનું કોમ્પ્યુટરાઇઝેશન સમાવેશ થાય છે.",
    },
    {
      title: "2. માહિતીની સાચાઈ",
      content:
        "ગ્રાહક દ્વારા આપવામાં આવેલ માહિતી, દસ્તાવેજો અને રેકોર્ડની ચોકસાઈ માટે ગ્રાહક પોતે જવાબદાર રહેશે. ખોટી અથવા અધૂરી માહિતીના કારણે સર્જાતી સમસ્યાઓ માટે A.F. Infosys જવાબદાર રહેશે નહીં.",
    },
    {
      title: "3. રેકોર્ડ અને ડેટા હેન્ડલિંગ",
      content:
        "ગ્રાહકો દ્વારા આપવામાં આવેલા તમામ દસ્તાવેજો અને માહિતીનો ઉપયોગ માત્ર અધિકૃત કામગીરી માટે જ કરવામાં આવશે અને તેને વ્યાવસાયિક રીતે સુરક્ષિત રાખવામાં આવશે.",
    },
    {
      title: "4. સેવા સમયમર્યાદા",
      content:
        "કાર્ય પૂર્ણ થવાનો સમય પ્રોજેક્ટના કદ, સરકારી પ્રક્રિયા, ઉપલબ્ધ માહિતી અને કામગીરીની પરિસ્થિતિઓ પર આધારિત રહેશે.",
    },
    {
      title: "5. વેબસાઇટ ઉપયોગ નિયમો",
      content:
        "વેબસાઇટનો ગેરકાયદેસર, ભ્રામક અથવા સિસ્ટમને નુકસાન પહોંચાડે તેવા હેતુઓ માટે ઉપયોગ કરવાની મંજૂરી નથી.",
    },
    {
      title: "6. બૌદ્ધિક સંપત્તિ",
      content:
        "વેબસાઇટના ડિઝાઇન, લોગો, લખાણ, ગ્રાફિક્સ અને ડિજિટલ સામગ્રી A.F. Infosys ની માલિકીની છે. પૂર્વ લેખિત મંજૂરી વિના તેનો ઉપયોગ અથવા નકલ કરી શકાશે નહીં.",
    },
    {
      title: "7. જવાબદારી મર્યાદા",
      content:
        "સરકારી નિયમોમાં ફેરફાર, ટેક્નિકલ સમસ્યાઓ, ખોટા દસ્તાવેજો અથવા અન્ય બાહ્ય પરિસ્થિતિઓના કારણે થતી વિલંબ અથવા નુકસાન માટે A.F. Infosys જવાબદાર રહેશે નહીં.",
    },
    {
      title: "8. નિયમોમાં ફેરફાર",
      content:
        "A.F. Infosys કોઈપણ સમયે પૂર્વ સૂચના વિના Terms & Conditions માં ફેરફાર કરવાનો અધિકાર રાખે છે.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Terms & Conditions | A.F. Infosys</title>

        <meta
          name="description"
          content="Read the terms and conditions of using our platform."
        />
      </Helmet>

      <div className="min-h-screen bg-[#f5f7fb] text-[#1f2937]">
        {/* Hero Section */}
        <div className="bg-[#1f3fae] text-white py-20 px-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-52 h-52 bg-cyan-400/20 rounded-full blur-3xl" />

          <div className="max-w-6xl mx-auto relative z-10">
            <span className="inline-block bg-[#22c55e] text-white text-xs font-semibold px-4 py-1 rounded-full mb-5">
              SINCE 2010
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
              Terms & Conditions
            </h1>

            <p className="mt-6 text-blue-100 max-w-2xl leading-8">
              A.F. Infosys ની વેબસાઇટ અને સેવાઓનો ઉપયોગ કરતા પહેલા કૃપા કરીને
              નીચે આપેલ નિયમો અને શરતો ધ્યાનપૂર્વક વાંચો.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          {/* Intro Card */}
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100 mb-12">
            <div className="flex items-start gap-4">
              <div className="min-w-[50px] h-[50px] rounded-2xl bg-[#22c55e]/10 flex items-center justify-center">
                <span className="text-[#22c55e] text-2xl">✓</span>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#1f3fae] mb-3">
                  વિશ્વાસ અને પારદર્શિતા
                </h2>

                <p className="text-gray-600 leading-8">
                  A.F. Infosys ગ્રામ પંચાયત અને સરકારી રેકોર્ડ મેનેજમેન્ટ સેવાઓ
                  વિશ્વાસ, પારદર્શિતા અને જવાબદારી સાથે પ્રદાન કરે છે. આ Terms &
                  Conditions અમારી સેવાઓના ઉપયોગ માટેના સત્તાવાર નિયમો દર્શાવે
                  છે.
                </p>
              </div>
            </div>
          </div>

          {/* Terms Sections */}
          <div className="grid gap-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                <div className="h-2 bg-gradient-to-r from-[#22c55e] to-[#1f3fae]" />

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#1f3fae] mb-4">
                    {section.title}
                  </h3>

                  <p className="text-gray-600 leading-8">{section.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;
