const packNames = [
    // group, [ID, isGIFBanner Name, Number of Songs, Min Difficulty, Max Difficulty, isDDRXScale, Link, isAsFiveGrains]
    ['Made by Me :D',
        ['YPODS1', false, 'Yosefu\'s Pile of Dance Simfiles', 30, 1, 22, false, '', false],
    ],
    ['Collab Packs: OutFox Serenity',
        ['OFSV1', false, 'OutFox Serenity Volume I', 15, 1, 20, true, 'https://stepmaniaonline.net/pack/5210#page=1&sort=0_asc', false],
        ['OFSV2', false, 'OutFox Serenity Volume II', 13, 1, 18, true, 'https://stepmaniaonline.net/pack/5211#page=1&sort=0_asc', false],
    ],
    ['Collab Packs: Triple Cross',
        ['fm23', false, 'FEARMIX 2023', 139, 1, 666, true, 'https://stepmaniaonline.net/pack/1616', false],
        ['fm24', false, 'FEARMIX 2024', 123, 1, 19, true, 'https://stepmaniaonline.net/pack/1617', false],
        ['fm25', false, 'FEARMIX 2025', 86, 1, 666, true, 'https://stepmaniaonline.net/pack/9261', false],
        ['zivsc22dc', false, 'Z-I-v Summer Contest 2022 Director\'s Cut', 111, 1, 19, true, 'https://stepmaniaonline.net/pack/4619', false],
    ],
    ['Collab Packs: Secret Santa and New Years',
        ['newyearsfeast2223', false, 'New Year\'s Stepfile Feast 2022\/23', 17, 1, 24, false, 'https://stepmaniaonline.net/pack/9208', false],
        ['newyearsfeast2324', false, 'New Year\'s Stepfile Feast 2023\/24', 24, 9, 18, false, 'https://stepmaniaonline.net/pack/2779', false],
        ['newyearsfeast2425', false, 'New Year\'s Stepfile Feast 2024\/25', 42, 2, 23, false, 'https://stepmaniaonline.net/pack/2778', false],
        ['newyearsfeast2526', false, 'New Year\'s Stepfile Feast 2025\/26', 29, 1, 67, false, 'https://stepmaniaonline.net/pack/9382', false],
        ['secretsanta21', false, 'Secret Stepfile Santa 2021', 48, 1, 19, false, 'https://stepmaniaonline.net/pack/3434', false],
        ['secretsanta22', false, 'Secret Stepfile Santa 2022', 80, 1, 16, false, 'https://stepmaniaonline.net/pack/3435', false],
        ['secretsanta23', false, 'Secret Stepfile Santa 2023', 77, 1, 25, false, 'https://stepmaniaonline.net/pack/3436', false],
        ['secretsanta24', false, 'Secret Stepfile Santa 2024', 74, 1, 69, false, 'https://stepmaniaonline.net/pack/3437', false],
        ['secretsanta25', false, 'Secret Stepfile Santa 2025', 91, 1, 67, false, 'https://stepmaniaonline.net/pack/9367', false],
        ['stamsanta21', false, 'Stamina Secret Santa 2021', 40, 1, 31, false, 'https://stepmaniaonline.net/pack/3624', true],
        ['stamsanta22', false, 'Stamina Secret Santa 2022', 35, 3, 33, false, 'https://stepmaniaonline.net/pack/3625', true],
        ['stamsanta23', false, 'Stamina Secret Santa 2023', 36, 4, 33, false, 'https://stepmaniaonline.net/pack/3626', true],
        ['stamsanta24', false, 'Stamina Secret Santa 2024', 38, 6, 49, false, 'https://stepmaniaonline.net/pack/3627', true],
        ['stamsanta25', false, 'Stamina Secret Santa 2025', 45, 10, 32, false, 'https://stepmaniaonline.net/pack/9369', true],
    ],
    ['Collab Packs: 4 TEH MEMEZ',
        ['cc2', false, 'Cafe Cursed 2', 74, 1, 20, true, 'https://stepmaniaonline.net/pack/548', false],
        ['cc3', false, 'Cafe Cursed 3', 121, 1, 999, true, 'https://stepmaniaonline.net/pack/549', false],
        ['cc4', false, 'Cafe Cursed 4', 81, 1, 23, true, 'https://stepmaniaonline.net/pack/550', false],
        ['cc5', false, 'Cafe Cursed 5', 126, 1, 999999999, true, 'https://stepmaniaonline.net/pack/9684', false],
        ['lefts1', true, 'L.E.F.T.S', 101, 1, 29, false, 'https://stepmaniaonline.net/pack/9365', false],
        ['rights2', false, 'R.I.G.H.T.S 2', 96, 1, 2077, false, 'https://stepmaniaonline.net/pack/3097', false],
        ['rights3', false, 'R.I.G.H.T.S 3', 96, 1, 24, false, 'https://stepmaniaonline.net/pack/8467', false],
        ['ups5', false, 'UPS 5', 86, 1, 283, false, 'https://stepmaniaonline.net/pack/4068', false],
        ['upsmh', false, 'UPSMH Online', 71, 1, 420, false, 'https://stepmaniaonline.net/pack/8961', false],
    ],
];

