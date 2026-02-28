# DailyTechHub Darboğaz Hesaplayıcı

Modern, koyu temalı ve mobil uyumlu bir **Darboğaz (Bottleneck) Hesaplayıcı** tek sayfa web arayüzü.

Kullanıcı, işlemci (CPU) ve ekran kartı (GPU) modelini seçerek; DailyTechHub için hazırlanmış göreli performans skorlarına göre **darboğaz yüzdesini** ve hangi bileşenin sistemi sınırladığını görebilir.

## Özellikler

- **Dark Mode & Tech UI**: Neon vurgulu, cam efekti (glassmorphism) ve modern tipografi.
- **Responsive tasarım**: Masaüstü, tablet ve mobilde rahat kullanım.
- **Gerçekçi skorlar**: CPU ve GPU için göreli 1080p oyun performans skorları.
- **Çözünürlük & yenileme etkisi**: 1080p / 1440p / 4K ve 60–240 Hz değerlerine göre skor ölçekleme.
- **Detaylı geri bildirim**:
  - Darboğaz yüzdesi
  - Hangi bileşenin sınırladığı
  - Tahmini FPS etkisi
  - Kısa iyileştirme / yükseltme önerileri

## Kurulum

Bu proje düz bir HTML/CSS/JS uygulamasıdır, ekstra build süreci yoktur.

```bash
cd dailytechhub-bottleneck-calculator   # (dizin adını kendi yapınıza göre uyarlayın)
npm install                             # sadece 'serve' komutunu kullanmak isterseniz
```

## Geliştirme / Önizleme

Statik dosyaları herhangi bir HTTP sunucusuyla çalıştırabilirsiniz. `package.json` içine basit bir önizleme komutu eklendi:

```bash
npm run start
```

Ardından tarayıcınızda `http://localhost:3000` veya `serve` çıktısında verilen adresi açın.

## Dosya Yapısı

- `index.html` – Ana sayfa ve form yapısı
- `styles.css` – Dark mode & DailyTechHub temalı stil dosyası
- `app.js` – CPU/GPU skorları, darboğaz hesaplama mantığı ve UI güncellemeleri

## Not

Hesaplama modeli; sentetik testler ve oyun benchmark'larına benzer olacak şekilde **yaklaşık** sonuç vermeyi hedefler. Donanımınızın gerçek performansı; oyun/uygulama, sürücü sürümü, soğutma ve arka plan yüküne göre değişebilir.

