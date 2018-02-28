import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { switchMap, map } from 'rxjs/operators';
import { empty } from 'rxjs/observable/empty';

import { BulkUploadFileInfo, Question } from '../../../model';
import { BulkActions, BulkActionTypes } from '../actions';
import * as bulkactions from '../actions/bulk.actions';
import { BulkService, QuestionService } from '../../../core/services';

@Injectable()
export class BulkEffects {
    constructor(
        private actions$: Actions,
        private bulkService: BulkService,
        private questionService: QuestionService,
    ) { }


    // for get all BulkUploadFileInfo
    @Effect()
    loadBulkUpload$ = this.actions$
        .ofType(BulkActionTypes.LOAD_BULK_UPLOAD)
        .pipe(
        switchMap((action: bulkactions.LoadBulkUpload) =>
            this.bulkService.getBulkUpload().pipe(
                map((bulkUploadFileInfo: BulkUploadFileInfo[]) => new bulkactions.LoadBulkUploadSuccess(bulkUploadFileInfo))
            )
        )
        );

    // for get BulkUploadFileInfo by User
    @Effect()
    loadUserBulkUpload$ = this.actions$
        .ofType(BulkActionTypes.LOAD_USER_BULK_UPLOAD)
        .pipe(
        switchMap((action: bulkactions.LoadUserBulkUpload) =>
            this.bulkService.getUserBulkUpload(action.payload.user).pipe(
                map((bulkUploadFileInfo: BulkUploadFileInfo[]) => new bulkactions.LoadUserBulkUploadSuccess(bulkUploadFileInfo))
            )
        )
        );

    // for file PublishedQuestions by BulkUpload Id
    @Effect()
    loadBulkUploadPublishedQuestions$ = this.actions$
        .ofType(BulkActionTypes.LOAD_BULK_UPLOAD_PUBLISHED_QUESTIONS)
        .pipe(
        switchMap((action: bulkactions.LoadBulkUploadPublishedQuestions) =>
            this.questionService.getQuestionsForBulkUpload(action.payload.bulkUploadFileInfo, true).pipe(
                map((questions: Question[]) => new bulkactions.LoadBulkUploadPublishedQuestionsSuccess(questions))
            )
        )
        );

    // for file UnPublishedQuestions by BulkUpload Id
    @Effect()
    loadBulkUploadUnpublishedQuestions$ = this.actions$
        .ofType(BulkActionTypes.LOAD_BULK_UPLOAD_UNPUBLISHED_QUESTIONS)
        .pipe(
        switchMap((action: bulkactions.LoadBulkUploadUnpublishedQuestions) =>
            this.questionService.getQuestionsForBulkUpload(action.payload.bulkUploadFileInfo, false).pipe(
                map((questions: Question[]) => new bulkactions.LoadBulkUploadUnpublishedQuestionsSuccess(questions))
            )
        )
        );

    // for update Question
    @Effect()
    updateQuestion$ = this.actions$
        .ofType(BulkActionTypes.UPDATE_QUESTION)
        .pipe(
        switchMap((action: bulkactions.UpdateQuestion) => {
            this.questionService.saveQuestion(action.payload.question);
            return empty();
        })
        );
    // for Update BulkUpload
    @Effect()
    updateBulkUpload$ = this.actions$
        .ofType(BulkActionTypes.UPDATE_BULK_UPLOAD)
        .pipe(
        switchMap((action: bulkactions.UpdateBulkUpload) => {
            this.bulkService.updateBulkUpload(action.payload.bulkUploadFileInfo);
            return empty();
        })
        );

    // for Approve Question
    @Effect()
    approveQuestion$ = this.actions$
        .ofType(BulkActionTypes.APPROVE_QUESTION)
        .pipe(
        switchMap((action: bulkactions.ApproveQuestion) => {
            this.questionService.approveQuestion(action.payload.question);
            return empty();
        })
        );

    // for add Bulk Questions
    @Effect()
    addBulkQuestions$ = this.actions$
        .ofType(BulkActionTypes.ADD_BULK_QUESTIONS)
        .pipe(
        switchMap((action: bulkactions.AddBulkQuestions) => {
            this.questionService.saveBulkQuestions(action.payload.bulkUpload);
            return empty();
        })
        );
}