// arrays and stuff
const packInfo = {
    // songnumber: [ songID, banner,
    //      [title, titleTranslit], [subtitle, subtitleTranslit], [artist, artistTranslit],
    //      genre, origin, 
    //      len, [minBPM, maxBPM], [difficulties]]
    aima: [0, 'Aimai Cyborg',
        ['曖昧サイボーグ', 'Aimai Cyborg'], ['', ''], ['Neko Hacker feat. うごくちゃん & JungMato', 'Neko Hacker feat. Ugoku-chan & JungMato'],
        'Electronic', 'Single Release (2020)',
        151, [130, 130], [1, 4, 7, 9, 11]
    ],
    care: [0, 'Careless',
        ['Careless', ''], ['', ''], ['Spaze', ''],
        'Melodic Dubstep', 'Experimental Age (2017 Album)',
        116, [140, 140], [1, 3, 5, 8, 10]
    ],
    coco: [0, 'Coconut Adventure',
        ['ココナツ・アバンチュール', 'Coconut Adventure'], ['', ''], ['ぽんきち', 'Ponkichi'],
        'Pina Colada', 'BOFU2017 (Team "カクテルパーラーふゆぽ")',
        162, [145, 145], [3, 7, 9, 11, 13]
    ],
    ddd9: [0, 'DDD(90\'s remix)',
        ['DDD(90\'s remix)', ''], ['', ''], ['はがね', 'Hagane'],
        'SC-88 Music', 'GroundbreakinG BOFXVII [Disc1 Diamond]',
        116, [126, 126], [1, 3, 6, 8, 11]
    ],
    drea: [0, 'dreamin\' of u',
        ['dreamin\' of u', ''], ['', ''], ['Jun Kuroda', ''],
        'Romantic Artcore', 'SOUND VOLTEX IV VIVID HAVEN',
        117, [178, 178], [2, 5, 9, 10, 12]
    ],
    euph: [0, 'Euphoric Lagoon',
        ['Euphoric Lagoon', ''], ['', ''], ['BEMANI Sound Team "TAG"', ''],
        'J-Dance Fusion', 'beatmania IIDX 28 BISTROVER',
        124, [149, 149], [1, 4, 7, 9, 11]
    ],
    grad: [0, 'GRADIUS REMIX',
        ['GRADIUS REMIX', ''], ['(↑↑↓↓←→←→BA Ver.)', ''], ['TOKYO MACHINE', ''],
        'EDM', 'DANCERUSH STARDOM',
        113, [128, 128], [1, 3, 6, 8, 10]
    ],
    irow: [0, 'Iro wa nioedo chirinuru wo',
        ['色は匂へど散りぬるを', 'Iro wa nioedo chirinuru wo'], ['', ''], ['幽閉サテライト feat. senya', 'Yuuhei Satellite feat. senya'],
        'Touhou Vocal', '色は匂へど散りぬるを (2016 Album)',
        125, [69, 138], [1, 2, 4, 7, 9]
    ],
    love: [0, 'Lovesick',
        ['Lovesick', ''], ['', ''], ['kamome sano feat. ぷにぷに電機', 'kamome sano feat. Punipuni denki'],
        'Slittercore', '777 OVER!! [PFEX011]',
        134, [145, 145], [1, 3, 5, 8, 11]
    ],
    mare: [0, 'Mare Maris',
        ['Mare Maris', ''], ['', ''], ['M2U', ''],
        'Expidition', 'maimai MiLK',
        132, [150, 150], [1, 5, 8, 10, 12]
    ],
    mind: [0, 'Mind Mapping',
        ['Mind Mapping', ''], ['', ''], ['Ryu☆', ''],
        'Electro-Tech', 'beatmania IIDX 16 EMPRESS',
        115, [128, 128], [1, 3, 6, 8, 9]
    ],
    quov: [0, 'Quo Vadis',
        ['Quo Vadis', ''], ['', ''], ['M2U', ''],
        'Ethnic House', 'Single Release (2013)',
        145, [160, 160], [3, 5, 9, 11, 12]
    ],
    rave: [0, 'Rave Accelerator',
        ['Rave Accelerator', ''], ['', ''], ['M-Project', ''],
        'Rave', 'DanceDanceRevolution A20 PLUS',
        119, [170, 170], [2, 5, 8, 10, 12]
    ],
    step: [0, 'STEP MACHINE',
        ['STEP MACHINE', ''], ['', ''], ['Paisley Parks', ''],
        'Footwork', 'DanceDanceRevolution A20 PLUS',
        119, [160, 160], [2, 5, 8, 10, 13]
    ],
    tric: [0, 'Trick Room',
        ['Trick Room', ''], ['', ''], ['Koraii', ''],
        'Dubstep', 'Single Release (2018)',
        142, [160, 160], [1, 3, 6, 8, 10]
    ],
    cold: [0, '-65 C',
        ['-65℃', ''], ['', ''], ['BEMANI Sound Team "D.J.Amuro"', ''],
        'White Out', 'beatmania IIDX 28 BISTROVER',
        124, [186, 186], [2, 5, 9, 11, 13]
    ],
    meis: [1, 'Meissa',
        ['Meissa', ''], ['', ''], ['BEMANI Sound Team "Yvya"', ''],
        'Progressive Drum\'n\'Bass', 'beatmania IIDX 30 RESIDENT',
        114, [124, 174], [3, 7, 9, 12, 13]
    ],
    miko: [1, 'Miko Stack',
        ['Miko Stack', ''], ['', ''], ['KH2AMU', ''],
        'FAQ EDM', 'Single Release (2020)',
        145, [125.999992, 125.999992], [1, 3, 5, 7, 9]
    ],
    shut: [1, 'STFU (Chime Bootleg)',
        ['STFU', ''], ['(Chime Bootleg)', ''], ['Crankdat', ''],
        'Bootlegged Dubstep', 'Single Release (2024)',
        156, [138, 138], [1, 4, 7, 9, 11]
    ],
    ques: [1, 'QUEST',
        ['QUEST(´∀` )', ''], ['', ''], ['Blacklolita', ''],
        'Glitch Hop', 'Hyper Glitch Hop -Level01- [MRX-046]',
        139, [100, 100], [1, 3, 6, 9, 10]
    ],
    fade: [1, 'Yuuyake ~Fading Day~',
        ['夕焼け ～Fading Day～', 'Yuuyake ~Fading Day~'], ['', ''], ['JAKAZiD', ''],
        'Aural Adrenaline', 'beatmania IIDX 18 Resort Anthem',
        117, [174, 174], [2, 5, 9, 10, 12]
    ],
    anyb: [2, 'anybody can find love (except you.)',
        ['anybody can find love', ''], ['(except you.)', ''], ['hkmori', ''],
        'Brakcore', 'unrequited love (2022 Album)',
        131, [191.656, 191.656], [4, 9, 11, 13, 14]
    ],
    fin4: [2, 'FIN4LE',
        ['FIN4LE ～終止線の彼方へ～', 'FIN4LE ~shuushisen no kanata e~'], ['', ''], ['カモメサノエレクトリックオーケストラ', 'kamome sano electric orchestra'],
        'Electric Orchestra', 'SOUND VOLTEX IV VIVID HAVEN',
        120, [256, 256], [4, 9, 11, 14, 16]
    ],
    hehe: [2, 'HeHeHe',
        ['He He He', ''], ['', ''], ['m1dy', ''],
        'Slittercore', '777 OVER!! [PFEX011]',
        98, [388.5, 388.5], [3, 7, 10, 12, 15]
    ],
    weis: [2, 'Weiss Schwarz',
        ['Weiβ Schwarz', 'Weiss Schwarz'], ['', ''], ['seatrus + Se-U-Ra', ''],
        'Artcore', 'K-Shoot Mania (Liberation Package)',
        126, [191, 191], [4, 9, 11, 13, 14]
    ],
    bayo: [3, 'BAYONEX',
        ['BAYONEX', ''], ['', ''], ['かめりあ as "Revenge of Riot"', 'Camellia as "Revenge of Riot"'],
        'Speedcore', 'SOUND VOLTEX III GRAVITY WARS コナステ \/ SOUND VOLTEX EXCEED GEAR',
        124, [262, 262], [6, 10, 13, 16, 18]
    ],
    choc: [3, 'Chocolate Lily',
        ['Chocolate Lily', ''], ['', ''], ['Kobaryo', ''],
        'Melodic Extratone', 'MIXPEED ACTION [PFSA003]',
        122, [282, 282], [9, 11, 14, 18, 22]
    ],
    exit: [3, 'Exitium',
        ['Exitium', ''], ['', ''], ['Laur', ''],
        'Gothic Speedcore', 'WACCA',
        140, [260, 260], [7, 11, 13, 17, 19]
    ],
    osus: [3, 'osu sucks',
        ['osu! sucks', ''], ['', ''], ['ゴミ太郎', 'Gomi Taro'],
        'osu!-core', 'Single Release (2021)',
        112, [230, 230], [5, 9, 11, 14, 17]
    ],
    scar: [3, 'Scarlatti 2.0',
        ['Scarlatti 2.0', ''], ['', ''], ['Igorrr', ''],
        'Gothic Metalcore', 'Hallelujah (2012 Album)',
        128, [200, 200], [8, 12, 15, 18, 20]
    ]
}

