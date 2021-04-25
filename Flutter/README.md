# Envinronment SETUP

----------

Step by step to setup your environment to run android studio emulator without the need to install Android Studio

These instructions are based on this [tutorial.](https://medium.com/@quicky316/install-flutter-sdk-on-windows-without-android-studio-102fdf567ce4)

## Create an dir in your local disk
```
cd C:\
mkdir Android
cd Android
```
1. Set this path (C:\Android) to your ANDROID_HOME environment variable

## Install JDK
Put it inside your Android folder inside a folder with maybe with the name of jdk version, it's up to you
```
C:\Android\openjdk
```
Then set this path to your JAVA_HOME environment variable

## Install Flutter SDK 
Download the [latest](https://flutter.io/docs/get-started/install/windows) version of flutter sdk and create a folder inside Android folder
```
C:\Android\flutter
```
Then add (C:\Android\flutter\bin) to your PATH environment variable

## Install Android command tools
Download the [android sdk](https://developer.android.com/studio/#command-tools)

1. Create the folder sdk inside C:\Android\sdk
2. Extract the tools inside cmdline-tools\latest inside the SDK folder, depending on what version you're trying to install the path might change it.
3. Set this path (C:\Android\sdk) to your ANDROID_SDK_ROOT environment variable
4. Add the paths (C:\Android\sdk) and (:\Android\sdk\cmdline-tools\latest\bin) to your PATH environment variable


## Download Android SDK
```
sdkmanager --list (choose your android version)
sdkmanager "{whatever android version you chose}" Ex: “system-images;android-27;default;x86_64”
sdkmanager “platform-tools”
sdkmanager “build-tools;27.0.3”
sdkmanager “platforms;android-27”
sdkmanager emulator
```

## Config Flutter
```flutter config — -android-sdk C:\Android\```

## Create and run the emulator
```
avdmanager -s create avd -n nexus -k “system-images;android-27;default;x86_64”
flutter emulators --launch nexus
```

## Accept licenses
```flutter doctor --android-licenses```

## Check if its all right
```flutter doctor -v```