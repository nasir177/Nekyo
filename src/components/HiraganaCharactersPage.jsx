import React, { useState } from 'react';
import './HiraganaCharactersPage.css';
import { Home, Users, PenSquare, Video, MessageSquare } from "lucide-react";
import { useNavigate, useLocation } from 'react-router-dom';

const SidebarItem = ({ icon: Icon, label, active, notification, onClick }) => (
    <div
        className={`flex items-center space-x-3 py-2 px-4 rounded-lg cursor-pointer ${
            active ? "bg-[#fff] text-green-400" : "hover:bg-gray-800"
        }`}
        onClick={onClick}
    >
        <Icon size={20} />
        <span>{label}</span>
        {notification && (
            <span className="ml-auto">
                <span className="inline-block w-2 h-2 bg-pink-400 rounded-full"></span>
            </span>
        )}
    </div>
);

const HiraganaCharactersPage = () => {
    const [selectedScript, setSelectedScript] = useState('hiragana');
    const navigate = useNavigate();
    const location = useLocation();

    
    const sidebarItems = [
        
        { icon: Home, label: "Learn", path: "/learn" },
        { icon: Users, label: "Characters", path: "/hiragana" },
        { icon: PenSquare, label: "Practice board", path: "/whiteboard" },
        { icon: Video, label: "Videos", path: "/vSideos" },
        { icon: MessageSquare, label: "Conversation", path: "/conversation" },
    ];

    const hiragana = [
        ['あ', 'a'], ['い', 'i'], ['う', 'u'], ['え', 'e'], ['お', 'o'],
        ['か', 'ka'], ['き', 'ki'], ['く', 'ku'], ['け', 'ke'], ['こ', 'ko'],
        ['さ', 'sa'], ['し', 'shi'], ['す', 'su'], ['せ', 'se'], ['そ', 'so'],
        ['た', 'ta'], ['ち', 'chi'], ['つ', 'tsu'], ['て', 'te'], ['と', 'to'],
        ['な', 'na'], ['に', 'ni'], ['ぬ', 'nu'], ['ね', 'ne'], ['の', 'no'],
        ['は', 'ha'], ['ひ', 'hi'], ['ふ', 'fu'], ['へ', 'he'], ['ほ', 'ho'],
        ['ま', 'ma'], ['み', 'mi'], ['む', 'mu'], ['め', 'me'], ['も', 'mo'],
        ['や', 'ya'], ['ゆ', 'yu'], ['よ', 'yo'],
        ['ら', 'ra'], ['り', 'ri'], ['る', 'ru'], ['れ', 're'], ['ろ', 'ro'],
        ['わ', 'wa'], ['を', 'wo'],
        ['ん', 'n'],
        ['が', 'ga'], ['ぎ', 'gi'], ['ぐ', 'gu'], ['げ', 'ge'], ['ご', 'go'],
        ['ざ', 'za'], ['じ', 'ji'], ['ず', 'zu'], ['ぜ', 'ze'], ['ぞ', 'zo'],
        ['だ', 'da'], ['ぢ', 'ji'], ['づ', 'zu'], ['で', 'de'], ['ど', 'do'],
        ['ば', 'ba'], ['び', 'bi'], ['ぶ', 'bu'], ['べ', 'be'], ['ぼ', 'bo'],
        ['ぱ', 'pa'], ['ぴ', 'pi'], ['ぷ', 'pu'], ['ぺ', 'pe'], ['ぽ', 'po'],
        ['きゃ', 'kya'], ['きゅ', 'kyu'], ['きょ', 'kyo'],
        ['しゃ', 'sha'], ['しゅ', 'shu'], ['しょ', 'sho'],
        ['ちゃ', 'cha'], ['ちゅ', 'chu'], ['ちょ', 'cho'],
        ['にゃ', 'nya'], ['にゅ', 'nyu'], ['にょ', 'nyo'],
        ['ひゃ', 'hya'], ['ひゅ', 'hyu'], ['ひょ', 'hyo'],
        ['みゃ', 'mya'], ['みゅ', 'myu'], ['みょ', 'myo'],
        ['りゃ', 'rya'], ['りゅ', 'ryu'], ['りょ', 'ryo'],
        ['ぎゃ', 'gya'], ['ぎゅ', 'gyu'], ['ぎょ', 'gyo'],
        ['じゃ', 'ja'], ['じゅ', 'ju'], ['じょ', 'jo'],
        ['びゃ', 'bya'], ['びゅ', 'byu'], ['びょ', 'byo'],
        ['ぴゃ', 'pya'], ['ぴゅ', 'pyu'], ['ぴょ', 'pyo'],
    ];

    const katakana = [
        ['ア', 'a'], ['イ', 'i'], ['ウ', 'u'], ['エ', 'e'], ['オ', 'o'],
        ['カ', 'ka'], ['キ', 'ki'], ['ク', 'ku'], ['ケ', 'ke'], ['コ', 'ko'],
        ['サ', 'sa'], ['シ', 'shi'], ['ス', 'su'], ['セ', 'se'], ['ソ', 'so'],
        ['タ', 'ta'], ['チ', 'chi'], ['ツ', 'tsu'], ['テ', 'te'], ['ト', 'to'],
        ['ナ', 'na'], ['ニ', 'ni'], ['ヌ', 'nu'], ['ネ', 'ne'], ['ノ', 'no'],
        ['ハ', 'ha'], ['ヒ', 'hi'], ['フ', 'fu'], ['ヘ', 'he'], ['ホ', 'ho'],
        ['マ', 'ma'], ['ミ', 'mi'], ['ム', 'mu'], ['メ', 'me'], ['モ', 'mo'],
        ['ヤ', 'ya'], ['ユ', 'yu'], ['ヨ', 'yo'],
        ['ラ', 'ra'], ['リ', 'ri'], ['ル', 'ru'], ['レ', 're'], ['ロ', 'ro'],
        ['ワ', 'wa'], ['ヲ', 'wo'],
        ['ン', 'n'],
        ['ガ', 'ga'], ['ギ', 'gi'], ['グ', 'gu'], ['ゲ', 'ge'], ['ゴ', 'go'],
        ['ザ', 'za'], ['ジ', 'ji'], ['ズ', 'zu'], ['ゼ', 'ze'], ['ゾ', 'zo'],
        ['ダ', 'da'], ['ヂ', 'ji'], ['ヅ', 'zu'], ['デ', 'de'], ['ド', 'do'],
        ['バ', 'ba'], ['ビ', 'bi'], ['ブ', 'bu'], ['ベ', 'be'], ['ボ', 'bo'],
        ['パ', 'pa'], ['ピ', 'pi'], ['プ', 'pu'], ['ペ', 'pe'], ['ポ', 'po'],
        ['キャ', 'kya'], ['キュ', 'kyu'], ['キョ', 'kyo'],
        ['シャ', 'sha'], ['シュ', 'shu'], ['ショ', 'sho'],
        ['チャ', 'cha'], ['チュ', 'chu'], ['チョ', 'cho'],
        ['ニャ', 'nya'], ['ニュ', 'nyu'], ['ニョ', 'nyo'],
        ['ヒャ', 'hya'], ['ヒュ', 'hyu'], ['ヒョ', 'hyo'],
        ['ミャ', 'mya'], ['ミュ', 'myu'], ['ミョ', 'myo'],
        ['リャ', 'rya'], ['リュ', 'ryu'], ['リョ', 'ryo'],
        ['ギャ', 'gya'], ['ギュ', 'gyu'], ['ギョ', 'gyo'],
        ['ジャ', 'ja'], ['ジュ', 'ju'], ['ジョ', 'jo'],
        ['ビャ', 'bya'], ['ビュ', 'byu'], ['ビョ', 'byo'],
        ['ピャ', 'pya'], ['ピュ', 'pyu'], ['ピョ', 'pyo'],
    ];

    const kanji = [
        ['日', 'nichi/hi', 'day, sun'],
        ['一', 'ichi', 'one'],
        ['国', 'kuni', 'country'],
        ['人', 'hito', 'person'],
        ['年', 'nen', 'year'],
        ['大', 'dai', 'big'],
        ['十', 'juu', 'ten'],
        ['二', 'ni', 'two'],
        ['本', 'hon', 'book, origin'],
        ['中', 'naka', 'inside, middle'],
        ['長', 'naga', 'long, leader'],
        ['出', 'deru', 'exit, go out'],
        ['三', 'san', 'three'],
        ['時', 'ji', 'time, hour'],
        ['行', 'iku', 'go'],
        ['見', 'miru', 'see'],
        ['月', 'getsu/tsuki', 'month, moon'],
        ['後', 'ato', 'after, behind'],
        ['前', 'mae', 'before, in front'],
        ['生', 'sei', 'life, birth'],
        ['五', 'go', 'five'],
        ['間', 'aida', 'interval, space'],
        ['上', 'ue', 'up, above'],
        ['東', 'higashi', 'east'],
        ['四', 'shi/yon', 'four'],
        ['今', 'ima', 'now'],
        ['金', 'kin', 'gold, money'],
        ['九', 'kyuu', 'nine'],
        ['入', 'hairu', 'enter'],
        ['学', 'gaku', 'study, learning'],
        ['高', 'takai', 'tall, high'],
        ['円', 'en', 'yen, circle'],
        ['子', 'ko', 'child'],
        ['外', 'soto', 'outside'],
        ['八', 'hachi', 'eight'],
        ['六', 'roku', 'six'],
        ['下', 'shita', 'down, below'],
        ['来', 'kuru', 'come'],
        ['気', 'ki', 'spirit, mind'],
        ['小', 'chiisai', 'small'],
        ['七', 'nana', 'seven'],
    ];

    function playAudio(romaji) {
        if (!romaji) return;
        const cleanRomaji = romaji.split('/')[0].toLowerCase().trim();
        const audio = new Audio(`/audio/${cleanRomaji}.mp3`);
        audio.play().catch(err => {
            console.error(`Audio file not found: ${cleanRomaji}.mp3`, err);
        });
    }

    let characters;
    if (selectedScript === 'hiragana') {
        characters = hiragana;
    } else if (selectedScript === 'katakana') {
        characters = katakana;
    } else if (selectedScript === 'kanji') {
        characters = kanji;
    }

   // Sidebar items 
    
//    {/* Mobile Bottom Navigation */}
   



  

    // Get current path for active state
    const currentPath = window.location.pathname;

    return (

        
       <div className="learn-layout">
            {/* Sidebar */}
           <aside className="sidebar">
    <div className="sidebar-header">
        <img
            src="/learnimage/8481943.jpg"
            alt="Nekyo"
            className="sidebar-image"
        />
        <h1 className="logo">Nekyo</h1>
    </div>
    {sidebarItems.map(item => (
        <SidebarItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            active={currentPath.startsWith(item.path)}
            onClick={() => navigate(item.path)}
        />
    ))}
</aside>

{/* Bottom mobile nav */}
<div className="bottom-nav">
  {sidebarItems.map((item, index) => (
    <button
      key={index}
      className={`nav-btn ${location.pathname === item.path ? 'active' : ''}`}
      onClick={() => navigate(item.path)}
      aria-label={item.label}
    >
      <item.icon size={22} />
      <span>{item.label}</span>
    </button>
  ))}
</div>


            {/* Main content */}
            <main className="main-content">
                {/* Tabs */}
                <header className="tabs">
                    <span className={`tab ${selectedScript === 'hiragana' ? 'selected' : ''}`} onClick={() => setSelectedScript('hiragana')}>Hiragana</span>
                    <span className={`tab ${selectedScript === 'katakana' ? 'selected' : ''}`} onClick={() => setSelectedScript('katakana')}>Katakana</span>
                    <span className={`tab ${selectedScript === 'kanji' ? 'selected' : ''}`} onClick={() => setSelectedScript('kanji')}>Kanji</span>
                </header>

                
                                <div className="intro">
                                    <h1>
                                        Let's learn{' '}
                                        {selectedScript === 'hiragana'
                                            ? 'Hiragana'
                                            : selectedScript === 'katakana'
                                            ? 'Katakana'
                                            : 'Kanji'}
                                        !
                                    </h1>
                                    <p>
                                        {selectedScript === 'kanji'
                                            ? 'Get to know the most common Kanji '
                                            : 'Get to know the main writing system in Japanese'}
                                    </p>
                                    <button className="tips-btn">TIPS</button>
                                    <button
                                        className="learn-btn"
                                        onClick={() => navigate('/hiragana101')}
                                    >
                                        LEARN THE CHARACTERS
                                    </button>
                                </div>

                                {/* Characters grid */}
                <div className="characters-grid">
                    {characters.map((item, index) => (
                        <div
                            className="char-box"
                            key={index}
                            onClick={() => playAudio(item[1])}
                        >
                            <div className="char">{item[0]}</div>
                            <div className="romaji">{item[1]}</div>
                            {selectedScript === 'kanji' && (
                                <div className="meaning">{item[2]}</div>
                            )}
                            <div className="progress-bar" />
                        </div>
                    ))}
                </div>
            </main>

            {/* Right panel */}
            <aside className="right-panel">
                <div className="card">
                    <h3>Create a profile to save your progress!</h3>
                    <button className="profile-btn green">CREATE A PROFILE</button>
                    <button className="profile-btn blue">SIGN IN</button>
                </div>
            </aside>
        </div>
    );
}

export default HiraganaCharactersPage;