// [Base, Secret, Boss, Secret Boss]
const songColors = ['#FFFFFF', '#11c446', '#dd1b2c', '#ff0066'];

// [SN, SE, SM, SH, SX]
const diffs = ['SN', 'SE', 'SM', 'SH', 'SX'];

document.addEventListener('DOMContentLoaded', () => {
    const topText = document.createElement('a');
    topText.textContent = '⮜ Go Back'
    topText.style.position = 'absolute';
    topText.style.top = '5px';
    topText.style.left = '20px';
    topText.style.zIndex = '1000';
    topText.style.fontSize = '1.5em';
    topText.style.fontWeight = 'bold';
    topText.style.cursor = 'pointer';
    topText.addEventListener('click', () => {
        window.location.href = '../index.html';
    });
    document.body.appendChild(topText);

    const ul = document.getElementById('songs'); // grab the songs ul

    Object.entries(packInfo).forEach(([songKey, songData]) => {
        const [songID, banner, [title, titleTranslit], [subtitle, subtitleTranslit], [artist, artistTranslit], genre, origin, len, [minBPM, maxBPM], difficulties] = songData;

        const li = document.createElement('li');
        li.className = 'song';
        
        // display the banner
        const bannerDiv = document.createElement('div');
        bannerDiv.className = 'banner';
        const img = document.createElement('img');
        img.src = `./images/${banner}-bn.png`;
        img.alt = `${title} banner`;
        img.style.width = '418px';
        img.style.height = 'auto';
        img.style.verticalAlign = 'bottom';
        bannerDiv.appendChild(img);
        li.appendChild(bannerDiv);

        if (window.innerWidth <= 800) {
            img.style.width = '209px';

            img.style.position = 'relative';
            img.style.top = '10px';
            img.style.border = `2px solid ${songColors[songID]}`

            // display BPM and length under the banner on mobile since the metadata is hidden
            // and that info is kinda sorta important to have regardless of screen size
            const bpmLen = document.createElement('div');
            bpmLen.style.fontWeight = 500;
            bpmLen.style.position = 'relative';
            bpmLen.style.top = '-7px';
            bpmLen.style.zIndex = '1000';
            bpmLen.style.fontSize = '1.1em';
            bpmLen.style.backgroundImage = 'linear-gradient( rgba(0, 0, 0, 0), rgb( 0, 0, 0 ) )';

            // bpm first
            const bpmLabel = document.createElement('bpmLabel');
            bpmLabel.textContent = 'BPM: ';
            bpmLen.appendChild(bpmLabel);
            // first, check if minBPM and maxBPM differ. If they do, display them as a range.
            if (!(minBPM === maxBPM)) {
                const bpmVal = document.createElement('changingBPM');
                bpmVal.textContent += `${minBPM} - ${maxBPM}`;
                bpmLabel.appendChild(bpmVal);
            } else { // if they don't, check if they're both -1, signifying 'random' BPM. If so, display that instead. Otherwise, just display the BPM as is.
                if (minBPM === -1 && maxBPM === -1) {
                    const bpmNope = document.createElement('unknownBPM');
                    bpmLabel.textContent += '? ? ?';
                    bpmLabel.appendChild(bpmNope);
                } else {
                    bpmLabel.textContent += `${minBPM}`;
                }
            }

            // song length second
            const lenLabel = document.createElement('lenLabel');
            lenLabel.textContent = 'Length: ';
            const lenVal = document.createElement('lenVal');

            const minutes = Math.floor(len / 60);   // calculate minutes
            const seconds = len % 60;               // calculate seconds

            lenVal.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

            // if the song is at least 150 seconds long, add a warning that it may count as 2 rounds in some themes
            if (len >= 150) {
                lenVal.style.cursor = 'help';
                lenVal.style.fontWeight = 'bold';
                lenVal.style.borderBottom = '1px dotted gray';
                lenVal.style.color = 'orange';
                lenVal.title = 'This song may count as 2 rounds in some themes.';

                if (len >= 300) { // if the song is at least 300 seconds long, make the warning even more severe
                    lenVal.style.color = 'red';
                    lenVal.title = 'This song may count as 3 rounds in some themes.';
                }
            }
            lenLabel.appendChild(lenVal);
            bpmLen.appendChild(document.createTextNode(' | '));
            bpmLen.appendChild(lenLabel);
            bannerDiv.appendChild(bpmLen);

        }


        // display the song metadata

        if (window.innerWidth > 800) { 
            // create the metadata div
            const metadataDiv = document.createElement('div');
            metadataDiv.className = 'metadata';

            // all the song info goes here
            const songP = document.createElement('p');
            songP.style.fontStyle = 'normal';

            // song title and artist get its own span
            const songSpan = document.createElement('span');
            songSpan.style.color = songColors[songID] || '#FFFFFF'; // default to white if songID is out of bounds
            songSpan.style.fontStyle = 'bold';
            songSpan.style.fontWeight = 600;

            // starting with main title
            const mainTitle = document.createElement('t');
            mainTitle.textContent = `${title}`;
            if (titleTranslit != '') {
                mainTitle.style.borderBottom = '1px dotted gray';
                mainTitle.style.cursor = 'help';
                mainTitle.title = titleTranslit;
            }

            // next up is subtitle
            const subtitleElement = document.createElement('e');
            subtitleElement.textContent = subtitle ? `${subtitle}` : '';
            if (subtitleTranslit != '') {
                subtitleElement.style.borderBottom = '1px dotted gray';
                subtitleElement.style.cursor = 'help';
                subtitleElement.title = subtitleTranslit;
            }

            // finally, artist
            const artistElement = document.createElement('r');
            artistElement.textContent = `/ ${artist}`;
            if (artistTranslit != '') {
                artistElement.style.borderBottom = '1px dotted gray';
                artistElement.style.cursor = 'help';
                artistElement.title = artistTranslit;
            }

            // up next is bpm and length
            const bpmLen = document.createElement('b');
            bpmLen.style.fontWeight = 500;

            // bpm first
            const bpmLabel = document.createElement('bpmLabel');
            bpmLabel.textContent = 'BPM: ';
            bpmLen.appendChild(bpmLabel);
            // first, check if minBPM and maxBPM differ. If they do, display them as a range.
            if (!(minBPM === maxBPM)) {
                const bpmVal = document.createElement('changingBPM');
                bpmVal.textContent += `${minBPM} - ${maxBPM}`;
                bpmLabel.appendChild(bpmVal);
            } else { // if they don't, check if they're both -1, signifying 'random' BPM. If so, display that instead. Otherwise, just display the BPM as is.
                if (minBPM === -1 && maxBPM === -1) {
                    const bpmNope = document.createElement('unknownBPM');
                    bpmLabel.textContent += '? ? ?';
                    bpmLabel.appendChild(bpmNope);
                } else {
                    bpmLabel.textContent += `${minBPM}`;
                }
            }

            // song length second
            const lenLabel = document.createElement('lenLabel');
            lenLabel.textContent = 'Length: ';
            const lenVal = document.createElement('lenVal');

            const minutes = Math.floor(len / 60);   // calculate minutes
            const seconds = len % 60;               // calculate seconds

            lenVal.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

            // if the song is at least 150 seconds long, add a warning that it may count as 2 rounds in some themes
            if (len >= 150) {
                lenVal.style.cursor = 'help';
                lenVal.style.fontWeight = 'bold';
                lenVal.style.borderBottom = '1px dotted gray';
                lenVal.style.color = 'orange';
                lenVal.title = 'This song may count as 2 rounds in some themes.';

                if (len >= 300) { // if the song is at least 300 seconds long, make the warning even more severe
                    lenVal.style.color = 'red';
                    lenVal.title = 'This song may count as 3 rounds in some themes.';
                }
            }
            lenLabel.appendChild(lenVal);
            bpmLen.appendChild(document.createTextNode(' | '));
            bpmLen.appendChild(lenLabel);

            // end with genre and origin
            const genreElement = document.createElement('g');
            genreElement.textContent = genre ? `Genre: ${genre}` : 'Genre: Unknown';
            const originElement = document.createElement('o');
            originElement.textContent = origin ? `Origin: ${origin}` : 'Origin: Unknown';

            // now append everything in the correct order. Title and artist first, then BPM, then genre and origin
            songSpan.appendChild(mainTitle);
            songSpan.appendChild(document.createElement('br'));
            songSpan.appendChild(subtitleElement);
            songSpan.appendChild(document.createElement('br'));
            songSpan.appendChild(artistElement);
            songP.appendChild(songSpan);
            songP.appendChild(document.createElement('br'));
            songP.appendChild(document.createElement('br'));
            songP.appendChild(bpmLen);
            songP.appendChild(document.createElement('br'));
            songP.appendChild(document.createElement('br'));
            songP.appendChild(genreElement);
            songP.appendChild(document.createElement('br'));
            songP.appendChild(originElement);
            metadataDiv.appendChild(songP);
            li.appendChild(metadataDiv);
        } else {
            document.getElementsByClassName('metadata')[0].style.display = 'none'; // hide the metadata if we're on mobile since it takes up a lot of space and is kind of unreadable anyway
        }


        // display chart ratings
        const chartsDiv = document.createElement('div');
        chartsDiv.className = 'charts';
        chartsDiv.style.fontWeight = 700;
        chartsDiv.style.fontSize = '1.25em';
        for (let index = 0; index < diffs.length; index++) {
            const diff = diffs[index];
            const sChartDiv = document.createElement('div');
            sChartDiv.className = `difficulty ${diff}`;
            const meterSpan = document.createElement('span');
            meterSpan.textContent = difficulties[index] !== undefined ? difficulties[index] : '';
            if (title === 'Mare Maris' && diff === 'SX') { // collab chart with mute
                meterSpan.textContent += 'ᶜ'
                meterSpan.style.borderBottom = '1px dotted gray';
                meterSpan.style.cursor = 'help';
                meterSpan.title = 'collab with mute';
            }
            if (title === 'Quo Vadis' && diff === 'SX') { // collab chart with maractus
                meterSpan.textContent += 'ᶜ'
                meterSpan.style.borderBottom = '1px dotted gray';
                meterSpan.style.cursor = 'help';
                meterSpan.title = 'collab with maractus';
            }
            if (difficulties[index] > 15) {
                meterSpan.style.borderBottom = '1px dotted gray';
                meterSpan.style.cursor = 'help';
                meterSpan.title = 'This is probably misrated, so if it feels easier\nthan the meter suggests, that is likely why. sowwy (シ_ _)シ';
            }
            sChartDiv.appendChild(meterSpan);
            chartsDiv.appendChild(sChartDiv);
        }
        li.appendChild(chartsDiv);


        // APPEND EVERYTHING
        ul.appendChild(li);
    });
});