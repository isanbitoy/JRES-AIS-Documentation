
|       |      |
| :---: | :--- |
| Use case name | add subject |
| Scenerio | principal add new subject |
| Triggering event | when there is new mandated subject |
| Brief description | when the principal add subject for a specific class/section |
| Actors | principal |
| Related use case | assign student |
| Stakeholders | adviser |
| Preconditions | mandated request subject record must be created |
| Postconditions | new subject record will be created</br> new student subject grade record must be created</br> new subject teacher must be created |
| Flow of activities | <table> <thead><tr><th>Actor</th> <th>System</th></tr></thead> <tbody><tr><td>1. principal receive subject request from DepEd</br>2. principal add subject to the system</td><td>1.1 add subject to the system</td></tr></tbody> </table> |
| Exception conditions | if the subject already exist the principal will update the subject information record |
</br>

|       |      |
| :---: | :--- |
| Use case name | modify subject description |
| Scenerio | principal modifies subject description |
| Triggering event | after the principal add subject |
| Brief description | when the principal create class description to the subject |
| Actors | principal |
| Related use case | |
| Stakeholders | |
| Preconditions | subject must be created |
| Postconditions | new subject description record will be created |
| Flow of activities | <table> <thead><tr><th>Actor</th> <th>System</th></tr></thead> <tbody><tr><td>1. principal check the created subject</br>2. principal create subject description</td><td>1.1 display created subjects</br>2.1 update subject information</br>2.2 save created subject description</td></tr></tbody> </table> |
| Exception conditions | |
</br>

|       |      |
| :---: | :--- |
| Use case name | assign subject to teacher |
| Scenerio | principal assign the subject to a teacher |
| Triggering event | when new subject is created |
| Brief description | when the principal assigns teacher to the created subject |
| Actors | principal |
| Related use case | generate assigned subject list |
| Stakeholders | |
| Preconditions | created subject must be created |
| Postconditions | new subject teacher record must be created |
| Flow of activities | <table> <thead><tr><th>Actor</th> <th>System</th></tr></thead> <tbody><tr><td>1. principal checks created subject list</br>2. principal check available teacher</td><td>1.1 display created subjects</br>2.1 display teacher list</br>2.2 update subject teacher record list</td></tr></tbody> </table> |
| Exception conditions | |
</br>

|       |      |
| :---: | :--- |
| Use case name | assign subject to class |
| Scenerio | principal assign the subject to a class |
| Triggering event | when principal already assigned teacher to a created subject |
| Brief description | when the principal assigns subject to a specific class/section |
| Actors | principal |
| Related use case | |
| Stakeholders | |
| Preconditions | subject record must be created |
| Postconditions | new class information must be created |
| Flow of activities | <table> <thead><tr><th>Actor</th> <th>System</th></tr></thead> <tbody><tr><td>1. principal checks class information</br>2. principal add subject to a class</td><td>1.1 display class information</td></tr></tbody> </table> |
| Exception conditions | if the section/class is in honor list |
</br>

|       |      |
| :---: | :--- |
| Use case name | assign subject to a teacher |
| Scenerio | principal assign the subject to a teacher |
| Triggering event | when principal assigned subject to a teacher |
| Brief description | when the principal assigns subject to a teacher |
| Actors | principal |
| Related use case | assign subject to a teacher |
| Stakeholders | |
| Preconditions | subject record must be created</br> subject teacher record must be created |
| Postconditions | new teacher record must be created |
| Flow of activities | <table> <thead><tr><th>Actor</th> <th>System</th></tr></thead> <tbody><tr><td>1. principal finalize subject teacher record</br>2. principal print finalized subject teacher record</td><td>1.1 display subject teacher information record</td></tr></tbody> </table> |
| Exception conditions | if teacher resigned or commit to leave, the principal reassign subject to another available teacher |