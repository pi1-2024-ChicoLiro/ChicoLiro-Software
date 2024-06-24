import { ModuleWithProviders, NgModule } from '@angular/core';
import * as Showdown from 'showdown';
import { ShowdownConfig } from './showdown-config.provider';
import { ShowdownConverter } from './showdown-converter.provider';
import { ShowdownComponent } from './showdown.component';
import { ShowdownPipe } from './showdown.pipe';
import { SourceDirective } from './source.directive';

/**
 * @internal
 */
const DECLARATIONS = [
  ShowdownComponent,
  ShowdownPipe,
  SourceDirective
];

/**
 * ### Example
 *
 * Add `ShowdownModule` to app `imports`.
 * ```typescript
 * import { NgModule } from '@angular/core';
 * import { ShowdownModule } from 'ngx-showdown';
 *
 * @NgModule({
 *   imports: [ ShowdownModule ];
 * })
 * export class AppModule {}
 * ```
 */
@NgModule({
  declarations: DECLARATIONS,
  providers: [ShowdownConverter],
  exports: DECLARATIONS
})
export class ShowdownModule {

  /**
   * __Example :__
   *
   * Add `ShowdownModule` to app `imports` with config.
   * ```typescript
   * import { NgModule } from '@angular/core';
   * import { ShowdownModule } from 'ngx-showdown';
   *
   * @NgModule({
   *   imports: [ ShowdownModule.forRoot({
   *     smartIndentationFix: true,
   *     foo: 'bar',
   *     flavor: 'github',
   *     extensions: [ {type:'listener', listeners: {'codeBlocks.after': console.log}} ]
   *   }) ];
   * })
   * export class AppModule {}
   * ```
   * @param config - A root converter config for all converter instances.
   */
  static forRoot(config: ShowdownConfig | Showdown.ConverterOptions): ModuleWithProviders<ShowdownModule> {
    return {
      ngModule: ShowdownModule,
      providers: [{ provide: ShowdownConfig, useValue: config }]
    };
  }

}
