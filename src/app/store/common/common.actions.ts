import { Action } from '@ngrx/store';

export const LOAD_COUNTRIES = '[Common] load countries';
export const LOAD_COUNTRIES_SUCCESS = '[Common] successfully loaded countries';
export const LOAD_COUNTRIES_FAILED = '[Common] failed to load countries';

export const LOAD_SEO_BY_SLUG = '[Common] load seo by slug';
export const LOAD_SEO_BY_SLUG_SUCCESS = '[Common] successfully loaded seo by slug';
export const LOAD_SEO_BY_SLUG_FAILED = '[Common] failed to load seo by slug';

export const CHANGE_LANGUAGE = '[Common] change language';
export const SET_ACTIVE_PAGE = '[Common] set active page';
export const UPDATE_BREADCRUM = '[Common] update breadcrum';
export const TOGGLE_SIDEBAR = '[Common] Toggle sidebar';

export class LoadCountries implements Action {
    readonly type = LOAD_COUNTRIES;
    constructor() { }
}

export class LoadCountriesFailed implements Action {
    readonly type = LOAD_COUNTRIES_FAILED;
    constructor(public payload: any) {
    }
}

export class LoadCountriesSuccess implements Action {
    readonly type = LOAD_COUNTRIES_SUCCESS;
    constructor(public payload: any) {
    }
}

export class LoadSeoBySlug implements Action {
    readonly type = LOAD_SEO_BY_SLUG;
    constructor(public payload: any) { }
}

export class LoadSeoBySlugFailed implements Action {
    readonly type = LOAD_SEO_BY_SLUG_FAILED;
    constructor(public payload: any) {
    }
}

export class LoadSeoBySlugSuccess implements Action {
    readonly type = LOAD_SEO_BY_SLUG_SUCCESS;
    constructor(public payload: any) {
    }
}

export class ChangeLanguage implements Action {
    readonly type = CHANGE_LANGUAGE;
    constructor(public payload: any) { }
}

export class SetActivePage implements Action {
    readonly type = SET_ACTIVE_PAGE;
    constructor(public payload: any) { }
}

export class UpdateBreadCrum implements Action {
    readonly type = UPDATE_BREADCRUM;
    constructor(public payload) { }
}

export class ToggleSidebar implements Action {
    readonly type = TOGGLE_SIDEBAR;
    constructor(public payload) { }
}

export type CommonActions =
    LoadCountries | LoadCountriesFailed | LoadCountriesSuccess |
    LoadSeoBySlug | LoadSeoBySlugFailed | LoadSeoBySlugSuccess |
    ChangeLanguage | SetActivePage | UpdateBreadCrum | ToggleSidebar;
