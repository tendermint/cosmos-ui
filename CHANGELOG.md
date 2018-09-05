# Changelog

We use this changelog to document notable changes to the project.

The changelog format is [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.2.23]

- fix validator link on delegation transaction not using vue-router @faboweb

## [0.2.22]

- fix unbonding transaction not being recognized @faboweb
- fixed color not being passed correctly to unknown transaction @faboweb
- fix validator link on transaction not using vue-router @faboweb

## [0.2.21]

- update TmPageHeader to allow for new voyager toolbar designs @okwme
- tx reduced from 100% height @okwme
- fix moniker bug that prevented stake txs from showing @okwme

## [0.2.20]

- fix bad asset location @faboweb
- fix bad asset location (cookieconsent) @okwme

## [0.2.19]

- Adjust TmLiTransaction to the new transaction format @faboweb @jbibla

## [0.2.18]

- Removed transition from <tm-list-item> @okwme

## [0.2.17]

- Toggle Color Fix @okwme

## [0.2.16]

- Min and Max to TmField Bug @okwme

## [0.2.15]

- Min and Max to TmField @okwme

## [0.2.14]

### Added

- Component previews with `yarn serve`

## [0.2.13]

### Changed

- Modified TmBlock to help w Voyager circle testing @okwme

### Fixed

- Fixed `TmModalError` having redundant button code @nylira
- Mutate props during test bug @okwme
- Fixed update bug @okwme

## [0.2.12]

### Fixed

- Fixed `TmModalError` not having the current URL. @nylira
- Fixed `TmFormGroup` wrong label variable and text alighment issue. @nylira
- Updated tx format @okwme

## [0.2.11]

### Added

- Added common/TmDataEmpty as `TmDataEmpty` @okwme
- Added common/TmDataLoading as `TmDataLoading` @okwme
- Added common/LiTransaction as `TmLiTransaction` @okwme
- Added common/TmBlock as `TmBlock` @okwme
- Added common/TmBlocks as `TmBlocks` @okwme
- Added common/TmModalError as `TmModalError` @nylira

### Changed

- Improved testing around TmTextMarkdown @okwme

## [0.2.10]

### Added

- Added common/NiTextContainer as `TmTextContainer` @nylira
- Added common/NiMdText as `TmTextMarkdown` @nylira

### Changed

- Alphabetically sorted components in `.src/index.js` @nylira
- Improves the border color of `--primary` buttons. @nylira

## [0.2.9]

### Added

- Added `./src/index.js` to support `import` @nylira
- Added a README and CHANGELOG @nylira
- Added @nylira/vue-page-header as `TmPageHeader` @okwme
- Added @nylira/vue-notifications as `TmNotifications` @okwme
- Added @nylira/vue-countdown as `TmCountdown` @okwme
- Added @nylira/vue-key-value(s) as `TmKeyValue(s)` @okwme
- Added @nylira/vue-field as `TmField` @okwme
- Added @nylira/vue-form-msg as `TmFormMsg` @okwme
- Added @nylira/vue-module(s) as `TmModule(s)` @okwme
- Added common/NiBarDiscrete as `TmBarDiscrete` @okwme
- Added common/NiListItem as `TmListItem` @okwme
- Added @nylira/vue-button as `TmBtn` @okwme
- Added @nylira/vue-field as `TmField` @okwme
- Added common/NiDataMsg as `TmDataMsg` @okwme
- Added common/NiFieldGroup as `TmFieldGroup` @okwme
- Added common/NiFormGroup as `TmFormGroup` @okwme
- Added common/NiFormStruct as `TmFormStruct` @okwme
- Added common/NiPage & common/NiPageFooter as `TmPage` & `TmPageFooter` @okwme
- Added common/NiPart as `TmPart` @okwme
- Added common/NiTabBar as `TmTabBar` @okwme
- Added common/NiToolBar as `TmToolBar` @okwme
- Added `TmCookieConsent` @nylira

### Changed

- Used relative link for `TmListItem` to `TmBtn` @okwme
- Updated to consistent PascalCase naming @okwme
- Updated TmPageHeader Snapshots which were out of date for some reason @okwme

### Fixed

- `TmListItem` tests were failing w null props @okwme
- There were a coupld ni- prefixes remaining in TmField @okwme
