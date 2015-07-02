
#Brainwave Biofeedback
#Project Overview
**Our Team**:

- Angeliki Beyko
- Kim Gerst
- Susan Greve
- Nora Helf
- Emi Lyman
- Jasmine Russell

##What We Measured
###Meditation Levels (Blue Scale Colors)

- Gross Meditation (0-51)
- Subtle Meditation (52-102)
- Bliss Meditation (103-153)
- I-ness Meditation (154-204)
- Objectness Meditation (205-255)

###Attention Levels (Red Scale Colors)

- None (0-42.5)
- Focused Attention (42.6-85)
- Sustained Attention (86-127.5)
- Selective Attention (127.6-170)
- Alternating Attention (171-212.5)
- Divided Attention (212.6-255)

##How We Did It

- To collect data: [Arduino](http://www.arduino.cc/) and Star Wars EEG Headset
- To pull data off Arduino: [Node.js](https://nodejs.org/)
- To visualize data: Javascript and [D3](http://d3js.org/)
- To stream data to webpage: [Socket.io](http://socket.io/)

#Installation & Setup

##Pre-requisites
1. You have installed the [Arduino Software (IDE)](https://www.arduino.cc/en/Main/Software)
2. You have installed [Node.js](https://nodejs.org)
##Program the Arduino
1. Download the latest release of the [Arduino Brain Library](https://github.com/kitschpatrol/Brain/releases) as a zip file
2. From the Arduino IDE, import the Brain Library. From the **Sketch** menu, select **Import Library...**, then **Add Library...** and select the zip file that you downloaded in step 1.
3. For this project we used one of the examples provided with the Brain Library (https://github.com/kitschpatrol/Brain/blob/master/examples/BrainSerialTest/BrainSerialTest.ino)[https://github.com/kitschpatrol/Brain/blob/master/examples/BrainSerialTest/BrainSerialTest.ino]
```
code
```
##Running the Server
##Viewing the Web Page

#Other References and Notes
[http://www.instructables.com/id/How-to-hack-EEG-toys-with-arduino/](http://www.instructables.com/id/How-to-hack-EEG-toys-with-arduino/)

##Arduino Code Used
https://github.com/kitschpatrol/Brain

200 means there is an issue with the connection. You will not see eSense values (attention/meditation) unless you have 0 where you have 200.

Signal Strength | Attention | Meditation
0 - 255 for each

The Force Trainer, unlike the Mindflex, only outputs the 3 values, not all 11.

[http://robotic-controls.com/book/export/html/13](http://robotic-controls.com/book/export/html/13)

[http://en.wikipedia.org/wiki/Altered_level_of_consciousness](http://en.wikipedia.org/wiki/Altered_level_of_consciousness)

Five Stages of Meditation:

[http://www.swamij.com/five-stages-meditation.htm](http://www.swamij.com/five-stages-meditation.htm)

Technology Used:
[http://en.wikipedia.org/wiki/Comparison_of_consumer_brain%E2%80%93computer_interfaces](http://en.wikipedia.org/wiki/Comparison_of_consumer_brain%E2%80%93computer_interfaces)

#What
Electroencephalography (EEG) is a non-invasive method of obtaining recorded brain activity along the scalp. Through the utilization of electrodes outside of the scalp, brain activity is communicated via electrical impulses providing measurement surrounding data insights such as brain rest state, attention and meditation.  
 
Alternative to EEG technology, utilizing the Star Wars Force Trainer (based NeuroSky chips) provides an affordable alternative to capture of electrical brain signals on a scale range of 0-255. Lower scale points refer to the absence, or minimal existence, of data—while upper range figures represent higher intensity data points.
 
Performance metrics: Meditation and Attention.
 
Meditation Levels (Blue Scale Colors)
Level 1 Gross Meditation concept surrounding maintaining meditation toward a specific thought or area of concentration. Hex Color: 00FFFF (Scale Range): 0-51
 
Level 2 Subtle Meditation concept surrounding meditation including the awareness of involving objects and physical form. Hex Color: 33FFFF (Scale Range): 52-102
 
Level 3 Bliss Meditation concept involving the underlying concepts of gross meditation and subtle meditation to an awareness state of peace and simplicity. Hex Color 66FFFF (Scale Range): 103-153
 
Level 4 I-ness Meditation concept surrounding awareness of the individual meditator. Singleness “I-ness” Hex Color: 99FFFF (Scale Range): 154-204
 
Level 5 Objectness Meditation concept surrounding the deepest form of meditation—absence of awareness to objects, surrounding and individual. (Scale Range) 205-255 
Attention Levels (Orange Scale Colors)
http://en.wikipedia.org/wiki/Attention 
None: Lowest Attention Level (Scale Range): 0-42.5
Focused Attention: Ability to respond to an individual visual or stimuli (Scale Range): 42.6-85
Sustained Attention: Ability to maintain a consistent behavioral response (Scale Range): 86-127.5
Selective Attention: The ability to maintain concentration in the midst of conflicting stimuli (Scale Range): 127.6-170
Alternating Attention: Ability to shift individual focus (Scale Range): 171-212.5
Divided Attention: The highest level of attention and ability to respond to multiple tasks or demands. (Scale Range): 212.6-255
