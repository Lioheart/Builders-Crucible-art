const MODULE_ID = "builders-crucible-art-overrides"

const SUPPORTED_PACKS = new Set([
  "builders-crucible-creature-pack.creatures",
  "builders-crucible-pregen-characters.pack-1"
])

const ART_BY_UUID = {
  // Creature Pack dinozaury:
  "Compendium.builders-crucible-creature-pack.creatures.Actor.YTQ36wMfuK9ffeKf": {
    actor: `modules/${MODULE_ID}/assets/creatures/dinosaurs/Allosaurus.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dinosaurs/Allosaurus.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.B8OIlA25AfrRNY0B": {
    actor: `modules/${MODULE_ID}/assets/creatures/dinosaurs/Ankylosaurus.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dinosaurs/Ankylosaurus.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.JrVs1Go1E1OMJDr7": {
    actor: `modules/${MODULE_ID}/assets/creatures/dinosaurs/Plesiosaurus.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dinosaurs/Plesiosaurus.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.IMbRkEdNo8RH2rYm": {
    actor: `modules/${MODULE_ID}/assets/creatures/dinosaurs/Triceratops.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dinosaurs/Triceratops.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.kvyzTVCMVyoGIKTo": {
    actor: `modules/${MODULE_ID}/assets/creatures/dinosaurs/Tyrannosaurus_Rex.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dinosaurs/Tyrannosaurus_Rex.png`
  },

  // Creature Pack demony:
  "Compendium.builders-crucible-creature-pack.creatures.Actor.NKU6eLqf1YXMC0Wm": {
    actor: `modules/${MODULE_ID}/assets/creatures/demons/Quasit.png`,
    token: `modules/${MODULE_ID}/assets/creatures/demons/Quasit.png`
  },

  // Creature Pack diabły:
  "Compendium.builders-crucible-creature-pack.creatures.Actor.7yiTxRiwFWpFbfPu": {
    actor: `modules/${MODULE_ID}/assets/creatures/devils/Barbed_Devil.png`,
    token: `modules/${MODULE_ID}/assets/creatures/devils/Barbed_Devil.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.cfEAabdxDKKRoqfL": {
    actor: `modules/${MODULE_ID}/assets/creatures/devils/Dragon_Devil.png`,
    token: `modules/${MODULE_ID}/assets/creatures/devils/Dragon_Devil.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.yqHmnEYxv2d4djXR": {
    actor: `modules/${MODULE_ID}/assets/creatures/devils/Horned_Devil.png`,
    token: `modules/${MODULE_ID}/assets/creatures/devils/Horned_Devil.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.TloW04BHCN7LhIze": {
    actor: `modules/${MODULE_ID}/assets/creatures/devils/Erinyes.png`,
    token: `modules/${MODULE_ID}/assets/creatures/devils/Erinyes.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.VGofomh4QcStKZWp": {
    actor: `modules/${MODULE_ID}/assets/creatures/devils/Imp.png`,
    token: `modules/${MODULE_ID}/assets/creatures/devils/Imp.png`
  },

  // Creature Pack fey:
  "Compendium.builders-crucible-creature-pack.creatures.Actor.khy3Up9H2N2yDKe8": {
    actor: `modules/${MODULE_ID}/assets/creatures/fey/Dryad.png`,
    token: `modules/${MODULE_ID}/assets/creatures/fey/Dryad.png`
  },

  // Creature Pack humanoidy:
  "Compendium.builders-crucible-creature-pack.creatures.Actor.LGFyA6RMH1i80D8r": {
    actor: `modules/${MODULE_ID}/assets/creatures/humanoids/Centaur.png`,
    token: `modules/${MODULE_ID}/assets/creatures/humanoids/Centaur.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.kujFhEChGWoK3lno": {
    actor: `modules/${MODULE_ID}/assets/creatures/humanoids/Birdfolk.png`,
    token: `modules/${MODULE_ID}/assets/creatures/humanoids/Birdfolk.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.1NBzWVvffjPKPSiM": {
    actor: `modules/${MODULE_ID}/assets/creatures/humanoids/Dwarf_Cleric_Hammer_Shield.png`,
    token: `modules/${MODULE_ID}/assets/creatures/humanoids/Dwarf_Cleric_Hammer_Shield.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.Had20wsoKRBJA7kG": {
    actor: `modules/${MODULE_ID}/assets/creatures/humanoids/Elf_Female_Necromancer.png`,
    token: `modules/${MODULE_ID}/assets/creatures/humanoids/Elf_Female_Necromancer.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.420PxLBjay8IlTF2": {
    actor: `modules/${MODULE_ID}/assets/creatures/humanoids/Drider.png`,
    token: `modules/${MODULE_ID}/assets/creatures/humanoids/Drider.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.DVKTjMaCNhfCJE8u": {
    actor: `modules/${MODULE_ID}/assets/creatures/humanoids/Bugbear.png`,
    token: `modules/${MODULE_ID}/assets/creatures/humanoids/Bugbear.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.OnbJirfXgDCPUhNk": {
    actor: `modules/${MODULE_ID}/assets/creatures/humanoids/Bugbear.png`,
    token: `modules/${MODULE_ID}/assets/creatures/humanoids/Bugbear.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.klDGVYx4SF3zDLhP": {
    actor: `modules/${MODULE_ID}/assets/creatures/humanoids/Changeling.png`,
    token: `modules/${MODULE_ID}/assets/creatures/humanoids/Changeling.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.frh09kF1DOWqhBTl": {
    actor: `modules/${MODULE_ID}/assets/creatures/humanoids/Green_Limbo_Frog.png`,
    token: `modules/${MODULE_ID}/assets/creatures/humanoids/Green_Limbo_Frog.png`
  },

  // Creature Pack konstrukty:
  "Compendium.builders-crucible-creature-pack.creatures.Actor.nOW3bBCDGYMdzuwH": {
    actor: `modules/${MODULE_ID}/assets/creatures/constructs/Rug_of_Smothering.png`,
    token: `modules/${MODULE_ID}/assets/creatures/constructs/Rug_of_Smothering.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.KbjPE6a0jIHGYaUM": {
    actor: `modules/${MODULE_ID}/assets/creatures/constructs/Flying_Sword.png`,
    token: `modules/${MODULE_ID}/assets/creatures/constructs/Flying_Sword.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.QDuY6uGTU1JyUtq7": {
    actor: `modules/${MODULE_ID}/assets/creatures/constructs/Animated_Armor.png`,
    token: `modules/${MODULE_ID}/assets/creatures/constructs/Animated_Armor.png`
  },

  // Creature Pack niebianie:
  "Compendium.builders-crucible-creature-pack.creatures.Actor.VhxRLpJpQ20P39bJ": {
    actor: `modules/${MODULE_ID}/assets/creatures/celestials/Solar.png`,
    token: `modules/${MODULE_ID}/assets/creatures/celestials/Solar.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.PAXnRZBod11hyD8C": {
    actor: `modules/${MODULE_ID}/assets/creatures/celestials/Couatl.png`,
    token: `modules/${MODULE_ID}/assets/creatures/celestials/Couatl.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.7oIDvqQvQ6DAAE5l": {
    actor: `modules/${MODULE_ID}/assets/creatures/celestials/Deva.png`,
    token: `modules/${MODULE_ID}/assets/creatures/celestials/Deva.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.q81TVmV2nvxXEOTk": {
    actor: `modules/${MODULE_ID}/assets/creatures/celestials/Planetar.png`,
    token: `modules/${MODULE_ID}/assets/creatures/celestials/Planetar.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.q81TVmV2nvxXEOTk": {
    actor: `modules/${MODULE_ID}/assets/creatures/celestials/Planetar.png`,
    token: `modules/${MODULE_ID}/assets/creatures/celestials/Planetar.png`
  },

  // Creature Pack nieumarli:
  "Compendium.builders-crucible-creature-pack.creatures.Actor.EItcyIHjHsNNXnah": {
    actor: `modules/${MODULE_ID}/assets/creatures/undeads/Banshee.png`,
    token: `modules/${MODULE_ID}/assets/creatures/undeads/Banshee.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.cMB6VWYRpQRjjPym": {
    actor: `modules/${MODULE_ID}/assets/creatures/undeads/Shadow.png`,
    token: `modules/${MODULE_ID}/assets/creatures/undeads/Shadow.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.VPRCxIPiKIutgcHM": {
    actor: `modules/${MODULE_ID}/assets/creatures/undeads/Demilich.png`,
    token: `modules/${MODULE_ID}/assets/creatures/undeads/Demilich.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.FRY7LRBNdPD8Z09r": {
    actor: `modules/${MODULE_ID}/assets/creatures/undeads/Ghast.png`,
    token: `modules/${MODULE_ID}/assets/creatures/undeads/Ghast.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.ECCgdW1HDUJYTyWb": {
    actor: `modules/${MODULE_ID}/assets/creatures/undeads/Ghoul.png`,
    token: `modules/${MODULE_ID}/assets/creatures/undeads/Ghoul.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.naDeMIRQTmrhWr5E": {
    actor: `modules/${MODULE_ID}/assets/creatures/undeads/Death_Tyrant.png`,
    token: `modules/${MODULE_ID}/assets/creatures/undeads/Death_Tyrant.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.BuQ1JrQd28JvU3aN": {
    actor: `modules/${MODULE_ID}/assets/creatures/undeads/FlameSkull.png`,
    token: `modules/${MODULE_ID}/assets/creatures/undeads/FlameSkull.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.ZdbKaqm8QrVVPMBr": {
    actor: `modules/${MODULE_ID}/assets/creatures/undeads/Crawling_Claw.png`,
    token: `modules/${MODULE_ID}/assets/creatures/undeads/Crawling_Claw.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.OwKhEI90AdDnuARI": {
    actor: `modules/${MODULE_ID}/assets/creatures/undeads/Death_Knight.png`,
    token: `modules/${MODULE_ID}/assets/creatures/undeads/Death_Knight.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.OwKhEI90AdDnuARI": {
    actor: `modules/${MODULE_ID}/assets/creatures/undeads/Death_Knight.png`,
    token: `modules/${MODULE_ID}/assets/creatures/undeads/Death_Knight.png`
  },

  // Creature Pack olbrzymy:
  "Compendium.builders-crucible-creature-pack.creatures.Actor.zGqoMJS1yQm1hwO6": {
    actor: `modules/${MODULE_ID}/assets/creatures/giants/Storm_Giant.png`,
    token: `modules/${MODULE_ID}/assets/creatures/giants/Storm_Giant.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.OulO1eh0KnvkPLHV": {
    actor: `modules/${MODULE_ID}/assets/creatures/giants/Cyclops.png`,
    token: `modules/${MODULE_ID}/assets/creatures/giants/Cyclops.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.GBiaD1795NvGBwc9": {
    actor: `modules/${MODULE_ID}/assets/creatures/giants/Ettin.png`,
    token: `modules/${MODULE_ID}/assets/creatures/giants/Ettin.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.3abQ7xQdq98QSwbm": {
    actor: `modules/${MODULE_ID}/assets/creatures/giants/Fomorian.png`,
    token: `modules/${MODULE_ID}/assets/creatures/giants/Fomorian.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.TXt0SkmiAdIaVNv6": {
    actor: `modules/${MODULE_ID}/assets/creatures/giants/Stone_Giant.png`,
    token: `modules/${MODULE_ID}/assets/creatures/giants/Stone_Giant.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.omjM0eGyo6qdzPB8": {
    actor: `modules/${MODULE_ID}/assets/creatures/giants/Frost_Giant.png`,
    token: `modules/${MODULE_ID}/assets/creatures/giants/Frost_Giant.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.1Cdt9TjIXtzWPeS6": {
    actor: `modules/${MODULE_ID}/assets/creatures/giants/Cloud_Giant.png`,
    token: `modules/${MODULE_ID}/assets/creatures/giants/Cloud_Giant.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.FajH2NdBdHlj6H2C": {
    actor: `modules/${MODULE_ID}/assets/creatures/giants/Fire_Giant.png`,
    token: `modules/${MODULE_ID}/assets/creatures/giants/Fire_Giant.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.H0p0bQzg3TwyjKNr": {
    actor: `modules/${MODULE_ID}/assets/creatures/giants/Hill_Giant.png`,
    token: `modules/${MODULE_ID}/assets/creatures/giants/Hill_Giant.png`
  },

  // Creature Pack potworności:
  "Compendium.builders-crucible-creature-pack.creatures.Actor.pQArvUPLTSCIOt3D": {
    actor: `modules/${MODULE_ID}/assets/creatures/monstrosities/Basilisk.png`,
    token: `modules/${MODULE_ID}/assets/creatures/monstrosities/Basilisk.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.HX7BTjReovy3IAXM": {
    actor: `modules/${MODULE_ID}/assets/creatures/monstrosities/Behir.png`,
    token: `modules/${MODULE_ID}/assets/creatures/monstrosities/Behir.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.FIk87hz4aTQs8p1R": {
    actor: `modules/${MODULE_ID}/assets/creatures/monstrosities/Chimera.png`,
    token: `modules/${MODULE_ID}/assets/creatures/monstrosities/Chimera.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.InDfJn5Q1J8MdZ4A": {
    actor: `modules/${MODULE_ID}/assets/creatures/monstrosities/Carrion_Crawler.png`,
    token: `modules/${MODULE_ID}/assets/creatures/monstrosities/Carrion_Crawler.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.TDm3n7T0xqwQ6Wdd": {
    actor: `modules/${MODULE_ID}/assets/creatures/monstrosities/Squid.png`,
    token: `modules/${MODULE_ID}/assets/creatures/monstrosities/Squid.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.Cx5707cQpfdilWuU": {
    actor: `modules/${MODULE_ID}/assets/creatures/monstrosities/Cockatrice.png`,
    token: `modules/${MODULE_ID}/assets/creatures/monstrosities/Cockatrice.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.kRGFnHuJVqfqoCBS": {
    actor: `modules/${MODULE_ID}/assets/creatures/monstrosities/Void_Shark.png`,
    token: `modules/${MODULE_ID}/assets/creatures/monstrosities/Void_Shark.png`
  },

  // Creature Pack smoki:
  // Biały
  "Compendium.builders-crucible-creature-pack.creatures.Actor.8fdnpoOA0DUV5enJ": {
    actor: `modules/${MODULE_ID}/assets/creatures/dragons/Adult_White_Dragon.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dragons/Adult_White_Dragon.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.B8i12q6ZfMqCdD20": {
    actor: `modules/${MODULE_ID}/assets/creatures/dragons/Young_White_Dragon.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dragons/Young_White_Dragon.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.Gvo9XGCX9aA5MxXI": {
    actor: `modules/${MODULE_ID}/assets/creatures/dragons/White_Dragon_Wyrmling.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dragons/White_Dragon_Wyrmling.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.iL4oBHqLmKlEyLQC": {
    actor: `modules/${MODULE_ID}/assets/creatures/dragons/Ancient_White_Dragon.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dragons/Ancient_White_Dragon.png`
  },
  // Brązowy
  "Compendium.builders-crucible-creature-pack.creatures.Actor.ilZuHJ7yBqGijxOE": {
    actor: `modules/${MODULE_ID}/assets/creatures/dragons/Adult_Bronze_Dragon.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dragons/Adult_Bronze_Dragon.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.KAEaHlztsFasYp8O": {
    actor: `modules/${MODULE_ID}/assets/creatures/dragons/Young_Bronze_Dragon.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dragons/Young_Bronze_Dragon.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.BodAB0NuTAIz74pT": {
    actor: `modules/${MODULE_ID}/assets/creatures/dragons/Bronze_Dragon_Wyrmling.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dragons/Bronze_Dragon_Wyrmling.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.MxjvlBkZQdJJgRuw": {
    actor: `modules/${MODULE_ID}/assets/creatures/dragons/Adult_Bronze_Dragon.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dragons/Adult_Bronze_Dragon.png`
  },
  // Czarny
  "Compendium.builders-crucible-creature-pack.creatures.Actor.9xfqQ9nBhJygg0nI": {
    actor: `modules/${MODULE_ID}/assets/creatures/dragons/Adult_Black_Dragon.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dragons/Adult_Black_Dragon.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.NW1xXkhhdWyYGk3S": {
    actor: `modules/${MODULE_ID}/assets/creatures/dragons/Young_Black_Dragon.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dragons/Young_Black_Dragon.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.n9c0RW2rWjYuBgN7": {
    actor: `modules/${MODULE_ID}/assets/creatures/dragons/Black_Dragon_Wyrmling.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dragons/Black_Dragon_Wyrmling.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.mh0DYT8UbZTTAYMs": {
    actor: `modules/${MODULE_ID}/assets/creatures/dragons/Ancient_Black_Dragon.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dragons/Ancient_Black_Dragon.png`
  },
  // Czerwony
  "Compendium.builders-crucible-creature-pack.creatures.Actor.Sv7ohg11f1AgAfO4": {
    actor: `modules/${MODULE_ID}/assets/creatures/dragons/Adult_Red_Dragon.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dragons/Adult_Red_Dragon.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.VEOLRUkDpk1Z9Mzx": {
    actor: `modules/${MODULE_ID}/assets/creatures/dragons/Young_Red_Dragon.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dragons/Young_Red_Dragon.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.8DAi16UxZZMeFWig": {
    actor: `modules/${MODULE_ID}/assets/creatures/dragons/Red_Dragon_Wyrmling.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dragons/Red_Dragon_Wyrmling.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.gMhEurk7To37uSTH": {
    actor: `modules/${MODULE_ID}/assets/creatures/dragons/Ancient_Red_Dragon.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dragons/Ancient_Red_Dragon.png`
  },
  // Miedziane
  "Compendium.builders-crucible-creature-pack.creatures.Actor.nBGVsQq2ykLp4MaB": {
    actor: `modules/${MODULE_ID}/assets/creatures/dragons/Adult_Copper_Dragon.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dragons/Adult_Copper_Dragon.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.6iTRCegvLcFQdcKZ": {
    actor: `modules/${MODULE_ID}/assets/creatures/dragons/Adult_Copper_Dragon.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dragons/Adult_Copper_Dragon.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.4V1vWYhuKYeplSHc": {
    actor: `modules/${MODULE_ID}/assets/creatures/dragons/Young_Copper_Dragon.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dragons/Young_Copper_Dragon.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.QXZ9PGXGfxhYQUpX": {
    actor: `modules/${MODULE_ID}/assets/creatures/dragons/Copper_Dragon_Wyrmling.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dragons/Copper_Dragon_Wyrmling.png`
  },
  // Mosiądz
  "Compendium.builders-crucible-creature-pack.creatures.Actor.0ZhL2HAtfsUzbZOs": {
    actor: `modules/${MODULE_ID}/assets/creatures/dragons/Adult_Brass_Dragon.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dragons/Adult_Brass_Dragon.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.MNtvShclFnPxTWpP": {
    actor: `modules/${MODULE_ID}/assets/creatures/dragons/Adult_Brass_Dragon.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dragons/Adult_Brass_Dragon.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.89zWXYq9sPk2keMw": {
    actor: `modules/${MODULE_ID}/assets/creatures/dragons/Young_Brass_Dragon.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dragons/Young_Brass_Dragon.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.jImADQ8Ep3MhTmvm": {
    actor: `modules/${MODULE_ID}/assets/creatures/dragons/Brass_Dragon_Wyrmling.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dragons/Brass_Dragon_Wyrmling.png`
  },
  // Niebieski
  "Compendium.builders-crucible-creature-pack.creatures.Actor.JnSwIOMthE7HWoWL": {
    actor: `modules/${MODULE_ID}/assets/creatures/dragons/Adult_Blue_Dragon.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dragons/Adult_Blue_Dragon.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.7DCxOepgDmQKmTyg": {
    actor: `modules/${MODULE_ID}/assets/creatures/dragons/Young_Blue_Dragon.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dragons/Young_Blue_Dragon.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.L0GYUUCuDlDo9rg8": {
    actor: `modules/${MODULE_ID}/assets/creatures/dragons/Blue_Dragon_Wyrmling.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dragons/Blue_Dragon_Wyrmling.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.MPE6RnznUMG0qBMD": {
    actor: `modules/${MODULE_ID}/assets/creatures/dragons/Ancient_Blue_Dragon.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dragons/Ancient_Blue_Dragon.png`
  },
  // Srebrny
  "Compendium.builders-crucible-creature-pack.creatures.Actor.GLVMnagq2vKhV0hN": {
    actor: `modules/${MODULE_ID}/assets/creatures/dragons/Adult_Silver_Dragon.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dragons/Adult_Silver_Dragon.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.BvxUbcqF4ctHaneJ": {
    actor: `modules/${MODULE_ID}/assets/creatures/dragons/Young_Silver_Dragon.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dragons/Young_Silver_Dragon.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.UtFTiOnoaDq6OwGP": {
    actor: `modules/${MODULE_ID}/assets/creatures/dragons/Silver_Dragon_Wyrmling.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dragons/Silver_Dragon_Wyrmling.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.kwHSRCnJWjVpmPJr": {
    actor: `modules/${MODULE_ID}/assets/creatures/dragons/Adult_Silver_Dragon.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dragons/Adult_Silver_Dragon.png`
  },
  // Zielony
  "Compendium.builders-crucible-creature-pack.creatures.Actor.Ql83cIDm4MDoHLkX": {
    actor: `modules/${MODULE_ID}/assets/creatures/dragons/Adult_Green_Dragon.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dragons/Adult_Green_Dragon.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.G7yt1cm2rBuTxIdT": {
    actor: `modules/${MODULE_ID}/assets/creatures/dragons/Young_Green_Dragon.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dragons/Young_Green_Dragon.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.uBJZykSqTOmZyS3P": {
    actor: `modules/${MODULE_ID}/assets/creatures/dragons/Green_Dragon_Wyrmling.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dragons/Green_Dragon_Wyrmling.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.Fg1qNhMnAqhOHr6O": {
    actor: `modules/${MODULE_ID}/assets/creatures/dragons/Ancient_Green_Dragon.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dragons/Ancient_Green_Dragon.png`
  },
  // Złoty
  "Compendium.builders-crucible-creature-pack.creatures.Actor.7hjfTlY9vv2AzYaj": {
    actor: `modules/${MODULE_ID}/assets/creatures/dragons/Adult_Gold_Dragon.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dragons/Adult_Gold_Dragon.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.tQUMzgfe5QdyEFjo": {
    actor: `modules/${MODULE_ID}/assets/creatures/dragons/Adult_Gold_Dragon.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dragons/Adult_Gold_Dragon.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.4IhaTNNdtIhd8gGp": {
    actor: `modules/${MODULE_ID}/assets/creatures/dragons/Young_Gold_Dragon.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dragons/Young_Gold_Dragon.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.XBaCEZPw74XlCMQW": {
    actor: `modules/${MODULE_ID}/assets/creatures/dragons/Gold_Dragon_Wyrmling.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dragons/Gold_Dragon_Wyrmling.png`
  },
  // Smokożółw
  "Compendium.builders-crucible-creature-pack.creatures.Actor.6ftnBD5zSsc6S1yE": {
    actor: `modules/${MODULE_ID}/assets/creatures/dragons/Dragon_Turtle.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dragons/Dragon_Turtle.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.ypsHcMSfkdR3tHlz": {
    actor: `modules/${MODULE_ID}/assets/creatures/dragons/Dragon_Turtle_Alternative.png`,
    token: `modules/${MODULE_ID}/assets/creatures/dragons/Dragon_Turtle_Alternative.png`
  },

  // Creature Pack zewnętrzni:
  "Compendium.builders-crucible-creature-pack.creatures.Actor.XRpHgFVLUwfbQhwB": {
    actor: `modules/${MODULE_ID}/assets/creatures/outsiders/Aboleth.png`,
    token: `modules/${MODULE_ID}/assets/creatures/outsiders/Aboleth.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.ND1IJ7sypjuC8ym5": {
    actor: `modules/${MODULE_ID}/assets/creatures/outsiders/Manta_Ray.png`,
    token: `modules/${MODULE_ID}/assets/creatures/outsiders/Manta_Ray.png`
  },
  "Compendium.builders-crucible-creature-pack.creatures.Actor.Lvo9sD8ycNoAyzki": {
    actor: `modules/${MODULE_ID}/assets/creatures/outsiders/Eye_Monster.png`,
    token: `modules/${MODULE_ID}/assets/creatures/outsiders/Eye_Monster.png`
  },

  // Creature Pack żywiołaki: 
  "Compendium.builders-crucible-creature-pack.creatures.Actor.yzMUmHIOEAsJQ0Fs": {
    actor: `modules/${MODULE_ID}/assets/creatures/elementars/Gargoyle.png`,
    token: `modules/${MODULE_ID}/assets/creatures/elementars/Gargoyle.png`
  },

  // Pregen Characters example:
  "Compendium.builders-crucible-pregen-characters.pack-1.Actor.7ytCyEvS9r2ek3QC": {
    actor: `modules/${MODULE_ID}/assets/actors/Human_Fighter.png`,
    token: `modules/${MODULE_ID}/assets/actors/Human_Fighter.png`
  },
  "Compendium.builders-crucible-pregen-characters.pack-1.Actor.zhXx85ngLvx1j75V": {
    actor: `modules/${MODULE_ID}/assets/actors/Humanoid_Veteran.png`,
    token: `modules/${MODULE_ID}/assets/actors/Humanoid_Veteran.png`
  },
  "Compendium.builders-crucible-pregen-characters.pack-1.Actor.wb5ryNWtWNWsZfui": {
    actor: `modules/${MODULE_ID}/assets/actors/Tiefling_Wizard.png`,
    token: `modules/${MODULE_ID}/assets/actors/Tiefling_Wizard.png`
  },
  "Compendium.builders-crucible-pregen-characters.pack-1.Actor.tvK9gt4Qctoy6QTz": {
    actor: `modules/${MODULE_ID}/assets/actors/Tiefling_Wizard2.png`,
    token: `modules/${MODULE_ID}/assets/actors/TTiefling_Wizard2.png`
  },
  "Compendium.builders-crucible-pregen-characters.pack-1.Actor.aziJdmg6ZDeF2q8I": {
    actor: `modules/${MODULE_ID}/assets/actors/Core_Rogue.png`,
    token: `modules/${MODULE_ID}/assets/actors/Core_Rogue.png`
  },
  "Compendium.builders-crucible-pregen-characters.pack-1.Actor.kVnGaePoH885TGml": {
    actor: `modules/${MODULE_ID}/assets/actors/Core_Ranger.png`,
    token: `modules/${MODULE_ID}/assets/actors/Core_Ranger.png`
  },
  "Compendium.builders-crucible-pregen-characters.pack-1.Actor.dcupkUgKnWINRgNY": {
    actor: `modules/${MODULE_ID}/assets/actors/Smallfolk_Spellcaster.png`,
    token: `modules/${MODULE_ID}/assets/actors/Smallfolk_Spellcaster.png`
  },
  "Compendium.builders-crucible-pregen-characters.pack-1.Actor.OH0Wd2uUkgexBh9o": {
    actor: `modules/${MODULE_ID}/assets/actors/Smallfolk_Fighter.png`,
    token: `modules/${MODULE_ID}/assets/actors/Smallfolk_Fighter.png`
  },
  "Compendium.builders-crucible-pregen-characters.pack-1.Actor.0QrEUSnkV2dMFSXK": {
    actor: `modules/${MODULE_ID}/assets/actors/Core_Smallfolk_Monk.png`,
    token: `modules/${MODULE_ID}/assets/actors/Core_Smallfolk_Monk.png`
  },
  "Compendium.builders-crucible-pregen-characters.pack-1.Actor.SMOp1xzZZmONcakL": {
    actor: `modules/${MODULE_ID}/assets/actors/Dwarf_Fighter.png`,
    token: `modules/${MODULE_ID}/assets/actors/Dwarf_Fighter.png`
  },
  "Compendium.builders-crucible-pregen-characters.pack-1.Actor.r7XpkU0mYu2lmPSP": {
    actor: `modules/${MODULE_ID}/assets/actors/Smallfolk_Bard.png`,
    token: `modules/${MODULE_ID}/assets/actors/Smallfolk_Bard.png`
  },
  "Compendium.builders-crucible-pregen-characters.pack-1.Actor.WWrhlpWxvoLq6Pdv": {
    actor: `modules/${MODULE_ID}/assets/actors/Core_Smallfolk_Cleric.png`,
    token: `modules/${MODULE_ID}/assets/actors/Core_Smallfolk_Cleric.png`
  },
  "Compendium.builders-crucible-pregen-characters.pack-1.Actor.JHszcC7KVLPlzfch": {
    actor: `modules/${MODULE_ID}/assets/actors/Orc_Druid.png`,
    token: `modules/${MODULE_ID}/assets/actors/Orc_Druid.png`
  },
  "Compendium.builders-crucible-pregen-characters.pack-1.Actor.Kx571z87eUDzvPPK": {
    actor: `modules/${MODULE_ID}/assets/actors/HalfOrc_Ranger.png`,
    token: `modules/${MODULE_ID}/assets/actors/HalfOrc_Ranger.png`
  },
  "Compendium.builders-crucible-pregen-characters.pack-1.Actor.uRLSMU6KSns2jjgH": {
    actor: `modules/${MODULE_ID}/assets/actors/Goliath_Fighter.png`,
    token: `modules/${MODULE_ID}/assets/actors/Goliath_Fighter.png`
  },
  "Compendium.builders-crucible-pregen-characters.pack-1.Actor.h5nER5BdFZH0ojLj": {
    actor: `modules/${MODULE_ID}/assets/actors/Fire_Giant.png`,
    token: `modules/${MODULE_ID}/assets/actors/Fire_Giant.png`
  },
}

function getPackKeyFromCompendiumActorUuid(uuid) {
  const parts = String(uuid).split(".")

  if (parts.length < 5) return null
  if (parts[0] !== "Compendium") return null

  const packageId = parts[1]
  const packName = parts[2]
  const documentType = parts[3]

  if (documentType !== "Actor") return null

  return `${packageId}.${packName}`
}

function validateArtMap() {
  const errors = []

  for (const [uuid, art] of Object.entries(ART_BY_UUID)) {
    const packKey = getPackKeyFromCompendiumActorUuid(uuid)

    if (!packKey) {
      errors.push(`Nieprawidłowy UUID aktora: ${uuid}`)
      continue
    }

    if (!SUPPORTED_PACKS.has(packKey)) {
      errors.push(`UUID nie należy do obsługiwanych paczek: ${uuid}`)
      continue
    }

    if (!art.actor) {
      errors.push(`Brak ścieżki actor dla: ${uuid}`)
    }

    if (!art.token) {
      console.warn(`[${MODULE_ID}] Brak osobnego tokenu dla ${uuid}. Zostanie użyty obraz aktora.`)
    }
  }

  return errors
}

async function unlockPack(pack) {
  const wasLocked = pack.locked

  if (wasLocked) {
    await pack.configure({ locked: false })
  }

  return wasLocked
}

async function restorePackLock(pack, wasLocked) {
  if (wasLocked) {
    await pack.configure({ locked: true })
  }
}

async function patchCompendiumActorArt(uuid, art) {
  const packKey = getPackKeyFromCompendiumActorUuid(uuid)

  if (!packKey) {
    console.warn(`[${MODULE_ID}] Pominięto nieprawidłowy UUID: ${uuid}`)
    return false
  }

  const pack = game.packs.get(packKey)

  if (!pack) {
    console.warn(`[${MODULE_ID}] Nie znaleziono compendium: ${packKey}`)
    return false
  }

  const actorImg = art.actor
  const tokenImg = art.token ?? art.actor

  let wasLocked = false

  try {
    wasLocked = await unlockPack(pack)

    const actor = await foundry.utils.fromUuid(uuid)

    if (!actor) {
      console.warn(`[${MODULE_ID}] Nie znaleziono aktora: ${uuid}`)
      return false
    }

    const update = {}

    if (actor.img !== actorImg) {
      update.img = actorImg
    }

    if (actor.prototypeToken?.texture?.src !== tokenImg) {
      update["prototypeToken.texture.src"] = tokenImg
    }

    if (Object.keys(update).length === 0) {
      return false
    }

    await actor.update(update)

    console.log(`[${MODULE_ID}] Podmieniono grafikę w compendium: ${actor.name}`, {
      uuid,
      actorImg,
      tokenImg
    })

    return true
  } catch (error) {
    console.error(`[${MODULE_ID}] Błąd podczas patchowania aktora ${uuid}`, error)
    return false
  } finally {
    await restorePackLock(pack, wasLocked)
  }
}

async function patchAllCompendiumActors() {
  if (!game.user.isGM) return

  const validationErrors = validateArtMap()

  if (validationErrors.length > 0) {
    for (const error of validationErrors) {
      console.error(`[${MODULE_ID}] ${error}`)
    }

    ui.notifications.error(`[${MODULE_ID}] Wykryto błędy w ART_BY_UUID. Szczegóły są w konsoli.`)
    return
  }

  let changed = 0

  for (const [uuid, art] of Object.entries(ART_BY_UUID)) {
    const didChange = await patchCompendiumActorArt(uuid, art)

    if (didChange) {
      changed += 1
    }
  }

  if (changed > 0) {
    ui.notifications.info(`[${MODULE_ID}] Podmieniono grafiki w ${changed} aktorach compendium.`)
  } else {
    console.log(`[${MODULE_ID}] Nie było zmian do zastosowania.`)
  }
}

async function patchImportedActor(actor) {
  if (!game.user.isGM) return
  if (!actor) return

  const sourceId = actor.getFlag("core", "sourceId")

  if (!sourceId) return

  const art = ART_BY_UUID[sourceId]

  if (!art) return

  const actorImg = art.actor
  const tokenImg = art.token ?? art.actor

  const update = {}

  if (actor.img !== actorImg) {
    update.img = actorImg
  }

  if (actor.prototypeToken?.texture?.src !== tokenImg) {
    update["prototypeToken.texture.src"] = tokenImg
  }

  if (Object.keys(update).length === 0) return

  await actor.update(update)

  console.log(`[${MODULE_ID}] Podmieniono grafikę importowanego aktora: ${actor.name}`, {
    sourceId,
    actorImg,
    tokenImg
  })
}

async function patchExistingWorldActors() {
  if (!game.user.isGM) return

  let changed = 0

  for (const actor of game.actors) {
    const sourceId = actor.getFlag("core", "sourceId")

    if (!sourceId) continue

    const art = ART_BY_UUID[sourceId]

    if (!art) continue

    const actorImg = art.actor
    const tokenImg = art.token ?? art.actor

    const update = {}

    if (actor.img !== actorImg) {
      update.img = actorImg
    }

    if (actor.prototypeToken?.texture?.src !== tokenImg) {
      update["prototypeToken.texture.src"] = tokenImg
    }

    if (Object.keys(update).length === 0) continue

    await actor.update(update)
    changed += 1
  }

  if (changed > 0) {
    console.log(`[${MODULE_ID}] Podmieniono grafiki w ${changed} aktorach świata.`)
  }
}

async function patchExistingSceneTokens() {
  if (!game.user.isGM) return

  let changed = 0

  for (const scene of game.scenes) {
    const tokenUpdates = []

    for (const token of scene.tokens) {
      const actor = token.actor

      if (!actor) continue

      const sourceId = actor.getFlag("core", "sourceId")

      if (!sourceId) continue

      const art = ART_BY_UUID[sourceId]

      if (!art) continue

      const tokenImg = art.token ?? art.actor

      if (token.texture?.src === tokenImg) continue

      tokenUpdates.push({
        _id: token.id,
        "texture.src": tokenImg
      })
    }

    if (tokenUpdates.length === 0) continue

    await scene.updateEmbeddedDocuments("Token", tokenUpdates)
    changed += tokenUpdates.length
  }

  if (changed > 0) {
    console.log(`[${MODULE_ID}] Podmieniono grafiki w ${changed} tokenach na scenach.`)
  }
}

Hooks.once("ready", async () => {
  if (!game.user.isGM) return

  await patchAllCompendiumActors()
  await patchExistingWorldActors()
  await patchExistingSceneTokens()
})

Hooks.on("createActor", async actor => {
  await patchImportedActor(actor)
})