const cpuHierarchy = {
  intel: {
    label: "Intel",
    families: {
      legacy: {
        label: "Core 2 / Pentium 🦖",
        models: [
          { id: "q6600", label: "Core 2 Quad Q6600 🦖", score1080: 10, price: 20 },
          { id: "q9400", label: "Core 2 Quad Q9400 🦖", score1080: 14, price: 25 },
          { id: "q9550", label: "Core 2 Quad Q9550 🦖", score1080: 16, price: 30 },
          { id: "pentium-g4560", label: "Pentium G4560 🦖", score1080: 30, price: 40 },
        ],
      },
      i3: {
        label: "Core i3",
        models: [
          { id: "i3-4130", label: "Core i3-4130 🦖", score1080: 25, price: 35 },
          { id: "i3-6100", label: "Core i3-6100 🦖", score1080: 35, price: 45 },
          { id: "i3-7100", label: "Core i3-7100 🦖", score1080: 45, price: 50 },
          { id: "i3-8100", label: "Core i3-8100", score1080: 60, price: 60 },
          { id: "i3-9100", label: "Core i3-9100", score1080: 70, price: 70 },
          { id: "i3-10100", label: "Core i3-10100", score1080: 85, price: 80 },
          { id: "i3-12100", label: "Core i3-12100", score1080: 115, price: 110 },
          { id: "i3-13100", label: "Core i3-13100", score1080: 125, price: 120 },
          { id: "i3-14100", label: "Core i3-14100", score1080: 130, price: 130 },
        ],
      },
      i5: {
        label: "Core i5",
        models: [
          { id: "i5-4460", label: "Core i5-4460 🦖", score1080: 45, price: 40 },
          { id: "i5-4690k", label: "Core i5-4690K 🦖", score1080: 55, price: 50 },
          { id: "i5-6400", label: "Core i5-6400 🦖", score1080: 65, price: 60 },
          { id: "i5-6600k", label: "Core i5-6600K 🦖", score1080: 75, price: 70 },
          { id: "i5-7400", label: "Core i5-7400 🦖", score1080: 75, price: 75 },
          { id: "i5-7600k", label: "Core i5-7600K 🦖", score1080: 85, price: 85 },
          { id: "i5-8400", label: "Core i5-8400", score1080: 105, price: 95 },
          { id: "i5-9400f", label: "Core i5-9400F", score1080: 115, price: 105 },
          { id: "i5-9600k", label: "Core i5-9600K", score1080: 125, price: 120 },
          { id: "i5-10400", label: "Core i5-10400", score1080: 135, price: 130 },
          { id: "i5-10600k", label: "Core i5-10600K", score1080: 145, price: 140 },
          { id: "i5-11400", label: "Core i5-11400", score1080: 145, price: 140 },
          { id: "i5-11600k", label: "Core i5-11600K", score1080: 160, price: 160 },
          { id: "i5-12400", label: "Core i5-12400", score1080: 175, price: 170 },
          { id: "i5-12600k", label: "Core i5-12600K", score1080: 195, price: 200 },
          { id: "i5-13400", label: "Core i5-13400", score1080: 190, price: 210 },
          { id: "i5-13600k", label: "Core i5-13600K", score1080: 220, price: 280 },
          { id: "i5-14400", label: "Core i5-14400", score1080: 200, price: 220 },
          { id: "i5-14600k", label: "Core i5-14600K", score1080: 230, price: 300 },
        ],
      },
      i7: {
        label: "Core i7",
        models: [
          { id: "i7-4770", label: "Core i7-4770 🦖", score1080: 65, price: 60 },
          { id: "i7-4790k", label: "Core i7-4790K 🦖", score1080: 75, price: 80 },
          { id: "i7-6700", label: "Core i7-6700 🦖", score1080: 85, price: 90 },
          { id: "i7-6700k", label: "Core i7-6700K 🦖", score1080: 95, price: 100 },
          { id: "i7-7700", label: "Core i7-7700 🦖", score1080: 100, price: 110 },
          { id: "i7-7700k", label: "Core i7-7700K 🦖", score1080: 110, price: 130 },
          { id: "i7-8700", label: "Core i7-8700", score1080: 130, price: 150 },
          { id: "i7-8700k", label: "Core i7-8700K", score1080: 140, price: 170 },
          { id: "i7-9700k", label: "Core i7-9700K", score1080: 160, price: 200 },
          { id: "i7-10700", label: "Core i7-10700", score1080: 175, price: 220 },
          { id: "i7-10700k", label: "Core i7-10700K", score1080: 185, price: 250 },
          { id: "i7-11700", label: "Core i7-11700", score1080: 185, price: 260 },
          { id: "i7-11700k", label: "Core i7-11700K", score1080: 200, price: 290 },
          { id: "i7-12700", label: "Core i7-12700", score1080: 215, price: 320 },
          { id: "i7-12700k", label: "Core i7-12700K", score1080: 230, price: 350 },
          { id: "i7-13700k", label: "Core i7-13700K", score1080: 250, price: 380 },
          { id: "i7-14700k", label: "Core i7-14700K", score1080: 260, price: 400 },
        ],
      },
      i9: {
        label: "Core i9",
        models: [
          { id: "i9-9900k", label: "Core i9-9900K", score1080: 170, price: 300 },
          { id: "i9-10900k", label: "Core i9-10900K", score1080: 190, price: 350 },
          { id: "i9-11900k", label: "Core i9-11900K", score1080: 200, price: 400 },
          { id: "i9-12900k", label: "Core i9-12900K", score1080: 225, price: 480 },
          { id: "i9-13900k", label: "Core i9-13900K", score1080: 245, price: 550 },
          { id: "i9-14900k", label: "Core i9-14900K", score1080: 265, price: 600 },
          { id: "i9-14900ks", label: "Core i9-14900KS 🏆", score1080: 275, price: 650 },
        ],
      },
      ultra: {
        label: "Core Ultra (Series 2) 🚀",
        models: [
          { id: "ultra-5-245k", label: "Core Ultra 5 245K", score1080: 175, price: 310 },
          { id: "ultra-7-265k", label: "Core Ultra 7 265K", score1080: 215, price: 410 },
          { id: "ultra-9-285k", label: "Core Ultra 9 285K", score1080: 255, price: 600 },
        ],
      },
    },
  },
  amd: {
    label: "AMD Ryzen",
    families: {
      fx: {
        label: "FX Series 🦖",
        models: [
          { id: "fx-6300", label: "FX-6300 🦖", score1080: 40, price: 20 },
          { id: "fx-8350", label: "FX-8350 🦖", score1080: 55, price: 30 },
          { id: "fx-9590", label: "FX-9590 🦖", score1080: 60, price: 40 },
        ],
      },
      ryzen3: {
        label: "Ryzen 3",
        models: [
          { id: "r3-1200", label: "Ryzen 3 1200", score1080: 45, price: 40 },
          { id: "r3-1300x", label: "Ryzen 3 1300X", score1080: 50, price: 45 },
          { id: "r3-2200g", label: "Ryzen 3 2200G", score1080: 55, price: 50 },
          { id: "r3-3100", label: "Ryzen 3 3100", score1080: 70, price: 70 },
          { id: "r3-4100", label: "Ryzen 3 4100", score1080: 80, price: 75 },
        ],
      },
      ryzen5: {
        label: "Ryzen 5",
        models: [
          { id: "r5-1600", label: "Ryzen 5 1600", score1080: 75, price: 60 },
          { id: "r5-2600", label: "Ryzen 5 2600", score1080: 90, price: 70 },
          { id: "r5-2600x", label: "Ryzen 5 2600X", score1080: 95, price: 75 },
          { id: "r5-3600", label: "Ryzen 5 3600", score1080: 105, price: 90 },
          { id: "r5-3600x", label: "Ryzen 5 3600X", score1080: 110, price: 95 },
          { id: "r5-3600xt", label: "Ryzen 5 3600XT", score1080: 112, price: 100 },
          { id: "r5-4500", label: "Ryzen 5 4500", score1080: 100, price: 85 },
          { id: "r5-5500", label: "Ryzen 5 5500", score1080: 115, price: 100 },
          { id: "r5-5600g", label: "Ryzen 5 5600G", score1080: 118, price: 120 },
          { id: "r5-5600", label: "Ryzen 5 5600", score1080: 120, price: 130 },
          { id: "r5-5600x", label: "Ryzen 5 5600X", score1080: 130, price: 145 },
          { id: "r5-7600", label: "Ryzen 5 7600", score1080: 155, price: 220 },
          { id: "r5-7600x", label: "Ryzen 5 7600X", score1080: 160, price: 230 },
          { id: "r5-9600x", label: "Ryzen 5 9600X 🚀", score1080: 180, price: 280 },
        ],
      },
      ryzen7: {
        label: "Ryzen 7",
        models: [
          { id: "r7-1700", label: "Ryzen 7 1700", score1080: 95, price: 80 },
          { id: "r7-2700", label: "Ryzen 7 2700", score1080: 110, price: 100 },
          { id: "r7-2700x", label: "Ryzen 7 2700X", score1080: 118, price: 110 },
          { id: "r7-3700x", label: "Ryzen 7 3700X", score1080: 135, price: 140 },
          { id: "r7-3800x", label: "Ryzen 7 3800X", score1080: 140, price: 150 },
          { id: "r7-5700x", label: "Ryzen 7 5700X", score1080: 160, price: 170 },
          { id: "r7-5800x", label: "Ryzen 7 5800X", score1080: 165, price: 190 },
          { id: "r7-5800x3d", label: "Ryzen 7 5800X3D", score1080: 185, price: 300 },
          { id: "r7-7700", label: "Ryzen 7 7700", score1080: 190, price: 290 },
          { id: "r7-7700x", label: "Ryzen 7 7700X", score1080: 200, price: 320 },
          { id: "r7-7800x3d", label: "Ryzen 7 7800X3D", score1080: 220, price: 380 },
          { id: "r7-9700x", label: "Ryzen 7 9700X 🚀", score1080: 215, price: 360 },
          { id: "r7-9800x3d", label: "Ryzen 7 9800X3D 🏆", score1080: 265, price: 480 },
        ],
      },
      ryzen9: {
        label: "Ryzen 9",
        models: [
          { id: "r9-3900x", label: "Ryzen 9 3900X", score1080: 185, price: 200 },
          { id: "r9-3950x", label: "Ryzen 9 3950X", score1080: 195, price: 250 },
          { id: "r9-5900x", label: "Ryzen 9 5900X", score1080: 210, price: 350 },
          { id: "r9-5950x", label: "Ryzen 9 5950X", score1080: 220, price: 400 },
          { id: "r9-7900", label: "Ryzen 9 7900", score1080: 230, price: 400 },
          { id: "r9-7900x", label: "Ryzen 9 7900X", score1080: 240, price: 450 },
          { id: "r9-7950x", label: "Ryzen 9 7950X", score1080: 250, price: 550 },
          { id: "r9-7950x3d", label: "Ryzen 9 7950X3D", score1080: 255, price: 600 },
          { id: "r9-9900x", label: "Ryzen 9 9900X 🚀", score1080: 250, price: 550 },
          { id: "r9-9950x", label: "Ryzen 9 9950X 🚀", score1080: 270, price: 650 },
        ],
      },
    },
  },
};

