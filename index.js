let wives = [
    {
        name: 'Esmeralda "the Dagger"',
        kids: 'None yet, thankfully',
        kill: 'Tried to poison me with love potions',
        story: 'We met in a dimly lit tavern where she was performing a seductive dance with daggers. Her precision and grace caught my eye, and soon we were entangled in a whirlwind romance fueled by danger and excitement.',
        img: 'Esmeralda.jpg',
        ended: 'Our relationship ended abruptly when I discovered her stash of poisonous concoctions hidden beneath our bed.'
    },
    {
        name: 'Beatrice "the Beast Tamer"',
        kids: 'Two and a half (long story)',
        kill: 'Attempted to feed me to her pet chimera',
        story: 'I stumbled upon Beatrice while she was performing her legendary act of taming a wild chimera in the grand circus. Her fearlessness and charm captivated me instantly, and before I knew it, I was swept off my feet and into the lion’s den, so to speak.',
        img: 'Beatrice.jpg',
        ended: 'Our love turned sour when I found myself on the dinner menu for her beloved chimera.'
    },
    {
        name: 'Helga "the Hammer"',
        kids: 'Three brawny boys',
        kill: 'Threatened to crush me with her giant mallet',
        story: 'I first laid eyes on Helga during a barbarian competition where she was the reigning champion, wielding a massive hammer with the finesse of a ballerina. Her strength was matched only by her beauty, and I couldn’t resist the challenge of winning her heart.',
        img: 'Helga.jpg',
        ended: 'Our tumultuous affair ended when she attempted to demonstrate her affection by flattening me with her signature hammer.'
    },
    {
        name: 'Gwendolyn "the Gambler"',
        kids: 'A pair of twin daughters and a royal flush',
        kill: 'Hired a band of mercenaries to throw me off a cliff',
        story: 'Our paths crossed in a high-stakes game of cards where Gwendolyn had a royal flush and I had a royal crush. Her daring bets and mischievous grin stole my heart, and I found myself gambling with more than just gold.',
        img: 'Gwendolyn.jpg',
        ended: 'Things took a dark turn when I discovered her plans to cash in my life insurance policy.'
    },
    {
        name: 'Luna "the Lethal"',
        kids: 'A brood of baby assassins',
        kill: 'Sent her ninja squad after me',
        story: 'Luna was a mysterious figure cloaked in shadows when I encountered her at a clandestine meeting of underworld bosses. Her skills with a blade were matched only by her enigmatic allure, and I was drawn to her like a moth to a flame.',
        img: 'Luna.jpg',
        ended: 'Our romance was cut short when I narrowly escaped a barrage of throwing stars aimed at my heart.'
    },
    {
        name: 'Zara "the Zombie Queen"',
        kids: 'None yet, but she keeps collecting pets',
        kill: 'Tried to turn me into a zombie minion',
        story: 'I met Zara during a bizarre ritualistic gathering where she was summoning the undead to do her bidding. Her fascination with the macabre was oddly captivating, and I found myself bewitched by her necromantic charms.',
        img: 'Zara.jpg',
        ended: 'Our relationship met its demise when I woke up one morning with a hunger for brains and a note from her explaining her grand plan for world domination.'
    },
    {
        name: 'Violet "the Volatile"',
        kids: 'A pair of fiery twins',
        kill: 'Set fire to my wardrobe (and me)',
        story: 'Violet was a tempest of passion and fury, her fiery spirit matching her flaming red hair. Our love burned bright and hot like a wildfire, consuming everything in its path.',
        img: 'Violet.jpg',
        ended: 'Our relationship went up in smoke when she decided to take "playing with fire" a little too literally.'
    },
    {
        name: 'Samantha "the Siren"',
        kids: 'A school of mermaid babies',
        kill: 'Lured me into a whirlpool of doom',
        story: 'Samantha was a captivating beauty with a voice that could enchant sailors to their doom. Our love blossomed amidst the crashing waves and salty air, but little did I know, she had darker intentions beneath her seductive facade.',
        img: 'Samantha.jpg',
        ended: 'Our romance met a watery grave when she attempted to drag me down to the depths of the ocean with her.'
    },
    {
        name: 'Roxanne "the Rogue"',
        kids: 'None that I know of, but she\'s always disappearing',
        kill: 'Tried to sneak poison into my wine',
        story: 'Roxanne was a master of stealth and cunning, her nimble fingers dancing across the strings of fate. Our love was a game of cat and mouse, with each stolen kiss accompanied by the thrill of danger.',
        img: 'Roxanne.jpg',
        ended: 'Our relationship ended when I caught her red-handed trying to slip something deadly into my drink.'
    },
    {
        name: 'Penelope "the Pyromaniac"',
        kids: 'None yet, but she dreams of burning down a castle',
        kill: 'Tried to incinerate me in my sleep',
        story: 'Penelope was a fiery redhead with a passion for all things incendiary. Our love was like a flame, consuming everything in its path and leaving nothing but ashes in its wake.',
        img: 'Penelope.jpg',
        ended: 'Our relationship went up in flames when she decided to take her pyromania to the next level.'
    },
    {
        name: 'Fiona "the Fencer"',
        kids: 'A pair of dashing duelist sons',
        kill: 'Challenged me to a duel to the death',
        story: 'Fiona was a master swordswoman with a wit as sharp as her blade. Our love was a dance of steel and passion, each parry and thrust bringing us closer together.',
        img: 'Fiona.jpg',
        ended: 'Our relationship came to a dramatic end when she challenged me to a duel for the title of "Ultimate Ex-Husband".'
    },
    {
        name: 'Delilah "the Demonologist"',
        kids: 'None yet, but she has a demon familiar',
        kill: 'Summoned a horde of hellspawn to devour me',
        story: 'Delilah was a dark and mysterious figure, her eyes burning with the fire of ancient secrets. Our love was forbidden, a dangerous liaison between mortal and infernal.',
        img: 'Delilah.jpg',
        ended: 'Our relationship was torn asunder when I narrowly escaped a demonic horde sent to drag me into the depths of hell.'
    },
    {
        name: 'Octavia "the Occultist"',
        kids: 'A coven of witchlings',
        kill: 'Tried to sacrifice me to the dark gods',
        story: 'Octavia was a mistress of the dark arts, her spells weaving a web of enchantment around my heart. Our love was a pact with the devil, sealed in blood and bound by ancient rites.',
        img: 'Octavia.jpg',
        ended: 'Our relationship met a grisly end when I discovered her plans to offer me up as a sacrifice to her eldritch masters.'
    },
    {
        name: 'Morticia "the Mortician"',
        kids: 'A crypt full of little ghouls',
        kill: 'Tried to embalm me alive',
        story: 'Morticia was a morbid beauty with a penchant for all things macabre. Our love was like a funeral dirge, mournful and haunting, yet strangely beautiful in its melancholy.',
        img: 'Morticia.jpg',
        ended: 'Our relationship met a premature end when she attempted to preserve our love in eternal death.'
    },
    {
        name: 'Wilhelmina "the Werewolf"',
        kids: 'A litter of lupine pups',
        kill: 'Tried to make me her midnight snack',
        story: 'Wilhelmina was a wild and untamed creature of the night, her lupine form stalking the shadows with primal grace. Our love was a moonlit romance, fierce and untamed, yet tinged with danger.',
        img: 'Wilhelmina.jpg',
        ended: 'Our relationship ended when she mistook me for a particularly tasty-looking rabbit during the full moon.'
    },
    {
        name: 'Cassandra "the Cannibal"',
        kids: 'None, but she has a taste for adventure',
        kill: 'Tried to make a meal out of me',
        story: 'Cassandra was a woman of refined tastes, her palate craving the exotic and forbidden. Our love was a banquet of flesh and bone, each bite a symphony of flavors.',
        img: 'Cassandra.jpg',
        ended: 'Our relationship ended when I discovered her cookbook filled with recipes for "husband stew".'
    },
    {
        name: 'Grunk "the Gentle Giant"',
        kids: 'We Tried',
        kill: 'Tried to give me a bone-crushing bear hug',
        img: 'Grunk.jpg',
        story: "I couldn't get into a frat but Grunk said he could help. I didn't realize how far I'd have to go to make this happen."
    },
    {
        name: 'Regina "the Reaper"',
        kids: 'A legion of spectral offspring',
        kill: 'Sent her undead minions after me',
        story: 'Regina was a harbinger of death, her scythe cutting a swath through the mortal realm. Our love was a dance with the devil, each step bringing us closer to the inevitable.',
        img: 'Regina.jpg',
        ended: 'Our relationship met its end when I narrowly escaped the clutches of her undead horde.'
    },
    {
        name: 'Valentina "the Vampire"',
        kids: 'A coven of bloodsucking babes',
        kill: 'Tried to turn me into her undead thrall',
        story: 'Valentina was a creature of the night, her porcelain skin pale as moonlight and her lips stained crimson with the blood of the innocent. Our love was a forbidden romance, cursed by the eternal hunger of the undead.',
        img: 'Valentina.jpg',
        ended: 'Our relationship met a stake through the heart when I discovered her plans to turn me into her eternal servant.'
    },
    {
        name: 'Bianca "the Banshee"',
        kids: 'None, but she has a wail that could wake the dead',
        kill: 'Tried to scream me to death',
        story: 'Bianca was a wraithlike beauty with a voice that could shatter glass and pierce the soul. Our love was a haunting melody, echoing through the empty halls of eternity.',
        img: 'Bianca.jpg',
        ended: 'Our relationship met a ghostly end when her banshee wail nearly shattered my eardrums.'
    },
    {
        name: 'Gertrude "the Ghoul"',
        kids: 'A horde of ravenous ghoulish children',
        kill: 'Tried to make me her undead bridegroom',
        story: 'Gertrude was a creature of the night, her hunger for flesh matched only by her hunger for love. Our romance was a graveyard tryst, passionate and macabre in equal measure.',
        img: 'Gertrude.jpg',
        ended: 'Our relationship met its demise when I narrowly escaped her clutches and fled into the moonlit night.'
    }
];


