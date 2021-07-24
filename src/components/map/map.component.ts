import { Component, Vue } from "vue-property-decorator";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

@Component({})
export default class MapComponent extends Vue {
  public mounted(): void {
    window.kakao && window.kakao.maps ? this.initMap() : this.addScript();
  }
  public initMap(): void {
    const mapContainer = document.getElementById("map"); // 지도를 표시할 div
    const mapOption = {
      center: new window.kakao.maps.LatLng(
        37.51293455259194,
        127.05237474661956
      ), // 지도의 중심좌표
      level: 5, // 지도의 확대 레벨
    };

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    const map = new window.kakao.maps.Map(mapContainer, mapOption);
    //마커추가하려면 객체를 아래와 같이 하나 만든다.
    const marker = new window.kakao.maps.Marker({ position: map.getCenter() });
    marker.setMap(map);
  }
  public addScript(): void {
    const script = document.createElement("script");
    script.onload = () => window.kakao.maps.load(this.initMap);
    script.src =
      "http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=34d2d56b679801e4f446a59ae095b40a";
    document.head.appendChild(script);
  }
}