const gpuHierarchy = {
  nvidia: {
    label: "NVIDIA",
    families: {
      gt: {
        label: "GT Series",
        models: [
          { id: "gt-610", label: "GeForce GT 610 🦖", score1080: 5, price: 30 },
          { id: "gt-710", label: "GeForce GT 710 🦖", score1080: 8, price: 35 },
          { id: "gt-730", label: "GeForce GT 730 🦖", score1080: 20, price: 45 },
          { id: "gt-1030", label: "GeForce GT 1030 🦖", score1080: 40, price: 80 },
        ],
      },
      mx: {
        label: "MX Series (Mobile)",
        models: [
          { id: "mx-130", label: "GeForce MX130", score1080: 25, price: 50 },
          { id: "mx-150", label: "GeForce MX150", score1080: 30, price: 60 },
          { id: "mx-250", label: "GeForce MX250", score1080: 35, price: 70 },
        ],
      },
      gtx7: {
        label: "GTX 700 Series",
        models: [
          { id: "gtx-750", label: "GTX 750 🦖", score1080: 35, price: 40 },
          { id: "gtx-750ti", label: "GTX 750 Ti 🦖", score1080: 45, price: 50 },
          { id: "gtx-760", label: "GTX 760 🦖", score1080: 55, price: 60 },
          { id: "gtx-770", label: "GTX 770 🦖", score1080: 65, price: 70 },
          { id: "gtx-780", label: "GTX 780 🦖", score1080: 75, price: 80 },
          { id: "gtx-780ti", label: "GTX 780 Ti 🦖", score1080: 85, price: 90 },
        ],
      },
      gtx9: {
        label: "GTX 900 Series",
        models: [
          { id: "gtx-950", label: "GTX 950 🦖", score1080: 55, price: 60 },
          { id: "gtx-960", label: "GTX 960 🦖", score1080: 65, price: 70 },
          { id: "gtx-970", label: "GTX 970 🦖", score1080: 85, price: 90 },
          { id: "gtx-980", label: "GTX 980 🦖", score1080: 100, price: 110 },
          { id: "gtx-980ti", label: "GTX 980 Ti 🦖", score1080: 115, price: 130 },
        ],
      },
      gtx10: {
        label: "GTX 10 Series",
        models: [
          { id: "gtx-1050", label: "GTX 1050", score1080: 50, price: 70 },
          { id: "gtx-1050ti", label: "GTX 1050 Ti", score1080: 55, price: 80 },
          { id: "gtx-1060-3g", label: "GTX 1060 3GB", score1080: 70, price: 100 },
          { id: "gtx-1060-6g", label: "GTX 1060 6GB", score1080: 80, price: 120 },
          { id: "gtx-1070", label: "GTX 1070", score1080: 95, price: 150 },
          { id: "gtx-1070ti", label: "GTX 1070 Ti", score1080: 105, price: 170 },
          { id: "gtx-1080", label: "GTX 1080", score1080: 115, price: 200 },
          { id: "gtx-1080ti", label: "GTX 1080 Ti", score1080: 130, price: 250 },
        ],
      },
      gtx16: {
        label: "GTX 16 Series",
        models: [
          { id: "gtx-1650", label: "GTX 1650", score1080: 75, price: 130 },
          { id: "gtx-1650s", label: "GTX 1650 Super", score1080: 85, price: 140 },
          { id: "gtx-1660", label: "GTX 1660", score1080: 90, price: 150 },
          { id: "gtx-1660s", label: "GTX 1660 Super", score1080: 95, price: 170 },
          { id: "gtx-1660ti", label: "GTX 1660 Ti", score1080: 100, price: 190 },
        ],
      },
      rtx20: {
        label: "RTX 20 Series",
        models: [
          { id: "rtx-2060", label: "RTX 2060", score1080: 110, price: 200 },
          { id: "rtx-2060s", label: "RTX 2060 Super", score1080: 120, price: 220 },
          { id: "rtx-2070", label: "RTX 2070", score1080: 125, price: 240 },
          { id: "rtx-2070s", label: "RTX 2070 Super", score1080: 130, price: 260 },
          { id: "rtx-2080", label: "RTX 2080", score1080: 140, price: 300 },
          { id: "rtx-2080s", label: "RTX 2080 Super", score1080: 148, price: 320 },
          { id: "rtx-2080ti", label: "RTX 2080 Ti", score1080: 160, price: 350 },
        ],
      },
      rtx30: {
        label: "RTX 30 Series",
        models: [
          { id: "rtx-3050", label: "RTX 3050", score1080: 120, price: 220 },
          { id: "rtx-3060", label: "RTX 3060", score1080: 135, price: 280 },
          { id: "rtx-3060ti", label: "RTX 3060 Ti", score1080: 160, price: 330 },
          { id: "rtx-3070", label: "RTX 3070", score1080: 185, price: 380 },
          { id: "rtx-3070ti", label: "RTX 3070 Ti", score1080: 195, price: 450 },
          { id: "rtx-3080-10gb", label: "RTX 3080 (10GB)", score1080: 210, price: 550 },
          { id: "rtx-3080-12gb", label: "RTX 3080 (12GB)", score1080: 215, price: 600 },
          { id: "rtx-3080ti", label: "RTX 3080 Ti", score1080: 220, price: 700 },
          { id: "rtx-3090", label: "RTX 3090", score1080: 225, price: 800 },
          { id: "rtx-3090ti", label: "RTX 3090 Ti", score1080: 230, price: 900 },
        ],
      },
      rtx40: {
        label: "RTX 40 Series",
        models: [
          { id: "rtx-4060", label: "RTX 4060", score1080: 160, price: 300 },
          { id: "rtx-4060ti-8gb", label: "RTX 4060 Ti (8GB)", score1080: 175, price: 380 },
          { id: "rtx-4060ti-16gb", label: "RTX 4060 Ti (16GB)", score1080: 178, price: 430 },
          { id: "rtx-4070", label: "RTX 4070", score1080: 210, price: 550 },
          { id: "rtx-4070s", label: "RTX 4070 Super", score1080: 220, price: 600 },
          { id: "rtx-4070ti", label: "RTX 4070 Ti", score1080: 225, price: 700 },
          { id: "rtx-4070tis", label: "RTX 4070 Ti Super", score1080: 230, price: 800 },
          { id: "rtx-4080", label: "RTX 4080", score1080: 240, price: 1000 },
          { id: "rtx-4080s", label: "RTX 4080 Super", score1080: 245, price: 1000 },
          { id: "rtx-4090", label: "RTX 4090", score1080: 260, price: 1600 },
        ],
      },
      rtx50: {
        label: "RTX 50 Series 🚀",
        models: [
          { id: "rtx-5050", label: "RTX 5050 (Est.)", score1080: 145, price: 350 },
          { id: "rtx-5060", label: "RTX 5060 (Est.)", score1080: 190, price: 450 },
          { id: "rtx-5070", label: "RTX 5070 (Est.)", score1080: 245, price: 700 },
          { id: "rtx-5070ti", label: "RTX 5070 Ti (Est.)", score1080: 265, price: 900 },
          { id: "rtx-5080", label: "RTX 5080 (Est.)", score1080: 295, price: 1200 },
          { id: "rtx-5090", label: "RTX 5090 (Est.) 🏆", score1080: 340, price: 2000 },
        ],
      },
      quadro: {
        label: "Quadro / RTX Pro",
        models: [
          { id: "quadro-k2200", label: "Quadro K2200 🦖", score1080: 25, price: 50 },
          { id: "quadro-k4200", label: "Quadro K4200 🦖", score1080: 35, price: 60 },
          { id: "quadro-m2000", label: "Quadro M2000 🦖", score1080: 45, price: 80 },
          { id: "quadro-m4000", label: "Quadro M4000 🦖", score1080: 65, price: 120 },
          { id: "quadro-p600", label: "Quadro P600", score1080: 30, price: 80 },
          { id: "quadro-p1000", label: "Quadro P1000", score1080: 45, price: 150 },
          { id: "quadro-p2000", label: "Quadro P2000", score1080: 75, price: 250 },
          { id: "quadro-p4000", label: "Quadro P4000", score1080: 105, price: 400 },
          { id: "quadro-p5000", label: "Quadro P5000", score1080: 125, price: 600 },
          { id: "quadro-rtx-4000", label: "Quadro RTX 4000", score1080: 135, price: 800 },
          { id: "quadro-rtx-5000", label: "Quadro RTX 5000", score1080: 155, price: 1200 },
          { id: "quadro-rtx-6000", label: "Quadro RTX 6000", score1080: 175, price: 2000 },
          { id: "rtx-a2000", label: "RTX A2000", score1080: 110, price: 450 },
          { id: "rtx-a4000", label: "RTX A4000", score1080: 165, price: 1000 },
          { id: "rtx-a5000", label: "RTX A5000", score1080: 200, price: 1800 },
          { id: "rtx-a6000", label: "RTX A6000", score1080: 230, price: 3500 },
          { id: "rtx-6000-ada", label: "RTX 6000 Ada 🚀", score1080: 275, price: 6800 },
        ],
      },
      tesla: {
        label: "Tesla / Data Center",
        models: [
          { id: "tesla-p4", label: "Tesla P4", score1080: 90, price: 150 },
          { id: "tesla-t4", label: "Tesla T4", score1080: 115, price: 800 },
        ],
      },
    },
  },
  amd: {
    label: "AMD Radeon",
    families: {
      legacy: {
        label: "Legacy Radeon / R7 / R9 🦖",
        models: [
          { id: "hd-5450", label: "Radeon HD 5450 🦖", score1080: 3, price: 10 },
          { id: "hd-5770", label: "Radeon HD 5770 🦖", score1080: 20, price: 20 },
          { id: "hd-6850", label: "Radeon HD 6850 🦖", score1080: 25, price: 25 },
          { id: "hd-6970", label: "Radeon HD 6970 🦖", score1080: 30, price: 30 },
          { id: "hd-7750", label: "Radeon HD 7750 🦖", score1080: 28, price: 30 },
          { id: "hd-7770", label: "Radeon HD 7770 🦖", score1080: 32, price: 35 },
          { id: "hd-7850", label: "Radeon HD 7850 🦖", score1080: 38, price: 40 },
          { id: "hd-7870", label: "Radeon HD 7870 🦖", score1080: 42, price: 45 },
          { id: "hd-7950", label: "Radeon HD 7950 🦖", score1080: 48, price: 50 },
          { id: "hd-7970", label: "Radeon HD 7970 🦖", score1080: 55, price: 60 },
          { id: "r7-240", label: "Radeon R7 240 🦖", score1080: 15, price: 20 },
          { id: "r7-250", label: "Radeon R7 250 🦖", score1080: 25, price: 30 },
          { id: "r7-260x", label: "Radeon R7 260X 🦖", score1080: 35, price: 40 },
          { id: "r7-370", label: "Radeon R7 370 🦖", score1080: 45, price: 50 },
          { id: "r9-270x", label: "Radeon R9 270X 🦖", score1080: 48, price: 55 },
          { id: "r9-280x", label: "Radeon R9 280X 🦖", score1080: 60, price: 65 },
          { id: "r9-290x", label: "Radeon R9 290X 🦖", score1080: 75, price: 80 },
          { id: "r9-380", label: "Radeon R9 380 🦖", score1080: 55, price: 60 },
          { id: "r9-390", label: "Radeon R9 390 🦖", score1080: 70, price: 80 },
          { id: "r9-fury-x", label: "Radeon R9 Fury X 🦖", score1080: 95, price: 100 },
        ],
      },
      rx400: {
        label: "RX 400 Series",
        models: [
          { id: "rx-470", label: "RX 470", score1080: 70, price: 70 },
          { id: "rx-480", label: "RX 480", score1080: 80, price: 80 },
        ],
      },
      rx500: {
        label: "RX 500 Series",
        models: [
          { id: "rx-570", label: "RX 570", score1080: 85, price: 90 },
          { id: "rx-580", label: "RX 580", score1080: 95, price: 100 },
          { id: "rx-590", label: "RX 590", score1080: 100, price: 110 },
        ],
      },
      rx5000: {
        label: "RX 5000 Series",
        models: [
          { id: "rx-5300", label: "RX 5300", score1080: 65, price: 120 },
          { id: "rx-5500", label: "RX 5500", score1080: 80, price: 140 },
          { id: "rx-5500xt", label: "RX 5500 XT", score1080: 90, price: 150 },
          { id: "rx-5600", label: "RX 5600", score1080: 105, price: 180 },
          { id: "rx-5600xt", label: "RX 5600 XT", score1080: 115, price: 200 },
          { id: "rx-5700", label: "RX 5700", score1080: 125, price: 230 },
          { id: "rx-5700xt", label: "RX 5700 XT", score1080: 135, price: 250 },
        ],
      },
      rx6000: {
        label: "RX 6000 Series",
        models: [
          { id: "rx-6400", label: "RX 6400", score1080: 60, price: 130 },
          { id: "rx-6500xt", label: "RX 6500 XT", score1080: 75, price: 160 },
          { id: "rx-6600", label: "RX 6600", score1080: 110, price: 200 },
          { id: "rx-6600xt", label: "RX 6600 XT", score1080: 125, price: 240 },
          { id: "rx-6650xt", label: "RX 6650 XT", score1080: 130, price: 250 },
          { id: "rx-6700", label: "RX 6700", score1080: 140, price: 290 },
          { id: "rx-6700xt", label: "RX 6700 XT", score1080: 155, price: 320 },
          { id: "rx-6750xt", label: "RX 6750 XT", score1080: 165, price: 350 },
          { id: "rx-6800", label: "RX 6800", score1080: 180, price: 420 },
          { id: "rx-6800xt", label: "RX 6800 XT", score1080: 195, price: 500 },
          { id: "rx-6900xt", label: "RX 6900 XT", score1080: 210, price: 600 },
          { id: "rx-6950xt", label: "RX 6950 XT", score1080: 220, price: 650 },
        ],
      },
      rx7000: {
        label: "RX 7000 Series",
        models: [
          { id: "rx-7600", label: "RX 7600", score1080: 145, price: 260 },
          { id: "rx-7600xt", label: "RX 7600 XT", score1080: 155, price: 320 },
          { id: "rx-7700xt", label: "RX 7700 XT", score1080: 185, price: 420 },
          { id: "rx-7800xt", label: "RX 7800 XT", score1080: 210, price: 500 },
          { id: "rx-7900gre", label: "RX 7900 GRE", score1080: 220, price: 550 },
          { id: "rx-7900xt", label: "RX 7900 XT", score1080: 235, price: 700 },
          { id: "rx-7900xtx", label: "RX 7900 XTX", score1080: 255, price: 900 },
        ],
      },
      rx8000: {
        label: "RX 8000 Series (Upcoming) 🚀",
        models: [
          { id: "rx-8800xt", label: "RX 8800 XT (Est.)", score1080: 230, price: 600 },
          { id: "rx-8700xt", label: "RX 8700 XT (Est.)", score1080: 200, price: 450 },
        ],
      },
    },
  },
};

