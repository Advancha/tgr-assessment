import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {LocationsService} from '../locations.service';
import {Marker} from '../marker';
import {PageNumberContainerService} from '../page-number-container.service';

@Component({
  selector: 'app-edit-location',
  templateUrl: './edit-location.component.html',
  styleUrls: ['./edit-location.component.css']
})
export class EditLocationComponent implements OnInit, OnDestroy {
  form: FormGroup;
  private editExisting = false;
  private index: number;
  private subscription;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private locationsService: LocationsService,
    private pageNumberContainerService: PageNumberContainerService
  ) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      if (params && params.hasOwnProperty('id')) {
        this.index = +params['id'];
        this.editExisting = true;
        const def = this.locationsService.getItem(this.index);
        this.createForm(def);
      } else {
        this.createForm();
      }
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private createForm(defValues?: Marker) {
    this.form = new FormGroup({
      lat: new FormControl(defValues ? defValues.lat : '', Validators.required),
      lng: new FormControl(defValues ? defValues.lng : '', Validators.required),
      locName: new FormControl(defValues ? defValues.name : '', Validators.required)
    });
  }

  private getFormValues(): Marker {
    return {
      lat: this.form.controls['lat'].value,
      lng: this.form.controls['lng'].value,
      name: this.form.controls['locName'].value,
    };
  }

  onSave() {
    const res = this.getFormValues();
    if (this.editExisting) {
      this.locationsService.put(res, this.index);
      this.pageNumberContainerService.setPageByItemIndex(this.index);
    } else {
      this.locationsService.post(res);
      this.pageNumberContainerService.setPageByItemIndex(this.locationsService.getLastIndex());
    }

    this.router.navigate(['locations']);
  }
}
