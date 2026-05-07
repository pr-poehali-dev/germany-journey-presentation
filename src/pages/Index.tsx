import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const SLIDES = [
  "title",
  "geography",
  "berlin",
  "nature",
  "facts",
  "culture",
  "heritage",
  "motivation",
];

const SLIDE_LABELS = [
  "Титул",
  "География",
  "Берлин",
  "Природа",
  "Факты",
  "Культура",
  "Наследие",
  "Мотивация",
];

const BERLIN_IMG = "https://cdn.poehali.dev/projects/44436a32-4b5b-4d12-99a0-91b96511c899/files/519fa6a6-853e-49ab-80bf-5dad4abfab3b.jpg";
const NATURE_IMG = "https://cdn.poehali.dev/projects/44436a32-4b5b-4d12-99a0-91b96511c899/files/d9157c98-f87a-4ee5-9673-e5c787e7d927.jpg";
const CASTLE_IMG = "https://cdn.poehali.dev/projects/44436a32-4b5b-4d12-99a0-91b96511c899/files/4da1df4f-fdea-47b6-b714-e6aa12df1a6e.jpg";
const COLOGNE_IMG = "https://cdn.poehali.dev/projects/44436a32-4b5b-4d12-99a0-91b96511c899/files/a9224ea3-4a74-4b48-95d9-1a5b58de83f4.jpg";
const OKTOBERFEST_IMG = "https://cdn.poehali.dev/projects/44436a32-4b5b-4d12-99a0-91b96511c899/files/fa111a17-9267-48ba-a7e8-f9f3cc0b6982.jpg";

const GoldDivider = () => (
  <div className="flex items-center gap-3 my-4">
    <div className="gold-line flex-1" />
    <div style={{ color: "var(--gold)", fontSize: "10px", letterSpacing: "4px" }}>✦</div>
    <div className="gold-line flex-1" />
  </div>
);

const SlideWrapper = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`relative w-full h-full flex flex-col ${className}`}
    style={{ minHeight: "100%" }}
  >
    {children}
  </div>
);

const TitleSlide = () => (
  <SlideWrapper className="items-center justify-center text-center corner-decor">
    <div className="animate-fade-in opacity-0" style={{ animationFillMode: "forwards" }}>
      <p
        style={{
          color: "var(--gold)",
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "11px",
          letterSpacing: "6px",
          textTransform: "uppercase",
        }}
      >
        Учебная презентация
      </p>
    </div>
    <div className="gold-line w-24 mx-auto my-5" />
    <h1
      className="animate-slide-in opacity-0 delay-100"
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(52px, 8vw, 96px)",
        fontWeight: 300,
        color: "#f0e6c8",
        lineHeight: 1.05,
        letterSpacing: "2px",
        animationFillMode: "forwards",
      }}
    >
      Германия
    </h1>
    <p
      className="animate-slide-in opacity-0 delay-200"
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(18px, 2.5vw, 28px)",
        fontWeight: 300,
        fontStyle: "italic",
        color: "var(--gold-light)",
        marginTop: "8px",
        animationFillMode: "forwards",
      }}
    >
      Путешествие в сердце Европы
    </p>
    <GoldDivider />
    <div
      className="animate-fade-in opacity-0 delay-400"
      style={{
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "13px",
        color: "var(--gold)",
        letterSpacing: "3px",
        textTransform: "uppercase",
        animationFillMode: "forwards",
      }}
    >
      Автор: Хакимова Риана · 2026
    </div>

    <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-1 opacity-30">
      <div style={{ width: 36, height: 8, background: "#000" }} />
      <div style={{ width: 36, height: 8, background: "#DD0000" }} />
      <div style={{ width: 36, height: 8, background: "#FFCE00" }} />
    </div>
  </SlideWrapper>
);

const cities = [
  { name: "Берлин", x: 67, y: 22, capital: true },
  { name: "Мюнхен", x: 55, y: 76 },
  { name: "Гамбург", x: 45, y: 10 },
  { name: "Кёльн", x: 28, y: 38 },
  { name: "Франкфурт", x: 38, y: 52 },
  { name: "Дрезден", x: 72, y: 36 },
];