const cpuModels = {};
const gpuModels = {};

Object.values(cpuHierarchy).forEach((brand) => {
  Object.values(brand.families).forEach((family) => {
    family.models.forEach((model) => {
      cpuModels[model.id] = model;
    });
  });
});

Object.values(gpuHierarchy).forEach((brand) => {
  Object.values(brand.families).forEach((family) => {
    family.models.forEach((model) => {
      gpuModels[model.id] = model;
    });
  });
});

let currentLang = "en";
let lastGpuScore = null;
let lastResolution = null;

const uiMessages = {
  en: {
    "subtitle-main": "Bottleneck Calculator",
    "title-main": "Bottleneck Calculator",
    "subtitle-description":
      "See how balanced your CPU and GPU combination is for gaming workloads.",
    "nav-calculator": "Calculator",
    "nav-benchmarks": "Game Benchmarks",
    "nav-contact": "Contact",
    "label-cpu": "Processor (CPU)",
    "label-gpu": "Graphics Card (GPU)",
    "btn-calc": "Calculate Bottleneck",
    "auto-test-button": "Auto Test (Beta)",
    "btn-reset": "Reset",
    "cpu-brand-placeholder": "Select brand (Intel / AMD)",
    "cpu-family-placeholder": "Select family (i5 / Ryzen 5 etc.)",
    "cpu-model-placeholder": "Select model",
    "gpu-brand-placeholder": "Select brand (NVIDIA / AMD)",
    "gpu-family-placeholder": "Select series (GTX / RTX / RX etc.)",
    "gpu-model-placeholder": "Select model",
    "label-resolution": "Target Resolution",
    "label-refresh": "Target Refresh",
    "result-title": "Result",
    "result-tag": "Ready",
    "result-label": "Select a combination",
    "legend-low": "Balanced",
    "legend-mid": "Mild bottleneck",
    "legend-high": "Noticeable bottleneck",
    "detail-bottleneck-label": "Limiting Component",
    "detail-fps-label": "Estimated FPS Impact",
    "detail-advice-label": "Recommendation",
    "btn-copy": "Copy Results",
    "btn-share": "Share on X",
    "copy-success": "Copied to clipboard!",
    "advice": "Select a combination.",
    "how-title": "How Is System Balance Calculated?",
    "how-text":
      "DailyTechHub models rely on relative performance scores derived from synthetic tests, game benchmarks and real‑world usage data.",
    "how-note":
      "Results are designed to be close to real‑world behavior but are not 100% accurate. Actual performance depends on games, drivers, cooling and background tasks.",
    "bench-title": "Game Benchmark Estimate",
    "bench-text":
      "See approximate FPS in popular games based on your selected combination.",
    "bench-col-game": "Game",
    "bench-col-settings": "Suggested Settings",
    "bench-col-fps": "Estimated FPS",
    "bench-cs-name": "CS2 (competitive FPS)",
    "bench-cp-name": "Cyberpunk 2077",
    "bench-val-name": "Valorant",
    "bench-fort-name": "Fortnite (Performance Mode)",
    "bench-gta-name": "GTA V",
    "bench-rdr2-name": "Red Dead Redemption 2",
    "bench-spider-name": "Spider-Man Remastered",
    "bench-cs-settings": "Run a calculation",
    "bench-cp-settings": "Run a calculation",
    "bench-val-settings": "Run a calculation",
    "bench-fort-settings": "Run a calculation",
    "bench-gta-settings": "Run a calculation",
    "bench-rdr2-settings": "Run a calculation",
    "bench-spider-settings": "Run a calculation",
    "bench-note":
      "Values are approximated using GPU score and resolution; real FPS will vary with in‑game settings, drivers and CPU performance.",
    "contact-title": "DailyTechHub Contact",
    "contact-text":
      "If you have questions about bottleneck analysis, PC builds or hardware suggestions, feel free to reach out.",
    "contact-note":
      "This is a demo contact area; a single click will open your default email client.",
    "search-placeholder": "Search...",
    "rec-title": "Recommended Component Upgrades",
    "rec-cpu": "CPU Upgrade",
    "rec-gpu": "GPU Upgrade",
    "theme-dark": "Dark Mode • Tech UI",
    "theme-light": "Light Mode • Tech UI",
    "mode-single": "Single Mode",
    "mode-versus": "Versus Mode",
    "title-system-a": "System A (Current)",
    "title-system-b": "System B (Target)",
    "label-cpu-b": "Processor (CPU)",
    "label-gpu-b": "Graphics Card (GPU)",
    "cpu-brand-placeholder-b": "Select brand (Intel / AMD)",
    "cpu-family-placeholder-b": "Select family (i5 / Ryzen 5 etc.)",
    "cpu-model-placeholder-b": "Select model",
    "gpu-brand-placeholder-b": "Select brand (NVIDIA / AMD)",
    "gpu-family-placeholder-b": "Select series (GTX / RTX / RX etc.)",
    "gpu-model-placeholder-b": "Select model",
    "vs-summary": "System B is {percent}% more balanced than System A.",
    "vs-summary-worse": "System B is {percent}% less balanced than System A.",
    "vs-summary-equal": "Both systems have identical balance.",
    "res-comp-title": "Bottleneck by Resolution",
    "res-comp-note": "Higher resolutions typically reduce CPU bottleneck by shifting load to the GPU.",
  },
  tr: {
    "subtitle-main": "Darboğaz Hesaplayıcı",
    "title-main": "Darboğaz Hesaplayıcı",
    "subtitle-description":
      "İşlemci ve ekran kartı kombinasyonunuzun oyun yüklerinde ne kadar dengeli çalıştığını görün.",
    "nav-calculator": "Hesaplayıcı",
    "nav-benchmarks": "Oyun Benchmark",
    "nav-contact": "İletişim",
    "label-cpu": "İşlemci (CPU)",
    "label-gpu": "Ekran Kartı (GPU)",
    "btn-calc": "Darboğazı Hesapla",
    "auto-test-button": "Otomatik Test (Beta)",
    "btn-reset": "Sıfırla",
    "cpu-brand-placeholder": "Marka seçin (Intel / AMD)",
    "cpu-family-placeholder": "Seri seçin (i5 / Ryzen 5 vb.)",
    "cpu-model-placeholder": "Model seçin",
    "gpu-brand-placeholder": "Marka seçin (NVIDIA / AMD)",
    "gpu-family-placeholder": "Seri seçin (GTX / RTX / RX vb.)",
    "gpu-model-placeholder": "Model seçin",
    "label-cpu-b": "İşlemci (CPU)",
    "label-gpu-b": "Ekran Kartı (GPU)",
    "cpu-brand-placeholder-b": "Marka seçin (Intel / AMD)",
    "cpu-family-placeholder-b": "Seri seçin (i5 / Ryzen 5 vb.)",
    "cpu-model-placeholder-b": "Model seçin",
    "gpu-brand-placeholder-b": "Marka seçin (NVIDIA / AMD)",
    "gpu-family-placeholder-b": "Seri seçin (GTX / RTX / RX vb.)",
    "gpu-model-placeholder-b": "Model seçin",
    "label-resolution": "Hedef Çözünürlük",
    "label-refresh": "Hedef Yenileme",
    "result-title": "Sonuç",
    "result-tag": "Hazır",
    "result-label": "Kombinasyonu seçin",
    "legend-low": "Dengeli",
    "legend-mid": "Hafif Darboğaz",
    "legend-high": "Belirgin Darboğaz",
    "detail-bottleneck-label": "Darboğaz Yapan Bileşen",
    "detail-fps-label": "Tahmini FPS Etkisi",
    "detail-advice-label": "Öneri",
    "btn-copy": "Sonuçları Kopyala",
    "btn-share": "X'te Paylaş",
    "copy-success": "Panoya kopyalandı!",
    "advice": "Kombinasyonu seçin.",
    "how-title": "Sistem Dengesi Nasıl Hesaplanıyor?",
    "how-text":
      "DailyTechHub modelleri; sentetik testler, oyun benchmark’ları ve gerçek kullanıcı verilerinden elde edilen göreli performans skorlarına dayanır.",
    "how-note":
      "Hesaplama sonucu gerçek dünyaya yakın olacak şekilde tasarlanmıştır ancak %100 doğruluk iddiası yoktur. Donanımınızın gerçek performansı; oyun, sürücü, soğutma ve arka plan işlemlerine göre değişebilir.",
    "bench-title": "Oyun Benchmark Tahmini",
    "bench-text":
      "Seçtiğiniz kombinasyona göre popüler oyunlarda yaklaşık FPS değerlerini görün.",
    "bench-col-game": "Oyun",
    "bench-col-settings": "Önerilen Ayar",
    "bench-col-fps": "Tahmini FPS",
    "bench-cs-name": "CS2 (rekabetçi FPS)",
    "bench-cp-name": "Cyberpunk 2077",
    "bench-val-name": "Valorant",
    "bench-fort-name": "Fortnite (Performans Modu)",
    "bench-gta-name": "GTA V",
    "bench-rdr2-name": "Red Dead Redemption 2",
    "bench-spider-name": "Spider-Man Remastered",
    "bench-cs-settings": "Hesaplama yapın",
    "bench-cp-settings": "Hesaplama yapın",
    "bench-val-settings": "Hesaplama yapın",
    "bench-fort-settings": "Hesaplama yapın",
    "bench-gta-settings": "Hesaplama yapın",
    "bench-rdr2-settings": "Hesaplama yapın",
    "bench-spider-settings": "Hesaplama yapın",
    "bench-note":
      "Değerler, seçilen ekran kartı skoru ve çözünürlüğe göre yaklaşık olarak hesaplanır; gerçek FPS oyun içi ayarlar, sürücü ve CPU’ya göre değişebilir.",
    "contact-title": "DailyTechHub İletişim",
    "contact-text":
      "Darboğaz hesaplaması, sistem toplama veya donanım önerileri hakkında soruların varsa bize ulaşabilirsin.",
    "contact-note":
      "Form şu an demo amaçlıdır; bir tıkla varsayılan e‑posta uygulaman açılır.",
    "search-placeholder": "Ara...",
    "rec-title": "Önerilen Parça Yükseltmeleri",
    "rec-cpu": "İşlemci Önerisi",
    "rec-gpu": "Ekran Kartı Önerisi",
    "theme-dark": "Karanlık Mod • Tech UI",
    "theme-light": "Aydınlık Mod • Tech UI",
    "mode-single": "Tekli Mod",
    "mode-versus": "Karşılaştırma (Versus)",
    "title-system-a": "Sistem A (Mevcut)",
    "title-system-b": "Sistem B (Hedef)",
    "vs-summary": "Sistem B, Sistem A'dan %{percent} daha dengeli.",
    "vs-summary-worse": "Sistem B, Sistem A'dan %{percent} daha az dengeli.",
    "vs-summary-equal": "Her iki sistem de aynı dengeye sahip.",
    "res-comp-title": "Çözünürlüğe Göre Darboğaz",
    "res-comp-note": "Yüksek çözünürlükler, yükü ekran kartına (GPU) bindirerek işlemci (CPU) darboğazını azaltır.",
  },
};

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  const dict = uiMessages[lang];
  if (!dict) return;

  Object.entries(dict).forEach(([id, text]) => {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = text;
    }
  });

  // Re-populate all selects to refresh placeholders and labels
  const cpuBrandSelect = document.getElementById("cpu-brand-select");
  const cpuFamilySelect = document.getElementById("cpu-family-select");
  const cpuModelSelect = document.getElementById("cpu-model-select");
  const gpuBrandSelect = document.getElementById("gpu-brand-select");
  const gpuFamilySelect = document.getElementById("gpu-family-select");
  const gpuModelSelect = document.getElementById("gpu-model-select");

  if (cpuBrandSelect) {
    const currentBrand = cpuBrandSelect.value;
    populateBrandSelect(cpuBrandSelect, cpuHierarchy, dict["cpu-brand-placeholder"]);
    cpuBrandSelect.value = currentBrand;

    if (currentBrand) {
      const currentFamily = cpuFamilySelect.value;
      populateFamilySelect(cpuFamilySelect, cpuHierarchy, currentBrand, dict["cpu-family-placeholder"]);
      cpuFamilySelect.value = currentFamily;

      if (currentFamily) {
        const currentModel = cpuModelSelect.value;
        populateModelSelect(cpuModelSelect, cpuHierarchy, currentBrand, currentFamily, dict["cpu-model-placeholder"]);
        cpuModelSelect.value = currentModel;
      } else {
        clearSelect(cpuModelSelect, dict["cpu-model-placeholder"]);
      }
    } else {
      clearSelect(cpuFamilySelect, dict["cpu-family-placeholder"]);
      clearSelect(cpuModelSelect, dict["cpu-model-placeholder"]);
    }
  }

  if (gpuBrandSelect) {
    const currentBrand = gpuBrandSelect.value;
    populateBrandSelect(gpuBrandSelect, gpuHierarchy, dict["gpu-brand-placeholder"]);
    gpuBrandSelect.value = currentBrand;

    if (currentBrand) {
      const currentFamily = gpuFamilySelect.value;
      populateFamilySelect(gpuFamilySelect, gpuHierarchy, currentBrand, dict["gpu-family-placeholder"]);
      gpuFamilySelect.value = currentFamily;

      if (currentFamily) {
        const currentModel = gpuModelSelect.value;
        populateModelSelect(gpuModelSelect, gpuHierarchy, currentBrand, currentFamily, dict["gpu-model-placeholder"]);
        gpuModelSelect.value = currentModel;
      } else {
        clearSelect(gpuModelSelect, dict["gpu-model-placeholder"]);
      }
    } else {
      clearSelect(gpuFamilySelect, dict["gpu-family-placeholder"]);
      clearSelect(gpuModelSelect, dict["gpu-model-placeholder"]);
    }
  }

  // System B selects
  const cpuBrandSelectB = document.getElementById("cpu-brand-select-b");
  const cpuFamilySelectB = document.getElementById("cpu-family-select-b");
  const cpuModelSelectB = document.getElementById("cpu-model-select-b");
  const gpuBrandSelectB = document.getElementById("gpu-brand-select-b");
  const gpuFamilySelectB = document.getElementById("gpu-family-select-b");
  const gpuModelSelectB = document.getElementById("gpu-model-select-b");

  if (cpuBrandSelectB) {
    const currentBrand = cpuBrandSelectB.value;
    populateBrandSelect(cpuBrandSelectB, cpuHierarchy, dict["cpu-brand-placeholder-b"]);
    cpuBrandSelectB.value = currentBrand;

    if (currentBrand) {
      const currentFamily = cpuFamilySelectB.value;
      populateFamilySelect(cpuFamilySelectB, cpuHierarchy, currentBrand, dict["cpu-family-placeholder-b"]);
      cpuFamilySelectB.value = currentFamily;

      if (currentFamily) {
        const currentModel = cpuModelSelectB.value;
        populateModelSelect(cpuModelSelectB, cpuHierarchy, currentBrand, currentFamily, dict["cpu-model-placeholder-b"]);
        cpuModelSelectB.value = currentModel;
      } else {
        clearSelect(cpuModelSelectB, dict["cpu-model-placeholder-b"]);
      }
    } else {
      clearSelect(cpuFamilySelectB, dict["cpu-family-placeholder-b"]);
      clearSelect(cpuModelSelectB, dict["cpu-model-placeholder-b"]);
    }
  }

  if (gpuBrandSelectB) {
    const currentBrand = gpuBrandSelectB.value;
    populateBrandSelect(gpuBrandSelectB, gpuHierarchy, dict["gpu-brand-placeholder-b"]);
    gpuBrandSelectB.value = currentBrand;

    if (currentBrand) {
      const currentFamily = gpuFamilySelectB.value;
      populateFamilySelect(gpuFamilySelectB, gpuHierarchy, currentBrand, dict["gpu-family-placeholder-b"]);
      gpuFamilySelectB.value = currentFamily;

      if (currentFamily) {
        const currentModel = gpuModelSelectB.value;
        populateModelSelect(gpuModelSelectB, gpuHierarchy, currentBrand, currentFamily, dict["gpu-model-placeholder-b"]);
        gpuModelSelectB.value = currentModel;
      } else {
        clearSelect(gpuModelSelectB, dict["gpu-model-placeholder-b"]);
      }
    } else {
      clearSelect(gpuFamilySelectB, dict["gpu-family-placeholder-b"]);
      clearSelect(gpuModelSelectB, dict["gpu-model-placeholder-b"]);
    }
  }

  // Sync remaining static selects
  syncCustomSelect("resolution-select");
  syncCustomSelect("refresh-select");
  syncCustomSelect("lang-select");

  // Update theme status text if it exists
  const themeStatus = document.getElementById("theme-status");
  if (themeStatus) {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    themeStatus.textContent = isLight ? dict["theme-light"] : dict["theme-dark"];
  }

  const resCompTitle = document.getElementById("res-comp-title");
  if (resCompTitle) resCompTitle.textContent = dict["res-comp-title"];
  const resCompNote = document.getElementById("res-comp-note");
  if (resCompNote) resCompNote.textContent = dict["res-comp-note"];

  // Re-run benchmarks if already calculated
  if (lastGpuScore !== null && lastResolution !== null) {
    updateBenchmarks(lastGpuScore, lastResolution);
  }
}

