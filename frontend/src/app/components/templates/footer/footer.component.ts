import { Component } from '@angular/core';
import { faEnvelope as faEnvelopeRegular } from '@fortawesome/free-solid-svg-icons';
import { faDiscord as faDiscordBrands, faYoutube as faYoutubeBrands, faTwitter as faTwitterBrands, faInstagram as faInstagramBrands } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  faEnvelope = faEnvelopeRegular;
  faDiscord = faDiscordBrands;
  faYoutube = faYoutubeBrands;
  faTwitter = faTwitterBrands;
  faInstagram = faInstagramBrands;

}
