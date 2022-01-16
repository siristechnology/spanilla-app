# Spanilla App

[![Android Apk - Build & Release](https://github.com/siristechnology/spanilla-app/actions/workflows/android-build-release.yml/badge.svg)](https://github.com/siristechnology/spanilla-app/actions/workflows/android-build-release.yml)
[![DeepScan grade](https://deepscan.io/api/teams/5348/projects/19881/branches/523512/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=5348&pid=19881&bid=523512)

<br/>
<div>
<a href='https://play.google.com/store/apps/details?id=com.siristechnology.spanilla' target='_blank' rel="noopener noreferrer"><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' height="80"/></a>
</div>

  
## Latest screenshot

<div>
<img src="assets/images/screenshot-1.png" alt="screenshot-1" width="300" style="margin-right:20px"/>
<img src="assets/images/screenshot-2.png" alt="screenshot-2" width="300"/>
</div>

## How to Run Android app locally

-   Install Android Studio
-   Install node (14.x), yarn (1.x)
-   Run Android emulator. (from Android Studio or Genymotion)
-   Run Metro bundler. `yarn start`
-   Run Android app. `yarn android`

## How to Run IOS app locally

-   Install XCode
-   Install node (14.x), yarn (1.x)
-   Run Metro bundler. `yarn start`
-   Install Pod depedencies. `pod install --repo-update`
-   Run Android app. `yarn ios`

## How to Run Detox test on Android Emulator

-   Install detox cli. `yarn global add detox-cli`
-   Build apk for testing. `yarn build-detox-android`
-   Run detox test on apk. `yarn test-detox-android`

## Tips

-   Run `yarn refresh` to reload android app quickly without rebuilding
-   Run `yarn reset` to reset package manager cache
-   Run `adb uninstall com.siristechnology.nepaltodayapp` to uninstall app from the android simulator
-   Run `adb logcat` to view android emulator logs in terminal
