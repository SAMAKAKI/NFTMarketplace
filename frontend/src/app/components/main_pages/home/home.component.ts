import { Component, OnInit } from '@angular/core';
import { faRocket as faRocketSolid } from '@fortawesome/free-solid-svg-icons';
import { faEye as faEyeRegular, faEnvelope as faEnvelopeRegular} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor (){}

  faRocket = faRocketSolid;
  faEye = faEyeRegular;
  faEnvelope = faEnvelopeRegular;
  ngOnInit(): void {
    
  }
}
