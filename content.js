
// content.js
const toxicWords = [
    // Add your list of words to filter here
    "apathetic", "apathetically", "bastard", "bastards", "bully", "bullying",
    "bullyingly", "cunt", "cunts", "disgusting", "disgustingly", "douchebag",
    "douchebags", "dumb", "dumbfound", "garbage", "hate", "hated", "hateful",
    "hatefully", "hatefulness", "hater", "haters", "hates", "horrific","horrible",
    "idiot", "idiotic", "idiotically", "idiots", "intoxicate", "jerk",
    "jerky", "job-killing", "kill", "killed", "killer", "killing", "killjoy",
    "kills", "loser", "losers", "monster", "moron", "moronic", "morons",
    "overkill", "pathetic", "pathetically", "pervert", "perverted", "perverts",
    "pig", "pigs", "racist", "racists", "retard", "retarded", "retardedness",
    "retards", "revile", "reviled", "scum", "scummy", "semi-retarded", "slut",
    "sluts", "stupid", "stupidest", "stupidity", "stupidly", "toxic", "trash",
    "trashed", "trashy", "unskilled", "useless", "vile", "vileness", "whore",
    "whores", "bastard", "wh00r", "whore", "cuntbag", "dumbass", "kill",
    "jerk", "cuntlick", "whored", "douchebag", "crackwhore", "cuntsicle",
    "cuntlicking", "cuntz", "whores", "slut", "cuntlicker",
    "50 yard cunt punt", "cunt hair", "cunthunter", "nazism", "corp whore",
    "dumbasses", "pigfucker", "how to kill", "sluts", "cuntface", "jerk0ff",
    "bastardz", "slut bucket", "moron", "nazi", "jerked", "douchebags",
    "hoorem whore", "scum", "cunt", "cunt-struck", "whore", "slutdumper",
    "whorealicious", "slutty", "cumslut", "cunt*", "whorehopper", "jerk-off",
    "jerkoff", "retarded", "slutkiss", "cuntlick", "slutz", "stupid", "trashy",
    "assholes", "bastards", "hoorm whore", "whorehouse", "cunts", "asshole",
    "whoreface", "cuntlicker", "nazis", "jerk-off", "retard",
    "cockknocker", "n1gger", "f ing", "fukker", "nympho", "fcuking", "gook",
    "freex", "arschloch", "fistfucked", "chinc", "raunch", "fellatio", "splooge", "nutsack", "lmfao",
    "wigger", "bastard", "asses", "fistfuckings", "blue waffle", "beeyotch", "pissin", "dominatrix", "fisting",
    "vullva", "paki", "cyberfucker", "chuj", "penuus", "masturbate", "b00b*", "fuks", "sucked",
    "fuckingshitmotherfucker", "feces", "panty", "coital", "wh00r. whore", "condom", "hells",
    "foreskin", "wanker", "hoer", "sh1tz", "shittings", "wtf", "recktum", "dick*", "pr0n", "pasty", "spik",
    "phukked", "assfuck", "xxx", "nigger*", "ugly", "s_h_i_t", "mamhoon", "pornos", "masterbates", "mothafucks",
    "Mother Fukkah", "chink", "pussy palace", "azazel", "fistfucking", "ass-fucker", "shag", "chincs", "duche",
    "orgies", "vag1na", "molest", "bollock", "a-hole", "seduce", "Cock*", "dog-fucker", "shitz", "Mother Fucker",
    "penial", "biatch", "junky", "orifice", "5hit", "kunilingus", "cuntbag", "hump", "butt fuck", "titwank", "schaffer",
    "cracker", "f.u.c.k", "breasts", "d1ld0", "polac", "boobs", "ritard", "fuckup", "rape", "hard on", "skanks", "coksucka",
    "cl1t", "herpy", "s.o.b.", "Motha Fucker", "penus", "Fukker", "p.u.s.s.y.", "faggitt", "b!tch", "doosh", "titty",
    "p.r.i.k", "r-tard", "gigolo", "perse", "lezzies", "bollock*", "pedophiliac", "Ass Monkey", "mothafucker",
    "amcik", "b*tch", "beaner", "masterbat*", "fucka", "phuk", "menses", "pedophile", "climax", "cocksucking",
    "fingerfucked", "asswhole", "basterdz", "cahone", "ahole", "dickflipper", "diligaf", "Lesbian", "sperm",
    "pisser", "dykes", "Skanky", "puuker", "gtfo", "orgasim", "d0ng", "testicle*", "pen1s", "piss-off", "@$$",
    "fuck trophy", "arse*", "fag", "organ", "potty", "queerz", "fannybandit", "muthafuckaz", "booger", "pussypounder",
    "titt", "fuckoff", "bootee", "schlong", "spunk", "rumprammer", "weed", "bi7ch", "pusse", "blow job", "kusi*", "assbanged",
    "dumbass", "kunts", "chraa", "cock sucker", "l3i+ch", "cabron", "arrse", "cnut", "how to murdep", "fcuk", "phuked", "gang-bang",
    "kuksuger", "mothafuckers", "ghey", "clit licker", "feg", "ma5terbate", "d0uche", "pcp", "ejaculate", "nigur", "clits",
    "d0uch3", "b00bs", "fucked", "assbang", "mutha", "goddamned", "cazzo", "lmao", "godamn", "kill", "coon", "penis-breath",
    "kyke", "heshe", "homo", "tawdry", "pissing", "cumshot", "motherfucker", "menstruation", "n1gr", "rectus", "oral", "twats",
    "scrot", "God damn", "jerk", "nigga", "motherfuckin", "kawk", "homey", "hooters", "rump", "dickheads", "scrud",
    "fist fuck", "carpet muncher", "cipa", "cocaine", "fanyy", "frigga", "massa", "5h1t", "brassiere", "inbred",
    "spooge", "shitface", "tush", "Fuken", "boiolas", "fuckass", "wop*", "cuntlick", "fucker", "bodily", "bullshits", "hom0",
    "sumofabiatch", "jackass", "dilld0", "puuke", "cums", "pakie", "cock-sucker", "pubic", "pron", "puta", "penas", "weiner",
    "vaj1na", "mthrfucker", "souse", "loin", "clitoris", "f.ck", "dickface", "rectal", "whored", "bookie", "chota bags",
    "sh!t", "pornography", "spick", "seamen", "Phukker", "beef curtain", "eat hair pie", "mother fucker", "faigt", "yeasty",
    "Clit", "kraut", "CockSucker", "Ekrem*", "screwing", "scrote", "fubar", "knob end", "sleazy", "dickwhipper", "ass fuck",
    "fellate", "lesbos", "nobjokey", "dogging", "fuck hole", "hymen", "damn", "dego", "sphencter", "queef*", "gaylord", "va1jina", "a$$", "fuck", "douchebag", "blowjob", "mibun", "fucking", "dago", "heroin", "tw4t", "raper", "muff", "fitt*", "wetback*", "mo-fo", "fuk*",
    "klootzak", "sux", "damnit", "pimmel", "assh0lez", "cntz", "fux", "gonads", "bullshit", "nigg3r", "fack", "weewee", "shi+", "shithead", "pecker", "Shytty", "wh0re", "a2m", "kkk", "penetration", "kike", "naked", "kooch", "ejaculation", "bang", "hoare", "jap", "foad",
    "queef", "buttwipe", "Shity", "dildo", "dickripper", "crackwhore", "beaver", "kum", "sh!+", "qweers", "cocksuka", "sexy", "masterbating", "peeenus", "gays", "cocksucks", "b17ch", "nad", "j3rk0ff", "fannyflaps", "God-damned", "masterbate", "erotic", "sadism", "turd",
    "flipping the bird", "schizo", "whiz", "fagg1t", "cop some wood",
    "banger", "Shyty", "f you", "scag", "soused", "scank", "clitorus", "kumming", "quim", "penis", "bestial", "bimbo", "gfy", "spiks", "shitings", "phuking", "paddy", "mulkku", "anal leakage", "bestiality", "smegma", "bull shit", "pillu*", "schmuck", "cuntsicle", "fistfucker",
    "shitdick", "dirsa", "m0f0", "Fukkin", "testis", "ejaculatings", "phuq", "Shitty", "crap", "hooker", "niggaz", "fucknut", "cyalis", "anus", "crabs", "asswipes", "cameltoe", "cuntlicking", "cuntz", "corksucker", "peepee", "thug", "jiz", "gayz", "fag*", "cumstain", "nepesaurio",
    "dike*", "8ss", "shited", "snatch", "dick shy", "opiate", "butthole", "whores", "boner", "pimpis", "motherfuckka", "slut", "testee", "futkretzn", "mothafucka", "cyberfuckers", "cuntlicker", "adult", "tramp", "blumpkin", "fannyfucker", "beotch", "flange", "dik", "dildos", "nipple",
    "queers", "boink", "shamedame", "shitty", "tits", "felching", "felcher", "gangbangs", "punkass", "orgasims", "kunt", "boob", "sniper", "pussee", "pussys", "cunillingus", "pula", "50 yard cunt punt", "wad", "s t f u", "jism", "Felcher", "son-of-a-bitch", "shitty", "cocksucked", "faen",
    "basterds", "heeb", "hebe", "n1gga", "phallic", "pube", "fck", "cunt hair",
    "fatass", "cunthunter", "prig", "Phuck", "dickbag", "titi", "Fukken", "balls", "pissers", "gooks", "muff puff", "ballbag", "eat a dick", "clit", "kyrpa*", "knobed", "penetrate", "ballsack", "ejakulate", "c0cks", "bowels", "f u c k", "suka", "Fudge Packer", "hui", "buttfucker", "goatse", "smut",
    "bosom", "Fukah", "pastie", "assholz", "boooobs", "l3itch", "lezbo", "godamnit", "fuckheads", "g-spot", "niggers", "w00se", "wichser", "v14gra", "orgasmic", "hitler", "helvete", "snuff", "master-bate", "motherfuck", "bust a load", "sissy", "s-h-i-t", "steamy", "sucking", "damned", "pricks", "fukkin",
    "willies", "erect", "knulle", "fistfuck", "pisses", "toots", "bone", "tinkle", "punky", "nads", "goddamn", "pimp", "arian", "frigg", "f uck", "jack-off", "vomit", "butt", "peyote", "muie", "lust", "dickdipper", "goddammit", "racy", "v1gra", "orgasm", "nazism", "flog the log", "buttfuck", "clitty", "dumass", "Poonani",
    "fondle", "amateur", "Mutha Fucker", "faggit", "bitching", "cocksuck", "Phuk", "puto", "corp whore", "kinky", "japs", "Mother Fukah", "pussy", "monkleigh", "muthafucker", "cocks", "h0mo", "fuckme", "dumbasses", "ejaculated", "carpetmuncher", "pollock", "bollocks", "honkey", "bitchers",
    "a s s", "shitt", "pigfucker", "lusty", "sleaze", "teabagging", "mothafucking", "qweir", "pawn", "twunt", "skurwysyn", "motherfucking", "muthrfucking", "gassy ass", "dominatrics", "pantie", "masterbations", "hookah", "bimbos", "a$$hole", "loins", "c-0-c-k", "fvck", "slave", "masterb8", "hore", "cockface", "sh1t", "cum guzzler",
    "how to kill", "muschi", "sluts", "fook", "pr1ck", "knobjokey", "t1tt1e5", "niggas", "packi", "mothafucked", "lesbian", "bitch", "gangbang", "muthafuckker", "booooobs", "undies", "gay", "goldenshower", "cockhead", "quicky", "vulva", "junkie", "shemale", "gai", "shiting", "c-u-n-t", "beastial", "vodka", "lezbos", "sh!t*", "beardedclam",
    "bitched", "skankee", "stiffy", "spac", "scroat", "beatch", "d*ck", "Fukkah", "fisted", "buceta", "dominatricks", "revue", "arsehole", "pot", "dawgie-style", "assfukka", "packy", "ash0le", "fuckwhit", "tosser", "bangbros", "lesbo", "pierdol*", "cuntface", "asswipe", "kondum", "kuntz", "blowjobs", "felch", "Shyt", "ovum", "stfu", "jerk0ff",
    "bastardz", "spic", "jackoff", "fisty", "chodes", "bellend", "orgasim", "s-o-b", "muffdiver", "fagged", "diddle", "slut bucket", "wench", "kikes", "moron", "doofus", "dinks", "guiena", "ar5e", "mothafuckin",
    "hotsex", "womb", "cocain", "c.0.c.k", "birdlock", "stoned", "nazi", "ficken", "beastiality", "pussy fart", "sodom", "jerked", "tubgirl", "opium", "Fu(*", "mthrfucking", "fuck-ass", "phukking", "Lipshitz", "hootch", "bung", "fucknugget", "fingerfuckers", "shitting", "douchebags", "reetard", "testes", "dipship", "bitch tit", "jisim",
    "poop", "fucktard", "tittywank", "fanculo", "busty", "faggs", "valium","fuck", "fucks", "fuk", "murder", "s-h-1-t", "crack", "hussy", "orafis", "mothafuckings", "kooches", "vixen", "dimwit", "extasy", "herpes", "hoorem whore", "tard", "wang", "foobar", "xrated", "c.o.c.k.", "sharmute", "h0m0", "ass-hole", "cum", "cervix", "azz", "ham flap", "pillowbiter",
    "nappy", "orifiss", "s.h.i.t.", "knobead", "assbangs", "hooter", "Lipshits", "fucktoy", "faigs", "ayir", "bunny fucker", "scantily", "cokmuncher", "menstruate", "bullturds", "enlargement", "herp", "scum", "semen", "gonad", "dyke", "knob", "woody", "m-fucking", "cumdump", "ninny", "bukkake", "rtard", "dingle", "uterus", "pissed", "teets", "jizzed", "arse",
    "lezbians", "assmunch", "rapist", "fag1t", "h0r", "bitchy", "napalm", "fagging", "glans", "fuckin", "testicle", "rum", "Mother Fukker", "preteen", "cunt", "bullshitted", "fooker", "lezzie", "vittu", "strip", "cawks", "shithouse", "bloody", "queaf", "t1t", "shitfull", "cunilingus", "anilingus", "ovums", "skank", "bitchin", "fagot", "scrog", "mothafuckas", "dziwka",
    "asholes", "whoar", "wank*", "Mutha Fukah", "h0ar", "cummer", "clusterfuck", "cunt-struck", "cummin", "bootie", "dicksipper", "whore", "homoey", "whoring", "douche", "poontang", "blow me", "kums", "ruski", "Fukk", "need the dick", "schlampe", "d!ck", "cok", "piss", "dild0s", "faggot", "blow mud", "fuckers", "shit fucker", "f_u_c_k", "s hit", "lesbians", "jizm",
    "enculer", "fagg", "fuck puppet", "dick-ish", "mofo", "hardcoresex", "maxi", "shitter", "ejaculate","2-faced", "2-faces", "abnormal", "abolish", "abominable", "abominably", "abominate", "abomination", "abort", "aborted", "aborts", "abrade", "abrasive", "abrupt", "abruptly", "abscond", "absence", "absent-minded", "absentee", "absurd", "absurdity", "absurdly", "absurdness",
     "abuse", "abused", "abuses", "abusive", "abysmal", "abysmally", "abyss", "accidental", "accost", "accursed", "accusation", "accusations", "accuse", "accuses", "accusing", "accusingly", "acerbate", "acerbic", "acerbically", "ache", "ached", "aches", "achey", "aching", "acrid", "acridly", "acridness", "acrimonious", "acrimoniously", "acrimony", "adamant", "adamantly", 
     "addict", "addicted", "addicting", "addicts", "admonish", "admonisher", "admonishingly", "admonishment", "admonition", "adulterate", "adulterated", "adulteration", "adulterier", "adversarial", "adversary", "adverse", "adversity", "afflict", "affliction", "afflictive", "affront", "afraid", "aggravate", "aggravating", "aggravation", "aggression", "aggressive", "aggressiveness", 
     "aggressor", "aggrieve", "aggrieved", "aggrivation", "aghast", "agonies", "agonize", "agonizing", "agonizingly", "agony", "aground", "ail", "ailing", "ailment", "aimless", "alarm", "alarmed", "alarming", "alarmingly", "alienate", "alienated", "alienation", "allegation", "allegations", "allege", "allergic", "allergies", "allergy", "aloof", "altercation", "ambiguity", "ambiguous", 
     "ambivalence", "ambivalent", "ambush", "amiss", "amputate", "anarchism", "anarchist", "anarchistic", "anarchy", "anemic", "anger", "angrily", "angriness", "angry", "anguish", "animosity", "annihilate", "annihilation", "annoy", "annoyance", "annoyances", "annoyed", "annoying", "annoyingly", "annoys", "anomalous", "anomaly", "antagonism", "antagonist", "antagonistic", "antagonize", 
     "anti-", "anti-american", "anti-israeli", "anti-occupation", "anti-proliferation", "anti-semites", "anti-social", "anti-us", "anti-white", "antipathy", "antiquated", "antithetical", "anxieties", "anxiety", "anxious", "anxiously", "anxiousness", "apathetic", "apathetically", "apathy", "apocalypse", "apocalyptic", "apologist", "apologists", "appal", "appall", "appalled", "appalling", 
     "appallingly", "apprehension", "apprehensions", "apprehensive", "apprehensively", "arbitrary", "arcane", "archaic", "arduous", "arduously", "argumentative", "arrogance", "arrogant", "arrogantly", "ashamed", "asinine", "asininely", "asinininity", "askance", "asperse", "aspersion", "aspersions", "assail", "assassin", "assassinate", "assault", "assult", "astray", "asunder",
      "atrocious", "atrocities", "atrocity", "atrophy", "attack", "attacks", "audacious", "audaciously", "audaciousness", "audacity", "audiciously", "austere", "authoritarian", "autocrat", "autocratic", "avalanche", "avarice", "avaricious", "avariciously", "avenge", "averse", "aversion", "aweful", "awful", "awfully", "awfulness", "awkward", "awkwardness", "ax", "babble", "back-logged",
       "back-wood", "back-woods", "backache", "backaches", "backaching", "backbite", "backbiting", "backward", "backwardness", "backwood", "backwoods", "bad", "badly", "baffle", "baffled", "bafflement", "baffling", "bait", "balk", "banal", "banalize", "bane", "banish", "banishment", "bankrupt", "barbarian", "barbaric", "barbarically", "barbarity", "barbarous", "barbarously", "barren",
        "baseless", "bash", "bashed", "bashful", "bashing", "bastard", "bastards", "battered", "battering", "batty", "bearish", "beastly", "bedlam", "bedlamite", "befoul", "beg", "beggar", "beggarly", "begging", "beguile", "belabor", "belated", "beleaguer", "belie", "belittle", "belittled", "belittling", "bellicose", "belligerence", "belligerent", "belligerently", "bemoan", "bemoaning", "bemused", 
        "bent", "berate", "bereave", "bereavement", "bereft", "berserk", "beseech", "beset", "besiege", "besmirch", "bestial", "betray", "betrayal", "betrayals", "betrayer", "betraying", "betrays", "bewail", "beware", "bewilder", "bewildered", "bewildering", "bewilderingly", "bewilderment", "bewitch", "bias", "biased", "biases", "bicker", "bickering", "bid-rigging", "bigotries", "bigotry", "bitch", 
        "bitchy", "biting", "bitingly", "bitter", "bitterly", "bitterness", "bizarre", "blab", "blabber", "blackmail", "blah", "blame", "blameworthy", "bland", "blandish", "blaspheme", "blasphemous", "blasphemy", "blasted", "blatant", "blatantly", "blather", "bleak", "bleakly", "bleakness", "bleed", "bleeding", "bleeds", "blemish", "blind", "blinding", "blindingly", "blindside", "blister", "blistering", 
        "bloated", "blockage", "blockhead", "bloodshed", "bloodthirsty", "bloody", "blotchy", "blow", "blunder", "blundering", "blunders", "blunt", "blur", "bluring", "blurred", "blurring", "blurry", "blurs", "blurt", "boastful", "boggle", "bogus", "boil", "boiling", "boisterous", "bomb", "bombard", "bombardment", "bombastic", "bondage", "bonkers", "bore", "bored", "boredom", "bores", "boring", "botch", 
        "bother", "bothered", "bothering", "bothers", "bothersome", "bowdlerize", "boycott", "braggart", "bragger", "brainless", "brainwash", "brash", "brashly", "brashness", "brat", "bravado", "brazen", "brazenly", "brazenness", "breach", "break", "break-up", "break-ups", "breakdown", "breaking", "breaks", "breakup", "breakups", "bribery", "brimstone", "bristle", "brittle", "broke", "broken",
         "broken-hearted", "brood", "browbeat", "bruise", "bruised", "bruises", "bruising", "brusque", "brutal", "brutalising", "brutalities", "brutality", "brutalize", "brutalizing", "brutally", "brute", "brutish", "bs", "buckle", "bug", "bugging", "buggy", "bugs", "bulkier", "bulkiness", "bulky", "bulkyness", "bull****", "bull----", "bullies", "bullshit", "bullshyt", "bully", "bullying", "bullyingly", "bum", "bump",
          "bumped", "bumping", "bumpping", "bumps", "bumpy", "bungle", "bungler", "bungling", "bunk", "burden", "burdensome", "burdensomely", "burn", "burned", "burning", "burns", "bust", "busts", "busybody", "butcher", "butchery",
          "busybody", "butcher", "butchery", "buzzing", "byzantine", "cackle", "calamities", "calamitous", "calamitously", "calamity", "callous", "calumniate", "calumniation", "calumnies", "calumnious", "calumniously", "calumny", "cancer", "cancerous", "cannibal", "cannibalize", "capitulate", "capricious", "capriciously", "capriciousness", "capsize", "careless", "carelessness", "caricature", "carnage", "carp", "cartoonish",
           "cash-strapped", "castigate", "castrated", "casualty", "cataclysm", "cataclysmal", "cataclysmic", "cataclysmically", "catastrophe", "catastrophes", "catastrophic", "catastrophically", "catastrophies", "caustic", "caustically", "cautionary", "cave", "censure", "chafe", "chaff", "chagrin", "challenging", "chaos", "chaotic", "chasten", "chastise", "chastisement", "chatter", "chatterbox", "cheap", "cheapen", "cheaply", 
           "cheat", "cheated", "cheater", "cheating", "cheats", "checkered", "cheerless", "cheesy", "chide", "childish", "chill", "chilly", "chintzy", "choke", "choleric", "choppy", "chore", "chronic", "chunky", "clamor", "clamorous", "clash", "cliche", "cliched", "clique", "clog", "clogged", "clogs", "cloud", "clouding", "cloudy", "clueless", "clumsy", "clunky", "coarse", "cocky", "coerce", "coercion", "coercive", "cold", "coldly", 
           "collapse", "collude", "collusion", "combative", "combust", "comical", "commiserate", "commonplace", "commotion", "commotions", "complacent", "complain", "complained", "complaining", "complains", "complaint", "complaints", "complex", "complicated", "complication", "complicit", "compulsion", "compulsive", "concede", "conceded", "conceit", "conceited", "concen", "concens", "concern", "concerned", "concerns", "concession",
            "concessions", "condemn", "condemnable", "condemnation", "condemned", "condemns", "condescend", "condescending", "condescendingly", "condescension", "confess", "confession", "confessions", "confined", "conflict", "conflicted", "conflicting", "conflicts", "confound", "confounded", "confounding", "confront", "confrontation", "confrontational", "confuse", "confused", "confuses", "confusing", "confusion", "confusions", "congested", 
            "congestion", "cons", "conscons", "conservative", "conspicuous", "conspicuously", "conspiracies", "conspiracy", "conspirator", "conspiratorial", "conspire", "consternation", "contagious", "contaminate", "contaminated", "contaminates", "contaminating", "contamination", "contempt", "contemptible", "contemptuous", "contemptuously", "contend", "contention", "contentious", "contort", "contortions", "contradict", "contradiction",
             "contradictory", "contrariness", "contravene", "contrive", "contrived", "controversial", "controversy", "convoluted", "corrode", "corrosion", "corrosions", "corrosive", "corrupt", "corrupted", "corrupting", "corruption", "corrupts", "corruptted", "costlier", "costly", "counter-productive", "counterproductive", "coupists", "covetous", "coward", "cowardly", "crabby", "crack", "cracked", "cracks", "craftily", "craftly", "crafty", 
             "cramp", "cramped", "cramping", "cranky", "crap", "crappy", "craps", "crash", "crashed", "crashes", "crashing", "crass", "craven", "cravenly", "craze", "crazily", "craziness", "crazy", "creak", "creaking", "creaks", "credulous", "creep", "creeping", "creeps", "creepy", "crept", "crime", "criminal", "cringe", "cringed", "cringes", "cripple", "crippled", "cripples", "crippling", "crisis", "critic", "critical", "criticism", "criticisms",
              "criticize", "criticized", "criticizing", "critics", "cronyism", "crook", "crooked", "crooks", "crowded", "crowdedness", "crude", "cruel", "crueler", "cruelest", "cruelly", "cruelness", "cruelties", "cruelty", "crumble", "crumbling", "crummy", "crumple", "crumpled", "crumples", "crush", "crushed", "crushing", "cry", "culpable", "culprit", "cumbersome", "cunt", "cunts", "cuplrit", "curse", "cursed", "curses", "curt", "cuss", "cussed",
               "cutthroat", "cynical", "cynicism", "d*mn", "damage", "damaged", "damages", "damaging", "damn", "damnable", "damnably", "damnation", "damned", "damning", "damper", "danger", "dangerous", "dangerousness", "dark", "darken", "darkened", "darker", "darkness", "dastard", "dastardly", "daunt", "daunting", "dauntingly", "dawdle", "daze", "dazed", "dead", "deadbeat", "deadlock", "deadly", "deadweight", "deaf", "dearth", "death", "debacle",
                "debase", "debasement", "debaser", "debatable", "debauch", "debaucher", "debauchery", "debilitate", "debilitating", "debility", "debt", "debts", "decadence", "decadent", "decay", "decayed", "deceit", "deceitful", "deceitfully", "deceitfulness", "deceive", "deceiver", "deceivers", "deceiving", "deception", "deceptive", "deceptively", "declaim", "decline", "declines", "declining", "decrement", "decrepit", "decrepitude", "decry", "defamation",
                 "defamations", "defamatory", "defame", "defect", "defective", "defects", "defensive", "defiance", "defiant", "defiantly", "deficiencies", "deficiency", "deficient", "defile", "defiler", "deform", "deformed", "defrauding", "defunct", "defy", "degenerate", "degenerately", "degeneration", "degradation", "degrade", "degrading", "degradingly", "dehumanization", "dehumanize", "deign", "deject", "dejected", "dejectedly", "dejection", "delay", 
                 "delayed", "delaying", "delays", "delinquency", "delinquent", "delirious", "delirium", "delude", "deluded", "deluge", "delusion", "delusional", "delusions", "demean", "demeaning", "demise", "demolish", "demolisher", "demon", "demonic", "demonize", "demonized", "demonizes", "demonizing", "demoralize", "demoralizing", "demoralizingly", "denial", "denied", "denies", "denigrate", "denounce", "dense", "dent", "dented", "dents", "denunciate", 
                 "denunciation", "denunciations", "deny", "denying", "deplete", "deplorable", "deplorably", "deplore", "deploring", "deploringly", "deprave", "depraved", "depravedly", "deprecate", "depress", "depressed", "depressing", "depressingly", "depression", "depressions", "deprive", "deprived", "deride", "derision", "derisive", "derisively", "derisiveness", "derogatory", "desecrate", "desert", "desertion", "desiccate", "desiccated", "desititute", 
                 "desolate", "desolately", "desolation", "despair", "despairing", "despairingly", "desperate", "desperately", "desperation"
];
  

