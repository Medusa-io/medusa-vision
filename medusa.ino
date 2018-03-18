#include <Servo.h>

Servo servo;


int inByte = 0;    

int servoAngle = 0;   //POSIÇÃO DO SERVO
 

void setup() {
  Serial.begin(9600);
  while (!Serial) { ; }
  pinMode(14, OUTPUT);
  pinMode(12, OUTPUT);
   

  servo.attach(12); //D4

  servo.write(0);

}

void loop() {
  if (Serial.available() > 0) {
    inByte = Serial.read(); delay(5);
    if(inByte == '1') {
      digitalWrite(14, HIGH);   
      servo.write(180);

      delay(5000);
        
    }
  }

  digitalWrite(14, LOW); 
  servo.write(0);



}
