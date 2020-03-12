int i;
void setup() {
   Serial.begin(9600);
}

void loop() {
  for(i=0;i<10;i++)
  {
  Serial.print("Sensor1:");
  Serial.print(",");Serial.print(" ");Serial.print(i);Serial.print(" ");
  Serial.print(",");Serial.print(" ");Serial.print("Sensor2:");
  Serial.print(",");Serial.print(" ");Serial.print(2*i);Serial.print(" ");
   Serial.print(",");Serial.print(" ");Serial.print("Sensor3:");
    Serial.print(",");Serial.print(" ");Serial.println(3*i);
  delay(1000);
  }

}
