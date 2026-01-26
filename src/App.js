import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  FileText,
  Database,
  Map as MapIcon,
  Monitor,
  Globe,
  ChevronRight,
  BarChart2,
  Users,
  FileCheck,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// --- DATA & CONFIGURATION ---

const services = [
  {
    id: 1,
    title: "રેવન્યુ જમા બંધી વાર્ષિક હિસાબ",
    desc: "પંચાયતના આવક-જાવક હિસાબની ચોક્કસ અને નિયમ મુજબની ડિજિટલ તૈયારીઓ",
    icon: <FileText className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600", // Accounting/Finance
  },
  {
    id: 2,
    title: "૯/ડી કરવેરા માંગણા રજીસ્ટર",
    desc: "કર વસુલાત માટે સુવ્યવસ્થિત અને અપડેટેડ રજીસ્ટર",
    icon: <Database className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=600", // Register/List
  },
  {
    id: 3,
    title: "આકારણી સર્વે કામ",
    desc: "ગ્રામ્ય કર આકારણી માટે સંપૂર્ણ સર્વે અને ડેટા એન્ટ્રી",
    icon: <MapIcon className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1464618663641-bbdd760ae84a?auto=format&fit=crop&q=80&w=600", // Survey/Planning
  },
  {
    id: 4,
    title: "ગામ નમુના નં. ૨ – કોમ્પ્યુટરાઇઝ્ડ ડેટા એન્ટ્રી",
    desc: "જૂના રેકોર્ડને નવા ફોર્મેટમાં અપડેટ કરવું",
    icon: <Monitor className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1587560699334-cc4da63c24b9?auto=format&fit=crop&q=80&w=600", // Computer/Data
  },
  {
    id: 5,
    title: "ગ્રામસુવિધા પોર્ટલ ડેટા એન્ટ્રી",
    desc: "તમામ પ્રકારની ઓનલાઈન પંચાયત માહિતી દાખલ સેવા",
    icon: <Globe className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600", // Digital Portal
  },
];

const statsData = [
  { name: "રેવન્યુ હિસાબ", villages: 2855, taluka: 30, district: 9 },
  { name: "૯ડી વેરા રજી.", villages: 1253, taluka: 28, district: 10 },
  { name: "આકારણી સર્વે", villages: 316, taluka: 26, district: 9 },
];

const fullStats = [
  {
    type: "રેવન્યુ હિસાબ",
    villages: "2,855",
    accounts: "39,03,163",
    pages: "2,43,454",
    taluka: "30",
    district: "9",
  },
  {
    type: "૯ડી વેરા રજી.",
    villages: "1,253",
    accounts: "6,87,925",
    pages: "95,933",
    taluka: "28",
    district: "10",
  },
  {
    type: "આકારણી સર્વે",
    villages: "316",
    accounts: "1,87,640",
    pages: "23,458",
    taluka: "26",
    district: "9",
  },
];

// --- COMPONENTS ---

const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
      {title}
    </h2>
    {subtitle && (
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
    )}
    <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
  </div>
);

