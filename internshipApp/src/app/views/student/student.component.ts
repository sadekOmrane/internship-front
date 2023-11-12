import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/shared/models/job';
import { JobService } from 'src/app/shared/providers/entities/job.service';
import { ModalService } from 'src/app/shared/providers/modal.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

}
