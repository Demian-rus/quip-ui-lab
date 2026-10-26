// Public configuration snapshot, no game engine or user data.
export const SOURCE = {
  "sourceSHA": "507c3d24f270a7d26b1562ffc6837c819a15aa5b",
  "version": 89,
  "modes": [
    {
      "id": "talk",
      "title": "СЛОВА",
      "rule": "Объясняй словами, не называя ответ и однокоренные слова.",
      "kind": "words",
      "basePoints": 1,
      "modifierBonus": 1,
      "usesTimer": true,
      "allowsRisk": true,
      "blitzWordsCount": 0,
      "supportsSharedAward": false,
      "cardType": "words",
      "durationBonus": 0,
      "secretMethod": true,
      "usesModifiers": true,
      "interaction": "explain",
      "enabled": true
    },
    {
      "id": "mime",
      "title": "ЖЕСТЫ",
      "rule": "Только жесты и мимика. Нельзя говорить или издавать звуки.",
      "kind": "words",
      "basePoints": 1,
      "modifierBonus": 1,
      "usesTimer": true,
      "allowsRisk": true,
      "blitzWordsCount": 0,
      "supportsSharedAward": false,
      "cardType": "words",
      "durationBonus": 0,
      "secretMethod": true,
      "usesModifiers": true,
      "interaction": "explain",
      "enabled": true
    },
    {
      "id": "draw",
      "title": "НАРИСУЙ",
      "rule": "Рисуй на бумаге, не используя буквы, цифры и жесты.",
      "kind": "words",
      "basePoints": 1,
      "modifierBonus": 1,
      "usesTimer": true,
      "allowsRisk": true,
      "blitzWordsCount": 0,
      "supportsSharedAward": false,
      "cardType": "words",
      "durationBonus": 30,
      "secretMethod": true,
      "usesModifiers": true,
      "interaction": "explain",
      "enabled": true
    },
    {
      "id": "sing",
      "title": "НАПОЙ",
      "rule": "Напевай песню, связанную с темой. Соперник должен отгадать тему.",
      "kind": "songs",
      "basePoints": 1,
      "modifierBonus": 1,
      "usesTimer": true,
      "allowsRisk": true,
      "blitzWordsCount": 0,
      "supportsSharedAward": false,
      "cardType": "songs",
      "durationBonus": 30,
      "secretMethod": true,
      "usesModifiers": true,
      "interaction": "explain",
      "enabled": true
    },
    {
      "id": "yesno",
      "title": "ДАНЕТКИ",
      "rule": "Загадывающий видит персонажа и отвечает на вопросы соперника только «да», «нет» или «не знаю». Отгадывающий должен назвать персонажа.",
      "kind": "people",
      "basePoints": 2,
      "modifierBonus": 1,
      "usesTimer": true,
      "allowsRisk": true,
      "blitzWordsCount": 0,
      "supportsSharedAward": false,
      "cardType": "people",
      "durationBonus": 30,
      "secretMethod": true,
      "usesModifiers": true,
      "interaction": "explain",
      "enabled": true
    },
    {
      "id": "secret",
      "title": "СЕКРЕТКА",
      "rule": "Случайное задание с обязательным усложнением.",
      "kind": "words",
      "basePoints": 2,
      "modifierBonus": 1,
      "usesTimer": true,
      "allowsRisk": true,
      "blitzWordsCount": 0,
      "supportsSharedAward": false,
      "cardType": "words",
      "durationBonus": 0,
      "secretMethod": false,
      "usesModifiers": true,
      "interaction": "explain",
      "enabled": true
    },
    {
      "id": "blitz",
      "title": "БЛИЦ",
      "rule": "Отгадайте все 3 слова за один таймер. За 3 из 3 — 2 базовых очка, за неполный результат — 0.",
      "kind": "words",
      "basePoints": 2,
      "modifierBonus": 1,
      "usesTimer": true,
      "allowsRisk": true,
      "blitzWordsCount": 3,
      "supportsSharedAward": false,
      "cardType": "blitz",
      "durationBonus": 30,
      "secretMethod": false,
      "usesModifiers": true,
      "interaction": "explain",
      "enabled": true
    },
    {
      "id": "approx",
      "title": "ПРИМЕРНО",
      "rule": "Назовите свои ответы, затем откройте правильный и решите, кому начислить очки.",
      "kind": "number",
      "cardType": "number",
      "basePoints": 1,
      "modifierBonus": 0,
      "usesTimer": false,
      "allowsRisk": false,
      "blitzWordsCount": 0,
      "supportsSharedAward": true,
      "durationBonus": 0,
      "secretMethod": false,
      "usesModifiers": false,
      "interaction": "estimate",
      "enabled": true
    }
  ],
  "defaults": {
    "difficulty": "easy",
    "duration": 60,
    "rounds": 12,
    "finishType": "score",
    "targetScore": 25,
    "riskRounds": true,
    "complications": true,
    "dice": true,
    "blitzCount": 3,
    "scoring": "duel",
    "modes": [
      "talk",
      "mime",
      "draw",
      "sing",
      "secret",
      "blitz",
      "approx"
    ],
    "promptTypes": [
      "word",
      "phrase",
      "idiom"
    ],
    "contentPack": {
      "id": "general",
      "version": 27
    },
    "preset": {
      "id": "classic-duel",
      "version": 3
    },
    "modeCompatibilityVersion": 1,
    "awardTo": "setter",
    "modifierChance": 20,
    "songLanguagePolicyVersion": 2,
    "songLanguages": [
      "ru"
    ]
  },
  "packs": [
    {
      "id": "general",
      "version": 27,
      "name": "Общий словарь",
      "enabled": true,
      "count": 6000,
      "types": [
        "word",
        "phrase",
        "idiom",
        "song",
        "person",
        "number"
      ],
      "modes": [
        "talk",
        "mime",
        "draw",
        "sing",
        "yesno",
        "secret",
        "blitz",
        "approx"
      ],
      "availability": {
        "easy": {
          "ru": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": true,
              "reason": ""
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "sing/easy: 0 из 1 заданий"
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "ru,en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": true,
              "reason": ""
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          }
        },
        "medium": {
          "ru": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": true,
              "reason": ""
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": true,
              "reason": ""
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "ru,en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": true,
              "reason": ""
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          }
        },
        "hard": {
          "ru": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": true,
              "reason": ""
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": true,
              "reason": ""
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "ru,en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": true,
              "reason": ""
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          }
        },
        "mixed": {
          "ru": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": true,
              "reason": ""
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "sing/easy: 0 из 1 заданий"
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "ru,en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": true,
              "reason": ""
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          }
        }
      }
    },
    {
      "id": "geography",
      "version": 6,
      "name": "География",
      "enabled": true,
      "count": 406,
      "types": [
        "word",
        "phrase",
        "person",
        "number"
      ],
      "modes": [
        "talk",
        "mime",
        "draw",
        "yesno",
        "secret",
        "blitz",
        "approx"
      ],
      "availability": {
        "easy": {
          "ru": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": false,
              "reason": "В теме нет песен"
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Режим «НАПОЙ» недоступен в теме «География»."
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": false,
              "reason": "В теме нет песен"
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Режим «НАПОЙ» недоступен в теме «География»."
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "ru,en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": false,
              "reason": "В теме нет песен"
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Режим «НАПОЙ» недоступен в теме «География»."
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          }
        },
        "medium": {
          "ru": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": false,
              "reason": "В теме нет песен"
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Режим «НАПОЙ» недоступен в теме «География»."
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": false,
              "reason": "В теме нет песен"
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Режим «НАПОЙ» недоступен в теме «География»."
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "ru,en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": false,
              "reason": "В теме нет песен"
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Режим «НАПОЙ» недоступен в теме «География»."
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          }
        },
        "hard": {
          "ru": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": false,
              "reason": "В теме нет песен"
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Режим «НАПОЙ» недоступен в теме «География»."
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": false,
              "reason": "В теме нет песен"
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Режим «НАПОЙ» недоступен в теме «География»."
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "ru,en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": false,
              "reason": "В теме нет песен"
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Режим «НАПОЙ» недоступен в теме «География»."
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          }
        },
        "mixed": {
          "ru": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": false,
              "reason": "В теме нет песен"
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Режим «НАПОЙ» недоступен в теме «География»."
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": false,
              "reason": "В теме нет песен"
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Режим «НАПОЙ» недоступен в теме «География»."
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "ru,en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": false,
              "reason": "В теме нет песен"
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Режим «НАПОЙ» недоступен в теме «География»."
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          }
        }
      }
    },
    {
      "id": "biology",
      "version": 1,
      "name": "Биология",
      "enabled": false,
      "count": 0,
      "types": [
        "word",
        "phrase",
        "idiom"
      ],
      "modes": [
        "talk",
        "mime",
        "draw",
        "sing",
        "yesno",
        "secret",
        "blitz",
        "approx"
      ],
      "availability": {
        "easy": {
          "ru": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Набор пока недоступен: Биология"
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Набор пока недоступен: Биология"
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "ru,en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Набор пока недоступен: Биология"
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          }
        },
        "medium": {
          "ru": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Набор пока недоступен: Биология"
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Набор пока недоступен: Биология"
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "ru,en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Набор пока недоступен: Биология"
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          }
        },
        "hard": {
          "ru": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Набор пока недоступен: Биология"
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Набор пока недоступен: Биология"
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "ru,en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Набор пока недоступен: Биология"
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          }
        },
        "mixed": {
          "ru": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Набор пока недоступен: Биология"
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Набор пока недоступен: Биология"
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "ru,en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Набор пока недоступен: Биология"
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          }
        }
      }
    },
    {
      "id": "animals",
      "version": 2,
      "name": "Животные",
      "enabled": true,
      "count": 457,
      "types": [
        "word",
        "phrase",
        "person",
        "number"
      ],
      "modes": [
        "talk",
        "mime",
        "draw",
        "yesno",
        "secret",
        "blitz",
        "approx"
      ],
      "availability": {
        "easy": {
          "ru": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": false,
              "reason": "В теме нет песен"
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Режим «НАПОЙ» недоступен в теме «Животные»."
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": false,
              "reason": "В теме нет песен"
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Режим «НАПОЙ» недоступен в теме «Животные»."
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "ru,en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": false,
              "reason": "В теме нет песен"
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Режим «НАПОЙ» недоступен в теме «Животные»."
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          }
        },
        "medium": {
          "ru": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": false,
              "reason": "В теме нет песен"
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Режим «НАПОЙ» недоступен в теме «Животные»."
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": false,
              "reason": "В теме нет песен"
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Режим «НАПОЙ» недоступен в теме «Животные»."
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "ru,en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": false,
              "reason": "В теме нет песен"
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Режим «НАПОЙ» недоступен в теме «Животные»."
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          }
        },
        "hard": {
          "ru": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": false,
              "reason": "В теме нет песен"
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Режим «НАПОЙ» недоступен в теме «Животные»."
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": false,
              "reason": "В теме нет песен"
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Режим «НАПОЙ» недоступен в теме «Животные»."
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "ru,en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": false,
              "reason": "В теме нет песен"
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Режим «НАПОЙ» недоступен в теме «Животные»."
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          }
        },
        "mixed": {
          "ru": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": false,
              "reason": "В теме нет песен"
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Режим «НАПОЙ» недоступен в теме «Животные»."
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": false,
              "reason": "В теме нет песен"
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Режим «НАПОЙ» недоступен в теме «Животные»."
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "ru,en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": false,
              "reason": "В теме нет песен"
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Режим «НАПОЙ» недоступен в теме «Животные»."
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          }
        }
      }
    },
    {
      "id": "history",
      "version": 1,
      "name": "История",
      "enabled": false,
      "count": 0,
      "types": [
        "word",
        "phrase",
        "idiom"
      ],
      "modes": [
        "talk",
        "mime",
        "draw",
        "sing",
        "yesno",
        "secret",
        "blitz",
        "approx"
      ],
      "availability": {
        "easy": {
          "ru": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Набор пока недоступен: История"
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Набор пока недоступен: История"
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "ru,en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Набор пока недоступен: История"
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          }
        },
        "medium": {
          "ru": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Набор пока недоступен: История"
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Набор пока недоступен: История"
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "ru,en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Набор пока недоступен: История"
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          }
        },
        "hard": {
          "ru": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Набор пока недоступен: История"
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Набор пока недоступен: История"
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "ru,en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Набор пока недоступен: История"
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          }
        },
        "mixed": {
          "ru": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Набор пока недоступен: История"
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Набор пока недоступен: История"
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "ru,en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Набор пока недоступен: История"
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          }
        }
      }
    },
    {
      "id": "science",
      "version": 8,
      "name": "Наука",
      "enabled": true,
      "count": 582,
      "types": [
        "word",
        "phrase",
        "person",
        "number"
      ],
      "modes": [
        "talk",
        "mime",
        "draw",
        "yesno",
        "secret",
        "blitz",
        "approx"
      ],
      "availability": {
        "easy": {
          "ru": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": false,
              "reason": "В теме нет песен"
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Режим «НАПОЙ» недоступен в теме «Наука»."
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": false,
              "reason": "В теме нет песен"
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Режим «НАПОЙ» недоступен в теме «Наука»."
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "ru,en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": false,
              "reason": "В теме нет песен"
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Режим «НАПОЙ» недоступен в теме «Наука»."
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          }
        },
        "medium": {
          "ru": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": false,
              "reason": "В теме нет песен"
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Режим «НАПОЙ» недоступен в теме «Наука»."
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": false,
              "reason": "В теме нет песен"
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Режим «НАПОЙ» недоступен в теме «Наука»."
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "ru,en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": false,
              "reason": "В теме нет песен"
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Режим «НАПОЙ» недоступен в теме «Наука»."
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          }
        },
        "hard": {
          "ru": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": false,
              "reason": "В теме нет песен"
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Режим «НАПОЙ» недоступен в теме «Наука»."
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": false,
              "reason": "В теме нет песен"
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Режим «НАПОЙ» недоступен в теме «Наука»."
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "ru,en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": false,
              "reason": "В теме нет песен"
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Режим «НАПОЙ» недоступен в теме «Наука»."
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          }
        },
        "mixed": {
          "ru": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": false,
              "reason": "В теме нет песен"
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Режим «НАПОЙ» недоступен в теме «Наука»."
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": false,
              "reason": "В теме нет песен"
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Режим «НАПОЙ» недоступен в теме «Наука»."
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "ru,en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": false,
              "reason": "В теме нет песен"
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Режим «НАПОЙ» недоступен в теме «Наука»."
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          }
        }
      }
    },
    {
      "id": "culture",
      "version": 1,
      "name": "Культура",
      "enabled": false,
      "count": 0,
      "types": [
        "word",
        "phrase",
        "idiom"
      ],
      "modes": [
        "talk",
        "mime",
        "draw",
        "sing",
        "yesno",
        "secret",
        "blitz",
        "approx"
      ],
      "availability": {
        "easy": {
          "ru": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Набор пока недоступен: Культура"
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Набор пока недоступен: Культура"
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "ru,en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Набор пока недоступен: Культура"
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          }
        },
        "medium": {
          "ru": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Набор пока недоступен: Культура"
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Набор пока недоступен: Культура"
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "ru,en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Набор пока недоступен: Культура"
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          }
        },
        "hard": {
          "ru": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Набор пока недоступен: Культура"
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Набор пока недоступен: Культура"
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "ru,en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Набор пока недоступен: Культура"
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          }
        },
        "mixed": {
          "ru": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Набор пока недоступен: Культура"
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Набор пока недоступен: Культура"
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          },
          "ru,en": {
            "talk": {
              "available": true,
              "reason": ""
            },
            "mime": {
              "available": true,
              "reason": ""
            },
            "draw": {
              "available": true,
              "reason": ""
            },
            "sing": {
              "available": true,
              "reason": ""
            },
            "yesno": {
              "available": true,
              "reason": ""
            },
            "secret": {
              "available": false,
              "reason": "Набор пока недоступен: Культура"
            },
            "blitz": {
              "available": true,
              "reason": ""
            },
            "approx": {
              "available": true,
              "reason": ""
            }
          }
        }
      }
    }
  ]
};
