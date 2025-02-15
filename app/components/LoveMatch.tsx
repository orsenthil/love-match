"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Heart, Share2 } from 'lucide-react';

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Array<{
    id: number;
    left: string;
    top: string;
    delay: string;
    duration: string;
    scale: string;
    color: string;
  }>>([]);

  useEffect(() => {
    const heartColors = [
      'text-red-500',
      'text-pink-300',
      'text-rose-400',
      'text-red-200',
      'text-pink-200',
      'text-rose-300',
      'text-red-400',
      'text-pink-400',
    ];

    const newHearts = Array(15).fill(0).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${5 + Math.random() * 5}s`,
      scale: `${0.5 + Math.random() * 0.5}`,
      color: heartColors[i % heartColors.length],
    }));

    setHearts(newHearts);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          className={`absolute fill-current ${heart.color} animate-float`}
          style={{
            left: heart.left,
            top: heart.top,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
            transform: `scale(${heart.scale})`
          }}
        />
      ))}
    </div>
  );
};

const LoveMatch = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState<any>(null);
  const resultRef = useRef(null);

  const couples = [
    // Hindi Cinema - Modern Era
    {
      names: 'Shah Rukh Khan & Kajol',
      description: 'The epitome of Bollywood romance spanning DDLJ, KKHH, and K3G. From the iconic "palat" moment to "Tujhe Dekha Toh", they created magic in every frame. The train scene in DDLJ remains the ultimate symbol of Indian romance.',
      image: '/images/couples/srk-kajol-ddlj.png'  // DDLJ train scene
    },
    {
      names: 'Shah Rukh Khan & Rani Mukerji',
      description: 'Their Kuch Kuch Hota Hai chemistry redefined friendship turning into love. From playing basketball in college to "Tum Paas Aaye", they showed how love can come full circle. Their "Kuch Kuch Hota Hai, Rahul, tum nahi samjhoge" became iconic.',
      image: '/images/couples/srk-rani-kkhh.png'  // KKHH college scene
    },
    {
      names: 'Ranbir Kapoor & Deepika Padukone',
      description: 'Yeh Jawaani Hai Deewani captured modern love perfectly. Bunny and Naina\'s journey from friendship to love through "Kabira" and "Dilliwali Girlfriend" showed how dreams and love can coexist. Their Manali trek to Udaipur wedding sequence remains timeless.',
      image: '/images/couples/ranbir-deepika-yjhd.png'  // YJHD wedding scene
    },
    {
      names: 'Hrithik Roshan & Aishwarya Rai',
      description: 'Jodhaa Akbar brought royal romance alive. The feather scene, sword fight, and "Azeem-O-Shaan Shahenshah" showed love transcending religions. Their chemistry in the "In Lamhon Ke Daaman Mein" sequence was pure poetry.',
      image: '/images/couples/hrithik-aishwarya-ja.png'  // Feather scene
    },
    {
      names: 'Shahid Kapoor & Kareena Kapoor',
      description: 'Jab We Met\'s Geet and Aditya showed how opposites attract. Their journey from "Mauja Hi Mauja" to "Tum Se Hi" captured love\'s healing power. The station scene and their Ratlam adventures became legendary.',
      image: '/images/couples/shahid-kareena-jwm.png'  // Station scene
    },
    {
      names: 'Raj Kapoor & Nargis',
      description: 'The original golden pair of Hindi cinema. In Awaara, they created timeless romance through "Dum Bhar Jo Udhar Munh Phere" and "Ghar Aaya Mera Pardesi". Their chemistry transcended the screen and set standards for generations.',
      image: '/images/couples/raj-nargis-awaara.png'  // Iconic pose
    },
    {
      names: 'Suriya & Jyothika',
      description: 'Kaakha Kaakha showed how love blooms in unexpected places. Their morning walks, coffee meetings, and the scene where Maya teaches Anbuselvan to smile became folklore. The "Uyirin Uyire" sequence captured pure love.',
      image: '/images/couples/suriya-jyothika-kk.png'  // Coffee scene
    },
    {
      names: 'Madhavan & Shalini',
      description: 'Alaipayuthey explored post-marriage romance beautifully. Karthik and Shakthi\'s train meetings, rooftop conversations, and "Pachai Nirame" moments showed love\'s everyday magic. "Snehithane" became the anthem of young love.',
      image: '/images/couples/madhavan-shalini-alaipayuthey.png'  // Train scene
    },
    {
      names: 'Dhanush & Sai Pallavi',
      description: 'Their Maari 2 chemistry, especially in "Rowdy Baby", broke YouTube records. They proved dance can express love better than words. Their performances brought raw energy to romance.',
      image: '/images/couples/dhanush-saipallavi-maari2.png'  // Rowdy Baby scene
    },
    {
      names: 'Vijay & Samantha',
      description: 'Theri showed romance amidst action. Their love story, especially through "En Jeevan", brought tenderness to a tough narrative. Their chemistry made everyday moments special.',
      image: '/images/couples/vijay-samantha-theri.png'  // En Jeevan scene
    },
    {
      names: 'Vikram & Aishwarya Rai',
      description: 'Raavanan reimagined the epic through intense chemistry. Their complicated dynamic, captured through stunning visuals and powerful performances, showed love\'s darker shades.',
      image: '/images/couples/vikram-aishwarya-raavanan.png'  // Bridge scene
    },
    {
      names: 'Karthi & Aditi Rao Hydari',
      description: 'Kaatru Veliyidai painted love against war\'s canvas. Through "Azhagiye" and intense emotional sequences, they showed love\'s complexity. Their romance soared literally and metaphorically.',
      image: '/images/couples/karthi-aditi-kv.png'  // Azhagiye song
    },
    {
      names: 'Dulquer Salmaan & Nithya Menen',
      description: 'OK Kanmani modernized romance for a new generation. Their live-in relationship story through "Mental Manadhil" and Mumbai rain sequences showed urban love beautifully. They made commitment look cool.',
      image: '/images/couples/dulquer-nithya-okk.png'  // Rain scene
    },
    {
      names: 'Prabhas & Anushka Shetty',
      description: 'Baahubali elevated romance to epic proportions. Amarendra and Devasena\'s love story, from the archery competition to their warrior romance, became legendary. Their chemistry transcended languages.',
      image: '/images/couples/prabhas-anushka-baahubali.png'  // Archery scene
    },
    {
      names: 'Naga Chaitanya & Sai Pallavi',
      description: 'Love Story tackled social barriers through dance and pure love. Their chemistry in "Saranga Dariya" and journey from dance academy to life partners showed love\'s transformative power.',
      image: '/images/couples/chaitanya-saipallavi-lovestory.png'  // Dance scene
    },
    {
      names: 'Dharmendra & Hema Malini',
      description: 'Sholay\'s Veeru and Basanti are immortal. From "Jab Tak Hai Jaan" to the water tank scene, they mixed romance with humor perfectly. Their chemistry sparked through multiple films.',
      image: '/images/couples/dharmendra-hema-sholay.png'  // Tangewali scene
    },
    {
      names: 'Farooq Sheikh & Deepti Naval',
      description: 'Chashme Buddoor brought subtle middle-class romance to life. Their sweet chemistry through "Tumko Dekha Toh" and everyday moments showed love doesn\'t need grandeur.',
      image: '/images/couples/farooq-deepti-chashmebuddoor.png'  // Park scene
    },
    {
      names: 'Ajay Devgn & Kajol',
      description: 'From Pyaar To Hona Hi Tha to Tanhaji, their real-life romance reflected on screen. Their train sequence and "Neend Churayi Meri" showed love\'s playful side.',
      image: '/images/couples/ajay-kajol-pyaar.png'  // Train scene
    },
    {
      names: 'Salman Khan & Madhuri Dixit',
      description: 'HAHK redefined family romance. Their chemistry in "Didi Tera Devar Deewana" and "Pehla Pehla Pyar Hai" created magical moments. They made traditional romance cool.',
      image: '/images/couples/salman-madhuri-hahk.png'  // Didi Tera Devar scene
    },
    {
      names: 'Vikram & Trisha',
      description: 'Saamy balanced action with pure romance. Their contrasting personalities and sweet moments showed how love softens the toughest hearts.',
      image: '/images/couples/vikram-trisha-saamy.png'  // Temple scene
    },
    {
      names: 'Vijay Sethupathi & Trisha',
      description: '96 captured eternal first love beautifully. Ram and Janu\'s school romance and reunion through "Kaathalae Kaathalae" showed how some loves never fade. Their coffee shop scene became iconic.',
      image: '/images/couples/sethupathi-trisha-96.png'  // Coffee shop scene
    },
    {
      names: 'Kartik Aaryan & Sara Ali Khan',
      description: 'Love Aaj Kal (2020) explored modern love\'s complexity. Their parallel timeline romance through "Shayad" and "Haan Main Galat" showed how love evolves across generations.',
      image: '/images/couples/kartik-sara-lak.png'  // Shayad song scene
    }
];

  const captureAndShare = async () => {
    try {
      if (navigator.share) {
        const shareText = `${name1} & ${name2} are like ${result.names}! ${result.description}. Find your match at Love Match at https://lovematch.learntosolveit.com/ ❤️`;
        await navigator.share({
          title: 'Love Match Results',
          text: shareText,
        });
      } else {
        alert('Sharing is not supported on this browser. But you can take a screenshot!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  const calculateMatch = () => {
    const hashString = (name1 + name2).toLowerCase();
    let hash = 0;

    for (let i = 0; i < hashString.length; i++) {
      hash = ((hash << 5) - hash) + hashString.charCodeAt(i);
      hash = hash & hash;
    }

    hash = Math.abs(hash);
    const index = hash % couples.length;
    setResult(couples[index]);
  };

  return (
    <div className="min-h-screen bg-white relative flex items-center justify-center p-4">
      <FloatingHearts />

      <div className="bg-white rounded-lg p-8 max-w-md w-full relative z-10">
        <h1 className="text-3xl font-bold text-center mb-8 text-pink-600">
          Love Match
        </h1>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              value={name1}
              onChange={(e) => setName1(e.target.value)}
              placeholder="your name"
              className="px-4 py-2 rounded-lg border border-pink-200 focus:outline-none focus:border-pink-400"
            />

            <input
              type="text"
              value={name2}
              onChange={(e) => setName2(e.target.value)}
              placeholder="your loved one"
              className="px-4 py-2 rounded-lg border border-pink-200 focus:outline-none focus:border-pink-400"
            />
          </div>

          <button
            onClick={calculateMatch}
            disabled={!name1 || !name2}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Which pair are you like?
          </button>
        </div>

        {result && (
          <div className="mt-8 text-center">
            <div className="mt-4">
              <img 
                src={result.image} 
                alt={result.names}
                className="rounded-lg mx-auto mb-2 object-cover w-full h-64"
                onError={(e) => {
                  e.currentTarget.src = "/api/placeholder/400/300"
                }}
              />
              <div className="text-lg text-pink-400 mt-2">
                <span className="text-pink-700 font-semibold">{name1}</span> & <span className="text-pink-700 font-semibold">{name2}</span>, you are like
              </div>
              <div className="text-2xl font-bold mt-2 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                {result.names}
              </div>
              <div className="mt-4 px-6">
                <span className="text-gray-700 text-sm italic">
                  {result.description}
                </span>
              </div>

              <div className="mt-6 flex justify-center space-x-4">
                <button
                  onClick={captureAndShare}
                  className="flex items-center px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoveMatch;
