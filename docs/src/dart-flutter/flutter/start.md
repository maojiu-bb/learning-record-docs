# 配置开发环境

> 以下是 Windows 下的配置

## 配置 JDK

- 下载 JDK

  在官网下载好 JDK，注意版本不要太高，否则可能不兼容，最好是 jdk8

- 配置环境变量
  - 在系统变量中新增 `JAVA_HOME`, 值为你的 JDK 解压后文件目录
  - 在 Path 变量中新增：
  1. `%JAVA_HOME%\bin`
  2. `%JAVA_HOME%\jre\bin`

## 配置 Android Studio

- 下载 Android Studio

  :::tip
  下载地址(https://developer.android.google.cn/studio/)
  :::

- 配置 sdk

在 SDK Manger 中配置 SDK

![SDK](/image/androidsdk.png)

![SDK](/image/androidsdk2.png)

- 安装插件

在 Plugin 中下载 `Flutter` 和 `Dart` 两个插件

## 配置 Flutter

- 下载 Flutter SDK

根据提示获取对应的 SDK，[Windows SDK](https://flutter.cn/docs/get-started/install/windows#get-the-flutter-sdk)

注意：解压后的文件路径不要有空格

- 配置 SDK 环境变量

在系统变量中的 Path 中新增，值为解压后的 Flutter SDK 的 bin 目录

- 配置 Flutter 国内镜像

```bash
PUB_HOSTED_URL=https://pub.flutter-io.cn
FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
```

在环境变量中的系统变量中添加，等号左边为变量名，右边为变量值

- 检查

在 cmd 命令行中运行 `flutter doctor` 来进行检查，尽量都是 √，根据自己的情况按照提示下载好缺少的项

![doctor](/image/doctor.png)

- 同意 Android 协议

```shell
flutter doctor --android-licenses
```
