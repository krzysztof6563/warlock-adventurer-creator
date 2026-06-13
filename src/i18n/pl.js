export default {
    home_view: {
        greeting: "Witaj w generatorze postaci do systemu Warlock!",
        saved_characters: "Zapisane postacie",
        no_saved_characters: "Brak zapisanych postaci.",
    },
    new_character: "Nowa postać",
    save_character: "Zapisz postać",
    character_saved: "Postać została zapisana.",
    delete_character: "Usuń postać",
    name: "imię",
    profession_label: "profesja",
    choose: "wybierz",
    skill: {
        athletics: "atletyka",
        stablekeeping: "masztalerstwo",
        polearms: "broń drzewcowa",
        repair: "naprawa",
        brawling: "bijatyka",
        firearms: "broń spustowa",
        perception: "dostrzeganie",
        leadership: "dowodzenie",
        large_blades: "duże ostrza",
        diplomacy: "dyplomacja",
        history: "historia",
        identification: "identyfikacja",
        incantation: "inkantacja",
        linguistics: "językoznawstwo",
        camouflage: "kamuflaż",
        deception: "kłamstwo",
        bows: "łuki",
        small_blades: "małe ostrza",
        medicine: "medycyna",
        navigation: "nawigacja",
        bludgeons: "obuchy",
        persuasion: "perswazja",
        swimming: "pływanie",
        throwing: "rzucanie",
        stealth: "skradanie",
        survival: "sztuka przetrwania",
        bargaining: "targowanie",
        streetwise: "ulicznictwo",
        dodge: "unik",
        resolve: "upór",
        intimidation: "zastraszanie",
        sleight_of_hand: "zwinne dłonie",
    },
    profession: {
        acolyte: "akolita",
        outlaw: "banita",
        circus_performer: "cyrkowiec",
        boatman: "flisak",
        storyteller: "gawędziarz",
        miner: "górnik",
        gambler: "hazardzista",
        grave_robber: "hiena cmentarna",
        bounty_hunter: "łowca nagród",
        crypt_raider: "łupieżca krypt",
        mercenary: "najemnik",
        bodyguard: "ochroniarz",
        agitator: "podżegacz",
        brigand: "rozbójnik",
        road_warden: "strażnik dróg",
        city_guard: "strażnik miejski",
        rat_catcher: "szczurołap",
        noble: "szlachcic",
        tracker: "tropiciel",
        wizard_apprentice: "uczeń czarodzieja",
        traveling_merchant: "wędrowny handlarz",
        thief: "złodziej",
        beggar: "żebrak",
        soldier: "żołnierz",
        astrologer: "astrolog",
        sewer_worker: "kanalarz",
        pastry_master: "mistrz ciast",
        clan_guard: "strażnik rodu",
        tunnel_warrior: "wojownik tunelowy",
        inventor: "wynalazca",
        mudlark: "błotołaz",
        docker: "doker",
        innkeeper: "oberżysta",
        fisherman: "rybak",
        servant: "sługa",
        night_watchman: "strażnik nocny",
    },
    society: {
        human: "człowiek",
        elf: "elf",
        dwarf: "krasnolud",
        halfling: "niziołek",
    },
    warlock: {
        talents: {
            antimagic: {
                key: "Antymagiczny",
                description:
                    "Z jakiegoś powodu magia odbija się od twojego ciała. Zawsze możesz wykonać test inkantacji, by uchronić się przed zaklęciem.Jeśli jednak sam rzucasz zaklęcie, każdy nieudany test inkantacji traktowany jest jako utrata kontroli nad zaklęciem.",
            },
            attractiveness: {
                key: "Atrakcyjność",
                description:
                    "Ludzie rumienią się na twój widok. Automatycznie zali- czasz testy targowania lub perswazji, jeśli osoba, z któ- rą rozmawiasz, może być tobą zauroczona. Jeśli nie ma pewności, jak postać zareaguje, to Mistrz Gry wykonuje rzut k6 i przy wyniku 4-6 ofiara jest zauroczona.",
            },
            unscarred: {
                key: "Bez rysów",
                description: "Ludzie mają problem, by cię zapamiętać i opisać.",
            },
            insomnia: {
                key: "Bezsenność",
                description:
                    "Możesz wykonywać testy dostrzegania nawet podczas snu oraz natychmiast się obudzić i działać.",
            },
            businessman: {
                key: "Biznesmen",
                description:
                    "Kłócisz się z handlarzami do upadłego. Zawsze odejmujesz 1 od wyniku rzutu na cenę przedmiotu. Jeśli wypadłoby w związku z tym 0, prowadzący rzuca jeszcze raz, lecz na niższy typ monet (złoto → srebro → miedziaki).",
            },
            scar: {
                key: "Blizna",
                description:
                    "Masz potężną bliznę na twarzy. Łatwiej ci zastraszać (+2), lecz ciężej prowadzić normalne rozmowy (-2).",
            },
            lightning_reflexes: {
                key: "Błaskawiczny refleks",
                description: "Zawsze możesz poruszyć się pierwszy w rundzie walki, chyba że zostałeś zaskoczony.",
            },
            human_bed: {
                key: "Człowiek-łóżko",
                description: "Potrafisz spać wszędzie. Zawsze budzisz się wyspany i naładowany energią.",
            },
            keen_hearing: {
                key: "Czuły słuch",
                description:
                    "Możesz wsłuchiwać się w dalekie szepty i rozmowy, nawet za drzwiami, wykonując testy dostrzegania.",
            },
            innate_spell: {
                key: "Wrodzone zaklęcie",
                description:
                    "Od urodzenia potrafisz rzucać jedno wybrane zaklęcie. Nadal wymaga testu inkantacji i poświęcenia wytrzymałości.",
            },
            perfect_memory: {
                key: "Doskonała pamięć",
                description:
                    "Zawsze zapamiętujesz wszystko, co widziałeś lub przeczytałeś. Za wsze zapamiętu jesz wszystko, co widziałeś lub przeczytałeś. Możesz też rzucać zaklęcia z pamięci bez po trzeby posiadania tekstu z zaklęciem, lecz każde nie udane splatanie przy takim czarowaniu skutkuje gniewem zaświatów. Każde nieudane splatanie przy takim czarowaniu skutkuje gniewem zaświatów.",
            },
            thick_skin: {
                key: "Gruba skóra",
                description: "Redukujesz otrzymane obrażenia obuchowe o 1.",
            },
            rubber_body: {
                key: "Gumowe ciało",
                description: "Potrafisz wyginać kończyny w niezwykły sposób i przeciskać się przez szczeliny.",
            },
            killer_instinct: {
                key: "Instynkt zabójcy",
                description: "+2 do wyników ataków krytycznych, które wyprowadzasz.",
            },
            hawk: {
                key: "Jastrząb",
                description: "Masz niezwykle dobry wzrok. Nie otrzymujesz kar za strzał na duży dystans.",
            },
            cockroach: {
                key: "Karaluch",
                description:
                    "Zawsze potrafisz uniknąć zagrożenia. Podczas walki w beznadziejnej sytuacji możesz wykonać test Szczęścia i nagle zniknąć.",
            },
            cat_eyes: {
                key: "Kocie oczy",
                description: "Widzisz dobrze w ciemności; krasnolud/elf widzi w kompletnym mroku.",
            },
            inner_compass: {
                key: "Kompas w głowie",
                description: "Zawsze wiesz, gdzie jest północ i nie możesz się zgubić.",
            },
            stone_hands: {
                key: "Łapy z kamienia",
                description: "Twoje ręce i nogi traktowane są jak broń zadająca 1k6 obrażeń.",
            },
            dark_destiny: {
                key: "Mroczne przeznaczenie",
                description:
                    "Masz dziwny znak na ciele. Raz umrzesz i wrócisz, ale jeśli nie wykonasz polecenia istoty, która opętała Twoje ciało, tracisz na stałe 3 Wytrzymałości.",
            },
            unkillable: {
                key: "Nie do zabicia",
                description: "Obniżasz krytyczne obrażenia od ataków o 2. Ignorujesz wynik 1 lub mniej.",
            },
            ambidexterity: {
                key: "Oburęczność",
                description:
                    "Możesz nosić dwie bronie jednocześnie. Jeśli walczysz za pomocą sztyletu w jednej ręce i bronią jednoręczną w drugiej, możesz zaatakować bez premii +5 do rzutu. Jeśli trafisz, rzucasz na obrażenia obu broni i dodajesz je do siebie.",
            },
            paranoia: {
                key: "Paranoja",
                description: "Nie można cię w żaden sposób zaskoczyć, zawsze czujesz, że coś jest nie tak.",
            },
            animal_friend: {
                key: "Przyjaciel zwierząt",
                description: "Świetnie dogadujesz się ze zwierzętami. Nie atakują cię, chyba że je sprowokujesz.",
            },
            friendly_face: {
                key: "Przyjazna twarz",
                description: "Nieprzyjaźni traktują cię neutralnie, a neutralni przyjaźnie.",
            },
            strong_arm: {
                key: "Silne ramię",
                description: "+1 do obrażeń zadawanych wręcz.",
            },
            rascal: {
                key: "Skurczybyk",
                description: "Jesteś w stanie wiele wytrzymać. Wytrzymałość podniesiona o 4.",
            },
            aptitude: {
                key: "Smykałka",
                description:
                    "Wybierz jedną umiejętność. Zawsze możesz ją rozwijać niezależnie od profesji podstawowej.",
            },
            prophetic_dreams: {
                key: "Prorocze sny",
                description:
                    "Męczą cię prorocze sny i koszmary. Raz na sesję MG może podmienić twój nieudany test na test Szczęścia.",
            },
            specialist: {
                key: "Specjalista",
                description: "Chcesz być najlepszy w fachu. +2 do umiejętności wszystkich twoich profesji.",
            },
            iron_stomach: {
                key: "Stalowy żołądek",
                description: "Potrafisz zjeść wszystko i trucizna niewiele ci robi. Możesz zjeść zgniły pokarm.",
            },
            quick_feet: {
                key: "Szybkie stopy",
                description: "W walce możesz ruszyć się o jeden zasięg i nadal wykonać akcję (bez sprintu).",
            },
            armor_training: {
                key: "Trening pancerza",
                description: "Dodaj +1 do wartości każdego pancerza, który nosisz.",
            },
            natural_marksman: {
                key: "Urodzony strzelec",
                description: "+1 do obrażeń zadawanych na dystans.",
            },
            luck_of_the_gods: {
                key: "Szczęście bogów",
                description: "Od urodzenia masz farta. Szczęście podniesione o 2.",
            },
            witch_sight: {
                key: "Wiedźmi wzrok",
                description: "Widzisz rzeczy niewidoczne dla normalnych ludzi: magię, duchy i demony.",
            },
            versatility: {
                key: "Wszechstronność",
                description:
                    "Wybierz trzy profesje podstawowe. Twoja umiejętność profesji nie może być mniejsza niż 4.",
            },
            quarry: {
                key: "Zdobycz",
                description:
                    "Masz dziwne przedmioty. Zaczynasz z dwoma przedmiotami wartymi 1k6 złota lub jednym za 2k6.",
            },
            connections: {
                key: "Znajomości",
                description:
                    "Znajdziesz wiele odpowiednich i przydatnych osób. Raz na sesję możesz wykonać test Szczęścia, by trafić na pomoc.",
            },
            evil_eye: {
                key: "Złe oko",
                description:
                    "Od kiedy tylko pamiętasz, potrafisz zesłać na kogoś klą- twę samym swoim wzrokiem. Raz na sesję, jeśli jakiemuś przeciwnikowi powiedzie się prosty lub przeciwstawny test, wykonaj test Szczęścia. Jeśli ci się powiedzie, test przeciwnika będzie nieudany.",
            },
        },
        looks: {
            height: {
                tiny: "Malutki",
                short: "Niski",
                average: "Średni",
                tall: "Wysoki",
                very_tall: "Bardzo wysoki",
                giant: "Olbrzym",
            },
            body_build: {
                bony: "Koścista",
                skinny: "Chuda",
                slim: "Szczupła",
                medium: "Średnia",
                stocky: "Krągła",
                massive: "Masywna",
            },
            skin: {
                clean: "Czysta",
                freckled: "Piegi",
                spotted: "Plamista",
                pox_marks: "Pozostałości po ospie",
                wrinkled: "Zmarszczki",
            },
            hair_color: {
                light: "Jasne",
                chestnut: "Kasztanowe",
                red: "Czerwone",
                black: "Czarne",
                gray: "Szare",
                white: "Białe",
            },
            hair_type: {
                dull: "Matowe",
                short: "Krótkie",
                curly: "Kręcone",
                wavy: "Falowane",
                straight: "Proste",
                greasy: "Tłuste",
            },
            hairstyle: {
                shaved_with_tattoo: "Zgolone + tatuaż",
                bowl_cut: "Garnek",
                tousled_locks: "Potargane loki",
                braid_or_braids: "Warkocz(e)",
                slicked_back: "Zaczesane",
                bun: "Kok",
            },
            facial_hair: {
                mighty_mustache: "Potężny wąs",
                goatee: "Tylko podbródek",
                oiled_beard: "Naoliwiona bródka",
                neck_beard: "Broda na karku",
                large_sideburns: "Duże bokobrody",
                split_beard: "Rozdzielona broda",
            },
        },
        misfortune: {
            death_hunts_you: {
                key: "Tropi cię śmierć",
                description:
                    "Jesteś przekonany, że śmierć we własnej osobie za tobą podąża. Jesteś niespokojny i nie potrafisz zostać w jednym miejscu na dłużej. Nawet jeśli aktualnie mieszkasz w mieście, cyklicznie zmieniasz swoje miejsce zamieszkania, by to „coś” cię nie dopadło.",
            },
            your_siblings_are_trouble: {
                key: "Twoje rodzeństwo to tragedia",
                description:
                    "Twój brat lub siostra to koszmar. Pojawiają się w najgorszym momencie, pozbywają cię pieniędzy i sprawiają problemy. Opowiedz Mistrzowi Gry, kto z twojego rodzeństwa sprawia kłopoty i kim jest. Oczekuj najgorszego, rodzina będzie twoją zgubą.",
            },
            under_a_dark_star: {
                key: "Spod mrocznej gwiazdy",
                description:
                    "Od urodzenia coś jest z tobą nie tak i gdy nadejdzie odpowiednia chwila, sam doprowadzisz do swojej zguby. Mistrz Gry ci o tym przypomni, gdy nadejdzie odpowiedni moment i gdy będziesz sądzić, że idzie ci świetnie...",
            },
            romantic_rival: {
                key: "Miłosny rywal",
                description:
                    "Miałeś kiedyś kochanka oraz rywala, który walczył o twoje serce. Kochanka już dawno nie ma, lecz rywal pozostał i jest dla ciebie udręką. Opisz, kim on jest.",
            },
            grave_mistake: {
                key: "Błąd",
                description:
                    "Popełniłeś w młodości błąd, bardzo poważny błąd, który wkrótce odbije się ze sporą mocą. Powiedz Mistrzowi Gry, co takiego uczyniłeś.",
            },
            bitter_revenge: {
                key: "Gorzka zemsta",
                description:
                    "Zostałeś niesłusznie skrzywdzony i do dzisiaj ta krzywda ciąży na tobie. Powiedz Mistrzowi Gry, co ci się stało i zaplanuj swoją okrutną zemstę.",
            },
            trauma: {
                key: "Trauma",
                description:
                    "Będąc dzieckiem, widziałeś coś bardzo okropnego i teraz, gdy wydarzy się coś podobnego, twoje okropne wspomnienia wracają. Powiedz Mistrzowi Gry, co widziałeś, a on powie, co może przywołać twoje wspomnienia.",
            },
            rotten_heart: {
                key: "Zgniłe serce",
                description:
                    "Twoje serce jest zepsute, a twoje znajomości zawsze kończą się dla drugiej strony źle. Prędzej czy później ludzie poznają się na tobie i obracają przeciwko tobie.",
            },
            great_joke: {
                key: "Wielki żart",
                description:
                    "Bogowie mają z ciebie ubaw. Raz na sesję cały wszechświat obraca się przeciwko tobie i dzieje się coś katastrofalnego. Bogowie się śmieją, lecz ty nie.",
            },
            resemblance: {
                key: "Podobieństwo",
                description:
                    "Wyglądasz jak ktoś znany w krainie. Opisz, kogo przypominasz. W najgorszych momentach ludzie mogą być przekonani, że jesteś tą osobą.",
            },
            unlucky_tattoo: {
                key: "Pechowy tatuaż",
                description:
                    "Zadawałeś się kiedyś z nieodpowiednimi osobami i pozostał ci po tym tatuaż. Teraz musisz go ukrywać, ponieważ może cię wpakować w kłopoty. Opisz, jaki masz tatuaż i co znaczy.",
            },
            bloodshot_eyes: {
                key: "Zakrwawione oczy",
                description:
                    "Przez problemy z oczami wyglądasz cały czas, jakbyś był pijany. Z tego powodu, nawet jeśli jesteś kompletnie trzeźwy, czasem ludzie mają problem z traktowaniem cię serio.",
            },
            idealist: {
                key: "Idealista",
                description:
                    "Absolutnie wierzysz w coś, czego wielu ludzi nawet nie bierze pod uwagę. Twoje poglądy ukształtowały twoje życie i często przyjęta ideologia przeszkadza ci w wykonywaniu niektórych rzeczy. Opisz, w co wierzysz, a Mistrz Gry to wykorzysta w przygodach i wystawi cię na próbę.",
            },
            lost_love: {
                key: "Utracona miłość",
                description:
                    "Miłość twojego życia cię odtrąciła i cały świat jest teraz dla ciebie szary i ponury. Często opowiadasz innym o swoim złamanym sercu i psujesz im humor. Nie cieszysz się również ze swoich sukcesów i nie świętujesz ich.",
            },
            birthmark: {
                key: "Znamię",
                description:
                    "Urodziłeś się ze znamieniem w dosyć widocznym miejscu (lecz nie na twarzy). Niestety przypomina coś, czego ludzie się boją (znak mrocznej magii, zakażenie, znamię podobne do tego, które posiada Król Bandytów).",
            },
            fire_fascination: {
                key: "Fascynacja ogniem",
                description:
                    "Nie potrafisz odwrócić oczu od ognia, czy to od obozowego ogniska, czy od płonącego domu. Nie doprowadzasz świadomie do pożarów, ale to dziwne, że zawsze, gdy jesteś blisko, dzieją się wypadki...",
            },
            bad_leg: {
                key: "Pechowa noga",
                description:
                    "Od urodzenia kulejesz na jedną nogę. Zazwyczaj nie sprawia problemów... ale lubi się odzywać, gdy akurat musisz uciekać.",
            },
            eternal_smile: {
                key: "Wieczny uśmiech",
                description:
                    "Urodziłeś się z twarzą, która wydaje się wiecznie uśmiechnięta i szczęśliwa. Ma to swoje plusy, lecz gdy ktoś w pobliżu nie jest w dobrym humorze lub jest wściekły, to zawsze najpierw obrywa się tobie.",
            },
            gift_of_tongue: {
                key: "Dar języka",
                description:
                    "Za dużo mówisz. Próbujesz tym ukryć swój stres, nienawidzisz ciszy lub lubisz swój głos. Mistrz Gry będzie o tym pamiętał i w końcu powiesz coś w niewłaściwym momencie.",
            },
            grim_destiny: {
                key: "Ponure przeznaczenie",
                description:
                    "Masz przeczucie, że stanie się w twoim życiu coś wielkiego i bardzo złego. A może stanie się to komuś bliskiemu? Mistrz Gry będzie o tym pamiętać i wkrótce poznasz swoje przeznaczenie.",
            },
        },
        keepsake: {
            miniature_family_portrait: {
                key: "Miniaturowy obraz członka rodziny",
                description: "Miniaturowy obraz członka twojej rodziny. Schowany w starym medaliku.",
            },
            blessed_figure: {
                key: "Posążek Trzykrotnie Błogosławionej",
                description: "Posążek Trzykrotnie Błogosławionej. Prezent od twojej matki.",
            },
            army_flyers: {
                key: "Ulotki królewskiej armii",
                description:
                    "Ulotki zapraszające do przyłączenia się do królewskiej armii. Z tyłu znajduje się notatka od twojej matki.",
            },
            carved_wooden_mug: {
                key: "Ręcznie wykonany drewniany kubek",
                description: "Drewniany, ręcznie wykonany przez ojca kubek. Na zewnątrz wyżłobił twoje imię.",
            },
            silver_table_knife: {
                key: "Nóż z polerowanego srebra",
                description: "Nóż do jedzenia z polerowanego srebra. Spadek rodzinny.",
            },
            skull_ring: {
                key: "Pierścień z czaszką",
                description: "Duży pierścień z wyrzeźbioną czaszką. Znalazłeś go obok domu.",
            },
            carved_wooden_bowl: {
                key: "Drewniana miska z portretem",
                description:
                    "Drewniana miska z twoim portretem wyrzeźbionym na zewnątrz. Dzieło i pamiątka po dziadku.",
            },
            love_letter: {
                key: "List miłosny",
                description: "List miłosny od ukochanej osoby.",
            },
            loaded_dice: {
                key: "Przeciążone kości do gry",
                description: "Przeciążone kości do gry. Zawsze wypadają na jedynce.",
            },
            basement_key: {
                key: "Kluczyk do skrzyni",
                description:
                    "Kluczyk, który pasuje do skrzyni w piwnicy twojego rodzinnego domu. Nie wiesz jednak, co jest w środku.",
            },
            revenge_sketch: {
                key: "Szkic sprawcy",
                description: "Kartka, na której jest narysowana podobizna osoby, która zabiła kogoś z twojej rodziny.",
            },
            grandfathers_coin: {
                key: "Moneta od dziadka",
                description: "Moneta od dziadka. Za pomocą noża wyżłobił w niej bardzo ważną radę.",
            },
            magnifying_glasses: {
                key: "Okulary przybliżające",
                description: "Okulary, które przybliżają ci wszystko, co widzisz.",
            },
            ornamented_drinking_horn: {
                key: "Ozdobny róg do picia",
                description: "Róg do picia z metalowymi, pięknymi ornamentami. Spadek rodzinny.",
            },
            embroidered_handkerchief: {
                key: "Chusteczka z inicjałami",
                description: "Chusteczka z wyszytymi twoimi inicjałami. Prezent od babci.",
            },
            wooden_snuffbox: {
                key: "Drewniana tabakierka",
                description: "Drewniana tabakierka wykonana przez dziadka.",
            },
            small_cursing_figure: {
                key: "Mały posążek od babci",
                description: "Mały posążek wykonany przez babcię. Powiadała, że może rzucać klątwy na wrogów.",
            },
            eagle_eye_amulet: {
                key: "Amulet oka orła",
                description: "Przepiękny amulet w kształcie oka orła. Twój ojciec znalazł go w lesie.",
            },
            runed_finger_bone: {
                key: "Kość świętej Agrethe",
                description: "Ozdobiona runami kość z palca świętej Agrethe. Prezent od babci.",
            },
            small_flute: {
                key: "Mały flet",
                description: "Mały flet, na którym nauczyła cię grać matka.",
            },
        },
        where_from: {
            fesselburg: {
                key: "Fesselburg",
                description: "Nasza cudna stolica. Wiadomo, najlepsi ludzie stamtąd pochodzą.",
            },
            selbek_village: {
                key: "Wioska Selbek z Krain Wieczoru",
                description: "Mała, na większości map nawet jej nie ma.",
            },
            helmsby: {
                key: "Helmsby",
                description: "Nieprzyjemne i mroczne miejsce.",
            },
            gloomy_biskerstaf: {
                key: "Ponury Biskerstaf",
                description: "Budziłeś się przy dźwięku mew i zapachu morza.",
            },
            bright_marenesse: {
                key: "Jasne Marenesse",
                description: "Egzotyka jest tam codziennością i zapach przypraw unosi się w powietrzu.",
            },
            storm_coast: {
                key: "Burzące Wybrzeże",
                description: "Rodzina przeglądała tam rozwalone statki z nadzieją na bogactwo.",
            },
            burned_village: {
                key: "Wieś, która już jest spalona",
                description: "Lepiej o tym zapomnieć.",
            },
            honheim_ruins: {
                key: "Ruiny Honheim",
                description: "Ale nie mówisz o tym nikomu.",
            },
            gossenham_lake: {
                key: "Jezioro Gossenham",
                description: "Pełno tam było piratów i jeszcze gorszych ludzi. Jednak jest ciekawie.",
            },
            pomperburg: {
                key: "Pomperburg",
                description: "Zanim nastąpiła tam tragedia.",
            },
            farm_in_unknown_lands: {
                key: "Farma w sercu nieznanych ziem",
                description: "Farma w sercu nieznanych ziem.",
            },
            carved_stone_rebeck: {
                key: "Kamień Rebeck",
                description: "Z przepięknego kamienia Rebeck, który był wyrzeźbiony za pomocą magii.",
            },
            tresselback_trade_city: {
                key: "Miasto handlowe Tresselback",
                description: "Zdominowane przez rzezimieszków i bandytów.",
            },
            vessen_river: {
                key: "Rzeka Vessen",
                description: "Wychowany na pokładzie.",
            },
            gronniz_village: {
                key: "Wioska Gronniz",
                description: "Żyłeś na granicy z Królewskim Lasem.",
            },
            westerboss: {
                key: "Westerboss",
                description: "Strażnicy prawa cię tam jednak dopadli.",
            },
            westerlan: {
                key: "Westerlan",
                description: "Stolica przestępstwa i kłamstwa.",
            },
            offenhest_town: {
                key: "Miasteczko Offenhest",
                description: "Znane z ciast i muzyki.",
            },
            some_city_streets: {
                key: "Ulice jakiegoś miasta",
                description: "Ale nie pamiętasz nawet jakiego.",
            },
            barely_remember: {
                key: "Ledwo pamiętasz",
                description: "I nie chcesz mówić.",
            },
        },
        travel_reason: {
            money: {
                key: "Dla pieniędzy",
                description: "A istnieją jakieś inne powody?",
            },
            glory: {
                key: "Chwała",
                description: "Gdy umrzesz, będziesz w pieśniach wszystkich bardów.",
            },
            escape: {
                key: "Ucieczka",
                description: "Sytuacja w domu była fatalna. Gdziekolwiek pójdziesz, tam będzie lepiej.",
            },
            revenge: {
                key: "Zemsta",
                description: "Chcesz zdobyć potęgę, by się na kimś zemścić.",
            },
            boredom: {
                key: "Nudy",
                description: "Twoje życie jest nudne, na pewno w tym świecie musi być coś, co cię pobudzi.",
            },
            exile: {
                key: "Wygnanie",
                description: "Wyrzucono cię. Droga jest teraz dla ciebie nowym domem.",
            },
            routine: {
                key: "Rutyna",
                description: "Podróżowanie jest dla ciebie normą. Nie znasz innego życia.",
            },
            talent: {
                key: "Talent",
                description: "Jesteś poszukiwaczem przygód, bo jesteś w tym dobry. Nawet bardzo dobry.",
            },
            destiny: {
                key: "Przeznaczenie",
                description: "Coś cię ciągnie na szlak...",
            },
            anger: {
                key: "Gniew",
                description: "Twoja rodzina została zabita. Szukasz tych, którzy to uczynili.",
            },
            calling: {
                key: "Powołanie",
                description: "Twoi bogowie domagają się, żebyś wyruszył w świat. Mają co do ciebie plany.",
            },
            guilt: {
                key: "Wina",
                description: "Szukasz odkupienia za to, co kiedyś uczyniłeś.",
            },
        },
        how_we_met: {
            in_a_tavern: {
                key: "W karczmie",
                description: "A gdzie indziej spotykają się bohaterowie?",
            },
            in_prison: {
                key: "W więzieniu",
                description: "Lepiej przemilczeć, jak się tam dostaliście...",
            },
            on_the_road: {
                key: "Na trasie",
                description: "Stwierdziliście, że w kupie jest bezpieczniej.",
            },
            at_the_market: {
                key: "Na targu",
                description: "Wypatrzyliście się wśród setki innych osób.",
            },
            before_entering_the_dungeon: {
                key: "Przed wejściem do podziemi",
                description: "Zdecydowaliście się jednak nie wchodzić do środka.",
            },
            over_beer: {
                key: "Przy piwie",
                description: "Po kilku głębszych świetnie się dogadaliście.",
            },
            in_a_stable: {
                key: "W stajni",
                description: "Szukaliście taniego noclegu.",
            },
            bounty_hunters: {
                key: "Łowcy głów",
                description:
                    "Miałeś być zabity przez pozostałych bohaterów, ale jakimś cudem skończyłeś w ich drużynie.",
            },
            the_dungeons: {
                key: "Podziemia",
                description: "Razem zgubiliście się, podążając za fałszywą mapą. Macie ją nadal na pamiątkę.",
            },
            on_a_ship: {
                key: "Na statku",
                description: "Na samym środku morza.",
            },
            since_childhood: {
                key: "Od dzieciństwa",
                description: "Znasz niektórych od małego.",
            },
            question_marks: {
                key: "???",
                description: "To była dziwna sytuacja. Lepiej na razie przemilczeć. Serio.",
            },
        },
        dark_secret: {
            you_rob_friends: {
                key: "Okradasz przyjaciół",
                description: "Okradasz przyjaciół.",
            },
            you_killed_best_friend: {
                key: "Zabiłeś najlepszego przyjaciela",
                description: "Zabiłeś kiedyś najlepszego przyjaciela.",
            },
            you_betray_loved_ones: {
                key: "Zdradzasz tych, którzy cię kochają",
                description: "Zdradzasz tych, którzy cię kochają.",
            },
            false_identity: {
                key: "Nie jesteś tym, za kogo się podajesz",
                description: "Nie jesteś tym, za kogo się podajesz.",
            },
            hired_to_kill_party_member: {
                key: "Wynajęty do zabójstwa",
                description: "Zostałeś wynajęty, by zabić kogoś z drużyny.",
            },
            nothing_to_hide: {
                key: "Nie masz nic do ukrycia",
                description: "Nie masz nic do ukrycia. Słowo!",
            },
            you_killed_your_lord: {
                key: "Zabiłeś swojego lorda",
                description: "Zabiłeś swojego lorda. Ale tylko ty wiesz dlaczego.",
            },
            attacked_by_father: {
                key: "Atak ojca",
                description:
                    "Twój ojciec cię zaatakował i się przed nim obroniłeś w jedyny możliwy sposób. Od tego czasu nie byłeś w domu.",
            },
            banished_for_crime: {
                key: "Wygnanie za zbrodnię",
                description: "Wygnano cię za zbrodnie.",
            },
            escaped_death_sentence: {
                key: "Ucieczka spod szafotu",
                description:
                    "Udało ci się uciec od kary śmierci za coś, czego nie zrobiłeś. Ktoś nadal na ciebie poluje.",
            },
            innocent_blood_on_weapon: {
                key: "Krew niewinnego",
                description: "Twoja broń ma na sobie krew kogoś niewinnego.",
            },
            only_you_understand_god: {
                key: "Wola boga",
                description: "Tylko ty i mądrzy ludzie rozumieją wolę twojego boga oraz twoje czyny.",
            },
        },
        farewell: {
            clock_tower_for_dwarf_queen: {
                key: "Wieża zegarowa dla krasnoludzkiej królowej",
                description: "Budował wieżę zegarową dla krasnoludzkiej królowej na Wzgórzach Czarnego Grzbietu.",
            },
            rode_with_traitor_knights: {
                key: "Wielka Droga",
                description: "Wyjechał na koniu razem ze zdradzieckimi rycerzami na Wielkiej Drodze.",
            },
            served_merchant_johannes: {
                key: "Sługa kupca Johannesa",
                description: "Podjął się pracy sługi dla kupca Johannesa, aby spłacić dług rodziny.",
            },
            waved_from_ship_to_hissain: {
                key: "Rejs do Dalekiego Hissain",
                description:
                    "Machał do ciebie z pokładu statku, który zmierzał do Dalekiego Hissain. Wierzył, że tam zdobędzie fortunę.",
            },
            taken_by_red_king_priests: {
                key: "Kapłani Czerwonego Króla",
                description: "Przeklinał twoje imię, gdy był zabierany przez kapłanów Czerwonego Króla.",
            },
            marched_toward_pomperburg: {
                key: "Droga do Pomperburga",
                description: "Maszerował pewnie w stronę Pomperburga, ale nigdy nie powrócił.",
            },
        },
        who_you_know: {
            captain_aldwus: {
                key: "Kapitan Aldwus",
                description:
                    "Kapitana Aldwusa ze straży miejskiej. Z chęcią będzie patrzył gdzie indziej, jeśli da mu się trochę monet.",
            },
            merchant_bali: {
                key: "Sklepikarz Bali",
                description: "Zawsze znajduje dobry towar.",
            },
            heora: {
                key: "Heora",
                description: "Zna wszystkich w okolicy.",
            },
            lord_thelrey: {
                key: "Lord Thelrey",
                description: "Wyświadczyłem mu raz przysługę.",
            },
            nelaser: {
                key: "Nelaser",
                description: "Okradła, oszukała i wkurzyła wszystkich w mieście. Bez wyjątku.",
            },
            wyne: {
                key: "Wynę",
                description: "Nadal jest mi winna drinka.",
            },
            rellika: {
                key: "Rellika",
                description: "Użytkownika magii, kiedyś mnie uratował.",
            },
            thamatha: {
                key: "Thamatha",
                description: "Właściciela karczmy, który mówi mi o plotkach z okolicy. Dobry gość.",
            },
            anet: {
                key: "Anet",
                description: "Kim jest? Im mniej się o niej wie, tym lepiej.",
            },
            cyne: {
                key: "Cynę",
                description: "Okradła mnie raz, ale ją dopadłem i się zlitowałem. Niech zna moje serce.",
            },
            hildo: {
                key: "Hildo",
                description: "Niziołek, który mnie pokonał we wszystkich zawodach w piciu.",
            },
            bellie_bairnell: {
                key: "Bellię Bairnell",
                description: "Robi mi najlepsze obiady na świecie, od kiedy uratowałem jej psa.",
            },
            grakara: {
                key: "Grakara",
                description: "Pracuje w warsztacie kowalskim i naprawia moją broń. Zna się na swojej robocie.",
            },
            nimlothel: {
                key: "Nimlothel",
                description: "Uratowała mi życie i muszę się jakoś odwdzięczyć. Mam u niej wielki dług.",
            },
            galorfinga: {
                key: "Galorfinga",
                description: "Okolicznego czarodzieja. Lubię z nim gadać.",
            },
            willana: {
                key: "Willana",
                description: "Dzieciaka, któremu opowiadam o swoich przygodach. Widzi mnie jako bohatera.",
            },
            olbearda: {
                key: "Olbearda",
                description: "Barda, który opowiada historie o mnie. Czasem są prawdziwe. Wolę jednak te zmyślone.",
            },
            thardera: {
                key: "Thardera",
                description: "Nauczył mnie, jak trzymać broń i jak przechylać kufel. Wiele mu zawdzięczam.",
            },
            lady_baldge: {
                key: "Lady Baldge",
                description: "Znam jej mroczny sekret...",
            },
            hilde: {
                key: "Hilde",
                description: "Lokalną kapłankę, której spowiadam się z win.",
            },
        },
        passions: {
            positive: {
                desire: {
                    key: "Pożądanie",
                },
                loyalty: {
                    key: "Lojalność",
                },
                love: {
                    key: "Miłość",
                },
                care: {
                    key: "Utrzymywanie (czegoś)",
                },
                respect: {
                    key: "Szacunek",
                },
                devotion: {
                    key: "Oddanie",
                },
            },
            negative: {
                addiction: {
                    key: "Nałóg",
                },
                hatred: {
                    key: "Nienawiść",
                },
                phobia: {
                    key: "Fobia",
                },
            },
        },
    },
    adventurer: {
        name: "Imię",
        stamina: "Wytrzymałość",
        luck: "Szczęście",
        courage: "Odwaga",
        society: "Społeczność",
    },
    skillselect: {
        six_points_left: "Pozostała ilość 6 punktów do rozdania: {number}",
        five_points_left: "Pozostała ilość 5 punktów do rozdania: {number}",
    },
    form: {
        step1: {
            initial_skills_header: "Umiejętności",
        },
        step2: {
            header: "Statystyki i imię",
        },
        step3: {
            header: "Profesja",
        },
        step4: {
            title: "Szczegóły postaci",
            roll_all: "Losuj wszystko",
            roll: "Losuj",
            not_set: "-",
            talents: "Talenty",
            height: "Wzrost",
            hair_color: "Kolor włosów",
            body_build: "Budowa ciała",
            hair_type: "Typ włosów",
            skin: "Skóra",
            hairstyle: "Fryzura",
            facial_hair: "Zarost",
            misfortune: "Okrutne nieszczęście",
            keepsake: "Pamiątka",
            where_from: "Skąd pochodzisz?",
            travel_reason: "Dlaczego podróżujesz?",
            how_we_met: "Jak się spotkaliśmy?",
            dark_secret: "Mój mroczny sekret",
            farewell: "Pożegnanie",
            who_you_know: "Kogo znasz?",
            passions: "Pasje",
            positive: "Pozytywna",
            negative: "Negatywna",
        },
    },
};