const StatCard = ({ icon, label, value, subLabel }) => (
  <div className="bg-white p-6 rounded-xl shadow-md border-b-4 border-blue-600 text-center hover:shadow-lg transition-shadow">
    <div className="flex justify-center mb-4">{icon}</div>
    <div className="text-3xl font-bold text-slate-800 mb-1">{value}</div>
    <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
      {label}
    </div>
    {subLabel && <div className="text-xs text-slate-500 mt-1">{subLabel}</div>}
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("table"); // 'chart' or 'table'

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    designation: "",
    subject: "",
    joiningDate: "",
    village: "",
    taluka: "",
    district: "",
    note: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const message = `
 \`Inquiry Details\`

 - *Full Name:* ${formData.fullName}
 - *Mobile:* ${formData.mobile}
 - *Email:* ${formData.email || "N/A"}
 - *Designation:* ${formData.designation}

 *Subject:* ${formData.subject}

 - *Service Joining Date:* ${formData.joiningDate}
 - *On Duty Village:* ${formData.village}
 - *Taluka:* ${formData.taluka}
 - *District:* ${formData.district}

 *Special Note:*
${formData.note}
    `;

    const whatsappUrl = `https://wa.me/919376443146?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen flex flex-col">
      {/* Inject Google Fonts for Gujarati */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Gujarati:wght@300;400;600;700&display=swap');
        body { font-family: 'Noto Sans Gujarati', sans-serif; }
      `}</style>

      {/* --- HEADER --- */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-inner border-2 border-green-500">
              <img
                src="https://afinfosys.netlify.app/logo512.png"
                style={{ width: "100%", borderRadius: "50px" }}
              />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-blue-900 leading-tight">
                A.F. Infosys
              </h1>
              <p className="text-xs text-slate-500 font-medium">
                Government Record Management Expert
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 font-medium text-slate-700">
            <a href="#home" className="hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-blue-600 transition-colors">
              About Us
            </a>
            <a
              href="#services"
              className="hover:text-blue-600 transition-colors"
            >
              Services
            </a>
            <a href="#work" className="hover:text-blue-600 transition-colors">
              Work
            </a>
            <a
              href="#contact"
              className="hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-slate-700 focus:outline-none"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 py-4 px-4 shadow-lg">
            <div className="flex flex-col space-y-4 font-medium text-slate-700">
              <a
                href="#home"
                onClick={toggleMenu}
                className="block py-2 hover:text-blue-600"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={toggleMenu}
                className="block py-2 hover:text-blue-600"
              >
                About Us
              </a>
              <a
                href="#services"
                onClick={toggleMenu}
                className="block py-2 hover:text-blue-600"
              >
                Services
              </a>
              <a
                href="#work"
                onClick={toggleMenu}
                className="block py-2 hover:text-blue-600"
              >
                Work
              </a>
              <a
                href="#contact"
                onClick={toggleMenu}
                className="block py-2 hover:text-blue-600"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {/* --- HERO SECTION --- */}
        <section
          id="home"
          className="relative bg-blue-900 text-white py-20 md:py-32 overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1577051287957-1a052e46b0d9?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-transparent opacity-90"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-block bg-green-500 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                Since 2010
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                સતત 15 વર્ષ જુની અનુભવી કંપની – <br />
                <span className="text-green-400">
                  ગ્રામ પંચાયત અને તલાટી કમ મંત્રી
                </span>{" "}
                માટે વિશ્વસનીય ડિજિટલ સેવા
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
                રેવન્યુ હિસાબ, આકારણી સર્વે, કરવેરા રજીસ્ટર, જૂના રેકોર્ડ અધ્યતન
                – સંપૂર્ણ કોમ્પ્યુટરાઇઝ્ડ અને પ્રિન્ટિંગ સાથે
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#services"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg flex items-center justify-center"
                >
                  અમારી સેવાઓ જુઓ <ChevronRight size={20} className="ml-2" />
                </a>
                <a
                  href="#contact"
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-lg font-bold transition-all flex items-center justify-center"
                >
                  પુછપરછ કરો
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* --- ABOUT SECTION --- */}
        <section id="about" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full -z-10"></div>
                  <img
                    src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80"
                    alt="Office Work"
                    className="rounded-xl shadow-2xl w-full h-auto object-cover"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl border-l-4 border-green-500 hidden md:block">
                    <p className="font-bold text-blue-900 text-lg">
                      Serving All Gujarat
                    </p>
                    <p className="text-sm text-slate-500">
                      Thousands of villages trusted us
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 border-l-8 border-green-500 pl-4">
                  વિશ્વાસ અને ટેકનોલોજીનો સંગમ
                </h2>
                <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                  <p>
                    <strong>એ.એફ. ઇન્ફોસિસ</strong>ની સ્થાપના સન 2010 માં
                    પંચાયતી રાજના રેકર્ડ આધારીત કામોને સરળ અને સુવ્યવસ્થિત
                    બનાવવા માટે કરવામાં આવી.
                  </p>
                  <p>
                    સંસ્થાએ શરૂઆત રેવન્યુ મહેસુલી હિસાબોને કોમ્પ્યુટરાઇઝ્ડ
                    કરવાની કામગીરીથી કરી અને ત્યારબાદ કરવેરા આકારણી, ગામ નમુના
                    અધ્યતન તથા વિવિધ પંચાયતી રેકોર્ડ ડિજિટલ સ્વરૂપે તૈયાર
                    કરવામાં નોંધપાત્ર ફાળો આપ્યો.
                  </p>
                  <p className="flex items-start gap-3 mt-4">
                    <CheckCircle className="text-green-500 w-6 h-6 flex-shrink-0 mt-1" />
                    <span>
                      આજ સુધી ગુજરાત રાજ્યના અનેક જિલ્લાઓ, તાલુકાઓ અને હજારો
                      ગામોમાં પંચાયત સંબંધિત કામો સફળતાપૂર્વક પૂર્ણ કરવામાં
                      આવ્યા છે.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SERVICES SECTION (REVAMPED) --- */}
        <section id="services" className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="અમારી સેવાઓ"
              subtitle="પંચાયત અને મહેસૂલી કામગીરી માટે સંપૂર્ણ ડિજિટલ ઉકેલ"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col border border-slate-100 h-full relative"
                >
                  {/* Image Container - Separated to avoid overflow clipping issues with the icon */}
                  <div className="relative h-56">
                    <div className="absolute inset-0 overflow-hidden rounded-t-2xl">
                      <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/0 transition-colors z-10"></div>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>

                    {/* Floating Overlapping Icon - Now properly Z-indexed above content */}
                    <div className="absolute -bottom-6 right-6 w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center z-30 group-hover:bg-blue-600 transition-colors duration-300 ring-4 ring-white">
                      <div className="text-blue-600 group-hover:text-white transition-colors duration-300">
                        {service.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content - with z-index control */}
                  <div className="p-8 pt-10 flex-grow flex flex-col relative z-0">
                    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm flex-grow">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-blue-900 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-xl">
              <div className="relative z-10 max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">અમારો ઉદ્દેશ્ય</h3>
                <p className="text-lg opacity-90 mb-6 font-light">
                  "અમોએ રેકર્ડ બાબતે આપને પડતી મુશ્કેલીઓ ઘટાડવા માટે 100%
                  પ્રયત્ન કર્યો છે. તેમ છતાં જો કોઈ કામગીરી બાકી રહી હોય અથવા
                  કોઈ સૂચન હોય તો કૃપા કરીને અમને જાણ કરશો."
                </p>
              </div>
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-5 rounded-full"></div>
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-green-500 opacity-20 rounded-full"></div>
            </div>
          </div>
        </section>

        {/* --- ACHIEVEMENTS SECTION (Stats & Graphs) --- */}
        <section id="work" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="15 વર્ષમાં સફળતાપૂર્વક પૂર્ણ કરેલ કામ"
              subtitle="આંકડાઓ અમારી વિશ્વસનીયતાની સાબિતી આપે છે"
            />

            {/* Total Stats Counters */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-3xl mx-auto">
              <StatCard
                icon={<MapIcon className="w-8 h-8 text-blue-600" />}
                value="4,424"
                label="કુલ ગામો"
              />
              <StatCard
                icon={<MapPin className="w-8 h-8 text-blue-600" />}
                value="30"
                label="તાલુકા"
                subLabel="9 જિલ્લા"
              />
            </div>

            {/* Tab Toggle */}
            <div className="flex justify-center mb-8">
              <div className="bg-slate-100 p-1 rounded-lg inline-flex">
                <button
                  onClick={() => setActiveTab("chart")}
                  className={`px-6 py-2 rounded-md font-medium transition-all ${activeTab === "chart" ? "bg-white shadow-sm text-blue-900" : "text-slate-500 hover:text-slate-700"}`}
                >
                  <BarChart2 className="w-4 h-4 inline mr-2" /> ગ્રાફ
                </button>
                <button
                  onClick={() => setActiveTab("table")}
                  className={`px-6 py-2 rounded-md font-medium transition-all ${activeTab === "table" ? "bg-white shadow-sm text-blue-900" : "text-slate-500 hover:text-slate-700"}`}
                >
                  <Database className="w-4 h-4 inline mr-2" /> વિગતવાર ટેબલ
                </button>
              </div>
            </div>

            {/* Visualizations */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
              {activeTab === "chart" ? (
                <div className="p-4 md:p-8 h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={statsData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="name" stroke="#64748b" />
                      <YAxis stroke="#64748b" />
                      <RechartsTooltip
                        contentStyle={{
                          borderRadius: "8px",
                          border: "none",
                          boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                        }}
                      />
                      <Legend />
                      <Bar
                        name="ગામોની સંખ્યા"
                        dataKey="villages"
                        fill="#10b981"
                        radius={[4, 4, 0, 0]}
                      />
                      <Bar
                        name="તાલુકા"
                        dataKey="taluka"
                        fill="#3b82f6"
                        radius={[4, 4, 0, 0]}
                      />
                      <Bar
                        name="District"
                        dataKey="district"
                        fill="#ef4444"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                  <p className="text-center text-sm text-slate-400 mt-2 italic">
                    * ગ્રાફ સરળતા માટે સ્કેલ કરેલ છે
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 text-sm uppercase tracking-wider">
                        <th className="p-4 font-bold">કામ</th>
                        <th className="p-4 font-bold text-right">
                          ગામોની સંખ્યા
                        </th>
                        <th className="p-4 font-bold text-right">તાલુકા</th>
                        <th className="p-4 font-bold text-right">જિલ્લા</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {fullStats.map((row, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-blue-50 transition-colors"
                        >
                          <td className="p-4 font-semibold text-blue-900">
                            {row.type}
                          </td>
                          <td className="p-4 text-right text-slate-700">
                            {row.villages}
                          </td>
                          <td className="p-4 text-right text-slate-700">
                            {row.taluka}
                          </td>
                          <td className="p-4 text-right text-slate-700">
                            {row.district}
                          </td>
                        </tr>
                      ))}
                      <tr className="bg-slate-50 font-bold text-slate-900 border-t-2 border-slate-300">
                        <td className="p-4">Total</td>
                        <td className="p-4 text-right">4,424</td>
                        <td className="p-4 text-right">30</td>
                        <td className="p-4 text-right">9</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Suggestions Box */}
            <div className="mt-12 bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <h4 className="text-lg font-bold text-green-800 mb-2">
                વિકાસ માટે સુચન
              </h4>
              <p className="text-green-700">
                "ગામના વિકાસને લગતી નવી નવી સુવિધાઓ અંગે આપના સૂચનો આવકાર્ય છે."
              </p>
            </div>
          </div>
        </section>

        {/* --- INQUIRY FORM & CONTACT SECTION --- */}
        <section id="contact" className="py-16 md:py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="સંપર્ક કરો"
              subtitle="ઇન્કવાયરી અથવા ફરિયાદ માટે નીચેનું ફોર્મ ભરો"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form Side */}
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Full Name / પુરુ નામ
                      </label>
                      <input
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter full name"
                        type="text"
                        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Mobile No. / મોબાઇલ નં.
                      </label>
                      <input
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="+91"
                        type="tel"
                        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Email ID
                      </label>
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@email.com"
                        type="email"
                        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Designation / હોદ્દો
                      </label>
                      <select
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                      >
                        <option value="">હોદ્દો પસંદ કરો</option>
                        <option value="Sarpanch">સરપંચ</option>
                        <option value="Talati Cum Mantri">
                          તલાટી કમ મંત્રી (TCM)
                        </option>
                        <option value="VCE">
                          વિલેજ કમ્પ્યુટર એન્ટ્રપ્રેન્યોર (VCE)
                        </option>
                        <option value="TDO">તાલુકા વિકાસ અધિકારી (TDO)</option>
                        <option value="Other">અન્ય</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Subject
                    </label>
                    <input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="વિષય"
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Service Joining Date / સેવામાં જોડાવાની તારીખ
                      </label>
                      <input
                        type="date"
                        name="joiningDate"
                        value={formData.joiningDate}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        On Duty Village
                      </label>
                      <input
                        name="village"
                        value={formData.village}
                        onChange={handleChange}
                        placeholder="ફરજનું ગામ"
                        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Taluka
                      </label>
                      <input
                        name="taluka"
                        value={formData.taluka}
                        onChange={handleChange}
                        placeholder="તાલુકાનું નામ"
                        type="text"
                        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        District
                      </label>
                      <input
                        name="district"
                        value={formData.district}
                        onChange={handleChange}
                        placeholder="જિલ્લાનું નામ"
                        type="text"
                        className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Special Note / Suggestion
                    </label>
                    <textarea
                      name="note"
                      value={formData.note}
                      onChange={handleChange}
                      placeholder="વિશેષ નોંધ"
                      rows="3"
                      className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    ></textarea>
                  </div>

                  <button
                    onClick={handleSubmit}
                    type="button"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-md transition-colors"
                  >
                    સંદેશ મોકલો (Send Message)
                  </button>
                </form>
              </div>

              {/* Contact Info Side */}
              <div className="flex flex-col h-full">
                <div className="bg-blue-900 text-white p-8 rounded-2xl shadow-lg mb-6">
                  <h3 className="text-2xl font-bold mb-6 border-b border-blue-700 pb-4">
                    A.F. Infosys
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-800 p-2 rounded-lg">
                        <MapPin size={24} className="text-green-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-blue-200">Address:</p>
                        <p className="leading-relaxed">
                          સેન્ટ્રલ પોઇન્ટ કોમ્પ્લેક્સ, બીજો માળ,
                          <br />
                          જુના બસ સ્ટેન્ડ સામે,
                          <br />
                          ગામ: સાવરકુંડલા – 364515
                          <br />
                          જિલ્લો: અમરેલી, સૌરાષ્ટ્ર, ભારત
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-blue-800 p-2 rounded-lg">
                        <Mail size={24} className="text-green-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-blue-200">Email:</p>
                        <a
                          href="mailto:af.infosys146@gmail.com"
                          className="hover:text-green-400 transition-colors"
                        >
                          af.infosys146@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-blue-800 p-2 rounded-lg">
                        <Phone size={24} className="text-green-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-blue-200">Mobile:</p>
                        <p>+91 93764 43146</p>
                        <p>+91 99247 82732</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-blue-800 flex flex-wrap gap-4">
                    <a
                      href="tel:+919376443146"
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white text-center py-2 rounded-lg font-bold transition-colors"
                    >
                      Call Now
                    </a>
                    <a
                      href="https://wa.me/919376443146"
                      className="flex-1 bg-white hover:bg-slate-100 text-blue-900 text-center py-2 rounded-lg font-bold transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>

                {/* Map Embed */}
                <div className="flex-grow min-h-[300px] bg-slate-200 rounded-2xl overflow-hidden shadow-inner border border-slate-300">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.471465243358!2d71.3101225149392!3d21.33821608583151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be264c0b38eff5d%3A0x9ebfa8827e86f648!2sA%20F%20Infosys!5e0!3m2!1sen!2sin!4v1678890000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="AF Infosys Map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-300 py-8 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 flex items-center">
              <img
                src="https://afinfosys.netlify.app/logo512.png"
                className="w-10 h-10 mr-3 rounded-full border border-slate-700"
                alt="AF Infosys Logo"
              />
              <div>
                <span className="font-bold text-white text-xl">
                  A.F. Infosys
                </span>
                <p className="text-sm mt-1">
                  Serving Panchayats with Trust & Technology since 2010
                </p>
              </div>
            </div>
            <div className="text-sm text-center md:text-right">
              <p>
                &copy; {new Date().getFullYear()} A.F. Infosys. All rights
                reserved.
              </p>
              <div className="flex justify-center md:justify-end space-x-4 mt-2">
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
                <a
                  href="#services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </a>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
