import { Component } from '@angular/core';

@Component({
  selector: 'mw-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent {
  onSubmit(response) {
    // alert(response.medium);
    console.log(response);
  }
}
