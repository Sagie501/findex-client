import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user/user.service';
declare var Microsoft;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.less'],
})
export class ContactUsComponent implements OnInit, AfterViewInit {
  @ViewChild('myMap') myMap;

  constructor(private usersService: UserService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const map = new Microsoft.Maps.Map(this.myMap.nativeElement, {
      credentials: 'Bing Map Key - I removed it here',
    });

    map.setView({
      center: new Microsoft.Maps.Location(31.970575, 34.767812),
      zoom: 15,
    });

    let pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), null);
    let layer = new Microsoft.Maps.Layer();
    layer.add(pushpin);
    map.layers.insert(layer);

    this.usersService.getAllUsersLocations().subscribe((coordinates) => {
      let userLocation = new Microsoft.Maps.Location(
        coordinates[0],
        coordinates[1]
      );
      let userPin = new Microsoft.Maps.Pushpin(userLocation, null);
      layer.add(userPin);
    });
  }
}
