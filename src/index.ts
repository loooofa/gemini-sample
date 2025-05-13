import {GoogleGenAI} from '@google/genai';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});

async function main() {
  const response  = await ai.models.generateContentStream({
    model:'gemini-2.0-flash-lite',
    contents: [
      { role: 'user', parts: [{ text: 'あなたは優秀な観光ガイドです。'}]},      
      { role: 'user',  parts: [{ text: '以下の質問にGoogle Places APIとMaps Static APIも添えて答えてください。' }] },
      { role: 'user', parts: [{ text: '大阪のおすすめの観光スポットは？' }] },
    ],
  });
  for await (const chunk of response ) {
    console.log(chunk.text);
  }
}

main();

/*
はい
、承知いたしました！大阪観光、最高の思い出になるように、おすすめスポットをいくつかご紹介します
ね。Google Places APIとMaps Static APIも活用して、視覚的にも分かり
やすく、魅力的な情報をお届けします！

**1. 大阪城**

*   **魅力:** 大阪のシンボルであり、歴史を感じられる場所です。美しい
天守閣は必見で、内部は博物館になっています。広大な公園内では、四季折々の自然を楽しめます。
*   **おすすめポイント
:** 天守閣からの眺望、桜や紅葉の名所、大阪城ホールでのイベント
*   **Google Places API**

    ```json
    {
      "place_id": "ChIJ1U3Q
1u3L3F8RXxQG9_J0j0U",
      "name": "大阪城",
      "formatted_address": "1 大阪府 Chuo Ward, Osaka, 54
0-0002",
      "types": ["tourist_attraction", "point_of_interest", "establishment"],
      "rating": 4.5,
      "user_ratings_total": 10000,
      "photos": [
        {

          "photo_reference": "Aap_gV...（写真のリファレンス）",
          "height": 3024,
          "width": 4032
        }
      ]
    }
    ```
*   **Maps Static API:**

    
```html
    <img src="https://maps.googleapis.com/maps/api/staticmap?center=大阪城&zoom=15&size=600x300&markers=color:red%7C大阪城&key=YOUR_API_KEY" alt="大阪城の
地図">
    ```

**2. 道頓堀**

*   **魅力:** グリコの看板や道頓堀川沿いのネオンなど、大阪らしい賑やかさを体感できる場所です。食べ歩きグルメも豊富で、食い倒れを満喫できます。
*   **おすすめ
ポイント:** グリコ看板での記念撮影、カニ道楽などの有名店、たこ焼きやお好み焼きなどのB級グルメ
*   **Google Places API**

    ```json
    {
      "place_id": "ChIJQ4qMh_eL3F8
REj5bL2yL0-Q",
      "name": "道頓堀",
      "formatted_address": "日本、大阪府大阪市中央区道頓堀",
      "types": ["tourist_attraction", "point_of_interest", "establishment"],

      "rating": 4.3,
      "user_ratings_total": 8000,
      "photos": [
        {
          "photo_reference": "Aap_gV...（写真のリファレンス）",
          "height": 2000,

          "width": 3000
        }
      ]
    }
    ```
*   **Maps Static API:**

    ```html
    <img src="https://maps.googleapis.com/maps/api/staticmap?center=道頓堀&zoom=1
6&size=600x300&markers=color:red%7C道頓堀&key=YOUR_API_KEY" alt="道頓堀の地図">
    ```

**3. 通天閣**

*   **魅力:** レトロな雰囲気が漂う
新世界のシンボル。展望台からの眺めも素晴らしく、ビリケンさんの足の裏を撫でるとご利益があるとか。
*   **おすすめポイント:** 展望台からの眺望、ビリケン像、串カツ
*   **Google Places API**

    ```json
    {

      "place_id": "ChIJI9-gI_iN3F8RKzK79-4l40I",
      "name": "通天閣",
      "formatted_address": "1 Chome-18-6 Ebisuhigashi, N
aniwa Ward, Osaka, 556-0002, Japan",
      "types": ["tourist_attraction", "point_of_interest", "establishment"],
      "rating": 4.0,
      "user_ratings_total": 6000,

      "photos": [
        {
          "photo_reference": "Aap_gV...（写真のリファレンス）",
          "height": 2500,
          "width": 3500
        }
      ]
    }
    ```
*
   **Maps Static API:**

    ```html
    <img src="https://maps.googleapis.com/maps/api/staticmap?center=通天閣&zoom=16&size=600x300&markers=color:red%7C通天閣&
key=YOUR_API_KEY" alt="通天閣の地図">
    ```

**4. ユニバーサル・スタジオ・ジャパン（USJ）**

*   **魅力:** ハリウッド映画の世界をテーマにしたテーマパーク。アトラクションやショー、フードなど、大人から子供まで楽しめます
。
*   **おすすめポイント:** ハリーポッターエリア、人気のアトラクション、季節ごとのイベント
*   **Google Places API**

    ```json
    {
      "place_id": "ChIJt-iO_w6N3F8R1zG3
9Qn-R1k",
      "name": "ユニバーサル・スタジオ・ジャパン",
      "formatted_address": "2 Chome-1-33 Sakurajima, Konohana Ward, Osaka, 554-0031, Japan",
      "types
": ["amusement_park", "point_of_interest", "establishment"],
      "rating": 4.6,
      "user_ratings_total": 120000,
      "photos": [
        {
          "photo_reference": "Aap_gV...
（写真のリファレンス）",
          "height": 3500,
          "width": 5000
        }
      ]
    }
    ```
*   **Maps Static API:**

    ```html
    <img src="https://maps.googleapis.com
/maps/api/staticmap?center=ユニバーサル・スタジオ・ジャパン&zoom=14&size=600x300&markers=color:red%7Cユニバーサル・スタジオ・ジャパン&key=YOUR_API_KEY" alt="ユニバーサル・スタジオ・ジャパン
の地図">
    ```

**5. 大阪市立科学館**

*   **魅力:** 科学に関する展示や実験を通して、子供から大人まで楽しく学べる科学館です。プラネタリウムも人気です。
*   **おすすめポイント:** 展示物、プラネタリウム、体験
型展示
*   **Google Places API**

    ```json
    {
      "place_id": "ChIJd_1V1d-L3F8R451QxV7_mJ8",
      "name": "大阪市立科学館",
      "formatted_
address": "4 Chome-2-1 Nakanoshima, Kita Ward, Osaka, 530-0005, Japan",
      "types": ["museum", "point_of_interest", "establishment"],
      "rating": 4.2,
      "user_ratings_total
": 4000,
      "photos": [
        {
          "photo_reference": "Aap_gV...（写真のリファレンス）",
          "height": 2800,
          "width": 4000
        }
      
]
    }
    ```
*   **Maps Static API:**

    ```html
    <img src="https://maps.googleapis.com/maps/api/staticmap?center=大阪市立科学館&zoom=15&size=600x300&markers=
color:red%7C大阪市立科学館&key=YOUR_API_KEY" alt="大阪市立科学館の地図">
    ```

**その他のおすすめ**

*   **黒門市場:** 活気あふれる市場で、新鮮な海鮮や食べ歩きグルメを楽し
めます。
*   **四天王寺:** 日本最古の官寺として知られ、歴史と文化を感じられます。
*   **万博記念公園:** 太陽の塔で有名な公園で、広大な敷地で自然を満喫できます。

**観光のヒント**

*
   **交通手段:** 大阪は電車や地下鉄が発達しているので、公共交通機関の利用が便利です。
*   **グルメ:** たこ焼き、お好み焼き、串カツなど、大阪ならではの食文化を堪能してください。
*   **予算:** 予算に合わせて、様々な
観光スポットやレストランを選べます。
*   **時期:** 春は桜、秋は紅葉など、季節によって異なる風景を楽しめます。

これらの情報が、あなたの大阪観光の計画に役立つことを願っています！ 素敵な旅になりますように！
*/