function findBrandFamilyForModel(hierarchy, modelId) {
  for (const [brandKey, brand] of Object.entries(hierarchy)) {
    for (const [familyKey, family] of Object.entries(brand.families)) {
      if (family.models.some((m) => m.id === modelId)) {
        return { brandKey, familyKey };
      }
    }
  }
  return null;
}

function detectGpuModelFromWebGL() {
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) return null;

    const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
    if (!debugInfo) return null;

    const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
    if (!renderer || typeof renderer !== "string") return null;

    const rendererLower = renderer.toLowerCase();

    let bestMatch = null;
    let bestLength = 0;

    Object.values(gpuModels).forEach((model) => {
      let pattern = model.label
        .toLowerCase()
        .replace("nvidia", "")
        .replace("geforce", "")
        .replace("amd", "")
        .replace("radeon", "")
        .trim();

      if (!pattern) return;

      if (rendererLower.includes(pattern) && pattern.length > bestLength) {
        bestMatch = model;
        bestLength = pattern.length;
      }
    });

    return bestMatch;
  } catch {
    return null;
  }
}

function scaleScoreForResolution(baseScore, resolution) {
  if (resolution === "720") return baseScore * 1.15;
  if (resolution === "1080") return baseScore;
  if (resolution === "1440") return baseScore * 0.9;
  if (resolution === "2160") return baseScore * 0.78;
  return baseScore;
}

