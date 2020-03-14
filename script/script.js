const Config = {
    name: "kagome",
    scale: 1,
    Links: [
        [
            "My Sites",
            [
                ["Placeholder", "https://www.example.com/"],
                ["Placeholder", "https://www.example.com/"]
            ]
        ],
        [
            "Programming",
            [
                ["AWS Educate", "https://www.awseducate.com/student/s/"],
                ["Scala Resources", "https://docs.scala-lang.org/learn.html"]
            ]
        ],
        [
            "Mangas",
            [
                ["Battle Angel Alita Mars Chronicle", "https://mangadex.org/title/13886/gunnm-mars-chronicle"],
                ["Battle Angel Alita Last Order", "https://mangadex.org/title/372/gunnm-last-order"],
                ["Battle Angel Alita", "https://mangadex.org/title/4484/gunnm"],
                ["Random Walk", "https://mangadex.org/title/2043/random-walk"],
                ["Kimi No Iru Machi", "https://mangadex.org/title/29/kimi-no-iru-machi"],
                ["Ohana Moyou no One-Piece", "https://mangadex.org/title/9179/ohana-moyou-no-one-piece"],
                ["Koibito Play", "https://mangadex.org/title/6192/koibito-play"],
                ["My Name Is Shingo", "https://mangadex.org/title/1392/my-name-is-shingo"],
                ["Banana Bread No Pudding", "https://mangadex.org/title/5798/banana-bread-no-pudding"],
                ["Alien Nine", "https://mangadex.org/title/4260/alien-nine"],
                ["She, The Ultimate Weapon", "https://mangadex.org/title/5260/saishuu-heiki-kanojo"]
            ]
        ],
        [
            "Japanese",
            [
                ["Learn To Read Japanese Hiragana Using Memory Palaces", "https://www.iwillteachyoualanguage.com/learn/japanese/japanese-tips/learn-to-read-japanese-hiragana"],
                ["Let’s Learn Japanese course series (formerly SGJL)", "https://community.memrise.com/t/course-forum-lets-learn-japanese-course-series-formerly-sgjl/1100"],
                ["Google - Learn Japanese Drills", "https://www.google.com/search?client=ubuntu&channel=fs&q=learn+japanese+drills&ie=utf-8&oe=utf-8"],
                ["DJT - Daily Japanese Thread #2312", "http://archive.is/E8VjI"],
                ["Itazuraneko", "https://itazuraneko.neocities.org/"],
                ["Itazuraneko - Grammar Guide", "https://itazuraneko.neocities.org/#grammar"],
                ["Itazuraneko - Kana Guide", "https://itazuraneko.neocities.org/learn/guide.html#The%20kana"],
                ["Copy of The DJT Guide", "https://docs.google.com/document/d/1nL3afLNAikyviPa0oFXrFrKNzPIgf4DOCU-nEUe2ROg/edit?copiedFromTrash"],
                ["Google - Heisig's RTK Way", "https://www.google.com/search?client=ubuntu&channel=fs&q=Heisig%27s+RTK+Way&ie=utf-8&oe=utf-8"],
                ["Koohi - Remembering Kanji", "https://kanji.koohii.com/"],
                ["Tae Kim's Guide to Learning Japanese", "http://www.guidetojapanese.org/learn/"],
                ["昨日 Sakubi: Yesterday's Grammar Guide", "https://sakubi.neocities.org/"],
                ["You Can [Not] Learn Japanese", "https://djtguide.neocities.org/"],
                ["Cornucopia Of Resources", "https://djtguide.neocities.org/cor.html"]
            ]
        ],
        [
            "Memory",
            [
                ["Artificial Memory Palaces", "https://artofmemory.com/wiki/Artificial_Memory_Palaces"],
                ["How To Build a Memory Palace", "https://artofmemory.com/wiki/How_to_Build_a_Memory_Palace"],
                ["Method Of Loci", "https://artofmemory.com/wiki/Method_of_Loci"],
                ["Mind Palace", "https://artofmemory.com/wiki/Mind_Palace"]
            ]
        ]
    ]
}

const Main = (() => {
    const list = document.getElementById("list");
    const names = document.querySelectorAll("[data-Name]");
    const search = document.getElementById("search");
    const form = document.forms[0];

    const init = () => {
        list.innerHTML = Config.Links.map(([gName, Links]) => `
            <li>
                <h1 onclick="this.parentNode.classList.toggle('hideChildren')">${gName}</h1>
                <ul>
                    ${Links.map(([lName, url]) => `
                        <li>
                            <a href="${url}">${lName}</a>
                        </li>`
                    ).join("")}
                </ul>
            </li>` 
        ).join("")
        
        names.forEach(el => {
            el.innerText = Config.name;
        });

        document.addEventListener("keydown", e => e.key.length === 1 && search.focus());
        search.addEventListener("keydown", () => (window.event ? event.keyCode : e.which) == 13 && form.submit());
    };

    return {
        init,
    };
})();

Main.init()