let exWives = document.getElementById('wives');


wives.forEach(function(w, i){

        console.log(w.name, i)

    

        let main = document.createElement('div');
        main.classList.add('main')
        let div = document.createElement('div');
        div.classList.add('div')
        

        exWives.appendChild(main);
        main.appendChild(div);

        let nameImgDiv = document.createElement('div');
        nameImgDiv.classList.add('nameImg')
        let name = document.createElement('div');
        name.classList.add('name')
        let img = document.createElement('img');
        img.classList.add('img')


        div.appendChild(nameImgDiv);
        nameImgDiv.appendChild(name)
        nameImgDiv.appendChild(img)

        if(i === 16){
            name.innerHTML = '<div class="detailSpan">Boyfriend :  </div>'+'<div class="detail"> '+w.name+'</div>'
            img.src = w.img;

        }else {
            name.innerHTML = '<div class="detailSpan">Wife :  </div>'+'<div class="detail"> '+w.name+'</div>'
            img.src = w.img;
        }

        


        let howWeMetDiv = document.createElement('div');
        howWeMetDiv.classList.add('howWeMetDiv')
        let howWeMet = document.createElement('div');
        howWeMet.classList.add('howWeMet');

        div.appendChild(howWeMetDiv)
        howWeMetDiv.appendChild(howWeMet);

        howWeMet.innerHTML = '<div class="detailSpan">How We Met : </div>'+'<div class="detail"> '+w.story+"</div>";


        let killDiv = document.createElement('div');
        killDiv.classList.add('killDiv');
        let kill = document.createElement('div');
        kill.classList.add('kill');

        div.appendChild(killDiv);
        killDiv.appendChild(kill);

        kill.innerHTML = '<div class="detailSpan">Murder Attempts : </div>'+'<div class="detail"> '+w.kill+"</div>";


        let kidsDiv = document.createElement('div');
        kidsDiv.classList.add('kidsDiv');
        let kids = document.createElement('div');
        kids.classList.add('kids');

        div.appendChild(kidsDiv);
        kidsDiv.appendChild(kids);

        kids.innerHTML = '<div class="detailSpan">Kids : </div>'+'<div class="detail"> '+w.kids+"</div>";


        let howItEndedDiv = document.createElement('div');
        howItEndedDiv.classList.add('howItEndedDiv')
        let howItEnded = document.createElement('div');
        howItEnded.classList.add('howItEnded');

        div.appendChild(howItEndedDiv)
        howItEndedDiv.appendChild(howItEnded);

        howItEnded.innerHTML = '<div class="detailSpan">How It Ended : </div>'+'<div class="detail"> '+w.ended+"</div>";




});