function scaleScoreForRefresh(baseScore, refresh) {
  const hz = Number(refresh);
  if (hz <= 75) return baseScore;
  if (hz <= 120) return baseScore * 1.05;
  if (hz <= 144) return baseScore * 1.12;
  if (hz <= 165) return baseScore * 1.15;
  if (hz <= 240) return baseScore * 1.25;
  if (hz <= 280) return baseScore * 1.3;
  return baseScore * 1.4; // 360Hz+
}

function computeBottleneck(cpuScore, gpuScore) {
  const minScore = Math.min(cpuScore, gpuScore);
  const maxScore = Math.max(cpuScore, gpuScore);

  if (maxScore === 0) {
    return { percentage: 0, side: "none" };
  }

  const balanceRatio = minScore / maxScore;
  let percentage = (1 - balanceRatio) * 100;
  percentage = Math.max(0, Math.min(percentage, 55));

  const side =
    cpuScore < gpuScore ? "cpu" : cpuScore > gpuScore ? "gpu" : "balanced";

  return { percentage: Math.round(percentage), side };
}

function getAdviceText(result, cpuLabel, gpuLabel, resolution, refresh) {
  if (currentLang === "tr") {
    if (result.side === "balanced" || result.percentage <= 5) {
      return `${cpuLabel} ve ${gpuLabel} kombinasyonu ${resolution}p @ ${refresh} Hz için oldukça dengeli görünüyor. Güncel oyunların çoğunda bileşenler birbirini güzel tamamlayacaktır.`;
    }

    const sideTextTr =
      result.side === "cpu"
        ? "İşlemci belirgin şekilde daha zayıf."
        : "Ekran kartı, işlemcinin gerisinde kalıyor.";

    const upgradeHintTr =
      result.side === "cpu"
        ? "Daha güçlü bir işlemciye geçmek veya oyunlarda CPU yükünü azaltan ayarları kısmak darboğazı hafifletebilir."
        : "Çözünürlüğü/ayarları bir miktar yükseltmek veya daha güçlü bir ekran kartına geçmek, sistem dengesini iyileştirecektir.";

    return `${sideTextTr} Tahmini darboğaz: %${result.percentage}. ${upgradeHintTr}`;
  }

  if (result.side === "balanced" || result.percentage <= 5) {
    return `${cpuLabel} and ${gpuLabel} look very well balanced for ${resolution}p @ ${refresh} Hz. In most modern games both components should complement each other nicely.`;
  }

  const sideTextEn =
    result.side === "cpu"
      ? "The processor is noticeably weaker."
      : "The graphics card is falling behind the CPU.";

  const upgradeHintEn =
    result.side === "cpu"
      ? "Upgrading to a stronger CPU or reducing CPU‑heavy settings in games can ease the bottleneck."
      : "Increasing resolution/settings slightly or upgrading the GPU can improve overall balance.";

  return `${sideTextEn} Estimated bottleneck: ${result.percentage}%. ${upgradeHintEn}`;
}

function getFpsImpactText(result) {
  if (currentLang === "tr") {
    if (result.percentage <= 5) {
      return "Pratikte ihmal edilebilir. FPS kaybı çoğu senaryoda fark edilmez.";
    }
    if (result.percentage <= 15) {
      return "Hafif sınırlama. Özellikle çok çekirdek kullanan oyunlarda %5–10 civarı FPS kaybı görülebilir.";
    }
    if (result.percentage <= 30) {
      return "Orta seviye darboğaz. Bazı sahnelerde %10–25 arası FPS kaybı yaşanabilir.";
    }
    return "Belirgin darboğaz. Özellikle CPU/GPU yoğun sahnelerde %25 ve üzeri FPS kaybı mümkündür.";
  }

  if (result.percentage <= 5) {
    return "Practically negligible. FPS loss is barely noticeable in most scenarios.";
  }
  if (result.percentage <= 15) {
    return "Mild limitation. You may see around 5–10% FPS loss, especially in CPU‑heavy titles.";
  }
  if (result.percentage <= 30) {
    return "Moderate bottleneck. In some scenes 10–25% FPS loss is possible.";
  }
  return "Significant bottleneck. In CPU/GPU‑intensive scenes, 25% or more FPS loss is possible.";
}

function updateBenchmarks(gpuScore, resolution) {
  lastGpuScore = gpuScore;
  lastResolution = resolution;
  
  const scale =
    resolution === "720" ? 1.3 : resolution === "1080" ? 1 : resolution === "1440" ? 0.8 : 0.6;

  const csBase = gpuScore * 2.0;
  const cpBase = gpuScore * 0.7;
  const valBase = gpuScore * 2.4;
  const fortBase = gpuScore * 1.8;
  const gtaBase = gpuScore * 1.3;
  const rdr2Base = gpuScore * 0.75;
  const spiderBase = gpuScore * 0.9;

  const csFps = Math.round(csBase * scale);
  const cpFps = Math.round(cpBase * scale);
  const valFps = Math.round(valBase * scale);
  const fortFps = Math.round(fortBase * scale);
  const gtaFps = Math.round(gtaBase * scale);
  const rdr2Fps = Math.round(rdr2Base * scale);
  const spiderFps = Math.round(spiderBase * scale);

  let csSettings, cpSettings, valSettings, fortSettings, gtaSettings, rdr2Settings, spiderSettings;

  if (currentLang === "tr") {
    csSettings = resolution === "2160" ? "Yüksek / Bazı efektler orta" : "Yüksek";
    cpSettings = resolution === "2160" ? "Orta" : resolution === "1440" ? "Orta - Yüksek" : "Yüksek (DLSS/FSR açık)";
    valSettings = resolution === "720" ? "Orta - Yüksek" : "Düşük - Orta (rekabetçi)";
    fortSettings = resolution === "720" ? "Orta" : "Performans Modu (Düşük - Orta)";
    gtaSettings = resolution === "2160" ? "Yüksek" : "Çok Yüksek";
    rdr2Settings = resolution === "2160" ? "Düşük - Orta" : "Orta - Yüksek";
    spiderSettings = resolution === "2160" ? "Orta" : "Yüksek (RT kapalı)";
  } else {
    csSettings = resolution === "2160" ? "High / Some effects medium" : "High";
    cpSettings = resolution === "2160" ? "Medium" : resolution === "1440" ? "Medium - High" : "High (DLSS/FSR enabled)";
    valSettings = resolution === "720" ? "Medium - High" : "Low - Medium (competitive)";
    fortSettings = resolution === "720" ? "Medium" : "Performance Mode (Low - Medium)";
    gtaSettings = resolution === "2160" ? "High" : "Very High";
    rdr2Settings = resolution === "2160" ? "Low - Medium" : "Medium - High";
    spiderSettings = resolution === "2160" ? "Medium" : "High (RT off)";
  }

  const setGameData = (id, settings, fps) => {
    const settingsEl = document.getElementById(`bench-${id}-settings`);
    const fpsEl = document.getElementById(`bench-${id}-fps`);
    if (settingsEl) settingsEl.textContent = settings;
    if (fpsEl) {
      fpsEl.textContent = currentLang === "tr" ? `${fps} FPS civarı` : `around ${fps} FPS`;
    }
  };

  setGameData("cs", csSettings, csFps);
  setGameData("cp", cpSettings, cpFps);
  setGameData("val", valSettings, valFps);
  setGameData("fort", fortSettings, fortFps);
  setGameData("gta", gtaSettings, gtaFps);
  setGameData("rdr2", rdr2Settings, rdr2Fps);
  setGameData("spider", spiderSettings, spiderFps);
}

function formatSideLabel(side) {
  if (currentLang === "tr") {
    if (side === "cpu") return "İşlemci (CPU) sınırlıyor";
    if (side === "gpu") return "Ekran kartı (GPU) sınırlıyor";
    if (side === "balanced") return "Dengeli kombinasyon";
    return "—";
  }

  if (side === "cpu") return "CPU is limiting";
  if (side === "gpu") return "GPU is limiting";
  if (side === "balanced") return "Balanced combination";
  return "—";
}

function formatResultTag(result) {
  if (currentLang === "tr") {
    if (result.percentage <= 5) return "Dengeli";
    if (result.percentage <= 15) return "Hafif Darboğaz";
    if (result.percentage <= 30) return "Orta Seviye Darboğaz";
    return "Belirgin Darboğaz";
  }

  if (result.percentage <= 5) return "Balanced";
  if (result.percentage <= 15) return "Mild Bottleneck";
  if (result.percentage <= 30) return "Moderate Bottleneck";
  return "Significant Bottleneck";
}