const GeographySlide = () => {
  const [activeCity, setActiveCity] = useState<string | null>(null);

  return (
    <SlideWrapper>
      <div className="mb-4">
        <p style={{ color: "var(--gold)", fontSize: "10px", letterSpacing: "5px", textTransform: "uppercase" }}>
          01 / Географическое положение
        </p>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 400,
            color: "#f0e6c8",
            lineHeight: 1.1,
          }}
        >
          Карта Германии
        </h2>
        <div className="gold-line w-32 mt-2" />
      </div>

      <div className="flex flex-col lg:flex-row gap-6 flex-1">
        <div
          className="relative flex-1 rounded-sm overflow-hidden animate-fade-in opacity-0"
          style={{
            background: "var(--dark-panel)",
            border: "1px solid var(--gold-dark)",
            minHeight: "280px",
            animationFillMode: "forwards",
          }}
        >
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" style={{ padding: "8px" }}>
            <polygon
              points="42,5 58,5 70,12 78,20 80,30 76,40 80,50 75,60 72,70 65,82 55,90 48,90 40,82 32,72 28,60 25,50 22,42 25,32 30,22 36,14"
              fill="rgba(201,168,76,0.06)"
              stroke="var(--gold)"
              strokeWidth="0.8"
              strokeOpacity="0.5"
            />
            <path d="M28,40 Q38,48 50,52 Q58,56 68,54" fill="none" stroke="#4a8fa8" strokeWidth="0.5" opacity="0.6" />
            <path d="M45,10 Q44,30 46,50 Q47,65 52,80" fill="none" stroke="#4a8fa8" strokeWidth="0.4" opacity="0.5" />
            {cities.map((c) => (
              <g
                key={c.name}
                className="map-marker"
                onClick={() => setActiveCity(activeCity === c.name ? null : c.name)}
              >
                <circle
                  cx={c.x}
                  cy={c.y}
                  r={c.capital ? 2.2 : 1.5}
                  fill={c.capital ? "var(--gold)" : "var(--gold-light)"}
                  stroke={activeCity === c.name ? "#fff" : "var(--gold-dark)"}
                  strokeWidth={activeCity === c.name ? 0.8 : 0.4}
                />
                {c.capital && (
                  <circle cx={c.x} cy={c.y} r={3.5} fill="none" stroke="var(--gold)" strokeWidth="0.4" opacity="0.6" />
                )}
                <text
                  x={c.x + 3}
                  y={c.y + 1}
                  fontSize="4"
                  fill="#e8d5a0"
                  fontFamily="Montserrat"
                  opacity="0.9"
                >
                  {c.name}
                </text>
              </g>
            ))}
          </svg>
          <div
            className="absolute top-3 right-3 text-center"
            style={{ color: "var(--gold)", fontSize: "10px", opacity: 0.6 }}
          >
            <div style={{ fontSize: "16px" }}>✦</div>
            <div style={{ fontSize: "8px", letterSpacing: "1px" }}>С</div>
          </div>
        </div>

        <div className="lg:w-64 flex flex-col gap-3">
          {[
            { label: "Площадь", value: "357 600 км²" },
            { label: "Протяжённость", value: "С-Ю: 876 км · В-З: 640 км" },
            { label: "Соседи", value: "9 государств" },
            { label: "Рельеф", value: "Горы · Равнины · Леса" },
            { label: "Крупнейшие реки", value: "Рейн · Эльба · Дунай" },
          ].map((item, i) => (
            <div
              key={item.label}
              className="animate-slide-right opacity-0"
              style={{
                background: "var(--dark-panel)",
                border: "1px solid var(--gold-dark)",
                padding: "12px 16px",
                animationDelay: `${i * 0.1}s`,
                animationFillMode: "forwards",
              }}
            >
              <p style={{ color: "var(--gold)", fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase" }}>
                {item.label}
              </p>
              <p style={{ color: "#f0e6c8", fontSize: "13px", marginTop: "2px" }}>{item.value}</p>
            </div>
          ))}
          {activeCity && (
            <div style={{ background: "rgba(201,168,76,0.1)", border: "1px solid var(--gold)", padding: "10px 14px" }}>
              <p style={{ color: "var(--gold)", fontSize: "11px" }}>📍 {activeCity}</p>
            </div>
          )}
        </div>
      </div>
    </SlideWrapper>
  );
};

