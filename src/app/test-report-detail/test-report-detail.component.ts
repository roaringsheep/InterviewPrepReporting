import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImochaService } from '../services/imocha-service/imocha.service';
import TestAttemptQuestion from '../models/testAttemptQuestion';
import { first } from 'rxjs';

@Component({
  selector: 'app-test-report-detail',
  templateUrl: './test-report-detail.component.html',
  styleUrls: ['./test-report-detail.component.css']
})
export class TestReportDetailComponent implements OnInit {
  testAttemptId : number = 0;
  currentQuestion : number = 1;
  videoUrl : string = "";
  questions : TestAttemptQuestion[] = [];

  constructor(private activeRoute : ActivatedRoute, private imocha: ImochaService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      this.testAttemptId = params['attemptId'];

      this.imocha.getQuestionsByTestAttemptId(this.testAttemptId).subscribe((res) => {
        this.questions = res.result;
        console.log(this.questions)
        const firstAnsweredQ = this.questions.findIndex(q => q.questionStatus === 'Answered')
        this.switchVideo(firstAnsweredQ);
      })
    });
  }

  switchVideo(index : number) {
    if(this.questions[index].questionStatus === 'Answered') {
      this.currentQuestion = index + 1;
      this.videoUrl = this.questions[index].candidateAnswer.videoAnswer.videoUrl;
    } 
  }
}