function updateUI(result, cpuLabel, gpuLabel, resolution, refresh, systemSuffix = "") {
  const percentageEl = document.getElementById(`result-percentage${systemSuffix}`);
  const labelEl = document.getElementById(`result-label${systemSuffix}`);
  const tagEl = document.getElementById(`result-tag${systemSuffix}`) || document.getElementById("result-tag");
  const sideEl = document.getElementById(`bottleneck-side${systemSuffix}`);
  const fpsImpactEl = document.getElementById(`fps-impact${systemSuffix}`);
  const adviceEl = document.getElementById(`advice${systemSuffix}`);
  const meterFill = document.getElementById(`meter-fill${systemSuffix}`);

  if (labelEl) {
    labelEl.textContent = formatResultTag(result);
    labelEl.classList.remove("error");
  }
  
  if (percentageEl) percentageEl.textContent = `${result.percentage}%`;
  if (tagEl && systemSuffix === "") tagEl.textContent = formatResultTag(result);
  if (sideEl) sideEl.textContent = formatSideLabel(result.side);
  if (fpsImpactEl) fpsImpactEl.textContent = getFpsImpactText(result);
  if (adviceEl) adviceEl.textContent = getAdviceText(
    result,
    cpuLabel,
    gpuLabel,
    resolution,
    refresh
  );

  if (meterFill) {
    const normalizedWidth = Math.max(5, result.percentage);
    meterFill.style.width = `${normalizedWidth}%`;
  }
}

function updateResolutionComparison(cpu, gpu, refresh) {
  const container = document.getElementById("res-comparison-container");
  if (!container) return;

  const resolutions = ["1080", "1440", "2160"];
  
  resolutions.forEach(res => {
    // For bottleneck calculation, we assume CPU load is relatively constant across resolutions (game logic),
    // while GPU load increases with resolution (reducing its effective score/framerate).
    let cpuScore = scaleScoreForRefresh(cpu.score1080, refresh);
    let gpuScore = scaleScoreForResolution(gpu.score1080, res);
    
    const result = computeBottleneck(cpuScore, gpuScore);
    
    const bar = document.getElementById(`res-bar-${res}`);
    const val = document.getElementById(`res-val-${res}`);
    
    if (bar) bar.style.width = `${result.percentage}%`;
    if (val) val.textContent = `${result.percentage}%`;
  });

  container.style.display = "block";
}

function clearSelect(selectEl, placeholderText) {
  selectEl.innerHTML = "";
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = placeholderText;
  selectEl.appendChild(placeholder);
  syncCustomSelect(selectEl.id);
}

function populateBrandSelect(selectEl, hierarchy, placeholderText) {
  clearSelect(selectEl, placeholderText);
  Object.entries(hierarchy).forEach(([key, value]) => {
    const opt = document.createElement("option");
    opt.value = key;
    opt.textContent = value.label;
    selectEl.appendChild(opt);
  });
  syncCustomSelect(selectEl.id);
}

function populateFamilySelect(selectEl, hierarchy, brandKey, placeholderText) {
  clearSelect(selectEl, placeholderText);
  selectEl.disabled = !brandKey;
  if (!brandKey) {
    syncCustomSelect(selectEl.id);
    return;
  }

  const brand = hierarchy[brandKey];
  if (!brand) {
    syncCustomSelect(selectEl.id);
    return;
  }

  Object.entries(brand.families).forEach(([key, value]) => {
    const opt = document.createElement("option");
    opt.value = key;
    opt.textContent = value.label;
    selectEl.appendChild(opt);
  });
  syncCustomSelect(selectEl.id);
}

function populateModelSelect(
  selectEl,
  hierarchy,
  brandKey,
  familyKey,
  placeholderText
) {
  clearSelect(selectEl, placeholderText);
  selectEl.disabled = !brandKey || !familyKey;
  if (!brandKey || !familyKey) {
    syncCustomSelect(selectEl.id);
    return;
  }

  const brand = hierarchy[brandKey];
  if (!brand) {
    syncCustomSelect(selectEl.id);
    return;
  }
  const family = brand.families[familyKey];
  if (!family) {
    syncCustomSelect(selectEl.id);
    return;
  }

  family.models.forEach((model) => {
    const opt = document.createElement("option");
    opt.value = model.id;
    opt.textContent = model.label;
    selectEl.appendChild(opt);
  });
  syncCustomSelect(selectEl.id);
}

function syncCustomSelect(selectId) {
  const selectEl = document.getElementById(selectId);
  if (!selectEl) return;

  let wrapper = selectEl.parentElement;
  if (!wrapper.classList.contains("dt-select-wrapper")) {
    wrapper = document.createElement("div");
    wrapper.className = "dt-select-wrapper";
    selectEl.parentNode.insertBefore(wrapper, selectEl);
    wrapper.appendChild(selectEl);
    selectEl.style.display = "none";

    const trigger = document.createElement("div");
    trigger.className = "dt-select-trigger";
    wrapper.appendChild(trigger);

    const optionsContainer = document.createElement("div");
    optionsContainer.className = "dt-select-options";
    wrapper.appendChild(optionsContainer);

    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = wrapper.classList.contains("open");
      document
        .querySelectorAll(".dt-select-wrapper")
        .forEach((w) => w.classList.remove("open"));
      if (!isOpen && !selectEl.disabled) {
        wrapper.classList.add("open");
        wrapper.classList.remove("invalid");
        // Focus search input when opening
        const searchInput = optionsContainer.querySelector(".dt-select-search-input");
        if (searchInput) {
          setTimeout(() => searchInput.focus(), 50);
        }
      }
    });
  }

  const trigger = wrapper.querySelector(".dt-select-trigger");
  const optionsContainer = wrapper.querySelector(".dt-select-options");

  // Update disabled state
  if (selectEl.disabled) {
    wrapper.classList.add("disabled");
    trigger.style.opacity = "0.5";
    trigger.style.cursor = "not-allowed";
  } else {
    wrapper.classList.remove("disabled");
    trigger.style.opacity = "1";
    trigger.style.cursor = "pointer";
  }

  // Update trigger text
  const selectedOption = selectEl.options[selectEl.selectedIndex];
  let triggerText = selectedOption ? selectedOption.textContent : "";
  
  // If it's a placeholder and parent has invalid class, maybe add an icon
  if (wrapper.classList.contains("invalid") && (!selectedOption || !selectedOption.value)) {
    triggerText = `⚠️ ${triggerText}`;
  }
  
  trigger.textContent = triggerText;

  // Clear container
  optionsContainer.innerHTML = "";

  // Add search input if there are more than 5 options (excluding placeholder)
  const hasManyOptions = selectEl.options.length > 6;
  if (hasManyOptions) {
    const searchContainer = document.createElement("div");
    searchContainer.className = "dt-select-search-container";
    
    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.className = "dt-select-search-input";
    searchInput.placeholder = uiMessages[currentLang]["search-placeholder"];
    
    searchContainer.appendChild(searchInput);
    optionsContainer.appendChild(searchContainer);

    searchInput.addEventListener("click", (e) => e.stopPropagation());
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase();
      const options = optionsContainer.querySelectorAll(".dt-select-option:not(.placeholder)");
      
      options.forEach(opt => {
        const text = opt.textContent.toLowerCase();
        if (text.includes(query)) {
          opt.style.display = "block";
        } else {
          opt.style.display = "none";
        }
      });

      // Reset scroll to top when filtering to avoid "empty" view
      optionsContainer.scrollTop = 0;
    });
  }

  // Update options list
  Array.from(selectEl.options).forEach((opt, index) => {
    const customOpt = document.createElement("div");
    customOpt.className = "dt-select-option";
    if (index === 0 && !opt.value) customOpt.classList.add("placeholder");
    if (index === selectEl.selectedIndex) customOpt.classList.add("selected");
    customOpt.textContent = opt.textContent;

    customOpt.addEventListener("click", (e) => {
      e.stopPropagation();
      selectEl.selectedIndex = index;
      selectEl.dispatchEvent(new Event("change"));
      wrapper.classList.remove("open");
      syncCustomSelect(selectId);
    });
    optionsContainer.appendChild(customOpt);
  });
}

