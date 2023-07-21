# 运行项目

## Android Studio 中运行

- 在 Android Studio 中导入项目的 android 目录中的 Android

![import](/image/import.png)

- 添加虚拟机

在 Device Manger 中添加设备, 根据提示选择好相应的尺寸，并下载好虚拟系统。

- 点击 run 运行项目

## VS code 中运行

- 在 VS code 中将整个项目导入进去

![flutter](/image/flutter-import.png)

整个项目要编写的代码都在`lib`目录和`pubspec.yaml`文件中

- 在终端中运行

```shell
flutter run -d all
```

- 运行在指定的设备

在 cmd 中查看可用设备

```shell
flutter devices
```

选择要运行设备的名称

```shell
flutter run -d emulator-5554
```
