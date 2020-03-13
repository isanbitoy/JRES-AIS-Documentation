
|       |      |
| :---: | :--- |
| Use case name | view student information |
| Scenerio | guidance clerk view student that enrolled |
| Triggering event | guidance clerk recieves list of enrolled students |
| Brief description | guidance clerk checks student information after enrollment |
| Actors | guidance clerk |
| Related use case | assign student |
| Stakeholders | |
| Preconditions | there must be enrolled student</br> student must pass the specific grade level |
| Postconditions | verified student information to be used for adding student into a class |
| Flow of activities | <table> <thead><tr><th>Actor</th> <th>System</th></tr></thead> <tbody><tr><td>1. guidance clerk check enrolled student</br>2. guidance clerk verify passed student</td><td>1.1 display all enrolled students</br> 2.1 update student school information</td></tr></tbody> </table> |
| Exception conditions | student must repeat the grade level if he/she has a failing grade  |
</br>

|       |      |
| :---: | :--- |
| Use case name | create new class |
| Scenerio | guidance create a class in the system |
| Triggering event | guidance receive new class information |
| Brief description | when the guidance create a new class for the school |
| Actors | guidance clerk |
| Related use case | view student information |
| Stakeholders | |
| Preconditions | school year must be updated |
| Postconditions | new class record must be created for a specific school year |
| Flow of activities | <table> <thead><tr><th>Actor</th> <th>System</th></tr></thead> <tbody><tr><td>1. guidance receive list of class for the school year</br>2. guidance verify class</br> 3. guidance delete class from class list</td><td>1.1 display list of class information</br> 2.1 delete class record </br>3.1 create new class record</td></tr></tbody> </table> |
| Exception conditions | if class have assigned students and subject it cannot be deleted  |
</br>

|       |      |
| :---: | :--- |
| Use case name | assign student into class |
| Scenerio | guidance assign student to a specific section |
| Triggering event | when the class has finalize list of class |
| Brief description | when the guidance add/populate student into a class  |
| Actors | guidance clerk |
| Related use case | view student information |
| Stakeholders | |
| Preconditions | student must be verified |
| Postconditions | class list must be populated |
| Flow of activities | <table> <thead><tr><th>Actor</th> <th>System</th></tr></thead> <tbody><tr><td>1. guidance clerk check the verified student information</br>2. guidance assign student into a class</td><td>1.1 display verified students</br> 2.1 create new class registration</td></tr></tbody> </table> |
| Exception conditions | |
</br>

|       |      |
| :---: | :--- |
| Use case name | assign teacher into class |
| Scenerio | guidance assign teacher to a specific class |
| Triggering event | when the class is created |
| Brief description | when the guidance assign adviser/teacher to a class |
| Actors | guidance clerk |
| Related use case | create new class |
| Stakeholders | |
| Preconditions | teacher must be available</br> class must be created</br> class must be populated |
| Postconditions | new class advisory list record will be created |
| Flow of activities | <table> <thead><tr><th>Actor</th> <th>System</th></tr></thead> <tbody><tr><td>1. guidance check available teacher</br>2. guidance assign teacher into a class</td><td>1.1 display available teacher</br> 2.1 display class and assign adviser</td></tr></tbody> </table> |
| Exception conditions | if adviser commit to leave or resign when the class starts, advisory list must be updated |
</br>

|       |      |
| :---: | :--- |
| Use case name | modify class list |
| Scenerio | guidance modify class details |
| Triggering event | guidance clerk add student and assign teacher to a class |
| Brief description | when the guidance assign adviser/teacher to a class |
| Actors | guidance clerk |
| Related use case | create new class |
| Stakeholders | |
| Preconditions | teacher must be available</br> class must be created</br> class must be populated |
| Postconditions | final class information created |
| Flow of activities | <table> <thead><tr><th>Actor</th> <th>System</th></tr></thead> <tbody><tr><td>1. guidance check if there are changes in class information</br>2. guidance save the final class information</td><td>1.1 display class information</br> 2.1 save information</td></tr></tbody> </table> |
| Exception conditions | created class information cannot be updated/deleted |
</br>

|       |      |
| :---: | :--- |
| Use case name | prints class list |
| Scenerio | guidance prints a class/section list |
| Triggering event | after the created class has been finalized |
| Brief description | class information will be posted in the respective classroom |
| Actors | guidance clerk |
| Related use case | create new class |
| Stakeholders | |
| Preconditions | finalized class information |
| Postconditions | final class list and adviser record will be submitted |
| Flow of activities | <table> <thead><tr><th>Actor</th> <th>System</th></tr></thead> <tbody><tr><td>1. guidance check class information</br>2. prints class records and be submitted to the adviser</td><td>1.1 display class information</br> 2.1 print class information</td></tr></tbody> </table> |
| Exception conditions | |