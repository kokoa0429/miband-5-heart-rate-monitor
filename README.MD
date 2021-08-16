# NeosVR用にMiBandの心拍数をWebSocketでリレーするやつ
APIキーとかの取り方は
https://github.com/argrento/huami-token  
らへんを参照してください

## 使い方
### 立ち上げ方
```docker-compose up -d```


ポートを変える際は
docker-compose buildの前に、  
`front/src/miband.js`の102行目あたりのポートを変更してください


### WebSocket
```ws://localhost:8080```にWebSocketを張ってブラウザ側でMiBandとつなげると心拍数が降ってきます。
