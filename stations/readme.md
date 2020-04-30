# Raspberry Pi Simulating Train Station

The following is the flow used in the Raspberry Pi which would be installed in a train station
![alt text][logo]

[logo]: ./station-flow.JPG "Logo Title Text 2"

## BeaconScanner node

The BeaconScanner node scans for all bluetooth signals, necessary for our simulation using a Microbit bluetooth signal.

## Filter Microbit

Due to the presence of many bluetooth emmitting devices, the code in this node filters the signal ID and uses only the signal by the corresponding microbit installed. This microbit simulates the button being pressed at the station, with a signal with value of either 1 or 0 being emmitted and captured by the Raspberry Pi. This code can be found in filter_microbit.js

## Set Val

Once the correct signal has been filtered, the Raspberry Pi makes an API call to Firebase to update the status of the station button.
API endpoint: https://smrt-a02d5.firebaseio.com/station/1/1.json

The first **1** represents the station number, meaning station 1 in this case.
The second **1** represents the door number, either 1 for the first door or 2 for the second door.