function init() {
  const cpuBrandSelect = document.getElementById("cpu-brand-select");
  const cpuFamilySelect = document.getElementById("cpu-family-select");
  const cpuModelSelect = document.getElementById("cpu-model-select");

  const gpuBrandSelect = document.getElementById("gpu-brand-select");
  const gpuFamilySelect = document.getElementById("gpu-family-select");
  const gpuModelSelect = document.getElementById("gpu-model-select");

  const resolutionSelect = document.getElementById("resolution-select");
  const refreshSelect = document.getElementById("refresh-select");
  const form = document.getElementById("bottleneck-form");
  const yearEl = document.getElementById("year");
  const autoTestButton = document.getElementById("auto-test-button");
  const langSelect = document.getElementById("lang-select");
  const btnCopy = document.getElementById("btn-copy");
  const themeToggle = document.getElementById("theme-toggle");

  const modeSingleBtn = document.getElementById("mode-single");
  const modeVersusBtn = document.getElementById("mode-versus");
  const systemBInput = document.getElementById("system-b");
  const systemATitle = document.getElementById("title-system-a");
  const systemsContainer = document.getElementById("systems-container");
  const resultsContainer = document.getElementById("results-container");
  const resultBoxB = document.getElementById("result-box-b");
  const versusDivider = document.getElementById("versus-divider");
  const labelSystemA = document.getElementById("label-system-a");
  const versusSummary = document.getElementById("versus-summary");

  let isVersusMode = false;

  const cpuBrandSelectB = document.getElementById("cpu-brand-select-b");
  const cpuFamilySelectB = document.getElementById("cpu-family-select-b");
  const cpuModelSelectB = document.getElementById("cpu-model-select-b");
  const gpuBrandSelectB = document.getElementById("gpu-brand-select-b");
  const gpuFamilySelectB = document.getElementById("gpu-family-select-b");
  const gpuModelSelectB = document.getElementById("gpu-model-select-b");

  if (modeSingleBtn && modeVersusBtn) {
    modeSingleBtn.addEventListener("click", () => {
      isVersusMode = false;
      modeSingleBtn.classList.add("active");
      modeVersusBtn.classList.remove("active");
      systemBInput.style.display = "none";
      systemATitle.style.display = "none";
      systemsContainer.classList.remove("versus");
      resultsContainer.classList.remove("versus");
      resultBoxB.style.display = "none";
      versusDivider.style.display = "none";
      labelSystemA.style.display = "none";
      versusSummary.style.display = "none";
    });

    modeVersusBtn.addEventListener("click", () => {
      isVersusMode = true;
      modeVersusBtn.classList.add("active");
      modeSingleBtn.classList.remove("active");
      systemBInput.style.display = "flex";
      systemATitle.style.display = "block";
      systemsContainer.classList.add("versus");
      resultsContainer.classList.add("versus");
      resultBoxB.style.display = "block";
      versusDivider.style.display = "flex";
      labelSystemA.style.display = "block";
      // summary only if calculated
    });
  }

  const allSelectIds = [
    "cpu-brand-select",
    "cpu-family-select",
    "cpu-model-select",
    "gpu-brand-select",
    "gpu-family-select",
    "gpu-model-select",
    "cpu-brand-select-b",
    "cpu-family-select-b",
    "cpu-model-select-b",
    "gpu-brand-select-b",
    "gpu-family-select-b",
    "gpu-model-select-b",
    "resolution-select",
    "refresh-select",
  ];

  if (themeToggle) {
    // Sync UI with the theme set by the inline script
    const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
    const themeIcon = document.getElementById("theme-toggle-icon");
    if (themeIcon) {
      themeIcon.textContent = currentTheme === "light" ? "☀️" : "🌙";
    }

    themeToggle.addEventListener("click", () => {
      const activeTheme = document.documentElement.getAttribute("data-theme") || "dark";
      const nextTheme = activeTheme === "dark" ? "light" : "dark";
      
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("dt-theme", nextTheme);
      
      if (themeIcon) {
        themeIcon.textContent = nextTheme === "light" ? "☀️" : "🌙";
      }

      // Refresh language to update theme-status text
      applyLanguage(currentLang);
    });
  }

  allSelectIds.forEach((id) => {
    syncCustomSelect(id);
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("change", () => {
        const wrapper = el.parentElement;
        if (wrapper.classList.contains("dt-select-wrapper")) {
          wrapper.classList.remove("invalid");
        }
        syncCustomSelect(id);
      });
    }
  });

  document.addEventListener("click", () => {
    document
      .querySelectorAll(".dt-select-wrapper")
      .forEach((w) => w.classList.remove("open"));
  });

  if (btnCopy) {
    btnCopy.addEventListener("click", () => {
      const cpuId = cpuModelSelect.value;
      const gpuId = gpuModelSelect.value;
      if (!cpuId || !gpuId) return;

      const resultText = `
DailyTechHub Bottleneck Result:
------------------------------
CPU: ${cpuModels[cpuId].label}
GPU: ${gpuModels[gpuId].label}
Resolution: ${resolutionSelect.value}p
Bottleneck: ${document.getElementById("result-percentage").textContent}
Status: ${document.getElementById("result-label").textContent}
Impact: ${document.getElementById("fps-impact").textContent}
------------------------------
Check yours at DailyTechHub
      `.trim();

      navigator.clipboard.writeText(resultText).then(() => {
        const originalText = btnCopy.textContent;
        btnCopy.textContent = uiMessages[currentLang]["copy-success"];
        btnCopy.classList.add("dt-success-text");
        setTimeout(() => {
          btnCopy.textContent = uiMessages[currentLang]["btn-copy"];
          btnCopy.classList.remove("dt-success-text");
        }, 2000);
      });
    });
  }

  const btnReset = document.getElementById("btn-reset");
  if (btnReset) {
    btnReset.addEventListener("click", () => {
      // Reset all selects
      [cpuBrandSelect, gpuBrandSelect, cpuBrandSelectB, gpuBrandSelectB].forEach(el => {
        if (el) {
          el.value = "";
          el.dispatchEvent(new Event("change"));
        }
      });
      
      // Reset resolution/refresh
      resolutionSelect.value = "1080";
      refreshSelect.value = "144";
      resolutionSelect.dispatchEvent(new Event("change"));
      refreshSelect.dispatchEvent(new Event("change"));

      // Clear results
      const resetResult = (suffix = "") => {
          const percentageEl = document.getElementById(`result-percentage${suffix}`);
          const labelEl = document.getElementById(`result-label${suffix}`);
          const meterFill = document.getElementById(`meter-fill${suffix}`);
          const adviceEl = document.getElementById(`advice${suffix}`);
          
          if (percentageEl) percentageEl.textContent = "—%";
          if (labelEl) labelEl.textContent = uiMessages[currentLang]["result-label"];
          if (meterFill) meterFill.style.width = "0%";
          if (adviceEl) adviceEl.textContent = uiMessages[currentLang]["advice"];
      };

      resetResult("");
      resetResult("-b");

      // Hide optional sections
      const recContainer = document.getElementById("recommendation-container");
      const resContainer = document.getElementById("res-comparison-container");
      if (recContainer) recContainer.style.display = "none";
      if (resContainer) resContainer.style.display = "none";
      
      // Reset benchmarks table
      document.querySelectorAll("[id^='bench-'][id$='-fps']").forEach(el => el.textContent = "—");
      
      // Sync custom selects
      allSelectIds.forEach(id => syncCustomSelect(id));
    });
  }

  const btnShare = document.getElementById("btn-share");
  if (btnShare) {
    btnShare.addEventListener("click", () => {
      const cpuId = cpuModelSelect.value;
      const gpuId = gpuModelSelect.value;
      const percentageEl = document.getElementById("result-percentage");
      
      if (!cpuId || !gpuId || !percentageEl || percentageEl.textContent === "—%") {
          const msg = currentLang === "tr" ? "Lütfen önce hesaplama yapın!" : "Please calculate a result first!";
          alert(msg);
          return;
      }
      
      const cpuName = cpuModels[cpuId].label;
      const gpuName = gpuModels[gpuId].label;
      const percentage = percentageEl.textContent;
      
      const text = `I checked my PC bottleneck on DailyTechHub! 🖥️\n\nCPU: ${cpuName}\nGPU: ${gpuName}\nBottleneck: ${percentage} ⚠️\n\nCheck yours here:`;
      const url = "https://dailytechhub.com/bottleneck-calculator";
      const hashtags = "DailyTechHub,PCBuild,Gaming";
      
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}&hashtags=${hashtags}`;
      
      window.open(twitterUrl, "_blank");
    });
  }

  populateBrandSelect(
    cpuBrandSelect,
    cpuHierarchy,
    uiMessages[currentLang]["cpu-brand-placeholder"]
  );
  populateBrandSelect(
    gpuBrandSelect,
    gpuHierarchy,
    uiMessages[currentLang]["gpu-brand-placeholder"]
  );

  populateBrandSelect(
    cpuBrandSelectB,
    cpuHierarchy,
    uiMessages[currentLang]["cpu-brand-placeholder"]
  );
  populateBrandSelect(
    gpuBrandSelectB,
    gpuHierarchy,
    uiMessages[currentLang]["gpu-brand-placeholder"]
  );

  const handleCpuBrandChange = () => {
    const brandKey = cpuBrandSelect.value;
    populateFamilySelect(
      cpuFamilySelect,
      cpuHierarchy,
      brandKey,
      uiMessages[currentLang]["cpu-family-placeholder"]
    );
    clearSelect(
      cpuModelSelect,
      uiMessages[currentLang]["cpu-model-placeholder"]
    );
    cpuModelSelect.disabled = true;
  };

  const handleCpuFamilyChange = () => {
    const brandKey = cpuBrandSelect.value;
    const familyKey = cpuFamilySelect.value;
    populateModelSelect(
      cpuModelSelect,
      cpuHierarchy,
      brandKey,
      familyKey,
      uiMessages[currentLang]["cpu-model-placeholder"]
    );
  };

  const handleGpuBrandChange = () => {
    const brandKey = gpuBrandSelect.value;
    populateFamilySelect(
      gpuFamilySelect,
      gpuHierarchy,
      brandKey,
      uiMessages[currentLang]["gpu-family-placeholder"]
    );
    clearSelect(
      gpuModelSelect,
      uiMessages[currentLang]["gpu-model-placeholder"]
    );
    gpuModelSelect.disabled = true;
  };

  const handleGpuFamilyChange = () => {
    const brandKey = gpuBrandSelect.value;
    const familyKey = gpuFamilySelect.value;
    populateModelSelect(
      gpuModelSelect,
      gpuHierarchy,
      brandKey,
      familyKey,
      uiMessages[currentLang]["gpu-model-placeholder"]
    );
  };

  const handleCpuBrandChangeB = () => {
    const brandKey = cpuBrandSelectB.value;
    populateFamilySelect(
      cpuFamilySelectB,
      cpuHierarchy,
      brandKey,
      uiMessages[currentLang]["cpu-family-placeholder"]
    );
    clearSelect(
      cpuModelSelectB,
      uiMessages[currentLang]["cpu-model-placeholder"]
    );
    cpuModelSelectB.disabled = true;
  };

  const handleCpuFamilyChangeB = () => {
    const brandKey = cpuBrandSelectB.value;
    const familyKey = cpuFamilySelectB.value;
    populateModelSelect(
      cpuModelSelectB,
      cpuHierarchy,
      brandKey,
      familyKey,
      uiMessages[currentLang]["cpu-model-placeholder"]
    );
  };

  const handleGpuBrandChangeB = () => {
    const brandKey = gpuBrandSelectB.value;
    populateFamilySelect(
      gpuFamilySelectB,
      gpuHierarchy,
      brandKey,
      uiMessages[currentLang]["gpu-family-placeholder"]
    );
    clearSelect(
      gpuModelSelectB,
      uiMessages[currentLang]["gpu-model-placeholder"]
    );
    gpuModelSelectB.disabled = true;
  };

  const handleGpuFamilyChangeB = () => {
    const brandKey = gpuBrandSelectB.value;
    const familyKey = gpuFamilySelectB.value;
    populateModelSelect(
      gpuModelSelectB,
      gpuHierarchy,
      brandKey,
      familyKey,
      uiMessages[currentLang]["gpu-model-placeholder"]
    );
  };

  const handleGpuModelChange = () => {
    const gpuId = gpuModelSelect.value;
    const gpuIdB = gpuModelSelectB ? gpuModelSelectB.value : null;
    const resolution = resolutionSelect.value;
    
    if (isVersusMode && gpuIdB) {
      const gpuB = gpuModels[gpuIdB];
      if (gpuB) {
        let gpuScoreB = scaleScoreForResolution(gpuB.score1080, resolution);
        updateBenchmarks(gpuScoreB, resolution);
      }
    } else if (gpuId) {
      const gpu = gpuModels[gpuId];
      if (gpu) {
        let gpuScore = scaleScoreForResolution(gpu.score1080, resolution);
        updateBenchmarks(gpuScore, resolution);
      }
    }
  };

  const handleGpuModelChangeB = () => {
    if (isVersusMode) {
      const gpuIdB = gpuModelSelectB.value;
      const resolution = resolutionSelect.value;
      if (gpuIdB) {
        const gpuB = gpuModels[gpuIdB];
        if (gpuB) {
          let gpuScoreB = scaleScoreForResolution(gpuB.score1080, resolution);
          updateBenchmarks(gpuScoreB, resolution);
        }
      }
    }
  };

  cpuBrandSelect.addEventListener("change", handleCpuBrandChange);
  cpuFamilySelect.addEventListener("change", handleCpuFamilyChange);

  gpuBrandSelect.addEventListener("change", handleGpuBrandChange);
  gpuFamilySelect.addEventListener("change", handleGpuFamilyChange);
  gpuModelSelect.addEventListener("change", handleGpuModelChange);
  
  cpuBrandSelectB.addEventListener("change", handleCpuBrandChangeB);
  cpuFamilySelectB.addEventListener("change", handleCpuFamilyChangeB);
  gpuBrandSelectB.addEventListener("change", handleGpuBrandChangeB);
  gpuFamilySelectB.addEventListener("change", handleGpuFamilyChangeB);
  gpuModelSelectB.addEventListener("change", handleGpuModelChangeB);

  resolutionSelect.addEventListener("change", handleGpuModelChange);

  if (langSelect) {
    langSelect.value = currentLang;
    applyLanguage(currentLang);

    langSelect.addEventListener("change", () => {
      const nextLang = langSelect.value;
      currentLang = nextLang;
      applyLanguage(currentLang);

      // The rest is fine since it uses currentLang which is updated
    });
  } else {
    applyLanguage(currentLang);
  }

  if (autoTestButton) {
    autoTestButton.addEventListener("click", () => {
      const detectedGpu = detectGpuModelFromWebGL();

      if (!detectedGpu) {
        alert(
          currentLang === "tr"
            ? "Tarayıcı, ekran kartı modelinizi güvenilir şekilde rapor etmedi. Lütfen GPU'nuzu listeden elle seçin."
            : "Your browser did not reliably report the GPU model. Please select your GPU manually from the list."
        );
        return;
      }

      const gpuLocation = findBrandFamilyForModel(
        gpuHierarchy,
        detectedGpu.id
      );

      if (!gpuLocation) {
        alert(
          currentLang === "tr"
            ? `Ekran kartınız tespit edildi: ${detectedGpu.label}, ancak bu model şu an listede tanımlı değil. Lütfen yakına denk gelen bir modeli elle seçin.`
            : `Your GPU was detected as ${detectedGpu.label}, but this exact model is not defined in the list. Please choose the closest model manually.`
        );
        return;
      }

      gpuBrandSelect.value = gpuLocation.brandKey;
      handleGpuBrandChange();
      gpuFamilySelect.value = gpuLocation.familyKey;
      handleGpuFamilyChange();
      gpuModelSelect.value = detectedGpu.id;
      syncCustomSelect("gpu-brand-select");
      syncCustomSelect("gpu-family-select");
      syncCustomSelect("gpu-model-select");

      const width = window.screen && window.screen.width ? window.screen.width : window.innerWidth;
      if (width >= 3600) {
        resolutionSelect.value = "2160";
      } else if (width >= 2500) {
        resolutionSelect.value = "1440";
      } else {
        resolutionSelect.value = "1080";
      }
      syncCustomSelect("resolution-select");

      alert(
        currentLang === "tr"
          ? `Ekran kartınız yaklaşık olarak "${detectedGpu.label}" olarak algılandı. İşlemcinizi listeden seçtikten sonra Darboğazı Hesapla ile devam edebilirsiniz.`
          : `Your GPU was roughly detected as "${detectedGpu.label}". After selecting your CPU from the list, you can proceed with Calculate Bottleneck.`
      );
    });
  }

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear().toString();
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const cpuId = cpuModelSelect.value;
    const gpuId = gpuModelSelect.value;
    const resolution = resolutionSelect.value;
    const refresh = refreshSelect.value;

    if (isVersusMode) {
      const cpuIdB = cpuModelSelectB.value;
      const gpuIdB = gpuModelSelectB.value;

      if (!cpuId || !gpuId || !cpuIdB || !gpuIdB) {
        // Mark empty required selects as invalid for both systems
        [cpuBrandSelect, cpuFamilySelect, cpuModelSelect, gpuBrandSelect, gpuFamilySelect, gpuModelSelect,
         cpuBrandSelectB, cpuFamilySelectB, cpuModelSelectB, gpuBrandSelectB, gpuFamilySelectB, gpuModelSelectB].forEach(sel => {
          if (!sel.value && !sel.disabled) {
            const wrapper = sel.parentElement;
            if (wrapper.classList.contains("dt-select-wrapper")) {
              wrapper.classList.add("invalid");
              syncCustomSelect(sel.id);
            }
          }
        });

        const errorMsg = currentLang === "tr"
          ? "Lütfen her iki sistem için de marka, seri ve model seçin."
          : "Please select brand, family and model for both systems.";
        
        const labelEl = document.getElementById("result-label");
        if (labelEl) {
          labelEl.textContent = errorMsg;
          labelEl.classList.add("error");
        }
        
        alert(errorMsg);
        return;
      }

      const cpuA = cpuModels[cpuId];
      const gpuA = gpuModels[gpuId];
      const cpuB = cpuModels[cpuIdB];
      const gpuB = gpuModels[gpuIdB];

      // Calc System A
      let cpuScoreA = scaleScoreForRefresh(scaleScoreForResolution(cpuA.score1080, resolution), refresh);
      let gpuScoreA = scaleScoreForResolution(gpuA.score1080, resolution);
      const resultA = computeBottleneck(cpuScoreA, gpuScoreA);

      // Calc System B
      let cpuScoreB = scaleScoreForRefresh(scaleScoreForResolution(cpuB.score1080, resolution), refresh);
      let gpuScoreB = scaleScoreForResolution(gpuB.score1080, resolution);
      const resultB = computeBottleneck(cpuScoreB, gpuScoreB);

      // Update UI for both
      updateUI(resultA, cpuA.label, gpuA.label, resolution, refresh, "");
      updateUI(resultB, cpuB.label, gpuB.label, resolution, refresh, "-b");

      // Update versus summary
      const balanceA = resultA.percentage;
      const balanceB = resultB.percentage;
      
      const summaryTextEl = document.getElementById("vs-summary-text");
      if (summaryTextEl) {
        const diff = balanceA - balanceB; // Positive means B is better (lower bottleneck)
        const absDiff = Math.abs(diff);
        
        let template = "";
        if (diff > 0) {
          template = uiMessages[currentLang]["vs-summary"];
        } else if (diff < 0) {
          template = uiMessages[currentLang]["vs-summary-worse"];
        } else {
          template = uiMessages[currentLang]["vs-summary-equal"];
        }
        
        summaryTextEl.textContent = template.replace("{percent}", absDiff);
        versusSummary.style.display = "block";
      }

      // We only update benchmarks for the "stronger" or "primary" system in versus? 
      // Let's stick to System B for benchmarks in versus mode as it's the "Target"
      updateBenchmarks(gpuScoreB, resolution);
      updateResolutionComparison(cpuB, gpuB, refresh);

    } else {
      if (!cpuId || !gpuId) {
        // ... existing validation logic ...
        [cpuBrandSelect, cpuFamilySelect, cpuModelSelect, gpuBrandSelect, gpuFamilySelect, gpuModelSelect].forEach(sel => {
          if (!sel.value && !sel.disabled) {
            const wrapper = sel.parentElement;
            if (wrapper.classList.contains("dt-select-wrapper")) {
              wrapper.classList.add("invalid");
              syncCustomSelect(sel.id);
            }
          }
        });

        const errorMsg = currentLang === "tr"
          ? "Lütfen hem işlemci hem de ekran kartı için marka, seri ve model seçin."
          : "Please select brand, family and model for both CPU and GPU.";
        
        const labelEl = document.getElementById("result-label");
        if (labelEl) {
          labelEl.textContent = errorMsg;
          labelEl.classList.add("error");
        }
        
        alert(errorMsg);
        return;
      }

      const cpu = cpuModels[cpuId];
      const gpu = gpuModels[gpuId];

      if (!cpu || !gpu) {
        return;
      }

      let cpuScore = cpu.score1080;
      let gpuScore = gpu.score1080;

      cpuScore = scaleScoreForRefresh(scaleScoreForResolution(cpuScore, resolution), refresh);
      gpuScore = scaleScoreForResolution(gpuScore, resolution);

      const result = computeBottleneck(cpuScore, gpuScore);

      updateUI(result, cpu.label, gpu.label, resolution, refresh);
      updateBenchmarks(gpuScore, resolution);
      updateResolutionComparison(cpu, gpu, refresh);
      showRecommendations(cpuScore, gpuScore);
    }
  });

  function showRecommendations(cpuScore, gpuScore) {
    const recContainer = document.getElementById("recommendation-container");
    const recList = document.getElementById("rec-list");
    if (!recContainer || !recList) return;
    
    recList.innerHTML = "";

    // Calculate score difference percentage
    const diffPercent = Math.abs(cpuScore - gpuScore) / Math.max(cpuScore, gpuScore);
    const threshold = 0.15; // Only recommend if difference is > 15%

    if (diffPercent < threshold) {
      recContainer.style.display = "none";
      return;
    }

    const recs = [];
    
    if (cpuScore < gpuScore) {
      // CPU is bottleneck, suggest better CPUs
      const targetScore = gpuScore;
      const suggestions = findBetterHardware(cpuHierarchy, targetScore, 3);
      suggestions.forEach(s => recs.push({ type: uiMessages[currentLang]["rec-cpu"], name: s.label }));
    } else {
      // GPU is bottleneck, suggest better GPUs
      const targetScore = cpuScore;
      const suggestions = findBetterHardware(gpuHierarchy, targetScore, 3);
      suggestions.forEach(s => recs.push({ type: uiMessages[currentLang]["rec-gpu"], name: s.label }));
    }

    if (recs.length > 0) {
      recs.forEach(r => {
        const item = document.createElement("div");
        item.className = "dt-rec-item";
        item.innerHTML = `
          <div class="type">${r.type}</div>
          <div class="name">${r.name}</div>
        `;
        recList.appendChild(item);
      });
      recContainer.style.display = "block";
    } else {
      recContainer.style.display = "none";
    }
  }

  function findBetterHardware(hierarchy, targetScore, limit) {
    let matches = [];
    for (const brand in hierarchy) {
      for (const family in hierarchy[brand].families) {
        const models = hierarchy[brand].families[family].models;
        models.forEach(m => {
          // Find models that are close to or slightly above the target score
          if (m.score1080 >= targetScore && m.score1080 <= targetScore * 1.4) {
            matches.push({ label: m.label, score: m.score1080 });
          }
        });
      }
    }
    // Sort by score (closest to target first) and pick top N
    return matches
      .sort((a, b) => a.score - b.score)
      .slice(0, limit);
  }
}

document.addEventListener("DOMContentLoaded", init);