function filterContent() {
    const tweets = document.querySelectorAll('article:not([data-filtered])');

    tweets.forEach(tweet => {
        tweet.setAttribute('data-filtered', 'true');

        const tweetText = tweet.textContent.toLowerCase();
        const normalizedText = tweetText.replace(/['"]/g, ' ');
        const tweetWords = normalizedText
            .replace(/[.,!?;:()\[\]{}]/g, ' ')  // Replace punctuation with spaces
            .split(/\s+/)                        // Split on whitespace
            .map(word => word.toLowerCase())     // Convert to lowercase
            .filter(word => word.length > 0); 
        console.log('Detected words:', tweetWords);
        const hasToxicWord = toxicWords.some(toxicWord => 
            tweetWords.includes(toxicWord.toLowerCase().trim())
        );

        if (hasToxicWord) {
            const container = document.createElement('div');
            container.style.position = 'relative';
            tweet.parentNode.insertBefore(container, tweet);

            const warning = document.createElement('div');
            warning.className = 'content-warning';
            warning.style.minHeight = '300px'; // Increased minimum height
            warning.innerHTML = `
                <div style="
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    padding: 40px;
                    background: linear-gradient(145deg, rgb(32, 35, 39), rgb(25, 28, 32));
                    border-radius: 24px;
                    color: rgb(247, 249, 249);
                    text-align: center;
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                ">
                    <svg style="width: 48px; height: 48px; margin-bottom: 24px; fill: white;" viewBox="0 0 24 24">
  <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>
</svg>
                    <div style="
                        margin-bottom: 24px;
                        font-weight: 700;
                        font-size: 24px;
                        letter-spacing: 0.5px;
                        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                    ">
                        SENSITIVE CONTENT WARNING
                    </div>
                    <p style="
                        margin-bottom: 32px;
                        color: rgba(247, 249, 249, 0.8);
                        font-size: 16px;
                        line-height: 1.5;
                    ">
                        This content may contain sensitive material. 
                        Would you like to view it?
                    </p>
                    <button class="view-button" style="
                        background: rgb(239, 243, 244);
                        color: rgb(15, 20, 25);
                        border: none;
                        border-radius: 9999px;
                        padding: 12px 32px;
                        font-weight: 600;
                        cursor: pointer;
                        font-size: 16px;
                        transition: all 0.2s ease;
                        transform: translateY(0);
                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                    ">
                        Tap to view
                    </button>
                </div>
            `;

            const hideButton = document.createElement('button');
            hideButton.textContent = 'Hide content';
            hideButton.style.cssText = `
                position: absolute;
                top: 12px;
                right: 12px;
                background: rgba(239, 243, 244, 0.9);
                color: rgb(15, 20, 25);
                border: none;
                border-radius: 9999px;
                padding: 8px 24px;
                font-weight: 600;
                cursor: pointer;
                font-size: 14px;
                transition: all 0.2s ease;
                backdrop-filter: blur(4px);
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                display: none;
            `;

            container.appendChild(warning);
            container.appendChild(tweet);
            container.appendChild(hideButton);

            tweet.style.display = 'none';

            const viewButton = warning.querySelector('.view-button');

            viewButton.addEventListener('click', () => {
                warning.style.display = 'none';
                tweet.style.display = 'block';
                hideButton.style.display = 'block';
            });

            hideButton.addEventListener('click', () => {
                warning.style.display = 'block';
                tweet.style.display = 'none';
                hideButton.style.display = 'none';
            });

            // Enhanced hover effects
            viewButton.addEventListener('mouseover', () => {
                viewButton.style.backgroundColor = 'rgb(215, 219, 220)';
                viewButton.style.transform = 'translateY(-2px)';
                viewButton.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.15)';
            });

            viewButton.addEventListener('mouseout', () => {
                viewButton.style.backgroundColor = 'rgb(239, 243, 244)';
                viewButton.style.transform = 'translateY(0)';
                viewButton.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            });

            // Hide button hover effects
            hideButton.addEventListener('mouseover', () => {
                hideButton.style.backgroundColor = 'rgba(215, 219, 220, 0.9)';
                hideButton.style.transform = 'translateY(-1px)';
            });

            hideButton.addEventListener('mouseout', () => {
                hideButton.style.backgroundColor = 'rgba(239, 243, 244, 0.9)';
                hideButton.style.transform = 'translateY(0)';
            });
        }
    });
}

// Run initial filter
filterContent();

// Setup lightweight observer with debouncing
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const debouncedFilter = debounce(filterContent, 500);

const observer = new MutationObserver(debouncedFilter);
observer.observe(document.body, {
    childList: true,
    subtree: true
});