import 'package:flutter/material.dart';
import 'dart:math';

// start app: 
// cd /Users/henryquillin/Desktop/Repos
// export PATH="$PATH:`pwd`/flutter/bin" 
// cd flutter-demo
// cd flutterdemo
// flutter run -d chrome  

class FadeInDemo extends StatefulWidget {
  _FadeInDemoState createState() => _FadeInDemoState();
}

class _FadeInDemoState extends State<FadeInDemo> {
  double opacity = 0.0; // state variable for the animated property
  @override
  Widget build(BuildContext context) {
    return Column(children: <Widget>[
      TextButton(
        child: Text(
          'Fade',
          style: TextStyle(color: Colors.blueAccent),
        ),
        onPressed: () => setState(() { // trigger for animation 
          opacity = 1;
        }),
      ),
      //With implicit animations, you can animate a widget property by 
      //setting a target value; whenever that target value changes,
      // the widget animates the property from the old value to the new one.
      AnimatedOpacity(
        duration: Duration(seconds: 2),
        opacity: opacity,
        child: Column(

          children: <Widget>[
            Text('ProjectNEWM!!!!!!')
          ],
        ),
      )
    ]);
  }
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        body: Center(
          child: FadeInDemo(),
        ),
      ),
    );
  }
}

// DEMO 2 -------------------

//this code does the following: 
// Generate new values for color, borderRadius, and margin 
// whenever the user clicks the Change button.
// Animate the transition to the new values for color, borderRadius,
//  and margin whenever they are set.



const _duration = Duration(milliseconds: 400);

double randomBorderRadius() {
  return Random().nextDouble() * 64;
}

double randomMargin() {
  return Random().nextDouble() * 64;
}

Color randomColor() {
  return Color(0xFFFFFFFF & Random().nextInt(0xFFFFFFFF));
}

class AnimatedContainerDemo extends StatefulWidget {
  _AnimatedContainerDemoState createState() => _AnimatedContainerDemoState();
}

class _AnimatedContainerDemoState extends State<AnimatedContainerDemo> {
  late Color color;
  late double borderRadius;
  late double margin;

  @override
  void initState() {
    super.initState();
    color = Colors.deepPurple;
    borderRadius = randomBorderRadius();
    margin = randomMargin();
  }

  void change() {
    setState(() { // this is the function that gets called when the user clikcs the change button
      color = randomColor();
      borderRadius = randomBorderRadius();
      margin = randomMargin();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          children: <Widget>[
            SizedBox(
              width: 128,
              height: 128,
              child: AnimatedContainer( // here is the widget container that defines an implicit animation
                margin: EdgeInsets.all(margin),
                decoration: BoxDecoration(
                  color: color,
                  borderRadius: BorderRadius.circular(borderRadius),
                ),
                duration: _duration,// this defines the duration of the animation
              ),
            ),
            ElevatedButton(
              child: Text('change'),
              onPressed: () => change(), // this is the trigger for animation 
            ),
          ],
        ),
      ),
    );
  }
}

class MyApp2 extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: AnimatedContainerDemo(),
    );
  }
}

void main() {
  // runApp(
  //   MyApp()
  // );
  runApp(
    MyApp2()
  );
}