document.addEventListener('DOMContentLoaded', () => {
    const ul = document.createElement('ul');
    ul.id = 'packs';

    packNames.forEach(([group, ...packs]) => {
        const groupDiv = document.createElement('div');
        const groupName = document.createElement('p');
        groupName.textContent = `${group}`;
        groupDiv.appendChild(groupName);
        packs.forEach(([id, isGIFBanner, name, num, minDiff, maxDiff, isDDRXScale, link, isAsFiveGrains]) => {
            const li = document.createElement('li');
            li.className = `pack${id}`;

            const a = document.createElement('a');
            a.title = name;
            
            if (link === '') {
                a.href = `./${id.toLowerCase()}/pack.html`;
            } else {
                a.href = `${link}`;
                if (isAsFiveGrains) {
                    a.title += '\n(under the alias "Five Grains")';
                }
                a.title += '\n(will redirect to Stepmania Online)';
            }

            const img = document.createElement('img');
            if (isGIFBanner) {
                img.src = `./pack-images/${id.toLowerCase()}-bn.gif`;
            } else {
                img.src = `./pack-images/${id.toLowerCase()}-bn.png`;
            }
            img.alt = `${name} banner`;

            const p = document.createElement('p');
            p.textContent = name;
            p.style.fontWeight = 'bold';
            const c = document.createElement('span');
            c.textContent = `${num} songs | Diff Range: ${minDiff} - ${maxDiff} `;

            if (isDDRXScale) {
                const ddrxImg = document.createElement('img');
                ddrxImg.src = 'ddrx.gif';
                ddrxImg.title = 'DDRX scale';
                ddrxImg.style.width = '24px';
                ddrxImg.style.verticalAlign = 'middle';
                c.appendChild(ddrxImg);
            } else {
                const itgImg = document.createElement('img');
                itgImg.src = 'itgm.svg';
                itgImg.title = 'ITG scale';
                itgImg.style.width = '24px';
                itgImg.style.verticalAlign = 'middle';
                c.appendChild(itgImg);
            }

            // Append everything
            a.appendChild(img);
            li.appendChild(a);
            li.appendChild(p);
            li.appendChild(c);
            groupDiv.appendChild(li);
        });
        ul.appendChild(groupDiv);
    });

    // I have no idea what this does exactly but it seems to work so I'm not gonna question it LOL
    const intro = document.getElementById('intro');
    if (intro && intro.parentNode) {
        intro.parentNode.insertBefore(ul, intro.nextSibling);
    } else {
        document.body.appendChild(ul);
    }
});