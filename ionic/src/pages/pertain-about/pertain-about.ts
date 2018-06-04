import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { App } from 'ionic-angular';

/**
 * Generated class for the PertainAboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pertain-about',
  templateUrl: 'pertain-about.html',
})
export class PertainAboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private app:App) {
    this.id=navParams.get('id');
  }

  ionViewDidLoad() {
    console.log(this.id);
  }
  id;
      /*
        var the_content;
        var id_url='http://localhost:7000/api/v1/content/'+list_id[i]._id;
        //function getContent(){
          HTTP.get(id_url).subscribe(data=>{
              content=JSON.parse(data['_body']).data;
              //content:
              //.content  通知内容
              //.title  通知标题
              //._id  每个通知的id
              the_content=content.content;
            });
            */
}