const BerlinSlide = () => (
  <SlideWrapper>
    <p style={{ color: "var(--gold)", fontSize: "10px", letterSpacing: "5px", textTransform: "uppercase" }}>
      02 / Столица
    </p>
    <h2
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(28px, 4vw, 48px)",
        fontWeight: 400,
        color: "#f0e6c8",
      }}
    >
      Берлин
    </h2>
    <div className="gold-line w-32 mt-2 mb-4" />

    <div className="flex flex-col lg:flex-row gap-5 flex-1">
      <div
        className="relative flex-1 overflow-hidden animate-fade-in opacity-0"
        style={{
          minHeight: "240px",
          border: "1px solid var(--gold-dark)",
          animationFillMode: "forwards",
        }}
      >
        <img src={BERLIN_IMG} alt="Берлин" className="w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(13,17,23,0.8) 0%, transparent 50%)" }}
        />
        <div className="absolute bottom-4 left-4 right-4">
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "22px",
              color: "#f0e6c8",
              fontStyle: "italic",
            }}
          >
            Бранденбургские ворота
          </p>
          <p style={{ color: "var(--gold)", fontSize: "11px", letterSpacing: "2px" }}>
            Символ единства Германии · 1791
          </p>
        </div>
      </div>

      <div className="lg:w-72 flex flex-col gap-3">
        {[
          { icon: "Users", title: "Население", text: "3,7 млн человек — крупнейший город Германии" },
          { icon: "MapPin", title: "Расположение", text: "Северо-восток страны, на реках Шпрее и Хафель" },
          { icon: "Landmark", title: "Достопримечательности", text: "Рейхстаг, Берлинская стена, Музейный остров" },
          { icon: "GraduationCap", title: "Наука и культура", text: "4 университета мирового уровня, 170 музеев" },
          { icon: "Train", title: "Транспорт", text: "Разветвлённая сеть метро, трамваев и автобусов" },
        ].map((item, i) => (
          <div
            key={item.title}
            className="flex gap-3 animate-slide-right opacity-0"
            style={{
              background: "var(--dark-panel)",
              border: "1px solid var(--gold-dark)",
              padding: "10px 14px",
              animationDelay: `${i * 0.1}s`,
              animationFillMode: "forwards",
            }}
          >
            <div style={{ color: "var(--gold)", marginTop: "2px" }}>
              <Icon name={item.icon} size={14} />
            </div>
            <div>
              <p style={{ color: "var(--gold)", fontSize: "9px", letterSpacing: "2px", textTransform: "uppercase" }}>
                {item.title}
              </p>
              <p style={{ color: "#d4c5a0", fontSize: "12px", marginTop: "2px" }}>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </SlideWrapper>
);

const NatureSlide = () => (
  <SlideWrapper>
    <p style={{ color: "var(--gold)", fontSize: "10px", letterSpacing: "5px", textTransform: "uppercase" }}>
      03 / Природа
    </p>
    <h2
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(28px, 4vw, 48px)",
        fontWeight: 400,
        color: "#f0e6c8",
      }}
    >
      Природные ландшафты
    </h2>
    <div className="gold-line w-40 mt-2 mb-4" />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
      <div
        className="relative overflow-hidden animate-fade-in opacity-0"
        style={{ border: "1px solid var(--gold-dark)", minHeight: "200px", animationFillMode: "forwards" }}
      >
        <img src={NATURE_IMG} alt="Природа Германии" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,17,23,0.85) 0%, transparent 55%)" }} />
        <div className="absolute bottom-3 left-3 right-3">
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", color: "#f0e6c8", fontStyle: "italic" }}>
            Баварские Альпы
          </p>
          <p style={{ color: "var(--gold)", fontSize: "10px" }}>Горная природа юга страны</p>
        </div>
      </div>
      <div
        className="relative overflow-hidden animate-fade-in opacity-0 delay-200"
        style={{ border: "1px solid var(--gold-dark)", minHeight: "200px", animationFillMode: "forwards" }}
      >
        <img src={CASTLE_IMG} alt="Замок Нойшванштайн" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,17,23,0.85) 0%, transparent 55%)" }} />
        <div className="absolute bottom-3 left-3 right-3">
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", color: "#f0e6c8", fontStyle: "italic" }}>
            Замок Нойшванштайн
          </p>
          <p style={{ color: "var(--gold)", fontSize: "10px" }}>«Лебединый замок» — символ Баварии</p>
        </div>
      </div>

      <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { emoji: "🌲", title: "Шварцвальд", desc: "Чёрный лес" },
          { emoji: "🏔️", title: "Альпы", desc: "Вершина Цугшпитце 2962 м" },
          { emoji: "🌊", title: "Балтийское море", desc: "Северное побережье" },
          { emoji: "🦌", title: "Заповедники", desc: "16 национальных парков" },
        ].map((item, i) => (
          <div
            key={item.title}
            className="animate-slide-in opacity-0"
            style={{
              background: "var(--dark-panel)",
              border: "1px solid var(--gold-dark)",
              padding: "14px",
              textAlign: "center",
              animationDelay: `${0.2 + i * 0.1}s`,
              animationFillMode: "forwards",
            }}
          >
            <div style={{ fontSize: "24px", marginBottom: "6px" }}>{item.emoji}</div>
            <p style={{ color: "var(--gold-light)", fontSize: "12px", fontWeight: 500 }}>{item.title}</p>
            <p style={{ color: "#a09070", fontSize: "10px", marginTop: "2px" }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </SlideWrapper>
);

const FactsSlide = () => (
  <SlideWrapper>
    <p style={{ color: "var(--gold)", fontSize: "10px", letterSpacing: "5px", textTransform: "uppercase" }}>
      04 / Интересные факты
    </p>
    <h2
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(28px, 4vw, 48px)",
        fontWeight: 400,
        color: "#f0e6c8",
      }}
    >
      Германия в цифрах
    </h2>
    <div className="gold-line w-40 mt-2 mb-4" />

    <div className="flex flex-col lg:flex-row gap-4 flex-1">
      {/* Фото */}
      <div
        className="relative overflow-hidden animate-fade-in opacity-0 lg:w-72"
        style={{ border: "1px solid var(--gold-dark)", minHeight: "200px", flexShrink: 0, animationFillMode: "forwards" }}
      >
        <img src={OKTOBERFEST_IMG} alt="Oktoberfest" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,17,23,0.85) 0%, transparent 50%)" }} />
        <div className="absolute bottom-3 left-3 right-3">
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", color: "#f0e6c8", fontStyle: "italic" }}>
            Oktoberfest
          </p>
          <p style={{ color: "var(--gold)", fontSize: "10px" }}>Мюнхен · с 1810 года</p>
        </div>
      </div>

      {/* Цифры */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 flex-1 content-start">
        {[
          { num: "84,4 млн", label: "жителей", sub: "4-я по населению в Европе", emoji: "👥" },
          { num: "1300+", label: "сортов пива", sub: "Родина Oktoberfest с 1810 г.", emoji: "🍺" },
          { num: "25 000+", label: "замков", sub: "Больше, чем в любой стране мира", emoji: "🏰" },
          { num: "16", label: "федеральных земель", sub: "Федеративная республика", emoji: "🗺️" },
          { num: "4-я", label: "экономика мира", sub: "ВВП — 4,1 трлн $ (2024)", emoji: "📈" },
          { num: "31", label: "объект ЮНЕСКО", sub: "Всемирное культурное наследие", emoji: "🏛️" },
          { num: "130+", label: "нобелевских лауреатов", sub: "Больше, чем у любой другой страны", emoji: "🏆" },
          { num: "3500", label: "сортов хлеба", sub: "Хлебная столица мира", emoji: "🍞" },
          { num: "1 млрд+", label: "автомобилей произведено", sub: "Родина BMW, Mercedes, Porsche, VW", emoji: "🚗" },
        ].map((fact, i) => (
          <div
            key={fact.label}
            className="animate-scale-in opacity-0"
            style={{
              background: "var(--dark-panel)",
              border: "1px solid var(--gold-dark)",
              padding: "14px 12px",
              textAlign: "center",
              animationDelay: `${i * 0.06}s`,
              animationFillMode: "forwards",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ fontSize: "22px", marginBottom: "6px" }}>{fact.emoji}</div>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(18px, 2.5vw, 26px)",
                fontWeight: 600,
                color: "var(--gold)",
                lineHeight: 1,
              }}
            >
              {fact.num}
            </p>
            <p style={{ color: "#f0e6c8", fontSize: "10px", marginTop: "3px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.5px" }}>
              {fact.label}
            </p>
            <p style={{ color: "#8a7a5a", fontSize: "9px", marginTop: "3px", lineHeight: 1.3 }}>{fact.sub}</p>
            <div
              className="absolute bottom-0 left-0 right-0"
              style={{ height: "2px", background: "linear-gradient(90deg, transparent, var(--gold-dark), transparent)" }}
            />
          </div>
        ))}
      </div>
    </div>
  </SlideWrapper>
);

