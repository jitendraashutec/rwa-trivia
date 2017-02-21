import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule  } from '@angular/router';
import { FormsModule, ReactiveFormsModule }     from '@angular/forms';
import { HttpModule } from '@angular/http';

import 'hammerjs';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AngularFireModule } from 'angularfire2';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { routes }   from './app.route';
import { AppComponent, LoginComponent, PasswordAuthComponent, 
         CategoriesComponent, TagsComponent, 
         QuestionsComponent, QuestionAddUpdateComponent } from './components';
import { AuthenticationService, CategoryService, TagService, QuestionService } from './services';

import { UserActions, CategoryActions, TagActions, QuestionActions } from './store/actions';
import { CategoryEffects, TagEffects, QuestionEffects } from './store/effects';
import { default as reducer } from './store/app-store';

export const firebaseConfig = {
    apiKey: "AIzaSyDIEpabJv44Iu7go6M30T3WAF-GlSMcR7Y",
    authDomain: "rwa-trivia.firebaseapp.com",
    databaseURL: "https://rwa-trivia.firebaseio.com",
    storageBucket: "rwa-trivia.appspot.com",
    messagingSenderId: "479350787602"
};

@NgModule({
  declarations: [
    AppComponent, LoginComponent, PasswordAuthComponent,
    CategoriesComponent, TagsComponent, 
    QuestionsComponent, QuestionAddUpdateComponent
  ],
  entryComponents: [
    LoginComponent, PasswordAuthComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,

    //firebase
    AngularFireModule.initializeApp(firebaseConfig),
    
    // Router
    RouterModule.forRoot(routes), 

    // Forms
    FormsModule,
    ReactiveFormsModule, 

    //Material
    MaterialModule,
    //Flex
    FlexLayoutModule,

    //store
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 20
    }),

    //ngrx effects
    EffectsModule.run(CategoryEffects),
    EffectsModule.run(TagEffects),
    EffectsModule.run(QuestionEffects)

  ],
  providers: [ 
    AuthenticationService, CategoryService, TagService, QuestionService,
    UserActions, CategoryActions, TagActions, QuestionActions

  ],                                                                      
  bootstrap: [AppComponent]
})
export class AppModule { }
