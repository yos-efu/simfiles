const packNames = [
    // ID, Name, Number of Songs, Min Difficulty, Max Difficulty, isDDRXScale, Link, is SMO Link
    ["OFSV1", "OutFox Serenity Volume I", 15, 1, 20, true, "https://stepmaniaonline.net/pack/5210#page=1&sort=0_asc", true],
    ["OFSV2", "OutFox Serenity Volume II", 13, 1, 18, true, "https://stepmaniaonline.net/pack/5211#page=1&sort=0_asc", true],
    ["YPODS1", "Yosefu's Pile of Dance Simfiles", 30, 1, 21, false, "/pack.html", false]
];

document.addEventListener('DOMContentLoaded', () => {
    const ul = document.createElement('ul');
    ul.id = 'packs';

    packNames.forEach(([id, name, num, minDiff, maxDiff, isDDRXScale, link, isSMOLink]) => {
        const li = document.createElement('li');
        li.className = `pack${id}`;

        const a = document.createElement('a');
        a.title = name;

        if (isSMOLink) {
            a.href = `${link}`;
            a.title += "\n(will redirect to Stepmania Online)";
        } else {
            a.href = `./${id.toLowerCase()}/pack.html`;
        }

        const img = document.createElement('img');
        img.src = `./pack-images/${id.toLowerCase()}-bn.png`;
        img.alt = `${name} banner`;

        const p = document.createElement('p');
        p.textContent = name;
        p.style.fontWeight = 'bold';

        const c = document.createElement('c');
        c.textContent = `${num} songs | Diff Range: ${minDiff} - ${maxDiff}`;

        if (isDDRXScale) {
            c.textContent += " (DDR Scale)";
        }

        // Append everthing
        a.appendChild(img);
        li.appendChild(a);
        li.appendChild(p);
        li.appendChild(c);
        ul.appendChild(li);
    });

    // I have no idea what this does exactly but it seems to work so I'm not gonna question it LOL
    const intro = document.getElementById('intro');
    if (intro && intro.parentNode) {
        intro.parentNode.insertBefore(ul, intro.nextSibling);
    } else {
        document.body.appendChild(ul);
    }
});