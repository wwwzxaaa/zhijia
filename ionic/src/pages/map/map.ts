import { IonicPage, NavController } from 'ionic-angular';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { HomePage } from '../home/home';
/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// baidu map
declare var BMap;
declare var BMAP_STATUS_SUCCESS;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  @ViewChild('map') map_container: ElementRef;
  map: any;//地图对象
  marker: any;//标记
  geolocation1: any;
  myIcon: any;
  constructor(
    private geolocation: Geolocation,
    public navCtrl: NavController
  ) {
    this.myIcon = new BMap.Icon("assets/icon/favicon.ico", new BMap.Size(30, 30));
  }

  ionViewDidEnter() {
    let map =
      this.map =
      new BMap.Map(
        this.map_container.nativeElement,
        {
          enableMapClick: true,//点击拖拽
          enableScrollWheelZoom: true,//启动滚轮放大缩小，默认禁用
          enableContinuousZoom: true //连续缩放效果，默认禁用
        }
      );//创建地图实例
    let point = new BMap.Point(113.38028471135, 23.129702256122);//坐标可以通过百度地图坐标拾取器获取
    let marker = new BMap.Marker(point);
    this.map.addOverlay(marker);
    map.centerAndZoom(point, 18);//设置中心和地图显示级别
  }
  getLocationByBrowser(mycity) {
    let geolocation1 = this.geolocation1 = new BMap.Geolocation();
    geolocation1.getCurrentPosition((r) => {
      let mk = this.marker = new BMap.Marker(r.point, { icon: this.myIcon });
      if (geolocation1.getStatus() == BMAP_STATUS_SUCCESS) {
        this.map.addOverlay(mk);
        this.map.panTo(r.point, 16);
        console.log('浏览器定位：您的位置是 ' + r.point.lng + ',' + r.point.lat);   
      }
      else {
        alert('failed' + this.geolocation1.getStatus());
      }
      var lngLat = new BMap.Point(r.point.lng,r.point.lat);//指定的经度和纬度创建一个地理点坐标。
      var geoc =new BMap.Geocoder();//创建一个地址解析器的实例.对指定的坐标点进行反地址解析。
        geoc.getLocation(lngLat, (rs)=>{
              var addComp = rs.addressComponents;
              var province = addComp.province;//省
              var city = addComp.city;//市
              var district = addComp.district;//区或县
              console.log(city+district);
              var myplace=city+district;
              this.navCtrl.setRoot(HomePage,{mycity:myplace});
      })
    }, { enableHighAccuracy: false })  
  }
 
  getLocationByCity() {
    let city = "河北师大";
    if (city != "") {
      this.map.centerAndZoom(city, 16);      // 用城市名设置地图中心点
    }
  }
  getLocationByIp() {
    let myCity = new BMap.LocalCity();
    myCity.get(result => {
      let cityName = result.name;
      this.map.setCenter(cityName);
      console.log("当前定位城市:" + cityName);
    });
  }
}
