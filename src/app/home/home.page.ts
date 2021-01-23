import { Component, OnInit } from '@angular/core';

import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private tts: TextToSpeech) {}
  ngOnInit(): void {

  }

  test(){
    this.tts.speak({
      text: 'Evidence Phoku you are such a dick, like pieces of shit bro',
      locale: 'en-GB',
      rate: 0.5
    }).then(() => alert('Success')).catch((reason: any) => alert(reason));

  }

}