const CultureSlide = () => (
  <SlideWrapper>
    <p style={{ color: "var(--gold)", fontSize: "10px", letterSpacing: "5px", textTransform: "uppercase" }}>
      05 / Население и культура
    </p>
    <h2
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(28px, 4vw, 48px)",
        fontWeight: 400,
        color: "#f0e6c8",
      }}
    >
      Традиции и народ
    </h2>
    <div className="gold-line w-40 mt-2 mb-4" />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 flex-1">
      <div className="flex flex-col gap-3">
        {[
          { title: "Октябрьский фестиваль", desc: "Мюнхенский Oktoberfest — крупнейший народный праздник мира. Ежегодно собирает более 6 миллионов гостей.", emoji: "🍺" },
          { title: "Рождественские рынки", desc: "Традиция с XIV века. Нюрнберг, Дрезден и Кёльн — самые известные ярмарки Европы.", emoji: "🎄" },
          { title: "Карнавал", desc: "Кёльнский карнавал — «пятое время года». Шествия, костюмы, уличные гуляния.", emoji: "🎭" },
        ].map((item, i) => (
          <div
            key={item.title}
            className="flex gap-3 animate-slide-left opacity-0"
            style={{
              background: "var(--dark-panel)",
              border: "1px solid var(--gold-dark)",
              padding: "14px",
              animationDelay: `${i * 0.15}s`,
              animationFillMode: "forwards",
            }}
          >
            <div style={{ fontSize: "28px", flexShrink: 0 }}>{item.emoji}</div>
            <div>
              <p style={{ color: "var(--gold-light)", fontSize: "13px", fontWeight: 600, marginBottom: "4px" }}>{item.title}</p>
              <p style={{ color: "#a09070", fontSize: "11px", lineHeight: 1.5 }}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        <div
          style={{
            background: "var(--dark-panel)",
            border: "1px solid var(--gold-dark)",
            padding: "16px",
          }}
        >
          <p style={{ color: "var(--gold)", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "10px" }}>
            Состав населения
          </p>
          {[
            { label: "Немцы", pct: 75 },
            { label: "Турецкая диаспора", pct: 4 },
            { label: "Польская диаспора", pct: 2 },
            { label: "Другие", pct: 19 },
          ].map((item) => (
            <div key={item.label} className="mb-3">
              <div className="flex justify-between mb-1">
                <span style={{ color: "#d4c5a0", fontSize: "11px" }}>{item.label}</span>
                <span style={{ color: "var(--gold)", fontSize: "11px" }}>{item.pct}%</span>
              </div>
              <div style={{ background: "#1a2130", height: "3px" }}>
                <div
                  style={{
                    width: `${item.pct}%`,
                    height: "100%",
                    background: "linear-gradient(90deg, var(--gold-dark), var(--gold))",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            background: "var(--dark-panel)",
            border: "1px solid var(--gold-dark)",
            padding: "14px",
          }}
        >
          <p style={{ color: "var(--gold)", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "8px" }}>
            Кухня Германии
          </p>
          <div className="flex flex-wrap gap-2">
            {["🥨 Крендель", "🌭 Вурст", "🥩 Шницель", "🍞 Ржаной хлеб", "🥬 Квашеная капуста", "🍮 Штрудель"].map((f) => (
              <span
                key={f}
                style={{
                  background: "rgba(201,168,76,0.1)",
                  border: "1px solid var(--gold-dark)",
                  color: "#d4c5a0",
                  padding: "4px 10px",
                  fontSize: "11px",
                }}
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </SlideWrapper>
);

const HeritageSlide = () => (
  <SlideWrapper>
    <p style={{ color: "var(--gold)", fontSize: "10px", letterSpacing: "5px", textTransform: "uppercase" }}>
      06 / Культурное наследие
    </p>
    <h2
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(28px, 4vw, 48px)",
        fontWeight: 400,
        color: "#f0e6c8",
      }}
    >
      Объекты ЮНЕСКО
    </h2>
    <div className="gold-line w-48 mt-2 mb-4" />

    <div className="flex flex-col lg:flex-row gap-4 flex-1">
      {/* Фото + бейдж */}
      <div className="flex flex-col gap-3 lg:w-64" style={{ flexShrink: 0 }}>
        <div
          className="relative overflow-hidden animate-fade-in opacity-0"
          style={{ border: "1px solid var(--gold-dark)", flex: 1, minHeight: "180px", animationFillMode: "forwards" }}
        >
          <img src={COLOGNE_IMG} alt="Кёльнский собор" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,17,23,0.9) 0%, transparent 50%)" }} />
          <div className="absolute bottom-3 left-3 right-3">
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "17px", color: "#f0e6c8", fontStyle: "italic" }}>
              Кёльнский собор
            </p>
            <p style={{ color: "var(--gold)", fontSize: "10px" }}>ЮНЕСКО · с 1248 года</p>
          </div>
        </div>
        <div
          className="animate-slide-in opacity-0 delay-200"
          style={{
            background: "rgba(201,168,76,0.08)",
            border: "1px solid var(--gold)",
            padding: "14px",
            textAlign: "center",
            animationFillMode: "forwards",
          }}
        >
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "38px", fontWeight: 600, color: "var(--gold)", lineHeight: 1 }}>31</p>
          <p style={{ color: "#f0e6c8", fontSize: "11px", marginTop: "4px", letterSpacing: "1px", textTransform: "uppercase" }}>объект ЮНЕСКО</p>
          <p style={{ color: "#8a7a5a", fontSize: "10px", marginTop: "4px" }}>Германия в топ-5 стран мира</p>
        </div>
      </div>

      {/* Сетка объектов */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 flex-1 content-start">
        {[
          { emoji: "🏛️", name: "Музейный остров", city: "Берлин", year: "1999", desc: "5 всемирно известных музеев на одном острове" },
          { emoji: "⛪", name: "Кёльнский собор", city: "Кёльн", year: "1996", desc: "Строился 632 года — с 1248 по 1880 год" },
          { emoji: "🏰", name: "Дворцы Потсдама", city: "Потсдам", year: "1990", desc: "Сансуси — «Версаль Германии»" },
          { emoji: "🖼️", name: "Баухаус", city: "Дессау", year: "1996", desc: "Колыбель современного дизайна и архитектуры" },
          { emoji: "🌿", name: "Вадденское море", city: "Северное море", year: "2009", desc: "Крупнейшая приливно-отливная система в мире" },
          { emoji: "🏡", name: "Аугсбург", city: "Аугсбург", year: "2019", desc: "Уникальная система водоснабжения XVI века" },
          { emoji: "⛏️", name: "Рудные горы", city: "Саксония", year: "2019", desc: "Горнодобывающий регион с 800-летней историей" },
          { emoji: "🌄", name: "Верхняя долина Рейна", city: "Рейн", year: "2002", desc: "65 км живописных виноградников и замков" },
          { emoji: "🎭", name: "Классический Веймар", city: "Веймар", year: "1998", desc: "Родина Гёте, Шиллера и немецкой классики" },
        ].map((item, i) => (
          <div
            key={item.name}
            className="animate-scale-in opacity-0"
            style={{
              background: "var(--dark-panel)",
              border: "1px solid var(--gold-dark)",
              padding: "12px 10px",
              animationDelay: `${i * 0.06}s`,
              animationFillMode: "forwards",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
              <span style={{ fontSize: "18px" }}>{item.emoji}</span>
              <span style={{ color: "#5a4a30", fontSize: "9px", letterSpacing: "1px" }}>ЮНЕСКО {item.year}</span>
            </div>
            <p style={{ color: "#f0e6c8", fontSize: "11px", fontWeight: 500, lineHeight: 1.2 }}>{item.name}</p>
            <p style={{ color: "var(--gold)", fontSize: "9px", marginTop: "2px" }}>{item.city}</p>
            <p style={{ color: "#6a5a3a", fontSize: "9px", marginTop: "3px", lineHeight: 1.3 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </SlideWrapper>
);

const MotivationSlide = () => (
  <SlideWrapper>
    <p style={{ color: "var(--gold)", fontSize: "10px", letterSpacing: "5px", textTransform: "uppercase" }}>
      07 / Почему Германия
    </p>
    <h2
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(28px, 4vw, 48px)",
        fontWeight: 400,
        color: "#f0e6c8",
        lineHeight: 1.1,
      }}
    >
      Мотивация выбора
    </h2>
    <div className="gold-line w-40 mt-2 mb-4" />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
      <div className="flex flex-col gap-3">
        <p style={{ color: "var(--gold)", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "2px" }}>
          Почему я выбрала Германию
        </p>
        {[
          { emoji: "🏰", title: "История на каждом шагу", text: "Более 25 000 замков и дворцов — каждый город хранит тысячелетнюю историю." },
          { emoji: "🎵", title: "Родина великих композиторов", text: "Бах, Бетховен, Брамс — всё это Германия. Классическая музыка здесь живёт в каждом городе." },
          { emoji: "🌲", title: "Сказочная природа", text: "Чёрный лес, Баварские Альпы, Рейнские виноградники — пейзажи как из книги Brothers Grimm." },
          { emoji: "🎄", title: "Волшебная атмосфера", text: "Рождественские ярмарки — самые знаменитые в мире. Запах глинтвейна и пряников — это Германия." },
          { emoji: "🧠", title: "Страна изобретателей", text: "Автомобиль, аспирин, MP3, рентген — всё это изобрели немцы. Германия — двигатель прогресса." },
          { emoji: "🌍", title: "Центр Европы", text: "Из Германии легко добраться до любой точки Европы — идеальная база для путешествий." },
        ].map((item, i) => (
          <div
            key={item.title}
            className="flex gap-3 animate-slide-left opacity-0"
            style={{
              background: "var(--dark-panel)",
              border: "1px solid var(--gold-dark)",
              padding: "10px 14px",
              animationDelay: `${i * 0.08}s`,
              animationFillMode: "forwards",
            }}
          >
            <span style={{ fontSize: "22px", flexShrink: 0 }}>{item.emoji}</span>
            <div>
              <p style={{ color: "var(--gold-light)", fontSize: "12px", fontWeight: 600, marginBottom: "2px" }}>{item.title}</p>
              <p style={{ color: "#a09070", fontSize: "11px", lineHeight: 1.4 }}>{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <div
          className="animate-slide-right opacity-0"
          style={{
            background: "var(--dark-panel)",
            border: "1px solid var(--gold)",
            padding: "18px",
            animationFillMode: "forwards",
          }}
        >
          <p style={{ color: "var(--gold)", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "10px" }}>
            Личное впечатление автора
          </p>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "16px",
              color: "#f0e6c8",
              lineHeight: 1.7,
            }}
          >
            «Германия привлекла меня сочетанием глубокой истории и современности. Здесь можно утром гулять
            по средневековому замку, а вечером оказаться в ультрасовременном городе. Это страна контрастов,
            которые удивительно гармонично уживаются вместе.»
          </p>
          <div className="gold-line mt-4" />
          <p style={{ color: "var(--gold)", fontSize: "11px", marginTop: "8px", letterSpacing: "2px" }}>
            — Хакимова Риана
          </p>
        </div>

        <div
          className="animate-slide-right opacity-0 delay-200"
          style={{
            background: "var(--dark-panel)",
            border: "1px solid var(--gold-dark)",
            padding: "14px",
            animationFillMode: "forwards",
          }}
        >
          <p style={{ color: "var(--gold)", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "10px" }}>
            10 причин посетить Германию
          </p>
          <div className="grid grid-cols-2 gap-2">
            {[
              "Замок Нойшванштайн",
              "Октябрфест в Мюнхене",
              "Берлинская стена",
              "Рождественские рынки",
              "Романтическая дорога",
              "Кёльнский собор",
              "Остров Рюген",
              "Баварская кухня",
              "Музейный остров",
              "Саксонская Швейцария",
            ].map((item, i) => (
              <div
                key={item}
                className="flex items-center gap-2"
              >
                <span style={{ color: "var(--gold)", fontSize: "10px", flexShrink: 0 }}>
                  {String(i + 1).padStart(2, "0")}.
                </span>
                <span style={{ color: "#c4b490", fontSize: "10px" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="animate-fade-in opacity-0 delay-300"
          style={{
            background: "rgba(201,168,76,0.08)",
            border: "1px solid var(--gold-dark)",
            padding: "12px 16px",
            textAlign: "center",
            animationFillMode: "forwards",
          }}
        >
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "15px",
              color: "var(--gold-light)",
            }}
          >
            «Германия — страна, где история встречается с будущим»
          </p>
        </div>
      </div>
    </div>
  </SlideWrapper>
);

const AuthorSlide = () => (
  <SlideWrapper className="items-center justify-center corner-decor">
    <div className="text-center max-w-lg w-full">
      <p style={{ color: "var(--gold)", fontSize: "10px", letterSpacing: "5px", textTransform: "uppercase" }}>
        08 / Об авторе
      </p>
      <div className="gold-line w-24 mx-auto my-4" />

      <div
        className="animate-scale-in opacity-0"
        style={{
          width: 90,
          height: 90,
          borderRadius: "50%",
          background: "linear-gradient(135deg, var(--gold-dark), var(--gold))",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 16px",
          fontSize: "40px",
          animationFillMode: "forwards",
        }}
      >
        👩‍🎓
      </div>

      <h2
        className="animate-slide-in opacity-0 delay-100"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(28px, 4vw, 42px)",
          fontWeight: 400,
          color: "#f0e6c8",
          animationFillMode: "forwards",
        }}
      >
        Хакимова Риана
      </h2>

      <GoldDivider />

      <div className="flex flex-col gap-3 text-left mt-2">
        {[
          { label: "Что я сделала", text: "Подготовила презентацию о Германии: собрала факты, нашла материалы о природе, культуре и истории страны" },
          { label: "Разделы презентации", text: "География и карта · Берлин · Природа · Интересные факты · Культура · Наследие ЮНЕСКО · Мотивация" },
          { label: "Источники", text: "Официальный сайт туризма Германии, UNESCO World Heritage, Encyclopaedia Britannica" },
          { label: "Год создания", text: "2026 год" },
        ].map((item, i) => (
          <div
            key={item.label}
            className="animate-fade-in opacity-0"
            style={{
              background: "var(--dark-panel)",
              border: "1px solid var(--gold-dark)",
              padding: "12px 16px",
              animationDelay: `${0.2 + i * 0.1}s`,
              animationFillMode: "forwards",
            }}
          >
            <p style={{ color: "var(--gold)", fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "4px" }}>
              {item.label}
            </p>
            <p style={{ color: "#d4c5a0", fontSize: "12px", lineHeight: 1.5 }}>{item.text}</p>
          </div>
        ))}
      </div>

      <div className="gold-line w-full mt-5" />
      <p style={{ color: "#5a4a30", fontSize: "10px", letterSpacing: "3px", marginTop: "10px", textTransform: "uppercase" }}>
        Спасибо за внимание · Danke schön
      </p>
    </div>
  </SlideWrapper>
);

const SLIDE_COMPONENTS = [
  TitleSlide,
  GeographySlide,
  BerlinSlide,
  NatureSlide,
  FactsSlide,
  CultureSlide,
  HeritageSlide,
  MotivationSlide,
];

export default function Index() {
  const [current, setCurrent] = useState(0);
  const [key, setKey] = useState(0);

  const goTo = (idx: number) => {
    if (idx >= 0 && idx < SLIDES.length) {
      setCurrent(idx);
      setKey((k) => k + 1);
    }
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goTo(current + 1);
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goTo(current - 1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current]);

  const CurrentSlide = SLIDE_COMPONENTS[current];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--dark-bg)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header
        style={{
          borderBottom: "1px solid var(--border)",
          background: "var(--dark-card)",
          padding: "10px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontSize: "20px" }}>🇩🇪</span>
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "var(--gold)",
              fontSize: "16px",
              letterSpacing: "2px",
            }}
          >
            Германия
          </span>
        </div>
        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
          {SLIDE_LABELS.map((label, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              title={label}
              style={{
                width: i === current ? "28px" : "20px",
                height: "4px",
                background: i === current ? "var(--gold)" : "var(--gold-dark)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                opacity: i === current ? 1 : 0.4,
              }}
            />
          ))}
        </div>
        <div
          style={{
            color: "var(--gold)",
            fontSize: "11px",
            letterSpacing: "2px",
            fontFamily: "Montserrat",
          }}
        >
          {String(current + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
        </div>
      </header>

      <main style={{ flex: 1, display: "flex", flexDirection: "column", position: "relative" }}>
        <div
          style={{
            position: "fixed",
            right: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            zIndex: 50,
          }}
        >
          {SLIDE_LABELS.map((label, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              title={label}
              style={{
                width: "6px",
                height: i === current ? "20px" : "6px",
                background: i === current ? "var(--gold)" : "var(--gold-dark)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                opacity: i === current ? 1 : 0.5,
              }}
            />
          ))}
        </div>

        <div
          key={key}
          style={{
            flex: 1,
            padding: "clamp(20px, 4vw, 40px)",
            maxWidth: "1200px",
            width: "100%",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CurrentSlide />
        </div>
      </main>

      <footer
        style={{
          borderTop: "1px solid var(--border)",
          background: "var(--dark-card)",
          padding: "12px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0,
        }}
      >
        <button
          onClick={() => goTo(current - 1)}
          disabled={current === 0}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "transparent",
            border: "1px solid var(--gold-dark)",
            color: current === 0 ? "#3a3020" : "var(--gold)",
            padding: "8px 20px",
            cursor: current === 0 ? "default" : "pointer",
            fontFamily: "Montserrat",
            fontSize: "11px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            transition: "all 0.2s ease",
          }}
        >
          <Icon name="ChevronLeft" size={14} />
          Назад
        </button>

        <div style={{ textAlign: "center" }}>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "var(--gold)",
              fontSize: "14px",
              fontStyle: "italic",
            }}
          >
            {SLIDE_LABELS[current]}
          </p>
        </div>

        <button
          onClick={() => goTo(current + 1)}
          disabled={current === SLIDES.length - 1}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: current === SLIDES.length - 1 ? "transparent" : "var(--gold)",
            border: "1px solid var(--gold-dark)",
            color: current === SLIDES.length - 1 ? "#3a3020" : "var(--dark-bg)",
            padding: "8px 20px",
            cursor: current === SLIDES.length - 1 ? "default" : "pointer",
            fontFamily: "Montserrat",
            fontSize: "11px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            transition: "all 0.2s ease",
          }}
        >
          Далее
          <Icon name="ChevronRight" size={14} />
        </button>
      </footer>
    </div>
  );
}