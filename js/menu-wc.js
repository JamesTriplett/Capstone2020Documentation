'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">jeroo documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-d139e69e796703ef296abffe868c0c57"' : 'data-target="#xs-components-links-module-AppModule-d139e69e796703ef296abffe868c0c57"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-d139e69e796703ef296abffe868c0c57"' :
                                            'id="xs-components-links-module-AppModule-d139e69e796703ef296abffe868c0c57"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CacheDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CacheDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChnageIslandSizeDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChnageIslandSizeDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CodeSaveDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CodeSaveDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CompilationErrorMessageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CompilationErrorMessageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardDialogAboutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardDialogAboutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardDialogAwardsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardDialogAwardsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardDialogCopyrightComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardDialogCopyrightComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardDialogHistoryComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardDialogHistoryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditorPreferencesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditorPreferencesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditorTabsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditorTabsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IslandSaveDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">IslandSaveDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/JerooIslandComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">JerooIslandComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/JerooStatusComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">JerooStatusComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LevelEditorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LevelEditorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoggingMessageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoggingMessageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MessagesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MessagesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PrintCodeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrintCodeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PrintCodeDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrintCodeDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PrintIslandComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrintIslandComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PrintLayoutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrintLayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RuntimeErrorMessageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RuntimeErrorMessageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WarningDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WarningDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HelpModule.html" data-type="entity-link">HelpModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HelpModule-5d1681005e718ed625b0949522871de0"' : 'data-target="#xs-components-links-module-HelpModule-5d1681005e718ed625b0949522871de0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HelpModule-5d1681005e718ed625b0949522871de0"' :
                                            'id="xs-components-links-module-HelpModule-5d1681005e718ed625b0949522871de0"' }>
                                            <li class="link">
                                                <a href="components/HelpActionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HelpActionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HelpBooleanComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HelpBooleanComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HelpCompassComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HelpCompassComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HelpConditionJavaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HelpConditionJavaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HelpConditionPythonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HelpConditionPythonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HelpConditionVBComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HelpConditionVBComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HelpControlStructJavaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HelpControlStructJavaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HelpControlStructPythonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HelpControlStructPythonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HelpControlStructVBComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HelpControlStructVBComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HelpDirectionsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HelpDirectionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HelpGeneralJavaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HelpGeneralJavaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HelpGeneralPythonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HelpGeneralPythonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HelpGeneralVbComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HelpGeneralVbComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HelpInstantiationJavaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HelpInstantiationJavaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HelpInstantiationPythonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HelpInstantiationPythonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HelpInstantiationVbComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HelpInstantiationVbComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HelpMethodJavaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HelpMethodJavaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HelpMethodPythonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HelpMethodPythonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HelpMethodVbComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HelpMethodVbComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HelpRelativeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HelpRelativeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HelpTutorialJavaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HelpTutorialJavaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HelpTutorialPythonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HelpTutorialPythonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HelpTutorialVbComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HelpTutorialVbComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/JavaHelpComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">JavaHelpComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PythonHelpComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PythonHelpComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VBHelpComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VBHelpComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HelpRoutingModule.html" data-type="entity-link">HelpRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link">MaterialModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/CodeSaveDialogComponent-1.html" data-type="entity-link">CodeSaveDialogComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DashboardDialogAboutComponent-1.html" data-type="entity-link">DashboardDialogAboutComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DashboardDialogAwardsComponent-1.html" data-type="entity-link">DashboardDialogAwardsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DashboardDialogCopyrightComponent-1.html" data-type="entity-link">DashboardDialogCopyrightComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DashboardDialogHistoryComponent-1.html" data-type="entity-link">DashboardDialogHistoryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EditorPreferencesComponent-1.html" data-type="entity-link">EditorPreferencesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/IslandSaveDialogComponent-1.html" data-type="entity-link">IslandSaveDialogComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CompilationErrorMessage.html" data-type="entity-link">CompilationErrorMessage</a>
                            </li>
                            <li class="link">
                                <a href="classes/DashboardPage.html" data-type="entity-link">DashboardPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/Jeroo.html" data-type="entity-link">Jeroo</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoggingMessage.html" data-type="entity-link">LoggingMessage</a>
                            </li>
                            <li class="link">
                                <a href="classes/Message.html" data-type="entity-link">Message</a>
                            </li>
                            <li class="link">
                                <a href="classes/RuntimeError.html" data-type="entity-link">RuntimeError</a>
                            </li>
                            <li class="link">
                                <a href="classes/RuntimeErrorMessage.html" data-type="entity-link">RuntimeErrorMessage</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/BytecodeInterpreterService.html" data-type="entity-link">BytecodeInterpreterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CodemirrorService.html" data-type="entity-link">CodemirrorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CodeService.html" data-type="entity-link">CodeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FileSaveService.html" data-type="entity-link">FileSaveService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FileSaveService-1.html" data-type="entity-link">FileSaveService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/IslandService.html" data-type="entity-link">IslandService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MessageService.html" data-type="entity-link">MessageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrintService.html" data-type="entity-link">PrintService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SelectedTileTypeService.html" data-type="entity-link">SelectedTileTypeService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/CoordinateType.html" data-type="entity-link">CoordinateType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogData.html" data-type="entity-link">DialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogData-1.html" data-type="entity-link">DialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogData-2.html" data-type="entity-link">DialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditorCode.html" data-type="entity-link">EditorCode</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditorPreferences.html" data-type="entity-link">EditorPreferences</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EditorState.html" data-type="entity-link">EditorState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Language.html" data-type="entity-link">Language</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Option.html" data-type="entity-link">Option</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Point.html" data-type="entity-link">Point</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Position.html" data-type="entity-link">Position</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});