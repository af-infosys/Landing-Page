import React from "react";
import { Helmet } from "react-helmet-async";

function PrivacyPolicy() {
  const sections = [
    {
      title: "1. માહિતી એકત્રિત કરવી",
      content:
        "A.F. Infosys અમારી વેબસાઇટ અથવા સેવાઓનો ઉપયોગ કરતી વખતે આપનું નામ, મોબાઇલ નંબર, ઇમેઇલ સરનામું, તાલુકા, જિલ્લા અને અન્ય જરૂરી માહિતી એકત્રિત કરી શકે છે. આ માહિતીનો ઉપયોગ માત્ર સત્તાવાર સેવાઓ અને સંપર્ક માટે કરવામાં આવે છે.",
    },
    {
      title: "2. માહિતીનો ઉપયોગ",
      content:
        "એકત્રિત માહિતીનો ઉપયોગ પંચાયત સંબંધિત કામગીરી, સેવા અપડેટ, પૂછપરછનો જવાબ, ડિજિટલ રેકોર્ડ મેનેજમેન્ટ અને ગ્રાહક સહાય માટે કરવામાં આવે છે.",
    },
    {
      title: "3. ડેટા સુરક્ષા",
      content:
        "અમે આપની માહિતી સુરક્ષિત રાખવા માટે યોગ્ય ટેક્નિકલ અને એડમિનિસ્ટ્રેટિવ પગલાં લઈએ છીએ. છતાં, ઈન્ટરનેટ પર કોઈપણ ડેટા ટ્રાન્સમિશન 100% સુરક્ષિત હોવાની સંપૂર્ણ ખાતરી આપી શકાતી નથી.",
    },
    {
      title: "4. કૂકીઝ અને ટ્રેકિંગ",
      content:
        "વેબસાઇટનો અનુભવ સુધારવા માટે Cookies અથવા સમાન ટેક્નોલોજીનો ઉપયોગ થઈ શકે છે. આ માહિતી વેબસાઇટ પ્રદર્શન અને વપરાશ વિશ્લેષણ માટે ઉપયોગમાં લેવાય છે.",
    },
    {
      title: "5. તૃતીય પક્ષ સેવાઓ",
      content:
        "અમારી વેબસાઇટ પર WhatsApp, Email અથવા અન્ય બાહ્ય સેવાઓની લિંક્સ હોઈ શકે છે. આ તૃતીય પક્ષ વેબસાઇટ્સની Privacy Policy માટે A.F. Infosys જવાબદાર રહેશે નહીં.",
    },
    {
      title: "6. માહિતી શેરિંગ",
      content:
        "અમે આપની વ્યક્તિગત માહિતી કોઈપણ બિનઅધિકૃત તૃતીય પક્ષ સાથે વેચતા અથવા શેર કરતા નથી, સિવાય કે કાયદાકીય ફરજ અથવા સરકારી જરૂરીયાત હોય.",
    },
    {
      title: "7. બાળકોની ગોપનીયતા",
      content:
        "અમારી સેવાઓ 16 વર્ષથી ઓછી ઉંમરના બાળકો માટે બનાવવામાં આવી નથી. અમે જાણતા હોતાં કોઈ બાળકની વ્યક્તિગત માહિતી એકત્રિત કરતા નથી.",
    },
    {
      title: "8. Privacy Policy માં ફેરફાર",
      content:
        "A.F. Infosys સમયાંતરે આ Privacy Policy માં ફેરફાર કરી શકે છે. કોઈપણ બદલાવ આ પેજ પર અપડેટ કરવામાં આવશે.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy | A.F. Infosys</title>

        <meta
          name="description"
          content="Read our privacy policy and learn how we handle your data."
        />
      </Helmet>

      <div className="min-h-screen bg-[#f5f7fb] text-[#1f2937] overflow-hidden">
        {/* Hero Section */}
        <section className="relative bg-[#1f3fae] text-white py-24 px-6">
          {/* Background Effects */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-cyan-300/20 rounded-full blur-3xl" />

          <div className="max-w-6xl mx-auto relative z-10">
            <span className="inline-flex items-center bg-[#22c55e] text-white text-xs font-semibold px-4 py-1 rounded-full mb-6 shadow-md">
              SINCE 2010
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
              Privacy Policy
            </h1>

            <p className="mt-6 text-blue-100 leading-8 max-w-3xl text-lg">
              A.F. Infosys આપની વ્યક્તિગત માહિતીની ગોપનીયતા અને સુરક્ષાને મહત્વ
              આપે છે. આ Privacy Policy દ્વારા અમે સમજાવીએ છીએ કે અમે કઈ માહિતી
              એકત્રિત કરીએ છીએ, તેનો ઉપયોગ કેવી રીતે કરીએ છીએ અને તેને કેવી રીતે
              સુરક્ષિત રાખીએ છીએ.
            </p>
          </div>
        </section>

        {/* Intro Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-[#22c55e] to-[#1f3fae]" />

            <div className="p-8 md:p-10">
              <div className="flex items-start gap-5">
                <div className="min-w-[60px] h-[60px] rounded-2xl bg-[#22c55e]/10 flex items-center justify-center text-[#22c55e] text-2xl font-bold shadow-sm">
                  ✓
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1f3fae] mb-4">
                    વિશ્વાસ, સુરક્ષા અને પારદર્શિતા
                  </h2>

                  <p className="text-gray-600 leading-8 text-[16px]">
                    A.F. Infosys ગ્રામ પંચાયત અને સરકારી રેકોર્ડ મેનેજમેન્ટ
                    સેવાઓ વિશ્વાસ અને જવાબદારી સાથે પ્રદાન કરે છે. આપ દ્વારા શેર
                    કરવામાં આવેલી માહિતીનો ઉપયોગ માત્ર અધિકૃત સેવાઓ અને
                    વ્યવસાયિક હેતુઓ માટે જ કરવામાં આવે છે.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Policy Sections */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="grid gap-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="h-2 bg-gradient-to-r from-[#1f3fae] to-[#22c55e]" />

                <div className="p-8 md:p-10">
                  <h3 className="text-2xl font-bold text-[#1f3fae] mb-5">
                    {section.title}
                  </h3>

                  <p className="text-gray-600 leading-8 text-[16px]">
                    {section.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default PrivacyPolicy;
