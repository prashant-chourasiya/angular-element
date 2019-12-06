import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements'

import { AppComponent } from './app.component';
import { SearchComponent } from './features/search/search.component';
import { ListComponent } from './features/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(AppComponent, { injector });
    customElements.define('test-element', el);

    // customElements.define('search-element', createCustomElement(SearchComponent, { injector }));
    // customElements.define('list-element', createCustomElement(ListComponent, { injector }));
  }
  ngDoBootstrap() {}
}
