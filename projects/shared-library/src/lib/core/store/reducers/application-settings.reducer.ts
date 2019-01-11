import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';

import { ActionWithPayload, ApplicationSettingsActions } from '../actions';
import { Category } from '../../../shared/model';

export function applicationSettings(state: any = [], action: ActionWithPayload<any[]>): any[] {
  switch (action.type) {
    case ApplicationSettingsActions.LOAD_APPLICATION_SETTINGS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}


